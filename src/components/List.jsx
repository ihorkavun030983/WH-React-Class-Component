import React, {Component, Fragment} from 'react';


class List extends Component {
  render() { 
    let {list, actions} = this.props;
    return Array.isArray(list) && list.length ? (
      <Fragment>
        <ul>
          {list.map((item, index) => (
            <li key={index.id}>{item.title}</li>
          ))}
        </ul>
        {actions.map((action, index) => (
        <button key={index.id} onClick={action.action}>{action.textBtn}</button>
      ))}
      </Fragment>
    ) : null;
  }
}

export default List;