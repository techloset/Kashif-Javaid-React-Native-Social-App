import { StyleSheet } from "react-native";

export const HomeStyle=StyleSheet.create({
    container:{
        flex:1,
    },
    imgcontainer:{
        marginTop:54,
        justifyContent:'center',
        alignItems:'center'
    },
    scondcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    img:{
        marginLeft:11,
        marginTop:10,
        width:22,
        height:22,
        borderRadius:100,
        padding:20
    },
    name:{
        marginLeft:11,
        marginTop:5
    },text1:{
        fontSize:20,
        fontFamily:'Roboto-bold-ttf'
    },
    dots:{
       marginRight:14,
       fontSize:20
    }
})