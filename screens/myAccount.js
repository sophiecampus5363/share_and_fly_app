import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, Dimensions, AsyncStorage} from "react-native";
import * as navigation from "react-navigation";

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
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black',
    },
    label: {
        color: 'black',
    },
    input: {
        width: '50%',
        height : 40,
        borderColor: 'gray',
        borderWidth: 1,
    }
};

const myAccount = props => {

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.title}>Informations</Text>
            <Text style={styleSheet.text}>Prénom</Text>
            <Text style={styleSheet.text}>Description</Text>
            <Text style={styleSheet.text}>BlaBlaBla</Text>
            <Text style={styleSheet.text}>Numéro de téléphone</Text>
            <Text style={styleSheet.text}>adresse email</Text>
            <Text style={styleSheet.text}>pièce d'identité vérifiée</Text>
            <Text style={styleSheet.text}>nombre d'amis Facebook</Text>
            <Text style={styleSheet.text}>Véhicule</Text>
            <Text style={styleSheet.text}>type de véhicule</Text>
            <Text style={styleSheet.text}>Photo du véhicule</Text>
            <Text style={styleSheet.text}>Couleur du véhicule</Text>
            <Text style={styleSheet.text}>Ajouter un autre véhicule</Text>

        </View>
    );
};

myAccount.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(myAccount);