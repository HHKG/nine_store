<template>
	<view class="feedback_container">
		<view class="feedback-container-title">
			<image @click="goback" src="../../static/images/left_jian_000.png"></image>
			<view class="total">
				<text>吐槽一下</text>
			</view>
		</view>
		<view>
			<view style="box-shadow: 0 0 15upx 0 #E0E0E0;display: inline-block;padding: 10upx 30upx;border-top-right-radius: 12upx;border-bottom-right-radius: 12upx;">我有哪些不足？</view>
			<view>
				<ul>
					<li style="float: right;">
						<view style="margin-top: 30upx;">
							<view style="text-align: end;padding: 10upx 30upx;"><text>2020-06-30</text><text style="margin-left: 30upx;">黄华康说：</text></view>
							<view style="box-shadow: 0 0 15upx 0 #E0E0E0;display: inline-block;padding: 10upx 30upx;border-top-left-radius: 12upx;border-bottom-left-radius: 12upx;padding-left: 30upx;">我想说的有很多,但是不知道从哪说起?</view>
						</view>
					</li>
					<li style="float: right;">
						<view style="margin-top: 30upx;">
							<view style="text-align: end;padding: 10upx 30upx;"><text>2020-06-30</text><text style="margin-left: 30upx;">黄华康说：</text></view>
							<view style="box-shadow: 0 0 15upx 0 #E0E0E0;display: inline-block;padding: 10upx 30upx;border-top-left-radius: 12upx;border-bottom-left-radius: 12upx;padding-left: 30upx;">我想说的有很多,但是不知道从哪说起?</view>
						</view>
					</li>
					<li style="float: right;">
						<view style="margin-top: 30upx;">
							<view style="text-align: end;padding: 10upx 30upx;"><text>2020-06-30</text><text style="margin-left: 30upx;">黄华康说：</text></view>
							<view style="box-shadow: 0 0 15upx 0 #E0E0E0;display: inline-block;padding: 10upx 30upx;border-top-left-radius: 12upx;border-bottom-left-radius: 12upx;padding-left: 30upx;">我想说的有很多,但是不知道从哪说起?</view>
						</view>
					</li>
					<li style="float: right;">
						<view style="margin-top: 30upx;">
							<view style="text-align: end;padding: 10upx 30upx;"><text>2020-06-30</text><text style="margin-left: 30upx;">黄华康说：</text></view>
							<view style="box-shadow: 0 0 15upx 0 #E0E0E0;display: inline-block;padding: 10upx 30upx;border-top-left-radius: 12upx;border-bottom-left-radius: 12upx;padding-left: 30upx;">我想说的有很多,但是不知道从哪说起?</view>
						</view>
					</li>
					<li style="float: right;">
						<view style="margin-top: 30upx;">
							<view style="text-align: end;padding: 10upx 30upx;"><text>2020-06-30</text><text style="margin-left: 30upx;">黄华康说：</text></view>
							<view style="box-shadow: 0 0 15upx 0 #E0E0E0;display: inline-block;padding: 10upx 30upx;border-top-left-radius: 12upx;border-bottom-left-radius: 12upx;padding-left: 30upx;">我想说的有很多,但是不知道从哪说起?</view>
						</view>
					</li>
				</ul>
			</view>
		</view>
		<view class="say_something">
			<input type="text" placeholder="吐槽一下..."/>
			<text>发送</text>
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
					delta:1
				})
			}
		}
	}
</script>

<style>
	.say_something{
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
	}
	.say_something input{
		border: 1upx solid #e0e0e0;
		padding: 10upx 0;
		flex: 1;
	}
	.say_something text{
		font-size: 28upx;
		background-color:rgb(241, 117, 50);
		color: #FFFFFF;
		padding: 14upx 30upx;
	}
	.feedback_container ul,.feedback_container li{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.feedback_container ul::after{
		display: block;
		height: 0;
		content: "";
		visibility: hidden;
		clear: both;
		overflow: hidden;
	}
	.feedback_container{
		font-size: 32upx;
	}
	.feedback-container-title{
		display: flex;
		justify-content: space-between;
		padding: 30upx;
	}
	.feedback-container-title image{
		width: 50upx;
		height: 50upx;
	}
	.feedback-container-title text{
		font-size: 32upx;
	}
</style>
