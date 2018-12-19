import React from 'react';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state= {count:0};

    this.stateValinc= this.stateValinc.bind(this);
    this.cntForce="0";
  }
stateValinc(){
this.setState({count: this.state.count+1});
};
//componentWillMount()
cntForce(){

  this.setSate({count : " " });
};

  render(){

    return(
      <div>
      <h1> Use button to increase value</h1>
     <button onClick={this.stateValinc}>Increment value</button>
     <input type="text" value={this.state.count}></input>

     <br />
     <button onClick={this.cntForce}> Reset </button>

      </div>
    );
  }
}
export default App;
