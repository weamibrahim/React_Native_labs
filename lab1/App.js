import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("nada")
  console.warn("it's warn ")
  console.error("it's error for test")
  return (
      
      <SafeAreaView style={styles.container}>
       <View style={styles.container}>
        <Text style={styles.text} onPress={()=>{alert("Happy new year")}} >2023</Text>
       
        </View>
        <ScrollView horizontal style={styles.box}>
       
         <Image style={styles.img} source={require('./assets/images/2.jpeg')} ></Image>
         <Image style={styles.img} source={require('./assets/images/3.jpg')} ></Image>
         <Image style={styles.img} source={require('./assets/images/4.jpg')} ></Image>
               
         <Image style={styles.img} source={require('./assets/images/5.jpg')} ></Image>
        
       
      </ScrollView>
        <StatusBar style="auto" />
       
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text:{
fontSize:30
  },
  container: {
    flex: 3,
backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
  boxshadow:30,
  marginBottom:40
  },
  img:{
    height:500,
    width:300
  }
});