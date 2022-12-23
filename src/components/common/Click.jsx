import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Click = ({ clickIcon: ClickIcon, label, link, onClicked, styles }) => {

    const defaultStyles = (link ? defaultLinkStyles : defaultBtnStyles)
    const clickStyles = { ...defaultStyles, ...styles }

    return (
        <TouchableOpacity
            style={{ ...defaultStyles.container, ...clickStyles.container }}
            onPress={() => { if (onClicked) onClicked() }}
            activeOpacity={0.5}
        >
            {(ClickIcon) ? (
                <ClickIcon />
            ) : (
                <Text
                    style={{ ...defaultStyles.label, ...clickStyles.label }}
                    numberOfLines={1}
                >
                    {label}
                </Text>
            )}
        </TouchableOpacity>
    );
}

export default Click

Click.defaultProps = {
    label: "",
    clickIcon: null,
    link: false,
    styles: {}
}

const defaultBtnStyles = StyleSheet.create({
    container: {
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingTop: 7,
        paddingBottom: 10,
        borderRadius: 5,
        backgroundColor: '#58c4fe',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

const defaultLinkStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 15,
        fontWeight: '900',
        color: '#58c4fe',
    }
});