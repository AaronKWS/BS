<template>
  <div class="user-container">
    <div class="user-info" v-if="show">
      <div class="user-name">
        <p class="user-top">用户:</p>
        <p class="user-down">{{users.username}}</p>
      </div>
      <div class="yu-e">
        <p class="user-top">余额:</p>
        <p class="user-down">￥{{users.balance}}</p>
      </div>
    </div>
    <div class="err-login" v-else>
      <nuxt-link to="/main">请登陆</nuxt-link>
    </div>
    <div class="user-list">
      <ul>
        <li class="li-user-item" @click="goUserOrder">
          <i class="el-icon-s-order left-icon"></i>
          <div class="middle-text">交易明细</div>
          <i class="el-icon-arrow-right right-icon"></i>
        </li>
        <li class="li-user-item">
          <i class="el-icon-s-help left-icon" style="color:green"></i>
          <div class="middle-text">关于我们</div>
          <i class="el-icon-arrow-right right-icon"></i>
        </li>
      </ul>
      <el-button type="danger" class="exit-btn" @click="exitApp">退出</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      show: false,
      timer: null
    }
  },
  created() {
    let self = this
    console.log(this.users)
    console.log(this.timer)
    if (this.users === null) {
      this.show = false
    } else {
      this.show = true
      this.timer = setInterval(function() {
        self.$axios
          .post('/login', {
            name: self.users.username,
            password: self.users.pwd
          })
          .then(data => {
            data = data.data
            let reu = data.result[0]
            self.setUser(reu)
          })
      }, 4000)
    }
  },
  methods: {
    goUserOrder: function() {
      this.$emit('goUserPage', 'order')
    },
    exitApp: function() {
      this.exitUser()
      this.show = false
      clearInterval(this.timer)
      this.timer = null
    },
    ...mapMutations(['setUser', 'exitUser'])
  },
  computed: {
    ...mapState(['users'])
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style>
p {
  margin: 0;
}
.user-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 37.9rem;
  padding-top: 0.5rem;
}
a {
  text-decoration: none;
}
.user-info {
  height: 17.9rem;
  width: 22rem;
  background-color: rgb(24, 144, 255);
  border-radius: 0.9rem;
  box-shadow: 0.2rem 0.3rem 0.4rem #999;
}

.err-login {
  height: 17.9rem;
  line-height: 17.9rem;
  text-align: center;
  width: 22rem;
  font-size: 3rem;
  background-color: rgb(24, 144, 255);
  border-radius: 0.9rem;
  box-shadow: 0.2rem 0.3rem 0.4rem #999;
}
.user-name {
  height: 6.9rem;
  padding-top: 1.95rem;
  background-color: rgb(14, 104, 187);
  border-radius: 0.9rem 0.9rem 0 0;
}
.yu-e {
  padding-top: 1.95rem;
}

.user-top {
  height: 2rem;
  color: #ddd;
  margin-left: 1rem;
}
.user-down {
  color: white;
  margin-left: 3.5rem;
  font-size: 2rem;
}
.user-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
}
.user-list > ul {
  width: 100%;
}
.li-user-item {
  position: relative;
  display: flex;
  height: 3.7rem;
  border-bottom: 2px solid white;
  background-color: #f5f5f5;
}
.exit-btn {
  margin-top: 2rem;
  width: 22rem;
}

.left-icon {
  font-size: 2rem;
  line-height: 3.7rem;
  margin-left: 0.7rem;
  color: yellow;
}

.middle-text {
  margin-left: 1rem;
  line-height: 3.7rem;
  font-size: 1.15rem;
  color: #666;
}
.right-icon {
  position: absolute;
  font-size: 2rem;
  line-height: 3.7rem;
  right: 0.9rem;
}
</style>