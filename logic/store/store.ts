import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './product.slice'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
