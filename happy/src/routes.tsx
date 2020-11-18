import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Header from '../src/components/Header';


const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './screens/OrphanagesMap';
import OrphanageDetails from './screens/OrphanageDetails';
import SelectMapPosition from './screens/createOrphanage/SelectMapPosition';
import OrphanageData from './screens/createOrphanage/OrphanageData';



export default function Routes(){
    return (
        // Rotas ( Funciona como a URL do navegador )
    <NavigationContainer>
        <Navigator screenOptions={{ headerShown:false, cardStyle:{ backgroundColor: '#f2f3f5' } }}>
            <Screen 
            name="OrphanagesMap" 
            component={OrphanagesMap}
            /> 
            <Screen 
            name="SelectMapPosition" 
            component={SelectMapPosition}
            options={{ 
                headerShown: true,
                header: () => <Header showCancel={false} title="Selecione o local" /> //Costumiza o header title com o nome passado
            }}
            /> 
            <Screen 
            name="OrphanageData" 
            component={OrphanageData}
            options={{ 
                headerShown: true,
                header: () => <Header title="Cadastre o orfanato" /> //Costumiza o header title com o nome passado
            }}
            
            /> 

            <Screen 
            name="OrphanageDetails" 
            component={OrphanageDetails}
            options={{ 
                headerShown: true,
                header: () => <Header title="Detalhes" /> //Costumiza o header title com o nome passado
            }}
            />        
        </Navigator>
    </NavigationContainer>
    );
}