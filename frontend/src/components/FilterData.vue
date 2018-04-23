<template>
	<div>
		<div class="title-filter">
			<h2>Filtros</h2>
		</div>
		<div class="content-text-box">
			<div class="name-hotel">
				<div class="group">
					<img :src="glass" alt="" />
					<p>Nombre del hotel</p>
				</div>
				<div class="group-2">
					<a href="#">
						<img :src="arrow" alt="" />
					</a>
				</div>
			</div>
			<div class="text-box">
				<input type="text" class="search" v-model="nameHotel" placeholder="Ingresa el nombre del hotel" />
				<button id="send" v-on:click="searchForNameHotel(nameHotel)">Aceptar</button>
			</div>
		</div>
		<div class="content-stars">
			<div class="name-stars">
				<div class="group">
					<img :src="starBlue" alt="" />
					<p>Estrellas</p>
				</div>
				<div class="group-2">
					<a href="#">
						<img :src="arrow" alt="" />
					</a>
				</div>
			</div>
			<div class="checkbox-star">
				<input type="checkbox" v-model="selectedAll" v-on:change="checkboxAll(selectedAll)" />
				<p>Todas las estrellas</p>
			</div>
			<div class="checkbox-star">
				<input class="mg4" type="checkbox" v-model="selected" v-on:change="checkboxOne(selected)" value="1" />
				<img :src="starYellow" alt="" />
			</div>
			<div class="checkbox-star">
				<input class="mg4" type="checkbox" v-model="selected" v-on:change="checkboxOne(selected)" value="2" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
			</div>
			<div class="checkbox-star">
				<input class="mg4" type="checkbox" v-model="selected" v-on:change="checkboxOne(selected)" value="3" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
			</div>
			<div class="checkbox-star">
				<input class="mg4" type="checkbox" v-model="selected" v-on:change="checkboxOne(selected)" value="4" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
			</div>
			<div class="checkbox-star">
				<input class="mg4" type="checkbox" v-model="selected" v-on:change="checkboxOne(selected)" value="5" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
				<img :src="starYellow" alt="" />
			</div>
		</div>
	</div>
</template>

<script>

	import axios from 'axios';
	
	export default {

		data() {

			return {
				api: 'http://localhost:8000/api/v1/hotels',
				glass: '/static/assets/icons/filters/search.svg',
				arrow: '/static/assets/icons/filters/arrow.svg',
				starYellow: '/static/assets/icons/filters/star.svg',
				starBlue: '/static/assets/icons/filters/star_blue.svg',
				selectedAll: false,
				selected: [],
				nameHotel: ''
			}

		},
		methods: {
			checkboxAll: function (selectedAll) {
				if (selectedAll) {
					this.selected = [];
					document.querySelectorAll('.mg4').forEach((value, index) => {
						this.selected.push(value.value);
					});

					axios.get(this.api + '/q/', { params: { stars: this.selected } }).then(response => {
						console.log(response.data);
					});
				} else {
					this.selected = [];
					axios.get(this.api).then(response => console.log(response.data));
				}
			},
			checkboxOne: function (selected) {
				if ( Array.isArray(selected) ) {
					axios.get(this.api + '/q/', { params: { stars: selected } }).then(response => {
						console.log(response.data);
					});
				}
			},
			searchForNameHotel: function (name) {
				axios.get(`${this.api}/q/${name}`).then(response => {
					console.log(response.data);
				});
			}
		}

	}

</script>

<style lang="sass" scoped>
	
	@import '../../static/assets/css/colors'

	.title-filter
		margin-bottom: 5px
		background-color: #FFF
		border: solid 1px darken($gray, 7%)

		h2
			padding: 10px 15px
			font-size: 1em
			font-weight: 500
			color: $grayText

	.content-text-box
		margin-bottom: 5px
		background-color: #FFF
		border: solid 1px darken($gray, 7%)

		.name-hotel
			padding: 5px 15px 0
			display: flex
			align-items: center
			justify-content: space-between

			.group
				margin-right: 10px

				img
					width: 15px
					margin-right: 5px
					display: block
					fill: red

				p
					font-size: 0.9em
					color: $blueText
					font-weight: 500

				img, p
					display: inline-block
					vertical-align: middle

			.group-2
				a
					img

		.text-box
			margin-bottom: 5px
			padding: 0 15px 15px

			input[type="text"]
				width: 55%
				margin-right: 10px
				padding: 8px
				font-size: 0.9em
				border: solid 1px #CCC
				border-radius: 3px
				box-shadow: inset 0 1px 0 #CCC

			button
				padding: 7px 10px
				font-size: 1em
				background-color: #002C77
				border: none
				color: #FFF
				box-shadow: 0 2px 0px #000
				border-radius: 3px

			input[type="text"], button
				display: inline-block
				vertical-align: middle

	.content-stars
		padding: 0 15px 15px
		background-color: #FFF
		border: solid 1px darken($gray, 7%)

		.name-stars
			display: flex
			align-items: center
			justify-content: space-between

			.group
				margin-right: 10px

				img
					width: 15px
					margin-right: 5px
					display: block
					fill: red

				p
					padding-top: 2px
					font-size: 0.9em
					color: $blueText
					font-weight: 500

				img, p
					display: inline-block
					vertical-align: middle

		.checkbox-star
			input[type="checkbox"], p, img
				display: inline-block
				vertical-align: middle

			p
				font-size: 0.9em
				font-weight: 500
				color: $grayText

			img
				width: 15px

			.mg4
				margin-top: 4px

	
</style>