import React from 'react';

class BackgroundComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgArray: ['background', 'background2', 'background3', 'background4', 'background5', 'background6'],
      bg: 'background',
      i: 0,
    };
  }
  componentDidMount() {
    this.changeBg();
  }
  changeBg() {
    var i = 0;

    setInterval(function () {
      if (i === 5) {
        i = 0;
      }

      i++;
      this.setState({
        bg: this.state.bgArray[i],
      });
      console.log(i);
    }.bind(this), 5000);
  }
  render() {
    return (
      <div className={this.state.bg} />
    );
  }
}

export default Home;
