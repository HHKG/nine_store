<template>
	<view style="padding-bottom: 100upx;">
		<view class="shopping_car">
			<view class="title">
				<image src="../../static/images/left_jian_fff.png"></image>
				<view class="total">
					<text>总计：</text>
					<text>￥10000.00</text>
				</view>
			</view>
			<view class="shopping_car_list">
				<ul>
					<li>
						<view>
							<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
						</view>
						<view>
							<text>最爱吃的榴莲</text>
							<text>￥100.00</text>
						</view>
						<view>X1</view>
					</li>
					<li>
						<view>
							<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
						</view>
						<view>
							<text>最爱吃的榴莲</text>
							<text>￥100.00</text>
						</view>
						<view>X1</view>
					</li>
					<li>
						<view>
							<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
						</view>
						<view>
							<text>最爱吃的榴莲</text>
							<text>￥100.00</text>
						</view>
						<view>X1</view>
					</li>
					<li>
						<view>
							<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
						</view>
						<view>
							<text>最爱吃的榴莲</text>
							<text>￥100.00</text>
						</view>
						<view>X1</view>
					</li>
				</ul>
			</view>
		</view>
		<view style="padding: 60upx;font-size: 32upx;text-align: center;">继续</view>
	<Nav :tarBarIndex="3"></Nav>
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
		},
	}
</script>

<style>
	.shopping_car{
		padding: 60upx;
		border-bottom-left-radius: 50upx;
		border-bottom-right-radius: 50upx;
		background-color: rgb(235, 114, 110);
		/* background-color: rgb(241, 117, 50); */
		color: #FFFFFF;
	}
	.total{
		font-size: 32upx;
	}
	.shopping_car .title{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.shopping_car .title image{
		width: 50upx;
		height: 50upx;
	}
	.shopping_car .shopping_car_list ul,.shopping_car .shopping_car_list ul li{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.shopping_car .shopping_car_list ul{
		margin-top: 60upx;
	}
	.shopping_car .shopping_car_list ul li{
		display: flex;
		align-items: center;
		margin-bottom: 65upx;
		justify-content: space-between;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(1){
		width: 180upx;
		height: 200upx;
		background: #FFFFFF;
		border-radius: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(1) image{
		width: 160upx;
		height: 160upx;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(2){
		display: flex;
		flex-direction: column;
		font-size: 28upx;
		margin-right: 160upx;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(2) text:nth-child(1){
		padding: 10upx 0;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(3){
		text-align: end;
		font-size: 28upx;
	}
</style>
