import React from 'react';

class Comment extends React.Component {
  render() {
    const { i, comment } = this.props;
    return (
      <div className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>
            &times;
          </button>
        </p>
      </div>
    );
  }
}

export default Comment;
