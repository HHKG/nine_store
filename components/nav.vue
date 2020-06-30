<template>
	<view>
		<Dalog ref="dalog"></Dalog>
		<view class="bottom_fixed">
			<view class="nav_container">
				<view class="nav_left">
					<!-- 居左 -->
					<view class="left_small_round">
						<view style="position: absolute;width: 25upx;height: 24upx;bottom: 0;left: 0;background-color: #FFFFFF;border-top-right-radius: 100%;"></view>
					</view>
					<image @click="selectNav(0)" :src="tarBarIndex===0?home_page_active:home_page"></image>
					<image @click="selectNav(1)" :src="tarBarIndex===1?person_active:person"></image>
				</view>
				<view  class="nav_center">
					<view style="width: 100upx; height: 100upx;background-color:#fff;border-radius: 101upx;"></view>
				</view>
				<view class="nav_right">
					<!-- 居右 -->
					<!-- <view class="right_round"></view> -->
					<view class="right_small_round">
						<view style="position: absolute;width: 25upx;height: 24upx;bottom: 0;right: 0;background-color: #FFFFFF;border-top-left-radius: 100%;"></view>
					</view>
					<image @click="selectNav(2)" src="../static/images/search_active.png"></image>
					<view class="goodCarList">
						<image @click="selectNav(3)" :src="tarBarIndex===3?shop_car_active:shop_car"></image>
					     <text></text>
					</view>
				</view>
			</view>
			<image @click="pay" class="btn_icon" src="../static/images/pay.png"></image>
		</view>
	</view>
</template>

<script>
	import Dalog from './dalog.vue';
	// import Utils from '../static/utils/util.js'; 
	import home_page from '../static/images/home_page.png';
	import home_page_active from '../static/images/home_page_active.png';
	import person from '../static/images/person.png';
	import person_active from '../static/images/person_active.png';
	import shop_car from '../static/images/shop_car.png';
	import shop_car_active from '../static/images/shop_car_active.png';
	export default{
		props:['tarBarIndex','dataList'],
		components:{
			Dalog
		},
		data(){
			return{
				active_nav:0,
				home_page:home_page,
				home_page_active:home_page_active,
				person:person,
				person_active:person_active,
				shop_car:shop_car,
				shop_car_active:shop_car_active,
			}
		},
		methods:{
			selectNav(currentNavIndex){
				console.log('ok');
				if(currentNavIndex===2){
					uni.navigateTo({
						url:'../search/search'
					})
				} ;
				this.active_nav=currentNavIndex;
				if(currentNavIndex===1){
					uni.navigateTo({
						url:'../person/person'
					})
				}
				if(currentNavIndex===0){
					uni.navigateTo({
						url:'../index/index'
					})
				}
				if(currentNavIndex===3){
                    let targetData=JSON.stringify(this.dataList);
					uni.navigateTo({
						url:'../shoppingCar/shoppingCar?dataList='+targetData
					})
				}
			},
			// 生成订单
			pay(){
				console.log('oks')
				// this.$emit('showDalog','success');
				this.$refs.dalog.toggleMessage('success');
			}
		}
	}
</script>

<style>
	.goodCarList{
		display: flex;align-items: center;position: relative;
	}
	.goodCarList text{
		font-size: 24upx;
		position: absolute;
		top: -4upx;
		right: -4upx;
		z-index: 111;
		color: #FFFFFF;
		height: 15upx;
		width: 15upx;
		border-radius: 11upx;
		text-align: center;
		line-height: 15upx;
		background-color: rgb(240, 86, 78);
	}
	.nav_container {
		position: relative;
		display: flex;
		justify-content: space-between;
		background-color: #fff;
		overflow: hidden;
		box-shadow: 0 0 15upx 0 #E0E0E0;
		border-top-left-radius: 50upx;
		border-top-right-radius: 50upx;
		
	}

/* 	.nav_container::after {
		display: block;
		content: "";
		height: 0;
		visibility: hidden;
		overflow: hidden;
		clear: both;

	} */

	.nav_container .nav_left,
	.nav_container .nav_right {
		width: 40%;
		height: 100upx;
		background-color: #fff;
/* 		float: left; */
		/* overflow: hidden; */
		position: relative;
		display: flex;
		justify-content: space-around;
		align-items: center;
		

	}
	.nav_container .nav_left image,
	.nav_container .nav_right image{
		width: 40upx;
		height: 40upx;
	}
	.nav_container .nav_left{
		border-top-right-radius: 30upx;
		border-top-left-radius: 50upx;
		
		/* box-shadow: -2upx -3upx 0upx 1upx #E0E0E0; */
		
	}
	.nav_container .nav_left .left_small_round{
		position: absolute;
		width: 25upx;
		height: 25upx;
		background-color: #E0E0E0;
		top: -4upx;
		right:-11upx;
	}
	
	.nav_container .nav_right{
		border-top-right-radius: 50upx;
		border-top-left-radius: 30upx;
		/* box-shadow: 2upx -3upx 0upx 1upx #E0E0E0; */
	}
	.nav_container .nav_right .right_small_round{
		position: absolute;
		width: 25upx;
		height: 25upx;
		background-color: #E0E0E0;
		top: -4upx;
		left: -11upx;
		/* border-bottom-right-radius: 100%; */
/* 		border-width: 20upx;
		border-color: red bule;
		border-style: solid; */
	}
	.left_round,.right_round{
		position: absolute;
		width: 50upx;
		height: 50upx;
		background-color: #E0E0E0;
		top: -0upx;
	}
	.left_round{
		right: 0upx;
		z-index: 10;
		border-bottom-left-radius: 100%;
	}
	.right_round{
		left: -0upx;
		 border-bottom-right-radius: 100%;
	}

	.nav_container .nav_center {
		position: absolute;
		top: -20upx;
		left: 50%;
		width: 100upx;
		height: 50upx;
		margin-left: -50upx;
		border-bottom-left-radius: 121upx;
		border-bottom-right-radius: 121upx;
		background-color: rgb(247, 250, 247);
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0upx 20upx 5upx 20upx #e0e0e0;
		z-index: 1;
	}
	.btn_icon{
		position: absolute;
		width: 120upx;
		height: 120upx;
		top: -50upx;
		left: 50%;
		margin-left: -60upx;
		z-index: 110;
		border-radius: 50%;
	}
	.bottom_fixed{
		position: fixed;
		height:100upx;
		width: 100%;
		display: block;
		bottom: 0;
		left: 0;
		z-index: 12;
	}
</style>
