import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {Colours} from '../constants/styles';
import HomeHeader from '../components/headers/HomeHeader';
import CustomButton from '../components/CustomButton';

import MiniCompanyGridTile from '../components/grid-tiles/MiniCompanyGridTile';
import {COMPANYDATA} from '../components/data/DummyCompanyData';

function HomeScreen() {
  function renderMiniCompanyGridTile(itemData) {
    return (
      <MiniCompanyGridTile
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
          <View style={(style = styles.topTextContainer)}>
            <Text style={styles.bigGreyText}>Available now</Text>
            <TouchableOpacity
              onPress={() => {
                alert('bringing you to View all page');
              }}>
              <Text style={styles.smallGreenText}>View all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              data={COMPANYDATA}
              keyExtractor={item => item.id}
              renderItem={renderMiniCompanyGridTile}
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
    paddingVertical: 10,
  },

  topTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    paddingVertical: 5,
    paddingHorizontal: 20,

    // borderColor: 'blue',
    // borderWidth: 1,
  },

  bigGreyText: {
    fontSize: 20,
    fontWeight: 800,
    color: Colours.westerngrey,
  },

  smallGreenText: {
    fontSize: 16,
    fontWeight: 700,
    color: Colours.darkturqouise,
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
