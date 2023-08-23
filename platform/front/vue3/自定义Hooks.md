# 自定义Hooks
## useDict(字典)
### 功能
- 在系统打开时缓存字典数据，减少对后端的请求次数
- 根据字典CODE值获取字典项列表，提供同步和异步的方法
- 字典项翻译，将code码转换成显示的值
### 使用
```typescript
    import { useDict } from '/@/hooks/bootx/useDict'
    const { dictConvert } = useDict()
```
### 方法介绍
- `dictConvert`  字典项转换
- `dictItems`  获取字典项列表
- `dictItemsNumber`  获取字典项列表(code值为数字)
- `dictDropDown`  获取字典下拉框数据列表
- `dictDropDownNumber`  获取字典下拉框数据列表
### 数据结构
```json
{
  "code": "1",
  "name": "男",
  "dictCode": "sex"
}
```

## useFormEdit(表单编辑)
### 功能
对表单通用的初始化、状态值、下拉框搜索等功能进行封装
### 使用
```typescript
    import useFormEdit from '/@/hooks/bootx/useFormEdit'
    // 返回数据详细介绍看下文 
    const { visible, confirmLoading, modalWidth } = useFormEdit()
```
### 方法和返回数据介绍
- `model`  表单相关的所有数据，是个`reactive`对象
- `labelCol`  标题栅格宽度
- `wrapperCol`  表单项内容栅格宽度
- `title`  标题内容
- `modalWidth`  弹框宽段
- `confirmLoading`  是否在加载中
- `visible`  弹窗是否显示
- `editable`  是否是编辑状态
- `addable`  是否是新建状态
- `showable`  是否是查看状态
- `formEditType`  `FormEditType`类型枚举，内容分别是上述三种状态
- `initFormEditType(editType: FormEditType)`  初始化表单状态方法，需传入参数`FormEditType`参数
- `handleCancel()`  关闭弹窗方法
- `search(input: string, option)`  搜索方法，供select下拉框组件进行筛选时使用(:filter-option="search")
- `diffForm(rawForm, editForm, ...keys)`  判断脱敏参数是否被修改的参数, 未修改返回空值 rawForm 后端获取到的原始数据, editForm 修改后的数据, keys 字段名称

## useTablePage(表格)
### 功能
对表格通用的查询、分页等功能进行封装
### 使用
```typescript
    import useTablePage from '/@/hooks/bootx/useTablePage'
    // 返回数据详细介绍看下文  queryPageCallback 参数是分页查询的方法
    const { visible, confirmLoading, modalWidth } = useTablePage(queryPageCallback)
```
### 方法和返回数据介绍
- `model`  表格相关的所有数据，是个`reactive`对象
- `loading`  加载状态
- `pages`  分页参数，包括当前页、每页数量
- `pagination`  服务端返回的分页结果，包含当前页、总数、表格数据等
- `batchOperateFlag`  批量操作标识
- `superQueryFlag`  超级查询条件生效状态
- `query()`  普通查询方法
- `resetPage()`  重置当前页数
- `pageQueryResHandel()`  分页查询返回结果处理
- `handleTableChange()`  表格翻页或变动
- `resetQuery()`  重置查询
- `resetQueryParams()`  重置查询参数
- `handleOk()`  ok按钮，触发查询
## useUpload(文件上传)
### 功能
对`Antd Vue`上传组件所必须的的方法进行封装
### 使用
```typescript
    import { useUpload } from '/@/hooks/bootx/useUpload'
    // 参数为上传地址，服务地址在.env中配置
    const { tokenHeader, uploadAction } = useUpload('/file/upload')
```
### 方法介绍
- `tokenHeader` 一个`computed`对象，返回值是登陆后的Token值，格式为`{ AccessToken: token }`
- `uploadAction` 一个`computed`对象，返回值是上传文件的全路径请求地址
## useValidate(数据校验)
### 功能
封装了一个通用的数据是否存在的查询方法，需要后端配合编写指定格式的接口
### 使用
```typescript
    import { useValidate } from '/@/hooks/bootx/useValidate'

    const { existsByServer } = useValidate()
```
### 方法介绍
```typescript
/**
 * 服务器校验方法
 * @param value 要进行查重的值
 * @param id 主键
 * @param formEditType 方法类型，新增或更新
 * @param existsFun 查询该值的记录是否存在的请求方法
 * @param existsNotIdFun 查询该值id对应的数据之外否存在记录是的请求方法
 * @param errMsg 验证不通过的内容
 */
function existsByServer(value, id, formEditType, existsFun, existsNotIdFun, errMsg = '该编码已存在!') {}
```
### 例子
```typescript
    function validateCode() {
      const { code, id } = form
      return existsByServer(code, id, formEditType, existsByCode, existsByCodeNotId)
    }
```

