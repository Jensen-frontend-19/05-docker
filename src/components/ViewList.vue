<template lang="html">
	<ul>
		<li v-for="item in list" :key="item.id">
			{{ item.animal }} kommer från {{ item.from }}
		</li>
	</ul>
</template>

<script>
/*
1. skapa en hårdkodad lista i data-objektet
2. flytta ut datan till en extern fil
3. hämta datan efter att komponenten har renderats första gången
*/
import { getAnimals } from '../data/data.js';
export default {
	data: () => ({
		list: []
	}),
	created() {
		this.list = getAnimals();
	}
}
</script>

<style lang="css" scoped>
</style>
