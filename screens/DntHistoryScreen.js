import React from 'react';
import { ScrollView, StyleSheet, Text, FlatList, Image} from 'react-native';
import { ExpoLinksView } from '@expo/samples';


export default class DntHistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'Donation History',
  };

  state = {
    refreshing: false,
    data:['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'],
  };

  onEndReached = () => {
    this.setState(state => ({
      data:['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin']
    }));
  };

  onRefresh = () => {
    this.setState({
      data:['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'],
    });
  }



  render() {
    return (
      <FlatList
        data={[{key: 'http://ec2-54-175-206-210.compute-1.amazonaws.com/assets/donation_1.PNG'}, {key: 'http://ec2-54-175-206-210.compute-1.amazonaws.com/assets/donation_2.PNG'}]}
        horizontal={false}
        renderItem={({item}) => <Image
          style={{width: 340, height: 200, marginTop:10, marginLeft:10, marginBottom:10, marginRight:10}}
          source={{uri: item.key}}
        />}
      />
    );
  }
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
