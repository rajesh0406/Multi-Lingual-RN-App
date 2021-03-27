import React, { Component } from 'react'
import { Text, View,Image,ImageBackground,StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../Theme/Colors'
import SignupForm from '../Components/SignupForm'
import SVG from '../Assets/Images/profile_pic.svg'
import I18n from '../Translations/i18n';
class RegisterScreen extends Component {
    render() {
        return (
            <KeyboardAwareScrollView style={styles.register_page}>
                <View style={styles.register_page}>
                    <View style={styles.header}>
                    </View>
                    <SVG height={100} width={100} style={{marginTop:-150,marginLeft:30}}/>
                    <Text style={styles.create_account_text}>
                        {I18n.t('createyouraccount')}
                    </Text>
                    <SignupForm/>
                </View>
            </KeyboardAwareScrollView>
            
        )
    }
}
const styles=StyleSheet.create({

    
    register_page:{
        flex:1,
        backgroundColor:Colors.purple2,
        flexDirection:'column'
    },
    header:{
        width:'100%',
        height:220,
        backgroundColor:Colors.purple1,
        transform : [ { scaleX : 1 } ],
        borderBottomStartRadius :200,
        borderBottomEndRadius : 200,
    },
    create_account_text:{
        margin:30,
        width:'60%',
        fontSize:25,
        fontFamily:'Poppins-SemiBold',
        color:Colors.white
        
    }
   
})
export default RegisterScreen
