import
  React, {
  Component
} from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export class MountItem extends Component {

  render = () => {

    return (

      <View
        style={styles.row}>

        <View style={[
          styles.rect,
          {
            height: this.props.height,
            width: this.props.width
          }
        ]}>

          <Text>
            {this.props.name}
          </Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  rect: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddf',
  },
});