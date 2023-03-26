import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import banner from "../../assets/img/banner.png"
import right_arrow from "../../assets/img/right_arrow.png"
import field from "../../assets/img/field.png"
import news_banner from "../../assets/img/news_banner.png"
import Header from '../../components/header';

const Homepage = () => {
  return (
    <>
    <Header />
    <ScrollView>
    {/* Banner Section #START */}
    <View style={styles.con_banner}>
        <ImageBackground source={banner} style={styles.con_banner_image}>
            <Text style={styles.con_banner_title}>Lapangan Futsal Tersedia di halaman utama anda!</Text>
            <Text style={styles.con_banner_subtitle}>Informasi mengenai futsal disekitar jakarta</Text>
        </ImageBackground>
    </View>
    {/* Banner Section #END */}

    {/* Content Section #START */}
    <View style={styles.con_content}>
        <TouchableOpacity style={styles.con_content_title}>
            <View>
                <Text style={styles.con_content_title_head}>Lapangan Futsal</Text>
                <Text  style={styles.con_content_title_sub}>Lapangan futsal menarik beserta ketersediaannya</Text>
            </View>
            <View style={styles.con_content_ic}>
            <Image source={right_arrow} style={styles.con_content_ic_image} />
            </View>
        </TouchableOpacity>
        <ScrollView horizontal style={styles.con_content_list}>
            <TouchableOpacity style={styles.con_content_list_card}>
                <View>
                    <Image source={field} style={styles.con_content_list_image} />
                    <View style={styles.con_content_list_text}>
                        <Text style={styles.con_content_list_head}>CENTRO FUTSAL</Text>
                        <Text style={styles.con_content_list_sub}>Jakarta Barat Kb. Jeruk</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </View>
    {/* Content Section #END */}

    {/* News Section #START */}
    <View style={styles.con_content}>
        <TouchableOpacity style={styles.con_content_title}>
            <View>
                <Text style={styles.con_content_title_head}>Berita Terkini</Text>
                <Text  style={styles.con_content_title_sub}>Informasi Mengenai Sepakbola</Text>
            </View>
            <View style={styles.con_content_ic}>
            <Image source={right_arrow} style={styles.con_content_ic_image} />
            </View>
        </TouchableOpacity>
        <ImageBackground source={news_banner} style={styles.con_news_image}>
            <Text style={styles.con_news_head}>5 Rekomendasi Lapangan Futsal di Jakarta Barat</Text>
            <Text style={styles.con_news_sub}>SocIndo merekomendasikan lapangan yang ada disekitar jakarta</Text>
        </ImageBackground>
    </View>
    {/* News Section #END */}
    </ScrollView>
    </>
  );
};

// Variable styles "Homepage"
const styles = StyleSheet.create({
    // Banner Section #START
    con_banner: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 80,
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
    },
    // Banner Section #END

    // Content Section #END
    con_content: {
        width: "100%",
        height: 175,
        marginTop:35,
        marginLeft: 25
    },
    con_content_title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    con_content_title_head: {
        fontSize: 12,
        fontFamily: "Poppins-Bold"
    },
    con_content_title_sub: {
        fontSize: 9,
        fontFamily: "Poppins-Medium"
    },
    con_content_ic: {
        width: 50,
        marginRight: 50,
        alignItems: 'flex-end'
    },
    con_content_ic_image: {
        width:35,
        resizeMode: 'contain'
    },
    con_content_list: {
        flex: 1,
        flexDirection:'row'
    },
    con_content_list_card: {
        backgroundColor: "white",
        width: 120,
        borderRadius:10,
        marginRight: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    con_content_list_image: {
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 80,
        resizeMode: 'contain',
    },
    con_content_list_head: {
        fontSize:8,
        fontFamily: "Poppins-Bold"
    },
    con_content_list_sub: {
        fontSize:8,
        fontFamily: "Poppins-Regular"
    },
    con_content_list_text: {
        padding: 4
    },
    // Content Section #END

    // News Section #START
    con_news_image: {
        backgroundColor: "red",
        marginRight: 50,
        height: 100,
        borderRadius: 10,
        padding: 10,
        justifyContent: "flex-end"
    },
    con_news_head: {
        fontFamily: "Poppins-Bold",
        fontSize:10,
        color: "white"
    },
    con_news_sub: {
        fontFamily: "Poppins-Medium",
        fontSize:9,
        color: "white"
    }
    // News Section #END
});


export default Homepage; 





