<template>
  <view class="row">
    <text class="col period">{{ data.period }}</text>
    <text class="col">{{ format(data.monthly) }}</text>
    <text class="col">{{ format(data.principal) }}</text>
    <text class="col">{{ format(data.interest) }}</text>
  </view>
</template>

<script setup>
const props = defineProps({
  data:Object
})

const format = (num)=>{
  return Number(num).toLocaleString()
}
</script>

<style scoped>
.row{
  display:flex;
  padding:20rpx 0;
  border-bottom:1rpx solid #f2f2f2;
  font-size:26rpx;
}

.col{
  flex:1;
  text-align:center;
}

.period{
  flex:0.8;
}
</style>