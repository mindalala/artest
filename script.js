window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'Magnemite',
           location: {
               lat: 37.561476,
               lng: 126.918297,
           }
       },
    //    {
    //        name: 'Magnemite',
    //        location: {
    //            lat: 37.561498,
    //            lng: 126.918329,
    //        }
    //    },
    //    {
    //        name: 'Magnemite',
    //        location: {
    //            lat: 37.561486,
    //            lng: 126.918310,
    //        }
    //    },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '1 1 1');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}