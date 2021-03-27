import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import I18n from '../Translations/i18n';
import {Picker} from '@react-native-picker/picker';
import Colors from '../Theme/Colors';
import SVG from '../Assets/Images/personal_setting.svg'
import Button from '../Components/Button';

class InitScreen extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            init:"english"
        }
    }
    
    
    render() {
    I18n.locale=this.state.init;
        return (
            <View style={{flex:1,flexDirection:'column'}}>
                <SVG height={250} width={250} style={{marginLeft:50,marginTop:40}}/>
                <Text style={styles.select_language}>
                        {I18n.t('selectlanguage')}
                    </Text>
                    
                <View style={styles.dropdown_view}>
                <Picker
            style={{borderColor:Colors.purple2}}
            onValueChange={(itemValue) =>
            this.setState({
                init:itemValue
            })
            }>
            <Picker.Item label="English" value="english" />
            <Picker.Item label="Tamil" value="tamil" />
            </Picker>
            </View>
            <Button
            text={I18n.t('next')}
            TextStyle={styles.next_button_text}
            ButtonStyle={styles.next_button}
            onPress={()=>this.props.navigation.navigate('Register')}
            />
            </View>
        )
    }
}
const styles=StyleSheet.create({
    select_language:{
        marginVertical:30,
        marginHorizontal:40,
        width:'55%',
        fontSize:25,
        fontFamily:'Poppins-SemiBold',
        color:Colors.purple3
    },
    dropdown_view:{
        borderColor:Colors.purple3,
        borderWidth:1,
        height: 50,
        width: 200,
        borderRadius:4,
        marginHorizontal:40
    },
    next_button:{
        height:40,
        width:'80%',
        marginHorizontal:40,
        marginVertical:80,
        borderRadius:20,
        color:Colors.white,
        backgroundColor:Colors.purple3,
        justifyContent:'center',
        alignItems:'center'

    },
    next_button_text:{
        fontSize:15,
        color:Colors.white,
        fontFamily:"Poppins-SemiBold"

    }
})

export default InitScreen
