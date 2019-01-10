<template>
	<div id="app">
		<vue-particles class="vue-particles"
			color="#dedede"
			:particleOpacity="0.7"
			:particlesNumber="60"
			shapeType="circle"
			:particleSize="4"
			linesColor="#dedede"
			:linesWidth="1"
			:lineLinked="true"
			:lineOpacity="0.4"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="push">
		</vue-particles>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "app"
	}
</script>

<style lang="scss">
	@import "./style/reset.css";
	@import "./asserts/iconfont/iconfont.css";
	#app {
		width: 100vw;
		height: 100vh;
		.vue-particles {
			position: fixed;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 0;
		}
	}
</style>