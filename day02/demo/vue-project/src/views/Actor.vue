<template>
	<div>
		<h2>actor page</h2>
		<hr />
		<button @click="showActors">click to show first 100 actors</button>
		<hr />
		<!-- <div class="box">
			<div class="card" v-for="item in actor" :key="item.id">
				<div><img :src="item.actor_avatar" alt="" /></div>
				<p>{{ item.actor_name }}</p>
			</div>
		</div> -->
		<div class="box">
			<person class="card" v-for="item in actor" :key="item.id" :avatar="item.actor_avatar" :name="item.actor_name"></person>
		</div>
	</div>
</template>

<script>
	import Person from "../components/Person.vue"; // 引入子组件 person
	import Myaxios from "../http/Myaxios";

	export default {
		// components 用于指明当前组件中 需要用哪些子组件
		components: { Person },
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
						// console.log(res.data.data);
						this.actor = res.data.data;
						console.log(this.actor);
					})
					.catch(err => {
						console.log(err);
					});
			},
		},
	};
</script>

<style lang="scss" scoped>
	/* .box {
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
	} */

	.box {
		width: 90vw;
		display: flex;
		flex-wrap: wrap;
		margin: 0 auto;
	}
</style>
