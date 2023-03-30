import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {Colours} from '../constants/styles';
import HomeHeader from '../components/headers/HomeHeader';
import CustomButton from '../components/CustomButton';

import CompanyGridTile from '../components/grid-tiles/CompanyGridTile';
import {COMPANYDATA} from '../components/data/DummyCompanyData';

function HomeScreen() {
  function renderCompanyGridTile(itemData) {
    return (
      <CompanyGridTile
        id={itemData.item.id}
        name={itemData.item.name}
        image={itemData.item.image}
        description={itemData.item.description}
        rating={itemData.item.rating}
        services={itemData.item.services}
        staff={itemData.item.staff}
        timesAvailable={itemData.item.timesAvailable}
        duration={itemData.item.duration}
        cost={itemData.item.cost}
      />
    );
  }

  return (
    <View style={styles.root}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.header}>{<HomeHeader first_name={'fname'} />}</View>
      <View style={styles.bodyContainer}>
        <View style={styles.topContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Available now</Text>
            <Text>View all</Text>
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              data={COMPANYDATA}
              keyExtractor={item => item.id}
              renderItem={renderCompanyGridTile}
              numColumns={4}
            />
            {/* <CompanyGridTile /> */}
            <View style={styles.buttonContainer}>
              {/* <CustomButton
                text="in top container"
                textColour={Colours.darkgreen}
                backgroundColour={Colours.lightturqouise}
              /> */}
            </View>
          </ScrollView>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.buttonContainer}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  alert('eat my booty');
                }}>
                <Text>hi</Text>
                <CustomButton
                  text="in bottom container"
                  textColour={Colours.darkgreen}
                  backgroundColour={Colours.lightturqouise}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  header: {
    flex: 1.2,
  },

  bodyContainer: {
    flex: 7,
    flexDirection: 'column',
    backgroundColor: 'white',

    borderColor: 'red',
    borderTopWidth: 1,
  },

  topContainer: {
    flex: 1,
    padding: 10,
  },

  bottomContainer: {
    flex: 1,
    padding: 10,

    borderColor: 'red',
    borderTopWidth: 1,
  },

  bodyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  bodyText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colours.darkturqouise,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
});
