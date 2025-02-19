import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProductList } from '@/components/product-list'

export default function Index() {
  return (
    <SafeAreaView>
      <View className="h-full bg-[#323030] py-2 px-4">
        <ProductList />
      </View>
    </SafeAreaView>
  )
}
