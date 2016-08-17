const posts = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        // часть массива до элемента, который лайкнули
        ...state.slice(0, i),
        // копируем все свойства из элемента, который лайкнули, а число лайков увеличиваем на 1
        {...state[i], likes: state[i].likes + 1},
        // часть массива после элемента, который лайкнули
        ...state.slice(i + 1)
      ];
    default:
      return state;
  }
};

export default posts;
