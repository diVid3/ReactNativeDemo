import
  React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export class Landing extends Component {

  render = () => {

    return (

      <View style={styles.container}>        

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('BridgeProblem')}
          style={styles.button}>

          <Text>
            BridgeProblem
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: '#ddf'
  },
});
