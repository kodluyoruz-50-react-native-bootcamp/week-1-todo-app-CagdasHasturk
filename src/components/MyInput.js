import React from 'react'
import {
    View,
    TextInput,
    StyleSheet,
    Dimensions
} from 'react-native'

const MyInput = props => {
    return (
        <View>
            <TextInput
                placeholder="New Task"
                onChangeText={props.changeText}
                style={styles.textInputStyle}>
                {props.entry}
            </TextInput>
        </View>
    );
}

export { MyInput }

const styles = StyleSheet.create({
    textInputStyle: {
        paddingVertical: 10,
        width: Dimensions.get('window').width / 1.5,
        fontSize: 18,
        color: '#000',
        borderColor: '#29b6f6',
        borderBottomWidth: 2,
    }
});