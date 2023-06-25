
import { StyleSheet } from "react-native";
import { black, white, mode, theme, transparent, errors, success } from '../Colors';
import { error } from 'console';

const backgroundmode = mode;

export const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.dark 
    },
    passcodetitle: {

        fontSize: 35,
        position: 'absolute',
        fontFamily: 'monthe',
        top: 20,
        left: 15,
        color:  white.W001
        
    },
    passcodekeys: {

        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: 70,
        borderRadius: 100,
        marginHorizontal: 20,
        
        
    },
    passcodekeytext: {

        fontSize: 35,
        color: white.W001

    },
    numpadcontainer: {
        position: 'absolute',
        bottom: 0,
        height: '70%',
        width: '100%', 
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 20,
        backgroundColor: theme.dark,
        
    },

    numpad: {

        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        heigt: '100%',
        paddingHorizontal: 35,
        paddingVertical: 25,
        flexDirection: 'row',

    },
    
    logininputcontainer: {

        width: '90%',
        height: 45, 
        marginVertical: 10, 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.accenta
        
    },
    
    logininput: {

        width: '90%',
        fontSize: 20,
        fontFamily: 'montel',
        color: white.main

    },
    loginicon: {
        marginRight: 10,
    },
    appname:{
        fontSize: 40,
        fontFamily: 'monthe',
        marginBottom: 20,
        color:'white'
        // color: mode? white.W003 : black.B004
    },
    loginbutton: {

        marginTop: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 10,
        elevation: 5,
        backgroundColor: theme.accenta
    },
    loginbuttontitle: {
        paddingVertical: 15,
        paddingHorizontal: 100,
        fontSize: 25,
        fontFamily: 'monthe',
        color: white.W003 
    },
    modalcontainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: transparent.level05
    },
    loginmodaltext: {
        color: white.main,
        marginTop: 20,
        fontSize: 20,
        fontFamily: 'monthe'
    },
    alertmodal: {
        width: '90%',
        height: '25%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.dark

    },
    alertmodaltext: {
        color: white.main,
        fontSize: 20,
        fontFamily: 'montel'
    },
    exitmodal: {
        marginTop: 20
    },
    secuicon: {
        position: 'absolute',
        right: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashimage: {
        width: 300,
        height: '60%'
    },
    signupbutton: {
    
       color:  white.W003,
       padding: 20,
       fontFamily: 'montel',
       fontSize: 15,

    },
    signuptag: {
        color: white.W003,
        fontFamily: 'montel',
        fontSize: 18,
        width: '80%',
        textAlign: 'center'
    },
    signupdisclosure: {
        color: white.W003,
        fontFamily: 'montel',
        fontSize: 12,
        width: '80%',
        textAlign: 'justify',
        marginLeft: 10,
    },
    signupdiscontainer: {

        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        marginTop: 5
        
    },
    forgottenpassword: {
        alignItems: 'flex-end',
        width: '100%',
    },
    iconwithtextverticalcontainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        width: '50%'
    },
    iconwithtextvertical:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    vermodaltitle: {
        fontFamily: 'monthe',
        fontSize: 35,
        color: white.W003,
    },
    vermodaltext:{
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'montel',
        marginVertical: 10,
        color: white.W003,
    },
    vermodalemail:{
        fontFamily: 'monthe',
        fontSize: 13,
        color: success.G001,
    },
    exitbutton:{
        top: 20,
        left: 15,
        position: 'absolute'
    },
    tabicon:{
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    headername: {
        fontFamily: 'monthe',
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    
    headerprofilecontainer: {
        position: 'absolute',
        right: 5,
        justifyContent: 'center',
        height: '100%',
        alignItems: 'center',
    },
    headerprofile: {
        width: 45,
        height: 45,
        borderRadius: 100
    },
    assessmenttext: {
        fontFamily: 'monthe',
        fontSize: 70,
        color: white.W003,
    },
    radioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        margin: 10
    },
    radioButton: {
        height: 25,
        width: 25,
        backgroundColor: "#F8F8F8",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E6E6E6",
        alignItems: "center",
        justifyContent: "center"
    },
    radioButtonIcon: {
        height: 20,
        width: 20,
        borderRadius: 8,
        backgroundColor: errors.W001
    },
    radioButtonText: {
        fontSize: 16,
        marginLeft: 16
    },
    getstarted: {
        
        width: '40%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 50, 
        elevation: 5, 
        borderRadius: 15, 
        backgroundColor: errors.main
    },
    descriptiontext: {
        width: '90%', 
        fontFamily: 'montel', 
        fontSize: 16, 
        paddingBottom: 10, 
        color: white.main
    },
    resulttext: {
        fontFamily: 'monthe', 
        fontSize: 30, 
        textAlign: 'left', 
        margin: 10, 
        color: white.main 
    },
    imagecontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    homecontent: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: 200,
        marginVertical: 10,
    }



})