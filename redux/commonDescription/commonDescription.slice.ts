import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {commonCategoryServices} from 'redux/commonCategory/commonCategory.service'

const getCommonDescription = createAsyncThunk(
  'commonDescription/getCommonDescription',
  async (_, thunkAPI) => {
    try {
      const personal = await commonCategoryServices.getCommonCategoryByType(
        'personal_injury'
      )
      const practice = await commonCategoryServices.getCommonCategoryByType(
        'practice_areas'
      )
      const news = await commonCategoryServices.getCommonCategoryByType('news')

      return {
        data: {
          personal: personal,
          practice: practice,
          news: news
        }
      }
    } catch (error) {
      return thunkAPI.rejectWithValue('Couldnot find value!')
    }
  }
)

const initialState: {
  commonDescriptionData: any
  commonDescriptionLoading: boolean
} = {
  commonDescriptionData: {
    personal: {},
    practice: {},
    news: {}
  },
  commonDescriptionLoading: false
}

export const commonDescritpionSlice = createSlice({
  name: 'commonDescription',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommonDescription.pending, (state, action) => {
      state.commonDescriptionLoading = true
    })

    builder.addCase(getCommonDescription.fulfilled, (state, action) => {
      ;(state.commonDescriptionData = action.payload),
        (state.commonDescriptionLoading = false)
    })

    builder.addCase(getCommonDescription.rejected, (state, action) => {
      state.commonDescriptionLoading = false
    })
  }
})

export {getCommonDescription}
export default commonDescritpionSlice.reducer
