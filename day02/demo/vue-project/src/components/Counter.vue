<template>
	<div class="counter">
		<button @click="count - 1 < min ? count : count--" :disabled="count == min">-</button>
		<span>{{ count }}</span>
		<button @click="count + 1 > max ? count : count++" :disabled="count == max">+</button>
	</div>
</template>

<script>
	export default {
		//声明自定义属性 min max

		props: {
			min: { type: Number, default: -10 },
			max: { type: Number, default: 10 },
		},
		data() {
			return {
				count: 5,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.counter {
		display: inline-block;
		padding: 5px 10px;
		border: 1px solid rgb(138, 172, 221);
		background-color: rgb(238, 239, 241);
		overflow: hidden;
		border-radius: 40px;
		> button {
			width: 20px;
			height: 20px;
			background-color: rgb(188, 186, 186);
			outline: none;
			border: none;
			margin: 0 auto;
			border-radius: 2px;
		}
		span {
			display: inline-block;
			width: 60px;
		}
	}
</style>
