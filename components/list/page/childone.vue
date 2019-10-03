<template>
  <div class="child-one">
    <div class="child-header">
      <span class="iconfont icon-style" @click="goMenu">&#xe617;</span><p class="head-title">食物列表</p>
    </div>
    <div class="food-list" ref="wrapper">
      <ul>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
          <div class="food-price">20.4￥</div>
        </li>
        <li class="li-food-item">
          <img src="@/assets/img/1.jpg" class="food-image" />
          <div class="food-name">香肠</div>
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
.child-one {
    position: relative;
    height: 37.9rem;
}
.child-header {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: #0984e3;
}

.food-list {
    overflow: hidden;
    position: absolute;
    top: 4.3rem;
    left: 0;
    right: 0;
    bottom: 0;
}

ul {
  list-style: none;
  padding: 0;
}

.li-food-item {
  display: flex;
  height: 5rem;
  margin: .4rem 0;
  background-color: #f5f5f5;
}

.food-name {
  height: 5rem;
  margin-left: 2.5rem;
  line-height: 5rem;
  font-size: 1.5rem;
}
.food-price {
  height: 5rem;
  margin-left: 7rem;
  line-height: 5rem;
  font-size: 1.5rem;
}
</style>