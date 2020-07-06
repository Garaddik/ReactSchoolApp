import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { persistReducer } from 'redux-persist'
import rootReducer from './reducers/reducers'
import storage from 'redux-persist/lib/storage'
import {env} from './config'

const loggerMiddleware = createLogger()

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore(loadedState) {
  
  if( env === 'production'){
    return createStore(
      persistedReducer,
      loadedState,
      applyMiddleware(
        thunkMiddleware
      )
    )
  }else{
    return createStore(
      persistedReducer,
      loadedState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  }
  
}