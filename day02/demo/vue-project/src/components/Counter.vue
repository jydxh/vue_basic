<template>
	<div class="counter">
		<button @click="count - step < min ? count : (count -= step)" :disabled="count == min">-</button>
		<!-- 设计的slot占位符，此处显示的内容取决于父组件使用时的默认的插槽内容 -->
		<slot />
		<span>{{ count }}</span>
		<button @click="count + step > max ? count : (count += step)" :disabled="count == max">+</button>
	</div>
</template>

<script>
	export default {
		//声明自定义属性 min max

		props: {
			min: { type: Number, default: -10 },
			max: { type: Number, default: 10 },
			step: { type: Number, default: 1 },
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
		line-height: 30px;
		> button {
			width: 30px;
			height: 30px;
			background-color: rgb(188, 186, 186);
			outline: none;
			border: none;

			border-radius: 2px;
		}
		img {
			margin-left: 10px;

			height: 15px;
		}
		span {
			display: inline-block;

			text-align: center;
			width: 60px;
		}
	}
</style>
