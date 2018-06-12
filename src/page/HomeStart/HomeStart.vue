<style src="./HomeStart.scss" module lang="scss"></style>
<script src="./HomeStart.js"></script>

<template>
	<div :class="$style.startContainer">
		<div :class="$style.block">
			<span>PAGE 0<br/>(Home Start)</span>
			<router-link v-if="$route.name === 'start'" :to="{name: RouteNames.HOME}">GO TO PAGE 1</router-link>
		</div>
			<transition @leave="onLeave" v-bind:css="false">
     			<router-view></router-view>  
    		</transition>		
	</div>
</template>
