import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Colours} from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

import dotdotdot from '../../assets/icons/dotdotdot.png';
// import whiteheartfill from '../../assets/icons/white_heart_fill.png';
// import whiteheartoutline from '../../assets/icons/white_heart_outline.png';

function MiniCompanyGridTile({
  id,
  name,
  image,
  description,
  rating,
  services,
  staff,
  timesAvailable,
  duration,
  cost,
  heartIcon,
}) {
  const navigation = useNavigation();

  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
    <View style={styles.root}>
      <View style={styles.gridTileContainer}>
        <View style={styles.topRow}>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.titleText}>{name}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                alert('hide and shit');
              }}>
              <Image style={styles.dotdotdot} source={dotdotdot} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CompanyDetailsScreen');
            }}>
            <Image style={styles.image} source={image} />
            <TouchableOpacity
              onPress={() => {
                alert('Remove/add from favourites?');
              }}>
              <Image style={styles.heartIcon} source={heartIcon} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default MiniCompanyGridTile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  gridTileContainer: {
    flex: 1,
    paddingLeft: 20,
  },

  topRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 2,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 700,
    color: Colours.darkturqouise,
  },

  dotdotdot: {
    height: 18,
    width: 30,
    opacity: 0.5,
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: 300,
    height: 215,
    borderRadius: 30,
  },

  heartIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: 20,
    right: 20,
  },
});

// const serviceItems = ServiceInfo.map(service => {
//   const serviceOverview = new ServiceInfoOverview(
//     service.id,
//     service.name,
//     service.image,
//     service.description,
//     service.rating,
//     service.services,
//     service.staff,
//     service.timesAvailable,
//     service.duration,
//     service.cost,
//   );

//   return (
//     <TouchableOpacity>
//       <View style={styles.test}>
//         <View key={service.id}>
//           <Text>{serviceOverview.name}</Text>
//           <Text>{serviceOverview.description}</Text>
//           <Text>Rating: {serviceOverview.rating}</Text>
//           <Text>Services: {serviceOverview.services.join(', ')}</Text>
//           <Text>Staff: {serviceOverview.staff.join(', ')}</Text>
//           <Text>
//             Times Available: {serviceOverview.timesAvailable.join(', ')}
//           </Text>
//           <Text>Duration: {serviceOverview.duration.join(', ')}</Text>
//           <Text>Cost: {serviceOverview.cost.join(', ')}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// });
