<template>
	<div id="main-content">
		<aside id="filter-data">
			<filter-data v-on:filter="filterData($event)"></filter-data>
		</aside>
		<section id="hotel-list">
			<hotel-list :filter="hotels"></hotel-list>
		</section>
	</div>
</template>

<script>

	import FilterData from './FilterData';
	import HotelList from './HotelList';
	
	export default {

		components: { FilterData, HotelList },

		data() {

			return {
				hotels: []
			}

		},

		methods: {
			filterData: function (hotels) {
				this.hotels = hotels;
			}
		}

	}

</script>

<style lang="sass" scoped>

	#hotel-list
		padding: 20px

	@media screen and(min-width: 1024px)

		#main-content
			padding: 20px
			display: flex

		#filter-data
			width: 308px
			margin-right: 20px

		#hotel-list
			width: 75%
			padding: 0

</style>