# RabbitMQ配置
::: warning
功能实现不全, 请谨慎使用
:::
## 说明
- RabbitMQ的序列化方式进行了配置，使用的项目通用默认序列化方式（不保留数据类型，就是常规的那种json）
- 提供 `RabbitTemplate` 对象的配置
- 通过对队列进行绑定，实现消息接收的分发
- 提供`ConditionalOnRabbit`，用来控制在没启用Rabbit情况下. 不将 @RabbitListener 修饰的监听器注册到Spring容器中
## 配置
```yaml
# 是否启用Rabbit, 需配合 ConditionalOnRabbit 注解使用
bootx.common.rabbit:
  enable: false
```
## 声明队列
常量定义：
```java
public interface PaymentEventCode {

    /** 支付中心交换机 */
    String EXCHANGE_PAYMENT = "service.payment";

    /** 支付完成 */
    String PAY_COMPLETE = "pay.complete";
}
```
配置队列绑定
```java
/**
* 消息队列配置
* @author xxm
* @date 2021/6/25
*/
@Configuration
public class PaymentRabbitMqConfiguration {
    
    /** 支付完成队列 */
    @Bean
    public Queue payCompleted() {
        return new Queue(PaymentEventCode.PAY_COMPLETE);
    }
    /** 交换机 */
    @Bean
    public DirectExchange paymentExchange() {
        return new DirectExchange(PaymentEventCode.EXCHANGE_PAYMENT);
    }
    /** 绑定支付完成 */
    @Bean
    public Binding bindPayCompleted() {
        // 
        return BindingBuilder.bind(payCompleted())
            .to(paymentExchange())
            .with(PaymentEventCode.PAY_COMPLETE);
    }
}
```
### 发送消息
```java
@Slf4j
@Component
@RequiredArgsConstructor
public class PaymentEventSender {
    
    private final RabbitTemplate rabbitTemplate;
    /**
    * 支付完成 事件发布
    */
    public void sendPaymentCompleted(PayResult event) {
        rabbitTemplate.convertAndSend(
            PaymentEventCode.EXCHANGE_PAYMENT,
            PaymentEventCode.PAY_COMPLETE,
            event
        );
    }
}

```
### 接收消息
```java
@Slf4j
@Component
@RequiredArgsConstructor
public class PaymentMessageListener {

    /**
     * 支付成功
     */
    @RabbitListener(queues = PaymentEventCode.PAY_COMPLETE)
    public void payCancel(PayResult payResult) {
        log.info("支付完成事件:{}",payResult);
    }
}
```

## `@ConditionalOnRabbit`使用说明
::: warning
在不使用Rabbit中间件但未去除Rabbit依赖的情况下，通过配置文件中关闭Rabbit选项，同时将这个注解到有`@RabbitListener`标志的类上，让这个对象不注册到Spring容器中,
从而避免`RabbitMQ`进行无限尝试重连服务器，导致项目一直抛出异常，影响开发和使用。
:::

使用实例
```java
/**
 * @author xxm
 * @date 2022/5/30
 */
@Slf4j
@ConditionalOnRabbit
@Component
@RequiredArgsConstructor
public class DemoRabbitMqMessageListener {

    /**
     * 测试MQ消息
     */
    @RabbitListener(queues = "demo.testMq")
    public void payCancel(ResResult<String> hello) {
        log.info("测试MQ消息 :{}", hello);
    }

}
```
