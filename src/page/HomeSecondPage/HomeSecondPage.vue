<style src="./HomeSecondPage.scss" module lang="scss"></style>
<script src="./HomeSecondPage.js"></script>

<template>
	<div :class="$style.secondPageContainer">
		<h2 :class="$style.title">PAGE 2<br/>(Second Page)</h2>
		<Button :class="$style.backButton" @click.native="handleBack"  :component-id="'buttonBack'" :text="'Back'"/>
	</div>
</template>
