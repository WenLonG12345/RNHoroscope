import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20
    },
    defaultChip: {
        width: 100,
        borderRadius: 10,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        backgroundColor: 'transparent',
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    selectedChip: {
        width: 100,
        borderRadius: 10,
        borderColor: '#d3d3d3',
        borderWidth: 1,
        backgroundColor: '#fc8c84',
        padding: 10,
        marginHorizontal: 10,
        alignItems: 'center'
    },
    defaultText: {
        fontSize: 15,
        color: '#35234a',
    },
    selectedText: {
        fontSize: 15,
        color: 'white',
    }

})

const DateSelector = ({ date, setDate }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={date === 'yesterday' ? styles.selectedChip : styles.defaultChip}
                onPress={() => setDate('yesterday')}
            >
                <Text style={date === 'yesterday'? styles.selectedText: styles.defaultText}>Yesterday</Text>
            </TouchableOpacity> 

            <TouchableOpacity
                style={date === 'today' ? styles.selectedChip : styles.defaultChip}
                onPress={() => setDate('today')}
            >
                <Text style={date === 'today'? styles.selectedText: styles.defaultText}>Today</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={date === 'tomorrow' ? styles.selectedChip : styles.defaultChip}
                onPress={() => setDate('tomorrow')}
            >
                 <Text style={date === 'tomorrow'? styles.selectedText: styles.defaultText}>Tomorrow</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DateSelector;


