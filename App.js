import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Nav />
        <Footer />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-Header">
        <h1>My First Single Page Application Using ReactJS</h1>
      </div>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="App-Main">
        <h1> Blog Post: World Cup </h1>
        <h4> Date: May 3, 2017 </h4>
        <p> Germany is the defending champion having won the 2014 World Cup
        in Brazil. The 2018 World Cup is being held in Russia. Germany, Spain,
        Brazil, and Portugal are some of the favorites to win the championship
        this year. The games have been exciting so far in the first round
        group phase. Teams are looking to advance to the second round
        knockout phase, which begins on June 30, 2018.
        </p>
        <h1> Blog Post: NYC Destinations</h1>
        <h4> Post Date: February 2, 2018  </h4>
        <p> New York City is one of the most populated and diverse cities in the World.
        Little Italy and Chinatown have great restaurants but great eating spots
        are all over depending on your flavor. The downtown financial distrct is great
        for sightseeing at the World Trade Center and Statue of Liberty. If you are
        a shopper, visit Macys-Herald Square or Saks Fifth Avenue for fashion designs
        you will not find anywhere else. Be sure to make your travel plans to New York
        City today!
        </p>
        <h1> Blog Post: Mac Laptops </h1>
        <h4> <br/> Post Date: June 21, 2018 </h4>
        <p>
        The MacBook, MacBook Air, and MacBrook Pro are three popular Laptops
        sold by Apple. The MacBook Pro has the most expensive base price at $1,999.
        The MacBook has the lightest weight at about 2 pounds, with a 12-inch
        led-backlit Retina display. The MacBook Air has the best battery life of
        up to 12 hours. Contact Apple to determine which model and memory choices
        are best for you.
        </p>
      </div>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <div className="App-Nav">
        <ul>
          <li> Blog Post: World Cup </li><br/>
          <li> Blog Post: NYC Destinations </li><br/>
          <li> Blog Post: Mac Laptops</li><br/>
        </ul>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className = "App-Footer">
        <h5>Copyright &copy; Inacio Inc.</h5>
      </div>
    );
  }
}

export default App;
