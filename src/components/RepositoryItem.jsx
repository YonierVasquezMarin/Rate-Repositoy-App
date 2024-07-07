import { View, StyleSheet } from 'react-native'
import React from 'react'
import StyledText from './StyledText'

export default function RepositoryItem(props) {
    return (
        <View key={props.id} style={styles.container}>
            <StyledText fontWeight="bold" fontSize="subheading">
                Fullname: {props.fullName}
            </StyledText>
            <StyledText>Description: {props.description}</StyledText>
            <StyledText>Language: {props.language}</StyledText>
            <StyledText>Stars: {props.stargazersCount}</StyledText>
            <StyledText>Forks: {props.forksCount}</StyledText>
            <StyledText>Reviews: {props.reviewCount}</StyledText>
            <StyledText>Rating: {props.rating}</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
})
