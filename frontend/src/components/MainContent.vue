<template>
	<div id="main-content">
		<aside id="filter-data">
			<filter-data></filter-data>
		</aside>
		<section id="hotel-list">
			<hotel-list></hotel-list>
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

			}

		},

		methods: {

		}

	}

</script>

<style lang="sass" scoped>

	#main-content
		padding: 20px

	@media screen and(min-width: 1024px)

		#main-content
			display: flex

		#filter-data
			width: 308px
			margin-right: 20px

		#hotel-list
			width: 75%

</style>