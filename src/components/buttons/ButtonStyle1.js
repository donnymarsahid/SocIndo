import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet, Text } from 'react-native'

const ButtonStyle1 = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.bg_btn} onPress={onPress}>
        <Text style={styles.txt_btn}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

// Variable styles "ButtonStyle1"
const styles = StyleSheet.create({ 
    bg_btn: {
        width: "100%",
        height: 50,
        backgroundColor: "#FF0000",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius :17
    },
    txt_btn: {
        color: "white",
        fontFamily: "Poppins-Bold",
        fontSize: 18
    }
    // News Section #END
});

export default ButtonStyle1
