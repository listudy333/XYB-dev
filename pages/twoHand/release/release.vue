<template>
	<view class="container">
		<uni-section :title="releaseType" type="line">
			<view class="example">
				<view v-if="releaseType=='发布二手'">
					<uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
						<uni-forms-item label="物品描述" required name="descript">
							<uni-easyinput type="textarea" v-model="valiFormData.descript"
							 placeholder="请输入物品的描述,例如:一台用了两年的台式机,显卡是蓝宝石的RX5700,CPU是AMD的Ryzen5 3600 6-Core Processor,支持Nvme协议的512G固态硬盘,运行内存为海康威视的,16G双条!" />
						</uni-forms-item>
						<view class="release-input">
							<uni-forms-item label="联系方式" required name="connect">
								<uni-data-checkbox mode="tag"  v-model="valiFormData.connectType" :localdata="contectList"></uni-data-checkbox>
								<view class="other">
									<uni-easyinput v-model="valiFormData.connect" :styles="styles" :placeholderStyle="placeholderStyle" placeholder="例如 17606985420、listu@126.com" ></uni-easyinput>
								</view>
							</uni-forms-item>
							<!-- <view class="before">联系方式：</view> -->
						</view>
						<uni-forms-item label="全新价格">
							<uni-easyinput class="price" v-model="valiFormData.beforeP" placeholder="请输全新商品的价格" />
						</uni-forms-item>
						<uni-forms-item label="现在定价" required name="price">
							<uni-easyinput class="price" v-model="valiFormData.price" placeholder="请输入您想要的价格" />
						</uni-forms-item>
						<uni-forms-item label="图片上传" required name="images">
							<uni-file-picker limit="9"  @success="upImg" @select="imgSelect" @delete="handleDelete"  @progress="progress" fileMediatype="image"   file-mediatype="image"></uni-file-picker>
							<view v-show="imgErr" class="uni-error-message" style="color: red;">
								<text class="uni-error-message-text">
									<span>请上传二手商品图片</span>
								</text>
							</view>
						</uni-forms-item>
					</uni-forms>
					<view>
						<button type="primary" @click="submit('valiForm')">提交</button>
					</view>
				</view>
				<view v-else>
					<!-- id:5,
					buyer:"韩立",
					avatar:"defaultIcon/hl.jpeg",
					stuff:"被子",
					startTime:"2022-4-5",
					endTime:"2022-4-6",
					price:"3",
					description:"南极人 被芯家纺 保暖被子春秋天 棉被双人盖被 四季被空调被褥 奶白深灰 180*200cm 4斤 ",
					taked:false,
					img:"express/3.jpg" -->
					<uni-forms >
						<uni-forms-item label="日期时间">
							<uni-datetime-picker type="datetime" return-type="timestamp" />
						</uni-forms-item>
					</uni-forms>
				</view>
			</view>
		</uni-section>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				// 校验表单数据
				imgErr:false,
				valiFormData: {
					descript: '',
					connect: '',
					price:'',
					images:'',
					connectType:1
				},
				
				contectList:[
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
				styles: {
						// color: '#007aff',
						// borderColor: '#007aff'
						// // borderColor: '#007aff'
					},
				placeholderStyle: "font-size:14px;font-family: 楷体;border-color:#56bbb5;",
				// 校验规则
				rules: {
					descript: {
						rules: [{
							required: true,
							errorMessage: '描述不能为空'
						}]
					},
					connect: {
						rules: [{
							required: true,
							errorMessage: '联系方式不能为空'
						}]
					},
					price: {
						rules: [{
							required: true,
							errorMessage: '二手商品展示的价格不能为空'
						}]
					},
					
				},
				imgLists:[],
				releaseType:"",
				
			}
		},
		onLoad(res){
			if("pick-up"==res.type){
				this.releaseType="快递代取";
			}else{
				this.releaseType="发布二手";
			}
		},
		methods: {
			//提交按钮
			
			submit(ref) {
				let _this=this;
				if(this.valiFormData.images==""){
					this.imgErr=true;
				}
				this.$refs[ref].validate().then(res => {
					let form = this.valiFormData;
					let imgList=this.imgLists
					uni.showLoading({
						title:"发布中"
					})
					uni.request({
						url:"/api/release/twoHand",
						method:"POST",
						dataType:"json",
						data:{
							"userId":1,
							"descript":form.descript,
							"connectType":form.connectType,
							"connect":form.connect,
							"price":form.price,
							"beforeP":form.beforeP,
						},
						success(res) {
							//重复上传图片，因为多图上传只支持app、h5
							for(let i=0;i<imgList.length;i++){
								let url=imgList[i].url;
								uni.uploadFile({
									url:"/api/release/upImage",
									filePath:url,
									name:'file',
									formData:{
										"type":0,
										"twoHand":res.data
									},
									success:(res1)=>{
										console.log(res1)
										uni.hideLoading();
										uni.showToast({
											title: `发布成功`
										});
										//_this.valiFormData="";
										uni.switchTab({
											url:"../twoHand"
										})
									},
									fail:(err1)=>{
										console.log(err1);
									}
								})
							}
							console.log(res)
						},
						fail(err){
							console.log(err)
							uni.hideLoading()
							uni.showModal({
								title:"发布失败！",
								icon:"error"
							});
							uni.switchTab({
								url:"../twoHand"
							})
						}
					})
					uni.hideLoading();
					uni.switchTab({
						url:"../twoHand"
					})
					// uni.uploadFile({
					// 	url:"/api/release/upImage",
					// 	files:imgList,
					// 	formData:{
					// 		"type":0,
					// 		"userId":1
					// 	},
					// 	success:(res)=>{
					// 		console.log(res)
					// 	},
					// 	fail:(err)=>{
					// 		console.log(err);
					// 	}
					// })
					
					// 
					// uni.showToast({
					// 	title: `校验通过`
					// });
				}).catch(err => {
					console.log('err', err);
					
				})
				
			},
			imgSelect(res){
				if(this.imgLists){
					this.imgErr=false;
				}
				this.foreachImg(res.tempFilePaths,res.tempFiles);
				console.log(this.imgLists)
				this.valiFormData.images=this.imgLists;
			},
			//删除图片
			handleDelete(res){
				let rm=res.tempFilePath;
				this.imgLists.forEach((item,index)=>{
					if(rm==(item.url)){
						this.imgLists.splice(index,1);
					}
				});
				console.log(this.imgLists)
			},
			//图片迭代
			foreachImg(imgs,ext){
				
				for(let i=0;i<imgs.length;i++){
					let image=new Object();
					image.name=ext[i].name;
					image.url=imgs[i]
					let new1 =JSON.parse(JSON.stringify(image))
					this.imgLists.push(new1);
				}
			}
		}
	}
</script>

<style lang="scss">
	.example {
			padding: 15px;
			background-color: #fff;
			.price::before{
				content: "￥";
				color:red;
				margin-right: 20rpx;
			}
			.price{
				display: flex;
				align-items: center;
			}
		}
</style>
