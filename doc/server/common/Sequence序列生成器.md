## sequence序列生成器
### 功能
通过生成一个单调递增的队列，通过`redis`、`jdbc`、`Mongo`生成一个区间，每次获取号码时本地进行生成，区间号码用完后生成并跳到新的区间。重启项目，也会跳到下个区间，预防重复。
> 注意：不适用分布式环境，因为多机器同时运行时，是程序本地进行发号，分布式不出问题的话，需要号段设得跟步长一样，然后加分布式锁  。

### 使用

1. 配置 
```yaml
bootx.common.sequence:
  # 队列区间存储类型
  store_type: redis 
  # 使用redis情况下redisKey前缀
  key_prefix: 'Sequence:'
  # 步长,每次增加的步数
  step: 1
  # 区间步长
  range_step: 1000
  # 区间起始位置
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

### 核心类

- `Sequence` 序列号生成器接口
- `DefaultRangeSequence` 序列号区间生成器接口默认实现
- `SeqRangeManager` 区间管理器接口
- `RedisSeqRangeManager` `redis`区间管理器实现
- `JdbcSeqRangeManager` `jdbc`数据库方式区间管理器实现
- `MongoSeqRangeManager` `mongo`数据库方式
- `SeqRange` 序列号区间对象模型
