<template>
  <div id="app">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <div class="box"></div>
    <i class="toutiao toutiao-pinglun"></i>
     <i class="toutiao toutiao-shanchu"></i>
     <van-icon name="like" badge="99" size="160"/>
     <van-button icon="chat" type="primary">按钮</van-button>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
