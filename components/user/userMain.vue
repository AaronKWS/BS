<template>
  <div class="user-container">
    <div class="user-info">
      <div class="user-name">
        <p class="user-top">用户:</p>
        <p class="user-down">李青</p>
      </div>
      <div class="yu-e">
        <p class="user-top">余额:</p>
        <p class="user-down">68.9 ￥</p>
      </div>
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
        <el-button type="danger" class="exit-btn">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goUserOrder: function() {
      this.$emit('goUserPage','order');
    }
  }
}
</script>

<style>
p {
  margin: 0;
}
.user-container {
  position: relative;
  height: 37.9rem;
  padding-top: .6rem;
}
.user-info {
  height: 17.9rem;
  width: 22rem;
  margin-left: 50%;
  transform: translateX(-50%);
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
    margin-top: 3rem;
}
.li-user-item {
    position: relative;
    display: flex;
    height: 3.7rem;
    border-bottom: 2px solid white;
    background-color: #f5f5f5;
}
.exit-btn {
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 2rem;
  width: 22rem;
}

.left-icon {
    font-size: 2rem;
    line-height: 3.7rem;
    margin-left: .7rem;
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
    right: .9rem;;
}
</style>