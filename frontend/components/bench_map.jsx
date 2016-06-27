const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');
const hashHistory = require('react-router').hashHistory;


const BenchMap = React.createClass({
  getInitialState() {
    return { markers: [] };
  },

  componentDidMount() {
      this.Listener = BenchStore.addListener(this._onChange);

      const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
      const mapOptions = {
        center: {lat: 37.7758, lng: -122.435},
        zoom: 13
      };
      this.map = new google.maps.Map(mapDOMNode, mapOptions);
      this.listenForMove();
      this._onChange();
  },

  componentDidUpdate() {
    this._onChange();
  },

  componentWillUnmount() {
    this.Listener.remove();
  },

  _onChange() {
    const currentBenchIds = this.state.markers.map(marker => marker.benchId)
    const newBenchIds = BenchStore.all().map(bench => bench.id);

    this.state.markers.forEach(marker => {
      if (!newBenchIds.includes(marker.benchId)) {
        this.removeMarker(marker);
      }
    });

    BenchStore.all().forEach(bench => {
      if (!currentBenchIds.includes(bench.id)) {
        const location = { lat: bench['lat'], lng: bench['lng'] }
        this.addMarker(location, this.map, bench.id);
      }
    });

  },

  handleClick(coords) {
    hashHistory.push({
      pathname: "benches/new",
      query: coords
    });
  },

  removeMarker(marker) {
    const idx = this.state.markers.indexOf(marker);
    this.state.markers[idx].setMap(null);
    this.state.markers.splice(idx, 1);
  },

  addMarker(location, map, benchId) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      benchId: benchId
    })
    this.state.markers.push(marker);
  },

  listenForMove() {
    const that = this;
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

    google.maps.event.addListener(this.map, 'click', function(event) {
      const location = event.latLng;
      const lat = location.lat();
      const lng = location.lng();
      const coords = { lat: lat, lng: lng }

      that.handleClick(coords);
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
