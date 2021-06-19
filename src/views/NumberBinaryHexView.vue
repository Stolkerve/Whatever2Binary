<template>
  <div class="forms-conteiner">
		<div class = "forms-background-conteiner">
		<!-- Number-Binary -->
    <ConvertFormComponent
			:inputPlaceHolder="'120897923'"
			:outputPlaceHolder="'011001010111'"
			:inputText="'Number'"
			:outputText="'Binary'"
			:converterFunc1="stringToNumber"
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

	binaryToNumber(src:string): string {
		/*
		var buffer = "";
		var numOfChars = src.length / 8;
		for(let i = numOfChars; i > 0; i--)
	  {
			var char = "";
			for(let e = 8; e > 0; e--)
	    {
	      char += src[i * 8 - e];
	    }
			buffer += String.fromCharCode(parseInt(char.split("").join(""), 2));
		}
		*/
		return parseInt(src.split('').join(''), 2 ).toString();
	}

	stringToNumber(src:string): string {
		/*
		var buffer = "";
	  for(let i = 0; i < src.length; i++)
	  {
	      for(let e = 0; e < 8; e++)
	      {
	        buffer += String((src[i].charCodeAt(0) >> e) & 1);
	      }
	  }
	  return buffer.split("").reverse().join("");
		*/
		return Number(src).toString(2);
	}

	numberToHex(src:string): string {
		var hex = Number(src).toString(16).toUpperCase();
  	return src == "" ? "" : hex == "NAN" ? "" : hex;
	}

	hexToNumber(src:string): string {
		return src != "" ? parseInt(src, 16).toString() : "";
	}

	hexToBinary(src:string): string{
		return this.stringToNumber(this.hexToNumber(src));
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