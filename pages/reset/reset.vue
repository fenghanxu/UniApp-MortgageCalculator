<template>
  <view class="page">

    <!-- 标题 -->
    <view class="title">重置密码</view>
    <view class="subtitle">请设置您的新密码以继续使用账户</view>

    <!-- 白色卡片 -->
    <view class="card">

      <!-- 设置密码 -->
      <view class="label-row">
        <text class="label">设置密码</text>
        <text class="label-sub">至少8个字符</text>
      </view>

      <view class="input-box">
        <image class="icon" src="/static/login_passworld.png" mode="aspectFit" />
        <input
          v-model="password"
          class="input"
          type="number"
          password
          maxlength="18"
          placeholder="请输入6-18位密码"
          @input="handleInput"
        />
      </view>

      <!-- 确认密码 -->
      <view class="label-row confirm-top">
        <text class="label">确认密码</text>

        <view class="match-status">
          <image
            class="match-icon"
            :src="isMatch ? '/static/resetPassword_check.png' : '/static/resetPassword_uncheck.png'"
            mode="aspectFit"
          />
          <text class="match-text">
            {{ isMatch ? '密码匹配' : '密码不匹配' }}
          </text>
        </view>
      </view>

      <view class="input-box">
        <image class="icon" src="/static/login_passworld.png" mode="aspectFit" />
        <input
          v-model="confirmPassword"
          class="input"
          type="number"
          password
          maxlength="18"
          placeholder="请再次输入6-18位密码"
          @input="handleInput"
        />
      </view>

    </view>

    <!-- 底部按钮 -->
    <button class="confirm-btn" @click="submit">
      确认
    </button>

  </view>
</template>

<script setup>
import { ref, computed } from 'vue'

const password = ref('')
const confirmPassword = ref('')

/* 是否匹配 */
const isMatch = computed(() => {
  return (
    password.value.length >= 6 &&
    confirmPassword.value.length >= 6 &&
    password.value === confirmPassword.value
  )
})

/* 输入监听 */
const handleInput = (e) => {
  console.log(e.detail.value)
}

/* 提交 */
const submit = () => {
  if (!isMatch.value) {
    uni.showToast({
      title: '密码不匹配',
      icon: 'none'
    })
    return
  }

  uni.showToast({
    title: '修改成功',
    icon: 'success'
  })
}
</script>

<style scoped>
.page {
  background: #F9FAFB;
  min-height: 100vh;
  padding: 80rpx 30rpx 0;
  box-sizing: border-box;
}

.title {
  font-size: 48rpx;
  font-weight: 800;
  text-align: center;
  color: #111827;
}

.subtitle {
  font-size: 28rpx;
  color: #64748B;
  text-align: center;
  margin-top: 20rpx;
}

.card {
  background: white;
  border-radius: 32rpx;
  padding: 40rpx 30rpx;
  margin-top: 80rpx;
  box-shadow: 0 4rpx 20rpx rgba(0,0,0,0.08);
}

.label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.label {
  font-size: 28rpx;
  font-weight: bold;
  color: #111827;
}

.label-sub {
  font-size: 24rpx;
  color: #64748B;
}

.confirm-top {
  margin-top: 60rpx;
}

.input-box {
  display: flex;
  align-items: center;
  border: 1rpx solid #E5E7EB;
  border-radius: 16rpx;
  height: 92rpx;
  padding: 0 20rpx;
  margin-top: 20rpx;
}

.icon {
  width: 52rpx;
  height: 52rpx;
  margin-right: 20rpx;
}

.input {
  flex: 1;
  font-size: 28rpx;
}

.match-status {
  display: flex;
  align-items: center;
}

.match-icon {
  width: 28rpx;
  height: 28rpx;
  margin-right: 8rpx;
}

.match-text {
  font-size: 24rpx;
  color: #64748B;
}

.confirm-btn {
  position: fixed;
  left: 30rpx;
  right: 30rpx;
  bottom: 60rpx;
  height: 100rpx;
  background: #3CB371;
  color: white;
  font-size: 40rpx;
  font-weight: bold;
  border-radius: 16rpx;
}
</style>
