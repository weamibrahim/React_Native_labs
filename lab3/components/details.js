import { useRoute } from '@react-navigation/native';
import {  Text, View } from 'react-native';
export default function DetailsScreen() {
    const {params}=useRoute()
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:"#FFBDF7"}}>
    <Text>Name:{params.name}</Text>
    <Text>Email:{params.email}</Text>
    <Text>website:{params.website}</Text>
    <Text>address {`${params.address.city} ${params.address.street} ${params.address.suite}`}</Text>
    <Text>company{`${params.company.name} ${params.company.catchPhrase} ${params.company.bs}`}</Text>
    <Text>phone:{params.phone}</Text>
    </View>
);
}