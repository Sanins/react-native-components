import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';

import styles from './styles/sharedStyles.js';

function Story() {
  return (
    <ScrollView
      ref={(a) => (this.scroll = a)}
      style={styles.storyContainer}
      contentContainerStyle={styles.storyInnerContainer}
      stickyHeaderIndices={[0, 1]}
      indicatorStyle="white"
      pagingEnabled="true"
      scrollsToTop="true">
      <Image
        style={styles.storyImageSmall}
        source={require('../images/shutterstock_211091626.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Our Story</Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
          </Text>
        </View>
      </View>
      <View style={styles.body}>
        <Pressable
          onPress={() =>
            this.scroll.scrollToEnd({animated: true, duration: 500})
          }>
          <Text style={styles.sectionDescriptionStory}>Go To End</Text>
        </Pressable>

        <Text style={styles.sectionDescriptionStory}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          elementum lacus vitae eros molestie convallis. Pellentesque feugiat eu
          velit faucibus congue. Praesent mauris turpis, commodo eget erat vel,
          dignissim elementum diam. Sed efficitur nisl sed commodo consectetur.
          Nullam libero felis, rhoncus at leo vel, dapibus rutrum magna.
          Praesent a sapien in tellus placerat congue at eu dolor. Nullam id est
          sollicitudin, dapibus diam et, maximus leo. Donec efficitur nisl eu
          nisl sagittis, vitae porttitor neque convallis.
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          elementum lacus vitae eros molestie convallis. Pellentesque feugiat eu
          velit faucibus congue. Praesent mauris turpis, commodo eget erat vel,
          dignissim elementum diam. Sed efficitur nisl sed commodo consectetur.
          Nullam libero felis, rhoncus at leo vel, dapibus rutrum magna.
          Praesent a sapien in tellus placerat congue at eu dolor. Nullam id est
          sollicitudin, dapibus diam et, maximus leo. Donec efficitur nisl eu
          nisl sagittis, vitae porttitor neque convallis. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse elementum lacus vitae
          eros molestie convallis. Pellentesque feugiat eu velit faucibus
          congue. Praesent mauris turpis, commodo eget erat vel, dignissim
          elementum diam. Sed efficitur nisl sed commodo consectetur. Nullam
          libero felis, rhoncus at leo vel, dapibus rutrum magna. Praesent a
          sapien in tellus placerat congue at eu dolor. Nullam id est
          sollicitudin, dapibus diam et, maximus leo. Donec efficitur nisl eu
          nisl sagittis, vitae porttitor neque convallis.
        </Text>
        <Text style={styles.sectionDescriptionStory}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          elementum lacus vitae eros molestie convallis. Pellentesque feugiat eu
          velit faucibus congue. Praesent mauris turpis, commodo eget erat vel,
          dignissim elementum diam. Sed efficitur nisl sed commodo consectetur.
          Nullam libero felis, rhoncus at leo vel, dapibus rutrum magna.
          Praesent a sapien in tellus placerat congue at eu dolor. Nullam id est
          sollicitudin, dapibus diam et, maximus leo. Donec efficitur nisl eu
          nisl sagittis, vitae porttitor neque convallis.
        </Text>
        <Text style={styles.sectionDescriptionStory}>End of the story!</Text>
        <Pressable
          onPress={() => this.scroll.scrollTo({x: 0, y: 0, animated: true})}>
          <Text style={styles.sectionDescriptionStory}>Go to Top</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default Story;
