<template>
	<div>
		<img :src="avatar" alt="" />
		<p>{{ name }}</p>
	</div>
</template>

<script>
	export default {
		//声明自定义属性，接受父组件传递的参数
		props: ["avatar", "name"],
	};
</script>

<style lang="scss" scoped>
	.card {
		border: 1px solid #999;
		border-radius: 8px;
		overflow: hidden;
		margin: 5px;
		width: 150px;
		img {
			width: 100%;
			border-radius: 8px;
			object-fit: cover;
		}
		> p {
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
		}
	}
</style>
