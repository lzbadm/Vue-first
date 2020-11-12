<template>
     <div class="mui-numbox" data-numbox-min='1' style="height:25px">
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input  class="mui-input-numbox" type="number" :value="initcount" @change="getchangeCount" ref="count" readonly/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
import mui from '../../lib/mui/js/mui'
export default {
    mounted() {
        mui(".mui-numbox").numbox();
    },
    methods: {
        getchangeCount(){
            this.$store.commit("updateGoodsInfo",{
                id:this.goodsid,
                count:this.$refs.count.value
            })
        }
    },
    props:['initcount','goodsid'],
}
</script>
<style lang="scss" scoped>
    
</style>