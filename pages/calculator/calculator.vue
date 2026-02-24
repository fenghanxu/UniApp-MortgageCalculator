<template>
  <scroll-view scroll-y class="page">
	  
	  <!-- 贷款方式 -->
	  <view class="card">
		<view class="card-title">贷款方式</view>
  
		<view class="row">
		  <view
			v-for="(item,index) in loanMethods"
			:key="index"
			class="btn"
			:class="{active: loanMethodIndex===index}"
			@click="loanMethodIndex=index"
		  >
			{{ item }}
		  </view>
		</view>
	  </view>
	  
	      <!-- 计算方式 -->
	      <view class="card">
	        <view class="card-title">计算方式</view>
	  
	        <view class="row">
	          <view
	            v-for="(item,index) in calculateMethods"
	            :key="index"
	            class="btn"
	            :class="{active: calculateIndex===index}"
	            @click="calculateIndex=index"
	          >
	            {{ item }}
	          </view>
	        </view>
	      </view>
	  
	      <!-- 贷款信息 -->
	      <view class="card">
	  
	        <view class="card-title">贷款信息</view>
	  
	        <!-- 贷款金额 -->
	        <view class="form-group">
	          <view class="label-row">
	            <text>贷款金额</text>
	            <text class="unit">万元</text>
	          </view>
	  
	          <input
	            class="input"
	            type="number"
	            v-model="loanAmount"
	          />
	  
	          <slider
	            :value="loanAmount"
	            min="1"
	            max="100"
	            @change="e=>loanAmount=e.detail.value"
	          />
	          <view class="slider-label">
	            <text>1万元</text>
	            <text>100万元</text>
	          </view>
	        </view>
	  
	        <!-- 贷款期限 -->
	        <view class="form-group">
	          <view class="label-row">
	            <text>贷款期限</text>
	            <text class="unit">年</text>
	          </view>
	  
	          <input
	            class="input"
	            type="number"
	            v-model="loanTerm"
	          />
	  
	          <slider
	            :value="loanTerm"
	            min="1"
	            max="30"
	            @change="e=>loanTerm=e.detail.value"
	          />
	          <view class="slider-label">
	            <text>1年</text>
	            <text>30年</text>
	          </view>
	        </view>
	  
	        <!-- 贷款利率 -->
	        <view class="form-group">
	          <view class="label-row">
	            <text>贷款利率</text>
	            <text class="unit">%</text>
	          </view>
	  
	          <input
	            class="input"
	            type="digit"
	            v-model="loanRate"
	          />
	  
	          <view class="rate-row">
	            <view
	              v-for="item in rateList"
	              :key="item"
	              class="rate-btn"
	              @click="loanRate=item"
	            >
	              {{ item }}%
	            </view>
	          </view>
	        </view>
	  
	      </view>

    <!-- 计算按钮 -->
    <view class="submit" @click="goDetail">
      开始计算
    </view>

  </scroll-view>
</template>

<script setup>
import { ref } from 'vue'

/* 贷款方式 */
const loanMethods = ['商业贷款','公积金贷款','组合贷款']
const loanMethodIndex = ref(0)

/* 计算方式 */
const calculateMethods = ['等额本息','等额本金','提前还款']
const calculateIndex = ref(0)

/* 表单数据 */
const loanAmount = ref(50)
const loanTerm = ref(20)
const loanRate = ref(3.25)

const rateList = [2.81,3.0,3.61,4.26]

/* 跳转详情页 */
const goDetail = () => {
  uni.navigateTo({
    url: '/pages/calculatorDetail/calculatorDetail'
  })
}
</script>

<style scoped>
.page{
  width: calc(100% - 60rpx);
  background:#F9FAFB;
  padding:30rpx;
}

/* 卡片 */
.card{	
  background:#fff;
  border-radius:16rpx;
  padding:30rpx 30rpx 30rpx 30rpx;
  margin-bottom:30rpx;
  box-shadow:0 4rpx 12rpx rgba(0,0,0,0.05);     
}

.card-title{
  font-weight:bold;
  font-size:30rpx;
  margin-bottom:20rpx;
}

.row{
  display:flex;
  justify-content:space-between;
}

.btn{
  flex:1;
  margin-right:20rpx;
  text-align:center;
  height:79rpx;
  line-height:80rpx;
  border-radius:12rpx;
  border:1rpx solid #eee;
  color:#666;
}

.btn:last-child{
  margin-right:0;
}

.btn.active{
  background:#E6F0FF;
  color:#3B82F6;
  border:1rpx solid #3B82F6;
}

/* 表单 */
.form-group{
  margin-top:30rpx;
}

.label-row{
  display:flex;
  justify-content:space-between;
  margin-bottom:20rpx;
}

.unit{
  color:#999;
}

.input{
  height:90rpx;
  border:1rpx solid #eee;
  border-radius:12rpx;
  padding:0 20rpx;
  font-size:34rpx;
  margin-bottom:20rpx;
}

.slider-label{
  display:flex;
  justify-content:space-between;
  font-size:24rpx;
  color:#999;
}

.rate-row{
  display:flex;
  justify-content:space-between;
  margin-top:20rpx;
}

.rate-btn{
  flex:1;
  margin-right:15rpx;
  background:#F3F4F6;
  text-align:center;
  padding:15rpx 0;
  border-radius:12rpx;
  font-size:24rpx;
}

.rate-btn:last-child{
  margin-right:0;
}

/* 提交按钮 */
.submit{
  height:100rpx;
  background:#3B82F6;
  color:#fff;
  text-align:center;
  line-height:100rpx;
  border-radius:24rpx;
  font-size:34rpx;
  font-weight:bold;
  margin-top:40rpx;
}
</style>