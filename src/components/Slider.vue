<template>
	<div
		class="slider"
		@click="$emit('switch', 'previous')"
	>
		<div class="icon">
		</div>
	</div>
	<div
		class="slider"
		@click="$emit('switch', 'next')"
	>
		<div class="icon">
		</div>
	</div>
</template>

<script>
export default {
	name: 'Slider',
	emits: ['switch']
}
</script>

<style lang="scss" scoped>
.slider {
  position: fixed;
  height: 100%;
  top: 0;
  width: 10%;
  z-index: 1024;

  &:hover {
    z-index: 1024;
    opacity: .3;
  }

  &:first-of-type {
    left: 0;

    &:hover {
      background: linear-gradient(-90deg, white, black);
    }
  }

  &:last-of-type {
    right: 0;

    &:hover {
      background: linear-gradient(90deg, white, black);
    }
  }

  .icon {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    margin: 0 auto;
  }
}
</style>
