<template>
	<div>
		<p style="text-align: center;margin: 10em 0; font-size: 14px;text-align: center;">请从微信端直接下单</p>
	</div>
</template>




<script>
	export default {
		data() {
			return {
				loading: false,
				form: {title:'', remark:'', pics:[] },
			}
		},
		methods: { 
			Save() {

			},
			UploadDone(res, file) {
				//this.imageUrl = URL.createObjectURL(file.raw);
				this.form.pics.push(file.response.data.url);
				console.log(file.response.data.url);
			},
		}
	}
</script>