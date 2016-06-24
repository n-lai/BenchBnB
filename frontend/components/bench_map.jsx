const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');

const BenchMap = React.createClass({
  componentDidMount() {
      this.Listener = BenchStore.addListener(this._onChange);

      const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
      const mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);

      this.listenForMove();
  },

  componentWillUnmount() {
    this.Listener.remove();
  },

  _onChange() {
    BenchStore.all().forEach(bench => {
      const location = { lat: bench['lat'], lng: bench['lng'] }
      this.addMarker(location, this.map);
    })
  },

  addMarker(location, map) {
    const marker = new google.maps.Marker({
      position: location,
      map: map
    })
  },

  listenForMove() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const latLng = this.map.getBounds();
      const northEast = latLng.getNorthEast();
      const southWest = latLng.getSouthWest();

      const bounds = {
        'northEast': {'lat': northEast.lat(), 'lng': northEast.lng() },
        'southWest': {'lat': southWest.lat(), 'lng': southWest.lng() }
      }
      BenchActions.fetchAllBenches(bounds);
    });
  },

  render() {
    return (
      <div className='map' ref='map'>

      </div>
    );
  }
});

module.exports = BenchMap;
