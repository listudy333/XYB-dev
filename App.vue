<script>
	export default {
		onLaunch: function() {
			
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
		
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	view,
	text {
	    font-size: 25rpx;
	    box-sizing: border-box;
	    -webkit-font-smoothing: antialiased;
	    font-family: "Helvetica Neue", Helvetica, Arial, "微软雅黑";
	    /*文字抗锯齿*/
	}
	
	
	
	@font-face {font-family: "iconfont";
	    src: url('//at.alicdn.com/t/font_891347_8m0cieinj9d.eot?t=1542078390267'); /* IE9*/
	    src: url('//at.alicdn.com/t/font_891347_8m0cieinj9d.eot?t=1542078390267#iefix') format('embedded-opentype'), /* IE6-IE8 */
	    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
	    url('//at.alicdn.com/t/font_891347_8m0cieinj9d.ttf?t=1542078390267') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
	    url('//at.alicdn.com/t/font_891347_8m0cieinj9d.svg?t=1542078390267#iconfont') format('svg'); /* iOS 4.1- */
	  }
	  
	  .iconfont {
	    font-family:"iconfont" !important;
	    font-size:16px;
	    font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	  }
	  
	  .icon-dayu:before { content: "\e618"; }
	  
	  .icon-duoyun:before { content: "\e619"; }
	  
	  .icon-fuchen:before { content: "\e61c"; }
	  
	  .icon-leizhenyu:before { content: "\e61d"; }
	  
	  .icon-lingdang:before { content: "\e620"; }
	  
	  .icon-ye:before { content: "\e622"; }
	  
	  .icon-rila:before { content: "\e624"; }
	  
	  .icon-richu:before { content: "\e625"; }
	  
	  .icon-qing:before { content: "\e627"; }
	  
	  .icon-tanhao:before { content: "\e638"; }
	  
	  .icon-wu:before { content: "\e63a"; }
	  
	  .icon-yangsha:before { content: "\e640"; }
	  
	  .icon-yujiaxue:before { content: "\e641"; }
	  
	  .icon-yin:before { content: "\e645"; }
	  
	  .icon-zhongdumai:before { content: "\e647"; }
	  
	  .icon-zhongxue:before { content: "\e64a"; }
	  
	  .icon-jia:before { content: "\e8cc"; }
	  
	  .icon-location:before { content: "\e60d"; }
	  
	  .icon-bingbao:before { content: "\e699"; }
	  
</style>
