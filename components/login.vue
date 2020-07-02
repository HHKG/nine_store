<template>
	<view>
		<view class="login_mask">
			<view class="login_form">
				<h4>登录</h4>
				<view class="input_cnt">
					<view>
						<text>姓名：</text><input v-model="userName" type="text" placeholder="请输入你的姓名" />
					</view>
					<view>
						<text>密码：</text><input v-model="password" type="text" placeholder="请输入你登录密码" />
					</view>
				</view>
				<button @click="login">登录/注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	import apiAxios from '../api/requset.js';
	export default{
		data(){
			return{
				userName:'',
				password:'',
			}
		},
		methods:{
			login(){
				let user={userName:this.userName,password:this.password};
				let ckeckUserName={userName:this.userName};
				apiAxios('GET','/GetUser',ckeckUserName).then(res=>{
					console.log(res);
				})
				return;
				
				apiAxios('POST','/RegisterOrLogin',user).then(res=>{
					if(res.data.code==='0000'){
						sessionStorage.setItem('userName',this.userName);
						this.$emit('reloadPage',this.userName);
					}
				})
			}
		}
	}
</script>

<style>
	.login_mask{
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
		z-index: 999;
	}
	.login_mask .login_form{
		background-color: #fff;
		padding: 60upx 60upx 90upx;
		position: absolute;
		left: 50%;
		top: 50%;
		width: 460upx;
		/* height: 306upx; */
		margin:-213upx 0 0 -290upx;
		border-radius: 24upx;
		box-shadow: 0 0 15upx 0 #E0E0E0;
		
	}
	.login_mask .login_form::after{
		position: absolute;
		content: "*若应用没有该用户名，默认注册一个用户名!";
		bottom: 40upx;
		left: 60upx;
		font-size: 24upx;
		color: rgb(240, 86, 78);
	}
	.login_mask .login_form h4{
		text-align: center;
		margin-bottom: 30upx;
	}
	.login_mask .login_form .input_cnt view{
		display: flex;
		margin-bottom: 30upx;
	}
	.login_mask .login_form .input_cnt view text{
		font-size: 30upx;
		padding: 10upx 0;
	}
	.login_mask .login_form .input_cnt view input{
		flex: 1;
		font-size: 30upx;
		border: 1upx solid #E0E0E0;
		padding: 10upx;
		border-radius: 12upx;
	}
	.login_mask .login_form button{
		background-color: rgb(241, 117, 50);
		color: #fff;
		font-size: 30upx;
	}
</style>
