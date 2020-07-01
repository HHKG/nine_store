<template>
	<view>
		<uni-popup ref="popupDialog" type="dialog" @change="change">
			<uni-popup-dialog :type="msgType" title="通知" content="点击确定立即派送订单!10分钟内不能更改!" :before-close="true" @confirm="dialogConfirm"
			 @close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		<!-- 消息提示 -->
		<uni-popup ref="popupMessage" type="message" @change="change">
			<uni-popup-message :type="msgType" :message="message" :duration="2000"></uni-popup-message>
		</uni-popup>
		<!-- <button class="button popup__success" @click="toggleMessage('success')"><text class="button-text">成功</text></button> -->
	</view>
</template>

<script>
	// import Utils from '../static/utils/util.js'; 
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import uniPopupShare from '@/components/uni-popup/uni-popup-share.vue'
	export default {
		props:['carData'],
		components: {
			uniPopupMessage,
			uniPopupDialog,
			uniPopupShare
		},
		data() {
			return {
				msgType: 'success',
				message: '订单正在配送中！',
			}
		},
		methods: {
			change(e) {
				console.log('popup ' + e.type + ' 状态', e.show)
			},
			toggleMessage(type) {
				this.msgType = type
				switch (type) {
					case 'success':
						this.message = '订单正在配送中'
						break
					case 'warn':
						this.message = '这是一条警告消息提示'
						break
					case 'info':
						this.message = '这是一条消息提示'
						break
					case 'error':
						this.message = '这是一条错误消息提示'
						break
				}
				this.$refs.popupDialog.open()
			},
			dialogConfirm(done) {
				this.$refs.popupMessage.open()
				console.log('点击确认');
				// 需要执行 done 才能关闭对话框
				console.log(this.carData);
				
				done()
			},
			dialogClose(done) {
				this.msgType = 'info'
				this.message = '确认订单可以10分钟内收到宝贝哦！'
				this.$refs.popupMessage.open()
				// 需要执行 done 才能关闭对话框
				done()
			},
		}
	}
</script>

<style>
</style>
