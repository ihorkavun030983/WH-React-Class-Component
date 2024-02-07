import React, { Component, Fragment } from 'react';
import ToDo from './components/ToDo.jsx'

class App extends Component {
  
    state = {
      list: [
        {
          id: 1,
          title: `Task 1`
        },
        {
          id: 2,
          title: `Task 2`
        },
        {
          id: 3,
          title: `Task 3`
        },
        {
          id: 4,
          title: `Task 4`
        }
      ],
    };
  

  render() {
    return (
      <Fragment>
        <ToDo list={this.state.list} />
      </Fragment>
    );
  }
}

export default App;