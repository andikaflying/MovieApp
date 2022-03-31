import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLOR_LINE } from '../../utils/constants'

const Line = () => {
  return (
    <View style={styles.line} />
  )
}

export default Line

const styles = StyleSheet.create({
    line: {
        backgroundColor : COLOR_LINE, 
        height : 0.3
    }
})