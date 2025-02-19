import { Image, Text, View } from 'react-native'
import { Product } from '@/logic/interfaces/product.interface'
import Icon from 'react-native-vector-icons/FontAwesome'

interface Props {
  product: Product
}

export function ProductListItem({ product }: Props) {
  return (
    <View className="flex flex-col w-[48%] gap-2">
      <Image
        className="rounded-xl bg-black"
        source={{ uri: product.image }}
        height={200}
      />
      <View className="flex flex-row gap-2 items-center">
        <Text className="text-white text-xl font-bold">{product.name}</Text>
        <Text className="text-white opacity-40 mt-1">{product.weight} г</Text>
      </View>

      <Text className="text-white opacity-40 line-clamp-2">
        {product.composition}
      </Text>
      <View className="rounded-xl px-3 py-2 bg-[#3d3d3d] w-1/2 flex flex-row items-center justify-between">
        <Text className="text-white text-xl font-bold">{product.price} ₽</Text>
        <Icon name="arrow-right" color="white" />
      </View>
    </View>
  )
}
