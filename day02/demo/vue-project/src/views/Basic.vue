<template>
	<div>
		<h1>test the vue doc. basic syntax</h1>
		<div>name: {{ name }}</div>
		<div>classification: {{ type }}</div>
		<div>actor: {{ actors.join(" / ") }}</div>
		<div>time: {{ showingOn }}</div>
		<button @click="next">换一部电影</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "这个杀手不太冷",
			type: "comedy",
			actors: ["魏翔", "玛丽"],
			showingOn: "2022-02-20",
		};
	},
	// 快捷键 vmethod
	methods: {
		next() {
			this.name = "功夫";
			this.type = "动作/喜剧";
			this.actors = ["周星驰", "黄圣依"];
			this.showingOn = "2015-10-23";
		},
	},
};
</script>

<style lang="scss" scoped></style>
