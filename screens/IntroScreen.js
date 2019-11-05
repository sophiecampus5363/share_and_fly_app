import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Dimensions, AsyncStorage} from 'react-native';

const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameStyle: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
    },
};

const IntroScreen = props => {
    useEffect(() =>{
        async function getName() {
            const temps = await AsyncStorage.getItem('name');
            setName(temp);
        }
        getName();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('App');
        }, 5000);
    }, []);

    const[name, setName] = useState('');

    return(
        <View style={styleSheet.container}>
            <Text style={styleSheet.nameStyle}>{name}</Text>
        </View>
    );
}

IntroScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default IntroScreen;