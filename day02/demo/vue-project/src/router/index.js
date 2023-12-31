import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);
//routes数组 配置了项目中所有的【路由地址：组件】之间的 映射关系
const routes = [
	// short cut vr
	{
		path: "/vfor",
		name: "vfor",
		component: () => import("../views/Vfor.vue"),
	},
	{
		path: "/http",
		name: "http",
		component: () => import("../views/Http.vue"),
	},
	{
		path: "/actor",
		name: "actor",
		component: () => import("../views/Actor.vue"),
	},
	{
		path: "/form",
		name: "form",
		component: () => import("../views/Form.vue"),
	},
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/direct",
		name: "direct",
		component: () => import("../views/Direct.vue"),
	},
	{
		path: "/home",

		component: HomeView,
	},
	{
		path: "/index",
		name: "index",
		component: () => import("../views/Index.vue"),
	},
	{
		path: "/basic",
		name: "basic",
		component: () => import("../views/Basic.vue"),
	},
	{
		path: "/login",
		name: "login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../views/Register.vue"),
	},
	{
		path: "/detail",
		name: "detail",
		component: () => import("../views/Detail.vue"),
	},
	{
		//  detail/:id 用于匹配请求路径，并且可以把最后斜杠后的字符串当做路径参数 赋值给id note id前有: 表示接收参数占位
		path: "/detail/:id",
		component: () => import("../views/Detail.vue"),
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
