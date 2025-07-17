import { COLORS } from '@/app/theme/colors'
import { styles } from '@/styles/home.styles'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'

export const PageLoader = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary}/>
    </View>
  )
}
