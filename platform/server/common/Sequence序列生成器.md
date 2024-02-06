# sequence序列生成器
::: warning
注意：默认不适用分布式环境，因为程序是本地进行发号，多机器运行时会导致重复。分布式不出问题的话，需要号段的`区间步长`设得跟`步长`一样，然后加分布式锁，保证没事生成序列号都是通过数据中间件产生的。
:::
> 推荐在有严格要求的情况下，将`步长`与`区间步长`设置为一致的长度，保证可靠的生成。
## 功能
通过生成一个单调递增的队列，通过生成一个区间，每次获取号码时本地进行生成，区间号码用完后生成并跳到新的区间。重启项目，也会跳到下个区间，预防出现重复的号码。支持三种数据中间件：
- `redis`
- `jdbc`
- `Mongo`

## 使用
### 参数说明
- `storeType`：队列区间类型，`redis`、`jdbc`、`Mongo`三种
- `keyPrefix`：使用`redis`类型情况下redis存储的Key前缀
- `step`：步长，每执行一次`next()`队列递增多少
- `rangeStep`：区间步长，区间的大小是多少，在区间内进行递增时，是程序本地处理的，如果重启，下次执行`next()`时会跳转到下一个区间
- `rangeStart`：区间开始位置，第一次执行`next()`时是从多少开，默认为0。
### 配置 
```yaml
bootx.common.sequence:
  # 队列区间类型
  store_type: redis 
  # 使用redis存储情况下redisKey前缀
  key_prefix: 'Sequence:'
  # 默认步长
  step: 1
  # 默认区间步长
  range_step: 1000
  # 默认区间起始位置
  range_start: 0
```

2. 使用 
```java
public class TestController {
    private final Sequence sequence;

    @Operation(summary = "发号器")
    @GetMapping("/sequence")
    public ResResult<Void> sequence(){
        // 通过传入业务键获取long 类型的号码,
        long l = sequence.next("cs");
        // 获取string
        String s = sequence.nextValue("cs");
        return Res.ok();
    }
}
```

## 自定义序列生成器
> 在不同的业务场合中，区间起始位置、步长可能会不尽相同，所以支持开发者根据不同的需要，创建出自定义序列生成器，提供`SequenceUtil`工具类用来快速创建队列对象

### 注册到`Spring`容器中

```java
@Bean
public Sequence mySeq(){
    // 创建了一个步长为1, 区间步长为 100, 区间起始位置为0的队列
    return SequenceUtil.create(1,100,0);
}
```
### 创建对象直接使用
```java
public void test(){
    Sequence sequence = SequenceUtil.create(1, 100, 0);
    // TestSeq 是队列名
    sequence.next("TestSeq");
}
```

## 关键类

- `Sequence` 序列号生成器接口，用来生成下一个序列号
- `DefaultRangeSequence` 序列号区间生成器接口默认实现
- `SeqRangeManager` 区间管理器接口，需要实现这个接口，来控制区间的产生和移动
- `RedisSeqRangeManager` `redis`区间管理器实现
- `JdbcSeqRangeManager` `jdbc`数据库方式区间管理器实现
- `MongoSeqRangeManager` `mongo`数据库方式
- `SeqRange` 序列号区间对象类
