import React from 'react';
import { UIManager } from 'NativeModules';
import { StyleSheet, Button, ScrollView, View, LayoutAnimation } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Section from '../components/section';
import Header from '../components/header';
import Contact from '../components/contact';
import store from '../state/store';

class HomeScreen extends React.Component {
  state = store.getState();

  constructor(props) {
    super(props);
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
    console.log(LayoutAnimation);
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    return (
      <ScrollView>
        <Button title="Details" onPress={() => this.props.navigation.navigate('Details')} />
        <Section style={styles.container}>
          <Section>
            <Header text="Invites" />
            {this.state.invites.map(person => {
              return <Contact key={person.id} person={person} />;
            })}
          </Section>
          <Section>
            <Header text="Friends" />
            {this.state.contacts.map(person => {
              return (
                <Contact
                  key={person.id}
                  person={person}
                  onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                    store.dispatch({
                      type: 'INVITE_SENT',
                      payload: person,
                    });
                  }}
                />
              );
            })}
          </Section>
        </Section>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: ({ props }) => {
      return (
        <View>
          <Header text="I am the detail Page" />
        </View>
      );
    },
  },
});
