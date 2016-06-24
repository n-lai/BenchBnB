const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchApiUtil = require('./util/bench_api_util');
const BenchActions = require('./actions/bench_actions');

window.BenchStore = BenchStore;
window.BenchApiUtil = BenchApiUtil;
window.BenchActions = BenchActions;

const myComponent = React.createClass({
  render() {
    return <div></div>;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <myComponent />,
    document.getElementById('content')
  );
});
