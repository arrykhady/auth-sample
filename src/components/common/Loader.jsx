import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loader = ({ color, size, loading, styles }) => {
    const loaderStyles = { ...defaultStyles, ...styles }
    return (
        <View style={loaderStyles.container}>
            <ActivityIndicator
                animating={loading}
                color={color}
                size={size}
                style={{
                    ...defaultStyles.indicator, ...loaderStyles.indicator
                }}
            />
        </View>
    )
}

export default Loader

Loader.defaultProps = {
    size: "large",
    color: "#FFFFFF",
    loading: false,
    styles: {}
}

const defaultStyles = StyleSheet.create({
    container: {},
    indicator: { opacity: 1.1 }
});