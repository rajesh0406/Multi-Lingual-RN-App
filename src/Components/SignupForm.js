import React,{useEffect,useState} from 'react'
import { View, Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { useForm, Controller } from "react-hook-form";
import Colors from '../Theme/Colors';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Button from '../Components/Button';
import I18n from '../Translations/i18n';
const SignupForm = () => {
    const {control , handleSubmit, errors } = useForm();
    const [mail,setMail]=useState("");
    const checkPassword=(password)=>password.length>4
    const onSubmit=(data)=>{
        console.log(data)
    }
    return (
        <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
               <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
            <View style={styles.input_container}>
                <MaterialIcons name="person"
                style={{fontSize:20,color:Colors.purple4,marginLeft:5,marginRight:20}}/>
                <TextInput
          placeholder={I18n.t('entername')} 
          placeholderTextColor={Colors.white} 
          style={{fontSize:16,
        color:Colors.white}}
          onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
            </View>
          
        )}
        name="FullName"
        rules={{ 
            required: true,
            }}
        defaultValue=""
      />
      {errors.FullName && errors.FullName.type==='required' && (<Text style={styles.error_message}>{I18n.t('fieldrequired')}</Text>)}
              <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <View style={styles.input_container}>
                        <Feather name="mail" style={{fontSize:20,color:Colors.purple4,marginLeft:5,marginRight:20}}/>
                     <TextInput
                  placeholder={I18n.t('enteremail')} 
                  placeholderTextColor={Colors.white}
                  style={{
                      fontSize:16,
                      color:Colors.white
                  }}
                  onBlur={onBlur}
                    onChangeText={(value) => {
                      onChange(value)
                      setMail(value)
                      }}
                    value={mail}
                  />
                    </View>
                 
                )}
                name="email_phoneNumber"
                rules={{ 
                    required: true,
                    }}
                defaultValue={mail}
              />
              {errors.email_phoneNumber && errors.email_phoneNumber.type==='required' && (<Text style={styles.error_message}>{I18n.t('fieldrequired')}</Text>)}
              <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <View style={styles.input_container}>
              <Feather name="lock" 
              style={{fontSize:20,color:Colors.purple4,marginLeft:5,marginRight:20}}/>
               <TextInput
          placeholder={I18n.t('enterpassword')}
          placeholderTextColor={Colors.white}
          style={{
            fontSize:16,
            color:Colors.white
          }}
          onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
          </View>
        )}
        name="password"
        rules={{ 
            required: true,
            validate:checkPassword
            }}
        defaultValue=""
      />
      {errors.password && errors.password.type==='required' && (<Text style={styles.error_message}>{I18n.t('fieldrequired')}</Text>)}
      {errors.password && errors.password.type==='validate' && (<Text style={styles.error_message}>{I18n.t('minpasswordlength')}</Text>)}
      <Button
      text={I18n.t('signup')}
      ButtonStyle={styles.signup_button}
      TextStyle={styles.signup_text}
      onPress={handleSubmit(onSubmit)}
      />  
     
        </View>
    )
}
const styles=StyleSheet.create({
    error_message:{
        fontSize:15,
        color:Colors.red,
        fontFamily:'Poppins-SemiBold',
        marginTop:10
    },
    input_container:{
        flexDirection:'row',
        width:'80%',
        alignItems:'center',
        borderColor:Colors.purple4,
        borderBottomWidth:1,
        marginVertical:10
    },
    signup_button:{
        marginVertical:20,
        width:'70%',
        height:40,
        borderRadius:20,
        backgroundColor:Colors.pink,
        justifyContent:'center',
        alignItems:'center',
    },
    signup_text:{
        fontFamily:'Poppins-SemiBold',
        color:Colors.white
    }
})

export default SignupForm
