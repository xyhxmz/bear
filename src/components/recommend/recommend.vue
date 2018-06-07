<template>
  <div class="recommend">
  	<div class="recommend-content">
      <!-- 因为子组件slider中的slot需要渲染 -->
      <!-- 所以当获取了recommends数据之后才能开始渲染，否则因为加载的延迟,会空白渲染 -->
  		<div v-if="recommends.length" class="slider-wrapper"  ref="sliderWrapper">
      <slider>
  		  <div v-for="item in recommends">
  		  	<a :href="item.linkUrl">
  		  		<img :src="item.picUrl">
  		  	</a>
  		  </div>
      </slider>
  		</div>
  		<div class="recommend-list">
  			<h1 class="list-title">热门歌单推荐</h1>
  			<ul>  				
  			</ul>
  		</div>
  	</div>
  </div>
</template>

<script>
import Slider from 'base/slider/slider'
import {getRecommend} from 'api/recommend'
import {ERR_OK} from 'api/config'

export default {
	data() {
		return {
			recommends : [],
      discList: []
		}
	},
	created() {
        this._getRecommend()
        // this._getDiscList()
	},
	methods:{
		_getRecommend() {

			getRecommend().then((res)=> {
				if(res.code === ERR_OK){
					this.recommends = res.data.slider
				}
			})
		},
     // _getDiscList() {
     //    console.log("qwe")
     //    getDiscList().then((res) => {
     //      if (res.code === ERR_OK) {
     //        this.discList = res.recomPlaylist.data.v_hot
     //        console.log(discList);
     //      }
     //    })
     //  }
	},
  components: {
    Slider
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import "~common/stylus/variable"
 .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
</style>