<template>
	<div>
		<h1>test v-for</h1>
		<!-- vfor.vue -->
		<h3>测试重复输出元素</h3>
		<p v-for="item in 5" :key="item">{{ item }}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui</p>
		<h4>测试遍历data中的array</h4>
		<div>
			亮亮的爱好：
			<span class="tag" v-for="(item, index) in hobby" :key="item">{{ index + 1 }} . {{ item }}</span>
		</div>

		<hr />
		<h3>遍历购物车</h3>
		<div class="cart-item" v-for="item in foods">
			商品id: {{ item["id"] }} &nbsp;&nbsp; name: {{ item["name"] }} &nbsp;&nbsp; price: {{ item["price"] }} &nbsp;&nbsp; amount: {{ item["num"] }} &nbsp;&nbsp;
			total: {{ item["price"] * item["num"] }} $
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			hobby: ["eat", "drink", "sleep", "workoout", "swim"],
			foods: [
				{ id: 1001, name: "煎饼果子", price: 4.5, num: 2 },
				{ id: 1002, name: "煎饼", price: 1.5, num: 2 },
				{ id: 1003, name: "果子", price: 3, num: 2 },
				{ id: 1004, name: "米饭", price: 1.0, num: 2 },
				{ id: 1005, name: "面条", price: 1.5, num: 2 },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.tag {
	display: inline-block;
	padding: 3px 6px;
	background-color: cornflowerblue;
	color: #fff;
	margin-right: 10px;
	font-size: 0.8em;
}
.cart-item {
	padding: 10px;
	border: 1px solid black;
	width: 700px;
	margin: 0 auto;
}
</style>
