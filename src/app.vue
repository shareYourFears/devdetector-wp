<template>
	<h1>What kind of Web are you?</h1>
	<div id="currentView">
		<component :is="currentView"></component>
	</div>
</template>

<script>
import viewSplash from './viewSplash.vue'

export default {
  data () {
    return {
      currentView: {viewSplash}
    }
  }
}
</script>

<style>
.message {
  color: blue;
}
</style>