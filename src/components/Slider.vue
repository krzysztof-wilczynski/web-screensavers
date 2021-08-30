<template>
	<div
		id="left"
		@click="$emit('switch', 'previous')"
	>
		<div class="icon">
		</div>
	</div>
	<div
		id="right"
		@click="$emit('switch', 'next')"
	>
		<div class="icon"></div>
	</div>
</template>

<script>
export default {
	name: 'Slider',
	emits: ['switch']
}
</script>

<style lang="scss" scoped>

</style>
