import {configureStore} from '@reduxjs/toolkit'

import CommonDescriptionReducer from 'redux/commonDescription/commonDescription.slice'

export const store = configureStore({
  reducer: {
    commonDescription: CommonDescriptionReducer
  }
})
