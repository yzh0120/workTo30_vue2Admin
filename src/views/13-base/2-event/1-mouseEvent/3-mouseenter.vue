<template>
  <page>
	  <div class="container" ref="container">
		  <!-- 鼠标 -->
		  <!-- <div class="move" :style="{top:`${top}px`,left:`${left}px`}"> </div> -->
		  
		  <div class="demo" ref="demo">
		  	
		  	<div class="son"></div>
		  </div>
	  </div>
  </page>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
	  return {
		 left:0,
		 top:0
	  }
  },
  methods:{
	  mouseenter_fn(){		  
		  console.log("进入")
	  },
	  mouseleave_fn(){
		  console.log("离开 ")
	  },
  },
  mounted() {
	this.$refs.demo.addEventListener('mouseenter',this.mouseenter_fn)
	this.$refs.demo.addEventListener('mouseleave',this.mouseleave_fn)
  },
  beforeDestroy() {
	this.$refs.demo.removeEventListener('mouseenter',this.mouseenter_fn )
	this.$refs.demo.removeEventListener('mouseleave',this.mouseleave_fn)
  }
}
</script>

<style lang="scss" scoped="scoped">
	.container{
		height: 10000px;
		.move{
			width: 100px;
			height: 100px;
			background-color: deepskyblue;
			position: fixed;
			transform: translate(-50%,-50%);
			border-radius: 50%;
		}
	}
	.demo{
		width: 500px;
		height: 500px;
		background-color: deepskyblue;
		display: inline-block;
	}
	.son{
		margin: 0 auto;
		width: 300px;
		height: 200px;
		background-color: green;
	}
</style>
