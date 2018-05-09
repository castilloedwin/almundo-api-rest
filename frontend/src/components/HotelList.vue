<template>
	<div>
		<div class="info-hotel">
			<div class="picture-hotel">
				<img src="/static/assets/images/hotels/2a5bb415_b.jpg" alt="" />
			</div>
			<div class="name-stars-hotel">
				<p>Hotel Stefanos</p>
				<figure class="stars">
					<img width="20" src="/static/assets/icons/filters/star.svg" alt="">
				</figure>
			</div>
			<div class="price-hotel"></div>
		</div>
	</div>
</template>

<script>
	
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

		.picture-hotel
			margin-right: 10px

	.name-stars-hotel
		p
			margin-bottom: 5px
			color: $blueText

		.stars
			display: inline-block
			vertical-align: center

	.price-hotel

	@media screen and(min-width: 1024px)
		.info-hotel
			display: flex
			flex-wrap: wrap
			align-items: start

			.picture-hotel

		.name-stars-hotel

		.price-hotel

</style>