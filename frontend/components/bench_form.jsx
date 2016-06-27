const React = require('react');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');

const BenchForm = React.createClass({
  getInitialState() {
    return { description: "", seats: "", lat: this.props.location.query.lat, lng: this.props.location.query.lng };
  },

  descriptionChange(e) {
    const newDescription = e.target.value;
    this.setState({ description: newDescription })
  },

  seatsChange(e) {
    const newSeats = e.target.value;
    this.setState({ seats: newSeats })
  },

  handleSubmit(e) {
    e.preventDefault();

    const BenchData = {
      description: this.state.description,
      seats: this.state.seats,
      lat: this.state.lat,
      lng: this.state.lng
    };
    BenchActions.createBench(BenchData);
    this.setState({ description: "", seats: "", lat: "", lng: "" });
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Description</label>
        <input type="text" value={this.state.description} onChange={this.descriptionChange}/>
        <br></br>
        <label>Seats</label>
        <input type="number" value={this.state.seats} onChange={this.seatsChange}/>
        <br></br>
        <label>Lat</label>
        <input type="number"  disabled="disabled"/>
        <br></br>
        <label>Lng</label>
        <input type="number"  disabled="disabled"/>
        <br></br>
        <input type="Submit" defaultValue="Create Bench"/>
      </form>
  );
  }
});

module.exports = BenchForm;
