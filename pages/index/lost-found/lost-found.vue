<template>
	<view class="container">
		<view class="first" hover-class="hover">
			<image class="img"   :src="imageAddress+'lost/6.jpeg'" mode="aspectFill"></image>
		</view>
		<view class="search">
			<view>
				<view class="line">
					<view class="condition">筛选条件</view>
				</view>
				<view class="selects">
					<view class="relative">
						<view class="title">地区筛选</view>
						<view class="selectAddress">
							<uni-grid :column="3" :show-border="false" :square="false">
									<uni-grid-item v-for="(item ,index) in list" :index="index" :key="index">
										<view class="address" hover-class="addressHover" @click="selectAdd(index)">{{item}}</view>
									</uni-grid-item>
								</uni-grid>
						</view>
					</view>
					<view class="relative">
						<view class="title">快速筛选</view>
						<view class="select">
							<view class="type">
								<view class="space"></view>
								<view>关键字：</view>
								<uni-easyinput prefixIcon="search" v-model="searchValue" placeholder="输入关键字" >
								</uni-easyinput>
								<view class="submit" @click="submit">筛选</view>
							</view>
						</view>
					</view>
				</view>
			</view>		
		</view>
		<view class="line-box">
			<p class="lineB"></p>
			<p class="text-line">招领列表</p>
			<p class="lineB"></p>
		</view>
		<view class="cards">
			<view class="card" v-for="(item,index) in lostInfo" :key="index" @click="lostDetail(item.id)">
				<view class="imgCard" v-if="item.images!=null" >
					<image class="imgOrVideo" :src="imageAddress+item.images[0]" mode="aspectFit"></image>
				</view>
				<view class="imgCard" v-if="item.video!=null">
					<!-- #ifdef APP-PLUS -->
					<video class="imgOrVideo" :id="index.toString()" :data-id="index.toString()" @play="playVideo" :data-url="imageAddress+item.video" :src="imageAddress+item.video"
					 @click.stop='nothing()' :poster="imageAddress+'lost/lost.png'" controls http-cache="true" :show-center-play-btn="false" auto-pause-if-navigate></video>
					<!-- #endif -->
					<!-- #ifndef APP-PLUS -->
					<video class="imgOrVideo" :id="index.toString()" :data-id="index.toString()" @play="playVideo" :data-url="imageAddress+item.video" :src="imageAddress+item.video"
					 @click.stop='nothing()' controls http-cache="true" :show-center-play-btn="false" auto-pause-if-navigate></video>
					<!-- #endif -->
				</view>
				<view class="title">
					<view class="titleT">{{item.title}}</view>
					<image class="conIcon" :src="imageAddress+'defaultIcon/'+item.connectType+'.png'"></image>
				</view>
				<view class="context">
					<view class="location">{{item.address}}-招领</view>
					<view >
						<view class="descript">{{item.content}}</view>
						<view class="position">
							<view class="time">
								{{item.releaseTime}}
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="more">
				<uni-load-more color="#56BBB5"  :status="status" />
			</view>
		</view>
		<view class="reaseBut" @click="modal">
			<view class="release">
				<image class="releaseImg" :src="imageAddress+'lost/send2.png'"></image>
			</view>
		</view>
		
		<!-- 模态框示例 -->
		<uni-popup ref="popup" type="center" :is-mask-click="false"  :animation="true"  background-color="#fff" @change="modalChange">
			<scroll-view :scroll-y="true">
				<view class="modal">
					<view class="shut-box">
						<image :src="imageAddress+'defaultIcon/shut.png'" mode="aspectFill" @click="closeModal"></image>
					</view>
					<view class="titleRelease">发布招领</view>
					<view class="release-input flex">
						<view class="before">标题：</view>
						<uni-easyinput v-model="reTitle" :styles="styles" :placeholderStyle="placeholderStyle" placeholder="输入标题,例如:捡到手机" @input="input"></uni-easyinput>
					</view>
					<view class="release-input flex">
						<view class="before">位置：</view>
						<uni-data-checkbox mode="button" v-model="reAddress" :localdata="seAddress"></uni-data-checkbox>
					</view>
					<view class="release-input">
						<view class="before">具体位置：</view>
						<uni-easyinput v-model="reDetailAddress" :styles="styles" :placeholderStyle="placeholderStyle" placeholder="具体的位置,如新区图书馆,一楼教室,三桌!" @input="input"></uni-easyinput>
					</view>
					<view class="release-input">
						<view class="before">联系方式：</view>
						<uni-data-checkbox mode="tag"  v-model="reContectType" :localdata="contectType"></uni-data-checkbox>
						<view class="other">
							<uni-easyinput v-model="reConnect" :styles="styles" :placeholderStyle="placeholderStyle" placeholder="联系方式,电话、微信、QQ!例如 17606985420" @input="input"></uni-easyinput>
						</view>
					</view>
					<view class="release-input-non">
						<view class="before">失物图片(可不传)：</view>
						<view class="reImages">
							<uni-file-picker limit="9" :auto-upload="false" @success="upImg" @select="imgSelect" @delete="handleDelete"  @progress="progress" fileMediatype="image" :imageStyles="imageStyles" file-mediatype="image"></uni-file-picker>
						</view>
					</view>
					<view class="release-input-non">
						<view class="before">视频(可不传)：</view>
						<view class="reImages">
							<uni-file-picker limit="9" @success="upImg" @select="videoSelect" :value="fileLists" :imageStyles="imageStyles" file-mediatype="video"></uni-file-picker>
						</view>
					</view>
					<view class="release-input-non">
						<view class="before">具体描述：</view>
						<view class="reImages">
							<uni-easyinput type="textarea" autoHeight v-model="reContext" placeholder="例如: 5月3日早上在楼梯口捡到红色的书包,里面有寒假作业,小学三年级,张诗雨同学的书包!"></uni-easyinput>
						</view>
					</view>
					<view class="release-button">
						<button type="primary" size="50%" @click="release">发布</button>
					</view>
				</view>
			</scroll-view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//模态框
				contectType:[
					{
						text:"QQ",
						value:0
					},
					{
						text:"手机",
						value:1
					},
					{
						text:"微信",
						value:2
					},
					{
						text:"邮箱",
						value:3
					},
				],
				seAddress:[
					{
						text:'新区',
						value:0
					},
					{
						text:'老区',
						value:1
					},
					{
						text:'校外',
						value:2
					},
				],
				styles: {
						color: '#007aff',
						borderColor: '#007aff'
						// borderColor: '#007aff'
					},
				placeholderStyle: "color:#56bbb5;font-size:14px;font-family: 楷体;border-color:#56bbb5;",
				imageStyles: {
					width: 95,
					height: 95,
					// border: {
					// 	radius: '50%'
					// }
				},
				fileLists: [
					// {
					// 	url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					// 	extname: 'png',
					// 	name: 'shuijiao.png'
					// }, {
					// 	url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					// 	extname: 'png',
					// 	name: 'uniapp-logo.png'
					// }, {
					// 	url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
					// 	extname: 'png',
					// 	name: 'shuijiao.png'
					// },
				],
				reAddress:0,
				reTitle:'',
				reDetailAddress:'',
				reContectType:0,
				reConnect:"",
				reContext:"",
				imageValue:[],
				filePathsList:[],
				//非模态框
				videoList:[],
				status:"more",
				list:[
					"新区",
					"老区",
					"校外"
				],
				imageAddress:this.$serverAddress.address+this.$serverAddress.image,
				candidates: ['新区', '老区', '校外'],
				searchValue:'',
				lostInfo:[
					{
						id:"1001",
						images:[
							'lost/1.jpg',
							'lost/2.jpeg'
						],
						title:"ipad找失主",
						connectType:0,
						address:'新区',
						content:"水湾路共享单车里面发现一台ipad",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1002",
						// video:"video/ws.mp4",
						title:"OPPO手机寻找失主",
						connectType:1,
						address:'老区',
						content:"oppo，黑色，无卡，锁屏，墨绿色手机壳；能成功解锁手机证明是你的。 邮箱联系我，电话填写有误。",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1003",
						title:"招领王帅的身份证，驾驶证",
						connectType:0,
						address:'新区',
						content:"4月14日，下午捡到衡水市王帅的身份证，驾驶证。和一张万家福的会员卡。",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1004",
						title:"捡到杨乐乐身份证 ",
						video:"video/ws.mp4",
						connectType:1,
						address:'校外',
						content:"已交三水实验中学门卫",
						releaseTime:"22年04月24日",
						connect:"18206927199",
						got:false,
					},
					{
						id:"1005",
						title:"光谷单反相机Olympus",
						
						connectType:0,
						address:'老区',
						content:"从世界城骑骑共享电动车到文华学院下车时看到的时候看到篓子里有个台相机",
						releaseTime:"22年04月24日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1006",
						title:"一串电动车钥匙",
						connectType:0,
						address:'新区',
						content:"一串电动车钥匙（1个遥控器、1把钥匙,钥匙上配有一个软塑蜜蜂样子的外形套）",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1007",
						title:"一串电动车钥匙",
						connectType:0,
						address:'新区',
						content:"一串电动车钥匙（1个遥控器、1把钥匙,钥匙上配有一个软塑蜜蜂样子的外形套）",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1008",
						title:"一串电动车钥匙",
						connectType:0,
						address:'校外',
						content:"一串电动车钥匙（1个遥控器、1把钥匙,钥匙上配有一个软塑蜜蜂样子的外形套）",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1009",
						title:"一串电动车钥匙",
						connectType:0,
						address:'老区',
						content:"一串电动车钥匙（1个遥控器、1把钥匙,钥匙上配有一个软塑蜜蜂样子的外形套）",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1010",
						title:"一串电动车钥匙",
						connectType:0,
						address:'新区',
						content:"一串电动车钥匙（1个遥控器、1把钥匙,钥匙上配有一个软塑蜜蜂样子的外形套）",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
				],
			}
		},
		
		//下拉刷新
		// uniapp 监听下拉刷新生命周期
		onPullDownRefresh() {
			setTimeout(res=>{
				uni.stopPullDownRefresh(); //停止刷新
				this.lostInfo.unshift(
					{
						id:"1019",
						title:"一串电动车钥匙",
						connectType:0,
						address:'老区',
						content:"一串电动车钥匙（1个遥控器、1把钥匙,钥匙上配有一个软塑蜜蜂样子的外形套）",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1018",
						title:"一串电动车钥匙",
						video:"video/pzhv1.mp4",
						connectType:0,
						address:'新区',
						content:"一串电动车钥匙（1个遥控器、1把钥匙,钥匙上配有一个软塑蜜蜂样子的外形套）",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
				);
				uni.showToast({
					title:"刷新成功！",
				});
			},2000)
			
		},
		onHide() {
			if(this.videoContent) {
		         this.videoContent.pause()
		     }
		},
		methods: {
			maskClick(e){
				console.log('maskClick事件:', e);
			},
			submit(){
				console.log(this.searchValue);
				this.lostInfo=[
					{
						id:"1010",
						title:"一串电动车钥匙",
						connectType:0,
						address:'新区',
						content:"一串电动车钥匙（1个遥控器、1把钥匙,钥匙上配有一个软塑蜜蜂样子的外形套）",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1005",
						title:"光谷单反相机Olympus",
						
						connectType:0,
						address:'老区',
						content:"从世界城骑骑共享电动车到文华学院下车时看到的时候看到篓子里有个台相机",
						releaseTime:"22年04月24日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1002",
						// video:"video/ws.mp4",
						title:"OPPO手机寻找失主",
						connectType:1,
						address:'老区',
						content:"oppo，黑色，无卡，锁屏，墨绿色手机壳；能成功解锁手机证明是你的。 邮箱联系我，电话填写有误。",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
					{
						id:"1003",
						title:"招领王帅的身份证，驾驶证",
						connectType:0,
						address:'新区',
						content:"4月14日，下午捡到衡水市王帅的身份证，驾驶证。和一张万家福的会员卡。",
						releaseTime:"22年04月25日",
						connect:"1425378583",
						got:false,
					},
				]
			},
			selectAdd(res){
				console.log(res)
			},
			lostDetail(res){
				let id = res;
				uni.navigateTo({
					url:"lostDetail/lostDetail?id="+id
				})
			},
			//到低刷新
			onReachBottom(){
				let that = this;
				
				if(that.status != "noMore"){
					that.status = "loading";
					that.lostInfo.push({
						id:"1004",
						title:"捡到杨乐乐身份证 ",
						video:"video/ws.mp4",
						connectType:1,
						address:'校外',
						content:"已交三水实验中学门卫",
						releaseTime:"22年04月24日",
						connect:"18206927199",
						got:false,
					},);
				}
				setTimeout(function(){
					that.status = "noMore";
				},2000)
			},
			//加载
			onChange(e) {
				this.status = "loading";
			},
			//阻止子类冒泡
			nothing(){},
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
							uni.createVideoContext(temp,this).pause();
						}
					}
				})
			},
			modal(){
				this.$refs.popup.open()
			},
			//模态框
			modalChange(){
				console.log(this.reTitle);
				console.log(this.reAddress);
				console.log(this.reDetailAddress);
			},
			//关闭模态框
			closeModal(){
				setTimeout((res)=>{
					this.$refs.popup.close()
				},100)
			},
			//输入
			input(e) {},
			async imgSelect(e){
				console.log(e.tempFilePaths)
				console.log(this.imageValue)
				//await this.uploadImg(e.tempFilePaths,1);
				// var user = {
				// 	"id":"1001",
				// 	"name":"李毅",
				// 	"nickName":null,
				// 	"passWord":"ly123456789",
				// 	"isStaff":false
				// }
				// uni.request({
				// 	url:"http://127.0.0.1:8080/api/addUser",
				// 	method:"POST",
				// 	data:user,
				// 	dataType:"json",
				// 	success(res) {
				// 		console.log(JSON.stringify(res))
				// 	},
				// 	fail(err) {
				// 		console.log(err)
				// 	}
				// })
				
			},
			upImg(e){
				console.log(e)
			},
			// 获取上传进度
			progress(e){
				console.log('上传进度：',e)
			},
			
			// 上传成功
			success(e){
				console.log('上传成功')
			},
			uploadImg(e) {
			    console.log(e)
			},
			
			handleDelete(err) { // 删除图片
				console.log(err)
			    const num = this.filePathsList.findIndex(v => v.url === err.tempFilePath);
			    this.filePathsList.splice(num, 1);
			},
			//发布按钮
			release(){
				console.log("发布了")
				uni.showLoading({
					title:"发布中....."
				});
				setTimeout((res)=>{
					uni.hideLoading();
					uni.showToast({
						title:"发布成功",
						image:"/static/default/send1.png",
						duration:2000
					})
					this.$refs.popup.close();
				},2000);
			}
		},
		
	}
