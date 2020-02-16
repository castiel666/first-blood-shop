<template>
    <el-carousel :interval="5000" arrow="never" >
    <el-carousel-item v-for="item in localdata.carousel" :key="item.id">
      <img :src = "item.img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import axios from 'axios';
export default {
    name:'carousel',
    data() {
        return {
            localdata:[],
        }
    },
    mounted:function(){ 
    this.getData()
  },
      methods:{
    //获取数据
     getData:function(){
        this.$axios.get("/static/data.json").then(res=>{
          this.localdata=res.data
        })
     },
   }
  }
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
  .el-carousel {
    margin-top: 5px;
    width: 100%;
    height: 50vw;
    overflow: hidden;
  }  

 .el-carousel__item{
      width: 100%;
   
  }
  .el-carousel__item img{
      width: 100%;
      height: 50vw;
  }
  .el-carousel__container{
      height: 50rem;
      position: relative;
  }


  
</style>