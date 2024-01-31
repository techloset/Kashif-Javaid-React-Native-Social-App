import { StyleSheet } from "react-native";

export const signstyleshhet=StyleSheet.create({
    container:{
     flex:1,
     marginTop:'25%',
        fontFamily:'Roboto',
        justifyContent:'center',
        alignItems:'center'
    },
    sinimg:{
        marginBottom:10
    },
    inputfiled:{
        width:343,
        height:44,
        borderWidth: 0.2,
        marginTop:10,
        borderRadius:3,
        backgroundColor:'#f9f9f7',
        fontFamily:"Roboto",
        padding:10
    },
    signin:{
        marginTop:'5%',
    },
    signbutt:{
    width:335,
    height:44,
    padding:10,
    marginTop:23,
    textAlign:'center',
    fontFamily:'Roboto',
    fontWeight:'600',
    color:'white',
    borderRadius:3,
    backgroundColor:'#3797EF',
    },
    google:{
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
        flex: 1, height:1, 
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      },
      linetext: {
        width: 50,
         textAlign: 'center'
      },
      accountheading:{
        marginTop:40,
        color:'#000000'
      },
      sign:{
        color:"#3797EF"
      }
})