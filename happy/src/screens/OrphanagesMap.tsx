import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import iconLocal from '../images/iconLocal.png';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function OrphanagesMap(){

  // Variaveis ambiente
  const navigation = useNavigation();

  function handleNavigationToOrphanageDetails(){
    navigation.navigate('OrphanageDetails');
  }

  function handleNavigationToCreateOrphanage(){
    navigation.navigate('SelectMapPosition');
  }

return (
    <View style={styles.container}>
        <MapView 
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
        latitude: -7.8272214,
        longitude: -34.9120284,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,
        }}
        > 
        <Marker 
        icon={iconLocal}
        calloutAnchor={{
        x: 0.7,
        y: -0.1,
        }}
        coordinate= {{
        latitude: -7.8272214,
        longitude: -34.9120284,
        }}
        >
        <Callout tooltip  onPress= {handleNavigationToOrphanageDetails} > 
            <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>Kids Grace</Text>
            </View>
        </Callout>

        </Marker>

        </MapView>

        {/* View do footer */}
        <View style={styles.footer}>
        <Text style={styles.footerText}> 1 Orfanato encontrado </Text>


        <TouchableOpacity style={styles.createOrphanageButton} onPress={handleNavigationToCreateOrphanage}>
        <Feather name="plus" size={20} color='yellow'/>
        </TouchableOpacity>
        </View>

    {/* Fim da view que renderiza a aplicação toda */}
    </View>
    );
}


/// CSS
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
    },
    
    map:{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  
    calloutContainer:{
      width: 140,
      height: 36,
      paddingHorizontal: 36,
      backgroundColor: 'white',
      borderRadius: 16,
      justifyContent: 'center',
    },
  
    calloutText:{
      color: '#0089a5',
      fontSize: 13,
      fontFamily: 'Nunito_700Bold',
    },
  
    footer:{
      position: 'absolute',
      left: 24,
      right:24,
      bottom: 52,
  
      backgroundColor: '#FFF',
      borderRadius: 28,
      height: 46,
      paddingLeft: 24,
      
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  
      elevation: 3,
    },
  
    footerText:{
      color: '#0089a5',
      fontSize: 16,
      fontFamily: 'Nunito_700Bold',
    },
  
    createOrphanageButton:{
      width: 46,
      height: 46,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',    
    },
  
    });

