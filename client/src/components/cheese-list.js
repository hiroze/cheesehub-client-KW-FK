import React from "react";

export default class CheeseList extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const cheeseTypes = this.props.cheeses.map(cheese => {
      return <li>{cheese}</li>;
    });

    return (
      <div>
        <ul>
          <li>{cheeseTypes}</li>
        </ul>
      </div>
    );
  }
}
