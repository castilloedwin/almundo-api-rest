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
			flex-wrap: wrap

		#filter-data
			width: 308px

		#hotel-list
			width: 78%

</style>