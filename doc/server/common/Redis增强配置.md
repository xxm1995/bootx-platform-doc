## RedisClient 客户端
### 功能

1. 封装`StringRedisTemplate`提供API简单的`RedisClient`操作工具类
2. 封装消息队列功能，支持在不引入其他消息中间件的情况下支持简单的队列功能
3. 封装消息Key过期事件通知机制，可以在不引入支持延时队列的消息中间件的情况下，基本满足对延时队列的需求
4. 提供redis序列化专属配置 `ObjectMapper`对象，会记录被序列化的类型信息, 反序列化时直接能反序列化回原始的对象类型
### 使用
直接注入`RedisClient`对象后就可以进行使用

```java
@Component
@RequiredArgsConstructor
public class InventoryTask {
    private final RedisClient redisClient;
}
```
## Redis简单消息队列
#### 发送消息
使用`RedisClient` 的 `convertAndSend`方法就可以发送消息，使用的序列化方式与缓存的一致，记录了被序列化的类型信息，可以直接反序列回原始对象，使用普通`redisTemplate`，需要注意key加上`TOPIC_PREFIX`前缀
```java
/** 发布订阅消息 */
public void convertAndSend(String topic, Object message){
    // 发布订阅主题前缀为 bootx:redis:topic:
    redisTemplate.convertAndSend(RedisCode.TOPIC_PREFIX+topic,message);
}
```
#### 接受消息
实现`RedisTopicListener`接口，然后实现对应的方法，`onMessage`方法参数可以直接写对象类型，不再需要进行手动的反序列化
```java
/**   
* 测试消息队列
* @author xxm  
* @date 2022/5/7 
*/
@Component
public class T2TopicListener implements RedisTopicListener<KeyValue> {
    // 填写要接收的
    @Override
    public String getTopic() {
        return "test2";
    }
    // 根据
    @Override
    public void onMessage(KeyValue obj) {
        System.out.println(obj);
    }
}
```
## Redis Key过期事件监听
通过注册有存活时间的key，通过key过期的回调事件，可以变相实现了出一个简单的延时队列功能，通常用于sku预占、订单定时关闭等场合，实现 `KeyExpiredListener` 接口即可。
```java
/**
 * 库存解锁事件
 * 样例key: inventory:lock:11251   inventory:lock: 为key前缀, 11251为key值
 * @author xxm
 * @date 2022/5/9
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class InventoryExpiredListener implements KeyExpiredListener {

    // 要监听的key前缀
    @Override
    public String getPrefixKey() {
        return "inventory:lock:";
    }

    // 具体的数据, 通常为数据id, 通过id查询到关联数据进行下一步的修改
    @Override
    public void onMessage(String key) {
        log.info("过期key: "+key);
    }
}

```
**发送**
## 对应类

- `RedisClient` redis请求类
- `RedisClientAutoConfiguration` Redis自动配置类
- `KeyExpiredListener` Key过期事件接口
- `RedisTopicListener` redis消息订阅接口
