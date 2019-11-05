import React, {useState, Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, Dimensions, AsyncStorage, TouchableOpacity} from "react-native";
import * as navigation from "react-navigation";
import {ImageBackground} from 'react-native' ;

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightskyblue',
    },
    title: {
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
    },
    caption: {
        color: 'black',
        fontSize: 14,
        textAlign: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },


};

const Accueil = props => {

return (

    <View style={styleSheet.container}>

        <Text style={styleSheet.title}>Vous allez à l'aéroport ou vous en revenez?</Text>
        <Text style={styleSheet.caption}>Trouvez un covoiturage dédié
            à deux pas de votre terminal!</Text>

        <TouchableOpacity style={styleSheet.button}>
        <Text> Proposer un trajet </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styleSheet.button}>
              <Text> Chercher un trajet </Text>
        </TouchableOpacity>


    </View>

);
};

Accueil.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(Accueil);

