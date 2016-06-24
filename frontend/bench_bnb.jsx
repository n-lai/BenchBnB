const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchApiUtil = require('./util/bench_api_util');
const BenchActions = require('./actions/bench_actions');
const BenchIndex = require('./components/bench_index');

window.BenchStore = BenchStore;
window.BenchApiUtil = BenchApiUtil;
window.BenchActions = BenchActions;


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <BenchIndex />,
    document.getElementById('content')
  );
});
