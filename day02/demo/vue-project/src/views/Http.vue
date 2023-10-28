<template>
	<div>
		<!-- Http.vue 测试http请求 -->
		<h2>Axios 请求测试</h2>
		<button @click="getMovies">发送请求，加载电影列表</button>
		<hr />
		<input type="text" placeholder="Please Enter The Keywords of a Movie" v-model="name" /> &nbsp;&nbsp;
		<button @click="queryMovies">submit the post request</button>

		<hr />
		<h1>查询结果</h1>
		<div class="header" v-for="item in movie" :key="item.id">
			<div class="cover"><img :src="item.cover" /></div>
			<div class="title">{{ item.title }}</div>
			<div class="actor">{{ item.star_actor }}</div>
			<div class="showingon">{{ item.showingon }}</div>
			<div class="type">{{ item.type }}</div>
			<div class="duration">{{ item.duration }}minutes</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios";
	let instance = axios.create();
	export default {
		data() {
			return {
				movie: [],
				name: "", // use to store the keywords
			};
		},
		methods: {
			getMovies() {
				// 发送请求，加载电影列表
				instance({
					url: "https://web.codeboy.com/bmdapi/movie-infos",
					method: "GET",
					params: { page: 1, pagesize: 20 },
				})
					.then(res => {
						console.log(res.data.data.result);
						this.movie = res.data.data.result; // 电影数组保存到了movie中了
					})
					.catch(err => {
						console.log(err);
					});
			},

			queryMovies() {
				// post request for query the movies
				instance({
					url: "https://web.codeboy.com/bmdapi/movie-infos/name",
					method: "POST",
					data: `name=${this.name}&page=1&pagesize=20`,
				})
					.then(res => {
						console.log(res.data.data.result);
					})
					.catch(err => {
						console.log(err);
					});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		flex-wrap: no-wrap;
		width: 80%;
		margin: 0px auto;
		padding: 10px 0;
		align-items: center;
		border-bottom: 1px solid #ccc;
		.cover {
			width: 100px;
			img {
				width: 100%;
			}
		}
		.title {
			flex: 1;
		}
		.actor {
			width: 220px;
		}
		.showingon {
			width: 150px;
		}
		.type {
			width: 200px;
		}
		.duration {
			widows: 150px;
		}
	}
</style>
