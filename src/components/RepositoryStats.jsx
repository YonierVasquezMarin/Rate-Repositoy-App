import { View, Text } from 'react-native'
import React from 'react'
import StyledText from './StyledText'

function parseThousands(number) {
    return number > 1000 ? `${(number / 1000).toFixed(1)}k` : number
}

export default function RepositoryStats(props) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
                <StyledText align="center" fontWeight="bold">
                    {parseThousands(props.stargazersCount)}
                </StyledText>
                <StyledText align="center">Stars</StyledText>
            </View>
            <View>
                <StyledText align="center" fontWeight="bold">
                    {parseThousands(props.forksCount)}
                </StyledText>
                <StyledText align="center">Forks</StyledText>
            </View>
            <View>
                <StyledText align="center" fontWeight="bold">
                    {props.reviewCount}
                </StyledText>
                <StyledText align="center">Reviews</StyledText>
            </View>
            <View>
                <StyledText align="center" fontWeight="bold">
                    {props.rating}
                </StyledText>
                <StyledText align="center">Rating</StyledText>
            </View>
        </View>
    )
}
