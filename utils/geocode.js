const request=require('request')


const geocode = (address, callback)=> {
    //assign url to the api url with a variable to represent the locations. 
    //encodeURIComponent escapes special characters like '?' marks
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiY2ltbWlub2IiLCJhIjoiY2p0ZXpwbWVqMDRrdzQzdnJzaDQ5b2xndSJ9.tnyepmD9Nr0rclPfOODYMw'

    request({ url, json: true }, (error, {body})=>{
        //check for error
        if(error) {
            //call the callback function with a message to go in error variable passed in
            //call it with undefined as the second - reponse - variable
            callback('Unable to connect to location services!', undefined)
            //check if reponse was ok, but no search results found
        } else if(body.features.length===0){
            callback('unable to find location, try a different search term', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports=geocode