const request = require('request')

// const url = 'https://api.darksky.net/forecast/62fa9bfec04c3630167ab363bed48234/37.8267,-122.4233?units=us'

// request({ url: url, json: true}, (error, response)=>{
//     //console.log(response.body.currently)

//     if(error){
//         console.log('unable to connect to weather service')
//     } else if(response.body.error) {
//         console.log('unable to find location, try a different search term')
//     } {
//         console.log(response.body.daily.data[0].summary)
//         console.log('It is currently ' + response.body.currently.temperature + '\xB0 out. ')
//         console.log('There is a ' + response.body.currently.precipProbability +'% chance of rain.')
//     }
// })

const forecast = (latitude, longitude, callback)=>{
     const url = 'https://api.darksky.net/forecast/62fa9bfec04c3630167ab363bed48234/'+ latitude+','+longitude +'?units=us'

     request({url, json: true}, (error, {body})=>{
         if(error){
             callback('Unable to connect to darksky API', undefined)
         }else if(body.daily.data.length===0){
             callback('invalid location, enter a different search term', undefined)
         } else{
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
         }
     })
}

module.exports=forecast