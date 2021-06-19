<template>
  <div class="forms-conteiner">
    <div style = "width: 50%;">
      <p>RGBA</p>
    </div>
    <RGBAComponent
      :inputText="'RGBA'"
      :outputText="'Hexadecimal'"
      :placeHolderX="'R'"
      :placeHolderY="'G'"
      :placeHolderZ="'B'"
      :placeHolderW="'A'"
      :setVecParent="getVecFromChild"
    />
		<div style="display: flex; width: 50%; align-items: center; justify-content: space-between;">
			<p>Hexadecimal</p>
			<span v-on:click.prevent="swapForm"><i class="fa fa-sort"></i></span>
		</div>
    <input type="text" placeholder="F237A" :value="vec4Tohex()" style="width:50%; min-width: 0; box-sizing: border-box; padding: 12px 20px; border: solid 1px black;"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RGBAComponent from "@/components/RGBAComponent.vue"
import {Vec4} from "@/models/vectors"
//4294967295 o FFFFFFFF
@Component({
  components:{
    RGBAComponent
  }
})

export default class RGBAHexView extends Vue {
  private vector:Vec4 = {x:0, y:0, z:0, w:0};
  private swap = false;

  getVecFromChild(vec:Vec4){
    this.vector = vec;
  }

  mounted()
  {
    this.vec4Tohex();
  }

  vec4Tohex() {
    var x = this.vector.x.toString(16).toUpperCase();
    var y = this.vector.y.toString(16).toUpperCase();
    var z = this.vector.z.toString(16).toUpperCase();
    var w = this.vector.w.toString(16).toUpperCase();
    var hex = [
      x === "0" ? "00" : x.length < 2 ? "0"+x : x,
      y === "0" ? "00" : y.length < 2 ? "0"+y : y,
      z === "0" ? "00" : z.length < 2 ? "0"+z : z,
      w === "0" ? "00" : w.length < 2 ? "0"+w : w,
    ]
    
    return hex.join("");
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
</style>
