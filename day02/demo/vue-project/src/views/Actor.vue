<template>
	<div>
		<h2>actor page</h2>
		<hr />
		<button @click="showActors">click to show first 100 actors</button>
		<hr />
		<h2>loading the counter</h2>
		<counter :min="0" :max="10"></counter>
		<br />
		<counter :min="0" :max="20"></counter>
		<br />
		<counter :min="0" :max="11" :step="2"></counter>
		<hr />
		<h2>测试组件的默认插槽</h2>
		<counter>
			<!-- //默认插槽内容 -->
			<!-- <i>商品数量:</i> -->
			<img src="../assets/logo.png" alt="" />
		</counter>
		<br />

		<counter>
			<i>记录数组：</i>
		</counter>

		<hr />

		<h2>测试组件的具名插槽</h2>

		<counter>
			<span slot="left">左侧插槽内容left</span>
			<i>计数:</i>
			<span slot="right">右侧插槽内容right</span>
		</counter>

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
	import Counter from "../components/Counter.vue";
	import Person from "../components/Person.vue"; // 引入子组件 person
	import Myaxios from "../http/Myaxios";

	export default {
		// components 用于指明当前组件中 需要用哪些子组件
		components: { Person, Counter },
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
