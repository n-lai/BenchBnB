const React = require('react');

const BenchIndexItem = React.createClass({
  render() {
    return (
      <div>
        {
          ['description', 'lat', 'lng'].map(attr => {
            return <p key={attr}>{attr}: {this.props.bench[attr]}</p>;
          })
        }
      </div>
    )
  }
});

module.exports = BenchIndexItem;
