<template>
  <div>
    <!-- 子路有出口 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="comment-o" to="/qa">问答</van-tabbar-item>
      <van-tabbar-item icon="video-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      active: 0
    }
  }
}

</script>
<style scoped>
</style>
