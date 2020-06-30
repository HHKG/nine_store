<template>
	<view class="search_container">
		<view style="display: flex;padding: 10upx 20upx;">
			<input  type="text" placeholder="请输入查找的零食" />
			<text>取消</text>
		</view>
		<Nav :tarBarIndex="2"></Nav>
	</view>
</template>

<script>
	import Nav from '../../components/nav.vue';
	export default{
		components:{
			Nav
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
	.search_container{
		background-color: #F8F8F8;height: 100vh;
	}
	.search_container input{
		background-color: #FFFFFF;border-radius: 12upx;padding: 10upx 60upx;flex: 1;position: relative;
	}
	.search_container input::after{
		position: absolute;
		top: 0;
		left: 10upx;
		top: 50%;
		margin-top:-22.5upx;
		width: 45upx;
		height: 45upx;
		content: "";
		background-image: url(../../static/images/search.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.search_container text{
		font-size: 30upx;
		line-height: 60upx;
		margin-left: 20upx;
	}
</style>
