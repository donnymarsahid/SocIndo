import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import logo_header from "../../assets/img/logo_header.png"
import profile_header from "../../assets/img/profile_header.png"

const Header = () => {
    const navigation = useNavigation()
    const handlePress = () => {
        navigation.navigate("Profile")
      };
  return ( 
    <View style={styles.con_header}>
        <View style={styles.con_header_parent}>
            <View style={styles.con_header_logo}>
                <Image source={logo_header} style={styles.header_logo_image} />
            </View>
            <TouchableOpacity onPress={() => handlePress()}>
            <View style={styles.con_header_profile}>
                <View></View>
                <View style={styles.con_header_profile_child}>
                    <Text style={styles.header_profile_text}>Hai Donny!</Text>
                    <Image source={profile_header} style={styles.header_profile_image} />
                </View>
            </View>
            </TouchableOpacity>
        </View>
    </View> 
  )
}

// Variable styles "Header"
const styles = StyleSheet.create({
    // Header Section #START
    con_header: {
        backgroundColor: "white",
        width: '100%',
        height: 65,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        position: 'absolute',
        top: 0,
        zIndex: 999
    },
    con_header_parent: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 25,
        marginRight: 25,
        height: '100%',
    },
    con_header_logo: {
        width: 160,
        justifyContent:'center',
    },
    header_logo_image: {
        resizeMode: "contain",
        width: 120,
        marginTop: 10
    },
    con_header_profile: {
        width: 160,
        height: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    con_header_profile_child: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    header_profile_text: {
        fontFamily: "Poppins-Medium",
        fontSize: 12,
        marginRight:5
    },
    header_profile_image: {
        width: 35,
        resizeMode: 'contain',
    },
    // Header Section #END 
});

export default Header
