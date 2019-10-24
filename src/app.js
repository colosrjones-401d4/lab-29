import React from 'react';
import Form from './components/form';
import Header from './components/header';
import List from './components/list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: ["Steven, Staci, Sebastian, SIerra, Savannah, Scarlett, Sunny"]
    };
  }

  addIt = string => {
    this.setState({ items: [...this.state.items,string] });
  };

  deleteIt = idx => {
    this.state.items.splce(idx,1);
    this.setState({ items: this.state.items });
  };

  render() {
    return (
      <>
      <Header title="My List App" />
      <Form action={this.addIt} items={this.state.items} />
      <List action={this.deleteIt} items={this.state.items}/>
      </> 
    );
  }
}

export default App;


