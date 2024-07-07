import { View, StyleSheet } from 'react-native'
import React from 'react'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

export default function RepositoryItem(props) {
    return (
        <View key={props.id} style={styles.container}>
            <StyledText fontWeight="bold" fontSize="subheading">
                {props.fullName}
            </StyledText>
            <StyledText>{props.description}</StyledText>
            <StyledText style={styles.language}>Language: {props.language}</StyledText>
            <RepositoryStats {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
    },
    language: {
        backgroundColor: theme.colors.primary,
        padding: 4,
        color: theme.colors.white,
        alignSelf: 'flex-start',
        borderRadius: 5,
        overflow: 'hidden',
    },
})
