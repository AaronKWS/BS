<template>
  <div class="main-page">
    <div class="main-content">
      <component :is="currentTabComponent"></component>
    </div>
    <div class="main-menu">
      <div class="menu-left" :class="{ active: isActive }" @click="goList">
        <span class="iconfont font-style">&#xe600;</span>
        <div class="bottom-font">购物</div>
      </div>
      <div class="menu-right" :class="{ activetwo: isActiveTwo }" @click="goUser">
        <span class="iconfont font-style">&#xe608;</span>
        <div class="bottom-font">个人中心</div>
      </div>
    </div>
  </div>
</template>

<script>
import ListPage from '@/components/list/list'
import UserPage from '@/components/user/user'
export default {
  components: {
    ListPage,
    UserPage
  },
  data() {
    return {
      currentTabComponent: 'list-page',
      isActive: true,
      isActiveTwo: false
    }
  },
  methods: {
    goList: function() {
      this.currentTabComponent = 'list-page'
      this.isActive = true
      this.isActiveTwo = false
    },
    goUser: function() {
      this.currentTabComponent = 'user-page'
      this.isActive = false
      this.isActiveTwo = true
    }
  },
  mounted() {
    const oHtml = document.getElementsByTagName('html')[0]
    const width = oHtml.clientWidth
    // 320px的屏幕基准像素为12px
    oHtml.style.fontSize = 12 * (width / 300) + 'px'
  }
}
</script>

<style>
@import '../assets/css/iconfont.css';
body,
html {
  margin: 0;
  width: 100%;
  height: 100%;
}
.main-page {
  width: 100%;
  height: 100%;
}
.main-menu {
  z-index: 999;
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 4.5rem;
  background: #f5f5f5;
}

.menu-left,
.menu-right {
  flex: 1;
}

.menu-left,
.menu-right {
  padding-top: 0.4rem;
  text-align: center;
  color: #888;
}

.font-style {
  font-size: 2rem;
}
.active {
  color: blue;
  transform: scale(1.3);
}
.activetwo {
  color: blue;
  transform: scale(1.3);
}
.bottom-font {
  font-size: 0.7rem;
  font-weight: 400;
}
</style>