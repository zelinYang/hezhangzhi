<template>
	<div>
		<div id="map"></div>
		<div class="left-side">
			<div class="left-side-first">
				<el-tag
				v-for="tag in tags"
				:key="tag.name"
				closable
				:type="tag.type">
				{{tag.name}}
			</el-tag>
		</div>
		<div class="left-side-second">
			<div style="padding-right: 22px">
				<el-switch
				style="display: block"
				v-model="valuesw0"
				active-text="水质">
			</el-switch>
			<el-switch
				style="display: block"
				v-model="valuesw1"
				active-text="污染源">
			</el-switch>
		</div>
			<div style="">
				<el-switch
				style="display: block"
				v-model="valuesw1"
				active-text="水利工程">
			</el-switch>
			<el-switch
				style="display: block"
				v-model="valuesw1"
				active-text="生态流量">
			</el-switch>
			</div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div class="left-side-third"></div>
	</div>
	<div class="right-bottom"></div>
</div>
</template>

<script>
	import Vue from 'vue'

	export default Vue.extend({
		name: 'info-new',
		data(){
			return{
				tags: [
				{ name: '关闭预警', type: '' }
				],
				valuesw1: true,
				valuesw0: true
			}
		}

	})
</script>
<style>
	.el-switch__label{
		vertical-align: baseline;
	}
</style>

<style scoped lang="less">
@shadow: 1px 1px 10px #909399;
.left-side{
	max-width: 280px;
	min-width: 280px;
	min-height: 90vh;
	position: fixed;
	left: 10px;
	top: 70px;
	div{
		box-shadow: @shadow;
		margin-bottom: 10px;
	}
}
.left-side-first{
	height: 50px;
	padding: 10px 10px 0 10px;
	line-height: 40px;
}
.left-side-second{
	min-height: 300px;
	height: 40vh;
	div{
		height: 3vh;
		display: flex;
		line-height: 3vh;
		justify-content: space-between;
		box-shadow: 0 0 0 #efefef;
		padding: 10px;
		span.el-switch__label{
			vertical-align: baseline;
		}
	}
}
.left-side-third{
	min-height: 400px;
	height: 45vh;
}
</style>