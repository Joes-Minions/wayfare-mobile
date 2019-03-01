import React from 'react';
import { Text, Dimensions } from 'react-native';
import { View, List, ListItem, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const SearchResults = ({ predictions, getSelectedRouteAddresses })=> {
	const handleSelectedAddress = (placeId) => {
		getSelectedRouteAddresses(placeId);
	}

   return(
      <View style={styles.searchResultsWrapper}>
         <List 
            dataArray={predictions}
            renderRow={(item)=>
               <View>
                  <ListItem onPress={()=>handleSelectedAddress(item.place_id)} button avatar>
                     <Left style={styles.leftContainer}>
                        <Icon style={styles.leftIcon} name="location-on" />
                     </Left>
                     <Body>
                        <Text style={styles.primaryText}>{item.structured_formatting.main_text}</Text>
                        <Text style={styles.secondaryText}>{item.structured_formatting.secondary_text}</Text>
                     </Body>
                  </ListItem>
               </View>
            }
         />
      </View>

   );
};

var width = Dimensions.get("window").width; //full width

const styles = {
   searchResultsWrapper: {
      top: 200,
      position: 'absolute',
      width: width,
      height: 1000,
      backgroundColor: '#fff',
      opacity: 0.9
   },
   primaryText: {
      fontWeight: 'bold',
      color: '#373737'
   },
   secondaryText: {
      fontStyle: 'italic',
      color: '#7D7D7D',
   },
   leftContainer: {
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      borderLeftColor: '#7D7D7D'
   },
   leftIcon: {
      fontSize: 20,
      color: '#7D7D7D',
   },
   distance: {
      fontSize: 12,
   }
};

export default SearchResults;
