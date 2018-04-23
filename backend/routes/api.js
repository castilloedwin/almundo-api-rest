const express = require('express');
const data = require('../resources/data');
const router = express.Router();

router.get('/hotels', (req, res) => {
	res.status(200).json(data);
});

router.get('/hotels/q/:name', (req, res) => {
	
	let name = req.params.name.toLowerCase();

	let hotel = data.filter((value) => {
		return value.name.toLowerCase().indexOf(name) > -1 ? value.name : '';
	});

	if (!hotel.length) return res.status(200).send({ message: 'No se encontraron resultados.' });

	return res.status(200).json(hotel);
});

router.get('/hotels/q', (req, res) => {

	if ( !req.query.stars ) return res.json(data);

	let hotels = [];
	req.query.stars.forEach( function (star) {
		data.forEach((value) => {
			if (star == value.stars) hotels.push(value);
		});
	});

	return res.status(200).json(hotels);
});

module.exports = router;