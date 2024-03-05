import {View, Text, Image} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {OtherProfileStyle} from './OtherProfileStyle';
import profilelock from '../../constants/images/profile.png';
import profileimgs from '../../constants/images/profileimg.png';
import {ImageData, ParamsList} from '../../../type';
type OtherProfileScreenRouteProp = RouteProp<ParamsList, 'OtherProfile'>;

export default function OtherProfile({route}: ImageData) {
  const {event} = route.params;
  console.log('event', event);

  return (
    <View style={OtherProfileStyle.container}>
      <View style={{flex: 1}}>
        <View style={OtherProfileStyle.profileName}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={profilelock} style={OtherProfileStyle.lock} />
            <Text style={OtherProfileStyle.nameheading}>{event.userName}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {event?.profileImageUrl ? (
              <Image
                source={{uri: event?.profileImageUrl}}
                style={{
                  width: 100,
                  borderRadius: 100,
                  height: 100,
                  marginTop: 10,
                }}
              />
            ) : (
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  backgroundColor: 'gray',
                }}
              />
            )}
            <Text style={OtherProfileStyle.username}>{event?.userName}</Text>
            <Image source={profileimgs} style={{marginTop: 30}} />
            <View>
              <Image
                source={{uri: event?.downloadURL}}
                style={OtherProfileStyle.profileimageall}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
