<template>
  <view class="page">
    
    <!-- 头部搜索 -->
    <HistoryHeaderView @search="handleSearch" />

    <!-- 列表 -->
    <scroll-view scroll-y class="list">
      <HistoryCell
        v-for="(item,index) in list"
        :key="index"
        :data="item"
        @click="handleClick(index)"
      />
    </scroll-view>

  </view>
</template>

<script setup>
import { ref } from 'vue'
import HistoryCell from '@/components/HistoryCell.vue'
import HistoryHeaderView from '@/components/HistoryHeaderView.vue'

const list = ref([
  {
    title: '商业贷款 - 等额本息',
    time: '2023-10-11 14:30',
    amount: '100万',
    term: '30年',
    rate: '4.9%',
    monthly: '5320'
  },
  {
    title: '公积金贷款 - 等额本金',
    time: '2023-10-12 10:20',
    amount: '80万',
    term: '20年',
    rate: '3.25%',
    monthly: '4100'
  }
])

const handleClick = (index) => {
  console.log(index)
}

const handleSearch = (value) => {
  console.log('搜索内容：', value)
}
</script>

<style scoped>
.page {
  background: #F9FAFB;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.list {
  flex: 1;
  /* padding: 0 15rpx; */
}
</style>