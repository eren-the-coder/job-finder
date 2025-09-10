import { Nearbyjobs, Popularjobs, Welcome } from "@/components"
import { COLORS, SIZES } from "@/constants"
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"

const index = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
  }
})