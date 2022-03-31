import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR_PRIMARY, COLOR_SECONDARY } from '../../../utils/constants'
import Line from '../../Line'

const FirstDetail = () => {
  return (
    <View style={styles.container}>
        <View style={styles.firstDetail}>
            <View style={styles.release}>
                <Text style={styles.releaseLabel}>Release date</Text>
                <Text style={styles.releaseDate}>December 9, 2017</Text>
            </View>
            <View style={styles.genre}>
                <Text style={styles.genreLabel} >Genre</Text>
                <View style={styles.genreList}>
                    <TouchableOpacity
                        style={styles.genreButton}>
                        <Text style={styles.genreButtonText}>Action</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.genreButton}>
                        <Text style={styles.genreButtonText}>Horror</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.genreButton}>
                        <Text style={styles.genreButtonText}>Action</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.genreButton}>
                        <Text style={styles.genreButtonText}>Horror</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <Line />
    </View>
  )
}

export default FirstDetail

const styles = StyleSheet.create({
    container: {
        
    },
    firstDetail: {
        flexDirection: 'row',
        paddingTop: 18,
        marginBottom: 15,
    },
    release: {
        flex: 1,
    },
    releaseLabel: {
        color: COLOR_PRIMARY,
        fontFamily: 'Lato-Bold',
    },
    releaseDate: {
        color: COLOR_SECONDARY,
        fontFamily: 'Lato-Bold',
        marginTop: 12,
    },
    genreLabel: {
        color: COLOR_PRIMARY,
        fontFamily: 'Lato-Bold',
    },
    genre: {
        flex: 1,
    },
    genreList: {
        flexDirection: 'row',
        marginTop: 8,
        flexWrap: "wrap"
    },
    genreButton: {
        width: 70,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        borderRadius: 30,
        backgroundColor: 'rgba(250, 240, 202, 0.05)',
        marginRight: 12,
        marginBottom: 10,
    },
    genreButtonText: {
        color: COLOR_SECONDARY,
        fontFamily: 'Lato-Regular',
    }
})