<template>
	<div class = "conteiner">
		<template v-if="!swap">
			<p>{{inputText}}</p>
			<textarea
				v-on:keyup="filter1"
				v-model="input"
				:placeholder="inputPlaceHolder"
			/>
			<div style="display: flex; align-items: center; justify-content: space-between;">
				<p>{{outputText}}</p>
				<span v-on:click.prevent="swapForm"><i class="fa fa-sort"></i></span>
			</div>
			<textarea class = "output" readonly :placeholder="outputPlaceHolder" :value="this.output = converterFunc1(this.input)"/>
		</template>
		<template v-else>
			<p>{{outputText}}</p>
			<textarea
				v-on:keyup="filter2"
				v-model="output"
				autofocus
				:placeholder="outputPlaceHolder"/>
			<div style="display: flex; align-items: center; justify-content: space-between;">
				<p>{{inputText}}</p>
				<span v-on:click.prevent="swapForm"><i class="fa fa-sort"></i></span>
			</div>
			<textarea class = "output" readonly :placeholder="inputPlaceHolder" :value="this.input = converterFunc2(this.output)"/>
		</template>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ConvertFormComponent extends Vue {
	@Prop() private inputPlaceHolder!:string;
	@Prop() private outputPlaceHolder!:string;
	@Prop() private inputText!:string;
	@Prop() private outputText!:string;
	@Prop() private converterFunc1:any;
	@Prop() private converterFunc2:any;
	@Prop() private inputFilterRegex1?:RegExp; // /[&*<>]/g
	@Prop() private inputFilterRegex2?:RegExp;

	private input = "";
	private output = "";
	private swap = false;

	filter1(e:any) {
		if(this.inputFilterRegex1 != undefined){
			e.target.value = e.target.value.replace(this.inputFilterRegex1, "");
		}
		this.input = e.target.value
	}

	filter2(e:any) {
		if(this.inputFilterRegex2 != undefined){
			e.target.value = e.target.value.replace(this.inputFilterRegex2, "");
		}
		this.output = e.target.value
	}

	swapForm(){
		this.swap = !this.swap;
	}
}
</script>

<style scoped>
.conteiner {
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
}

.fa-sort{
	font-size: 23px;
}

.fa-sort:hover{
	background-color: rgb(221, 221, 221);
	transition: 0.2s;
}

.conteiner p{
	font-size: 22px;
	font-weight: bold;
	word-break: break-all;
}

.conteiner textarea{
	font-size: 18px;
	resize: vertical;
	height: 100px;
	overflow-y: scroll;
	overflow-x: hidden;
	margin: 0px;
	border: solid 2px black;
	box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2), 0 -3px 10px 0 rgba(0, 0, 0, 0.2);
}

</style>
