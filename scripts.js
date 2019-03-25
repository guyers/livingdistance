const hereCredentials = {
   id: 'p0qTcsJmrkA6mNqNgY6q',
   code: 'mWEYaf6_8m7dxH7sjblT2w'
}

const style = 'normal.day';

const hereIsolineUrl = (coords, options) => `https://isoline.route.api.here.com/routing/7.2/calculateisoline.json?app_id=${hereCredentials.id}&app_code=${hereCredentials.code}&mode=shortest;${options.mode};traffic:${options.traffic}&start=geo!${coords[0]},${coords[1]}&range=${options.range}&rangetype=${options.type}`

const hereTileUrl = (style) => `https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/${style}/{z}/{x}/{y}/512/png8?app_id=${hereCredentials.id}&app_code=${hereCredentials.code}&ppi=320`;

const maxIsolineRangeLookup = {
   time: 20000,
   distance: 400000
}

var mymap = L.map('mapid').setView([45.498, -122.684], 13);

//L.tileLayer(hereTileUrl).addTo(mymap);
L.tileLayer('https://2.base.maps.api.here.com/maptile/2.1/maptile/newest/{style}/{z}/{x}/{y}/512/png8?app_id={id}&app_code=${code}&ppi=320', {
	attribution: 'Map data &copy; <a href="https://www.here.com/">Here</a>',
	id: 'p0qTcsJmrkA6mNqNgY6q',
	code: 'mWEYaf6_8m7dxH7sjblT2w',
	style: 'normal.day'
}).addTo(mymap);