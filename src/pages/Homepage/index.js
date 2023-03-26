import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import logo_header from "../../assets/img/logo_header.png"
import profile_header from "../../assets/img/profile_header.png"
import banner from "../../assets/img/banner.png"

const Homepage = () => {
  return (
    <>
    {/* Header Section #START */}
    <View style={styles.con_header}>
        <View style={styles.con_header_parent}>
            <View style={styles.con_header_logo}>
                <Image source={logo_header} style={styles.header_logo_image} />
            </View>
            <View style={styles.con_header_profile}>
                <View></View>
                <View style={styles.con_header_profile_child}>
                    <Text style={styles.header_profile_text}>Hai Donny!</Text>
                    <Image source={profile_header} style={styles.header_profile_image} />
                </View>
            </View>
        </View>
    </View>
    {/* Header Section #END */}

    {/* Banner Section #START */}
    <View style={styles.con_banner}>
        <ImageBackground source={banner} style={styles.con_banner_image}>
            <Text style={styles.con_banner_title}>Lapangan Futsal Tersedia di halaman utama anda!</Text>
            <Text style={styles.con_banner_subtitle}>Informasi mengenai futsal disekitar jakarta</Text>
        </ImageBackground>
    </View>
    {/* Banner Section #END */}
    </>
  );
};

// Variable styles "Homepage"
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

    // Banner Section #START
    con_banner: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        height: 140,
    },
    con_banner_image: {
        borderRadius: 10,
        height: 140,
        justifyContent:'center',
        padding: 20,
        resizeMode: "contain"
    },
    con_banner_title: {
        fontSize:12,
        fontFamily: "Poppins-Medium",
        color: "white"
    },
    con_banner_subtitle: {
        fontSize:12,
        fontFamily: "Poppins-Regular",
        color: "white"
    }
    // Banner Section #END
});


export default Homepage; 





