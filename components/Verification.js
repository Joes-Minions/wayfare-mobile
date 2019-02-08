import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import { Button, Spinner } from './common';

// TODO TYUN: Need to setup Verification boolean in Session redux state
// Then, we need to mapStateToProps and read the verification state to
// determine what we render on this page -- will do once DB setup
class Verification extends Component {
   // Will delete later and replace with Redux state
   state = {
      verified: false,
      image: null,
      uploading: false
   };

   _pickImage = async () => {
      const {
         status: cameraRollPerm
      } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
      // only if user allows permission to camera roll
      if (cameraRollPerm === 'granted') {
         let pickerResult = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 3],
         });
  
         //this._handleImagePicked(pickerResult);
      }
   };

   _takePhoto = async () => {
      const {
         status: cameraPerm
      } = await Permissions.askAsync(Permissions.CAMERA);

      const {
         status: cameraRollPerm
      } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
      // only if user allows permission to camera AND camera roll
      if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
         let pickerResult = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
         });
  
         //this._handleImagePicked(pickerResult);
      }
   };

   renderPageNotVerified() {
      const { image } = this.state;

      return (
         <View style={styles.contentStyle}>
            <Text>
               In order to continue to use this app, you must verify your Driver's License.
            </Text>
            <Button
               label="Upload Driver's License Photo"
               onPress={this._pickImage}
            />
            <Button
               label="Take Driver's License Photo"
               onPress={this._takePhoto}
            />
            {image &&
               <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
         </View>
      );
   }

   renderVerification() {
      if (this.state.verified) {
         return (
            <View style={styles.contentStyle}>
               <Image
                  style={styles.verifySuccessImgStyle}
                  source={require('../assets/party_popper.png')}
               />
               <Text style={styles.verifySuccessTextStyle}>
                  You have been successfully verified!
               </Text>
            </View>
         );
      }

      return this.renderPageNotVerified();
   }

   render() {
      return (
         <View style={styles.containerStyle}>
            {this.renderVerification()}
         </View>
      );
   }
}

const styles = {
   containerStyle: {
      flex: 1,
      backgroundColor: '#E4EDF2'
   },
   contentStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   verifySuccessImgStyle: {
      height: 100,
      width: 100,
      paddingBottom: 30
   },
   verifySuccessTextStyle: {
      fontSize: 18,
      color: 'black'
   }
};

export default Verification;
