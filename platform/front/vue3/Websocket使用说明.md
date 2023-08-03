# Mixin使用
::: tip
基于`vueuse`中的`useWebSocket`进行开发[useWebSocket文档](https://vueuse.org/core/useWebSocket)，
同时提供默认的全局消息通知功能实现`UserGlobalWebSocker`。
:::
## useWebSocket介绍
### 引用
项目中默认已经引入`vueuse`库，通过下述方式进行引入
```javascript
import { useWebSocket } from '@vueuse/core'

const { status, data, send, open, close } = useWebSocket('ws://websocketurl')
```
### 常用参数
- immediate 自动连接（默认启用）
- autoClose 自动关闭连接（默认启用）
- autoReconnect 自动重新连接错误（默认禁用）
- heartbeat 每个给定时间发送一条小消息（心跳）以保持连接处于活动状态（默认禁用）

### 回调函数
- onConnected 连接成功回调
- onDisconnected 关闭连接回调
- onError 错误回调
- onMessage 接收到消息回调

## 用户全局消息通知
::: tip
登录系统后会自动建立一个当前用户的`Websocket`连接，后端可以通过这个连接将信息主动推送给指定用户的前端上，前端组件可以可以根据配置监听不同的信息事件，
类似生产者/订阅者模式
:::

### 使用
导入`WebsocketNotice`组件，使用提供的方法来订阅指定主题的消息，和解除对应主题的订阅。
```javascript
import { publishWsEvent, listenerEvent } from '/@/logics/websocket/WebsocketNotice'
```
### 方法介绍
- publishWsEvent 发布事件
  - key 服务端websocket事件通知类型
  - data 消息内容
- listenerEvent
  - key 服务端websocket事件通知类型，见前端工程`WsListenerEnum`枚举类
  - callback 回调处理方法
- clearEventsByKey 清除指定key所关联的事件监听
  - key 服务端websocket事件通知类型，见前端工程`WsListenerEnum`枚举类
- clearEvent
  - 清除指定事件的监听（一个key可以对应多个回调事件）
### 示例
```javascript
  import { onMounted, onUnmounted } from 'vue'
  import { clearEvent, listenerEvent } from '/@/logics/websocket/WebsocketNotice'
  import { useMessage } from '/@/hooks/web/useMessage'

  const { createMessage } = useMessage()
  // 监听全局事件
  const onGlobalMessage = (msg) => {
    createMessage.info('接收到本页面的全局消息: ' + msg)
  }
  onMounted(() => {
    // 监听 通知消息更新
    listenerEvent('EVENT_TEST_WEBSOCKET', onGlobalMessage)
  })
  onUnmounted(() => {
    // 解除监听 通知消息更新  
    clearEvent('EVENT_TEST_WEBSOCKET', onGlobalMessage)
  })
```