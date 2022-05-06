<template>
	<view class="all">
		<view class="tip">
			<uni-notice-bar color="#56BBB5" background-color="#F0FFF" show-icon scrollable 
							text="Tips： 人在智慧上应当是明豁的，道德上应该是清白的，身体上应该是清洁的!" />
		</view>
		<view class="container">
			<view class="found" v-if="info.got">
				<image :src="imageAddress+'lost/found.png'"></image>
			</view>
			<view class="detail">
				<view class="uni-box-head">
					<uni-title type="h2" align="center" :title="info.title"></uni-title>
				</view>
				<view class="about-box">
					<view class="time marginStyle">{{info.releaseTime}} 07:45</view>
					<view class="id marginStyle">信息编号:{{info.id}}</view>
					<view class="state marginStyle">当前状态:{{info.got?'已认领':'未认领中.....'}}</view>
				</view>
				<view class="context">
					<view v-if="info.images" >
						<uni-grid :column="2" :show-border="false" :square="false" :highlight="false" >
							<uni-grid-item v-for="(item,index) in info.images" :index="index" :key="index">
								<view class="grid-item-box">
									<image class="img" :src="imageAddress+item" mode="aspectFit"  @click="clickImg" :data-index="index"/>
								</view>
							</uni-grid-item>
						</uni-grid>
					</view>
					<view v-if="info.video" v-for="(item,num) in info.video" :key="num">
						<!-- #ifdef APP-PLUS-->
						<video class="img" :src="imageAddress+ item" :id="num.toString()" :data-id="num.toString()" :data-url="imageAddress+ item" @play="playVideo" :poster="imageAddress+'lost/lost.png'" controls http-cache="true"></video>
						<!-- #endif -->
						<!-- #ifndef APP-PLUS -->
						<video class="video" :src="imageAddress+ item" :id="num.toString()" :data-id="num.toString()" :data-url="imageAddress+ item" @play="playVideo" controls http-cache="true"></video>
						<!-- #endif -->
					</view>
					<view class="info-text">{{info.content}}</view>
					<view class="connect">
						<image :src="imageAddress+'defaultIcon/'+info.connectType+'.png'"></image>
						<text>{{info.connect}}</text>
					</view>
					<view class="abs">
						<view class="address">拾取位置：{{info.address}}</view>
					</view>
				</view>
				<view class="comm">
					<view class="commText">
						<p class="red">保持诚信，请勿冒领！</p>遵守法律法规，为人和善。如果是失主，请自行联系！
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageList:[],
				videoList:[],
				info:{
						id:"1001",
						images:[
							'lost/1.jpg',
							'lost/2.jpeg',
							'lost/1.jpg',
							'lost/lostImage/6.jpeg',
							// 'lost/lostImage/6.jpeg',
							// 'lost/lostImage/6.jpeg',
							// 'lost/lostImage/6.jpeg',
						],
						video:[
							"video/ws.mp4",
						],
						title:"ipad找失主",
						connectType:1,
						address:'新区',
						content:"水湾路共享单车里面发现一台ipad",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						//got:false,
						got:true
				},
				imageAddress:this.$serverAddress.address+this.$serverAddress.image,
			};
		},
		onLoad(res){
			let id=res;
			//数据加载完后处理数据
			if(this.info.images!='' && this.info.images != null){
				let images=[];
				this.info.images.forEach((item,index)=>{
					images.push(this.imageAddress+item);
				});
				this.imageList=images;
			}
		},
		onHide() {
			if(this.videoContent) {
		         this.videoContent.pause()
		     }
		},
		methods:{
			//点击图片查看
			clickImg(e){
				
				let index=e.currentTarget.dataset.index;
				uni.previewImage({
					urls: this.imageList, //需要预览的图片http链接列表，多张的时候，url直接写在后面就行了
					current: this.imageList[index], // 当前显示图片的http链接，默认是第一个
					success: function(res) {},
					fail: function(res) {},
					complete: function(res) {},
				})
			},
			//视频播放
			playVideo(e){
				let currentId=e.currentTarget.dataset.id;
				let url=e.currentTarget.dataset.url
				this.videoContent = uni.createVideoContext(currentId);
				this.videoList.push({
					"id":currentId,
					"url":url
				});
				let trailer = this.videoList;
				trailer.forEach(function(item,index){
					if(item.url!=null && item.url!=""){
						let temp = item.id;
						if(temp != currentId){
							console.log("暂停其他");
							console.log(temp);
							console.log(uni.createVideoContext(temp,this));
							uni.createVideoContext(temp,this).pause();
						}
					}
				})
			},
		}
	}
</script>

<style lang="scss">
.all{
	margin: 0rpx 10rpx;
	padding-bottom: 50rpx;
	background-color:#FFFFFF ;
	.container{
		// padding: 0rpx 10rpx;
		border-radius: 20rpx;
		background:url($uni-server+'defaultIcon/train.jpg') ;
		background-size: 100% auto;
		box-shadow: -10rpx 10rpx 5rpx #C0C0C0;
		-moz-box-shadow:-10rpx 10rpx 5rpx #C0C0C0;
		-webkit-box-shadow:-10rpx 10rpx 5rpx #C0C0C0;
		.found{
			position: absolute;
			width: 100%;
			height: 200rpx;
			image{
				position: absolute;
				width: 200rpx;
				height: 200rpx;
				right: 20rpx;
			}
		}
		.detail{
			background: rgba(255,255,255,0.8) no-repeat;
			padding: 0rpx 10rpx;
			border-radius: 20rpx;
			.about-box{
				display: flex;
				color: #696969;
				.marginStyle{
					margin-right: 20rpx;
				}
				.state{
					color:#FF404B;
					font-weight: 700;
				}
			}
			.context{
				margin: 10rpx 0rpx;
				.img{
					width: 340rpx;
					height: 280rpx;
					margin: 0rpx 10rpx;
					//padding:20rpx;
				}
				.video{
					width: 100%;
				}
				.info-text{
					font-size: 30rpx;
					text-indent: 2em;
					margin: 10rpx 0rpx;
				}
				.connect{
					height: 50rpx;
					image{
						margin-right: 10rpx;
						vertical-align: middle;
						width: 40rpx;
						height: 40rpx;
					}
				}
				.abs{
					position: relative;
					width: 100%;
					height: 30rpx;
					.address{
						color:#FF404B ;
						position: absolute;
						right: 20rpx;
					}
				}
			}
			.comm{
				padding: 30rpx 0rpx;
				.commText{
					display: flex;
					flex-wrap: wrap;
					margin: 30rpx 0rpx;
					.red{
						color: 	#de8c17;
						flex-wrap: nowrap;
					}
				}
			}
		}
	}
}
</style>
