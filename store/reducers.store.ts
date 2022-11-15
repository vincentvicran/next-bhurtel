import {configureStore} from '@reduxjs/toolkit'

import loginReducer from 'redux/login/login.slice'
import CommonDescriptionReducer from 'redux/commonDescription/commonDescription.slice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    commonDescription: CommonDescriptionReducer
  }
})
