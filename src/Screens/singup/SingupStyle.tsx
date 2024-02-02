import { StyleSheet } from "react-native";

export const signstyleshhet=StyleSheet.create({
    container:{
     flex:1,
        fontFamily:'Roboto',
        alignItems:'center'
    },
    sinimg:{
        marginTop:120,
        justifyContent:"center",
        alignItems:"center"
    },
    inputfiled:{
        width:343,
        height:44,
        borderWidth: 0.2,
        borderRadius:1,
        backgroundColor:'#f9f9f7',
        fontFamily:"Roboto",
        padding:15,
    },
    signin:{
        marginTop:'5%',
    },
    signbutt:{
    width:343,
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
        marginTop:15,
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
        color:'#000000',
        textAlign:"center"
      },
      sign:{
        color:"#3797EF"
      }
})