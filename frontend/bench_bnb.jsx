const React = require('react');
const ReactDOM = require('react-dom');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const HashHistory = ReactRouter.hashHistory;

const BenchStore = require('./stores/bench_store');
const BenchApiUtil = require('./util/bench_api_util');
const BenchActions = require('./actions/bench_actions');
const BenchForm = require('./components/bench_form')

const Search = require('./components/search');

window.BenchApiUtil = BenchApiUtil;

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
});

const Routers = (
  <Router history={HashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="/benches/new" component={BenchForm}/>
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById('content');
    ReactDOM.render(Routers, root);
});
