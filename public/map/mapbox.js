import mapboxgl from 'mapbox-gl'

export default function Map() {

mapboxgl.accessToken = 'pk.eyJ1IjoibWxhbW90YTIwMjAiLCJhIjoiY2xjNWdyZXplNTd4czNvcGxzenp3YnUydSJ9.vU6MF5MJ8j4SmrkhbW00wg';
         const map = new mapboxgl.Map({
         container: 'mapview',
         style: 'mapbox://styles/mapbox/streets-v12',
         center: [-74.5, 40], // starting position [lng, lat]
         zoom: 9,
    });
}