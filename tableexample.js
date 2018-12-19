import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
    vegies: [
      {
        vegname: "Carrot",
        id:'v1',
       Qty:1
      },
      {
        vegname: "Beans",
        id:'v2',
        Qty:1
      },
      {
        vegname: "Avacoda",
        id:'v3',
       Qty:1
      }
    ]
  }
}
  render(){
    return(
      <table><thead><tr>
      <th>ID</th>
      <th>VegName</th>
      <th>Quantity</th>
      </tr>
      </thead>
      <tbody>

    {
this.state.vegies.map((vegies)=>(<Vegtbrow key={vegies.id} vegdata={vegies}></Vegtbrow>)

)
}</tbody></table>
    );
  }

}
class Vegtbrow extends React.Component{

  render(){
    return(
      <tr>
      <td>{this.props.vegdata.id}</td>
      <td>{this.props.vegdata.vegname}</td>
      <td>{this.props.vegdata.Qty}</td>
      </tr>
    );
  }
}
export default App;
