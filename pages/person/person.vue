<template>
	<view class="person_container">
		<view>
			<text>Hello,</text>
			<h2>黄华康</h2>
		</view>
		<view class="function">
			<ul>
				<li>
					<text>我的订单</text>
				</li>
				<li>
					<text>我的地址</text>
				</li>
				<li>
					<text>想要属于自己的软件？</text>
				</li>
			</ul>
		</view>
	
	<Nav :tarBarIndex="1"></Nav>
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
	.person_container{
		padding: 60upx 60upx 120upx;
	}
	.function ul,.function ul li{
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.function ul li{
		margin-top: 120upx;
		width: 510upx;
		height: 130upx;
		border-radius: 24upx;
		position: relative;
		display: flex;
		padding: 60upx;
		align-items: flex-end;
	}
	.function ul li text{
		position: relative;
		font-size: 36upx;
		color: #FFFFFF;
	}
	.function ul li text::after{
		position: absolute;
		top: -60upx;
		left: 0;
		content: "";
		width: 50upx;
		height: 50upx;
		background-image: url(../../static/images/gointo.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.function ul li:nth-child(1){
		background-color: rgb(85, 71, 255);
	}
	.function ul li:nth-child(2){
		background-color: rgb(225, 152, 198);
	}
	.function ul li:nth-child(3){
		background-color: rgb(96, 199, 213);
	}
</style>
