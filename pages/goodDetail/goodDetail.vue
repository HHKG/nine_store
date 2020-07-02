<template>
	<view class="detail_container">
		<view class="good_container">
			<image @click="goback" class="go_back" src="../../static/images/back_icon.png"></image>
			<h2>Cookie</h2>
			<view class="good_detail">
				<image :src="targetData.goodImgUrl"></image>
				<text>￥{{targetData.goodPrice}}</text>
				<text>{{targetData.goodName}}</text>
				<text>
					{{targetData.goodDes}}
				</text>
				<button class="detail_add_btn" @click="addShoppingCar">加入购物车</button>
			</view>
		</view>
		
		<view class="bottom_fixed">
	    <!-- <Nav :tarBarIndex="0"></Nav> -->
		<Login v-if="showLoin"></Login>
		</view>
	</view>
</template>

<script>
	// import Nav from '../../components/nav.vue'
	import Login from '../../components/login.vue';
	export default{
		components:{
			// Nav
			Login
		},
		data(){
			return{
				targetData:{},
				showLoin:false
			}
		},
		onLoad(options) {
			let currentItem=JSON.parse(options.currentItem);
			this.targetData=currentItem;
		}
		,
		methods:{
			goback(){
				uni.redirectTo({
				   url:'../index/index'
				});
			},
			addShoppingCar(){
				this.showLoin=true;
				// console.log(this.showLoin)
				// return;
				console.log();
				uni.redirectTo({
				   url:'../index/index'
				});
			}
		}
	}
</script>

<style>
	.detail_container{
		background-color: rgb(247, 250, 247);
		height: 100vh;
	}
	.good_container {
		padding: 30upx 60upx 0upx;
	}
	.go_back{
		position: fixed;
		width: 50upx;
		height: 50upx;
		top: 50%;
		left: 30upx;
		margin-top: -25upx;
		background-color: rgba(0,0,0,0.1);
		border-radius: 51upx;
		box-shadow: 0upx 0upx 15upx 0upx #E0E0E0;
	}
	.good_container h2{
		color:rgb(241, 117, 50);
		font-size: 88upx;
		
	}
	.good_container .good_detail{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.good_container .good_detail image{
		margin-top: 40upx;
		width: 440upx;
		height: 280upx;
	}
	.good_container .good_detail text:nth-child(2){
		margin-top: 40upx;
		color: rgb(241,117,50);
		font-size: 48upx;
		font-weight: bold;
	}
	.good_container .good_detail text:nth-child(3){
		font-size: 52upx;
	}
	.good_container .good_detail text:nth-child(4){
		margin-top: 40upx;
		font-size: 24upx;
		color: #999999;
		text-align: center;
	}
	.detail_add_btn{
		margin-top: 50upx;
		width: 630upx;
		height: 100upx;
		border-radius: 101upx;
		color: #FFFFFF;
		background-color: rgb(241,117,50);
		box-shadow: 0px -1px 2px 0.1px #999;
	}
</style>
