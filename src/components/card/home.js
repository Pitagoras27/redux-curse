import React, { Component } from 'react';
import { connect } from 'react-redux';

import Users from './rows';
import './home.css';

class Home extends Component {
  // const [count, setCount] = useState(0);
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await fetchData.json();
    this.setState({
      users: data,
    })
  }
  
  render() {
    const { users } = this.state; 
    console.log(this.props, '<<<<<<<<<<<<')
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

const mapStateToProps = state => state.usariosReducer;

export default connect(mapStateToProps, null)(Home);
