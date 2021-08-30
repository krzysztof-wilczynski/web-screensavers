<template>
	<Slider></Slider>
	<component :is="currentComponent"></component>
</template>

<script lang="ts">
import {
	defineAsyncComponent,
	ref
} from 'vue';
import Slider from './components/Slider.vue';
import screensavers from './components/screensavers';

export default {
	components: {
		Slider,
		'Bubbles': defineAsyncComponent(() =>
			import('./components/screensavers/Bubbles.vue'))
	},
	setup() {
		// eslint-disable-next-line no-unused-vars
		const currentComponent = ref(screensavers[0])
		return {
			screensavers, currentComponent
		}
	}
}
</script>


<style>
</style>
