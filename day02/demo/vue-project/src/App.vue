<template>
	<div id="app">
		<nav class="nav">
			<a :href="url" target="_b">{{ link }}</a> | <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
			<router-link to="/index">Index</router-link> | <router-link to="/login">Login</router-link> | <router-link to="/register">Register</router-link> |
			<router-link to="/detail">Detail</router-link>
		</nav>
		<!-- 路由系统的占位符 显示的具体内容取决于资源路径预期对应的
    vue组件 -->
		<router-view />
	</div>
</template>

<script>
export default {
	// short cut: vdata 定义当前组件需要的变量
	data() {
		return {
			link: "Google",
			url: "http://www.google.ca",
		};
	},
};
</script>
<style lang="scss">
.nav {
	font-size: 1.2em;
}
</style>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
