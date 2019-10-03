<template>
  <div class="child-two">
    <div class="child-header">
      <span class="iconfont icon-style" @click="goMenu">&#xe617;</span><p class="head-title">饮品</p>
    </div>
    <div class="drink-list" ref="wrapper">
      <ul>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-drink-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">果汁</div>
          <div class="food-price">20.4￥</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  methods: {
    goMenu: function() {
      this.$emit('goPage', 'father')
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style>
.child-two {
  position: relative;
  height: 37.9rem;
}

.child-header {
  z-index: 999;
  position: fixed;
  display: flex;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: #0984e3;
}
.drink-list {
  overflow: hidden;
  position: absolute;
  top: 4.3rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.li-drink-item {
  display: flex;
  height: 5rem;
  background-color: #f5f5f5;
}
.icon-style {
  display: block;
  margin-left: 0.7rem;
  height: 4rem;
  line-height: 4rem;
  color: white;
  font-size: 1.45rem !important;
}

.head-title {
  height: 4rem;
  line-height: 4rem;
  font-size: 1.55rem;
  color: white;
  margin-left: 1rem;
}
</style>