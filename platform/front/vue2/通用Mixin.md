## TableMixin
主要用在展示列表的场合，预置了如下功能：

- 默认引入了字典翻译工具类
- 默认引入了超级查询器和普通查询器组件
- 在data()中引入了常用的变量
- 提供一些默认常用方法等
   - 重置当前页数
   - 表格翻页
   - 分页查询返回结果处理
   - 重置查询
   - 字典翻译相关方法

引入方法 `import { TableMixin } from '@/mixins/TableMixin'`
## FormMixin
主要用在填写表单的场合

- 默认引入了字典翻译工具类
- 在data()中引入了常用的变量
- 提供一些默认常用方法等
   - 初始化
   - 判断脱敏参数是否被修改的方法
   - 字典翻译相关方法

引入方法 `import { TableMixin } from '@/mixins/FormMixin'`

## 字典翻译方法使用
### 字典项格式
```json
{
  name:'',
  code:''
}
```
### 获取字典项列表
```javascript
// 异步方式 (code值为数字)
this.getDictItemsByNumberAsync('Political').then(res => {
         this.politicalList = res
      })
// 同步方式 (code值为数字)
this.politicalList = this.getDictItemsByNumber('Political')

// 获取字典下拉框数据列表 label/value
this.getDictDropDownAsync('Political').then(res =>{
         this.politicalList = res
      })
```
### 字典项翻译
```javascript
// 翻译字典项
this.dictConvert('Political',form.political)
```
