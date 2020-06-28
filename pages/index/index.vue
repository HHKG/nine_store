<template>
	<view class="content">
		<h2>{{title}}</h2>
		<!-- tab -->
		<view class="tab" id="tab">
			<ul id="ulDom">
				<li @click='selectTab($event,0)' :class="activeTab===0?'tab_active':''">Cookies</li>
				<li @click='selectTab($event,1)' :class="activeTab===1?'tab_active':''">Cookies cake</li>
				<li @click='selectTab($event,2)' :class="activeTab===2?'tab_active':''">Cookies</li>
				<li @click='selectTab($event,3)' :class="activeTab===3?'tab_active':''">Cookies</li>
				<li @click='selectTab($event,4)' :class="activeTab===4?'tab_active':''">Cookies cake</li>
				<li @click='selectTab($event,5)' :class="activeTab===5?'tab_active':''">Cookies</li>
			</ul>
		</view>
		<!-- goods list -->
		<view class="goodsList">
			<ul>
				<li>
					<view class="goods_msg">
						<image src="../../static/images/1586426326998023933.jpg"></image>
						<text>￥100.00</text>
						<text>Cookie mint</text>
					</view>
					<view class="add_btn">
						<text>加入购物车</text>
					</view>
				</li>
				<li>
					<view class="goods_msg">
						<image src="../../static/images/1586426326998023933.jpg"></image>
						<text>￥100.00</text>
						<text>Cookie mint</text>
					</view>
					<view class="add_btn">
						<text>加入购物车</text>
					</view>
				</li>
				<li>
					<view class="goods_msg">
						<image src="../../static/images/1586426326998023933.jpg"></image>
						<text>￥100.00</text>
						<text>Cookie mint</text>
					</view>
					<view class="add_btn">
						<text>加入购物车</text>
					</view>
				</li>
				<li>
					<view class="goods_msg">
						<image src="../../static/images/1586426326998023933.jpg"></image>
						<text>￥100.00</text>
						<text>Cookie mint</text>
					</view>
					<view class="add_btn">
						<text>加入购物车</text>
					</view>
				</li>
				<li>
					<view class="goods_msg">
						<image src="../../static/images/1586426326998023933.jpg"></image>
						<text>￥100.00</text>
						<text>Cookie mint</text>
					</view>
					<view class="add_btn">
						<text>加入购物车</text>
					</view>
				</li>
				<li>
					<view class="goods_msg">
						<image src="../../static/images/1586426326998023933.jpg"></image>
						<text>￥100.00</text>
						<text>Cookie mint</text>
					</view>
					<view class="add_btn">
						<text>加入购物车</text>
					</view>
				</li>
				<li>
					<view class="goods_msg">
						<image src="../../static/images/1586426326998023933.jpg"></image>
						<text>￥100.00</text>
						<text>Cookie mint</text>
					</view>
					<view class="add_btn">
						<text>加入购物车</text>
					</view>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '互联网百货',
				activeTab: 0
			}
		},
		onLoad() {

		},
		methods: {
			selectTab(e, currentIndex) {
				this.activeTab = currentIndex;
				console.log(e)
				let ulDom = document.getElementById('ulDom');
				let TabDom = document.getElementById('tab');
				let currentLi = document.getElementsByTagName('li')[currentIndex];
				console.log(currentLi.offsetWidth, ulDom.offsetWidth, currentLi.offsetLeft, e.detail.x) //获取元素的宽度
				let clickX = e.detail.x; //点击页面的位置
				let hScrollBlockW = TabDom.offsetWidth / 2; //tab滑动窗口的一半；
				// if (currentIndex > 1) {
				ulDom.scrollLeft += clickX - hScrollBlockW + currentLi.offsetWidth / 2 - 50; //设置滚动条的位置**算法：目标**
				// }
			}
		}
	}
</script>

<style>
	ul,
	li {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.content h2 {
		padding: 30upx;
	}

	.content .tab {
		margin-top: 20upx;
	}

	.content .tab ul {
		display: flex;
		flex-wrap: nowrap;
		overflow: auto;
	}

	.content .tab ul li {
		float: left;
		margin-right: 40upx;
		flex: 1 0 auto;
		color: #C0C0C0;
	}

	.content .tab ul li:first-child {
		margin-left: 30upx;
	}

	.content .tab ul li:last-child {
		padding-right: 30upx;
	}

	.content .tab ul::-webkit-scrollbar {
		display: none;
	}

	.tab_active {
		/* (200, 144, 107) (241, 117, 50)*/
		color: rgb(241, 117, 50) !important;
	}

	.content .goodsList ul {
		margin: 50upx 40upx 0upx;
	}

	.content .goodsList ul li {
		float: left;
		width: 320upx;
		height: 500upx;
		border-radius: 20upx;
		box-shadow: 0px 0px 15px #e0e0e0;
		overflow: hidden;
		margin-bottom: 50upx;
		position: relative;
	}
	
	.content .goodsList ul li::after{
		position: absolute;
		content: "";
		top: 30upx;
		left: 30upx;
		width: 50upx;
		height: 50upx;
		background-image: url(../../static/images/right_icon.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.content .goodsList ul li .goods_msg {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top:130upx;
		position: relative;
	}

	.content .goodsList ul li .goods_msg image {
		width: 150upx;
		height: 150upx;
	}
	.content .goodsList ul li .goods_msg text:nth-child(2){
		margin-top: 40upx;
		color: rgb(200, 144, 107);
		font-size: 32upx;
	}
	.content .goodsList ul li .goods_msg text:nth-child(3){
		margin-top: 5upx;
		font-size: 32upx;
		padding-bottom: 20upx;
	}
	.content .goodsList ul li .goods_msg::after{
		position: absolute;
		content: "";
		border-bottom: 1upx solid #E0E0E0;
		height:1upx;
		width: 280upx;
		bottom: 0;
		left: 20upx;
		transform: scaleY(0.5);
	}
	.content .goodsList ul li .add_btn{
		height: 60upx;
		color: rgb(200, 144, 107);
		font-size: 28upx;
		line-height: 60upx;
		text-align: center;
	}
	.content .goodsList ul li .add_btn text{
		position: relative;
		padding-left: 80upx;
	}
	.content .goodsList ul li .add_btn text::after{
		position: absolute;
		content: "";
		top: 5upx;
		left: 0upx;
		width: 30upx;
		height: 30upx;
		background-image: url(../../static/images/shopCar.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		
	}
	.content .goodsList ul li:nth-child(even) {
		margin-left: 30upx;
	}

	.content .goodsList ul::after {
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
		overflow: hidden;
		content: "";
	}
</style>
