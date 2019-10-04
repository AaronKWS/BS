<template>
  <div class="child-two">
    <div class="child-header">
      <span class="iconfont icon-style" @click="goMenu">&#xe617;</span><p class="head-title">饮品</p>
    </div>
    <div class="drink-list" ref="wrapper" v-if="show === 1">
      <ul>
        <li class="li-drink-item" v-for="(item, index) of list" :key="index">
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
import { mapState } from 'vuex';
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
    if(this.users === null) {
      this.show = 3;
    }else {
      this.$axios.get('/drink')
      .then(data => {
        data = data.data;
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