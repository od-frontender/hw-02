import React, { Component } from 'react';
const animals = [
  { type: `turtle`, icon: `🐢` },
  { type: `octopus`, icon: `🐙` },
  { type: `fish`, icon: `🐠` },
  { type: `flamingo`, icon: `🦩` },
  { type: 'penguin', icon: `🐧` },
];

export default class Table extends Component {
  constructor(props) {
    super(props);
  }
  state = { ...this.props, color: `black`, isActive: false };

  componentDidMount() {
    let randomElem = animals[Math.floor(Math.random() * animals.length)];

    console.log(animals);
    console.log(randomElem);
    setTimeout(() => {
      this.setState({ isActive: true });
    }, 2000);
  }
  render() {
    let { color, isActive } = this.state;

    return (
      <>
        <table>
          <tbody>
            {animals.map(item => (
              <>
                <tr
                  style={{
                    color: isActive ? 'green' : color,
                    fontWeight: isActive ? 'bold' : 'normal',
                  }}
                >
                  {item.type}
                  <td>{item.icon}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
