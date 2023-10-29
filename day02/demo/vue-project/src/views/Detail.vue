<template>
	<div>
		<h1>This is a detail page</h1>
		<h3>通过query string 获取参数id: {{ $route.query.id }}</h3>
		<img src="../assets/logo.png" width="120px" alt="" />
		<h4>电影名称： xxxx</h4>
		<h4>电影主演： xxxx</h4>
		<h4>上映时间： xxxx</h4>
		<h4>电影评分： xxxx</h4>
		<h4>电影简介： xxxx</h4>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped></style>
