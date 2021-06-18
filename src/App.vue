<template>
  <div id="app">
  	<HeaderComponent/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from "vue-property-decorator"
import HeaderComponent from "@/components/HeaderComponent.vue"

@Component({
	components: {
		HeaderComponent
	},
})

export default class App extends Vue{

}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
}
body {
  margin: 0px;
}


</style>
