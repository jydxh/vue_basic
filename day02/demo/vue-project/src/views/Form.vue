<template>
	<div>
		<h2>表单的双向数据绑定指令： v-midel</h2>
		账号：
		<input v-model="form.name" type="text" placeholder="enter you account number" :class="{ err: !valid.name }" />
		<hr />
		密码：
		<input v-model="form.pwd" type="password" placeholder="enter your password" :class="{ err: !valid.pwd }" />
		<hr />
		手机：
		<input v-model="form.phone" type="text" placeholder="enter your phone number" :class="{ err: !valid.phone }" />
		<hr />
		邮箱：
		<input v-model="form.email" type="text" placeholder="enter you email address" :class="{ err: !valid.email }" />
		<hr />
		性别:
		<input type="radio" value="male" v-model="form.sex" /> 男 <input type="radio" value="female" v-model="form.sex" /> 女
		<hr />
		感兴趣的的行业：
		<input type="checkbox" value="education" v-model="form.hy" />education <input type="checkbox" value="financial" v-model="form.hy" />financial
		<input type="checkbox" value="IT" v-model="form.hy" />IT <input type="checkbox" value="medical" v-model="form.hy" />medical
		<input type="checkbox" value="other" v-model="form.hy" />other
		<hr />
		选择籍贯：
		<select v-model="form.jg">
			<option value="heibei">河北</option>
			<option value="heinan">河南</option>
			<option value="shandong">山东</option>
			<option value="shanxi">山西</option>
			<option value="other">其他</option>
		</select>

		<hr />

		<button @click="onSubmit">submit</button> &nbsp;&nbsp;
		<button @click="onReset">reset</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					name: "",
					pwd: "",
					phone: "",
					email: "",
					sex: "male", // 单选用string 如果不填value 默认为true/false
					hy: ["education"], // 多选用数组 , 在数组中增加'education' 则默认选中education
					jg: "heibei", // 下拉列表框，默认选中的是heibei
				},
				valid: {
					name: true,
					pwd: true,
					phone: true,
					email: true,
				},
			};
		},
		methods: {
			onSubmit() {
				let f = this.form;
				if (f.name && f.pwd && f.email && f.phone) {
					alert("success");
				} else {
					alert("fail");
				}
			},

			onReset() {
				let f = this.form;
				// f.name = "";
				// f.email = "";
				// f.pwd = "";
				// f.phone = "";
				this.form = {};
			},
		},
		watch: {
			//该方法用于监听data中 name变量的变化，一旦有变化则立即执行该监听方法
			// 并且自动传入2个参数, newval oldval
			//
			"form.name": function (newval, oldval) {
				console.log(newval);
				//对newval进行表单验证
				const regExp = /^\w{6,15}$/;
				if (regExp.test(newval)) {
					// if test seccuess
					this.valid.name = true;
				} else {
					this.valid.name = false;
				}
			},

			"form.pwd": function (newval, oldval) {
				const reg = /^\d{6}$/;
				this.valid.pwd = reg.test(newval);
			},

			"form.phone": function (newval) {
				const reg = /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/;
				this.valid.phone = reg.test(newval);
			},
			"form.email": function (newval) {
				const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
				this.valid.email = reg.test(newval);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.err {
		border: 4px solid #f00;
	}
</style>
