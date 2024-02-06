# MyBatis-Plus 扩展
## 功能
- 提供`MpBaseEntity`和`MpIdEntity`对象，作为通用数据库实体类的公共父类
- 提供`BaseManager`，作为 `ServiceImpl` 的增强替代
- 提供`MpUtils`工具类，包含获取分页方法和分页对象转换方法
- 配置必备的插件，见`MpConfiguration`
- 结合 `BigField`注解，提供大字段便捷方式排除
- 配置默认ID生成策略为雪花ID方式
- 优化MP插件加载机制
## 新增类型处理器
> Mybatis和Mybatis Plus虽然已经自带了一些字段类型处理器，但针对项目中经常出现的`List<T>`类型，和一些泛型对象的字段，如果直接使用
> 类型处理器，序列化时虽然不会出现问题，但反序列化时，泛型信息会丢失，导致出问题，所以针对这种问题，新增了一些支持序列化泛型信息的
 
- IntegerListTypeHandler `List<Integer>` 的类型转换器类
- JacksonRawTypeHandler Jackson 方式实现转换成 JSON 的类型处理器, 会记录对象属性类型, 通常用于储存不确定对象的属性上，例如: 泛型对象、集合对象、存储的数据是字段类型的子类等
- LongListTypeHandler `List<Long>` 的类型转换器类
- StringListTypeHandler `List<String>` 的类型转换器类

## 数据库基础类
- MpBaseEntity  基础实体类 (带逻辑删除)
- MpDelEntity    基础实体类，继承自MpCreateEntity，然后增加了更新时间和更新人 (真实删除)
- MpCreateEntity  创建实体类，包含创建时间和创建人 (真实删除)
- MpIdEntity     主键实体类 (只包含主键字段)

## 注册插件
对原生的`Mybatis Plus`的插件注册进行增强，可以指定不同插件的先后顺序，用`MpInterceptor`对象将编写的Mp插件进行包装，然后注册到Spring Bean容器中即可，参照如下数据权限的插件注册代码
```java
@Configuration
@RequiredArgsConstructor
public class DatePermConfiguration {

    /**
     * 数据范围权限插件
     */
    @Bean
    public MpInterceptor dataPermInterceptorMp(DataScopeInterceptor dataScopeInterceptor) {
        // 加载优先级为 1
        return new MpInterceptor(dataScopeInterceptor,1);
    }
    /**
     * 查询字段权限插件
     */
    @Bean
    public MpInterceptor selectFieldPermInterceptorMp(SelectFieldPermInterceptor bootxDataPermissionHandler) {
        // 加载优先级为 2
        return new MpInterceptor(bootxDataPermissionHandler,2);
    }
}
```

## 大字段排除
> 一般在分页或者列表查询时，是不需要查询出记录的大字段，为此提供便捷工具类，提供大字段注解`BigField` 和对应处理方法，用于批量查询时排除大字段。

1. 在数据库类中的大字段加上`BigField`注解
    ```java
    public class Client extends MpBaseEntity implements EntityBaseFunction<ClientDto> {
        /** 编码 */
        private String code;
    
        /** 名称 */
        @BigField
        private String name;
    }
    ```
2. 演示`MpBigFieldHandler`快捷工具类的使用说明，需要配合`Query.select`方法进行使用，字段存在长文本注解则在查询时被排除
    ```java
    public List<AlipayConfig> findAll() {
        return lambdaQuery()
                // MpBigFieldHandler::excludeBigField 过滤大字段
                .select(AlipayConfig.class, MpBigFieldHandler::excludeBigField)
                .list();
    }
    ```

## 增强版CURD
1. 创建数据库类，继承`MpBaseEntity`等相关公共父类（非必须项，不继承这个也没问题，体检继承）
    ```java
    @EqualsAndHashCode(callSuper = true)
    @Data
    @TableName("iam_client")
    @Accessors(chain = true)
    public class Client extends MpBaseEntity implements EntityBaseFunction<ClientDto> {
         /** 编码 */
        private String code;
    
        /** 名称 */
        private String name;
    }
    ```
2. 创建Mapper和Manager对象，`BaseManager`是替代`ServiceImpl`的实现，引入Manage对象在是为了不在Service中直接进行数据库相关操作，把数据库操作下沉到Manager层(通常放在dao层中，不单独实现)    
    ```java
    @Mapper
    public interface ClientMapper extends BaseMapper<Client> {
    }
    ```
    ```java
    @Repository
    @RequiredArgsConstructor
    public class ClientManager extends BaseManager<ClientMapper, Client> {
    }
    ```
> 在一次性项目中，为了开发简便，可以直接Service直接继承`BaseManager`，或者直接继承`ServiceImpl`都可以，不用太恪守开发规范。

### Save

