<template>
  <view class="header">
    <view class="search-box">
      <image src="/static/search_history.png" class="search-icon" />
      <input
        v-model="keyword"
        placeholder="请输入搜索内容"
        class="input"
        @input="onInput"
      />
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const keyword = ref('')

const onInput = () => {
  emit('search', keyword.value)
}
</script>

<style scoped>
.header {
  background: #F9FAFB;
  padding: 20rpx 30rpx;
}

.search-box {
  background: #fff;
  border-radius: 16rpx;
  border: 1rpx solid #eee;
  display: flex;
  align-items: center;
  padding: 20rpx;
}

.search-icon {
  width: 32rpx;
  height: 32rpx;
  margin-right: 20rpx;
}

.input {
  flex: 1;
  font-size: 26rpx;
}
</style>