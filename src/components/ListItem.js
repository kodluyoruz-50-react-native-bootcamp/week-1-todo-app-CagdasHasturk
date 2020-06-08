import React, { useState } from 'react'
import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet
} from 'react-native'


const ListItem = (props) => {
    const isDone = props.data.isDone
    const styles = isDone? doneStyles : undoneStyles

    
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => props.myClick(props.itemIndex)}
        >
            <View style={styles.container}>
                <View style={styles.dot} ></View>
                <Text style={styles.textTitle}>
                    {props.data.myEntry}
                </Text>
                {
                    isDone && <Text style={styles.text}>
                        Yapıldı
                </Text>
                }
            </View>
        </TouchableOpacity>
    );
}

export { ListItem }

const undoneStyles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 20,
        
    },
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    dot: {
        backgroundColor: '#000',
        width: 10,
        height: 10,
        borderRadius: 10
    },
    textTitle: {
        flexGrow: 1,
        fontSize: 18,
        color: '#000',
        marginHorizontal: 10,
        fontWeight: '600',
    },

});

const doneStyles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 20,
    },
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    dot: {
        backgroundColor: '#BDBDBD',
        width: 10,
        height: 10,
        borderRadius: 10
    },
    textTitle: {
        flexGrow: 1,
        fontSize: 18,
        color: '#BDBDBD',
        marginHorizontal: 10,
        fontWeight: '600',
        textDecorationLine: "line-through",
    },
    text: {
        color: '#29b6f6'
    }
});