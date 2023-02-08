# Mixin使用
## 说明
基于原生WebSocket进行开发，通过引入`WebsocketMixin`可以方便的接入`websocket`，省去编写连接`websocket`时的一些重复的操作
## 使用
1. 导入`WebsocketMixin`组件
2. 在页面中创建一个初始化方法，设置`websocketUrl`连接地址，并初始化websocket连接
  ```javascript
  initWs () {
    // 建立连接对象
    const userId = storage.get(USERINFO).userId
    // 获取ws服务器的地址
    this.getParam('WebsocketServerUrl').then(({ data: url }) => {
      // 设置连接地址
      this.websocketUrl = url + '/test/ws/' + userId
      this.initWebSocket()
    })
  }
  ```
3. 可以调用或重写`WebsocketMixin`中的方法，常用的主要是`websocketSend`和`websocketOnmessage`两个，分别是发送和接收消息
  ```java
  // 发送消息
  push () {
    this.websocketSend(this.msg)
  },
  // 接收消息 重写Mixin中的方法
  websocketOnmessage (e) {
    this.showMsg = e.data
    console.log(e.data)
  }
  ```

> 注意：`WebsocketMixin` 添加了页面销毁时的生命周期函数，在里面将页面的websocket连接进行了关闭

  ```javascript
  destroyed () {
    // 离开页面生命周期函数
    this.closWebsocket()
  }
  ```
## 用户全局消息通知
见 `commons工具配置封装` 中[Websocket封装](/doc/server/common/Websocket封装.md) 中的说明，对应前端代码见`src/websocket/userGlobalWebSocker.js`，
建立连接的时机为登陆后自动触发
