import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import socIndo from "../../assets/img/socIndo.png"


const Start = () => {
    const navigation = useNavigation();

    const goToLogin = async () => {
      try{
        navigation.navigate('Login')
      }
      catch(err){
       console.log(err)
      }
    }
  return (
    <View>
        <View style={styles.container}>
            <Image source={socIndo} style={styles.image} />
            <Text style={styles.text_1}>SocIndo</Text>
            <Text style={styles.text_2}>Informasi lapangan sepakbola atau futsal indonesia</Text>
        </View>
        <View style={styles.container_start}>
            <TouchableOpacity style={styles.btn_start} onPress={() => goToLogin()}>
                <Text style={styles.txt_start}> MULAI</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

// Variable styles "Profile"
const styles = StyleSheet.create({ 
    container: {
        height: 400,
        justifyContent: 'center',
        marginTop: 100,
        padding: 25
    },
    text_1: {
        fontSize: 22,
        fontFamily: "Poppins-Bold"
    },
    text_2: {
        fontSize: 14,
        fontFamily: "Poppins-Medium",
        color: "gray"
    },
    image: {
        height: 100,
        resizeMode: 'contain',
        width: 100
    },
    container_start: {
        backgroundColor: "red",
        height: "100%",
        padding: 25
    },
    btn_start: {
        backgroundColor: "white",
        marginTop: 30,
        alignItems:'center',
        height: 50,
        borderRadius: 17,
        justifyContent: 'center'
    },
    txt_start: {
        fontSize: 18,
        fontFamily: "Poppins-Medium"
    }
  })

export default Start
