<template>
	<view >
		<view class="top_box">
		      <view class="top_1">
		            <view v-if="!isLogin" class="top_1_1">
						<button open-type="getUserInfo" bindgetuserinfo='login' type="mini">点击登录</button>
					</view>
		            <view v-else class="top_1_1">
		                  <open-data type="userNickName"></open-data>
		            </view>
		            <view class="top_1_2" v-if="!isLogin">一秒登录，体验所有功能</view>
		             <view class="top_1_2" v-if="isLogin" bindtap="go" data-go="/pages/edit/edit" data-status="1">点击修改资料</view>
		      </view>
		      <view class="top_2">
		            <view class="avator">
		                  <open-data v-if="isLogin" type="userAvatarUrl"></open-data>
		                  <image v-if="!isLogin" src="/static/mine/user.png"></image>
		            </view>
		      </view>
		</view>
		<view class="center_box">
		      <view class="center_1"  data-go="/pages/sell/list/list" data-status="1">
		            <image src="/static/mine/history.png"></image>
		            <view>我的发布</view>
		      </view>
		      <view class="center_1" bindtap="go" data-go="/pages/order/list/list" data-status="1">
		            <image src="/static/mine/used1.png"></image>
		            <view>我的二手</view>
		      </view>
		      <view class="center_1" bindtap="go" data-go="/pages/help/help">
		            <image src="/static/mine/help.png"></image>
		            <view>帮助中心</view>
		      </view>
		</view>
		<view class="blank"></view>
		<view class="bottom_box">
		      
		      <view class="bottom_card" bindtap="go" data-go="/pages/kefu/kefu" data-status="1">
		            <view class="bottom_1">
		                  <image src="/static/mine/kefu.png"></image>
		                  <view>联系客服</view>
		            </view>
		            <image src="/static/mine/right-arrow.png"></image>
		      </view>
		      <view class="bottom_card">
		            <view class="bottom_1">
		                  <image src="/static/mine/feedback.png"></image>
		                  <view>问题反馈</view>
		            </view>
		            <image src="/static/mine/right-arrow.png"></image>
		            <button open-type="feedback"></button>
		      </view>
		      <view class="bottom_card" bindtap="showShare">
		            <view class="bottom_1">
		                  <image src="/static/mine/share1.png"></image>
		                  <view>好用分享</view>
		            </view>
		            <image src="/static/mine/right-arrow.png"></image>
		      </view>
		      <view class="bottom_card" bindtap="go" data-go="/pages/about/about">
		            <view class="bottom_1">
		                  <image src="/static/mine/guanyu.png"></image>
		                  <view>关于程序</view>
		            </view>
		            <image src="/static/mine/right-arrow.png"></image>
		      </view>
		</view>
		
		
		<!--分享弹出层-->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	

.top_box {
      width: 100%;
      padding: 40rpx 30rpx 30rpx 30rpx;
      display: flex;
      box-sizing: border-box;
      border-bottom: 1rpx solid #eee;
}

.top_1 {
      display: flex;
      flex-direction: column;
      width: 70%;
      justify-content: space-between;
      height: 140rpx;
      box-sizing: border-box;
      padding: 10rpx 20rpx;
      margin:0 30rpx;
}

.top_1_1 {
      font-size: 40rpx;
      letter-spacing: 2rpx;
}

.top_1_2 {
      font-size: 30rpx;
      color: #919191;
      line-height: 42rpx;
}

.top_2 {
      width: 30%;
      height: 140rpx;
      display: flex;
      justify-content: center;
      align-items: center;
}

.avator {
      width: 140rpx;
      height: 140rpx;
      border-radius: 70rpx;
      overflow: hidden;
}

.avator image {
      width: 140rpx;
      height: 140rpx;
}

.center_box {
      width: 100%;
      padding: 20rpx 0;
      height: 200rpx;
      display: flex;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
}

.center_1 {
      width: 160rpx;
      height: 160rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
}

.center_1 view {
      font-size: 26rpx;
      padding-top: 20rpx;
}

.center_1 image {
      width: 60rpx;
      height: 60rpx;
}

.blank {
      width: 100%;
      height: 20rpx;
      background: #f4f4f4;
}

.bottom_box {
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 0 40rpx;
      flex-direction: column;
}

.bottom_card {
      position: relative;
	  padding: 0rpx 15rpx;
      width: 100%;
      height: 124rpx;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1rpx solid #eee;
	  border-radius: 20rpx;
      background: #fff;
}
.bottom_card button{
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0.01;
}
.bottom_card image {
      width: 14rpx;
      height: 18rpx;
}

.bottom_1 {
      display: flex;
      height: 100%;
      align-items: center;
}

.bottom_1 image {
      width: 40rpx;
      height: 40rpx;
}

.bottom_1 view {
      font-size: 30rpx;
      letter-spacing: 3rpx;
      padding-left: 30rpx;
}


.share_contain {
      display: flex;
      flex-direction: column;
      align-items: center;
}

.share_box {
      display: flex;
      align-items: center;
      padding: 10rpx 20rpx 25rpx 20rpx;
      box-sizing: border-box;
      width: 500rpx;
      justify-content: space-around;
}

.share_one {
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
}

.share_one image {
      width: 70rpx;
      height: 70rpx;
}

.share_one view {
      padding-top: 20rpx;
      font-size: 26rpx;
}

.share_title {
      font-size: 30rpx;
      letter-spacing: 3rpx;
      padding: 16rpx;
}

.share_border {
      margin-top: 20rpx;
      display: flex;
      box-sizing: border-box;
      height: 6rpx;
      width: 60rpx;
      border-radius: 3rpx;
      border-bottom:6rpx solid #fbbd08;
}

.share_button {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.01;
      border: none;
}

.share_button::after {
      border: none;
}

.share_bor {
      height: 60rpx;
      width: 1rpx;
      border-left: 1rpx solid #e7e7e7;
}

</style>
