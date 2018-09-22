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
  AsyncStorage
} from 'react-native';
import { WebBrowser } from 'expo';
import { Foundation } from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';


const PERSISTKEY_LOCKSCREEN = '@LockScreenStore:screenLockValueKey';
const SCREENLOCKVALUE_TRUE  = 'true';
const SCREENLOCKVALUE_FALSE = 'false';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    switchValue: false,
  };

  componentDidMount(){
    this._isSetLockScreen();
  }

  _handleToggleSwitch = () =>{
      if(this.state.switchValue)
      {
        //Save Lockscreen Set Value
        AsyncStorage.setItem(PERSISTKEY_LOCKSCREEN, SCREENLOCKVALUE_FALSE);


        //
        NativeModules.NativeMenu.stopLockScreenService();
      }
      else
      {
        //Save Lockscreen Set Value
        AsyncStorage.setItem(PERSISTKEY_LOCKSCREEN, SCREENLOCKVALUE_TRUE);


        //
        NativeModules.NativeMenu.startLockScreenService();
        color= Colors.tabIconSelected
      }

      this.setState(state => ({
        switchValue: !state.switchValue,
      }));
  }

  async _isSetLockScreen () {
      try {
        const isSetStr = await AsyncStorage.getItem(PERSISTKEY_LOCKSCREEN);

        if(isSetStr != null)
        {
          var isSet = (isSetStr==='true');
console.log("Debug:: " + isSet);
            this.setState(state => ({
              switchValue: isSet,
            }));
        }

      } catch (error) {
        console.log("Error resetting data" + error);
        return false;
      }

      console.log("isSetLockkScreenValue:" + this.state.switchValue);
      return this.state.switchValue;
  }


  render() {
    let iconName          = 'foot';

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
