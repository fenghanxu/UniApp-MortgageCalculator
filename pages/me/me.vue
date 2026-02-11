
<template>
  <scroll-view scroll-y class="page">
    <view class="container">
      <!-- loginView -->
      <view class="login-card">
        <image class="avatar" src="/static/logo.png" />
        <text class="login-title">未登录</text>
        <text class="login-sub">登录后可同步计算记录</text>
        <button class="login-btn" @click="goLogin">立即登录</button>
      </view>

      <!-- functionView -->
      <view class="card">
		<text class="card-title">功能导航</text>
		
        <MeButton
          imageColor="#FEF9C3"
          title="收藏记录"
          imageName="me_collection"
          :showArrow="true"
          @click="goTab(1)"
        />

        <MeButton
          imageColor="#DBEAFE"
          title="历史计算"
          imageName="me_history"
          :showArrow="true"
          @click="goTab(2)"
        />

        <MeButton
          imageColor="#DCFCE7"
          title="最新利率"
          imageName="me_interestRate"
          :showArrow="true"
          @click="openWeb('最新利率')"
        />

        <MeButton
          imageColor="#F3E8FF"
          title="房产知识"
          imageName="me_knowledge"
          :showArrow="true"
          @click="openWeb('房贷知识')"
        />
      </view>

      <!-- settingView -->
      <view class="card">
		<view class="card-title">系统设置</view>
		
        <MeButton
          imageColor="#F3F4F6"
          title="关于我们"
          imageName="me_our"
          :showArrow="true"
          @click="openWeb('关于我们')"
        />

        <MeButton
          imageColor="#F3F4F6"
          title="帮助中心"
          imageName="me_help"
          :showArrow="true"
          @click="openWeb('帮助中心')"
        />

        <MeButton
          imageColor="#F3F4F6"
          title="隐私政策"
          imageName="me_policy"
          :showArrow="true"
          @click="openWeb('隐私政策')"
        />

        <MeButton
          imageColor="#F3F4F6"
          title="清除缓存"
          imageName="me_cache"
          :showArrow="false"
          :cacheSize="cacheSize"
          @click="clearCache"
        />
      </view>
    </view>
  </scroll-view>
</template>

<script setup>
import { ref } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import MeButton from '@/components/MeButton.vue'

const cacheSize = ref('0.00')

function getCacheSize() {
  // 对应 ClearCacheManager.getCacheSize
  const info = uni.getStorageInfoSync()
  cacheSize.value = (info.currentSize / 1024).toFixed(2)
}

onShow(() => {
  getCacheSize()
})

function goLogin() {
  uni.navigateTo({ url: '/pages/login/login' })
}

function goTab(index) {
  uni.switchTab({ url: index === 1 ? '/pages/tab1/tab1' : '/pages/tab2/tab2' })
}

function openWeb(title) {
  uni.navigateTo({
    url: '/pages/web/web?title=' + title
  })
}

function clearCache() {
  uni.showModal({
    title: '提示',
    content: '确定清除缓存？',
    success: (res) => {
      if (res.confirm) {
        uni.clearStorageSync()
        cacheSize.value = '0.00'
      }
    }
  })
}
</script>

<style scoped>
.page {
  background: #F9FAFB;
  height: 100vh;
}
.container {
  padding: 15px;
}
.login-card {
  border-radius: 16px;
  padding: 20px 0;
  background: linear-gradient(135deg, #228B22, #34c759);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 2px solid #fff;
}
.login-title {
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
}
.login-sub {
  color: #fff;
  font-size: 14px;
  margin-top: 15px;
}
.login-btn {
  margin-top: 15px;
  width: 100px;
  height: 36px;
  line-height: 36px;
  border-radius: 18px;
  background: #fff;
  color: #34c759;
  font-size: 14px;
}
.card {
  padding: 10px;
  margin-top: 20px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  overflow: hidden;
}
.card-title {
  font-size: 14px;
  font-weight: bold;   
  padding-left: 15px;
  padding: 5px 15px 10px 15px;
}


</style>
