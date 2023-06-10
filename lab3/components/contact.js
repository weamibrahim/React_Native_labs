import { SafeAreaView, StyleSheet, Text, View  , ScrollView,Image,
    SectionList,} from 'react-native';
import styles from "../styles"
const contacts = [
    {
      id: "0",
      title: "A",
      data: [
        { id: "0", name: "weam", image: "https://img.icons8.com/?size=512&id=23244&format=png" },
        { id: "1", name: "nour", image: "https://img.icons8.com/?size=512&id=23235&format=png" },
      ]
    },
    {
      id: "1",
      title: "B",
      data: [
        { id: "2", name: "alaa", image: "https://img.icons8.com/?size=512&id=23244&format=png" },
        { id: "3", name: "asmaa", image: "https://img.icons8.com/?size=512&id=23235&format=png" },
      ]
    },
    {
      id: "2",
      title: "C",
      data: [
        { id: "4", name: "omar", image: "https://img.icons8.com/?size=512&id=23244&format=png" },
        { id: "5", name: "nour", image: "https://img.icons8.com/?size=512&id=23235&format=png" },
      ]
    },
    {
      id: "3",
      title: "D",
      data: [
        { id: "6", name: "alaa", image: "https://img.icons8.com/?size=512&id=23244&format=png" },
        { id: "7", name: "mohamed", image: "https://img.icons8.com/?size=512&id=23235&format=png" },
      ]
    },
   
   
    // Add more groups and contacts as needed
  ];
export default function ContactScreen() {
return (
    <SectionList sections={contacts} style={{marginBottom:50}}
      renderSectionHeader={({section:{title}})=><Text style={styles.header}>{title}</Text>}
      renderItem={({item:{name,image}})=>{return <View style={{flexDirection:"row"}}>
        <Image source={{
        uri: image,
      }} style={{width:50,height:50}}></Image><Text style={styles.itemStyle}>{name}</Text></View>}}
      keyExtractor={(props)=>props.id}
    ></SectionList>
);
}