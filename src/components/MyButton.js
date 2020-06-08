import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native'


const MyButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props.myPress}
            style={styles.myButton}
        >
            <Text style={styles.textStyle}>
                {props.myTitle}
            </Text>
        </TouchableOpacity>
    );
}

export { MyButton }

const styles = StyleSheet.create({
    myButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#29b6f6',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        color: '#fff',
        fontSize: 18,
    }
});