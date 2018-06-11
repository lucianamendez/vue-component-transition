<style src="./HomeStart.scss" module lang="scss"></style>
<script src="./HomeStart.js"></script>

<template>
	<div :class="$style.startContainer">
		<div :class="$style.block">
			<span>HomeStart</span>
			<router-link :to="{name: RouteNames.HOME}">Home Page </router-link>
		</div>
	</div>
</template>
