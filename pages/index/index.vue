<template>
	<view class="content">
		<view class="title_banner">
			<!-- <h2>{{title}}</h2> -->
		</view>
		<!-- tab -->
		<view class="tab" id="tab">
			<ul id="ulDom">
				<li v-for="(item,key) in categories" :key="key" @click='selectTab($event,key)' :class="activeTab===key?'tab_active':''">{{item}}</li>
			</ul>
		</view>
		<!-- goods list -->
		<view class="goodsList">
			<keep-alive>
				<ul>
					<li v-for="(item,index) in dataList" :key="index">
						<view @click="gotoDetail(item)" class="goods_msg">
							<image :src="item.goodImgUrl"></image>
							<text>￥{{item.goodPrice}}</text>
							<text>{{item.goodName}}</text>
						</view>
						<view class="add_btn" v-if="item.orderSum>=1||selectGoodsIndex===index?false:true" @click="addCar(index)">
							<text>加入购物车</text>
						</view>
						<view class="add_number" v-else>
							<text @click="reduceNumber(index)">-</text>
							<text>{{item.orderSum}}</text>
							<text @click="addNumber(index)">+</text>
						</view>
					</li>
				</ul>
			</keep-alive>
		</view>
		<Nav :tarBarIndex="0" :dataList="dataList"></Nav>
		<Login v-if="!currentUserName" @reloadPage="reloadPage($event)"></Login>
	</view>
</template>

<script>
	import goodImg from '../../static/images/1586426326998023933.jpg';
	import Nav from '../../components/nav.vue';
	import Login from '../../components/login.vue';
	import {mapState} from 'vuex';
	export default {
		components:{
			Nav,
			Login
		},
		data() {
			return {
				title: '互联网百货',
				selectGoodsIndex:null,
				activeTab: 0,
				showAddBtn: true,
				currentUserName:'',
				currentNumber: 1,
				categories:['肉制类','重口味','干粮类','爽口类','饮料类'],
				dataList:[
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					},
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					},
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					},
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					},
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					},
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					},
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					},
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					},
					{
						goodImgUrl:goodImg,
						orderSum:0,
						totalSum:0,
						goodPrice:100.00,
						goodName:'Cookie mint',
						goodDes:'思奇香手撕风干牛肉干500g四川特产风味零食真空独立包装肉干肉脯 五香味 500g'
					}
				]
			}
		},
		onLoad() {
			
		},
		computed:{
			...mapState(['userName'])
		},
		mounted() {
			this.$store.commit('getUserName');
			console.log('dsdsdsds')
			this.currentUserName=this.userName;
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
			},
			// 加入购物车
			addCar(currentIndex) {
				console.log(currentIndex,)
				// this.showAddBtn = false;
				this.selectGoodsIndex=currentIndex;
			},
			// 增加一个商品的数量
			addNumber(currentIndex) {
				this.selectGoodsIndex=currentIndex;
				this.dataList[this.selectGoodsIndex].orderSum+=1;
			},
			// 减少一个商品的数量
			reduceNumber(currentIndex) {
				this.selectGoodsIndex=currentIndex;
				if (this.dataList[this.selectGoodsIndex].orderSum ===0) {
					this.selectGoodsIndex= null;
					this.dataList[this.selectGoodsIndex].orderSum = 0;
				} else {
					this.dataList[this.selectGoodsIndex].orderSum-= 1;
				}
			},
			gotoDetail(currentItem){
				let tarData=JSON.stringify(currentItem);
				uni.navigateTo({
					url:'../goodDetail/goodDetail?currentItem='+tarData
				})
			},
			reloadPage(data){
				this.currentUserName=data;
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
     .content{
		 padding-bottom: 100upx;
	 }
	.content h2 {
		padding: 30upx;
	}

	.content .tab {
		margin-top: 60upx;
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
		height: 460upx;
		border-radius: 20upx;
		box-shadow: 0px 0px 15px #e0e0e0;
		overflow: hidden;
		margin-bottom: 50upx;
		position: relative;
	}

	.content .goodsList ul li::after {
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
		padding-top: 90upx;
		position: relative;
	}

	.content .goodsList ul li .goods_msg image {
		width: 150upx;
		height: 150upx;
	}

	.content .goodsList ul li .goods_msg text:nth-child(2) {
		margin-top: 40upx;
		color: rgb(200, 144, 107);
		font-size: 32upx;
	}

	.content .goodsList ul li .goods_msg text:nth-child(3) {
		margin-top: 5upx;
		font-size: 32upx;
		padding-bottom: 20upx;
	}

	.content .goodsList ul li .goods_msg::after {
		position: absolute;
		content: "";
		border-bottom: 1upx solid #E0E0E0;
		height: 1upx;
		width: 280upx;
		bottom: 0;
		left: 20upx;
		transform: scaleY(0.5);
	}

	.content .goodsList ul li .add_btn,
	.content .goodsList ul li .add_number {
		height: 60upx;
		color: rgb(200, 144, 107);
		font-size: 28upx;
		line-height: 60upx;
		text-align: center;
		margin-top: 5upx;
	}

	.content .goodsList ul li .add_number {
		padding: 0upx 40upx;
	}

	.content .goodsList ul li .add_number text:nth-child(2) {
		margin: 0upx 45upx;
	}

	.content .goodsList ul li .add_number text:nth-child(1),
	.content .goodsList ul li .add_number text:nth-child(3) {
		border: 3upx solid rgb(200, 144, 107);
		display: inline-block;
		height: 30upx;
		line-height: 30upx;
		width: 30upx;
		border-radius: 31upx;
		font-weight: bold;
		text-align: center;
	}

	.content .goodsList ul li .add_btn text {
		position: relative;
		padding-left: 80upx;
	}

	.content .goodsList ul li .add_btn text::after {
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

	.content .title_banner {
		width: 100%;
		height: 350upx;
		background-image: url(../../static/images/timg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
</style>
