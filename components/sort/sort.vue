<template>
	<view>
		<view >
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view >
					<view v-for="(item,index) in staff" :key="index" id="demo1" class="scroll-view-item_H uni-bg-red" >
							<image class="background" :src="imageAddress+'/head/'+(index+1)+'.png'"></image>
							<image class="gender" :src="imageAddress+item.img"></image>
							<view class="selected_view">
								<text class="text1">{{item.nickName}}</text>
								<!-- <view class="text">{{item.nickName}}</view> -->
								<uni-rate :value="item.score" size="18" readonly="true" allow-half color="#bbb" active-color="#3385FF" />
								<!-- <view class="text" >{{item.nickName}}</view> -->
							</view>
							
							<!-- <image class="background" :src="imageAddress+'/head/'+(index+1)+'.png'"></image> -->
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		props:[
			"imageAddress",
			"staff"
		],
		data() {
			return {
				
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		},
		methods: {
			upper: function(e) {
				// console.log(e)
			},
			lower: function(e) {
				// console.log(e)
			},
			scroll: function(e) {
				// console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			},
			selelcted_click01:function(){
				uni.navigateTo({
					url:"../../pages/zhinan/zhinan"
				})
			},
			selelcted_click02:function(){
				uni.navigateTo({
					url:"../../pages/shengcun/shengcun"
				})
			},
			selelcted_click03:function(){
				uni.navigateTo({
					url:"../../pages/chi/chi"
				})
			}
		}
	}
</script>

<style lang="scss">
	
	.selected_view {
		position: relative;
		top:25rpx;
		display: inline-block;
		height: 70rpx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 92%;
		margin: 0 auto;
		height: 200rpx;
		border-radius: 7px;
		background-color: white;
		border: 1px solid white;
		margin-top: -60rpx;
		line-height: 200rpx;


	}

	.scroll-view-item_H {
		/* position: relative; */
		display: inline-block;
		width: 60%;
		height: 130rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 13px;
		text-align: left;
		line-height: 40rpx;
		box-shadow: 3px 3px #8c8c8c;
		border-radius: 7px;
	}

	.gender {
		width: 70rpx;
		height: 70rpx;
		transform: translateY(35rpx);
		padding-left: 10rpx;
		z-index: 20;
	}
	.text1{
		font-size: 25rpx;
		font-family: 楷体;
		margin: 0rpx;
		padding: 0rpx;
		/* display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1 */
	}
	.background{
		/* position: absolute; */
		/* text-align: center;
		left: 50%; */
		width: 70rpx;
		height: 70rpx;
		transform: translateY(35rpx);
		z-index: 19;
	}

	.selected_01 {
		margin-left: 15px;
	}

	.selected_02 {
		margin-left: 15px;
	}

	.selected_view {
		line-break:loose;
		white-space: pre;
		margin-left: 10px;
		text{
			font-size: 12px;
		}
	}
</style>
