<template>
<div class="page-head">
    <span>VIVA旅行家</span>
   
    <span class="do-person">
        <label for="">
            <img src="../../../assets/ic_me_normal.png" alt="">
            <a href="http://127.0.0.1:8080/#/VILogin">个人中心</a>
        </label>
    </span>  
</div>
    
</template>

<script>
export default {
    data() {
        return {}
    },
    
}
</script>

<style scoped>
.page-head{
    display: flex;
    position: fixed;
    z-index: 999;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    background-color: aliceblue;
    height: 48px;
    color: blue;
    font-size: 14px;
   }



img{
    width: 22px;
    height: 22px;

}
a{
    height: 14px;
     background-color: aliceblue;
}
label{
    display: flex;
    flex-direction: column; /*元素按列排整*/
   align-items: center;    /*垂直居中*/
   font-size: 10px;
    margin: 0;
    padding: 0;
    height: 48px;

}


 
</style>

