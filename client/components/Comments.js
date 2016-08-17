import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
  handleSubmit(evt) {
    evt.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map((comment, i) =>
          <Comment
            {...this.props}
            key={i}
            i={i}
            comment={comment}/>
        )}
        <form className="comment-form" ref="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
