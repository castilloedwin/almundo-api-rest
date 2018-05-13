<template>
	<header>
		<div class="logo">
			<img :src="logo" alt="Logo Almundo" />
		</div>
	</header>
</template>

<script>
	
	export default {

		data() {

			return {
				logo: '/static/assets/images/logo-almundo.svg'
			}

		},
		methods: {

		}

	}

</script>

<style lang="sass" scoped>

	@import '../../static/assets/css/colors'
	
	header
		width: 100%
		background-color: $blue

		.logo
			padding: 15px 10px

</style>