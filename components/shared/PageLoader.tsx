import { styles } from '@/styles/home.styles'
import { COLORS } from '@/theme/colors'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const PageLoader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary}/>
    </View>
  )
}
