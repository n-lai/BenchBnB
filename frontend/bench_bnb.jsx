const React = require('react');
const ReactDOM = require('react-dom');
const BenchStore = require('./stores/bench_store');
const BenchApiUtil = require('./util/bench_api_util');
const BenchActions = require('./actions/bench_actions');
const Search = require('./components/search');

window.BenchStore = BenchStore;
window.BenchApiUtil = BenchApiUtil;
window.BenchActions = BenchActions;


document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <Search />,
    document.getElementById('content')
  );
});
