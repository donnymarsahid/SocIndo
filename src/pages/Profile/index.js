import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {Alert, Image, StyleSheet, Text, View} from 'react-native' 
import profile from "../../assets/img/profile.png"
import ButtonStyle1 from '../../components/buttons/ButtonStyle1'

const Profile = () => {
  const navigation  = useNavigation()
   

  const handlePressLogOut = () => {
    Alert.alert(
      'KELUAR',
      'Anda yakin keluar?',
      [
        {
          text: 'Ya',
          onPress: () => navigation.navigate("Start")
        },
        {
          text: 'Tidak',
          onPress: () => console.log('Tombol Batal Ditekan'),
          style: 'cancel'
        }
      ]
    );
  }
  return (
    <View style={styles.con_profile}>
      <View style={styles.con_profile_data}>
        <Image source={profile} style={styles.con_profile_data_image} />
        <Text style={styles.con_profile_data_title}> Donny Marsahid</Text>
      </View>
      <View style={styles.con_profile_form}>
        <Text style={styles.con_profile_form_username}>Username</Text>
        <Text style={styles.con_profile_form_username_2}>donnymrshd</Text>
        <View style={styles.con_profile_form_box}>
          <View>
            <Text style={styles.con_profile_form_box_text}>Daftar Lapangan</Text>
          </View>
          <View>
            <Text style={styles.con_profile_form_box_text}>1</Text>
          </View>
        </View>
      </View>

      <ButtonStyle1 text="KELUAR" onPress={handlePressLogOut} />
    </View>
  )
}

export default Profile

// Variable styles "Profile"
const styles = StyleSheet.create({
  con_profile: {
    flex: 1,
    marginLeft: 25,
    marginRight: 25
  },
  con_profile_data: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
  },
  con_profile_data_image: {
    width: 135,
    height:135
  },
  con_profile_data_title: {
    fontSize: 18,
    fontFamily: "Poppins-Bold"
  },
  con_profile_form: {
    height: 200
  },
  con_profile_form_username: {
    fontSize: 10,
    fontFamily: "Poppins-Medium"
  },
  con_profile_form_username_2: {
    fontSize: 12,
    fontFamily: "Poppins-Medium"
  },
  con_profile_form_box:{
    backgroundColor: "red",
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10
  },
  con_profile_form_box_text : {
    fontFamily: "Poppins-Bold",
    color: "white"
  }
})
