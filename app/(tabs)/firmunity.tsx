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
      style={[
        styles.container,
        { marginBottom: tabBarHeight }, // Tab bar 높이만큼 margin 추가
      ]}
      source={{ uri: 'https://firmunity.vercel.app/' }}
      // User Agent는 웹브라우저가 웹서버에게 자신을 식별할 때 사용하는 문자열입니다.
      // 네이티브 앱의 WebView는 기본적으로 다른 User Agent를 사용하는데, 이를 iOS Safari의 User Agent로 설정함으로써 웹서버가 일반적인 모바일 브라우저로 인식하게 됩니다.
      // 소셜 로그인 제공자들(Google, Facebook 등)은 보안상의 이유로 특정 User Agent만 허용하는 경우가 있어, 이를 설정해주면 정상적인 인증 흐름이 가능해집니다.
      userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
      javaScriptEnabled={true}
      domStorageEnabled={true}
      sharedCookiesEnabled={true}
      // 웹뷰의 User Agent 문자열에 추가되는 애플리케이션 식별자입니다.
      // 앱 전용 로직을 실행하거나 분석할 때 유용합니다.
      applicationNameForUserAgent="FIRNUNITY-APP"
      showsHorizontalScrollIndicator={false} // 네이티브 앱다운 깔끔한 UI를 제공하기 위해 스크롤 인디케이터를 감춥니다.
      showsVerticalScrollIndicator={false}
      // false로 설정하면 사용자의 직접적인 상호작용 없이도 미디어(비디오/오디오) 자동 재생이 가능합니다.
      // 예를 들어, 페이지 로드 시 자동으로 비디오를 재생할 수 있습니다.
      // 기본값은 true이며, 사용자 경험을 고려하여 신중하게 설정해야 합니다.
      mediaPlaybackRequiresUserAction={false}
      setBuiltInZoomControls={false}
      allowsInlineMediaPlayback={true}
      allowsBackForwardNavigationGestures={true} // iOS에서 화면 가장자리를 스와이프하여 뒤로/앞으로 이동하는 제스처를 활성화합니다.
      webviewDebuggingEnabled={true}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
