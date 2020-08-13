require('dotenv').config();
const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: MAPBOX_ACCESS_TOKEN });


geocodingClient
.forwardGeocode({
    query: 'Los Angeles, CA'
})
.send()
.then(response => {
    const match = response.body;

    const features = match.features;

    features.forEach(eachPlace => {
        // console.log('Name', eachPlace.place_name);

        let city = eachPlace.place_name.split(', ')[0];
        let state = eachPlace.place_name.split(', ')[1];

        console.log(city)
        console.log(state);

        // console.log('Coord', eachPlace.center);
    });
});

// geocodingClient
// .forwardGeocode({
//     query: 'San Francisco, CA'
// })
// .send()
// .then(response => {
//     const match = response.body;
//     let firstFeatureCoord = match.features[0].center;

//     console.log(firstFeatureCoord);
// });

// geocodingClient
// .reverseGeocode({
//     query: [ -122.463, 37.7648 ]
// })
// .send()
// .then(response => {
//     const match = response.body;

//     console.log(match);
// });