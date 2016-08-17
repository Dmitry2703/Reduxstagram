export const increment = (index) => ({
  type: 'INCREMENT_LIKES',
  index
});

export const addComment = (postId, author, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
});

export const removeComment = (postId, i) => ({
  type: 'REMOVE_COMMENT',
  postId,
  i
});

// Действие - нечто, произошедшее в приложении (клик по кнопке, переход на другую страницу,...).
// Объект Действие содержит информацию о типе действия и полезную информацию (например,
// id фотографии, по которой кликнули, имя автора и текст комментария и т.д.)
