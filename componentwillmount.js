import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: 1

      }
      this.setNewNumber = this.setNewNumber.bind(this);
      //this.updatCourseName=this.updatCourseName.bind(this);
      this.courseTargetval=this.courseTargetval.bind(this);
   };
   componentWillMount() {
     this.setState({data: 10});
   }
   setNewNumber() {
      this.setState({data: this.state.data + 1});
   }

courseTargetval(e)
{
  this.setState({data: e.target.value});

}

   render() {
     return (
       <Displaycourse disdata={this.state.data} distaegt={this.courseTargetval} disincrement={this.setNewNumber}></Displaycourse>

     );
   }
}
class Displaycourse extends React.Component{

  render(){
    return (
    <div>
       <button onClick = {this.props.disincrement}>INCREMENT</button>
       <input type="text" value={this.props.disdata} onChange={this.props.distaegt}></input>
    </div>
    );
  }
}/*
class Content extends React.Component {
   componentWillMount() {
      console.log('Component WILL MOUNT!')

   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
   componentWillReceiveProps(newProps) {
      console.log('Component WILL RECIEVE PROPS!')
   }
   shouldComponentUpdate(newProps, newState) {
      return true;
   }
   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }
   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }
   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }
   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}*/
export default App;
