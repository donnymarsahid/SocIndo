import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import logoVertical from '../../assets/img/logo_vertical.png'
import ButtonStyle1 from '../../components/buttons/ButtonStyle1'

const Register = () => {
    const navigation = useNavigation();

        const handlePressLogin = async () => {
          try{
            navigation.navigate('Login')
          }
          catch(err){
           console.log(err)
          }
        }
        const showAlert = () => {
            Alert.alert(
              '500',
              'Internal Server Error',
              [
                {
                  text: 'Tutup',
                  onPress: () => console.log('Tombol Tutup Ditekan')
                },
                {
                  text: 'Batal',
                  onPress: () => console.log('Tombol Batal Ditekan'),
                  style: 'cancel'
                }
              ]
            );
          }
    return (
        <View style={{backgroundColor: '#fff'}}>
        <View style={Style.container}>
            <View style={Style.titleImg}>
                <Image source={logoVertical} style={Style.logoImg} />
            </View>
            <View style={Style.formInput}>
                <TextInput placeholder="Full Name" style={Style.inputText} />
                <TextInput placeholder="Username" style={[Style.inputText, {marginTop: 15}]} />
                <TextInput placeholder="Password" style={[Style.inputText, {marginTop: 15}]} />
            </View>
            <View style={{marginTop: 120}}></View>
            <ButtonStyle1 text="DAFTAR" onPress={showAlert}  />
            <View style={Style.desc}>
                <Text style={Style.textDefault}>Sudah memiliki Akun, </Text>
                <Pressable onPress={handlePressLogin}>
                    <Text style={Style.textButton}>
                    Masuk?
                    </Text>
                </Pressable>
            </View>
        </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container : {
        width: '90%',
        height: '100%',
        alignSelf: 'center',
        paddingTop: 80,
    },
    titleImg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textTitle: {
        color: '#3d3d3d',
        fontFamily: 'Poppins-Bold',
        fontSize: 30
    },
    logoImg: {
        width: 160,
        height: 100,
        resizeMode: "contain"
    },
     formInput: {
         backgroundColor: '#fff',
         marginTop: 50
     },
     inputText : {
         borderRadius: 8,
         borderWidth: 1,
         borderColor: '#DFDFDF',
         padding: 13
     },
     desc : {
         flexDirection: 'row',
         alignSelf: 'center',
         marginTop: 10
     },
     textDefault : {
         color: '#8F92A1',
        fontFamily: 'Poppins-Medium'
    },
    textButton: {
        color: 'red',
        fontFamily: 'Poppins-Medium'
     }
})

export default Register