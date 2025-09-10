import { ScreenHeaderBtn } from '@/components/index';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name='index'
        options={{
          headerLeft: () => (
            //iconUrl={icons.menu} dimensions="60%"
            <ScreenHeaderBtn />
          ),
          headerRight: () => (
            <ScreenHeaderBtn />
          ),
          headerTitle: "",
          headerShadowVisible: false
        }}
      />
    </Stack>
  );
}
