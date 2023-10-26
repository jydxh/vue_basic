<template>
	<div>
		<h2>test vue command</h2>
		<!-- v-test -->
		<h3>v-text 指令 类似于双{} == dom.innerText</h3>
		<div v-text="text"></div>
		<hr />
		<h3>v-html == dom.innerHTML</h3>
		<div v-html="text"></div>
		<hr />
		<h3>v-pre 指令 原样输出双{}中的内容</h3>
		<div v-pre>教程： 在template中应使用{{ name }}来引用data中声明的变量</div>
		<hr />
		<h3>v-if v-else-if v-else</h3>
		<div>亮亮今年： {{ age }}岁</div>
		<span v-if="age < 18">未成年 (0-18) </span>
		<span v-else-if="age < 35">青年 (18-35)</span>
		<span v-else-if="age < 60">中年 (36-60)</span>
		<span v-else>老年(61-)</span>
		<hr />
		<h3 v-blue>测试自定义指令</h3>
		<p v-red>Lorem ipsum, dolor sit amet consectetur adipisicim dolor.</p>
		<p v-color="`#2fd356`">r sit amet consectetr sit amet consectetr sit amet consectet</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				age: 17,
				text: "今晚打老虎 ..<span style='color: red;'>hello wrold</span>",
			};
		},

		directives: {
			//用于定义自定义指令 custom directives
			// red 是自定义指令的名字
			red: {
				// inserted 法方 有vue自动调用，当绑定该指令的元素被插入到dom后执行
				// vue 将传入el参数 表示绑定了该指令的DOM对象
				inserted: function (el) {
					el.style.color = "#f00"; // 为当前的dom元素修改文本颜色
				},
			},
			blue: {
				inserted: function (el) {
					el.style.color = "#00f";
				},
			},
			color: {
				inserted(el, binding) {
					// binding: 指令参数对象
					console.log(binding);
					el.style.color = binding.value;
				},
			},
		},
	};
</script>

<style lang="scss" scoped></style>
