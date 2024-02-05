import { StyleSheet } from "react-native";

export const loginstyle=StyleSheet.create({
    container:{
        fontFamily:'Roboto',
        flex:1,
        alignItems:'center',
        
    },
    logimg:{
      marginTop:80,
      justifyContent:'flex-end',
      alignItems:'center'
        
    },
    inputdiv:{
     marginTop:39,
     gap:12,
    },
    inputstyle: {
      color: 'black',
      padding:15,
      borderWidth: 0.2,
      borderRadius: 3,
      backgroundColor: '#f9f9f7',
      fontFamily: "Roboto-Light",
    },
  forpassword:{
    fontFamily:'Roboto',
    color:"#3797EF",
    fontSize:14,
    fontWeight:'bold',
    lineHeight:14.06,
    marginTop:19,
    alignSelf: 'flex-end', 
  },
  logindiv:{
 marginTop:30   

  },
  loginbutt:{
    width:343,
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
    marginTop:37,
    textAlign:'center', 
  },
  orcontainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop:42
  },
  line: {
    flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  linetext: {
    width: 40,
     textAlign: 'center',
     color:'black'
  },
  accountheading:{
    marginTop:42,
  textAlign:"center",
    color:'#000000',
    fontFamily:'Roboto-Medium'
  },
  sign:{
    color:"#3797EF"
  },
  errorInput:{
    color:'black',
  },
  errorText:{
    color:'red'
  }
  
})
