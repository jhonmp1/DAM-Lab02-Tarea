/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Alert, StyleSheet, TouchableOpacity, Text,TextInput, View, Image} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
    
  }

  changeTextInput = text => {
    this.setState({textValue: text});
  };

  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credenciales', `bienvenido :${username}!! ...... esta es tu contraseña:${password}`);
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.text}>
          <Text> Bienvenidos a Doctopst!! </Text>
          <Image 
          style={{height: 200, width: 200}}
          source={require('./img/doc.png')} />

        </View>
        <Text> Ingrese su usuario </Text>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'ingrese su usuario'}
          style={styles.input}
        />
        <Text> Ingrese su contraseña </Text>
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'ingrese su contraseña'}
          secureTextEntry={true}
          style={styles.input}
        />


        <TouchableOpacity style={styles.button} onPress={this.onLogin.bind(this)}>
          <Text> ingresar</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    alignItems: 'center',
    padding: 10,
  },

  button: {
    top: 10,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer:{
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: '#FF00FF'
  },
});