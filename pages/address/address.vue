<template>
	<view>
		<view class="address-container-title">
			<image @click="goback" src="../../static/images/left_jian_000.png"></image>
			<view class="total">
				<text>我的地址</text>
			</view>
		</view>
		<view class="address_card">
			<view>地址信息</view>
			<view>
				<text>姓名：黄华康</text>
				<text>电话：15219579677</text>
				<text>详细地址：深圳市南山区麒麟新村F栋903室</text>
			</view>
		</view>
		<view class="input_address">
			<view>填写地址信息</view>
			<view>
				<input type="text" placeholder="请输入姓名" />
				<input type="number" placeholder="请输入电话号码" />
				<input type="text" placeholder="请输入详细地址"/>
			</view>
		</view>
		<button class="submit">提交</button>
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
					delta:1
				})
			}
		}
	}
</script>

<style>
	.input_address{
		box-shadow: 0upx -10upx 20upx 0 #E0E0E0;
		font-size: 32upx;
	}
	.input_address view:first-child{
		position: relative;
		padding: 20upx 30upx;
	}
	.input_address view:last-child{
		padding: 30upx;
	}
	.input_address view:last-child input{
		border: 1upx solid #e0e0e0;
		padding: 10upx 0;
		border-radius: 12upx;
		margin-bottom: 30upx;
	}
	.submit{
		width: 690upx;
		background-color: rgb(241, 117, 50);
		color: #fff;
		font-size: 32upx;
	}
	.address-container-title{
		display: flex;
		justify-content: space-between;
		padding: 30upx;
	}
	.address-container-title image{
		width: 50upx;
		height: 50upx;
	}
	.address-container-title text{
		font-size: 32upx;
	}
	.address_card{
		width: 690upx;
		margin: 30upx auto;
		box-shadow: 0 0 30upx 0 #E0E0E0;
		border-radius: 24upx;
		font-size: 32upx;
	}
	.address_card view:nth-child(1){
		padding: 20upx;
		position: relative;
	}
	.address_card view:nth-child(1)::after,.input_address view:first-child::after{
		position: absolute;
		content: "";
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1upx;
		border-bottom: 1upx solid #E0E0E0;
		transform: scaleY(0.5);
	}
	.address_card view:nth-child(2){
		display: flex;
		flex-direction: column;
		padding: 30upx;
	}
	.address_card view:nth-child(2) text{
		margin-bottom:15upx;
	}
</style>
