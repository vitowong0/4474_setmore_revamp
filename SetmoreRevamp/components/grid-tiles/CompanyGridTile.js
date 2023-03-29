import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colours} from '../../constants/styles';
import {useNavigation} from '@react-navigation/native';

import dotdotdot from '../../assets/icons/dotdotdot.png';

function CompanyGridTile({
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
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <View style={styles.gridTileContainer}>
        <View style={styles.topRow}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.titleText}>{name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              alert('eat my capy');
            }}>
            <View>
              <Image style={styles.dotdotdot} source={dotdotdot} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CompanyDetailsScreen');
            }}>
            <Image style={styles.image} source={image} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CompanyGridTile;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  gridTileContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  topRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    marginBottom: 2,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 700,
    color: Colours.darkturqouise,
  },

  dotdotdot: {
    height: 18,
    width: 35,
    opacity: 0.5,
  },

  imageContainer: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: 250,
    borderRadius: 30,
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
