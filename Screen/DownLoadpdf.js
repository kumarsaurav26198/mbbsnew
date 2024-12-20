import WebView from "react-native-webview"

const MyWebComponent = () => {
  return (
    <WebView source={{ uri: 'https://api.mbbsdunia.com/pay' }} style={{ flex: 1 }} />
  )
}

export default MyWebComponent