```java
// 插入一条记录
T save(T entity);
// 插入（批量）
List<T> saveAll(List<T> list);
// 插入（批量）
boolean saveBatch(Collection<T> entityList, int batchSize);
// 存在更新记录，否插入一条记录
T saveOrUpdate(T entity)
```
### Update

```java
// 根据 ID 选择修改
T updateById(T entity);
// 根据指定字段进行更新
T updateByField(T t,SFunction<T, ?> field, Object fieldValue);
// 根据ID 批量更新
boolean updateAllById(Collection<T> entityList);
// 根据ID 批量更新
boolean updateBatchById(Collection<T> entityList, int batchSize);
```
### Delete

```java
// 根据主键进行删除
boolean deleteById(Serializable id);
// 根据主键集合进行删除
boolean deleteByIds(Collection<? extends Serializable> idList);
// 根据指定字段值进行删除
boolean deleteByField(SFunction<T, ?> field, Object fieldValue)
```
### Find

```java
// 根据主键查询
Optional<T> findById(Serializable id);
// 查询全部
List<T> findAll();
// 根据id集合进行查询
List<T> findAllByIds(Collection<? extends Serializable> idList);
// 根据字段查询列表
List<T> findAllByField(SFunction<T, ?> field, Object fieldValue);
// 根据字段集合查询列表
List<T> findAllByFields(SFunction<T, ?> field, Collection<? extends Serializable> fieldValues);
```
### Page

```java
// 无条件分页查询
<E extends IPage<T>> E page(E page);
// 条件分页查询
<E extends IPage<T>> E page(E page, Wrapper<T> queryWrapper);
```
### Count

```java
// 根据指定字段查询存在的数据数量
Integer countByField(SFunction<T, ?> field, Object fieldValue);
```
### Existed

```java
// 判断指定id对象是否存在
boolean existedById(Serializable id);
// 根据指定字段查询是否存在数据
boolean existedByField(SFunction<T, ?> field, Object fieldValue);
// 根据指定字段查询是否存在数据 不包括传入指定ID的对象
boolean existedByField(SFunction<T, ?> field, Object fieldValue,Serializable id);
```
### Chain

同Mybatis-Plus的`ServiceImpl`使用方式一致

## MpUtil 工具类

```java
// mp page转换为 PageResult 同时进行dto转换
<T> PageResult<T> convert2PageResult(Page<? extends EntityBaseFunction<T>> page);
// page转换为 PageResult
<T> PageResult<T> page2PageResult(Page<T> page);
// 获取分页对象 MyBatis-Plus
<T> Page<T> getMpPage(PageParam page, Class<T> clazz);
// 获取行名称
String getColumnName(SFunction<?,?> function);
// 批量执行语句, 通常用于for循环方式的批量插入
executeBatch(List<T> saveList, Consumer<List<T>> consumer,int batchSize);
// 初始化数据库Entity, 通常配合 executeBatch 使用
<T extends MpIdEntity> void initEntityList(List<? extends MpIdEntity> entityList,Long userId)
// 字段是否存在长文本注解
boolean excludeBigField(TableFieldInfo tableFieldInfo)
// 获取一条数据, 有多条取第一条
<T> Optional<T> findOne(LambdaQueryChainWrapper<T> lambdaQuery)
```

## 扩展类型处理器
### JacksonRawTypeHandler
> 相较于官方`JacksonTypeHandler`会记录对象属性类型, 通常用于储存不确定对象的属性上，例如: object对象, 泛型对象、存储的数据是字段声明类型的子类等，
如果在使用知道明确类型的包装类是，如`List<T>`、`Set<T>`， 请使用 `JacksonTypeReferenceHandler` 相关类

```java
   /** 分配的原始数据 */
    @TableField(typeHandler = JacksonRawTypeHandler.class)
    private Object assignRaw;
```
### JacksonTypeReferenceHandler

> JSON字段类型转换抽象处理器类, 需要进行继承实现, 可以在不在JSON字符串中记录数据类型，就可以对一些特殊类型进行反序列化，例如: 集合类型`List<T>`, 泛型对象`ResResult<T>` 等。
通过 getTypeReference 接口方法, 传入`TypeReference<T>`对象就可以进行反序列化，

```java
/**
 * 支付订单可退款信息对应的MP字段处理器
 * @author xxm
 * @since 2024/1/3
 */
public class RefundableInfoTypeHandler extends JacksonTypeReferenceHandler<List<RefundableInfo>> {

    /**
     * 返回要反序列化的类型对象
     */
    @Override
    public TypeReference<List<RefundableInfo>> getTypeReference() {
        return new TypeReference<List<RefundableInfo>>() {};
    }
}
```
### LongListTypeHandler
> `List<Long>`字段类型的转换器类

### StringListTypeHandler
> `List<String>`字段类型的转换器类
