import
  React, {
  Component,
} from 'react';

import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

const itemsMock = [
  { name: 'item0', height: 100, width: 100 },
  { name: 'item1', height: 124, width: 142 },
  { name: 'item2', height: 170, width: 112 },
  { name: 'item3', height: 137, width: 200 },
  { name: 'item4', height: 200, width: 173 },
  { name: 'item5', height: 127, width: 178 },
  { name: 'item6', height: 189, width: 144 },
  { name: 'item7', height: 184, width: 137 },
  { name: 'item8', height: 129, width: 135 },
  { name: 'item9', height: 157, width: 189 },
  { name: 'item10', height: 128, width: 167 },
  { name: 'item11', height: 184, width: 159 },
  { name: 'item12', height: 106, width: 157 },
  { name: 'item13', height: 151, width: 159 },
  { name: 'item14', height: 140, width: 159 },
];

export class LayoutTest extends Component {

  flatListRef = null;
  itemHeights = {};
  didScroll = false;

  getItemHeights = (index) => {

    let offset = 0;

    for (const i in this.itemHeights) {

      if (i >= index) {
        return offset;
      }

      offset += this.itemHeights[i];
    }

    return offset;
  };

  scrollToItem = (index) => {

    if (!this.flatListRef) {
      return;
    }

    const offset = this.getItemHeights(index);

    this.flatListRef.scrollToOffset({
      offset: offset,
      animated: true,
    });
  };

  onItemLayout = (event, index) => {

    this.itemHeights[index] = event.nativeEvent.layout.height;

    if (!this.didScroll && Object.entries(this.itemHeights).length === itemsMock.length) {
      this.scrollToItem(7);
      this.didScroll = true;
    }
  };

  render = () => {

    return (

      <FlatList
        ref={(ref) => this.flatListRef = ref}
        contentContainerStyle={styles.container}
        data={itemsMock}
        keyExtractor={(item) => item.name}
        renderItem={({item, index}) =>

          <View
            style={styles.row}
            onLayout={(event) => this.onItemLayout(event, index)}>

            <View style={[
              styles.rect,
              {
                height: item.height,
                width: item.width
              }
            ]}>

              <Text>
                {item.name}
              </Text>

            </View>
          </View>
        }>

      </FlatList>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
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
