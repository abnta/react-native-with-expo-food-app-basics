import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name="search" />
        <TextInput
         onEndEditing={onTermSubmit}
        autoCapitalize="none"
        autoCorrect={true}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        style={styles.inputStyle} placeholder="Search" />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar