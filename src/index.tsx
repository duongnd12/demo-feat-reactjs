import ReactDOM from 'react-dom';
import App from './App';
// import { StoreProvider } from './store'
import { Provider } from 'react-redux'
import { store } from '../src/components/ReduxToolkit/store'
ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>
    , document.getElementById('root'));