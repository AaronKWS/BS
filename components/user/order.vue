<template>
  <div class="order-page">
    <div class="order-header">
      <span class="iconfont icon-style" @click="goUserMain">&#xe603;</span>
    </div>
    <div class="order-body" ref="wrapper">
      <ul>
        <li class="li-order-list">
          <dl>
            <dt class="order-title">
              <img src="@/assets/img/icon.svg" class="order-icon"/>
              <span class="order-title-middle">酷动网咖</span>
              <span class="order-title-right">5号机</span>
            </dt>
            <dd class="order-list-middle">
              <p class="order-list-middle-top">总消费金额</p>
              <p class="order-list-middle-bottom">50.6￥</p>
            </dd>
            <dd class="order-list-bottom">
              <div class="order-list-bottom-item">
                <p>上网时间</p>
                <p>5小时</p>
              </div>
              <div class="order-list-bottom-item">
                <p>其他消费</p>
                <p>60￥</p>
              </div>
              <div class="order-list-bottom-item">
                <p>消费时间</p>
                <p>2016.5.7</p>
              </div>
            </dd>
          </dl>
        </li>
        <li class="li-order-list">
          <dl>
            <dt class="order-title">
              <img src="@/assets/img/icon.svg" class="order-icon"/>
              <span class="order-title-middle">酷动网咖</span>
              <span class="order-title-right">5号机</span>
            </dt>
            <dd class="order-list-middle">
              <p class="order-list-middle-top">总消费金额</p>
              <p class="order-list-middle-bottom">50.6￥</p>
            </dd>
            <dd class="order-list-bottom">
              <div class="order-list-bottom-item">
                <p>上网时间</p>
                <p>5小时</p>
              </div>
              <div class="order-list-bottom-item">
                <p>其他消费</p>
                <p>60￥</p>
              </div>
              <div class="order-list-bottom-item">
                <p>消费时间</p>
                <p>2016.5.7</p>
              </div>
            </dd>
          </dl>
        </li>
        <li class="li-order-list">
          <dl>
            <dt class="order-title">
              <img src="@/assets/img/icon.svg" class="order-icon"/>
              <span class="order-title-middle">酷动网咖</span>
              <span class="order-title-right">5号机</span>
            </dt>
            <dd class="order-list-middle">
              <p class="order-list-middle-top">总消费金额</p>
              <p class="order-list-middle-bottom">50.6￥</p>
            </dd>
            <dd class="order-list-bottom">
              <div class="order-list-bottom-item">
                <p>上网时间</p>
                <p>5小时</p>
              </div>
              <div class="order-list-bottom-item">
                <p>其他消费</p>
                <p>60￥</p>
              </div>
              <div class="order-list-bottom-item">
                <p>消费时间</p>
                <p>2016.5.7</p>
              </div>
            </dd>
          </dl>
        </li>
        <li class="li-order-list">
          <dl>
            <dt class="order-title">
              <img src="@/assets/img/icon.svg" class="order-icon"/>
              <span class="order-title-middle">酷动网咖</span>
              <span class="order-title-right">5号机</span>
            </dt>
            <dd class="order-list-middle">
              <p class="order-list-middle-top">总消费金额</p>
              <p class="order-list-middle-bottom">50.6￥</p>
            </dd>
            <dd class="order-list-bottom">
              <div class="order-list-bottom-item">
                <p>上网时间</p>
                <p>5小时</p>
              </div>
              <div class="order-list-bottom-item">
                <p>其他消费</p>
                <p>60￥</p>
              </div>
              <div class="order-list-bottom-item">
                <p>消费时间</p>
                <p>2016.5.7</p>
              </div>
            </dd>
          </dl>
        </li>
        <li class="li-order-list">
          <dl>
            <dt class="order-title">
              <img src="@/assets/img/icon.svg" class="order-icon"/>
              <span class="order-title-middle">酷动网咖</span>
              <span class="order-title-right">5号机</span>
            </dt>
            <dd class="order-list-middle">
              <p class="order-list-middle-top">总消费金额</p>
              <p class="order-list-middle-bottom">50.6￥</p>
            </dd>
            <dd class="order-list-bottom">
              <div class="order-list-bottom-item">
                <p>上网时间</p>
                <p>5小时</p>
              </div>
              <div class="order-list-bottom-item">
                <p>其他消费</p>
                <p>60￥</p>
              </div>
              <div class="order-list-bottom-item">
                <p>消费时间</p>
                <p>2016.5.7</p>
              </div>
            </dd>
          </dl>
        </li>
        <li class="li-order-list">
          <dl>
            <dt class="order-title">
              <img src="@/assets/img/icon.svg" class="order-icon"/>
              <span class="order-title-middle">酷动网咖</span>
              <span class="order-title-right">5号机</span>
            </dt>
            <dd class="order-list-middle">
              <p class="order-list-middle-top">总消费金额</p>
              <p class="order-list-middle-bottom">50.6￥</p>
            </dd>
            <dd class="order-list-bottom">
              <div class="order-list-bottom-item">
                <p>上网时间</p>
                <p>5小时</p>
              </div>
              <div class="order-list-bottom-item">
                <p>其他消费</p>
                <p>60￥</p>
              </div>
              <div class="order-list-bottom-item">
                <p>消费时间</p>
                <p>2016.5.7</p>
              </div>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  methods: {
    goUserMain: function() {
      this.$emit('goUserPage', 'user-main')
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style>
dd {
    margin: 0;
}
.order-page {
  position: relative;
  background-color: #dfe6e9;
  height: 37.9rem;
  color: #666;
}

.order-header {
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: #0984e3;
}
.order-body {
  overflow: hidden;
  position: absolute;
  top: 4.3rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.li-order-list {
  height: 15rem;
  width: 22rem;
  background-color: white;
  border-radius: .7rem;
  box-shadow: 0.2rem 0.3rem 0.4rem #999;
  margin-left: 50%;
  transform: translateX(-50%);
}

.order-title {
    display: flex;
    height: 2.5rem;
    border-bottom: 1px solid #ccc;
}

.order-icon {
    width: 1.36rem;
    height: 2.5rem;
    margin-left: 1rem;
}

.order-title-middle {
    display: block;
    line-height: 2.5rem;
    margin-left: 1rem;
}

.order-title-right {
    position: absolute;
    right: 1rem;
    display: block;
    line-height: 2.5rem;
}
.order-list-middle {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 7.5rem;
    border-bottom: 1px solid #ccc;
}
.order-list-middle-top{
    font-size: .9rem;
}
.order-list-middle-bottom{
    margin-top: .35rem;
    font-size: 2.25rem;
    color: black;
}

.order-list-bottom {
    display: flex;
}

.order-list-bottom-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5rem;
    border-left: 1px solid #ccc;
}
.order-list-bottom-item>p:nth-child(1) {
    text-align: center;
    font-size: .9rem;
}

.order-list-bottom-item>p:nth-child(2) {
    text-align: center;
    font-size: 1.3rem;
    color: black;
}
</style>