<template>
	<Slider @switch="switchComponent($event)"></Slider>
	<component :is="currentComponent"></component>
</template>

<script lang="ts">
import {computed,
	defineAsyncComponent,
	ref} from 'vue';
import Slider from './components/Slider.vue';
import screensavers from './components/screensavers';

type switchValue = 'next' | 'previous';

export default {
	components: {
		Slider,
		'Bubbles': defineAsyncComponent(() =>
			import('./components/screensavers/Bubbles.vue')),
		'Stripes': defineAsyncComponent(() =>
			import('./components/screensavers/Stripes.vue')),
	},
	setup() {
		const componentIndex = ref(0);
		const currentComponent = computed(() => screensavers[componentIndex.value])

		function switchComponent(value: switchValue) {
			console.log(currentComponent)
			if (componentIndex.value === screensavers.length - 1 && value === 'next') {
				componentIndex.value = 0;
			} else if (componentIndex.value === 0 && value === 'previous') {
				componentIndex.value = screensavers.length - 1;
			} else if (componentIndex.value < screensavers.length && value === 'next') {
				componentIndex.value++;
			} else {
				componentIndex.value--;
			}
		}

		return {
			screensavers, currentComponent, componentIndex, switchComponent
		}
	}
}
</script>


<style>
</style>
