<template>
     <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input  class="mui-input-numbox" type="number" value="1" @change="getchangeCount" ref="numbox"/>
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
            this.$emit('getcount',parseInt(this.$refs.numbox.value));
        }
    },
    props:['max'],
    watch: {
        'max':function(newVal,oldVal){
             mui(".mui-numbox").numbox().setOption('max',newVal);
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>