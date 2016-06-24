const React = require('react');
const BenchStore = require('../stores/bench_store');
const BenchActions = require('../actions/bench_actions');
const BenchIndexItem = require('./bench_index_item')

const BenchIndex = React.createClass({
  getInitialState() {
    return { benches: BenchStore.all() };
  },

  _handleChange() {
    this.setState(this.state.benches = BenchStore.all());
  },

  componentDidMount() {
    this.Listener = BenchStore.addListener(this._handleChange);
    BenchActions.fetchAllBenches();
  },

  componentWillUnmount() {
    this.Listener.remove();
  },

  render() {
    return(
      <li>
        {
          Object.keys(this.state.benches).map(benchId => {
            return <BenchIndexItem key={benchId} bench={this.state.benches[benchId]} />;
          })
        }
      </li>
    );
  }
});

module.exports = BenchIndex;
