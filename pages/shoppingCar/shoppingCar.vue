<template>
	<view style="padding-bottom: 100upx;">
		<view class="shopping_car">
			<view class="title">
				<!-- <image src="../../static/images/left_jian_fff.png"></image> -->
				<view class="total">
					<text>总计：</text>
					<text>￥{{totalSum}}</text>
				</view>
			</view>
			<view class="shopping_car_list">
				<ul>
					<li v-for="(item,key) in dataList" :key="key">
						<view>
							<image :src="item.goodImgUrl"></image>
						</view>
						<view>
							<text>{{item.goodName}}</text>
							<text>￥{{item.goodPrice}}</text>
						</view>
						<view>
							<text>-</text>
							<text>{{item.orderSum}}</text>
							<text>+</text>
						</view>
					</li>
					<!-- <li>
						<view>
							<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
						</view>
						<view>
							<text>最爱吃的榴莲</text>
							<text>￥100.00</text>
						</view>
						<view>
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</li>
					<li>
						<view>
							<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
						</view>
						<view>
							<text>最爱吃的榴莲</text>
							<text>￥100.00</text>
						</view>
						<view>
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</li>
					<li>
						<view>
							<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
						</view>
						<view>
							<text>最爱吃的榴莲</text>
							<text>￥100.00</text>
						</view>
						<view>
							<text>-</text>
							<text>1</text>
							<text>+</text>
						</view>
					</li> -->
				</ul>
			</view>
		</view>
		<view style="padding: 60upx;font-size: 32upx;text-align: center;">立即派送</view>
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
				dataList:[],
				totalSum:0
			}
		},
		onLoad(options) {
			let targetDataList=JSON.parse(options.dataList).filter((item,key)=>{
				this.totalSum+=item.orderSum*item.goodPrice;
				return item.orderSum>0;
			});
			this.dataList=targetDataList;
			
		}
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
		float: right;
	}
	.shopping_car .title::after{
		display: block;
		visibility: hidden;
		height: 0;
		clear: both;
		content: "";
		overflow: hidden;
/* 		display: flex;
		justify-content: end;
		align-items: center; */
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
		margin-right: 20upx;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(2) text:nth-child(1){
		padding: 10upx 0;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(3){
		text-align: end;
		font-size: 28upx;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(3) text{
		margin-left:30upx;
	}
	.shopping_car .shopping_car_list ul li view:nth-child(3) text:first-child,.shopping_car .shopping_car_list ul li view:nth-child(3) text:last-child{
		width: 50upx;
		height: 50upx;
		background-color: rgba(0,0,0,0.2);
		display: inline-block;
		text-align: center;
		line-height: 50upx;
		border-radius: 51upx;
	}
</style>
