# Websocket封装
## 功能
- 提供原生`Websocket` 和 `SpringWebsocker`的连接管理器，支持一个用户同时可以进行多个请求连接
- 可以配置使Websocket只有登录状态下才可以连接
- 提供多种到前台的通知方式，如通知框消息，事件通知等
- 提供用户全局级别的`Websocket` 服务，方便ws消息推送
- 前端封装用户全局消息通知的`Websocket`和 对应的事件总线，通过监听指定事件，可以实现将前台消息推送到不同的页面中
## 使用说明
::: tip
对应前端使用方法见[Websocket使用说明](/platform/front/vue3/Websocket使用说明.md)。

在使用前，需要登录Web管理后台，在`系统配置`中`系统参数`里配置 `websocket服务器地址`。
:::
### 说明
系统中使用`Websocket`推送消息的场景主要有两种，一种是在用户登录的情况下进行推送，一种是在用户未登录的情况下推送。

在用户未登录情况下使用时，
一般需要开发者在前后端约定一种通信`sessionId`的生成方式，来实现双方的通信。
而在用户登录情况下进行通信时，一般是使用用户的`token`作为`sessionId`， 在有些安全性要求比较高的场合，需要校验用户的合法性，通过Spring Websocket提供的能力，
使用Spring拦截机制，对连接进行校验用户的合法性。

### 普通连接
可以通过`javaEE`方式或`Spring Websocket`方式创建一个方法类，然后在选择对应`SpringWebSocketSessionManager`或`WebSocketSessionManager`一个作为会话管理器，
这两个会话管理器提供了新建、删除会话的管理，以及`会话id`与`用户标识id`之间的关联关系。

演示类，见系统中`WebSocketDemo`。通过`WsRes`工具类,可以便捷的创建`WsResult`websocket响应消息类
```java
/**
 * websocket demo
 *
 * @author xxm
 * @date 2022/3/27
 */
@Slf4j
@Component
@ServerEndpoint("/test/ws/{userId}")
public class WebSocketDemo {

    private final WebSocketSessionManager wsManager = new WebSocketSessionManager();

    /** 记录当前在线连接数 */
    private static final AtomicInteger onlineCount = new AtomicInteger(0);

    /**
     * 连接建立成功调用的方法
     */
    @OnOpen
    public void onOpen(@PathParam("userId") Long userId, Session session) {
        wsManager.addSession(String.valueOf(userId), session);
        onlineCount.incrementAndGet(); // 在线数加1
        log.info("有新连接加入：{}，当前在线人数为：{}", userId, onlineCount.get());
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose(Session session) {
        onlineCount.decrementAndGet(); // 在线数减1
        String userId = wsManager.getIdBySession(session);
        wsManager.removeSession(session);
        log.info("有一连接关闭：{}，当前在线人数为：{}", userId, onlineCount.get());
    }

    /**
     * 收到客户端消息后调用的方法
     * @param message 客户端发送过来的消息
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        Long userId = Long.valueOf(wsManager.getIdBySession(session));
        log.info("服务端收到客户端[{}]的消息:{}", userId, message);
        this.sendMessage("响应: " + message, userId);
    }

    @OnError
    public void onError(Session session, Throwable error) {
        log.error("{} 发生错误", session.getId());
        error.printStackTrace();
    }

    /**
     * 服务端发送消息给客户端(单发)
     */
    public void sendMessage(String message, Long userId) {
        try {
            List<Session> sessions = wsManager.getSessionsById(String.valueOf(userId));

            for (Session session : sessions) {
                session.getBasicRemote().sendText(message);
            }
        }
        catch (Exception e) {
            log.error("服务端发送消息给客户端失败：", e);
        }
    }

    /**
     * 服务端发送消息给客户端(全发)
     */
    public void sendMessage(String message) {
        try {
            List<Session> sessions = wsManager.getSessions();
            for (Session session : sessions) {
                session.getBasicRemote().sendText(message);
            }
        }
        catch (Exception e) {
            log.error("服务端发送消息给客户端失败：", e);
        }
    }

}
```
### 授权连接
通常异步事件执行完成，或者接收到了新消息，会主动通知到对应的用户，对于这个场景，前提要求就是需要用户进行登录，因为`websocket`默认是没有提供登录鉴权一系列的能力，
所以只能我们自己进行了实现。目前是提供了`UserWsNoticeService`服务，通过调用它来对用户进行消息的推送，在用户登陆后会自动连接它，退出后后端也会断掉此用户所有的连接。

使用示例
注入`UserWsNoticeService`服务，调用对应方法进行消息的推送，通过`WsRes`工具类,可以便捷的创建`WsResult`websocket响应消息类
```java
@Operation(summary = "用户全局ws消息通知测试")
@GetMapping("/userNotice")
public ResResult<Void> userNotice(Long id){
    // 推送消息通知框
    WsResult<String> result = WsRes.notificationError("警告");
    userWsNoticeService.sendMessageByUser(result,id);
    // 推送消息事件(通常由指定页面进行监听)
    result = WsRes.eventNotice("hello", "cs");
    userWsNoticeService.sendMessageByUser(result,id);
    return Res.ok();
}
```


## 相关类
- `SpringWebSocketSessionManager`  websocket会话管理器 (Spring封装的socket)
- `WebSocketSessionManager`  websocket会话管理器 (java原生socket)
- `UserNoticeWebSocketHandler` 全局用户WS通知实现类
- `UserNoticeWebSocketInterceptor` 全局用户WS通知拦截鉴权
- `WsResult` websocket响应消息类
- `WsRes` websocket 响应工具类，用来快速生成`WsResult`对象
- `UserWsNoticeService` 用户websocket方式发送通知消息服务类，封装了将消息推送给指定用户、用户组、全体发送方法
