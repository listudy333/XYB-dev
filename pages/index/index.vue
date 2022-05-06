<template>
	<view class="bigcontainer">
		<view class="banner">
			<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" >
			    <swiper class="swiper-box" @change="change" :autoplay="true" :interval="2000" :duration="500">
			        <swiper-item v-for="(item ,index) in info" :key="index">
			            <view class="swiper-item">
			                <image :src="serverImg+item.imageUrl" mode="aspectFill" />
			            </view>
			        </swiper-item>
			    </swiper>
			</uni-swiper-dot>
		</view>
		<!--2.功能模块 -->
		<view class='strip'></view>
		<view class='other'>
		  <view class='item' v-for="(item,index) in block" :key="index" :id="index"  @click="funClick" >
		    <image :src='item.icon'/>
		    <view>{{item.name}}</view>
		  </view>
		</view>
		<view class='strip'></view>
		<!-- 文字滚动 -->
		<uni-notice-bar scrollable="true" single="true" color="red" showIcon="true" text="文山学院迎新晚会于本星期五晚七点举行！！我说你是人间的四月天； 笑响点亮了四面风；轻灵在春的光艳中交舞着变。你是四月早天里的云烟，黄昏吹着风的软，星子在无意中闪，细雨点洒在花前。"></uni-notice-bar>
		<!-- 笑话 -->
		<view>
			<text class="jokeT">每日一笑</text>
			<view class="joke" >
				<view class="jokeC">{{jokeList[0].content}}</view>
				<view class="jokeTime">{{jokeList[0].updatetime}}</view>
				<view class="flushI" >
					
						<view :class="claName" @click="addClass"></view>
					
				</view>
			</view>
		</view>
		<!-- 天气 -->
		<view>
			<text class="jokeT">今天天气</text>
			<view class="joke" >
				<view class="weatherBox">
					
					<!-- <view class="container">
					    <view class="mainContent">
					        <image :src="serverImg+'/color-weather-icons/qing.png'"></image>
					        <view class="mainInfoWrap">
					            <view class="address">
					                <text class="iconfont icon-location"></text>
					                <text>{{location.address|| '云南省文山市'}}</text>
					                <view class="updateTime">{{location.time}} 更新</view>
					            </view>
					            <view class="weather">
					                <view class="temperature">{{nowWeather.tempNow}}<text></text></view>
					                <view class="description">{{nowWeather.condition}}晴</view>
					                <view class="range">{{nowWeather.tempLow}}°C~{{nowWeather.tempHeight}}°C</view>
					                <view class="tips">{{nowWeather.descrip}}</view>
					            </view>
					        </view>
					    </view>
					    <view class="daysWeather qing">
					        <scroll-view class="scrollBox"  scroll-x="true" show-scrobar="false">
					            <view class="weatherBox" v-for="(item,index) in forecast15daysData.forecast" :key="index">
					                <view class="weatherInfo">
					                   
					                    <image :src="serverImg+'color-weather-icons/icon/'+item.image"></image>
					                    <view>
					                        <text>{{item.conditionDay}}</text>
					                        <text>{{item.tempDay}}°~{{item.tempNight}}°</text>
					                    </view>
					                    <text >{{item.predictDate}}</text>
					                    
					                </view>
					            </view>
					        </scroll-view>
					    </view> 
					    
					</view>
					<scroll-view class="scroll-x" scroll-x="true" show-scrobar="true">
						<view class="card" v-for="(item,index) in weatherData" :key="index">
							<image :src="serverAdd+weather"></image>
							<view class="date">{{item.date}}</view>
							<view class="temperature">{{item.low}}℃ ~ {{item.high}}</view>
							<text>{{item.type}}</text>
							<view class="wind">{{item.fengxiang}} > {{item.fengli}}</view>
						</view>	
					</scroll-view> -->
					
				</view>
				<button @click="getWeather">查询天气</button>
			</view>
		</view>
		<view class='strip'></view>
		<!-- 4.列表 -->
		<view class='news-item'>
		  <view class="news">
		    <text>最新消息</text>
		  </view>
		  <!-- <view class='strip'></view> -->
		  <view v-for="(item,index) of news" :key='index' bindtap="productDetail" data-id="item.id">
		    <view class='list'>
		      <view class='list-img'>
		        <image :src="serverImg+item.images[0]"></image>
		      </view>
		      <view class='list-info'>
		        <view class='title'>{{item.title}}</view>
		        <view class='content'>{{item.content}}</view>
		        <view class='info-bottom'>
		          <view class='author'>作者：{{item.author}}</view>
		          <view class='num'>点击:{{item.clicks}}</view>
		        </view>
		      </view>
		    </view>
		    <view class='strip'></view>
		  </view>
		</view>
		<!-- 5.文山风景 -->
		<view class="selection" >
		    <view class="header">
		      <text class="text">文山景区</text>
		      <text class="text-all">全部景区</text>
		    </view>
		    <view class="list-item" >
		      <view class="video-images">
		        <video show-center-play-btn="true" :src="serverImg+'video/pzhv1.mp4'" ></video>
		        <view class="xt">
		          <image :src="serverImg+'pzh/pz1.jpeg'" data-index='0' ></image> 
		          <image :src="serverImg+'pzh/pz2.jpeg'" data-index='1' ></image>         
		        </view>
		      </view>
		      <view class="list-item-text">
		        <view class="list-item-text-title">
		          <text>普者黑</text>
		        </view>
		        <view class="list-item-text-content">
		          <text>·被誉为“世间罕见、中国独一无二的喀斯特山水田园风光”。
		·因湖南卫视亲子节目《爸爸去哪儿》曾在此取景，而被众人熟知。
		·月亮洞、火把洞、观音洞和仙人洞等喀斯特溶洞是普者黑最大的看点。</text>
		        </view>
		      </view>
		    </view>
		    
		  </view>
		
		
		<!-- 最后标题 -->
		<!-- <view class='strip'></view> -->
		<view class='foot'>
		  <text>Copyright © 2022 team</text>
		  <view class='support'>由*****提供技术支持</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		
	    data() {
	        return {
				location:{
					latitude:"",
					longitude:"",
					address:"",
					time:""
				},
				nowWeather:{
					tempNow:"35",
					condition:"晴转多云",
					tempLow:"13",
					tempHeight:"35",
					descrip:"万里晴空"
				},
				weather:"qing.png",
				serverImg:this.$serverAddress.address+this.$serverAddress.image,
				claName: 'comm',
				timer: null,
				comm:true,
	            info: [{
					id:"001",
	                imageUrl: 'banner1.jpg'
	            }, {
	                id:"002",
	                imageUrl: 'banner2.jpg'
	            }, {
	                id:"003",
	                imageUrl: 'banner3.jpg'
	            }],
				 block:[
				      { icon: "../../static/fun/used2.png", name: "二手交易" },
				      { icon: "../../static/fun/carry1.png", name: "快递代取" },
				      { icon: "../../static/fun/lost1.png", name: "失物招领" },
				      // { icon: "../../static/fun/dai.png", name: "代课刷课" },
				    ],
				jokeList: [{id:1,updatetime: "2014-12-17",content: "小时候妈妈喂我饭之前会看书，我问她看的什么时。妈妈总是笑着告诉我：“是《育儿经验宝典》啊！”我很感动，直到我认识字才发现，妈妈看的是《猪崽饲养手册》。"}],
	            current: 0,
	            mode: 'round',
				weatherData:[
					{date: '3日星期四', high: '高温 33℃', fengli: '<![CDATA[1级]]>', low: '低温 9℃', fengxiang: '西风', type: "多云"},
					{date: '4日星期五', high: '高温 33℃', fengli: '<![CDATA[1级]]>', low: '低温 13℃', fengxiang: '西风', type: "多云"},
					{date: '5日星期六', high: '高温 33℃', fengli: '<![CDATA[1级]]>', low: '低温 15℃', fengxiang: '西风', type: "晴"},
					{date: '6日星期天', high: '高温 27℃', fengli: '<![CDATA[1级]]>', low: '低温 18℃', fengxiang: '西北风', type: "多云"},
					{date: '7日星期一', high: '高温 30℃', fengli: '<![CDATA[1级]]>', low: '低温 16℃', fengxiang: '北风', type: "小雨"}        
				],
				forecast15daysData:{
					forecast:[
						{
							conditionDay:2021,
							tempDay:15,
							tempNight:37,
							predictDate:"3月15日",
							image:"W13.png"
						},
						{
							conditionDay:2021,
							tempDay:16,
							tempNight:38,
							predictDate:"3月16日",
							image:"W10.png"
						},
						{
							conditionDay:2021,
							tempDay:17,
							tempNight:39,
							predictDate:"3月17日",
							image:"W9.png"
						},
						{
							conditionDay:2021,
							tempDay:18,
							tempNight:39,
							predictDate:"3月18日",
							image:"W2.png"
						},
						{
							conditionDay:2021,
							tempDay:19,
							tempNight:33,
							predictDate:"3月19日",
							image:"W5.png"
						},
						{
							conditionDay:2021,
							tempDay:7,
							tempNight:25,
							predictDate:"3月20日",
							image:"W8.png"
						},
						{
							conditionDay:2021,
							tempDay:12,
							tempNight:34,
							predictDate:"3月21日",
							image:"W4.png"
						},
					]
				},
				news: [
					{author: "张飞",
					clicks: 490,
					content: "李永忠代表学校欢迎张海翔教授一行，感谢云南农业大学一直以来对文山学院发展的关心和支持，并介绍了我校近年建设发展情况。  会上，云南农大国际学院、体育学院、新农院、马克思主义学院及国资处、纪委办等负责人就开放办学、校企合作、办学规划、乡村振兴、项目合作、国资管理等进行了交流发言。",
					images:["/news/nw1.jpg", "cloud://lidemo-q2v4t.6c69-lidemo-q2v4t-1301190986/LvDWY/images/news/nw2.jpg"],
					time: "2020-11-21T10:39:31.000Z",
					title: "云南农业大学到我校考察交流",
					_id: "6127fe145fcc608100f2355942df7626"},
					{author: "李思",
					clicks: 490,
					content: "李永忠代表学校欢迎张海翔教授一行，感谢云南农业大学一直以来对文山学院发展的关心和支持，并介绍了我校近年建设发展情况。  会上，云南农大国际学院、体育学院、新农院、马克思主义学院及国资处、纪委办等负责人就开放办学、校企合作、办学规划、乡村振兴、项目合作、国资管理等进行了交流发言。",
					images:["/news/nw1.jpg", "cloud://lidemo-q2v4t.6c69-lidemo-q2v4t-1301190986/LvDWY/images/news/nw2.jpg"],
					time: "2020-11-21T10:39:31.000Z",
					title: "云南农业大学到我校考察交流",
					_id: "6127fe145fcc608100f2355942df7626"},
				],
	        }
				
		},
		
		onLoad(){
			
		},
		onHide() {
			if(this.videoContent) {
				 this.videoContent.pause()
			 }
			console.log("消除定时器onHide");
			this.clearInterval();  
		},
		onUnload() {
			console.log("消除定时器onUnload");
			 this.clearInterval();
		},
		
		onShow() {
		    // 动态设置标题
		    // uni.setNavigationBarTitle({
		    //     title: this.$t('买金'),
		    // })
		   //this.getAuthorizeInfo();
		},
	    methods: {
	        change(e) {
	            this.current = e.detail.current;
	        },
			flushJoke(){
			    var index = Math.ceil(Math.random() * 60);
			    console.log(index)
			    this.loading = true;
				this.comm = false;
			    if (index != this.jokeList[0].num){
					this.jokeSource(index);
					// this.loading = false;
					// this.comm = true;
			    }else{
					this.flushJoke();
			    }
			},
			getWeather(){
				this.getLocationInfo();
				uni.navigateTo({
					url:"hefeng/hefeng"
				})
				// uni.request({
				// 	url:'http://wthrcdn.etouch.cn/weather_mini?city=景洪',
				//和风天气------https://devapi.qweather.com/v7/weather/24h?location=100.7716,22&key=1b51082dafd64ad392b82d6feab4315f
				// 	method:'GET',
				// 	header:{
				// 	         "content-type":"application/json"
				// 	       },
				// 	success:res=>{
				// 		console.log(res)
				// 	}
				// });
			},
			addClass(){
			  	this.claName="loading";
			  	this.timer = setTimeout( () => {
			  	    this.claName="comm";
			  		clearInterval();
			  		console.log("消除定时")
			  	}, 1000)
			},
			clearInterval(){
			  	if(this.timer) {
			  		clearTimeout(this.timer);  
			  		this.timer = null;  
			  	} 
			},
			// 位置授权
			// 获取地理位置
			getLocationInfo(){
				// #ifdef MP-WEIXIN
				uni.getSetting({
					success:res=>{
						let authSetting = res.authSetting;
						console.log(authSetting);
						if(authSetting['scope.userLocation'] === false){
							wx.showModal({
								title:"提示",
								content:"您未开启当前定位权限，请点击确认去开启权限",
								success(res){
									if(res.confirm){
										wx.openSetting();
									}
								}
							})
						}
						else{
							uni.getLocation({
								type: 'wgs84',
								//geocode:true,//设置该参数为true可直接获取经纬度及城市信息只下APP中有效
								success: res=> {
									console.log(res);
									this.location.latitude=res.latitude;
									this.location.longitude=res.longitude;
									uni.request({
										url:"https://apis.map.qq.com/ws/geocoder/v1/?location="+res.latitude+","+res.longitude+"&key=NDPBZ-FDUKP-JQRDP-LAQNH-JDL7K-KAFYI&get_poi=1",
										success:resCity=>{
											console.log(resCity);
											this.location.address=resCity.data.result.address
											console.log(resCity);
										},
										fail:err=>{
											console.log(err);
										}
									})
								},
								fail: function () {
									uni.showToast({
										title: '获取地址失败，将导致部分功能不可用',
										icon:'none'
									});
								}
							  // type: 'wgs84',
							  // geocode:true,//设置该参数为true可直接获取经纬度及城市信息
							  // success: (res)=> {
								 //  this.location.latitude=res.latitude;
								 //  this.location.longitude=res.longitude;
								 //  //this.location.address=res.address;
								 //  let date = new Date();
								 //  let hours=date.getHours()>10?date.getHours():'0'+date.getHours();
								 //  let minute=date.getMinutes()>10?date.getMinutes():'0'+date.getMinutes();
								 //  this.location.time = hours+" : "+minute;
								 //  //console.log(hours+" : "+minute);
								 //  uni.request({
								 //  	url:
								 //  })
							  // }
							});
						}
					}
				});
				// #endif
				//#ifdef H5
				uni.getLocation({
					type: 'wgs84',
					geocode:true,//设置该参数为true可直接获取经纬度及城市信息
					success: (res)=> {
						  this.location.latitude=res.latitude;
						  this.location.longitude=res.longitude;
						  //this.location.address=res.address;
						  let date = new Date();
						  let hours=date.getHours()>10?date.getHours():'0'+date.getHours();
						  let minute=date.getMinutes()>10?date.getMinutes():'0'+date.getMinutes();
						  this.location.time = hours+" : "+minute;
						  //console.log(hours+" : "+minute);
						  
						  uni.request({
							url:"/ws/geocoder/v1/?location="+res.latitude+","+res.longitude+"&key=NDPBZ-FDUKP-JQRDP-LAQNH-JDL7K-KAFYI&get_poi=1",
							success:resCity=>{
								this.location.address=resCity.data.result.address
								console.log(resCity.data.result.address);
							}
						  })
					}
				});
				//#endif
				
			},
			  // 再次获取授权
			  // 当用户第一次拒绝后再次请求授权
			openConfirm(){
			  uni.showModal({
				  title: '请求授权当前位置',
				  content: '需要获取您的地理位置，请确认授权',
				  success: (res)=> {
					  if (res.confirm) {
						  uni.openSetting();// 打开地图权限设置
					  } else if (res.cancel) {
						  uni.showToast({
							  title: '你拒绝了授权，无法获得周边信息',
							  icon: 'none',
							  duration: 1000
						  })
					  }
				  }
			  });
			},
			funClick(res){
				let id = res.currentTarget.id;
				console.log(typeof id)
				switch(id){
					case "0":
						uni.switchTab({
							url:"../twoHand/twoHand"
						})
						break;
					case "1":
						uni.navigateTo({
							url:"./pick-up/pick-up"
						})
						break;
					case "2":
						uni.navigateTo({
							url:"./lost-found/lost-found"
						})
						break;
					case "3":
						uni.navigateTo({
							url:"./course-spend/course-spend"
						})
						break;
				}
			}
			  
	    },
	}
