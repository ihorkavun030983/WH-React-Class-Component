import React, { Component} from "react";
import List from "./List";
import './style.scss'

class ToDo extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };


  transferToSecond = () => {
    // const { firstList, secondList } = this.state;
    // if (firstList.length > 0) {
    //   const updSecondList = [firstList[0], ...secondList];
    //   const updFirstList = firstList.slice(1);
    //   this.setState({
    //     firstList: updFirstList,
    //     secondList: updSecondList
    //   });
    // }
    this.setState({
      secondList: [
        this.state.firstList.shift(), ...this.state.secondList
      ]
    })
  };
  transferToFirst = () => {
    // const { firstList, secondList } = this.state;
    // if (secondList.length > 0) {
    //   const updFirstList = [secondList[0], ...firstList];
    //   const updSecondList = secondList.slice(1);
    //   this.setState({
    //     firstList: updFirstList,
    //     secondList: updSecondList
    this.setState({
      firstList: [this.state.secondList.shift(), ...this.state.firstList]
    })
    };

  transferToThird = () => {
    // const { secondList, thirdList } = this.state;
    // if (secondList.length > 0) {
    //   const updatedThirdList = [secondList[0], ...thirdList];
    //   const updatedSecondList = secondList.slice(1);
    //   this.setState({
    //     secondList: updatedSecondList,
    //     thirdList: updatedThirdList
    //   });
    // }
    this.setState({
      thirdList: [this.state.secondList.shift(), ...this.state.thirdList]
    })
  };

  removeLastItem = () => {
    const { thirdList } = this.state;
    if (thirdList.length > 0) {
      const updatedThirdList = thirdList.slice(0, -1);
      this.setState({ thirdList: updatedThirdList });
    }
  };


  render() {
    return (
      <div className="listBlock">
        <div className="listItem">
          <List
            list={this.state.firstList}
            actions={[
              {
                textBtn: "Transfer first to right",
                action: this.transferToSecond.bind(this),
              },
            ]}
          />
        </div>
        <div className="listItem">
          <List
            list={this.state.secondList}
            actions={[
              {
                textBtn: "Transfer first to left",
                action: this.transferToFirst.bind(this),
              },
              {
                textBtn: "Transfer first to right",
                action: this.transferToThird.bind(this),
              },
            ]}
          />
        </div>
        <div className="listItem">
          <List
            list={this.state.thirdList}
            actions={[
              {
                textBtn: "Remove last item",
                action: this.removeLastItem.bind(this),
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default ToDo;
