import { View, Text } from 'react-native'
import React from 'react'
import repositories from '../data/repositories'

export default function RepositoryList() {
    return (
        <View>
            {repositories.map((repo) => (
                <View key={repo.id}>
                    <Text>ID: {repo.id}</Text>
                    <Text>Fullname: {repo.fullName}</Text>
                    <Text>Description: {repo.description}</Text>
                    <Text>Language: {repo.language}</Text>
                    <Text>Stars: {repo.stargazersCount}</Text>
                    <Text>Forks: {repo.forksCount}</Text>
                    <Text>Reviews: {repo.reviewCount}</Text>
                    <Text>Rating: {repo.rating}</Text>
                </View>
            ))}
        </View>
    )
}
