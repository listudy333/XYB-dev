<template>
	<view class="head">
		<view class="wrap">
		</view>
		<swiper indicator-dots="true" autoplay class="swiper" interval="2000">
			<swiper-item>
				<image :src="imageAddress+'/head/1.jpeg'"></image>
			</swiper-item>
			<swiper-item>
				<image :src="imageAddress+'/head/2.jpeg'"></image>
			</swiper-item>
			<swiper-item>
				<image :src="imageAddress+'/head/3.jpeg'"></image>
			</swiper-item>
			<swiper-item>
				<image :src="imageAddress+'/head/4.jpeg'"></image>
			</swiper-item>
		</swiper>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageAddress:this.$serverAddress.address+this.$serverAddress.image,
				
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.head {
		position: relative;
		height: 500rpx;

	}

	.swiper swiper-item {
		image {
			width: 100%;
			// height: 350rpx;
		}
		height: 100%;
	}

	.wrap {
		width: 750rpx;
		height: 300rpx;
		background-image: url($uni-server+"/head/bg.jpg");
	}

	.swiper {
		overflow: hidden;
		height: 360rpx;
		border-radius: 7px;
		position: relative;
		margin: 0 auto;
		width: 680rpx;
		top: -260rpx;
	}
</style>
