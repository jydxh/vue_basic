<template>
	<div class="counter">
		<!-- 具名插槽  name='left'-->
		<slot name="left" />
		<button @click="count - step < min ? count : (count -= step)" :disabled="count == min">-</button>
		<!-- 设计的slot占位符，此处显示的内容取决于父组件使用时的默认的插槽内容 -->
		<slot />
		<span>{{ count }}</span>
		<button @click="count + step > max ? count : (count += step)" :disabled="count == max">+</button>
		<slot name="right" />
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
		display: flex;
		padding: 5px 10px;
		border: 1px solid rgb(138, 172, 221);
		background-color: rgb(238, 239, 241);
		overflow: hidden;
		border-radius: 40px;
		line-height: 30px;

		justify-content: space-around;
		flex-wrap: nowrap;
		margin: 0 auto;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		> button {
			width: 30px;
			height: 30px;
			background-color: rgb(188, 186, 186);
			outline: none;
			border: none;

			border-radius: 2px;
		}
		img {
			display: block;
			margin-left: 10px;
			overflow: hidden;
			height: 30px;
		}
		span {
			display: block;

			text-align: center;
			width: 60px;
		}
	}
</style>
