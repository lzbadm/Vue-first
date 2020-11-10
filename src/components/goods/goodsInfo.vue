<template>
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter" @after-enter="afterEnter" @enter="Enter" >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
						<swiper :ImgList="lunbotu" :isFull="false"></swiper>
				</div>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-header">{{goodsInfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
                        市场价：<del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsInfo.sell_price}}</span>
                    </p>
                    <p>购买数量:<number @getcount="getSelectedCount" :max="goodsInfo.stock_quantity"></number></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
				</div>
			</div>
		</div>
        <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
						<p>商品货号：{{goodsInfo.goods_no}}</p>
                        <p>库存情况：{{goodsInfo.stock_quantity}}</p>
                        <p>上架时间：{{goodsInfo.add_time|dateFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
		</div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import swiper from '../subcomponents/swiper.vue'
import number from './goodsinfo_number.vue'
export default {
    data() {
        return {
            id:this.$route.params.id,
            lunbotu:[],
            goodsInfo:{},
            ballFlag:false,
            selectedCount:1
        }
    },
    created() {
        this.getLunbotu();
        this.getGoodsInfo();
    },
    methods: {
        getLunbotu(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                if(result.body.status===0){
                    result.body.message.forEach(item=>{
                        item.img = item.src
                    })
                    this.lunbotu=result.body.message
                }
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.goodsInfo=result.body.message[0]
                }
            })
        },
        goDesc(id){
            this.$router.push({name:"goodsdesc",params:{id}})
        },
        goComment(id){
            this.$router.push({name:"goodscomment",params:{id}})
        },
        addToShopCar(){
            this.ballFlag=!this.ballFlag
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)"
        },
        afterEnter(el){
            this.ballFlag=!this.ballFlag
        },
        Enter(el,done){

            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();

            const x = badgePosition.left-ballPosition.left;
            const y = badgePosition.top-ballPosition.top;

            el.offsetWidth
            el.style.transform=`translate(${x}px,${y}px)`
            el.style.transition="all 0.5s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },
        getSelectedCount(count){
            this.selectedCount = count;
        }
    },
    components:{'swiper':swiper,'number':number}
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
    .now_price{
        color: red;
        font-size: 16px;
        font-weight: bold;
    }
    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0;
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top:390px;
        left:140px;
    }
}

</style>