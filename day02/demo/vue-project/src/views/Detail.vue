<template>
	<div>
		<h1>This is a detail page</h1>
		<h3>通过query string 查询字符串 获取参数id: {{ $route.query.id }}</h3>
		<h3>通过path param 路径参数 获取参数id: {{ $route.params.id }}</h3>
		<img src="../assets/logo.png" width="120px" alt="" />
		<h4>电影名称： xxxx</h4>
		<h4>电影主演： xxxx</h4>
		<h4>上映时间： xxxx</h4>
		<h4>电影评分： xxxx</h4>
		<h4>电影简介： xxxx</h4>
	</div>
</template>

<script>
	import Myaxios from "../http/Myaxios";
	export default {
		data() {
			return {
				movie: [],
			};
		},
		mounted() {
			// 生命周期钩子函数  将会在组件挂载到DOM树之后自动执行
			/* console.log("router:", this.$router);
			console.log("route:", this.$route); */
			// 1. 获取参数id
			let id = this.$route.query.id || this.$route.params.id;
			let param = { id: id };
			let url = "https://web.codeboy.com/bmdapi/movie-info/query";
			Myaxios.get(url, param)
				.then(res => {
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
		},
	};
</script>

<style lang="scss" scoped></style>
