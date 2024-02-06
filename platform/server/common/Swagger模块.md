# Swagger 模块
## 说明
::: warning
注意：所使用的的是Swagger3(SpringDoc)，不支持Swagger2相关的注解，因为Swagger2(SpringFox)已经在17年停止维护了，最新的Spirng Boot版本与Swagger2已经有不兼容的问题，
所以为了后期更少出现问题，建议直接使用Swagger3(SpringDoc)
:::

> 基于`Knife4j`+`Swagger3`进行实现，`Knife4j`是一个集Swagger2 和 OpenAPI3 为一体的增强解决方案，同时对接口文档分组做了些增强。

## Swagger3注解对照表
| swagger2           | Swagger3                                                        | 说明                                                                  |
|--------------------|-----------------------------------------------------------------|---------------------------------------------------------------------|
| @Api               | @Tag(name= “接口类描述”)                                             | Controller 类上                                                       |
| @ApiOperation      | @Operation(summary =“接口方法描述”)                                   | Controller 方法上                                                      |     
| @ApiImplicitParams | @Parameters                                                     | Controller方法上                                                       |
| @ApiImplicitParam  | @Parameter(description=“参数描述”)                                  | Controller 方法上                                                      |
| @ApiParam          | @Parameter(description=“参数描述”)                                  | Controller 方法参数上                                                    |
| @ApiIgnore         | @Parameter(hidden = true) 或 @Operation(hidden = true) 或 @Hidden | 参数上                                                                 |
| @ApiModel          | @Schema(title  = "实体类标题")                                       | 对象上                                                                 |
| @ApiModelProperty  | @Schema(description= "字段描述")                                    | 对象属性上                                                               |
| -                  | @ParameterObject                                                | Controller 方法参数上，使用@ParameterObject 注解修饰的请求参数对象，会将对象的每个字段添加为单独的请求参数 |

## 使用样例
### Controller
```java
@Tag(name ="系统参数")
@RestController
@RequestMapping("/system/param")
@RequiredArgsConstructor
public class SystemParamController {
    private final SystemParamService systemParamService;
    
    @Operation(summary = "添加")
    @PostMapping("/add")
    public ResResult<Void> add(@RequestBody SystemParameterParam param){
        systemParamService.add(param);
        return Res.ok();
    }
    
    @Operation(summary = "分页")
    @GetMapping("/page")
    public ResResult<PageResult<SystemParameterDto>> page(@ParameterObject PageParam pageParam,
                                                          @ParameterObject SystemParameterParam param){
        return Res.ok(systemParamService.page(pageParam,param));
    }
}
```
### 实体类
```java
@EqualsAndHashCode(callSuper = true)
@Data
@Accessors(chain = true)
@Schema(title = "系统参数")
public class SystemParameterDto extends BaseDto {

    @Schema(description= "参数名称")
    private String name;

    @Schema(description= "参数键名")
    private String paramKey;
}
```
## knife4j配置
> 项目Swagger的UI使用的是`knife4j`提供的图形化界面，同时后端的接口文档使用的是`knife4j`，可以使用`knife4j`提供的各种特性，具体使用见[knife4j配置](https://doc.xiaominfo.com/docs/quick-start#openapi3)，[增强特性](https://doc.xiaominfo.com/docs/features/enhance)

```yaml
# Swagger 增强配置
knife4j:
  # 是否开启增强模式
  enable: true
  basic:
    enable: true
    username: admin
    password: 123123
```


## 自定义配置
:::tip
对多文档分组进行增强，支持一个分组文档扫描多个包，原理是通过Spring的动态注册Bean和数据绑定功能，在容器Bean初始化之前把`GroupedOpenApi`（相当于Swagger2的`Docket`）注入到Spring容器中来实现。数据权限.
:::

```yaml
# 项目配置
bootx:
  common:
    swagger:
      # 是否启用，生产环境推荐关闭
      enabled: true
      author: xxm
      version: 1.x.x
      title: bootx开发平台单体版
      description: bootx-platform开发平台单体版
      # 多模块扫包
      base-packages:
        "[基础API]": cn.bootx.baseapi
        "[身份识别和管理]": cn.bootx.iam
        "[消息服务]": cn.bootx.notice
        "[商品服务]": cn.bootx.goods
        "[支付服务]": cn.bootx.payment
        "[销售服务]": cn.bootx.sales
        "[订单服务]": cn.bootx.order
        "[演示模块]": cn.bootx.demo
        # 支持一个模块扫描多个包
        "[第三方对接]":
          - cn.bootx.starter.dingtalk
          - cn.bootx.starter.wecom
          - cn.bootx.starter.wechat
        "[自定义starter组件]": cn.bootx.starter
```
