## 功能
- 提供原生`Websocket` 和 `SpringWebsocker`的连接管理器，方便管理会话与用户之间的关系
- 可以配置使Websocket只有登录状态下才可以连接
- 提供多种到前台的通知方式，如通知框消息，事件通知等
- 提供用户全局级别的`Websocket` 服务，方便ws消息推送
- 前端封装用户全局消息通知的`Websocket`和 对应的事件总线，通过监听指定事件，可以实现将前台消息推送到不同的页面中
## 使用说明
**后台配置**
登录后台，在`系统配置`中`系统参数`里配置 `websocket服务器地址` 
**后端消息推送**
注入`UserWsNoticeService`服务，调用对应方法进行消息的推送，通过`WsRes`工具类,可以便捷的创建
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
**前端页面监听通知事件**
前端消息总线使用的 `vue-bus`，前端websocket客户端接到事件后，发送到消息总线中，由对应的页面进行监听，用户退出时会自动断开对应的Websock连接
```java
created () {
  this.init()
  // 页面创建监听
  this.$bus.on('cs', data => {
    console.log('事件总线接收消息', data)
  })
},
destroyed () {
  // 页面关闭时解除监听
  this.$bus.off('cs')
}
```

