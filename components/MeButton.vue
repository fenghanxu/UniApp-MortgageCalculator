<template>
  <view class="me-btn" @click="$emit('click')">
    <view class="left">
      <view class="icon" :style="{ backgroundColor: imageColor }">
        <image v-if="imageName" :src="`/static/${imageName}.png`" mode="aspectFit" />
      </view>
      <text class="title">{{ title }}</text>
    </view>

    <image
      v-if="showArrow"
      class="arrow"
      src="/static/me_arrow.png"
      mode="aspectFit"
    />

    <text v-else class="subtitle">{{ cacheSize }}MB</text>
  </view>
</template>

<script setup>
const props = defineProps({
  imageColor: { type: String, default: '#eee' },
  imageName: { type: String, default: '' },
  title: { type: String, default: '' },
  showArrow: { type: Boolean, default: true },
  cacheSize: { type: String, default: '0' }
})
</script>

<style scoped>
.me-btn {
  height: 44px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 30px;
}
.left {
  display: flex;
  align-items: center;
}
.icon {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.icon image {
  width: 18px;
  height: 18px;
}
.title {
  margin-left: 10px;
  font-size: 14px;
  color: #333;
}
.arrow {
  width: 15px;
  height: 15px;
}
.subtitle {
  font-size: 14px;
  color: #999;
}
</style>
