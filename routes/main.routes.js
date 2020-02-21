const express = require('express');
const router = express.Router();
var path = require('path');
var request = require('request');



const Main_controllers = require('../controller/main.controller');

router.get('/sources', Main_controllers.source_id);
router.get('/destinations',Main_controllers.destination_id);
router.get('/all_cities',Main_controllers.cities_id);

router.get('/availability',Main_controllers.available_trips);
router.get('/get_trip',Main_controllers.trip_details);
router.get('/boarding_point',Main_controllers.boarding);
router.post('/block_ticket',Main_controllers.blocking_ticket);
router.get('/update_fare',Main_controllers.fare_updating);
router.get('/bookticket',Main_controllers.booking_ticket);
router.get('/cancellationdata',Main_controllers.cancelling);
router.post('/cancel',Main_controllers.cancel_ticket);




module.exports = router;
