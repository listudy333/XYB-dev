<template>
	<view>
		<view class="context" >
			<uni-card :cover="imageAddress+card.img"  :title="card.buyer" :sub-title="'截止日期：'+card.endTime" :extra="'￥ '+card.price" :thumbnail="imageAddress+card.avatar" @click="onClick">
				<text class="uni-body">{{card.description}}</text>
				<view class="add">
					<view class="start-time">发布时间：{{card.startTime}}</view>
				</view>
			</uni-card>
		</view>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				card:{
					id:1,
					buyer:"历飞雨",
					avatar:"/defaultIcon/user2.png",
					stuff:"快递",
					startTime:"2022-4-5",
					endTime:"2022-4-8",
					price:"1",
					description:"鞋子Nike,毒物买的，体积不大",
					taked:false,
					img:"express/1.jpg"
				},
				options: [{
						icon: 'chat',
						text: '联系客户'
					},
					// {
					// 	icon: 'shop',
					// 	text: '店铺',
					// 	info: 2,
					// 	infoBackgroundColor: '#007aff',
					// 	infoColor: "#f5f5f5"
					// },
				],
				buttonGroup: [
					// {
					// 	text: '加入购物车',
					// 	backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
					// 	color: '#fff'
					// },
					{
						text: '确认接单',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
								
			}
		},
		onLoad(res) {
			let id = res.id;
			let page = getCurrentPages();
			let info = "";
			let imageAddress="";
			// #ifdef MP-WEIXIN
			info = page[page.length-2].data.target;
			imageAddress=page[page.length-2].data.imageAddress;
			// #endif
			// #ifdef H5
			info = page[page.length-2].target;
			imageAddress=page[page.length-2].imageAddress;
			// #endif
			
			console.log(info)
			this.card = info;
			this.imageAddress=imageAddress;
			console.log(this.imageAddress)
			
			
		},
		methods: {
			onClick(){
				
			},
			buttonClick(res){
				uni.navigateTo({
					url:"../../../mine/myOrders/myOrders"
				});
			}
		}
	}
</script>

<style>
	.goods-carts {
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			position: fixed;
			left: 0;
			right: 0;
			/* #ifdef H5 */
			left: var(--window-left);
			right: var(--window-right);
			/* #endif */
			bottom: 0;
		}
	.context{
		padding-bottom:100rpx ;
	}
	.add{
		position: relative;
		width: 100%;
		margin: 20rpx 0rpx;
		
	}
	.start-time{
		font-size: 15rpx;
		left:80%;
	}
	
</style>
