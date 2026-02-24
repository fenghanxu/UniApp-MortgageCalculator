<template>
  <view class="page">

    <!-- 横向分类 -->
    <scroll-view scroll-x class="tab-scroll">
      <view class="tab-container">
        <view
          v-for="(item,index) in tabs"
          :key="index"
          class="tab"
          :class="{active: activeIndex === index}"
          @click="changeTab(index)"
        >
          {{ item }}
        </view>
      </view>
    </scroll-view>

    <!-- 列表 -->
    <scroll-view scroll-y class="list">
      <CollectViewCell
        v-for="(item,index) in list"
        :key="index"
        :data="item"
        @click="handleClick(index)"
      />
    </scroll-view>

  </view>
</template>

<script setup>
import { ref, computed } from 'vue'
import CollectViewCell from '@/components/CollectViewCell.vue'

const tabs = ['全部收藏','商业贷款','公积金贷款','组合贷款']
const activeIndex = ref(0)

const rawList = ref([
  { type: 1, title:'商业贷款 - 等额本息', time:'2023-10-11 14:30', amount:'100万', term:'30年', rate:'4.9%', monthly:'5320'},
  { type: 2, title:'公积金贷款 - 等额本金', time:'2023-10-12 10:20', amount:'80万', term:'20年', rate:'3.25%', monthly:'4100'}
])

const list = computed(() => {
  if (activeIndex.value === 0) return rawList.value
  return rawList.value.filter(item => item.type === activeIndex.value)
})

const changeTab = (index) => {
  activeIndex.value = index
}

const handleClick = (index) => {
  console.log(index)
}
</script>

<style scoped>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #F9FAFB;
}

/* 横向滚动 */
.tab-scroll {
  white-space: nowrap;
  padding: 20rpx 0;
}

.tab-container {
  display: flex;
  padding: 0 30rpx;
}

.tab {
  height: 80rpx;
  line-height: 80rpx;
  padding: 0 40rpx;
  margin-right: 20rpx;
  border-radius: 40rpx;
  background: #fff;
  border: 1rpx solid #eee;
  font-size: 26rpx;
  color: #666;
}

.tab.active {
  background: #E6F0FF;
  color: #3B82F6;
  border: none;
}

/* 列表 */
.list {
  flex: 1;
}
</style>