<template>
  <div class="container">
    <el-row class="top">
      <img src="@/assets/img/icon.svg" alt="头像" class="image" />
    </el-row>
    <el-row class="middle">
      <div>
        <el-input placeholder="请输入内容" v-model="name" clearable class="box"></el-input>
      </div>
      <div>
        <el-input placeholder="请输入密码" v-model="password" show-password class="box"></el-input>
      </div>
    </el-row>
    <el-row class="bottom">
      <el-button type="primary" class="btn" @click="login">登陆</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data: () => {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      this.$router.push('/main');
    }
  }
}
</script>

<style>
body,html {
  width: 100%;
  height: 100%;
  margin: 0;
}

.container {
  width: 100%;
  height: 100%;
}

.top {
  margin-top: 5rem;
}

.middle {
  margin-top: 2.5rem;
  padding-left: 1.25rem;
}
.bottom {
  margin-top: 2.5rem;
}

.image {
  margin-left: 50%;
  transform: translateX(-50%);
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
}

.box {
  width: 21rem;
  margin: 0.3rem 0;
}
.btn {
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 1rem;
  width: 20rem;
}
</style>
