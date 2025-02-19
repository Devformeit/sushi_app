import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../interfaces/product.interface'

interface State {
  list: Product[]
}

const initialState = {
  list: [
    {
      id: 1,
      name: 'Яки шримп',
      weight: 200,
      price: 810,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Osd1y2UcZQo6el_NA1s7n9Jj-q8Te3v2dg&s',
      composition:
        'Рис для суши, нори, копчёный угорь, сливочный сыр, авокадо, ломтики свежего манго, соус унаги, кунжут',
    },
    {
      id: 2,
      name: 'Спайси унаги',
      weight: 205,
      price: 890,
      image:
        'https://img.freepik.com/free-photo/front-view-maki-sushi-nigiri-with-copy-space_23-2148348206.jpg',
      composition:
        'Рис для суши, нори, копчёный угорь, сливочный сыр, авокадо, ломтики свежего манго, соус унаги, кунжут',
    },
    {
      id: 3,
      name: 'Яки салмон',
      weight: 200,
      price: 1030,
      image:
        'https://img.freepik.com/free-photo/front-view-maki-sushi-with-copy-space_23-2148348176.jpg',
      composition:
        'Рис для суши, нори, копчёный угорь, сливочный сыр, авокадо, ломтики свежего манго, соус унаги, кунжут',
    },
    {
      id: 4,
      name: 'Уми-юми',
      weight: 200,
      price: 1050,
      image:
        'https://img.freepik.com/premium-photo/sushi-rolls-black-background_727939-7026.jpg',
      composition:
        'Рис для суши, нори, копчёный угорь, сливочный сыр, авокадо, ломтики свежего манго, соус унаги, кунжут',
    },
  ],
} satisfies State

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
})

export const productsReducer = productsSlice.reducer

export const productsSelector = ({ products }: { products: State }) =>
  products.list
