## 说明
- RabbitMQ的序列化方式进行了配置，使用的项目通用默认序列化方式
- 提供 `RabbitTemplate` 对象
- 通过对队列进行绑定，实现消息接收的分发
## 使用
```java
public interface PaymentEventCode {

    /** 支付中心交换机 */
    String EXCHANGE_PAYMENT = "service.payment";

    /** 支付完成 */
    String PAY_COMPLETE = "pay.complete";
}
```
**发送**
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
**接收**
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
**配置**
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
