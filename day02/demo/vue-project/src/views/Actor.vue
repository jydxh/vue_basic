<template>
	<div>
		<h2>actor page</h2>
		<hr />
		<button @click="showActors">click to show first 100 actors</button>
		<hr />
		<div class="box">
			<div class="card" v-for="item in actor" :key="item.id">
				<div><img :src="item.actor_avatar" alt="" /></div>
				<p>{{ item.actor_name }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Myaxios from "../http/Myaxios";

	export default {
		data() {
			return {
				actor: [],
			};
		},
		methods: {
			showActors() {
				const url = "https://web.codeboy.com/bmdapi/movie-actors";
				const para = { page: 1, pagesize: 100 };
				Myaxios.get(url, para)
					.then(res => {
						console.log(res.data.data);
						this.actor = res.data.data;
					})
					.catch(err => {
						console.log(err);
					});
			},
		},
	};
</script>

<style lang="scss" scoped>
	.box {
		width: 90vw;
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
		> .card {
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
	}
</style>
