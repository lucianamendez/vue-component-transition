<style src="./Button.scss" module lang="scss"></style>
<script src="./Button.js"></script>

<template>
	<button :v-html="text" :class="$style[color]" @click="handleClick"   />
</template>
