<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div :class="$style.homePageContainer">
		<button :class="$style.backButton" @click="handleBack" >Back</button>
		<h2 :class="$style.title">HomePage</h2>
		<transition
			:css="false"
			@leave="onLeave"
		>
			<router-view />
		</transition>
		<button>Next Page</button>
		<button>Other Page</button>
	</div>
</template>
