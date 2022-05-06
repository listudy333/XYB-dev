<template>
	<view>
		<view class="container" >
			<view class="images">
					<swiper class="swiper-box" indicator-dots="true" autoplay="true" interval="3000">
						<swiper-item v-for="(item, index) in info.images" :key="index">
							<view class="swiper-item" >
								<image :src="imageAddress+'sellimage/'+item" mode="aspectFill"></image>
							</view>
						</swiper-item>
					</swiper>
				
				<!-- <swiper  :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"  v-for="(img,index) in info.images" :key="index">
					<swiper-item >
						<view class="goodsImg">
							<image :src="imageAddress+img"></image>
						</view>
					</swiper-item>
				</swiper> -->
			</view>
			<view class="intrduce">
				<view class="descript">
					{{info.descript}}
				</view>
				<view >
					<view class="nowP">￥{{info.price}}</view>
					<view class="before">原价:<text class="beforeP">￥{{info.beforeP}}</text></view>
				</view>
				<view class="clickInfo">
					<view class="clickNum">
						<text>{{info.visited}}</text>人查看过
					</view>
				</view>
				<view class="seller">
					<view class="imageView">
						<image :src="imageAddress+'user/images/'+info.sellerImg" mode="aspectFill" class="imageP"></image>
					</view>
					<view class="block">
						<view>{{info.seller}}</view>
						<view>发布时间：{{info.releaseTime}}</view>
					</view>
					
				</view>
				<view>
					<text>卖家信誉</text>
					<view><uni-rate :readonly="true" :value="4" active-color="red"/></view>
				</view>
				
				<view class="connect">
					<view class="info">
						<image class="connectIcon" :src="imageAddress + 'defaultIcon/'+info.connectType+'.png'"></image>
						<p>{{info.connect}}</p>
					</view>
				</view>
			</view>
			<view class="evaluate">
				<view class="total">
					<p class="p">评价 15</p>
					<p class="praise">好评度 85%<uni-icons type="right" size="15"></uni-icons></p>
				</view>
				<view class="tags">
					<uni-grid :column="3" :show-border="false" :square="false" >
						<uni-grid-item v-for="(item ,index) in tags" :index="index" :key="index">
							<view class="grid-item-box">
								<view class="grid-tag">
									<uni-tag :circle="true" :text="item.tag+'('+item.num+')'" type="primary" />
								</view>
							</view>
						</uni-grid-item>
					</uni-grid>
				</view>
				<view class="content" v-for="(item,index) in evaluates" :key="index">
					<view class="customPraise">
						<view class="line">
							<image class="customImg" :src="imageAddress+'defaultIcon/'+item.customIcon"></image>
							<p class="customNick">{{item.customName}}</p>
							<view class="stars">
								<view class="star">
									<uni-rate size="13" :readonly="true" :value="item.score" active-color="red"/>
								</view>
							</view>
						</view>
						<p class="releaseTime">{{item.releaseTime}}</p>
					</view>
					<view class="praise">
						<p>{{item.context}}</p>
						<uni-grid :column="3" :show-border="false" :square="false">
							<uni-grid-item v-for="(itemI ,indexI) in item.imgs" :index="indexI" :key="indexI">
									<image class="praiseImg" :src="imageAddress+'sellimage/'+itemI" mode="aspectFit" />
							</uni-grid-item>
						</uni-grid>
					</view>
				</view>
			</view>
		</view>
		
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="dialogToggle('info')" />
		</view>
		<!-- 使用组件 -->
		<!-- 提示窗示例 -->
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog type="info" cancelText="取消" confirmText="确认" title="" content="确认购买该二手商品？" @confirm="dialogConfirm"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageAddress:"",
				info:{
					id:1,
					seller:"墨彩环",
					sellerImg:"user/images/mch.jpeg",
					descript:"罗技（Logitech）M220 轻音鼠标 无线鼠标 办公鼠标 对称鼠标 带无线微型接收器 灰黑色 ",
					connect:"1425377583",
					connectType:"0",
					price:45,
					beforeP:150,
					sold:false,
					visited:20,
					releaseTime:"2022-04-05",
					images:[
						"lj1.jpg",
						"lj2.jpg"
					]
				},
				options: [{
						icon: 'chat',
						text: '联系卖家'
					},
					{
						icon: 'shop',
						text: '其他商品',
						// info: 2,
						infoBackgroundColor: '#007aff',
						infoColor: "#f5f5f5"
					},
				],
				buttonGroup: [
					
					{
						text: '购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
				tags:[
					{
						tag:"诚信",
						num:5
					},
					{
						tag:"认真负责",
						num:2
					},
					{
						tag:"童叟无欺",
						num:2
					},
					{
						tag:"质量好",
						num:3
					},
					{
						tag:"和新的一样",
						num:2
					},
					{
						tag:"回复快",
						num:20
					},
					{
						tag:"服务好",
						num:5
					},
				],
				evaluates:[
					{
						id:"1001",
						customIcon:"user5.png",
						customName:"烟火人间",
						score:3.5,
						releaseTime:"2022-04-22",
						context:"枕头舒适柔软值得购买，面料摸起来很舒服，一根线头都没有，做工非常精致。灰色边看起来很上档次，真空打包过来的很用心，以后买家纺床上用品都这家了，终于找到一家合适的了！还会再来！客服小陈很亲切，不错。",
						imgs:[
							"hm1A.jpg",
							"aoc1.jpg",
							"lj2.jpg",
							"aoc.jpg",
							"lj1.jpg"
						]
					},
					{
						id:"1002",
						customIcon:"user3.png",
						customName:"烟火人间",
						score:3.5,
						releaseTime:"2022-04-22",
						context:"枕头舒适柔软值得购买，面料摸起来很舒服，一根线头都没有，做工非常精致。灰色边看起来很上档次，真空打包过来的很用心，以后买家纺床上用品都这家了，终于找到一家合适的了！还会再来！客服小陈很亲切，不错。",
						imgs:[
							"hm1A.jpg",
							"aoc1.jpg",
							"lj2.jpg",
							"aoc.jpg",
							"lj1.jpg"
						]
					},
					{
						id:"1003",
						customIcon:"user2.png",
						customName:"烟火人间",
						score:3.5,
						releaseTime:"2022-04-22",
						context:"枕头舒适柔软值得购买，面料摸起来很舒服，一根线头都没有，做工非常精致。灰色边看起来很上档次，真空打包过来的很用心，以后买家纺床上用品都这家了，终于找到一家合适的了！还会再来！客服小陈很亲切，不错。",
						imgs:[
							"hm1A.jpg",
							"aoc1.jpg",
							"lj2.jpg",
							"aoc.jpg",
							"lj1.jpg"
						]
					},
					{
						id:"1004",
						customIcon:"user1.png",
						customName:"烟火人间",
						score:3.5,
						releaseTime:"2022-04-22",
						context:"枕头舒适柔软值得购买，面料摸起来很舒服，一根线头都没有，做工非常精致。灰色边看起来很上档次，真空打包过来的很用心，以后买家纺床上用品都这家了，终于找到一家合适的了！还会再来！客服小陈很亲切，不错。",
						imgs:[
							"hm1A.jpg",
							"aoc1.jpg",
							"lj2.jpg",
							"aoc.jpg",
							"lj1.jpg"
						]
					},
				]
			}
		},
		onLoad(res){
			let id = res;
			let page = getCurrentPages();
			let info = "";
			let imageAddress="";
			if(page.length>=2){
				// #ifdef MP-WEIXIN
				info = page[page.length-2].data.clickOrder;
				imageAddress=page[page.length-2].data.imageAddress;
				// #endif
				// #ifdef H5
				info = page[page.length-2].clickOrder;
				imageAddress=page[page.length-2].imageAddress;
				// #endif
				// #ifdef APP-PLUS
				// uni.request({
					
				// })
				// #endif
				console.log(imageAddress)
				this.info=info;
				this.imageAddress = imageAddress;
			}
			
		},
		methods: {
			onClick(){
				
			},
			dialogToggle(type) {
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				console.log('点击确认')
				
			},
			dialogClose() {
				console.log('点击关闭')
			},
		}
	}
