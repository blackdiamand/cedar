import {Button, Image, Text, View} from "react-native";
import * as React from "react";
import {useContext} from "react";
import {GlobalContext} from "../Contexts";

import DefaultImage from '../assets/eagle.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;
function HomeScreen({ navigation }) {
  const {pointsContext, setPointsContext} = useContext(GlobalContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/eagle.png')}
      />
      <Text style={{fontFamily: 'Roboto', fontSize: 50}}>On-Board</Text>
      <Button
        title="Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

export default HomeScreen;