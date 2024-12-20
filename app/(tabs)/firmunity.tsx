import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import WebView from 'react-native-webview';
import Constants from 'expo-constants';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

export default function TabFirmuniyuScreen() {
  const tabBarHeight = useBottomTabBarHeight();



  return (
    <WebView
      style={[styles.container,
        { marginBottom: tabBarHeight } // Tab bar 높이만큼 margin 추가
      ]}
      source={{ uri: 'https://firmunity.vercel.app/' }}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});