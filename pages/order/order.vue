<template>
	<view class="order-container">
		<view class="order-container-title">
			<image @click="goback" src="../../static/images/left_jian_000.png"></image>
			<view class="total">
				<text>我的订单</text>
			</view>
		</view>
		<view class="order-list">
			<ul>
				<li>
					<view class="order-title">
						<text>订单编号：2020168</text>
						<text style="color:#999999">订单已取消</text>
					</view>
					<ul class="hasBuyGoodsList">
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
					</ul>
					<view class="total_price">总额：￥100.00</view>
				</li>
				<li>
					<view class="order-title">
						<text>订单编号：2020168</text>
						<text style="color: rgb(241, 117, 50);">订单已完成</text>
					</view>
					<ul class="hasBuyGoodsList">
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
					</ul>
					<view class="total_price">总额：￥100.00</view>
				</li>
				<li>
					<view class="order-title">
						<text>订单编号：2020168</text>
						<text style="color: rgb(241, 117, 50);">派送中</text>
					</view>
					<ul class="hasBuyGoodsList">
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
						<li>
							<view>
								<image src="../../static/images/e84d2cb4c171c68da1c9278c61853ef.png"></image>
							</view>
							<view>
								<text>最爱吃的榴莲</text>
								<text style="color: rgb(200, 144, 107);">￥100.00</text>
							</view>
							<view style="color: #999999;">
								x1
							</view>
						</li>
					</ul>
					<view class="total_price">总额：￥100.00</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			goback(){
				uni.navigateBack({
					url:'../person/person'
				})
			}
		}
	}
</script>

<style>
	.order-container-title{
		display: flex;
		justify-content: space-between;
		padding: 30upx;
	}
	.order-container-title image{
		width: 50upx;
		height: 50upx;
	}
	.order-container-title text{
		font-size: 32upx;
	}
	.total_price{
		text-align: end;
		font-size: 28upx;
		color: rgb(241, 117, 50);
		padding: 0 30upx;
	}
	.order-container{
		background-color: #F8F8F8;
		padding-top: 30upx;
		
	}
	.order-list ul,.order-list li{
		margin:0;
		padding: 0;
		list-style: none;
	}
	.order-list>ul>li{
		margin-bottom: 30upx;
		background-color: #fff;
		padding-bottom: 30upx;
	}
	.order-title{
		display: flex;
		justify-content: space-between;
		font-size: 28upx;
		padding:30upx;
		position: relative;
	}
	.order-title::after{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 1upx;
		content: "";
		border-bottom: 1upx solid #e0e0e0;
		transform: scaleY(0.5);
	}
	.hasBuyGoodsList li{
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30upx;
		background-color: #fff;
		position: relative;
	}
	.hasBuyGoodsList li:not(:last-child)::after{
		position: absolute;
		content: "";
		width: 90%;
		left: 5%;
		bottom: 0;
		height: 1upx;
		border-bottom: 1upx solid #E0E0E0;
		transform: scaleY(0.5);
	}
	.hasBuyGoodsList li view:nth-child(1){
		width: 180upx;
		height: 200upx;
		background: #FFFFFF;
		border-radius: 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.hasBuyGoodsList li view:nth-child(1) image{
		width: 160upx;
		height: 160upx;
	}
	.hasBuyGoodsList li view:nth-child(2){
		display: flex;
		flex-direction: column;
		font-size: 28upx;
		margin-right: 200upx;
	}
	.hasBuyGoodsList li view:nth-child(2) text:nth-child(1){
		padding: 10upx 0;
	}
	.hasBuyGoodsList li view:nth-child(3){
		text-align: end;
		font-size: 28upx;
	}
	.hasBuyGoodsList li view:nth-child(3) text{
		margin-left:30upx;
	}
	.hasBuyGoodsList li view:nth-child(3) text:first-child,.hasBuyGoodsList li view:nth-child(3) text:last-child{
		width: 50upx;
		height: 50upx;
		background-color: rgba(0,0,0,0.2);
		display: inline-block;
		text-align: center;
		line-height: 50upx;
		border-radius: 51upx;
	}
</style>
