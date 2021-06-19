<template>
	<div class = "conteiner">
    <!--
    <label>Normalize</label><input type="checkbox" v-model="isNormalize"/>
    -->
    <div class = "rgba-conteiner">
      <input class="x" name="x" type="text" v-on:keyup="filter" :placeholder="placeHolderX" :maxlength="!isNormalize ? 3 : 10"/>
      <input class="y" name="y" type="text" v-on:keyup="filter" :placeholder="placeHolderY" :maxlength="!isNormalize ? 3 : 10"/>
      <input class="z" name="z" type="text" v-on:keyup="filter" :placeholder="placeHolderZ" :maxlength="!isNormalize ? 3 : 10"/>
      <input class="w" name="w" type="text" v-on:keyup="filter" :placeholder="placeHolderW" :maxlength="!isNormalize ? 3 : 10"/>
    </div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import {Vec4} from "@/models/vectors"

//0.99999999
@Component
export default class RGBAComponent extends Vue {
	@Prop() private placeHolderX!:string;
	@Prop() private placeHolderY!:string;
	@Prop() private placeHolderZ!:string;
	@Prop() private placeHolderW!:string;
  @Prop() private setVecParent!:any;

  private input:Vec4 = {x:0, y:0, z:0, w:0};
  private isNormalize = false;

  filter(e:any) {
    var code = e.target.value.charCodeAt(0);
    if(e.target.value > 255 || e.target.value < 0 || code < 48 || code > 57)
    {
      e.target.value = "";
    }

    if(e.srcElement.name === "x") {
      this.input.x = Number(e.target.value);
    }
    else if(e.srcElement.name === "y") {
      this.input.y = Number(e.target.value);
    }
    else if(e.srcElement.name === "z") {
      this.input.z = Number(e.target.value);
    }
    else if(e.srcElement.name === "w") {
      this.input.w = Number(e.target.value);
    }
    this.setVecParent(this.input);
  }
}
</script>

<style scoped>
.conteiner {
  width: 50%;
  display: flex;
  flex-direction: column;
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

.rgba-conteiner input:hover{
  opacity: 0.8;
}

.x {
  background-color: rgb(255, 100, 100);
}

.y {
  background-color: rgb(100, 255, 100);
}

.z {
  background-color: rgb(100, 100, 255);
}

.w {
  background-color: rgb(255, 255, 255);
}

@media only screen and (max-width: 600px) {
   .rgba-conteiner{
     flex-wrap: wrap;
   }
 }

</style>
