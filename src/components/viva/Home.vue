<template>
    <div class="page-tabbar">
        <div>
            <titilebar></titilebar>
            <div>
                <table></table>
                <mt-swipe :auto="2000">
                    <mt-swipe-item v-for="item in items" :key="item.id">
                        <a :href="item.href" rel="external nofollow" >
                            <img :src="item.url" class="img"/>
                            <span class="desc"></span>
                        </a>
                    </mt-swipe-item>
                    </mt-swipe>
            </div>
            <div class="container">
                <div class="short divc" >
                    <a href="">
                        <span>短途旅行</span><br>
                        <span>江南秘境</span><br>
                        <span>寻找上海周边小众旅行目的地</span>
                       
                    </a>
                </div>
                <div class="strong divc">
                    <a href="">
                        <span>长途旅行</span><br>
                        <span>始终坚持小团体</span><br>
                        <span>专注体验深入当地人</span>
                        
                    </a>
                </div>
            </div>
            <tabbar></tabbar>
        </div>     
    </div>

</template>

<script>
//1.引入子组件
import { Tabbar, TabItem } from 'mint-ui'
import TabBar from "./common/TabBar.vue"
import  TitileBar from "./common/TitileBar.vue" 
import {Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'

export default {
    
    //2.注册子组件
    components:{
        "tabbar":TabBar,
        "titilebar":TitileBar,
        'mt-swipe': Swipe,
        'mt-swipe-item': SwipeItem
    },
    data () {

  return {

  items: [
      {title: '你的名字',href: 'http://google.com',   url: 'http://7xnj7x.com2.z0.glb.qiniucdn.com/20190306102331'}, 
      {title: '我的名字',href: 'http://baidu.com',   url: 'http://7xnj7x.com2.z0.glb.qiniucdn.com/20190130104028'},
      {title: 'weihong',href: 'http://baidu.com',   url: 'http://7xnj7x.com2.z0.glb.qiniucdn.com/20180530141123'},
      {title: 'feiyao',href: 'http://baidu.com',   url: 'http://www.vivatraveler.com/uploads/website/banner/3s1gbmfn.kxj11152015105112.jpg'},
      {title: 'i love you',href: 'http://baidu.com',  url: 'http://7xnj7x.com2.z0.glb.qiniucdn.com/20180920111658'},


   ]
  }
}
    
}
//3.在路由下面调用模块
</script>

<style scoped>
* {margin: 0;
box-sizing: border-box;
}
 img {
width: 100%;
    height: 250px;
   

 }

 .mint-swipe {
 margin-top:48px;
 height: 250px;

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
.container{
    padding: 0%;
    margin-top:15px;
}
.container div {
  padding:15px;
  border:1px solid #e4e4e4;
  width: 100%;
  height: 130px;
}

.divc a {
    display: block;
    height: 100%;
    padding: 15px;
    outline: none;
    text-decoration: none;
    color: rgb(17, 16, 16);
    width: 329px;
}
.short{
    background: url(../../assets/pic-bus.jpg) center right #fff no-repeat;
    background-size: 126px 59px;
}
.strong{
    background: url(../../assets/pic-plane.jpg) center right #fff no-repeat;
    background-size: 126px 59px;
    margin-top:15px;
}
</style>
