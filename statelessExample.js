import React from 'react';

const Head1 = {
  padding: "10px 20px",
  textAlign: "center",
  color: "Red",
  fontSize: "22px"
}
const tabhead = {
  padding: "10px 20px",
  textAlign: "center",
  color: "Green",
  fontSize: "22px"
}
class App extends React.Component {
   constructor() {
      super();
      this.state = {
         data:
         [
            {
               "cid":1,
               "cname":"React",
               "duration":"20"
            },
            {
               "cid":2,
               "cname":"Oracle",
               "duration":"30"
            },
            {
               "cid":3,
               "cname":"Java",
               "duration":"40"
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <Conhead />
            <table>
               <tbody>
               <tr style={tabhead}>
               <th> ID</th>
               <th>Name</th>
               <th>Duration</th>
               </tr>
               {this.state.data.map((course,i)=> <TableRow key={i} data={course} />)}

               </tbody>
            </table>
         </div>
      );
   }
}
class Conhead extends React.Component {

   render() {
      return (
         <div>
            <h1 style= {Head1}> List Of Courses</h1>
         </div>
      );
   }
}
class TableRow extends React.Component {
   render() {
      return (
         <tr>
            <td>{this.props.data.cid}</td>
            <td>{this.props.data.cname}</td>
            <td>{this.props.data.duration}</td>
         </tr>
      );
   }
}
export default App;
