<template>
	<div>
		<div class="info-hotel" v-for="hotel in hotels">
			<div class="column-left">
				<div class="picture-hotel">
					<img :src="'/static/assets/images/hotels/' + hotel.image" alt="" />
				</div>
				<div class="name-stars-hotel">
					<p v-text="hotel.name"></p>
					<figure class="stars">
						<img v-for="stars in hotel.stars" width="20" src="/static/assets/icons/filters/star.svg" alt="" />
					</figure>
					<div class="amenities">
						<span v-for="amenitie in hotel.amenities">
							<img width="18" :src="'/static/assets/icons/amenities/' + amenitie + '.svg'" alt="" />
						</span>
					</div>
				</div>
			</div>
			<div class="price-hotel">
				<p class="small-text">Precio por noche por habitación</p>
				<p class="price"><span>ARS</span> {{ hotel.price }}</p>
				<a class="see-hotel" href="">Ver hotel</a>
			</div>
		</div>
	</div>
</template>

<script>
	
	import axios from 'axios';

	export default {

		created() {
			this.getHotels();	
		},
		data() {
			return {
				hotels: []
			}
		},
		methods: {
			getHotels: function () {
				axios.get('http://localhost:8000/api/v1/hotels').then(response => {
					this.hotels = response.data;
				});
			}
		}

	}

</script>

<style lang="sass" scoped>

	@import '../../static/assets/css/colors'

	p
		margin: 0
		padding: 0
	
	.info-hotel
		padding: 10px
		background-color: white
		border: solid 1px darken($gray, 7%)

		.column-left

			.picture-hotel
				height: 190px
				margin-right: 15px
				overflow: hidden

				img
					width: 290px

		.name-stars-hotel
			p
				margin-bottom: 5px
				color: $blueText

			.stars
				margin-bottom: 10px
				display: inline-block
				vertical-align: center

			.amenities
				span
					&:not(:last-child)
						margin-right: 10px

		.price-hotel
			padding: 34px 20px
			text-align: center
			border-left: dotted 2px #CCC


			.small-text
				width: 170px
				margin-bottom: 10px
				font-size: 0.8em
				color: #929292

			.price
				margin-bottom: 13px
				font-size: 2em
				font-weight: bold
				color: $orange

				span
					font-size: 0.7em
					font-weight: 200

			.see-hotel
				padding: 7px 25px
				background-color: $blue
				display: block
				color: #FFF
				font-size: 1.2em
				font-weight: 300
				text-align: center
				text-decoration: none
				border-radius: 5px

				&:hover
					background-color: darken($blue, 7%)

	@media screen and(min-width: 1024px)
		.info-hotel
			display: flex
			flex-wrap: wrap
			align-items: start
			justify-content: space-between

			.column-left
				display: flex
				flex-wrap: wrap

				.picture-hotel

		.name-stars-hotel

		.price-hotel

</style>