import { ScreenHeaderBtn } from '@/components/index';
import { icons, images } from '@/constants';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name='index'
        options={{
          headerLeft: () => (
            //iconUrl={icons.menu} dimensions="60%"
            <ScreenHeaderBtn iconUrl={icons.menu} dimension={25} />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile}  dimension={25} />
          ),
          headerTitle: "",
          headerShadowVisible: false
        }}
      />
    </Stack>
  );
}
