import { View, Text, Modal, ActivityIndicator, Pressable } from 'react-native'
import React from 'react'
import { styles } from '../../Assets/Styles'
import { errors, mode, success, theme } from '../../Assets/Colors'
import Icon from 'react-native-vector-icons/Ionicons'
import { LoginButton } from './buttons'

type Props = {

    visible: boolean,
    title?: string,
    onRequestClose?: (e: any) => void,
    onPress?: (e: any) => void,
    Resend?: (e: any) => void,
    Refresh?: (e: any) => void,
    email?: string,
    disabled?: boolean,
    time?: number,

}

export const LoadingModal = (props: Props) => {
  return (
    <Modal
        animationType='fade'
        visible = {props.visible}
        transparent
        statusBarTranslucent
        onRequestClose={props.onRequestClose}
      >
        <View style = {styles.modalcontainer}>
          <ActivityIndicator size={70} color={theme.accentc}/>
          <Text style  = {styles.loginmodaltext}>{props.title}</Text>
        </View>
      </Modal>
  )
}

export const AlertModal = (props: Props) => {
    return (
    <Modal
        animationType='fade'
        visible = {props.visible}
        transparent
        statusBarTranslucent
        onRequestClose={props.onRequestClose}
      >
        <View style = {styles.modalcontainer}>
          
          <View style = {styles.alertmodal}>
            <Icon
            name = 'warning-outline'            
            size={75}
            color = {mode ? errors.main : errors.M004}
            />
            <Text style  = {styles.alertmodaltext}>{props.title}</Text>
          </View>
          <Pressable onPress={props.onPress} style = {styles.exitmodal}>
            <Icon
            name = 'close-circle-outline'            
            size={40}
            color = {errors.A002}
            />
            </Pressable>
        </View>
      </Modal>
      )
}

export const SuccessModal = (props: Props) => {
  return (
  <Modal
      animationType='fade'
      visible = {props.visible}
      transparent
      statusBarTranslucent
      onRequestClose={props.onRequestClose}
    >
      <View style = {styles.modalcontainer}>
        
        <View style = {styles.alertmodal}>
          <Icon
          name = 'ios-shield-checkmark-outline'            
          size={75}
          color = {mode ? success.main : success.main}
          />
          <Text style  = {styles.alertmodaltext}>{props.title}</Text>
        </View>
        <Pressable onPress={props.onPress} style = {styles.exitmodal}>
          <Icon
          name = 'close-circle-outline'            
          size={40}
          color = {errors.A002}
          />
          </Pressable>
      </View>
    </Modal>
    )
}

export const ButtonModal = (props: Props) => {
  return (
  <Modal
      animationType='fade'
      visible = {props.visible}
      transparent
      statusBarTranslucent
      onRequestClose={props.onRequestClose}
    >
      <View style = {styles.container}>
        
        <View style = {styles.alertmodal}>
          <Icon
          name = 'mail-unread-outline'            
          size={150}
          color = {mode ? errors.main : errors.M004}
          />
          <Text style  = {styles.vermodaltitle}>Check your email</Text>
          <Text style  = {styles.vermodaltext}>Please verify your email address to activate your account. Click the verification link provided in the email we've sent to your registered email:  <Text style = {styles.vermodalemail}>{props.email}</Text></Text>
          <LoginButton
            title='Verify email'
          />
            <View style = {styles.iconwithtextverticalcontainer}>
            <Pressable onPress={props.Refresh} style = {styles.iconwithtextvertical}>
            <Icon
            name = 'refresh-circle-outline'            
            size={40}
            color = {errors.main}
            />
            </Pressable>
          </View>
          <Pressable 
            disabled = {props.disabled}
            onPress={props.Resend} 
            style = {styles.exitmodal}
          
          >
          <Text style  = {[styles.vermodaltext, {fontSize: 14}]}>Did not received any email?<Text style  = {[styles.vermodalemail,{fontSize: 14}]}> Resend </Text>{props.time}</Text>
            </Pressable>
        </View>

      </View>
      
    </Modal>
    )
}
