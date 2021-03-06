import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

export default rootReducer;

// Для каждой отдельной части данных из store {posts, comments} создается свой редюсер.
// Каждый редюсер должен обновлять весь store при изменении части данных, за которые он отвечает:
// редюсер posts отвечает за posts, редюсер comments отвечает за comments.
// У каждого редюсера свой state.
// В данном приложении у редюсера posts: state = store.posts (массив объектов),
// у редюсера comments: state = store.comments (объект).
// Это называется reducer composition и является фундаментальным шаблоном построения Redux приложений.
// Все редюсеры объединяются в один rootReducer при помощи метода combineReducers, который передается
// в качестве параметра при создании хранилища store.
//
// Из офиц. документации:
// каждый из этих дочерних редюсеров управляет только какой-то одной/своей частью глобального состояния.
// Параметр state разный для каждого отдельного дочернего редюсера и соответствует той части
// глобального состояния, которой управляет этот дочерний редюсер.
//
// Про combineReducers():
// Все, что делает combineReducers() - это генерирует функцию,
// которая вызывает ваши редюсеры, передавая им в качестве одного из аргументов
// срез глобального состояния, который выбирается в соответствии с именем его ключа
// в глобальном состоянии, и затем снова собирает результаты всех вызовов в один объект.
//
// Таким образом, необходимо, чтобы названия редюсеров совпадали с ключами в глобальном состоянии store.
