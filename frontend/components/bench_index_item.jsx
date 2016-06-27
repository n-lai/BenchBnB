const React = require('react');

const BenchIndexItem = React.createClass({
  render() {
    return (
      <div>
        <p key={this.props.bench['description']}>{this.props.bench['description']}</p>
      </div>
    )
  }
});

module.exports = BenchIndexItem;
