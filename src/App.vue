<template>
	<Slider></Slider>
	{{ screensavers }}
	<component :is="currentComponent"></component>
</template>

<script lang="ts">
import {
	defineAsyncComponent,
	ref
} from 'vue';
import Slider from './components/Slider.vue';
import getAllScreensavers from './functions/getComponents'

export default {
	components: {
		Slider,
		'Bubbles': defineAsyncComponent(() =>
			import('./components/screensavers/Bubbles.vue'))
	},
	setup() {
		let screensavers: string[] = []
		// eslint-disable-next-line no-unused-vars
		const getScreenSavers = async () => {
			screensavers = await getAllScreensavers()
		}
		const currentComponent = ref('Bubbles')
		console.log(screensavers)
		return {
			screensavers, currentComponent
		}
	}
}
</script>


<style>
</style>
