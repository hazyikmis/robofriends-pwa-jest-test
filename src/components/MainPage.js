import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import Header from '../components/Header';

import './MainPage.css';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  filteredRobots = robots => {
    return robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }

  render() {
    // const { robots, searchField, onSearchChange, isPending } = this.props;
    const { robots, onSearchChange, isPending } = this.props;
    // const filteredRobots = robots.filter(robot => {
    //   return robot.name.toLowerCase().includes(searchField.toLowerCase());
    // })
    return (
      <div className='tc'>
        <Header />
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          { isPending ? <h1>Loading</h1> :
            <ErrorBoundry>
              {/* <CardList robots={filteredRobots} /> */}
              <CardList robots={this.filteredRobots(robots)} />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