</script>

<style>
	.bigcontainer {
		
	}
	.banner{
		background-color: #007AFF;
		border-bottom: 5rpx solid #E4E7ED;
	}
	.banner image{
		width: 100%;
	}
	/* 功能区 */
	.strip{
	  width:100%;
	  height:10rpx;
	  margin:10rpx 0;
	  
	  background-color: rgb(228,228,228)
	  
	}
	.other{
	  margin-top:10rpx; 
	  background:#fff;
	  padding-top:20rpx;
	  display:flex;
	  flex-wrap:wrap;
	  /* font-family:华文行楷; */
	}
	.item{
	  width:33.3%;
	  text-align:center;
	  font-size:24rpx;
	  color:#666;
	  margin-bottom: 20rpx;
	}
	.item image{
	  width:60rpx;
	  height:60rpx;
	}
	/* 每日一笑 */
	.jokeT{
	  font-family: 华文行楷;
	  font-size: 35rpx;
	  color:#3385FF;
	  width:20%;
	  margin:5rpx;
	  padding: 10rpx;
	  border-radius: 20px;
	  text-align: center;
	}
	.joke{
	  margin:10px;
	  padding:10px;
	  border-radius:5px;
	  border-top:1px solid #DEDEDE;
	  border-left:1px solid #DEDEDE;
	  box-shadow: 2px 2px 2px #C7C7C7;
	}
	.jokeC{
	  text-indent:2em;
	  font-size:28rpx;
	}
	.jokeTime{
	  color:#3385FF;
	  text-align: right;
	  font-size:24rpx;
	}
	.joke .flushI{
	  position: relative;
	  flex: 1;
	  text-align: right;
	}
	
	.comm{
		margin-top: 15rpx;
		width:40rpx;
		height: 40rpx;
		display: inline-block;
		vertical-align: middle;
		background: transparent url(../../static/flush1.png) no-repeat;
		background-size: 100%;
	}
	.loading{
	  margin-top: 15rpx;
	  width:40rpx;
	  height: 40rpx;
	  display: inline-block;
	  vertical-align: middle;
	  -webkit-animation: a 1s steps(30) infinite;
	  animation: loading 1s steps(30) infinite;
	  background: transparent url(../../static/flush1.png) no-repeat;
	  background-size: 100%;
	}
	.loading-normal {
	    -webkit-animation: a 1s steps(8) infinite;
	    animation: loading 1s steps(8) infinite;
	}
	@keyframes loading {
	    0% {
	        -webkit-transform: rotate(0deg);
	        transform: rotate(0deg);
	    }
	
	    to {
	        -webkit-transform: rotate(1turn);
	        transform: rotate(1turn);
	    }
	}
	/* 天气 */
	
	.weatherBox{
		width: 100%;
		display: flex;
		justify-content: space-around;
		border-radius: 45%;
	}
	/* .scroll-x{
		white-space: nowrap;
		flex-direction: column;
	}
	.weatherBox .card{
		padding: 5rpx;
		width:320rpx;
		justify-content: center;
		border: 5rpx solid #007AFF;
		background-color: #FFFFFF;
	}
	.card image{
		width: 45rpx;
		height: 45rpx;
	} */
	
	.container {
	  position: relative;
	  background: #fff;
	  z-index: 99;
	  width: 100%;
	}
	/* .container .addCity {
	  position: absolute;
	  height: 150rpx;
	  line-height: 150rpx;
	  top: 0;
	  left: 20rpx;
	  font-size: 50rpx;
	  color: #fff;
	  z-index: 999;
	} */
	.container .dotsWrap {
	  position: absolute;
	  width: 750rpx;
	  top: 190rpx;
	  left: 50%;
	  margin-left: -375rpx;
	  z-index: 10;
	}
	.container .dotsWrap .dots {
	  text-align: center;
	  height: 30rpx;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	.container .dotsWrap .dots text {
	  display: inline-block;
	  margin-right: 10rpx;
	  width: 10rpx;
	  height: 10rpx;
	  border-radius: 50%;
	  background: #333;
	}
	.container .dotsWrap .dots text.cur {
	  background: #fff;
	}
	.container .dotsWrap .dots text:last-child {
	  margin-right: 0;
	}
	/* .container swiper {
	  height: 90vh;
	}
	.container swiper .swiper-item {
	  height: 100%;
	} */
	.container .mainContent {
	  position: relative;
	  height: 550rpx;
	  width: 100%;
	}
	.container .mainContent image {
	  position: absolute;
	  height: 550rpx;
	  width:100% ;
	  z-index: -1;
	}
	.container .mainContent .mainInfoWrap {
	  height: 550rpx;
	  width: 100%;
	  padding-top: 140rpx;
	}
	.container .mainContent .mainInfoWrap .address {
	  text-align: center;
	  height: 50rpx;
	  line-height: 50rpx;
	}
	.container .mainContent .mainInfoWrap .address text {
	  color: #fff;
	}
	.container .mainContent .mainInfoWrap .address text.iconfont {
	  font-size: 36rpx;
	  margin-right: 10rpx;
	}
	.container .mainContent .mainInfoWrap .address .updateTime {
	  font-size: 22rpx;
	  color: #fff;
	}
	.container .mainContent .mainInfoWrap .weather {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  color: #fff;
	  margin-top: 80rpx;
	  text-shadow: 2rpx 2rpx 5rpx #222;
	}
	.container .mainContent .mainInfoWrap .weather .temperature {
	  font-size: 100rpx;
	  font-weight: normal;
	  position: relative;
	}
	.container .mainContent .mainInfoWrap .weather .temperature text {
	  position: absolute;
	  width: 20rpx;
	  height: 20rpx;
	  border: 6rpx solid #fff;
	  border-radius: 50%;
	  right: -20rpx;
	  top: 20rpx;
	  box-shadow: 0 0 2rpx #333;
	}
	.container .mainContent .mainInfoWrap .weather .description {
	  font-size: 34rpx;
	}
	.container .mainContent .mainInfoWrap .weather .range {
	  font-size: 26rpx;
	  margin-top: 20rpx;
	}
	.container .mainContent .mainInfoWrap .weather .tips {
	  font-size: 22rpx;
	  margin-top: 30rpx;
	}
	.container .daysWeather {
	  padding: 40rpx 0 30rpx;
	  background: #fff;
	}
	.container .daysWeather.yin {
	  background: linear-gradient(#92CDD1, #fff);
	}
	.container .daysWeather.qing {
	  background: linear-gradient(#8FDDF1, #fff);
	}
	.container .daysWeather.wu {
	  background: linear-gradient(#D9C28C, #fff);
	}
	.container .daysWeather.xue {
	  background: linear-gradient(#D1D9E4, #fff);
	}
	.container .daysWeather.ye {
	  background: linear-gradient(#75A3B2, #fff);
	}
	.container .daysWeather.yu {
	  background: linear-gradient(#BFC1E8, #fff);
	}
	.container .daysWeather .tabs {
	  display: flex;
	  margin-left: 40rpx;
	}
	.container .daysWeather .tabs text {
	  background: #EDEDED;
	  font-size: 22rpx;
	  margin-right: 20rpx;
	  width: 120rpx;
	  text-align: center;
	  height: 40rpx;
	  line-height: 40rpx;
	  border-radius: 40rpx;
	}
	.container .daysWeather .tabs text.cur {
	  background: #FEF3C3;
	}
	.container .daysWeather .scrollBox {
	  white-space: nowrap;
	  overflow: hidden;
	  font-size: 0;
	  margin-top: 40rpx;
	}
	.container .daysWeather .scrollBox .weatherBox {
	  width: 180rpx;
	  height: 200rpx;
	  display: inline-block;
	  /* border-left: 1rpx solid #fff; */
	}
	.container .daysWeather .scrollBox .weatherBox:last-child {
	  border-right: none;
	}
	.container .daysWeather .scrollBox .weatherBox .weatherInfo {
	  display: flex;
	  height: 200rpx;
	  padding: 10rpx 0;
	  justify-content: space-between;
	  flex-direction: column;
	  align-items: center;
	}
	.container .daysWeather .scrollBox .weatherBox .weatherInfo image {
	  width: 60rpx;
	  height: 60rpx;
	}
	.container .daysWeather .scrollBox .weatherBox .weatherInfo view text {
	  display: block;
	  text-align: center;
	  font-size: 22rpx;
	}
	.container .daysWeather .scrollBox .weatherBox .weatherInfo view text + text {
	  margin-top: 5rpx;
	}
	.container .daysWeather .scrollBox .weatherBox .weatherInfo text {
	  font-size: 22rpx;
	}
	.container .daysWeather .scrollBox .weatherBox .weatherInfo .iconfont {
	  font-size: 50rpx;
	}
	.container .quotes {
	  height: 10vh;
	  padding: 0 40rpx;
	  border-top: 1rpx solid #EBEBEB;
	  background: #fff;
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
	}
	.container .quotes text:first-child {
	  align-self: flex-start;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-box-orient: vertical;
	  -webkit-line-clamp: 2;
	  width: 90%;
	  text-indent: 48rpx;
	  font-size: 24rpx;
	}
	.container .quotes text:last-child {
	  align-self: flex-end;
	  font-size: 24rpx;
	}
	/* 列表 */
	.news{
	  font-family: 华文行楷;
	  color:#FFFFFF;
	  width:20%;
	  margin:5rpx;
	  padding: 10rpx;
	  border-radius: 20px;
	  text-align: center;
	  background-color: #3385FF;
	}
	.news-item{
	  background:#fff;
	}
	.list{
	  background:#fff;
	  padding:20rpx;
	  display:flex;
	  /* margin-top:20rpx; */
	}
	.list-img{
	  width:184rpx;
	  height:184rpx;
	}
	.list-img image{
	  width:184rpx;
	  height:184rpx;
	}
	.list-info{
	  padding-left:20rpx;
	  position:relative;
	  flex:1;
	}
	.title{
	  color:#333;
	  font-size:30rpx;
	  margin-bottom:14rpx;
	  overflow:hidden;
	  text-overflow:ellipsis;
	  white-space:nowrap;
	}
	.content{
	  font-size:24rpx;
	  color:#666;
	  overflow:hidden;
	  text-overflow:ellipsis;
	  display:-webkit-box;
	  -webkit-line-clamp:3;
	  -webkit-box-orient:vertical;
	
	}
	.info-bottom{
	  position:absolute;
	  bottom:-30rpx;
	  
	  left:200rpx; 
	  font-size:24rpx;
	  display:flex;
	}
	.author{
	  color:#3385FF;
	  margin-right:30rpx;
	}
	.num{
	  color:#3385FF;
	}
	/* 风景块 */
	.selection{
	  position:relative;
	  top:50rpx;
	  margin:30rpx 10rpx;
	  background-color: #fff;
	  height: 100%;
	  border-radius: 5%;
	  padding: 20rpx 0rpx;
	/*   
	  border-bottom:5px solid #ddd; */
	}
	.header{
	  width:100%;
	  border-left-width: 2px;
	  border-left-style:solid;
	  border-left-color:green;
	  margin-top:15rpx;
	  display:flex;
	  justify-content:space-between;
	  text-align: center;
	  height:40rpx;
	  padding-left:10rpx;
	  padding-right:10rpx;
	  
	  margin-bottom:10rpx;
	  
	}
	.text{
	  margin-left:15rpx;
	  font-size:35rpx;
	  font-family: 华文行楷;
	}
	.text-all{
	  color:green;
	  font-size:25rpx;
	  font-family: 华文行楷;
	  margin-right: 10px;
	}
	.list-item{
	  height:100%;
	  width:100%;
	  margin: 30rpx 0rpx;
	}
	.list-item-images{
	  
	  height:200rpx;
	  position:relative;
	  
	}
	
	.list-item-text{
	  height:100%;
	  width:96%;
	  
	  margin-top:20rpx;
	  padding-left:2%;
	  padding-right: 2%;
	}
	.list-item-text-title{
	  font-family: 华文行楷;
	}
	
	.list-item-text-content{
	  position:relative;
	  font-size:22rpx;
	  color:#999;
	  margin-top:20rpx;
	}
	.video-images{

	  display: flex;
	  justify-content: center;
	  
	  
	}
	.video-images video{
	  margin:10rpx;
	  height:470rpx;
	  border-radius: 30rpx;
	}
	.xt{
	  width:240rpx;
	}
	.xt image{
	  position:relative;
	  width:220rpx;
	  height:220rpx;
	  margin:10rpx;
	  align-items: center;
	}
	
	/* foot页脚 */
	.foot{
	  position: relative;
	  text-align: center;
	  border-bottom: 5rpx solid #3385FF;
	  background-color: #F3F3F3;
	}
	.foot text{
	  margin: 20rpx;
	  font-size: 24rpx;
	}
	.foot .support{
	  font-family:华文行楷;
	  font-size:20rpx; 
	}
</style>
