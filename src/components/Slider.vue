<template>
	<div
		class="slider"
		@click="$emit('switch', 'previous')"
	>
		<div class="icon">
			<mdicon
				name="chevronLeft"
				size="64"
			></mdicon>
		</div>
	</div>
	<div
		class="slider"
		@click="$emit('switch', 'next')"
	>
		<div class="icon">
			<mdicon
				name="chevronRight"
				size="64"
			></mdicon>
		</div>
	</div>
</template>

<script lang="ts">

export default {
	name: 'Slider',
	emits: ['switch'],
	setup() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.slider {
  position: fixed;
  height: 100%;
  top: 0;
  width: 10%;
  z-index: 1024;
  opacity: 0;
  transition: opacity .25s linear 100ms;

  &:hover {
    opacity: 1;
  }

  &:nth-of-type(1) {
    left: 0;

    &:hover {
      background: linear-gradient(90deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, 0));
    }
  }

  &:nth-of-type(2) {
    right: 0;

    &:hover {
      background: linear-gradient(-90deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, 0));
    }
  }

  .icon {
    position: absolute;
    top: 50%;
    color: white;
    margin: 0 auto;

    &:nth-of-type(1) {
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &:nth-of-type(2) {
      right: 50%;
      transform: translate(50%, -50%);
    }
  }
}
</style>
