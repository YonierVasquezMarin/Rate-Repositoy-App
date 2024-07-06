import { View, FlatList } from 'react-native'
import React from 'react'
import repositories from '../data/repositories'
import RepositoryItem from './RepositoryItem'

export default function RepositoryList() {
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            renderItem={({ item }) => <RepositoryItem {...item}></RepositoryItem>}
        ></FlatList>
    )
}
