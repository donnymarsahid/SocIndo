import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import logoVertical from '../../assets/img/logo_vertical.png'
import view from '../../assets/img/view.png'
import hide from '../../assets/img/hide.png'
import ButtonStyle1 from '../../components/buttons/ButtonStyle1'

const Login = () => { 
        const navigation = useNavigation();
        const [formData, setFormData] = useState({
            username: '',
            password: '',
          });
        
        const [hidePassword, setHidePassword] = useState(true);
        const _inputTextHandler = (key, val) => {
            setFormData({
              ...formData,
              [key]: val,
            });
          };

          const _btnToggleHandler = () => setHidePassword(!hidePassword);
        

        const handlePressRegister = async () => {
          try{
            navigation.navigate('Register')
          }
          catch(err){
           console.log(err)
          }
        }

        const _btnSubmitHandler = async () => {
            if (
              formData.username === '' ||
              formData.password === ''  
            ) {
                Alert.alert(
                    'Error',
                    'Please input the field before submit!',
                    [
                      {
                        text: 'Tutup',
                        onPress: () => console.log('Tombol Tutup Ditekan')
                      } 
                    ]
                  );
              return;
            }else if(formData.username === "donnymrshd" && formData.password === "user123") {
                navigation.navigate("Load2") 
            } else { 
              Alert.alert(
                'Error',
                'Username or password is correct!',
                [
                  {
                    text: 'Tutup',
                    onPress: () => console.log('Tombol Tutup Ditekan')
                  } 
                ]
              );
            }
          };
        
    return (
        <View style={{backgroundColor: '#fff'}}>
        <View style={Style.container}>
            <View style={Style.titleImg}>
                <Image source={logoVertical} style={Style.logoImg} />
            </View>
            <View style={Style.formInput}>
            </View>
                {/* Username Start */}
                <View style={Style.formGroup}>
              <View style={Style.formInputCst}>
                <TextInput
                  style={Style.formInputBox}
                  placeholder="username"
                  autoCapitalize={'none'}
                  onChangeText={text => _inputTextHandler('username', text)}
                  value={formData.username}
                /> 
              </View>
            </View>
                {/* Username End */}
                {/* Password Start */}
                <View style={Style.formGroup}>
              <View style={Style.formInputCst}>
                <TextInput
                  style={Style.formInputBox}
                  placeholder="password"
                  autoCapitalize={'none'}
                  secureTextEntry={hidePassword}
                  onChangeText={text => _inputTextHandler('password', text)}
                  value={formData.password}
                />
                <TouchableOpacity onPress={_btnToggleHandler}>
                  {
                    hidePassword ? <Image source={view} style={Style.img_icon} /> : <Image source={hide} style={Style.img_icon} />
                  }
                </TouchableOpacity>
              </View>
            </View>
                {/* Password End */}
            <View style={{marginTop: 120}}></View>
            <ButtonStyle1 text="MASUK" onPress={_btnSubmitHandler} />
            <View style={Style.desc}>
                <Text style={Style.textDefault}>Belum memiliki Akun, </Text>
                <Pressable onPress={handlePressRegister}>
                    <Text style={Style.textButton}>
                    Daftar?
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
     },
     formGroup: {
        marginVertical: 5,
      },
    formInputCst: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,

        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DFDFDF',

      },
     formInputBox: {
        flex: 1,
        fontFamily: "Poppins-Regular",
        fontSize: 16,
      },
     formInputIcon: {
        marginLeft: 5,
        fontSize: 50,
        color: "red",
      },
      img_icon: {
        width: 30,
        resizeMode: "contain"
      }
    
    
})

export default Login