import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         data: 0

      }
      this.setNewNumber = this.setNewNumber.bind(this);
      //this.updatCourseName=this.updatCourseName.bind(this);
      this.courseTargetval=this.courseTargetval.bind(this);
   };

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
}
export default App;
