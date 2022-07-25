import React,{useState} from 'react';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';

const FavoriteProvider = ({children}) => {
    const [favoritesList,setFavoritesList] = useState([]);
    const store = createStore(reducers,{favoritesList})

    return <Provider store={store}>{children}</Provider>
}

export default FavoriteProvider;