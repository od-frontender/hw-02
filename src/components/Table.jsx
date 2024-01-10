import { Component } from 'react';
import './style.css';
import { getRandomInt } from '../utils/utils';

export default class TableClass extends Component {
  state = Object.assign(
    {
      borderWidth: 0,
    },
    this.props,
  );

  componentDidMount() {
    const activateItems = setInterval(() => {
      let unActiveItems = this.state.list.filter(item => !item.active);
      let randomIndex = getRandomInt(0, unActiveItems.length - 1);
      let randomItem = unActiveItems[randomIndex];

      this.setState(
        {
          list: this.state.list.map(item => {
            if (item === randomItem) item.active = true;
            return item;
          }),
        },
        () => {
          let unActiveItems = this.state.list.filter(item => !item.active);

          if (unActiveItems.length === Math.floor(this.state.list.length / 2)) {
            this.setState({
              borderWidth: 10,
            });
          }
          if (!unActiveItems.length) {
            this.setState({
              borderWidth: 20,
            });
            clearInterval(activateItems);
          }
        },
      );
    }, 2000);
  }

  render() {
    let { list = [], borderWidth } = this.state;

    return list.length ? (
      <table style={{ borderWidth }}>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} className={item.active ? `item--active` : null}>
              <td>{item.type}</td>
              <td>{item.icon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : null;
  }
}
