<template>
	<div>
		<h1>test the vue doc. basic syntax</h1>
		<div>name: {{ name }}</div>
		<div>classification: {{ type }}</div>
		<div>actor: {{ acotors.join(" / ") }}</div>
		<div>time: {{ showingOn }}</div>
		<div></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: "这个杀手不太冷",
			type: "comedy",
			acotors: ["魏翔", "玛丽"],
			showingOn: "2022-02-20",
		};
	},
};
</script>

<style lang="scss" scoped></style>
