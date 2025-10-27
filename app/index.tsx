import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [age, setAge] = useState("");
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

 
  const calculateLimits = () => {
    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum <= 0) {
      setLowerLimit(0);
      setUpperLimit(0);
    } else {
      const lowerLimit = (220-ageNum) * 0.65
      const upperLimit = (220-ageNum) * 0.85 
      setLowerLimit(lowerLimit);
      setUpperLimit(upperLimit);
    }
  }
  return (
    <View style={{ backgroundColor: "lightblue"}}>

      <Text style={{ fontSize: 30, fontWeight: "bold", marginBottom: 20 , marginTop: 50}}>Heart Rate Limits Calculator</Text>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Enter your age</Text>
      
      <View style={{ width: 140, marginBottom: 10}}>

      <TextInput
        placeholder="Your age.."
        style={{ borderWidth: 1, borderColor: "black", padding: 10, borderRadius: 10, backgroundColor: "white" }}
        value={age}
        onChangeText={setAge}
      />
      </View>

      <View style={{ width: 120}}>
      <Button title="Calculate" onPress={calculateLimits} color="grey" /></View>

      <Text style={{ marginTop: 20 }}>Lower limit: {lowerLimit} bpm</Text>
      <Text>Upper limit: {upperLimit} bpm</Text>

    </View>
  );
}
