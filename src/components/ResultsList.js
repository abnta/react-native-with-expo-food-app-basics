import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

import ResultDetails from './../components/ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
            horizontal
            data={results}
            keyExtractor = {(result => result.id)}
            renderItem={({item}) => {
                return (<TouchableOpacity onPress={() => navigation.navigate('ResultsShow',{
                    id: item.id
                })}>
                <ResultDetails  result={item} />
                </TouchableOpacity>)
            }}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 15
    }
})

export  default withNavigation(ResultsList)