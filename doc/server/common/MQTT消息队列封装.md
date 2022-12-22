## 说明
在对接物联网设备时，MQTT是一个非常常见协议，对此，对MQTT操作做一下简单的封装，方便开发时使用

- 提供默认的 `MqttClient` 终端，方便发送消息
- 提供对MQTT消息通知便捷配置方式，方便配置使用
## MQTT服务配置
```yaml
# 项目配置
bootx:
  common: 
    mqtt:
      # 终端id
      client-id: "bootx"
      # QTT服务地址
      url: tcp://127.0.0.1:1883
      # 用户名
      name: 123
      # 密码
      password: 123
      # 自动追加终端id后缀（一个MQTT服务中终端id不能重复）
      auto-client-id-suffix: true
      # 连接超时
      connection-timeout: 30
      # 清理会话
      clean-session: true
      # 自动重连
      automatic-reconnect: true
      # 保活间隔
      keep-alive-interval: 60
```
## MQTT消息发送
向类中注入`MqttClient` 后，直接就可以使用发送消息，
```java
@Tag(name = "mqtt测试")
@RestController
@RequestMapping("/demo/mqtt")
@RequiredArgsConstructor
public class DemoMqttController {
    private final MqttClient client;

    @SneakyThrows
    @Operation(summary = "发送")
    @GetMapping("/send")
    public ResResult<Void> send(String msg){
        ResResult<String> ok = Res.ok(msg);
        client.publish("h1", new MqttMessage(JacksonUtil.toJson(ok).getBytes(StandardCharsets.UTF_8)));
        return Res.ok();
    }
}
```
## MQTT消息接收
首先创建一个实现`IMqttMessageListener`接口的类，然后通过`MqttClient` 进行对MQTT消息监听器进行绑定
```java
@Slf4j
@Service
@RequiredArgsConstructor
public class IotMessageListener implements IMqttMessageListener {
     /**
     * 处理消息 (注意, 不能抛出错误, 否则就接不到消息了)
     */
    @Override
    public void messageArrived(String topic, MqttMessage message){
        String json = new String(message.getPayload(), StandardCharsets.UTF_8);
    }
}
```
**绑定监听器**
```java
@Slf4j
@Configuration
@RequiredArgsConstructor
public class MessageListenerConfiguration {
    private final MqttClient mqttClient;
    private final IotMessageListener iotMessageListener;

    /**
     * 添加监听器
     */
    @PostConstruct
    public void listener(){
        try {
            mqttClient.subscribe("gathering", iotMessageListener);
        } catch (MqttException e) {
            log.error("MQTT添加监听器失败",e);
        }
    }

}
```
## 注意事项

- 实现 `IMqttMessageListener` 接口重写`messageArrived`时，在方法中不可以抛出异常，否则会断开连接，导致无法继续收到新的消息
