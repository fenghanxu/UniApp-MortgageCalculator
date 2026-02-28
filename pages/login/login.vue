<template>
  <view class="page">
    
    <!-- Logo -->
    <image class="logo" src="/static/logo.png" mode="aspectFill" />

    <!-- 白色卡片 -->
    <view class="card">
      
      <view class="title">欢迎登录</view>
      <view class="subtitle">请输入账号登录您的账户</view>

      <!-- 手机号 -->
      <view class="label">手机号</view>
      <view class="input-box">
        <image class="icon" src="/static/login_phone.png" mode="aspectFit" />
        <input
          v-model="phone"
          type="number"
          placeholder="请输入手机号码"
          class="input"
          @input="onPhoneInput"
        />
      </view>

      <!-- 密码 -->
      <view class="label">密码</view>
      <view class="input-box">
        <image class="icon" src="/static/login_passworld.png" mode="aspectFit" />
        <input
          v-model="password"
          password
          placeholder="请输入手机密码"
          class="input"
          @input="onPasswordInput"
        />
      </view>

      <!-- 忘记密码 -->
      <view class="forget-wrapper">
        <text class="forget" @click="goReset">忘记密码?</text>
      </view>

      <!-- 登录按钮 -->
      <button class="login-btn" @click="handleLogin">
        登录
      </button>

    </view>

    <!-- 注册 -->
    <view class="register-wrapper">
      <text class="normal">还没有账号?</text>
      <text class="register" @click="goRegister">立即注册</text>
    </view>

  </view>
</template>

<script setup>
import { ref } from 'vue'

const phone = ref('')
const password = ref('')

// 等价于 UITextFieldDelegate
const onPhoneInput = (e) => {
  console.log('手机号输入:', phone.value)
}

const onPasswordInput = (e) => {
  console.log('密码输入:', password.value)
}

const goReset = () => {
  uni.navigateTo({
    url: '/pages/reset/reset'
  })
}

const goRegister = () => {
  uni.navigateTo({
    url: '/pages/register/register'
  })
}

const handleLogin = () => {
  // if (!phone.value) {
  //   uni.showToast({ title: '请输入手机号', icon: 'none' })
  //   return
  // }

  // if (!password.value) {
  //   uni.showToast({ title: '请输入密码', icon: 'none' })
  //   return
  // }

  // console.log('登录参数:', phone.value, password.value)

    uni.reLaunch({
      url: '/pages/calculator/calculator'
    })
}
</script>

<style scoped>
.page {
	width: 100%;
  background-color: #F9FAFB;
  min-height: 100vh;
  padding-top: 80rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  width: 200rpx;
  height: 200rpx;
  border-radius: 100rpx;
  margin-bottom: 60rpx;
}

.card {
  width: 80%;
  background: #ffffff;
  border-radius: 20rpx;
  padding: 40rpx 30rpx;
  box-shadow: 0 8rpx 20rpx rgba(0,0,0,0.05);
}

.title {
  font-size: 40rpx;
  font-weight: bold;
  text-align: center;
  color: #111;
}

.subtitle {
  font-size: 26rpx;
  color: #999;
  text-align: center;
  margin-top: 20rpx;
  margin-bottom: 40rpx;
}

.label {
  font-size: 28rpx;
  font-weight: bold;
  margin-top: 20rpx;
  color: #333;
}

.input-box {
  margin-top: 15rpx;
  border: 2rpx solid #eee;
  border-radius: 16rpx;
  height: 90rpx;
  display: flex;
  align-items: center;
  padding: 0 20rpx;
}

.icon {
  width: 40rpx;
  height: 40rpx;
  margin-right: 15rpx;
}

.input {
  flex: 1;
  font-size: 28rpx;
}

.forget-wrapper {
  display: flex;
  justify-content: flex-end;
  margin-top: 10rpx;
}

.forget {
  font-size: 26rpx;
  color: #3CB371;
}

.login-btn {
  margin-top: 80rpx;
  height: 100rpx;
  line-height: 100rpx;
  background-color: #3CB371;
  color: white;
  font-size: 36rpx;
  border-radius: 16rpx;
}

.register-wrapper {
  margin-top: 30rpx;
  display: flex;
  align-items: center;
}

.normal {
  font-size: 26rpx;
  color: #999;
}

.register {
  font-size: 26rpx;
  color: #3CB371;
  margin-left: 10rpx;
}
</style>