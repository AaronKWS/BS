<template>
  <div class="father-box">
    <div class="father-header">
      <img src="@/assets/img/icon.svg" class="image-icon" />
    </div>
    <div class="menu-list" ref="wrapper">
        <div class="item" @click="goFood">
          <img src="@/assets/img/mb.png" class="food-image" />
          <span>食物</span>
        </div>
        <div class="item" @click="goDrink">
          <img src="@/assets/img/yl.png" class="food-image" />
          <span>饮品</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goFood: function() {
      this.$emit('goPage', 'child-one')
    },
    goDrink: function() {
      this.$emit('goPage', 'child-two')
    }
  }
}
</script>

<style>
.father-box {
  position: relative;
  height: 37.9rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.father-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 4rem;
  background-color: #0984e3;
  text-align: center;
  line-height: 4rem;
  font-size: 1.6rem;
  font-weight: 600;
  color: #aaa;
  font-family: 'mystyle';
}

@font-face {
  font-family: 'mystyle';
  src: url('../../../assets/tools/GenJyuuGothic-Bold.ttf');
}

.menu-list {
  overflow: hidden;
  position: absolute;
  top: 4.2rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.item {
  display: flex;
  height: 5rem;
  margin: 0.2rem 0;
  background-color: #f5f5f5;
}
.food-image {
  width: 3.5rem;
  height: 3.5rem;
  margin-left: 0.5rem;
  margin-top: 0.7rem;
  border-radius: 0.35rem;
}
.item > span {
  display: block;
  height: 5rem;
  margin-left: 1.45rem;
  line-height: 5rem;
  font-size: 1.5rem;
  color: #666;
}
.image-icon {
  width: 2.5rem;
  height: 4rem;
}
</style>