### 功能

- 提供`JacksonUtil`工具类，用于需要进行`Jackson`解析的场合
- 提供 `java8` 时间序列化类，在`Jackson`序列化时对`JDK8`新增的时间类进行支持
- 提供`Long` 类型序列化为`String`类型的序列化类，处理前端长整形精度丢失问题
- 提供一个默认的`ObjectMapper`序列化配置，支持`jdk8`，`LongToString`等配置
- 提供 `typeObjectMapper` 序列化配置，记录序列化对象的类型信息
- 提供`Jackson2ObjectMapper`相关配置（`Spring MVC`进行参数和结果转换），支持`jdk8`，`LongToString`等配置
## 注意事项
系统中`ObjectMapper`序列化配置主要分为两类，同时`yml`中对`JackSon`进行的配置会失效，需要进行注意

| Bean名称 | 说明 |
| --- | --- |
| objectMapper | 默认jsckson序列化配置 |
| typeObjectMapper | 带序列化对象的类型信息配置，主要用在Redis相关地方 |

默认的是不记录对象类型的信息
```json
[
    {
        "machine":[
            "0"
        ],
        "count":1000,
        "rule":"0",
        "sum":"12.000",
        "type":"1"
    },
    {
        "machine":[
            "a",
            35
        ],
        "count":100,
        "rule":"1",
        "sum":"35.000",
        "type":"0"
    }
]
```
另一种会记录被序列化对象的类型信息，这种序列化后的json在反序列化的时候，可以直接反序列回原始的对象，通常`redis`相关的序列化方式都是基于这种进行微调，样例如下
```json
[
  "cn.dev33.satoken.session.SaSession",
  {
    "id": "AccessToken:login:session:1477997391729631232",
    "createTime": "1641217240683",
    "dataMap": [
      "java.util.concurrent.ConcurrentHashMap",
      {
        "user": [
          "cn.bootx.common.core.entity.UserDetail",
          {
            "id": "1477997391729631232",
            "name": "测试用户002",
            "username": "test002",
            "admin": false,
            "status": 1
          }
        ]
      }
    ],
    "tokenSignList": [
      "java.util.Vector",
      [
        [
          "cn.dev33.satoken.session.TokenSign",
          {
            "value": "d8cb26ce-53ef-46ce-85f2-b80be6e1fcc9",
            "device": "pc"
          }
        ]
      ]
    ],
    "timeout": "216000000"
  }
]
```
