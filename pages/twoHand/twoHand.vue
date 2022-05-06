<template>
	<view class="head">
		
		<view class="check">
			<input type="text" @input="inputGet" v-model="inputData" placeholder="输入查找商品" :class="searchIcon" placeholder-class="My-placeholder"></input>
			<view class="check_span2" @click="seacher">
				<image :src="imageAddress+'/check.png'" class="check_icon2"></image>
			</view>
			
			<view class="bottom">
				<text :class="select?'':'select'" >{{cate}}</text>
				<text :class="select?'select':''" >{{goods}}</text>
			</view>
		</view>
		<uni-section title="Attention" type="line">
					<uni-notice-bar scrollable single color="#2979FF" background-color="#EAF2FF"
						text="本平台提供信息,参与交易需谨慎,有意者可通过商品卡片上的联系方式联系!点击查看具体." />
				</uni-section>
		<view class="bottom_div">
			<view class="bottom_div_view" v-for="(item,index) in search" :key="item.id" :id="item.id" @click="detail(item)">
				<view :class="item.sold?'gray':''">
					<image :src=" imageAddress +'sellimage/'+item.images[0]"></image>
					
					<view class="info">
						<p class="bottom_div_title">
							<nobr>{{item.descript}}</nobr>
						</p>
						<view class="isbn">
							<image class="connectIcon" :src="imageAddress + 'defaultIcon/'+item.connectType+'.png'"></image>
							<p>{{item.connect}}</p>
						</view>
					</view>
					<view class="price">
						<p class="p1">￥{{item.price}}</p>
						<p class="p2">{{item.visited}}人看过</p>
					</view>
				</view>
				<image :src="imageAddress+'/sold.png'" v-show="item.sold" class="out"></image>
			</view>
		</view>
		<view class="more">
			<uni-load-more color="#3385FF" :status="status" />
		</view>
		<uni-fab ref="fab"  :content="content" horizontal="right" vertical="bottom"
					direction="垂直" @trigger="trigger" @fabClick="fabClick" />
		
		<view>
			<!-- 提示窗示例 -->
			<uni-popup ref="alertDialog" type="dialog">
				<uni-popup-dialog type="success" cancelText="返回" confirmText="确定" title="?" content="确定要去发布二手信息嘛？" @confirm="dialogConfirm"
					@close="dialogClose"></uni-popup-dialog>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	// import book_list from "../../components/book_list/book_list.vue"
	export default {
		data() {
			return {
				search:[
					{
						id:1,
						seller:"墨彩环",
						sellerImg:"mch.jpeg",
						descript:"罗技（Logitech）M220 轻音鼠标 无线鼠标 办公鼠标 对称鼠标 带无线微型接收器 灰黑色 ",
						connect:"1425377583",
						connectType:"0",
						price:45,
						beforeP:189,
						sold:false,
						visited:20,
						releaseTime:"2022-04-05",
						images:[
							"lj1.jpg",
							"lj2.jpg"
						]
					},
					{
						id:2,
						seller:"墨彩环",
						sellerImg:"mch.jpeg",
						descript:"罗技（Logitech）M220 轻音鼠标 无线鼠标 办公鼠标 对称鼠标 带无线微型接收器 灰黑色 ",
						connect:"1760698543",
						connectType:"1",
						price:30,
						beforeP:150,
						sold:true,
						visited:40,
						releaseTime:"2022-04-05",
						images:[
							"lj2.jpg",
							"lj2.jpg"
						]
					},
					{
						id:3,
						seller:"墨彩环",
						sellerImg:"mch.jpeg",
						descript:"泡面（Logitech）M220 轻音鼠标 无线鼠标 办公鼠标 对称鼠标 带无线微型接收器 灰黑色 ",
						connect:"1425377583",
						connectType:"0",
						price:2,
						beforeP:4.5,
						sold:false,
						visited:15,
						releaseTime:"2022-04-05",
						images:[
							"paomian.jpeg",
							"lj2.jpg"
						]
					},
					{
						id:4,
						seller:"韩立",
						sellerImg:"hl.jpeg",
						descript:"Redmi 1A 23.8英寸 IPS技术 三微边设计 低蓝光 HDMI接口 电脑办公显示器 显示屏 小米 红米 ",
						connect:"wx32_354",
						connectType:"2",
						price:600,
						beforeP:900,
						sold:false,
						visited:10,
						releaseTime:"2022-04-05",
						images:[
							"hm1A.jpg",
							"lj2.jpg"
						]
					},
					{
						id:5,
						seller:"历飞雨",
						sellerImg:"lfy.jpeg",
						descript:"戴尔（DELL）2K S2721DGF 27英寸 Nano IPS HDR400 165Hz 高刷 1ms FreeSync 旋转升降 低蓝光 电竞显示器 ",
						connect:"listu@163.com",
						connectType:"3",
						price:1500,
						beforeP:2500,
						sold:true,
						visited:100,
						releaseTime:"2022-04-05",
						images:[
							"aoc.jpg",
							"aoc1.jpg"
						]
					},
					{
						id:6,
						seller:"陈巧倩",
						sellerImg:"cqq.jpeg",
						descript:"Redmi 1A 23.8英寸 IPS技术 三微边设计 低蓝光 HDMI接口 电脑办公显示器 显示屏 小米 红米 ",
						connect:"1425377583",
						connectType:"0",
						price:600,
						beforeP:900,
						sold:true,
						visited:10,
						releaseTime:"2022-04-05",
						images:[
							"hm1A.jpg",
							"lj2.jpg"
						]
					},
					{
						id:7,
						seller:"墨彩环",
						sellerImg:"mch.jpeg",
						descript:"戴尔（DELL）2K S2721DGF 27英寸 Nano IPS HDR400 165Hz 高刷 1ms FreeSync 旋转升降 低蓝光 电竞显示器 ",
						connect:"18206927199",
						connectType:"1",
						price:1500,
						beforeP:2050,
						sold:false,
						visited:100,
						releaseTime:"2022-04-05",
						images:[
							"aoc.jpg",
							"aoc1.jpg"
						]
					},
					{
						id:8,
						seller:"李荣",
						sellerImg:"mch.jpeg",
						descript:"蓝宝石（Sapphire） AMD RADEON RX 6900 XT 16G D6 超白金极光特别版 16GB GDDR6 RDNA2架构 游戏显卡 ",
						connect:"huJ@126.com",
						connectType:"3",
						price:4500,
						beforeP:9500,
						sold:false,
						visited:100,
						releaseTime:"2022-04-05",
						images:[
							"xk.jpg",
							"xk1.jpg"
						]
					},
				],
				searchIcon:"check_input",
				server:this.$serverAddress.address,
				imageAddress:this.$serverAddress.address+this.$serverAddress.image,
				content:[],
				cate: "全部",
				goods: "分类",
				select:"",
				inputData:"",
				//点击的order
				clickOrder:"",
				sellData:'1',
				status:"more",
			}
		},
		//下拉刷新
		// uniapp 监听下拉刷新生命周期
		onPullDownRefresh() {
			setTimeout(res=>{
				uni.stopPullDownRefresh(); //停止刷新
				uni.showToast({
					title:"刷新成功！",
				});
			},2000)
			
		},
		//到低刷新
		onReachBottom(){
			let that = this;
			
			if(that.status != "noMore"){
				that.status = "loading";
				that.search.push()
			}
			setTimeout(function(){
				that.status = "noMore";
			},2000)
		},
		onLoad() {
			
		},
		methods: {
			hidden(res){
				
			},
			seacher(){
				let searcher = this.inputData;
				this.select=true;
				let that = this;
				if(searcher!=''){
					this.search=[{
							id:6,
							seller:"墨彩环",
							sellerImg:"mch.jpeg",
							descript:"Redmi 1A 23.8英寸 IPS技术 三微边设计 低蓝光 HDMI接口 电脑办公显示器 显示屏 小米 红米 ",
							connect:"1425377583",
							connectType:"0",
							price:600,
							beforeP:900,
							sold:true,
							visited:10,
							releaseTime:"2022-04-05",
							images:[
								"hm1A.jpg",
								"lj2.jpg"
							]
						},
						{
							id:7,
							seller:"墨彩环",
							sellerImg:"mch.jpeg",
							descript:"戴尔（DELL）2K S2721DGF 27英寸 Nano IPS HDR400 165Hz 高刷 1ms FreeSync 旋转升降 低蓝光 电竞显示器 ",
							connect:"18206927199",
							connectType:"1",
							price:1500,
							beforeP:2000,
							sold:false,
							visited:100,
							releaseTime:"2022-04-05",
							images:[
								"aoc.jpg",
								"aoc1.jpg"
							]
						},
					];
				}else{
					uni.reLaunch({
						url:'./twoHand'
					})
				}
			},
			//搜索输入框获取
			inputGet(res){
				if(""!=res.detail.value){
					this.searchIcon="check_input1"
				}else{
					this.searchIcon="check_input"
				}	
			},
			trigger(){
				console.log("trigger");
			},
			fabClick(){
				this.dialogToggle();
				
			},
			detail(res){
				this.clickOrder = res;
				let id = res.id;
				if(res.sold){
					uni.showToast({
						icon:"error",
						title:"商品已售出！"
					})
					return false;
				}
				uni.navigateTo({
					url:"./detail/detail?id="+id
				})
			},
			created() {
				//console.log(this)
			},
			dialogToggle() {
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				uni.navigateTo({
					url:"./release/release?type=order"
				})
			},
			dialogClose() {
				console.log('点击关闭')
			},
			
		},
		onShow() {
			
		}
		// components: {
		// 	book_list,
		// },
		
	}
