import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { tailwind } from '../../tailwind';


const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <View style={tailwind("flex-1")}>
      <Camera style={tailwind("flex-1")} onBarCodeScanned={() => setScanned(true)}>
        {scanned && (
          <TouchableOpacity
            style={tailwind("bg-white p-4 rounded-xl absolute bottom-10 self-center")}
            onPress={() => setScanned(false)}
          >
            <Text style={tailwind("text-black text-lg")}>Scan Again</Text>
          </TouchableOpacity>
        )}
      </Camera>
    </View>
  );
};

export default ScanScreen;
