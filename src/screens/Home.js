import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import { Card, Text } from 'react-native-paper';
import CustomBackgroundContainer from '../../components/Theme';
import { BlurView } from '@react-native-community/blur';
import { Avatar } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomRatingBar from '../Components/CustomRatingBar/CustomRatingBar';

const Home = () => {

  return (
    <CustomBackgroundContainer>
      <Text style={{
        color: '#000', fontSize: 25, fontWeight: 900, marginLeft: 12,
        marginVertical: 12
      }}>Welcome</Text>
      <ScrollView>
        <Card
          onPressIn={() => console.log('Clicked')}
          mode="elevated"
          style={{ marginHorizontal: 25, marginVertical: 20, backgroundColor: '#fff', }}
          elevation={5}
        >
          <ImageBackground
            source={require('../assets/common/MultiTshirts.webp')}
            style={{ height: 200, flex: 1 }}
            resizeMode="cover"
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{
                marginRight: 40,
                borderTopRightRadius: 140,
                overflow: 'hidden',
                paddingBottom: 17,
                paddingHorizontal: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}>
                <BlurView
                  style={{
                    position: 'absolute',
                    // top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,

                  }}
                  blurType='light'
                  blurAmount={10}
                  reducedTransparencyFallbackColor="white"
                />
                <View
                  style={{
                    flexDirection: 'column',

                  }}>
                  <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>T-Shirts</Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          <Card.Content style={{ marginTop: 10 }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              {/* <Text variant="titleMedium">By -</Text> */}
              <View>
                <Avatar.Image size={40} source={require('../assets/avatar/male.png')} />
              </View>
              <View style={{ flex: 1, marginHorizontal: 10, }}>

                <Text variant="titleMedium"
                  numberOfLines={1}
                >Rohit Pratap Singh</Text>
                <CustomRatingBar />
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialCommunityIcons name="map-marker" size={15} color="black" />
                  <Text style={{ fontSize: 13 }}>Indore (M.P)</Text>
                </View>

                <Text variant="bodyMedium" style={{
                  color: '#808080',
                  fontSize: 13
                }}>Posted on 15/5/24</Text>

              </View>
            </View>

          </Card.Content>
        </Card>

        <Card
          onPressIn={() => console.log('Clicked')}
          mode="elevated"
          style={{ marginHorizontal: 20, marginVertical: 20, backgroundColor: '#fff' }}
          elevation={5}
        >
          <ImageBackground
            source={require('../assets/common/shoes.jpg')}
            style={{ height: 232, flex: 1 }}
            resizeMode="cover"
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{
                marginRight: 40,
                borderTopRightRadius: 140,
                overflow: 'hidden',
                paddingBottom: 17,
                paddingHorizontal: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}>
                <BlurView
                  style={{
                    position: 'absolute',
                    // top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,

                  }}
                  blurType='light'
                  blurAmount={10}
                  reducedTransparencyFallbackColor="white"
                />
                <View
                  style={{
                    flexDirection: 'column',

                  }}>
                  <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>Shoes</Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          <Card.Content style={{ marginTop: 10 }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{}}>
                <Avatar.Image size={36} source={require('../assets/avatar/female2.jpg')} />
              </View>
              <View style={{ flex: 1, marginHorizontal: 10, }}>

                <Text variant="titleMedium"
                  numberOfLines={1}
                >Megha Joshi</Text>
                <CustomRatingBar />
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialCommunityIcons name="map-marker" size={15} color="black" />
                  <Text style={{ fontSize: 13 }}>Indore (M.P)</Text>
                </View>
                <Text variant="bodyMedium" style={{
                  color: '#808080',
                  fontSize: 13
                }}>Posted on 15/5/24</Text>

              </View>
            </View>

          </Card.Content>
        </Card>

        <Card
          onPressIn={() => console.log('Clicked')}
          mode="elevated"
          style={{ marginHorizontal: 20, marginVertical: 20, backgroundColor: '#fff' }}
          elevation={5}
        >
          <ImageBackground
            source={require('../assets/common/Books.jpg')}
            style={{ height: 232, flex: 1 }}
            resizeMode="cover"
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{
                marginRight: 40,
                borderTopRightRadius: 140,
                overflow: 'hidden',
                paddingBottom: 17,
                paddingHorizontal: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}>
                <BlurView
                  style={{
                    position: 'absolute',
                    // top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,

                  }}
                  blurType='light'
                  blurAmount={10}
                  reducedTransparencyFallbackColor="white"
                />
                <View
                  style={{
                    flexDirection: 'column',

                  }}>
                  <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>Books</Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          <Card.Content style={{ marginTop: 10 }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{}}>
                <Avatar.Image size={36} source={require('../assets/avatar/female2.jpg')} />
              </View>
              <View style={{ flex: 1, marginHorizontal: 10, }}>

                <Text variant="titleMedium"
                  numberOfLines={1}
                >Riya Sharma</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialCommunityIcons name="map-marker" size={15} color="black" />
                  <Text style={{ fontSize: 13 }}>Indore (M.P)</Text>
                </View>
                <Text variant="bodyMedium" style={{
                  color: '#808080',
                  fontSize: 13
                }}>Posted on 15/5/24</Text>

              </View>
            </View>

          </Card.Content>
        </Card>

        <Card
          onPressIn={() => console.log('Clicked')}
          mode="elevated"
          style={{ marginHorizontal: 20, marginVertical: 20, backgroundColor: '#fff' }}
          elevation={5}
        >
          <ImageBackground
            source={require('../assets/common/phone.jpg')}
            style={{ height: 232, flex: 1 }}
            resizeMode="cover"
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{
                marginRight: 40,
                borderTopRightRadius: 140,
                overflow: 'hidden',
                paddingBottom: 17,
                paddingHorizontal: 10,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
              }}>
                <BlurView
                  style={{
                    position: 'absolute',
                    // top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,

                  }}
                  blurType='light'
                  blurAmount={10}
                  reducedTransparencyFallbackColor="white"
                />
                <View
                  style={{
                    flexDirection: 'column',

                  }}>
                  <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>SmartPhone</Text>
                </View>
              </View>
            </View>
          </ImageBackground>

          <Card.Content style={{ marginTop: 10 }}>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              {/* <Text variant="titleMedium">By -</Text> */}
              <View style={{}}>
                <Avatar.Image size={36} source={require('../assets/avatar/female2.jpg')} />
              </View>
              <View style={{ flex: 1, marginHorizontal: 10, }}>

                <Text variant="titleMedium"
                  numberOfLines={1}
                >Megha Joshi</Text>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                  <MaterialCommunityIcons name="map-marker" size={15} color="black" />
                  <Text style={{ fontSize: 13 }}>Indore (M.P)</Text>
                </View>
                <Text variant="bodyMedium" style={{
                  color: '#808080',
                  fontSize: 13
                }}>Posted on 15/5/24</Text>

              </View>
            </View>

          </Card.Content>
        </Card>

        <Card
          onPressIn={() => console.log('Clicked')}
          mode="elevated"
          style={{ marginHorizontal: 20, marginVertical: 20, backgroundColor: '#fff' }}
          elevation={5}
        >
          <ImageBackground
            source={require('../assets/common/TV.jpg')}
            style={{ height: 232, flex: 1 }}
            resizeMode="cover"
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{
                marginRight: 40,
                borderTopRightRadius: 140,
                overflow: 'hidden',
                paddingBottom: 30,
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',

              }}>
                <BlurView
                  style={{
                    position: 'absolute',
                    // top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,

                  }}
                  blurType='light'
                  blurAmount={10}
                  reducedTransparencyFallbackColor="white"
                />
                <View
                  style={{
                    flexDirection: 'column',

                  }}>
                  <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>Television</Text>
                </View>
              </View>
            </View>
          </ImageBackground>



          <Card.Content>
            <Text variant="titleMedium">Card title</Text>
            <Text variant="bodyMedium"></Text>
          </Card.Content>

        </Card>

        <Card
          onPressIn={() => console.log('Clicked')}
          mode="elevated"
          style={{ marginHorizontal: 20, marginVertical: 20, backgroundColor: '#fff' }}
          elevation={5}
        >
          <ImageBackground
            source={{ uri: 'https://picsum.photos/400' }}
            style={{ height: 232, flex: 1 }}
            resizeMode="cover"
          >
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View style={{
                marginRight: 40,
                borderTopRightRadius: 140,
                overflow: 'hidden',
                paddingBottom: 30,
                paddingHorizontal: 20,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',

              }}>
                <BlurView
                  style={{
                    position: 'absolute',
                    // top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,

                  }}
                  blurType='light'
                  blurAmount={10}
                  reducedTransparencyFallbackColor="white"
                />
                <View
                  style={{
                    flexDirection: 'column',

                  }}>
                  <Text style={{ color: '#fff', fontSize: 22, fontWeight: '700' }}>T-Shirt</Text>
                </View>
              </View>
            </View>
          </ImageBackground>



          <Card.Content>
            <Text variant="titleMedium">Card title</Text>
            <Text variant="bodyMedium"></Text>
          </Card.Content>

        </Card>
      </ScrollView>
    </CustomBackgroundContainer >
  )
}

export default Home;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
    fontSize: 22
  },
  image: {
    flex: 1,
    width: '395',
    height: '720'
  }
})