</script>

<style lang="scss">
	page {
		background-color: #eee;
	}
	//变灰
	.gray{
		filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
		-webkit-filter: grayscale(100%);
	}
	.head{
		width: 100%;
	}
	.check {
		background-color: $uni-theme;
		height: 160rpx;
		width: 100%rpx;
		position: relative;
		text-align: center;

		view {
			
			width: 44rpx;
			height: 46rpx;
			position: relative;
			box-sizing: border-box;
			display: inline-block;

		}

		.check_span2 {
			border-radius: 23rpx;
			margin-left: 25rpx;
		}

		.bottom {
			background-color: $uni-theme;
			width: 100%;
			height: 46rpx;
			position: relative;
			box-sizing: border-box;
			display: inline-block;
			justify-content: space-between;

			text {
				width: 50%;
				display: inline-block;
				color: white;
				padding: 0rpx 10rpx;
				margin-top: 50rpx;
			}
		}
	}

	.check_input {
		//padding: 0rpx 10rpx;
		font-size: 20px;
		background-color: white;
		height: 60rpx;
		width: 540rpx;
		display: inline-block;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		// transform: translateY(160rpx/2-60rpx/2);
		box-sizing: border-box;
		text-align: left;
		background-image: url($uni-server+"/check.png");
		background-size: 60rpx 60rpx;
		background-repeat: no-repeat;
	}
	.check_input1 {
		//padding: 0rpx 10rpx;
		font-size: 20px;
		background-color: white;
		height: 60rpx;
		width: 540rpx;
		display: inline-block;
		border-radius: 10rpx 10rpx 10rpx 10rpx;
		// transform: translateY(160rpx/2-60rpx/2);
		box-sizing: border-box;
		text-align: left;
		background-size: 44rpx 44rpx;
		background-repeat: no-repeat;
	}

	.My-placeholder {
		padding: 0rpx 10rpx;
		color: #aaaaaa;
		margin-left: 50rpx;
		font-size: 15px;
	}

	.check_icon {
		width: 60rpx;
		height: 60rpx;
	}

	.check_icon2 {
		width: 60rpx;
		height: 60rpx;
	}
	

	// .MyText2 {
	// 	margin-left: 40px;
	// }

	// .MyText1 {
	// 	margin-right: 80px;
	// }
	.select{
		border-bottom: solid 4rpx #ffffff;
	}
	.bottom_div {
		display: flex;
		flex-wrap: wrap;
		flex: 1;
		margin-top: 7px;
		
		.bottom_div_view {
			position: relative;
			margin: 10rpx 3rpx 10rpx 10rpx;
			width: 360rpx;
			height: 530rpx;
			text-align: center;
			background-color: white;
			border-radius: 15rpx;
			image {
				width: 280rpx;
				height: 300rpx;
			}
			.gray{
				color: #C0C0C0;
			}
			.out{
				
				position: absolute;
				left: 260rpx;
				top: 200rpx;
				height: 100rpx;
				width: 100rpx;
			}
	
			.info {
				margin-top: 14rpx;
				margin-left: 40rpx;
				text-align: left;
				.bottom_div_title {
					text-overflow: ellipsis;
					color: black;
					overflow: hidden;
					font-size: 13px;
					
				}
				.connectIcon{
					margin-right: 10rpx;
					width: 40rpx;
					height: 40rpx;
				}
				.isbn {
					display: flex;
					color: red;
					font-size: 12px;
					margin-top: 10rpx;
				}
			}
	
			.price {
				margin-top: 50rpx;
	
				.p1 {
					color: red;
					font-size: 14px;
					display: inline-block;
					margin-right: 60rpx;
				}
	
				.p2 {
					color: #828282;
					font-size: 12px;
					display: inline-block;
					margin-left: 52rpx;
				}
			}
	
		}
	}
</style>