</script>

<style lang="scss">
	.container{
		background-color: rgb(239,239,239);
		.first{
			
			margin: 0rpx 5rpx;
			background-color: #007AFF;
			width:100% ;
			height:450rpx ;
			.img{
				width: 100%;
			}
		}
		.search{
			background-color: rgb(255,255,255);
			border-radius: 5rpx;
			margin:40rpx 5rpx ;
			// padding: 10rpx;
			.line{
				-moz-box-shadow:0rpx 0rpx 10rpx #06c;
				-webkit-box-shadow:0rpx 0rpx 10rpx #06c;
				box-shadow:0rpx 5rpx 20rpx rgb(239,239,239);;
				.condition{
					font-size: 27rpx;
					font-weight: 550;
					border-radius: 5rpx;
					color: #FFFFFF;
					background-color: rgb(102,102,102);
					width: 25%;
					line-height: 60rpx;
					text-align: center;
				}
			}
			.selects{
				padding:10rpx;
				// position: relative;
				.relative{
					position: relative;
					margin: 10rpx 0rpx;
					padding: 10rpx 0rpx;
					border-bottom: 0.5rpx solid rgb(245,245,245);
					.selectAddress{
						margin-left: 20%;
						.address{
							text-align: center;
							color:rgb(119,119,119) ;
						}
						.addressHover{
							border-radius: 10rpx;
							background-color: rgb(239,239,239);
						}
					}
				}
				.title{
					font-weight: 550;
				}
				.select{
					position: relative;
					// width: 60%;
					line-height: 60rpx;
					.type{
						display: flex;
						align-items: center;
						//position: absolute;
						// left: 30%;
						.space{
							width: 20%;
						}
						.submit{
							padding: 0rpx 30rpx;
							margin: 0rpx 10rpx;
							border-radius: 10rpx;
							background-color: rgb(86,187,181);
						}
					}
				}
				
				
			}
		}
		.line-box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 20rpx auto;
			.text-line{
				text-align: center;
			}
			.lineB{
				width: 40%;
				height: 2rpx;
				//background-color: #ccc;
				&:first-of-type {
					background: linear-gradient(90deg, rgba(98, 98, 98, 0) 0%, #ccc 100%);
				}
				&:last-of-type {
					background: linear-gradient(90deg, #ccc 0%, rgba(98, 98, 98, 0) 100%);
				}
			}
		}
		.cards{
			width: 750rpx;
			// flex-wrap: wrap;
			// justify-content: space-around;
			
			.card{
				background-color: #FFFFFF;
				width: 355rpx;
				padding: 30rpx;
				margin: 10rpx;
				
				float: left;
				// display: inline;
				// float: left;
				// flex-wrap: wrap;
				box-shadow:  5rpx 5rpx 10rpx #C0C0C0;
				.imgCard{
					width: 295rpx;
					//margin: 5rpx;
					.imgOrVideo{
						width: 295rpx;
						height: 295rpx;
						border-radius: 25rpx;
					}
				}
				.title{
					padding: 15rpx 0rpx ;
					border-bottom: 1rpx solid #C0C0C0;
					align-items: center;
					display: flex;
					.titleT{
						font-size: 30rpx;
						margin-right: 10rpx;
						width: 250rpx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
					.conIcon{
						width: 35rpx;
						height: 35rpx;
					}
				}
				.context{
					margin-top: 15rpx;
					.location{
						font-weight: bold;
						color: rgb(86,187,181);
					}
					.descript{
						display: -webkit-box;
						-webkit-box-orient:vertical;
						-webkit-line-clamp:3;
						overflow: hidden;
					}
					.position{
						width: 100%;
						height: 42rpx;
						vertical-align: middle;
						position: relative;
						.time{
							position: absolute;
							font-size: 25rpx;
							color:#C0C0C0 ;
							margin-top: 15rpx;
							right: 0rpx;
						}
					}
				}
			}
			
			.more{
				width: 100%;
				align-items: center;
				float: left;
			}
		}
		.reaseBut{
			z-index: 99;
			position: fixed;
			right: 30rpx;
			bottom: 30rpx;
			width: 150rpx;
			height: 150rpx;
			.release{
				width: 100%;
				height: 100%;
				.releaseImg{
					width: 100%;
					height: 100%;
				}
			}
		}
		.uni-popup__wrapper{
			background-color: red!important;
			border-radius: 30%;
		}
		// 模态框
		.modal{
			padding: 30rpx 0rpx;
			margin: 20rpx;
			width: 700rpx;
			height: 85vh;
			//overflow: hidden;
			.shut-box{
				position: absolute;
				top:10rpx;
				right: 10rpx;
				image:hover{
					background:radial-gradient(#FF404B, #FFFFFF);
					border-radius: 100%;
					-webkit-transform: rotate(45deg);
					transform: rotate(45deg);
					// transform:rotateX(45deg) ;
					// transform:rotateY(45deg) ;
				}
				image{
					border-radius: 50%;
					width: 50rpx;
					height:50rpx;
				}
			}
			.titleRelease{
				font-size: 45rpx;
				font-weight: 700;
				line-height: 100rpx;
				font-family: 楷体;
				text-align: center;				
			}
			// <view class="reImages">
			// 	<uni-file-picker readonly :value="fileLists" :imageStyles="imageStyles" file-mediatype="image"></uni-file-picker>
			// 	<view class="upBtn">
			// 		<image class="upBtnImg" :src="imageAddress+'defaultIcon/up.png'"></image>
			// 	</view>
			// </view>
			.release-input-non{
				padding: 10rpx 0rpx;
				border-bottom: 1rpx solid #C0C0C0;
				.before{
					font-size: 30rpx;
				}
				.reImages{
					display: flex;
					flex-wrap:wrap;
					margin: 30rpx 5rpx;
					.upBtn{
						margin: 5rpx 20rpx;
						.upBtnImg{
							width: 150rpx;
							height: 150rpx;
						}
					}
				}
			}
			.release-input{
				border-bottom: 1rpx solid #C0C0C0;
				padding: 10rpx 0rpx;
				.before::before{
					content: "* ";
					color: red;
				}
				.before{
					font-size: 30rpx;
				}
			}
			.other{
				
				margin-left: 15%;
			}
			.flex{
				display: flex;
				align-items: center;
				margin: 20rpx 0rpx;
			}
			.release-button{
				//margin: 50rpx 200rpx;
				padding: 50rpx 200rpx;
			}
		}
	}
</style>
