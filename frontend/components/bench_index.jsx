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
  },

  componentWillUnmount() {
    this.Listener.remove();
  },

  render() {
    return(
      <li>
        {
          this.state.benches.map(bench => {
            return <BenchIndexItem key={bench.id} bench={bench} />;
          })
        }
      </li>
    );
  }
});

module.exports = BenchIndex;
