import { Pressable, Text, View } from 'react-native';

const Index = () => (
  <View className="p-safe w-full h-full flex border-4 items-center justify-center border-purple-400 m-0 p-0">
    <Text className="color-purple-700 font-bold text-xl">Edit app/index.tsx to edit this screen.</Text>
    <View className="" />
    <Pressable className="p-6 bg-lime-500 rounded-lg mt-5 group hover:bg-yellow-200 active:bg-yellow-500" onPress={() => console.log('clicked')}>
      <Text className="color-indigo-900 font-bold text-xl group-active:color-rose-700 group-hover:color-rose-300">Click me!</Text>
    </Pressable>
  </View>
);

export default Index;
