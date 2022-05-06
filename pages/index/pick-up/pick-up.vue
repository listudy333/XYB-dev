<template>
	<view class="pick-up">
		<view class="head">
			<head1></head1>
		</view>
		<view class="sortIcon">
			<image :src="imageAddress+'/head/sort.png'"></image>
			代取员口碑<text>Top3</text>
		</view>
		<view>
			<sort :imageAddress="imageAddress" :staff="staff"></sort>
		</view>
		<view class="pick-content">
			<uni-section title="待取单" type="line" >
				<view v-for="(item,index) in express" class="card" :key="index"  @click="takeOrder" :id="item.id" >
					<uni-card :class="item.taked?'gray':''" :title="item.buyer" :sub-title="'截止日期：'+item.endTime" :extra="'￥ '+item.price" :thumbnail="imageAddress+item.avatar" @click="onClick">
						<text class="uni-body">{{item.description}}</text>
					</uni-card>
					<view v-if="item.taked" class="taked">
						<image :src="imageAddress+'express/taked1.png'"></image>
					</view>
				</view>
			</uni-section>
			<view>
				<uni-load-more color="#3385FF" :status="status" />
			</view>
			<uni-fab ref="fab"  :content="content" horizontal="right" vertical="bottom"
						direction="垂直" @trigger="trigger" @fabClick="fabClick" />
		</view>
		<!-- 组件 -->
		<!-- 提示信息弹窗 -->
		<uni-popup ref="message" type="message">
			<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
		</uni-popup>
		<!-- 提示窗示例 -->
		<uni-popup ref="alertDialog" type="dialog">
			<uni-popup-dialog :type="msgType" cancelText="取消" confirmText="确定" title="接单" content="确定要接这个单嘛!" @confirm="dialogConfirm"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>
		<!-- 提示窗示例 -->
		<uni-popup ref="myDialog" type="dialog">
			<uni-popup-dialog type="success" cancelText="返回" confirmText="确定" title="？" content="确定要发布快递代取嘛!" @confirm="mydialogConfirm"
				@close="dialogClose"></uni-popup-dialog>
		</uni-popup>
	</view>
</template>

<script>
	import head1 from "../../../components/head/head.vue"
	import sort from "../../../components/sort/sort.vue"
	
	export default {
		data() {
			return {
				imageAddress:this.$serverAddress.address+this.$serverAddress.image,
				status: 'more',
				//灰色背景gray
				//弹框
				msgType: '',
				messageText:"",
				clickId:"",
				target:"",
				content:[],
				staff:[
					{
						id:1,
						nickName:"攀枝花",
						score:"5",
						img:"head/woman2.png"
					},
					{
						id:2,
						nickName:"liYR",
						score:"4.5",
						img:"head/man2.png"
					},
					{
						id:3,
						nickName:"西门吹雪",
						score:"4.5",
						img:"head/woman1.png"
					}
				],
				//代取快递信息快递
				express:[
					{
						id:1,
						buyer:"历飞雨",
						avatar:"defaultIcon/user2.png",
						stuff:"快递",
						startTime:"2022-4-5",
						endTime:"2022-4-8",
						price:"1",
						description:"鞋子Nike,毒物买的，体积不大",
						taked:false,
						img:"express/1.jpg"
					},
					{
						id:2,
						buyer:"张铁",
						avatar:"defaultIcon/user3.png",
						stuff:"显示器",
						startTime:"2022-4-5",
						endTime:"2022-4-7",
						price:"4",
						description:"Redmi 1A 23.8英寸 IPS技术 三微边设计 低蓝光 HDMI接口 电脑办公显示器 显示屏 小米 红米 体积较大！",
						taked:false,
						img:"express/2.jpg"
					},
					{
						id:3,
						buyer:"陈巧倩",
						avatar:"defaultIcon/user4.png",
						stuff:"被子",
						startTime:"2022-4-6",
						endTime:"2022-4-7",
						price:"2",
						description:"南极人 被芯家纺 保暖被子春秋天 棉被双人盖被 四季被空调被褥 奶白深灰 180*200cm 4斤 ",
						taked:true,
						img:"express/3.jpg"
					},
					{
						id:4,
						buyer:"韩立",
						avatar:"defaultIcon/hl.jpeg",
						stuff:"被子",
						startTime:"2022-4-5",
						endTime:"2022-4-6",
						price:"3",
						description:"南极人 被芯家纺 保暖被子春秋天 棉被双人盖被 四季被空调被褥 奶白深灰 180*200cm 4斤 ",
						taked:true,
						img:"express/3.jpg"
					}
				],
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
		//触底刷新
		onReachBottom(){
			let that = this;
			
			if(that.status != "noMore"){
				that.status = "loading";
				that.express.push({
							id:5,
							buyer:"韩立",
							avatar:"defaultIcon/hl.jpeg",
							stuff:"被子",
							startTime:"2022-4-5",
							endTime:"2022-4-6",
							price:"3",
							description:"南极人 被芯家纺 保暖被子春秋天 棉被双人盖被 四季被空调被褥 奶白深灰 180*200cm 4斤 ",
							taked:false,
							img:"express/3.jpg"
						});
			}
			setTimeout(function(){
				that.status = "noMore";
			},2000)
		},
		methods: {
			onClick:function(res){
				
			},
			//查看订单
			takeOrder:function(res){
				let that = this;
				let id = res.currentTarget.id;
				let context=this.express.forEach(function(tar,index,arr){
					if(tar.id == id){
						if(!tar.taked){
							that.clickId = id;
							that.target = tar;
							that.dialogToggle()
						}else{
							that.messageToggle('error');
						}
					}
				})
			},
			//加载
			onChange(e) {
				this.status = "loading";
			},
			//点击了已接的单
			messageToggle(type) {
				this.msgType = type
				this.messageText = `该单已经被接了,请选其他单！`
				this.$refs.message.open()
			},
			//确认接单
			dialogToggle() {
				this.$refs.alertDialog.open()
			},
			dialogConfirm() {
				uni.navigateTo({
					url:"./card/card?id="+this.clickId
				})
				
			},
			mydialogConfirm() {
				uni.navigateTo({
					url:"/pages/twoHand/release/release?type=pick-up"
				})
			},
			//接单关闭
			dialogClose(){
				
			},
			//发布代取单
			fabClick(){
				this.$refs.myDialog.open()
				
			},
			
			
		},
		components:{
			head1,
			sort,
		}
	}
</script>

<style lang="scss">
	//变灰代码
// html {
// 	filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
// 	-webkit-filter: grayscale(100%);
// }
.gray{
	filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
	-webkit-filter: grayscale(100%);
}
.pick-up{
	width: 100%;
}
.sortIcon{
	position: relative;
	width: 92%;
	display: inline;
	top:-55rpx;
	color: $uni-theme;
	margin:0 35rpx;
	image{
		width:50rpx ;
		height: 50rpx;
	}
	text{
		margin-left:10rpx;
		color: red;
	}
}
.pick-content{
		margin: 20rpx 35rpx;
		padding: 10rpx 5rpx;
		border-radius: 10rpx;
		
		background-color: #FFFFFF;
	}
.card{
	position: relative;
	.taked{
		position: absolute;
		top:20%;
		right: 30rpx;
		width: 200rpx;
		height: 200rpx;
		z-index: 20;
		image{
			width: 200rpx;
			height: 200rpx;
		}
	}
}
.uni-card{
	background-image:url($uni-server+'defaultIcon/tree.jpg');
	filter:Alpha(opacity=50);
	background-size: 100% auto;
	
}

</style>
