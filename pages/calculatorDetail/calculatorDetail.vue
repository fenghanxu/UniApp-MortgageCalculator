<template>
  <scroll-view scroll-y class="page">

    <!-- 结果卡片 -->
    <view class="result-card">

      <view class="result-title">等额本息还款</view>

      <view class="result-sub">每月还款</view>

      <view class="repayment">
        <text class="repayment-money">
          {{ formatNumber(5320) }}
        </text>
        <text class="repayment-unit"> 元/月</text>
      </view>

      <view class="result-bottom">
        <view class="bottom-item">
          <view class="bottom-label">总利息</view>
          <view class="bottom-value">91.05万</view>
        </view>

        <view class="bottom-item">
          <view class="bottom-label">还款总额</view>
          <view class="bottom-value">191.05万</view>
        </view>
      </view>

    </view>

    <!-- 贷款信息 -->
    <view class="card">

      <view class="card-title">贷款信息</view>

      <view class="info-row" v-for="item in loanInfo" :key="item.label">
        <text class="info-label">{{ item.label }}</text>
        <text class="info-value">{{ item.value }}</text>
      </view>

    </view>

    <!-- 还款明细 -->
    <view class="card">

      <view class="card-title">还款明细</view>

      <CalculatorDetailHeader />

      <RepaymentDetailRow
        v-for="(item,index) in repaymentList"
        :key="index"
        :data="item"
      />

    </view>

  </scroll-view>
</template>

<script setup>
import { ref } from 'vue'
import CalculatorDetailHeader from '@/components/CalculatorDetailHeader.vue'
import RepaymentDetailRow from '@/components/RepaymentDetailRow.vue'

/* 模拟 5 期数据 */
const repaymentList = ref(
  Array.from({ length: 5 }, (_, i) => ({
    period: `第${i + 1}期`,
    monthly: 5307,
    principal: 1224,
    interest: 4083
  }))
)

const loanInfo = ref([
  { label: '贷款金额', value: '100万' },
  { label: '贷款期限', value: '30年(360期)' },
  { label: '贷款利率', value: '4.90%' },
  { label: '贷款方式', value: '等额本息' }
])

/* 千分位格式化 */
const formatNumber = (num) => {
  return Number(num).toLocaleString()
}
</script>

<style scoped>
.page{
  width: calc(100% - 40rpx);
  background:#F9FAFB;
  padding:20rpx;
}

/* 结果卡片 */
.result-card{
  border-radius:16rpx;
  padding:30rpx;
  margin-bottom:30rpx;
  color:#fff;
  background: linear-gradient(135deg,#228B22,#3B82F6);
  box-shadow:0 6rpx 16rpx rgba(0,0,0,0.1);
}

.result-title{
  font-size:26rpx;
}

.result-sub{
  text-align:center;
  margin-top:30rpx;
  font-size:26rpx;
}

.repayment{
  text-align:center;
  margin-top:15rpx;
}

.repayment-money{
  font-size:48rpx;
  font-weight:bold;
}

.repayment-unit{
  font-size:26rpx;
}

.result-bottom{
  display:flex;
  margin-top:40rpx;
}

.bottom-item{
  flex:1;
  text-align:center;
}

.bottom-label{
  font-size:24rpx;
}

.bottom-value{
  margin-top:10rpx;
  font-size:30rpx;
  font-weight:bold;
}

/* 白色卡片 */
.card{
  background:#fff;
  border-radius:16rpx;
  padding:30rpx;
  margin-bottom:30rpx;
  box-shadow:0 4rpx 12rpx rgba(0,0,0,0.05);
}

.card-title{
  font-weight:bold;
  margin-bottom:20rpx;
}

.info-row{
  display:flex;
  justify-content:space-between;
  margin-bottom:15rpx;
}

.info-label{
  color:#999;
}

.info-value{
  font-weight:bold;
}
</style>
