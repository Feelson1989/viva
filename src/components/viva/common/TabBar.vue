<template>
<div class="tabbar">
<mt-tabbar v-model="selected">
  <mt-tab-item id="首页">
    <img slot="icon" src="../../../assets/ic_weixin_selected.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="留言">
    <img slot="icon" src="../../../assets/ic_nearby.png">
    留言
  </mt-tab-item>
  <mt-tab-item id="口碑">
    <img slot="icon" src="../../../assets/ic_kabao.png">
    口碑
  </mt-tab-item>
  <mt-tab-item id="关注我">
    <img slot="icon" src="../../../assets/ic_group_chat.png">
    关注我
  </mt-tab-item>
</mt-tabbar>
</div>
    
</template>
<script>
export default {
    data(){
        return{
            selected:"首页"
        }
    }
    
}
</script>
<style>

</style>

