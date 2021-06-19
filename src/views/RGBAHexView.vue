<template>
  <div class="forms-conteiner">
    <div class = "forms-background-conteiner">
    <template v-if="!swap">
      <div style = "width: 100%;">
        <p>RGBA</p>
      </div>
      <!--
      <RGBAComponent
        :inputText="'RGBA'"
        :outputText="'Hexadecimal'"
        :placeHolderX="'R'"
        :placeHolderY="'G'"
        :placeHolderZ="'B'"
        :placeHolderW="'A'"
        :setVecParent="getVecToChild"
        :setReadonly="false"
      />
      -->
      <div class = "rgba-conteiner">
        <input class="x" name="x" type="text" v-on:keyup="filterInputVec" :placeholder="'x'" :maxlength="!isNormalize ? 3 : 10"/>
        <input class="y" name="y" type="text" v-on:keyup="filterInputVec" :placeholder="'y'" :maxlength="!isNormalize ? 3 : 10"/>
        <input class="z" name="z" type="text" v-on:keyup="filterInputVec" :placeholder="'z'" :maxlength="!isNormalize ? 3 : 10"/>
        <input class="w" name="w" type="text" v-on:keyup="filterInputVec" :placeholder="'w'" :maxlength="!isNormalize ? 3 : 10"/>
      </div>
      <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
        <p>Hexadecimal</p>
        <span v-on:click.prevent="swapForm"><i class="fa fa-sort"></i></span>
      </div>
      <input class = "form-input-text" v-on:keyup="filterInput" readonly maxlength="8" type="text" placeholder="F237A" :value="vec4ToHex()"/>
    </template>
    <template v-else>
      <div style = "width: 100%;">
        <p>Hexadecimal</p>
      </div>
      <input class = "form-input-text" type="text" v-on:keyup="filterInput" maxlength="8" placeholder="F237A"/>
      <div style="display: flex; width: 100%; align-items: center; justify-content: space-between;">
        <p>RGBA</p>
        <span v-on:click.prevent="swapForm"><i class="fa fa-sort"></i></span>
      </div>
      <!--
      <RGBAComponent
        :inputText="'RGBA'"
        :outputText="'Hexadecimal'"
        :placeHolderX="'R'"
        :placeHolderY="'G'"
        :placeHolderZ="'B'"
        :placeHolderW="'A'"
        :getVecParent="setVecToChild"
        :setReadonly="true"
      />
      -->
      <div class = "rgba-conteiner">
        <input class="x" readonly :value="vector.x" type="text" :placeholder="'x'" :maxlength="!isNormalize ? 3 : 10"/>
        <input class="y" readonly :value="vector.y" type="text" :placeholder="'y'" :maxlength="!isNormalize ? 3 : 10"/>
        <input class="z" readonly :value="vector.z" type="text" :placeholder="'z'" :maxlength="!isNormalize ? 3 : 10"/>
        <input class="w" readonly :value="vector.w" type="text" :placeholder="'w'" :maxlength="!isNormalize ? 3 : 10"/>
      </div>
    </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {Vec4} from "@/models/vectors"
//4294967295 o FFFFFFFF

@Component
export default class RGBAHexView extends Vue {
  private vector:Vec4 = {x:0, y:0, z:0, w:0};
  private swap = false;
  private inputHex!:string;
  //private inputVec:Vec4 = {x:0, y:0, z:0, w:0};
  private isNormalize = false;


  filterInputVec(e:any) {
    var code = e.target.value.charCodeAt(0);
    if(e.target.value > 255 || e.target.value < 0 || code < 48 || code > 57)
    {
      e.target.value = "";
    }

    if(e.srcElement.name === "x") {
      this.vector.x = Number(e.target.value);
    }
    else if(e.srcElement.name === "y") {
      this.vector.y = Number(e.target.value);
    }
    else if(e.srcElement.name === "z") {
      this.vector.z = Number(e.target.value);
    }
    else if(e.srcElement.name === "w") {
      this.vector.w = Number(e.target.value);
    }
  }

	filterInput(e:any) {
		e.target.value = e.target.value.replace(/[g-zG-Z]/g, "").toUpperCase();
		this.inputHex = e.target.value;

    this.hexToVec4();
	}

  getVecToChild(vec:Vec4){
    this.vector = vec;
  }

  setVecToChild(){
    return this.vector;
  }

  vec4ToHex() {
    var x = this.vector.x.toString(16).toUpperCase();
    var y = this.vector.y.toString(16).toUpperCase();
    var z = this.vector.z.toString(16).toUpperCase();
    var w = this.vector.w.toString(16).toUpperCase();
    var hex = [
      x === "0" ? "00" : x.length < 2 ? "0" + x : x,
      y === "0" ? "00" : y.length < 2 ? "0" + y : y,
      z === "0" ? "00" : z.length < 2 ? "0" + z : z,
      w === "0" ? "00" : w.length < 2 ? "0" + w : w,
    ]

    return hex.join("");
  }

  hexToVec4() {
    var hexInt = parseInt(this.inputHex, 16)
    this.vector.x = (hexInt >> 0) & 0xff;
    this.vector.y = (hexInt >> 8) & 0xff;
    this.vector.z = (hexInt >> 16) & 0xff;
    this.vector.w = (hexInt >> 24) & 0xff;
  }

  swapForm(){
    this.swap = !this.swap;
    console.log(this.vector.x, this.vector.y, this.vector.z, this.vector.w);
  }

}
</script>

<style scoped>
.forms-conteiner p{
	font-size: 22px;
	font-weight: bold;
	word-break: break-all;
}

.rgba-conteiner{
  display: flex;
  flex-direction: row;
}

.rgba-conteiner input{
  min-width: 0;
  box-sizing: border-box;
  padding: 12px 20px;
  border: solid 1px black;
}

.x {
  background-color: rgb(255, 100, 100);
  box-shadow: 0 3px 10px 0 rgba(255, 100, 100, 0.5), 0 -3px 10px 0 rgba(255, 100, 100, 0.5);
}

.y {
  background-color: rgb(100, 255, 100);
  box-shadow: 0 3px 10px 0 rgba(100, 255, 100, 0.5), 0 -3px 10px 0 rgba(100, 255, 100, 0.5);
}

.z {
  background-color: rgb(100, 100, 255);
  box-shadow: 0 3px 10px 0 rgba(100, 100, 255, 0.5), 0 -3px 10px 0 rgba(100, 100, 255, 0.5);
}

.w {
  background-color: rgb(255, 255, 255);
  box-shadow: 0 3px 10px 0 rgba(255, 255, 255, 0.5), 0 -3px 10px 0 rgba(255, 255, 255, 0.5);
}

@media only screen and (max-width: 600px) {
   .rgba-conteiner{
    flex-wrap: wrap;
  }
}

</style>