</script>

<style lang="scss">
.container{
	
	// margin: 0rpx 10rpx;
	// padding: 0rpx 10rpx;
	// background-color: $uni-theme;
	border-radius: 35rpx;
	.images{
		// display: inline-block;
		text-align: center;
		width: 100%;
		height: 500rpx;
		background-color: #FFFFFF;
		border-radius: 25rpx;
		padding: 30rpx;
		margin-bottom: 10rpx;
		.swiper-box{
			width: 100%;
			height: 100%;
			.swiper-item{
				border-radius: 20rpx;
				image{
					border-radius: 20rpx;
				}
			}
			
		}
	}
	.intrduce{
		padding: 10rpx 5rpx;
		border-radius: 35rpx;
		background-color: $uni-bg-color;
		.descript{
			font-weight: 700;  
			text-indent: 2em;
			font-size: 35rpx;
			margin:30rpx 10rpx ;
			
		}
	}
	.clickInfo{
		position: relative;
		width: 100%;
		padding: 10rpx 50rpx;
		margin: 10rpx 0rpx;
		height: 50rpx;
		line-height: 30rpx;
		border-bottom: 2rpx solid #007AFF;
	}
	.clickNum{
		position: absolute;
		right: 5rpx;
		font-size: 10rpx;
		color: #808080;
		font-family: 楷体;
		
	}
	.seller{
		width: 100%;
		display:flex;
		justify-content: space-between;
	}
	.imageP{
		width: 100rpx;
		height:100rpx;
		border-radius: 50%;
	}
	.imageView{
		width: 130rpx;
		height: 130rpx;
	}
	.block{
		
		flex: 1;
		//display: inline-flex;
	}
	.nowP{
		margin-top:30rpx ;
		margin-left: 10rpx;
		font-size: 45rpx;
		font-weight: bold;
		color: red;
	}
	.before{
		margin: 2rpx 10rpx;
		color: #C0C0C0;
	}
	.beforeP{
		font-size: 30rpx;
		color: #C0C0C0;
		text-decoration:line-through
	}
	.connect{
		height: 60rpx;
		position: relative;
		.info{
			display: flex;
			position: absolute;
			right: 10rpx;
			.connectIcon{
				margin-right: 10rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	// 评价
	.evaluate{
		margin-top:20rpx;
		background-color: #FFFFFF;
		padding: 20rpx;
		.total{
			display: flex;
			justify-content: space-between;
			.p{
				border-left: 5rpx solid #3385FF;
				padding-left: 5rpx;
				font-size: 30rpx;
			}
			.praise{
				color: rgb(140,140,155);
				font-size: 25rpx;
			}
			
		}
		.tags{
			margin: 20rpx;
			.grid-tag{
				margin:10rpx ;
				//#ifdef APP-PLUS
				margin:20rpx;
				//#endif
			}
		}
		
	}
	.content{
		margin: 5rpx;
		padding: 50rpx 0rpx;
		border-bottom: 1rpx solid rgb(140,140,155);
		.customPraise{
			display: flex;
			justify-content: space-between;
			.line{
				display: inline-flex;
				position: relative;
				.customImg{
					width: 50rpx;
					height: 50rpx;
					border: 50%;
					margin-right: 5rpx;
				}
				.customNick{
					font-size: 25rpx;
					font-family: 楷体;
				}
				.stars{
					position: relative;
					.star{
						position: absolute;
						bottom: 30%;
					}
				}
			}
			.releaseTime{
				font-size: 25rpx;
				font-family: 楷体;
				color: rgb(140,140,155);
			}
			
		}
		// <view class="praise">
		// 	<p>刚收到是压缩卷包的，拆开等它慢慢回弹，质量不错喔！经济又实惠，客服小华很耐心讲解，点赞</p>
		// 	<uni-grid :column="3" :show-border="false" :square="false" @change="change">
		// 		<uni-grid-item v-for="(item ,index) in 5" :index="index" :key="index">
		// 				<image class="praiseImg" :src="imageAddress+'sellimage/hm1A.jpg'" mode="aspectFit" />
		// 		</uni-grid-item>
		// 	</uni-grid>
		// </view>
		.praise{
			margin: 20rpx 0rpx;
			
			p{
				margin: 10rpx 0rpx;
			}
		}
	}
	
			
	.praiseImg{
		width: 200rpx;
		height: 200rpx;
	}
}
//购买
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

</style>
