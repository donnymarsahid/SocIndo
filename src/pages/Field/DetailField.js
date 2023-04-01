import React from 'react'
import {Image, Linking, StyleSheet, Text, View} from 'react-native' 
import Header from '../../components/header'
import field_banner from "../../assets/img/field_banner.png"
import maps from "../../assets/img/maps.png"
import { SafeAreaView } from 'react-native-safe-area-context'
import ButtonStyle1 from '../../components/buttons/ButtonStyle1'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const DetailField = () => {
  const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate("Home")
      };

      const handlePressLink = () => {
        Linking.openURL('https://www.google.com/maps/search/centro+futsal/@-6.1483883,106.7167988,18.51z');
      }
      
  return (
      <SafeAreaView>
         <Header />
       {/* Background Image */}
         <View style={styles.bg_image}>
          <Image source={field_banner} style={styles.image_bg} />
          </View>
        <View style={styles.container}>
            <Text style={styles.txt_header}>CENTRO FUTSAL</Text>
            <Text style={{fontFamily: "Poppins-Regular", fontSize: 12}}>
            Pasar Sawah Besar Lantai 3 Jalan Sawah Besar No. I-II, RT.3/RW.2, Maphar, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 10130
            </Text>

           <TouchableOpacity onPress={handlePressLink}>
           <Image source={maps} style={{ width: 300, height: 150, marginTop: 20}} />
           </TouchableOpacity>
        <View style={{marginBottom: 30}}></View>
        <ButtonStyle1 text="KEMBALI" onPress={handlePress} />
        </View>
      </SafeAreaView>
  )
}

// Variable styles "DetailField"
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


export default DetailField
