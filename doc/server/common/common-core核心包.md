# common-core核心包
:::tip
包含项目执行时必须的一系列注解、枚举、基础类、基础接口、基础异常等相关对象定义，是系统开发和运行必不可少的一个模块。
:::
## 注解

- `BigField` 数据库大字段标识注解，详细使用见[MyBatis-Plus扩展模块](MyBatis-Plus扩展.md)
- `CountTime` 获取方法执行的时间
- `Dict` 字典翻译注解
- `DictTranslation` 字典翻译标识注解
- `EncryptionField` 数据库加密字段注解，详细使用见[数据权限模块](../starter/数据权限.md)
- `Idempotent` 幂等性拦截注解，用于拦截前端重复提交的请求，详细见[幂等处理器模块](幂等处理器.md)
- `IgnoreAuth` 忽略鉴权注解，可以加在`Controller`的方法或类上，访问时不在进行鉴权，加在非`Controller`的地方无效，详细使用见[登录鉴权模块](../starter/登录鉴权.md)
- `JobLog` 定时任务日志记录注解，控制是该定时方法是否需要记录日志，详细使用见[Quartz定时任务模块](../starter/Quartz定时任务.md)
- `NestedPermission` 嵌套权限控制注解，需要配合Permission注解一起使用，主要用来解决在`@Permission`声明的方法调用其他子方法时，
忽略子方法执行时的数据权限拦截，详细使用见[数据权限模块](../starter/数据权限.md)
- `Permission` 权限控制注解，可以添加到方法和类上，添加后所执行的SQL会进行数据权限相关的控制，详细使用见[数据权限模块](../starter/数据权限.md)
- `OperateLog` 操作日志记录注解，`AOP`处理类自动拦截，记录对应的操作行为，可以进行重复的标注，详细使用见[审计日志模块](../starter/审计日志.md)
- `QueryParam` 查询参数构造注解，通过标注在实体类，可以让实体类转换成`MyBatis-Plus`的`QueryWrapper`查询构造器，详细使用见[超级查询器模块](超级查询器.md)
## 常量枚举类

- `CommonCode` 公共常量，包括公共字段名称、删除标记字段名一类的常量
- `CommonErrorCode` 公用错误码常量
- `ServletCode` Servlet常量
- `WebHeaderConst` web请求头常量
## 基础类

- `UserDetail` 用户类，只包含id、name，username三个核心属性，是`SecurityUtil`工具类返回的对象，如需要获取更详细的用户信息，需要自行查询
- `BaseDto` 基础Dto类，包含主键，创建时间，最后修改时间，版本号四个属性
- `KeyValue` key/value键值对象
- `LabelValue` 通常用于返回给前台用来展示下拉列表的数据结构
- `PageParam` 分页查询参数
- `OrderParam` 排序参数
- `ErrorResult` 错误响应类，业务出现异常后返回的响应类，携带链路追踪ID `trackId`，可以用于追踪整个错误的请求链路，详见[日志扩展模块](日志扩展.md#链路追踪)
- `ResResult` 正常响应类
- `PageResult` 分页响应类
- `Res` 返回工具类，可以快捷构造各种正常响应类
## 基础接口

- `EntityBaseFunction` 数据库entity基础声明方法，实现该接口将会拥有一个转换成Dto的方法
- `ParamService` 参数获取服务(必须要有实现类，并注入到Spring容器中)，见[基础服务模块](/doc/server/service/基础服务.md)
- `SystemKeyValueService` key/value键值对象读写接口服务(必须要有实现类，并注入到Spring容器中)，见[基础服务模块](/doc/server/service/基础服务.md)
- `UserDetailService` 用户信息接口服务(必须要有实现类，并注入到Spring容器中)，用来进行一些用户信息的公共查询操作，主要用在不能依赖`身份识别与访问管理（IAM）`的模块
## 公共异常
- `BizException` 业务异常基类，常见的业务异常可以继承它
- `DataNotExistException` 数据不存在异常
- `ErrorCodeRuntimeException` 错误码异常基类
- `FatalException` 致命异常基类，出现此异常意味着程序遇到了致命错误，无法继续执行下去，业务流程被中断
- `OptimisticLockException` 乐观锁异常
- `RepetitiveOperationException` 重复操作异常，常见于幂等控制
- `SystemException` 系统类异常基类，出现此异常说明系统遇到了问题
- `BizException` 业务异常基类，出现此异常说明业务出现异常，但不是致命异常，还可以继续进行运行
- `UnSupportOperateException` 不支持的操作异常
- `UnSupportReadException` 不支持的读取操作
- `ValidationFailedException` 参数验证失败异常，作为的`BizException`异常的子类
## 基础工具类

- `BigDecimalUtil` 大数工具类，处理`BigDecimal`类型的简单加减乘除等操作
- `CertUtil` 证书工具类
- `CollUtil` 集合工具类，扩展自`hutool`的工具类
- `FileUtil` 文件操作工具类，扩展自`hutool`的工具类
- `LocalDateTimeUtil` `JDK8`时间工具类，扩展自`hutool`的工具类
- `RegexUtil` 正则验证工具类，提供一些默认的校验方法，例如校验邮箱号、手机号等
- `ResultConvertUtil` 结果转换工具类工具类，主要用于`Dto`与`Entity`之间的转换
- `StreamUtil` 流工具类，包含复制流到字符串方法
- `TreeBuildUtil` 构建数据树工具类，见[TreeBuildUtil使用说明](#TreeBuildUtil使用说明)
- `ValidationUtil` 属性校验工具类
## 枚举和其他
- `ValidationGroup` 校验分组标记，提供了增加、编辑、删除、查询四种常见场合的分组类标识

## TreeBuildUtil使用说明
> 功能是将一个`List`列表类型的数据，转换成树状列表的结果
### 对象结构要求
需要有主键（id）、关联父类的主键（pid）、包含叶子节点的列表（Children），这三个字段是必须存在的，举个栗子：
```java
public class RegionDto {

    @Schema(description = "主键编码")
    private Integer id;
     @Schema(description = "上级行政区域id")
    private Integer pid;
    @Schema(description = "名称")
    private String name;
    @Schema(description = "下一级行政区域")
    private List<RegionDto> children;
}
```
### 参数说明
- `list` 要进行转换的列表
- `pid` 一级节点的父级id，通常为null
- `getId` 获取主键的方法方法引用
- `getPid` 获取关联父级节点主键的方法引用
- `setChildren` 设置子节点列表的方法引用
- `comparator` 节点顺序的排序规则
### 示例
```java
/**
 * 递归建树
 *
 * @param permissions 查询出的菜单数据
 * @return 递归后的树列表
 */
private List<PermMenuDto> recursiveBuildTree(List<PermMenuDto> permissions) {
    return TreeBuildUtil.build(permissions, null, BaseDto::getId,PermMenuDto::getParentId,PermMenuDto::setChildren,Comparator.comparingDouble(PermMenuDto::getSortNo));
}
```

## 主要依赖

- `lombok`
- `commons-lang3`
- `jackson-databind` `jackson`数据绑定
- `commons-collections4`
- `commons-text`
- `commons-codec`
- `commons-io`
- `guava` Google 出的 Guava 是Java 核心增强的库,应用非常广泛。
- `hutool` 国产工具类
- `hibernate-validator` 属性校验
- `javax.servlet-api`
- `swagger-annotations` `swagger3` 注解依赖
- `springdoc-openapi-common` `swagger3` 的实现`springdoc`框架，引入这个包是为了引入相关依赖
- `slf4j-api` 日志
