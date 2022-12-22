<template>
  <div class="theme">
    <h1>404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <a :href="$site.base" aria-label="go to home">返回首页</a>
  </div>
</template>

<script setup lang="ts">
const msgs = [
  `这儿什么都没有.`,
  `你是是怎么到这儿来的?`,
  `看起来我们有一些无效的链接.`
]

function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)]
}
</script>
