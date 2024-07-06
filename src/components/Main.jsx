import { View } from 'react-native'
import React from 'react'
import RepositoryList from './RepositoryList'
import Constants from 'expo-constants'

export default function Main() {
    return (
        <View style={{marginTop: Constants.statusBarHeight}}>
            <RepositoryList />
        </View>
    )
}
