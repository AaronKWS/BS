<template>
  <div class="child-one">
    <div class="child-header">
      <span class="iconfont icon-style" @click="goMenu">&#xe617;</span>
      <p class="head-title">食物列表</p>
    </div>
    <div class="food-list" ref="wrapper" v-if="show === 1">
      <ul>
        <li class="li-food-item" v-for="(item, index) of list" :key="index">
          <img :src="item.img" class="food-image" />
          <div class="food-name">{{item.name}}</div>
          <div class="food-price">￥{{item.price}}</div>
        </li>
      </ul>
    </div>
    <div class="no-login" v-else-if="show === 2">暂无任何可显示数据！</div>
    <div class="no-login" v-else-if="show === 3">用户未登录，请先登陆！</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  data() {
    return {
      list: [],
      show: 3
    }
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    goMenu: function() {
      this.$emit('goPage', 'father')
    }
  },
  created() {
    if (this.users === null) {
      this.show = 3
    } else {
      this.$axios.get('/food').then(data => {
        data = data.data
        this.list = data.result;
        if(this.list.length === 0) {
          this.show = 2
        }else {
          this.show = 1
        }
      })
    }
  },
  mounted() {
    if (this.show === 1) {
      this.scroll = new Bscroll(this.$refs.wrapper)
    }
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

.no-login {
  overflow: hidden;
  position: absolute;
  top: 4.3rem;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  color: #666;
  font-size: 0.8rem;
}

ul {
  list-style: none;
  padding: 0;
}

.li-food-item {
  display: flex;
  height: 5rem;
  margin: 0.4rem 0;
  background-color: #f5f5f5;
}

.food-name {
  height: 5rem;
  margin-left: 2.5rem;
  line-height: 5rem;
  font-size: 1.5rem;
}
.food-price {
  position: absolute;
  height: 5rem;
  right: 2rem;
  line-height: 5rem;
  font-size: 1.5rem;
}
</style>