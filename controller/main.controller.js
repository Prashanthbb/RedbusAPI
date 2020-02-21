//location information

var request = require('request');

exports.source_id = function(req,res){
  request({
    url: 'http://api.seatseller.travel/sources',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
          // console.log(result);
        }
     }
  })
}

exports.destination_id = function(req,res) {
  request({
    url: 'http://api.seatseller.travel/destinations?source=3',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
      json : "input_data",
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
          // console.log(result);
        }
     }
  })
}

exports.cities_id = function(req,res) {
  request({
    url: 'http://api.seatseller.travel/cities',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
        }
     }
  })
}
//booking service
exports.available_trips = function(req,res) {
  request({
    url: 'http://api.seatseller.travel/availabletrips?source=3&destination=11&doj=2020-03-01',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
        }
     }
  })
}

exports.trip_details = function(req,res) {
  request({
    url: 'http://api.seatseller.travel/tripdetails?id=2000094033470033311',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
          // console.log(result);
        }
     }
  })
}

exports.boarding = function(req,res) {
  request({
    url: 'http://api.seatseller.travel/boardingPoint?id=99450&tripId=2000094033470033311',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
          // console.log(result);
        }
     }
  })
}

exports.blocking_ticket = function(req,res){
  let input_data = {
    availableTripId : req.body.availableTripId,
    boardingPointId : req.body.boardingPointId,
    destination : req.body.destination,
    source : req.body.source,
    inventoryItems : req.body.inventoryItems
  }
  for (var each_key in input_data) {
    if (input_data[each_key] === "undefined" || input_data[each_key] === "" ) {
      res.send({
             "response": "data missing: "+ each_key,
             "success": "false"
            })
      return true;
    }
  }
  request({
    url: 'http://api.seatseller.travel/blockTicket',
    json : input_data,
    headers: {
      'Content-Type' : 'application/json'
    },
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'post'
  },function(error, response, result) {
    res.send(response);
    if (!error && response.statusCode == 200){
         if(result.success == fasle){
           console.log(error);
        }else{
          res.send(result);
        }
     }
  })
}

exports.fare_updating = function(req,res) {
  request({
    url: 'http://api.seatseller.travel/rtcfarebreakup?blockKey=31mLBZtYPs',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    // console.log(response);
    if (!error && response.statusCode == 200){
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
          // console.log(result);
        }
     }
  })
}

exports.booking_ticket = function(req,res) {
  request({
    url: 'http://api.seatseller.travel/bookticket?blockKey=31mLBZtYPs',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
          // console.log(result);
        }
     }
  })
}

//cancellation service
exports.cancelling = function(req,res) {
  request({
    url: 'http://api.seatseller.travel/cancellationdata?tin=S293047480AHD',
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
      // console.log(result);
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
        }
     }
  })
}
//sample {"tin":"S436228AS3","seatsToCancel":["12A","12B"]}
exports.cancel_ticket = function(req,res) {
  let cancel_data ={
    tin : req.body.tin,
    seatsToCancel : req.body.seatsToCancel
  }
  for (var each_key in cancel_data) {
    if (cancel_data[each_key] === "undefined" || cancel_data[each_key] === "" ) {
      res.send({
             "response": "data missing: "+ each_key,
             "success": "false"
            })
      return true;
    }
  }
  request({
    url: 'http://api.seatseller.travel/cancelticket',
    json : cancel_data,
    oauth:{
      consumer_key: 'g62XNEkMVEBuxEEih5iWIbK4xFMG8X',
      consumer_secret: 'vqKWn9i5DKRVGkHfxpadk4l4Pycuai',
      },
    method: 'get'
  },function(error, response, result) {
    if (!error && response.statusCode == 200){
      // console.log(result);
         if(result.success == false){
           console.log(error);
        }else{
          res.send(result);
        }
     }
  })
}
