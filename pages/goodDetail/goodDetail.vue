<template>
	<view class="good_container">
		<h2>Cookie</h2>
		<view class="good_detail">
			<image src="../../static/images/1586426326998023933.jpg"></image>
			<text>￥100.00</text>
			<text>Cookie mint</text>
			<text>
				京东平台卖家销售并发货的商品，由平台卖家提供发票和相应的售后服务。请您放心购买！
				注：因厂家会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与商城图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本商城没有及时更新，请大家谅解！
			</text>
			<button class="detail_add_btn">加入购物车</button>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.good_container {
		padding: 60upx;
		background-color: #e8e8df;
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
		margin-top: 60upx;
		width: 440upx;
		height: 280upx;
	}
	.good_container .good_detail text:nth-child(2){
		margin-top: 60upx;
		color: rgb(241,117,50);
		font-size: 48upx;
		font-weight: bold;
	}
	.good_container .good_detail text:nth-child(3){
		font-size: 52upx;
	}
	.good_container .good_detail text:nth-child(4){
		margin-top: 60upx;
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
