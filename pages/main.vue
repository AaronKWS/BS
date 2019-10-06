<template>
  <div class="container">
    <el-row class="top">
      <img src="@/assets/img/icon.svg" alt="头像" class="image" />
    </el-row>
    <el-row class="middle">
      <div class="box">
        <el-input placeholder="请输入内容" v-model="name" clearable class="innerBox"></el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
    </el-row>
    <el-row class="bottom">
      <el-button type="primary" class="btn" @click="login">登陆</el-button>
    </el-row>
    <div v-show="show" class="warn">{{result}}</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'login',
  data: () => {
    return {
      name: '',
      password: '',
      show: false,
      result: ''
    }
  },
  watch: {
    show: function(val) {
      if (val) {
        let self = this
        setTimeout(function() {
          self.show = false
        }, 2000)
      }
    }
  },
  methods: {
    login: function() {
      if (this.name === '' || this.password === '') {
        this.result = '请输入用户名密码！'
        this.show = true
      } else {
        let self = this
        self.$axios
          .post('/login', {
            name: self.name,
            password: self.password
          })
          .then(data => {
            data = data.data
            if (data.status === '200') {
              let reu = data.result[0]
              self.setUser(reu)
              self.$router.push('/')
            } else {
              console.log(data.result)
              self.result = data.result
              self.show = true
            }
          })
      }
    },
    mounted() {
      const oHtml = document.getElementsByTagName('html')[0]
      const width = oHtml.clientWidth
      // 320px的屏幕基准像素为12px
      oHtml.style.fontSize = 12 * (width / 320) + 'px'
    },
    ...mapMutations(['setUser'])
  }
}
</script>

<style>
body,
html {
  margin: 0;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
}

.top {
  margin-top: 5rem;
}

.middle {
  margin-top: 2.5rem;
}
.bottom {
  margin-top: 2.5rem;
}

.image {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}
.innerBox {
  margin-bottom: 0.9rem;
}

.box {
  width: 21rem;
}
.btn {
  margin-top: 1rem;
  width: 20rem;
}
.warn {
  z-index: 999;
  position: fixed;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  text-align: center;
  line-height: 2.5rem;
  font-size: 0.9rem;
  background-color: rgba(255, 0, 0, 0.6);
}
</style>
