import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import lg_socIndo from "../../assets/img/lg_socIndo.png"


const Loading = () => {
    const navigation = useNavigation(); 
    const _staticLoad = () => {
        setTimeout(() => {
            navigation.navigate("Start")
        }, 1500);
    }
    
    useEffect(() => {
     _staticLoad()
    }, [])

    const LoadingSpinner = () => {
        return (
          <View style={{  justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#FF0000" />
          </View>
        );
      }
  return (
    <View>
        <View style={styles.container}>
            <Image source={lg_socIndo} style={styles.image} />
            <LoadingSpinner />
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
        width: 100,
        alignSelf: 'center',
        marginBottom: 15
    }
  })

export default Loading
