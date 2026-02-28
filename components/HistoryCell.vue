<template>
  <view class="cell" @click="$emit('click')">
    <view class="card">
		
      <!-- 标题行 -->
      <view class="row space">
        <text class="title">{{ data.title }}</text>

        <view class="right-icons">
          <image src="/static/history_collection_normal.png" class="icon" />
          <image src="/static/history_delect.png" class="icon" />
        </view>
      </view>

      <text class="time">{{ data.time }}</text>

      <!-- 三列信息 -->
      <view class="info-row">
        <view class="info-item">
          <text class="info-title">贷款金额</text>
          <text class="info-value">{{ data.amount }}</text>
        </view>

        <view class="info-item">
          <text class="info-title">贷款期限</text>
          <text class="info-value">{{ data.term }}</text>
        </view>

        <view class="info-item">
          <text class="info-title">贷款利率</text>
          <text class="info-value">{{ data.rate }}</text>
        </view>
      </view>

      <!-- 底部 -->
      <view class="row space bottom">
        <text class="monthly">
          <text class="money">{{ formatNumber(data.monthly) }}</text>
          <text class="unit"> 元/月</text>
        </text>

        <view class="detail">
          <text class="detail-text">查看详情</text>
          <image src="/static/collection_detail.png" class="detail-icon" />
        </view>
      </view>


    </view>
  </view>
</template>

<script setup>
const props = defineProps({
  data: Object
})

const formatNumber = (num) => {
  return Number(num).toLocaleString()
}
</script>

<style scoped>
.cell {
  padding: 20rpx 0;
}

.card {
  width: calc(100% - 60rpx);   /* 左右各30rpx */
  margin: 0 auto;              /* 居中 */
  background: #fff;
  border-radius: 16rpx;
  padding: 30rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  box-sizing: border-box;      /* 关键 */
}

.row {
  display: flex;
  align-items: center;
}

.space {
  justify-content: space-between;
}

.title {
  font-weight: bold;
  font-size: 28rpx;
}

.time {
  font-size: 24rpx;
  color: #999;
  margin-top: 10rpx;
}

.right-icons {
  display: flex;
  gap: 20rpx;
}

.icon {
  width: 40rpx;
  height: 40rpx;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-top: 30rpx;
}

.info-item {
  text-align: center;
  flex: 1;
}

.info-title {
  font-size: 24rpx;
  color: #999;
}

.info-value {
  font-size: 26rpx;
  margin-top: 10rpx;
}

.bottom {
  margin-top: 30rpx;
}

.money {
  font-size: 32rpx;
  font-weight: bold;
}

.unit {
  font-size: 24rpx;
  color: #999;
}

.detail {
  display: flex;
  align-items: center;
  color: #3CB371;
}

.detail-text {
  margin-right: 10rpx;
  font-size: 26rpx;
}

.detail-icon {
  width: 30rpx;
  height: 30rpx;
}
</style>