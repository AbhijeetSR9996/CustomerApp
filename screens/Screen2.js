import React,{useState} from 'react';
import { View, Image, StyleSheet, Text, TextInput,TouchableOpacity,SafeAreaView} from 'react-native';
import Hide from './Hide';

const Screen2 = ({navigation}) => {

    const Separator = () => (
        <View style={styles.separator} />
      );

      const [hidePass, setHidePass] = useState(true);

    return (
        <>
        <SafeAreaView>
        <View> 
          <View style={styles.bg} >
            <Image style={styles.direct} source={require('../images/login.png')} />
            <Separator/>
            </View>
            <SafeAreaView style={styles.bg}>
            <View style={styles.boundary}>
              <Separator/>
              
            <Text style={styles.txt1}>Log In</Text>
            <Separator/>
            <Separator/>
            <Separator/>
            <Text style={styles.txt2}>VRN</Text>
            <View style={styles.innerview}>
            <TextInput placeholder='enter VRN' style={styles.txtin}/></View>
            <Text style={styles.txt2} >Mobile Number</Text>
            <View style={styles.innerview}>
            <Hide/>
            </View>
            <View style={styles.fixToText}>
            <TouchableOpacity style={styles.appButtonContainer} onPress={() => navigation.navigate('Screen4')} >
              <Text style={styles.appButtonText}>Log In</Text>
            </TouchableOpacity>   
            <Text style={styles.txt3}>Forgot Password?</Text>
            <Separator/><Separator/>
            <Text style={styles.txt4} onPress={() => navigation.navigate('Screen3')}>Sign Up</Text>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
          <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        <Separator/>
        </View>
        </View>
        </SafeAreaView>
        </View>
        </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    fixToText: {
      justifyContent:'center',
      alignSelf:'stretch'
    },
    direct: {
       alignSelf:'flex-start',
       marginStart:10
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: 'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      appButtonText:{
        fontSize:18,
        color:"white",
        fontWeight:"bold",
        alignSelf:"center",
        textTransform:'capitalize' 
    },
    appButtonContainer:{
      elevation:8,
      backgroundColor:"#f2994a",
      borderRadius:15,
      paddingVertical:15,
      paddingHorizontal:12,
      alignItems:'center',
      margin: 20,
      marginHorizontal:25
    },
  boundary:{
    borderWidth:1,
    borderColor:'#000',
    backgroundColor:'#ffffff',
    borderRadius:45,
  },
  bg:{
    backgroundColor:'#000000'
  },
  txt1:{
    alignSelf:'flex-start',
    color:'black',
    textTransform:'capitalize',
    fontWeight:'bold',
    fontSize:30,
    top:30, 
    marginStart:25
  },
  txt2:{
    alignSelf:'flex-start',
    color:'#808080',
    marginLeft:32
  },
  txt3:{
    alignSelf:'center',
    color:'#808080'
  },
  txt4:{
    alignSelf:'center',
    color:'#007aff'
  },
  innerview:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1.5,
    height:40,
    borderRadius:10,
    margin:5,
    marginVertical:10,
    marginHorizontal:25
  },
  txtin:{
    marginHorizontal:10
  },
});

export default Screen2;