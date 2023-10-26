<template>
	<div>
		<h2>表单的双向数据绑定指令： v-midel</h2>
		Account Number
		<input v-model="form.name" type="text" placeholder="enter you account number" :class="{ err: !valid.name }" />
		<hr />
		Password:
		<input v-model="form.pwd" type="password" placeholder="enter your password" />
		<hr />
		Phone Number:
		<input v-model="form.phone" type="text" placeholder="enter your phone number" />
		<hr />
		Email:
		<input v-model="form.email" type="text" placeholder="enter you email address" />

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
		},
	};
</script>

<style lang="scss" scoped>
	.err {
		border: 4px solid #f00;
	}
</style>
