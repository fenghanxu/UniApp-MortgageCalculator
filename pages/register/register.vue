<template>
  <view class="page">

    <!-- 标题 -->
    <view class="title">创建账号</view>
    <view class="subtitle">编写以下信息完成注册</view>

    <!-- 白色卡片 -->
    <view class="card">

      <!-- 手机号 -->
      <view class="label">手机号</view>
      <view class="input-box">
        <image src="/static/login_phone.png" class="icon" mode="aspectFit" />
        <input
          v-model="phone"
          type="number"
          placeholder="请输入手机号码"
          class="input"
          @input="handleInput"
        />
      </view>

      <!-- 设置密码 -->
      <view class="label">设置密码</view>
      <view class="input-box">
        <image src="/static/login_passworld.png" class="icon" mode="aspectFit" />
        <input
          v-model="password"
          password
          placeholder="请输入6-18位密码"
          class="input"
          @input="handleInput"
        />
      </view>

      <!-- 确认密码 -->
      <view class="label">确认密码</view>
      <view class="input-box">
        <image src="/static/login_passworld.png" class="icon" mode="aspectFit" />
        <input
          v-model="confirmPassword"
          password
          placeholder="请再次输入6-18位密码"
          class="input"
          @input="handleInput"
        />
      </view>

      <!-- 协议 -->
      <view class="agreement">
        <view class="checkbox" @click="agree = !agree">
          <image
            :src="agree ? '/static/selectionbox_choose.png' : '/static/selectionbox_nochoose.png'"
            class="check-icon"
          />
        </view>

        <text class="gray">注册即表示同意</text>

        <text class="link" @click="goProtocol('用户服务协议')">
          《用户服务协议》
        </text>

        <text class="gray">和</text>

        <text class="link" @click="goProtocol('隐私政策')">
          《隐私政策》
        </text>
      </view>

      <!-- 注册按钮 -->
      <button class="register-btn" @click="register">
        注册账号
      </button>

    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const agree = ref(false)

// 输入监听（对应 iOS delegate）
const handleInput = (e) => {
  console.log(e.detail.value)
}

// 跳转协议页面
const goProtocol = (title) => {
  uni.navigateTo({
    url: `/pages/webview/webview?title=${title}`
  })
}

// 注册逻辑
const register = () => {
  if (!phone.value) {
    return uni.showToast({ title: '请输入手机号', icon: 'none' })
  }

  if (password.value.length < 6) {
    return uni.showToast({ title: '密码至少6位', icon: 'none' })
  }

  if (password.value !== confirmPassword.value) {
    return uni.showToast({ title: '两次密码不一致', icon: 'none' })
  }

  if (!agree.value) {
    return uni.showToast({ title: '请先同意协议', icon: 'none' })
  }

  uni.showToast({
    title: '注册成功',
    icon: 'success'
  })
}
</script>

<style scoped>
.page {
  background: #f9fafb;
  min-height: 100vh;
  padding: 20rpx;
}

.title {
  font-size: 44rpx;
  font-weight: 800;
  text-align: center;
  margin-top: 20rpx;
}

.subtitle {
  font-size: 28rpx;
  color: #94a3b8;
  text-align: center;
  margin-top: 20rpx;
}

.card {
  background: #fff;
  border-radius: 30rpx;
  padding: 40rpx 30rpx;
  margin-top: 40rpx;
  box-shadow: 0 8rpx 20rpx rgba(0,0,0,0.05);
}

.label {
  font-size: 28rpx;
  font-weight: bold;
  margin-top: 30rpx;
}

.input-box {
  display: flex;
  align-items: center;
  border: 1rpx solid #e2e8f0;
  border-radius: 16rpx;
  height: 88rpx;
  margin-top: 20rpx;
  padding: 0 20rpx;
}

.icon {
  width: 40rpx;
  height: 40rpx;
}

.input {
  flex: 1;
  margin-left: 20rpx;
  font-size: 28rpx;
}

.agreement {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30rpx;
}

.checkbox {
  margin-right: 10rpx;
}

.check-icon {
  width: 36rpx;
  height: 36rpx;
}

.gray {
  color: #64748b;
  font-size: 26rpx;
}

.link {
  color: #3CB371;
  font-size: 26rpx;
  font-weight: bold;
}

.register-btn {
  margin-top: 60rpx;
  background: #3CB371;
  color: #fff;
  font-size: 34rpx;
  height: 90rpx;
  border-radius: 16rpx;
}
</style>
