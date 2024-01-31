import { StyleSheet } from "react-native";

export const loginstyle=StyleSheet.create({
    container:{
        width:375,
        height:812,
        fontFamily:'Roboto',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logimg:{
        marginBottom:10
    },
  forpassword:{
    fontFamily:'Roboto',
    color:"#3797EF",
    fontSize:14,
    fontWeight:'bold',
    marginTop:20,
    marginRight:15,
    alignSelf: 'flex-end', 
  },
  logindiv:{
    marginTop:'5%',
  },
  loginbutt:{
    width:335,
    height:44,
    padding:10,
    marginTop:10,
    textAlign:'center',
    color:'white',
    borderRadius:3,
    backgroundColor:'#3797EF',

  },
  googlebutt:{
    padding:4,
    marginTop:25,
    textAlign:'center', 
  },
  orcontainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop:30
  },
  line: {
    flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  linetext: {
    width: 50,
     textAlign: 'center'
  },
  accountheading:{
    marginTop:40,
    color:'#000000',
    fontFamily:'Roboto-Medium'
  },
  sign:{
    color:"#3797EF"
  }
  
})
