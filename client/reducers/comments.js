const postComments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          user: action.author,
          text: action.comment
        }
      ];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
};

const comments = (state = {}, action) => {
  if (action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // overwrite this post with a new one
      // state[action.postId] - ключ того поста, в котором изменяются комментарии
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
};

export default comments;
