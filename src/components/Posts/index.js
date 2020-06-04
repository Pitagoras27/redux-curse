import React, {Component} from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {
    return (
      <div>
        {this.props.match.params.key}
      </div>
    )
  }
}

export default Post;
