import React from 'react';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 40.9067559,
          longitude: 29.2763057,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      />
    </SafeAreaView >
  )

}

export default App;