import React from 'react';
// import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';
import './app.scss';

// const Header = () => {
//   return (
//     <header>
//       <h1>Header</h1>
//     </header>
//   );
// };

// class Footer extends React.Component {
//   render() {
//     return <footer>&copy; 2018 Code Fellows</footer>;
//   }
// }

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter +1});
  };

  secondHandleButtonClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter -1});
  };

  render() {
    return (
      <div>

        <h4>{this.state.counter}</h4>
        <button id="button1" onClick={this.handleButtonClick}>Click Me</button>
        <button id="button2" onClick={this.secondHandleButtonClick}>Dont Click Me</button>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
