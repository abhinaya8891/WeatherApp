const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/13575df7ea3b29881264a6b8b6e39b07/'+ latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!.', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            const {temperature, precipProbability: precipitation, summary} = body.currently
            const forecastStr = summary + '. It is currently ' + temperature + ' degrees out. There is a ' + precipitation + '% chance of rain.'            

            callback(undefined, forecastStr)
        }
    })
}

module.exports = forecast