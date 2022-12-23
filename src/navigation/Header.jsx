import React from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';

import Logo from '../components/common/Logo';


/**
 * 
 * @param {*} props 
 */
const Header = ({ title }) => {

    return (
        <View style={[styles.header_container, styles.header_shadow]}>
            <Text style={styles.header_title} numberOfLines={1}>
                {title || ""}
            </Text>

            <Logo
                styles={{
                    image: { width: 30, height: 30, margin: 0 }
                }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    header_container: {
        height: Platform.OS === 'ios' ? 64 : 54,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9f9',
        paddingTop: 1,
        paddingBottom: 1,
        paddingRight: 10,
        paddingLeft: 10,
    },
    header_shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3
    },
    header_title: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 18,
        fontWeight: '900',
        color: '#7367f0',
        letterSpacing: 1,
        marginRight: 1,
        marginLeft: 1,
    }
});

export default Header