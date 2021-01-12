import React from "react";

interface IProps {}

interface IState {}

class ListPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    return <div>this is list page</div>;
  }
}

export default ListPage;
