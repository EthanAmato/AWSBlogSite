import "@aws-amplify/ui-react/styles.css";
import logo from './assets/react.svg'
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

//inversion of control a signOut method that logs users out
function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

//Means we have to log in to access this page
export default withAuthenticator(App);