const express = require('express')
const path = require('path');
const getWeather = require('./weather/weather.js')

const app = express()

const folderPath = path.join(__dirname, '..', '/public')
const port = process.env.PORT || '3000'

app.use(express.static(folderPath))


app.get('/getWeather', (req, res) => {
    if (!req.query || !req.query.location) {
        return res.send(
            {
                error: 'Location not passed'
            })
    }
    getWeather(req.query.location).then((response) => {
        res.send([{
            city: req.query.location,
            body: response
        }
        ]
        );
    }, (error) => {
        res.send(
            {
                error: error
            })
    })

})
app.listen(port, () => {
    console.log('Server is up on '+port);
})