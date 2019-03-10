import React  from 'react'
import { View } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

class CurrentRides extends React.Component{
    render(){
        return(
            <Container>
            <Content>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                  </Left>
                  <Body>
                    <Text>Sankhadeep</Text>
                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Container>
        )
    }
}
export default CurrentRides