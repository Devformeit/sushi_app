import { FlatList } from 'react-native'
import { productsSelector, useAppSelector } from '@/logic/store'
import { ProductListItem } from '@/components/product-list-item'

export function ProductList() {
  const products = useAppSelector(productsSelector)

  return (
    <FlatList
      data={products}
      numColumns={2}
      columnWrapperStyle={{ gap: 16 }}
      contentContainerStyle={{ gap: 16 }}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  )
}
