import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import banner from "../../assets/img/banner.png"
import right_arrow from "../../assets/img/right_arrow.png"
import field from "../../assets/img/field.png"
import news_banner from "../../assets/img/news_banner.png"
import Header from '../../components/header';


const News = () => {
  return (
    <>
    <Header />
      {/* News Section #START */}
      <View style={styles.con_content}>
        <View style={styles.con_content_title}>
            <View>
                <Text style={styles.con_content_title_head}>Berita Terkini</Text>
                <Text  style={styles.con_content_title_sub}>Informasi Mengenai Sepakbola</Text>
            </View>
            <View style={styles.con_content_ic}>
            </View>
        </View>
        <ImageBackground source={news_banner} style={styles.con_news_image}>
            <Text style={styles.con_news_head}>5 Rekomendasi Lapangan Futsal di Jakarta Barat</Text>
            <Text style={styles.con_news_sub}>SocIndo merekomendasikan lapangan yang ada disekitar jakarta</Text>
        </ImageBackground>
    </View>
    {/* News Section #END */}
    </>
  )
}

// Variable styles "News"
const styles = StyleSheet.create({ 
  // Content Section #END
  con_content: {
      width: "100%",
      height: 175,
      marginTop:85,
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
      justifyContent: "flex-end",
      marginTop: 15
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

export default News
