<template>
  <view class="header">
    <text class="col period">期数</text>
    <text class="col">月供(元)</text>
    <text class="col">本金(元)</text>
    <text class="col">利息(元)</text>
  </view>
</template>

<style scoped>
.header{
  display:flex;
  padding:20rpx 0;
  border-bottom:1rpx solid #eee;
  font-size:24rpx;
  color:#999;
}

.col{
  flex:1;
  text-align:center;
}

.period{
  flex:0.8;
}
</style>