<template>
  <section class="location_area">
    <div class="location_info">
      <div class="location_inner">
        <div class="location_top text-center">
          <h3>Local</h3>
          <p>
            Sítio Geranium <br />
            <span>+1 843-853-1810</span>
          </p>
        </div>
        <div class="address_info d-flex justify-content-between">
          <div class="single_address text-center">
            <h4>Where to stay</h4>
            <p>
              4:00p – 12:00p <br />
              The Secret Shrine Club
            </p>
          </div>
          <div class="single_address text-center">
            <h4>Activities</h4>
            <p>
              4:00p – 12:00p <br />
              The Secret Shrine Club
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="d-none d-sm-block">
        <gmap-map
          :center="center"
          :zoom="12"
          style="width:100%;  height: 1000px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            @click="center = m.position"
          ></gmap-marker>
        </gmap-map>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null,
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>
