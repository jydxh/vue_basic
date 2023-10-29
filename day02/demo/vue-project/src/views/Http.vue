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
		<div class="header">
			<div class="cover">Cover</div>
			<div class="title">Title</div>
			<div class="actor">Actors</div>
			<div class="showingon">Showing</div>
			<div class="type">Type</div>
			<div class="duration">Duration</div>
		</div>

		<div class="header" v-for="item in movie" :key="item.id">
			<div class="cover"><img :src="item.cover" @click="toDetail" /></div>
			<div class="title">
				<router-link :to="`/detail?id=${item.id}`" tag="div"> {{ item.title }}</router-link>
			</div>
			<div class="actor">{{ item.star_actor }}</div>
			<div class="showingon">{{ item.showingon }}</div>
			<div class="type">{{ item.type }}</div>
			<div class="duration">{{ item.duration }}min</div>
		</div>
	</div>
</template>

<script>
	import Myaxios from "../http/Myaxios";
	export default {
		data() {
			return {
				movie: [],
				name: "", // use to store the keywords
			};
		},
		methods: {
			toDetail() {
				this.$router.push("/detail");
			},
			getMovies() {
				// 发送请求，加载电影列表
				Myaxios.get("https://web.codeboy.com/bmdapi/movie-infos", { page: 1, pagesize: 20 })
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
				Myaxios.post("https://web.codeboy.com/bmdapi/movie-infos/name", { name: this.name, page: 1, pagesize: 20 })

					.then(res => {
						console.log(res.data.data.result);
						this.movie = res.data.data.result;
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
			width: 150px;
		}
		.actor {
			width: 250px;
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
