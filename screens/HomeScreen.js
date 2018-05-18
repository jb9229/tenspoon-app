import React from 'react';
import {
  NativeModules,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Switch,
  DeviceEventEmitter,
} from 'react-native';
import { WebBrowser } from 'expo';
import { Foundation } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    switchValue: false,
  };

  // componentWillMount() {
  //   DeviceEventEmitter.addListener('LockScreenView', function(e: Event) {
  //     // handle event.
  //     console.log("== Debug: Received LockScreen View Open");
  //   });
  // }

  _handleToggleSwitch = () =>{
      this.setState(state => ({
        switchValue: !state.switchValue,
      }));


      if(this.state.switchValue)
      {
        NativeModules.NativeMenu.startLockScreenService();
        color= Colors.tabIconSelected
        console.log("startLockViewService()")
      }
      else
      {
        NativeModules.NativeMenu.stopLockScreenService();
        console.log("stopLockViewService();")
      }
  }

  render() {
    let iconName  = 'foot';
    return (
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text>십시 일반</Text>
          <Foundation
            name={iconName}
            size={228}
            style={{ marginBottom: -3 }}
            color={this.state.switchValue? Colors.tabIconSelected : Colors.tabIconDefault}
          />
          <Switch
            onValueChange={this._handleToggleSwitch}
            value={this.state.switchValue}
          >
          </Switch>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
