import React, { Component } from 'react';
import Axios from 'axios';

import Users from '../rows';
import './App.css';

class App extends Component {
  // const [count, setCount] = useState(0);
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const { data } = await Axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({
      users: data,
    })
  }
  
  render() {
    const { users } = this.state; 
    return (
      <div className='container'>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>User</td>
              <td>email</td>
              <td>website</td>
            </tr>
          </thead>
          <tbody><Users list={users} /></tbody>
        </table>
      </div>
    )
  }
}

export default App;
