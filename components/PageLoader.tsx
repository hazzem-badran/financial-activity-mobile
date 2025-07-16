import { styles } from '@/assets/styles/home.styles'
import { COLORS } from '@/constants/colors'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const PageLoader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary}/>
    </View>
  )
}

export default PageLoader