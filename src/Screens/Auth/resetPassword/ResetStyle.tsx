import { StyleSheet } from "react-native";

export const resstyle=StyleSheet.create({
    container:{
        width:375,
        height:812,
        fontFamily:'Roboto',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logimg:{
        marginBottom:30
    },
    restext:{
    textAlign:'justify',
    padding:3,
    },
    retext:{
    marginLeft:20,
    marginBottom:90,
        },
    inputfiled:{
        width:335,
        marginRight:10,
        height:44,
        borderWidth: 0.2,
        marginTop:10,
        borderRadius:3,
        backgroundColor:'#f9f9f7',
        fontFamily:"Roboto-Regular",
        padding:15,

    },
    signin:{
        marginTop:'5%',
    },
     signbutt:{
    width:330,
    height:44,
    marginRight:10,
    padding:10,
    marginTop:10,
    textAlign:'center',
    fontFamily:'Roboto',
    fontWeight:'600',
    color:'white',
    borderRadius:3,
    backgroundColor:'#3797EF',
    }
})