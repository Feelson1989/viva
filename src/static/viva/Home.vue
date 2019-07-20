<template>
    <div class="page-tabbar">
        <div>
        <titilebar></titilebar>
            <mt-swipe :auto="2000">
                <mt-swipe-item v-for="item in items" :key="item.id">
                    <a :href="item.href" rel="external nofollow" >
                        <img :src="item.url" class="img"/>
                        <span class="desc"></span>
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>     
    </div>

</template>

<script>
//1.引入子组件
import  TitileBar from "./common/TitileBar.vue" 
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
    
    //2.注册子组件
    components:{
        "titilebar":TitileBar,
        'mt-swipe': Swipe,
        'mt-swipe-item': SwipeItem
    },
    data () {

  return {

  items: [
      {title: '你的名字',href: 'http://google.com',   url: 'src/assets/moluoge.jpg'}, 
      {title: '我的名字',href: 'http://baidu.com',   url: 'src/assets/qinxinan.jpg'},
      {title: 'weihong',href: 'http://baidu.com',   url: 'src/assets/tongzaimiaoxiang.jpg'},
      {title: 'feiyao',href: 'http://baidu.com',   url: 'src/assets/xinyunnan.jpg'},
      {title: 'i love you',href: 'http://baidu.com',  url: '/Users/mac/Desktop/vue_app_00/src/assets/yunzinan1915.jpg'},


   ]
  }
}
    
}
//3.在路由下面调用模块
</script>

<style scoped>

 img {

 width: 92%;

 }

 .mint-swipe {

 height: 300px;

 }

 .desc {

 font-weight: 600;

 opacity: .9;

 padding: 5px;

 height: 20px;

 line-height: 20px;

 width: 100%;

 color: #fff;

 background-color: gray;

 position: absolute;

 bottom: 0;

 }

</style>
