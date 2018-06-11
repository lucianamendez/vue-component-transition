<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div :class="$style.homePageContainer">
		<h2>HomePage</h2>
		<transition
			:css="false"
			@leave="onLeave"
		>
			<router-view />
		</transition>
	</div>
</template>
