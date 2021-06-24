<template>
  <div class="forms-conteiner">
		<div class = "forms-background-conteiner">
		<!-- Number-Binary -->
    <ConvertFormComponent
			:inputPlaceHolder="'120897923'"
			:outputPlaceHolder="'011001010111'"
			:inputText="'Number'"
			:outputText="'Binary'"
			:converterFunc1="numberToBinary"
			:converterFunc2="binaryToNumber"
			:inputFilterRegex1="/[a-zA-Z]/g"
			:inputFilterRegex2="/[a-zA-Z2-9]/g"
		/>
		<hr/>
		<!-- Number-Hex -->
    <ConvertFormComponent
			:inputPlaceHolder="'120897923'"
			:outputPlaceHolder="'123AD982F'"
			:inputText="'Number'"
			:outputText="'Hexadecimal'"
			:converterFunc1="numberToHex"
			:converterFunc2="hexToNumber"
			:inputFilterRegex1="/[a-zA-Z]/g"
			:inputFilterRegex2="/[g-zG-Z]/g"
		/>
		<hr/>
		<!-- Hex-Binary -->
    <ConvertFormComponent
			:inputPlaceHolder="'123AD982F'"
			:outputPlaceHolder="'011001010111'"
			:inputText="'Hexadecimal'"
			:outputText="'Binary'"
			:converterFunc1="hexToBinary"
			:converterFunc2="binaryToHex"
			:inputFilterRegex1="/[g-zG-Z]/g"
			:inputFilterRegex2="/[a-zA-Z2-9]/g"
		/>
		</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ConvertFormComponent from "@/components/ConvertFormComponent.vue"

@Component({
  components: {
  	ConvertFormComponent
  },
})

export default class NumberBinaryHexView extends Vue {
	private hexNumMap = new Map<string, number>([
		["0", 0],
		["1", 1],
		["2", 2],
		["3", 3],
		["4", 4],
		["5", 5],
		["6", 6],
		["7", 7],
		["8", 8],
		["9", 9],
		["A", 10],
		["B", 11],
		["C", 12],
		["D", 13],
		["E", 14],
		["F", 15],
	]);

	private numHexMap = new Map<number, string>([
		[0, "0"],
		[1, "1"],
		[2, "2"],
		[3, "3"],
		[4, "4"],
		[5, "5"],
		[6, "6"],
		[7, "7"],
		[8, "8"],
		[9, "9"],
		[10, "A"],
		[11, "B"],
		[12, "C"],
		[13, "D"],
		[14, "E"],
		[15, "F"],
	]);

	binaryToNumber(src:string): string {
		var binaryStr = src.trim();
		var output:number = 0;
		for(let i=binaryStr.length - 1; i >= 0; i--)
		{
			if(binaryStr[i] == "1")
			{
				output += Math.pow(2, (binaryStr.length - i - 1))
			}
		}
		
		return src != "" ? String(output) : "";
	}

	numberToBinary(src:string): string {
		var number = Number(src.trim());
		var output:string = "";

		while(number > 0)
		{
			output += Math.floor(number % 2);
			number = Math.floor(number / 2);
		}
		return output;
	}

	numberToHex(src:string): string {
		var number = Number(src.trim());
		var output:string = "";

		while(number > 0)
		{
			output += this.numHexMap.get(Math.floor(number % 16));
			number = Math.floor(number / 16);
		}
		return output.toUpperCase();
	}

	hexToNumber(src:string): string {
		var hex = src.trim().toUpperCase();
		var output:number = 0;
	
		let e = 0
		for(let i = hex.length - 1; i >= 0; i--)
		{
			output += this.hexNumMap.get(hex[i]) * Math.pow(16,e);
			e++;
		}
		return src != "" ? String(output) : "";;
	}

	hexToBinary(src:string): string{
		return this.numberToBinary(this.hexToNumber(src));
	}

	binaryToHex(src:string): string{
		return this.numberToHex(this.binaryToNumber(src));
	}
}

</script>

<style scoped>
hr {
	margin-top: 30px;
	border: 2px solid black;
  border-radius: 5px;
	width: 100%;
}
</style>