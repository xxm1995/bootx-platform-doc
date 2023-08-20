## IP归属地
可以IP所在的国家、城市、ISP运营商等信息，基于`ip2region`进行实现，地址：[ip2region项目地址](https://gitee.com/lionsoul/ip2region)
## 使用方式
### ip2region.xdb
首先在ip2region中下载下来`ip2region.xdb`文件，然后放到合适的地方，然后在`bootx.starter.audit-log.ip2region.file-path`配置上对应xdb文件路径
### 查询方式
查询方式支持三种，分别是：
- file 完全基于文件的查询(不推荐)
- vector_index 使用固定的 512KiB 的内存空间缓存 vector index 数据，减少一次 IO 磁盘操作，从而加速查询(内存严重不足时使用)
- cache 我们也可以预先加载整个 ip2region.xdb 的数据到内存，然后基于这个数据创建查询对象来实现完全基于文件的查询，速度最快效率最高(推荐)
### 调用代码
通过注入`IpToRegionService`服务类进行查询。
```java
public class TestController {

    private final IpToRegionService ipToRegionService;
    
    @Operation(summary = "ip地址查询")
    @GetMapping("/ipToRegion")
    public ResResult<IpRegion> ipToRegion(String ip){
        return Res.ok(ipToRegionService.getRegionByIp(ip));
    }
}
```

## 参数配置
```yaml
bootx:
  starter:
    audit-log:
      # ip归属地 
      ip2region:
        # 数据文件路径
        file-path: \data\ip2region\ip2region.xdb
        # 查询方式
        search-type: cache
```
## ip2region文件地址
[GITEE地址](https://gitee.com/lionsoul/ip2region/blob/master/data/ip2region.xdb)