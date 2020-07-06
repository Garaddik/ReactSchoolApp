import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'semantic-ui-css/semantic.min.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import configureStore from './configureStore'
import {Provider} from 'react-redux'
import 'whatwg-fetch'
import {saveState, preloadedState} from './localStorage'
import throttle from 'lodash/throttle'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const store = configureStore(preloadedState())
const persistor = persistStore(store)
persistor.purge()

store.subscribe(throttle(() =>{
    saveState({
     school: store.getState().school,
     activeYear: store.getState().activeYear,
     years: store.getState().years,
     token: store.getState().token     
    })
},1000))

ReactDOM.render(
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>         
    </Provider>
    , document.getElementById('root'))
registerServiceWorker()
