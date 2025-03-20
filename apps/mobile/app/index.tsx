import { Pressable, Text, View } from 'react-native';

const Index = () => (
  <View>
    <Text style={{ fontFamily: 'BlinkerRegular' }}>Edit app/index.tsx to edit this screen.</Text>
    <View />
    <Pressable onPress={() => console.log('clicked')}>
      <Text style={{ fontFamily: 'BlinkerBold' }}>Click me!</Text>
    </Pressable>
  </View>
);

export default Index;
