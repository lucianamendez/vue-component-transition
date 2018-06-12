<style src="./HomePage.scss" module lang="scss"></style>
<script src="./HomePage.js"></script>

<template>
	<div :class="$style.homePageContainer">
		<!-- <button :class="$style.backButton" @click="handleBack" >Back</button> -->
		<Button :class="$style.backButton" :component-id="'buttonBack'" @click.native="handleBack" :text="'Back'"/>
		<h2 :class="$style.title">PAGE 1<br/>(HomePage)</h2>
		<transition
			:css="false"
			@leave="onLeave"
		>
			<router-view />
		</transition>
		<Button @click.native="handleNext"  :component-id="'buttonNext'" :text="'Next Page'"/>
		<Button @click.native="handleOther" :component-id="'buttonOther'" :text="'Other Page'"/>
	</div>
</template>
