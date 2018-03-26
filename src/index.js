import {createStore} from 'redux';

//Хранилище - объект который содержит сосотяние
const store = createStore(playlist);

//Функция которую мы передаем в хранилище и которая реагирует на изменение стора. Ога возвращает состояние стора
function playlist(state = [], action) {
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.playload
        ];
    }
    return state;
}

const list = document.querySelectorAll('.list')[0];
const trackInput = document.querySelectorAll('.trackInput')[0];
const addTrackBtn = document.querySelectorAll('.addTrack')[0];


//подписываемся на изменение стора, и передаем функцию коллбэк которая вызывается при изменении стора
store.subscribe(() => {
    console.log('subscribe', store.getState());
    list.innerHTML = '';
    trackInput.value = '';
        store.getState().forEach(track => {
            const li = document.createElement('li');
            li.textContent = track;
            list.appendChild(li)
        })
    }
);

//Привязываем создание екшина при нажатии на кнопку
addTrackBtn.addEventListener('click', () => {
    const trackName = trackInput.value;
    store.dispatch({type: 'ADD_TRACK', playload: trackName});
});
