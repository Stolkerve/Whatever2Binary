<template>
  	<div class = "header">
			<div class = "header-title">
				<router-link to="/">Whatever2Binary</router-link>
			</div>
			<div class="nav-bar">
				<div>
				<router-link to="/stringbinary">text to binary</router-link>
				</div>
				<div>
				<router-link to="/numberbinaryhex">numbers to binary/hex</router-link>
				</div>
				<div>
				<router-link to="/rgbahex">rgba to hex</router-link>
				</div>
			</div>
  	</div>
</template>

<style scoped>
.header {
	width: 100%;
	display: flex;
	justify-content: space-between;
  align-items: center;
	background-color:rgb(108, 255, 179);
	height: auto;
	flex-direction: column;
	box-shadow: 0 3px 5px 0 rgb(73, 233, 150);
	margin-bottom: 30px;
}

.header-title {
  /*background-color:rgb(108, 255, 179);*/
	font-size: 40px;
	margin-top: 5px;
	margin-bottom: 5px;
	border: solid 1px white;
}

.header-title a{
	padding: 2px;
	word-wrap: break-word;
}
/*background: linear-gradient(to bottom right,#024,#402);*/

.nav-bar{
	font-size: 22px;
	display: flex;
	flex-direction: row;
	height: auto;
}

.nav-bar div{
	margin: 5px;
	border: solid 1px white;
}

.nav-bar a{
	width: 100%;
	padding: 2px;
}

a {
	text-decoration: none;
	color: white;
	background-color: black;
}

.nav-bar a.router-link-exact-active {
  color: #42b983;
}


@media only screen and (max-width: 700px) {
   .header{
  }

	.header-title {
		width: 100%;
		display: flex;
	}
	.header-title a{
		width: 100%;
		text-align: center;
	}

	.nav-bar{
		width: 100%;
		flex-wrap: wrap;
		flex-direction: column;
	}

	.nav-bar div{
		width: 100%;
		margin:0px;
		display: flex;
	}
	.nav-bar a{
		text-align: center;
	}
}
</style>
