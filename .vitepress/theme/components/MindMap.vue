<template>
  <div>
    <Mindmap :config="the.config" :data="data" @onEvent="mindmapEvent"/>
  </div>
</template>
<script>
// 引入样式
import 'quick-svg/styles/mindmap.less';
// 引入组件
import { Mindmap } from 'quick-svg';
import {onMounted, reactive, ref} from "../../cache/deps/vue.js";
export default {
  components: { Mindmap },
  props: ['data'],
  setup(props, context) {
    const the = reactive( {
      config: {
        line: 2,
        lineColor: '#9299bb'
      },
      data: []
    })
    // 使用钩函数进行赋值
    onMounted(() => {
      the.data = props.data
    })

    /**
     * 递归取出对象当前对象
     * @param {*} key 节点规则 数组.序号
     * @returns
     */
    const getItemByKey = (key, data) => {
      return key.split('.').reduce((o, i) => {
        if (o.children) {
          // 从子节点查询
          return o.children[i];
        } else {
          // 直接取出
          return o[i];
        }
      }, data);
    };

    /** 脑图更新事件 */
    let mindmapBind;
    /**
     * 脑图事件
     */
    const mindmapEvent = (resp) => {
      // console.log(resp.cmd, resp.node)
      switch (resp.cmd) {
        case 'init': //组件初始化
          // 缓存脑图回调绑定方法
          mindmapBind = resp.bind;
          break;
        case 'dot': //节点事件
          const _item = getItemByKey(resp.node.key, the.data);
          // 显示或隐藏
          _item.hide = !_item.hide;
          // 整体更新
          mindmapBind();
          break;
        case 'text': //标题点击触发
        {
          const _item = getItemByKey(resp.node.key, the.data);
          if (_item) {
            // 只更新指定序号的脑图标题
            mindmapBind({
              cmd: resp.cmd,
              index: resp.node.index,
              data: { title: _item.title }
            });
          }
        }
          break;
      }
    };

    return { the, mindmapEvent };
  }
};
</script>
