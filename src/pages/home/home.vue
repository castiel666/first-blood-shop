<template>
    <div class="home">
       <div class="home_top">
        <carousel></carousel>
         <div class="home_juan"  v-for="(juan,index) in localdata.juanimg" :key="index"  @click="tips">
           <img :src="juan"/>
         </div>
       </div>
  <div class="home_continer">
    <div class="goods">
        <div class=" goods-list " v-for="item in homedata.product" :key="item.id" @click="open(item.id)">
        <img :src="item.img" v-lazy="item.img"/>
          <div class="goods-info">
            <h3 class="title">{{item.title}}</h3>
            <p class="sale-info">
              <span class="sale-price">￥{{item.price}}.00</span>
            </p>
          </div>
          <div class="goods-buy">
            <button class="buy-btn">
              <span class="buy-txt">购买</span>
            </button>
          </div>
        </div>
    </div>
   </div>
       <p class="bottom">已经到底啦~</p>
    </div>
  
</template>

<script>
import axios from 'axios';
import carousel from '@/common/carousel'
export default {
  name:'home',
  data(){
    return{
      homedata:[],
      localdata:[]
    }
  },
  components:{
    carousel
  },
  mounted:function(){ 
    this.getData()
    console.log('参数',this.$route.query)
  },
  methods:{
    //获取数据
     getData:function(){
        this.$axios.get("/api/js/shopData.json").then(res=>{
            this.homedata=res.data
            
        }),
        this.$axios.get("/static/data.json").then(res=>{
          this.localdata=res.data
        })
     },
     //领取成功提示
     tips() {
        this.$notify({
          title: '领取成功',
          message: '赶快去下单吧',
          type: 'success'
        });
      },
     //根据id进入单品页
     open:function(id){
       this.$router.push({path:'product',query:{id:id}})
     } 
  },
  
}
</script>

<style scoped>
.home{
  max-width: 640px;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 80px;
}
.home_top img{
  width: 100%;
  height: 100%;
}
.home_juan{
  width: 50%;
  display: inline-block;
}
.home_juan img{
  padding: 8px;
}
.home_box{
  background:#fff;
  padding:10px 15px;
}
.home_box img{
  width: 100%;
  height: 100%;
}
.home_box .title{
  margin:5px 0;
  word-break:break-all;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  padding-left:5px;
  font-size:14px;
}
.home_box .twotitle{
  font-size:12px;
  color:#999;
  line-height:15px;
  height:15px;
  padding-left:5px;
  margin: 5px 0;
}
.home_box .sale_info{
  margin-top:10px;
  height:20px;
  line-height:20px;
  position:relative;
  padding-left:5px;
}
.home_box .sale_price{
  color:#f44;
  font-size:14px;
  position: absolute;
}
.home_box button{
  position:absolute;
  right:10px;
  color:#fff;
  background-color:#f44;
  border:1rpx solid #f44;
  border-radius:14px;
  font-size:12px;
  line-height:20px;
  height:20px;
  padding:0 10px;
  cursor:pointer;
  top:0;
  border: 0;
}
.bottom{
  text-align: center;
  color: #cccccc;
  line-height:50px;
  font-size: 14px;
}
.coupons{
  background: #ffffff;
}
.goods{
  padding: 0 5px;
}
.goods-list{
  float: left;;
  width: 50%;
  padding:  0 2px;
  position: relative;
  overflow: hidden;
}
.goods-list img{
  width:100%;
  height: 50vw;
  
}
.goods-info{
  padding-bottom: 36px;
  text-align: left;
  padding: 10px;
  padding-bottom: 36px;
}
.goods-info .title{
  font-size: 14px;
  height: 22px;
  overflow: hidden;
  word-break: break-all;
  margin-bottom: 6px;
}
.sale-info{
  height: 26px;
  line-height: 26px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #f44;
  font-size: 16px;
}
.goods-buy{
  bottom: 10px;
  right: 10px;
  position: absolute;
}
.buy-btn{
  font-size: 14px;
  line-height: 24px;
  height: 26px;
  border-color: #f44;
  color: #f44;
  min-width: 48px;
  cursor: pointer;
  border-radius: 2px;
}
button{
  position: relative;
  padding: 0;
  display: inline-block;
  height: 44px;
  line-height: 42px;
  border-radius: 2px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 16px;
  text-align: center;
  -webkit-appearance: none;
  -webkit-text-size-adjust: 100%;
  background-color: #fff;
  border: 1px solid #eee;
}
button::before{
    content: " ";
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    width: 100%;
    height: 100%;
    border: inherit;
    border-color: #000;
    background-color: #000;
    border-radius: inherit;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}

</style>

