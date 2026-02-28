<template>
  <web-view :src="url"></web-view>
</template>

<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const url = ref('https://example.com')

onLoad((options) => {
  if (options.title === '用户服务协议') {
    url.value = '/pages/webview/Data/用户服务协议.html'
  } else {
    url.value = '/pages/webview/Data/隐私政策.html'
  }
})
</script>
