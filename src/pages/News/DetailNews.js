import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native' 
import Header from '../../components/header'
import field_banner from "../../assets/img/field_banner.png"
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonStyle1 from '../../components/buttons/ButtonStyle1'
import { useNavigation } from '@react-navigation/native'


const DetailNews = () => {
  const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Home")
      };
  return (
      <SafeAreaView>
         <Header />
       {/* Background Image */}
         <View style={styles.bg_image}>
          <Image source={field_banner} style={styles.image_bg} />
          </View>
        <View style={styles.container}>
            <Text style={styles.txt_header}>5 REKOMENDASI LAPANGAN FUTSAL JAKARTA BARAT </Text>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        <View style={{marginBottom: 30}}></View>
        <ButtonStyle1 text="KEMBALI" onPress={handlePress} />
        </View>
      </SafeAreaView>
  )
}

// Variable styles "DetailNews"
const styles = StyleSheet.create({ 
    bg_image : {
        width: "100%",
    },
    image_bg: {
        resizeMode: "contain",
        width: "100%",
    },
    container: {
        marginLeft: 25,
        marginRight: 25
    },
    txt_header: {
        fontFamily: "Poppins-Bold",
        fontSize:13
    }
    // News Section #END
});


export default DetailNews
