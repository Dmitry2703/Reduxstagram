import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      </div>
    );
  }
}

export default PhotoGrid;

// {...this.props} передает все свойства из PhotoGrid в компонент Photo. Если нужно передавать
// конкретное значение, то нужно писать, например, posts={this.props.posts}
