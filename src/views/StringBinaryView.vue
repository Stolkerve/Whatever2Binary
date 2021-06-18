<template>
  <div class = "forms-conteiner">
    <ConvertFormComponent
			:inputPlaceHolder="'Write your ASCII text here!'"
			:outputPlaceHolder="'0110010101110100011010010111001001010111'"
			:inputText="'Text'"
			:outputText="'Binary'"
			:converterFunc1="this.stringToBinary"
			:converterFunc2="this.binaryToString"
			:inputFilterRegex2="/[a-zA-Z2-9]/g"
		/>
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

export default class StringBinaryView extends Vue {
	binaryToString(src:string): string{
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
		return buffer;
	}

	stringToBinary(src:string): string {
		var buffer = "";
	  for(let i = 0; i < src.length; i++)
	  {
	      for(let e = 0; e < 8; e++)
	      {
	        buffer += String((src[i].charCodeAt(0) >> e) & 1);
	      }
	  }
	  return buffer.split("").reverse().join("");
	}
}
</script>

<style>

</style>