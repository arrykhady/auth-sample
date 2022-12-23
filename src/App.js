import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './navigation/Navigation';

import { AuthProvider } from './providers/authContext';


const App = () => {

	return (
		<AuthProvider>
			<SafeAreaView style={{ flex: 1, backgroundColor: '#307ecc' }}>
				<StatusBar
					backgroundColor="#307ecc"
					barStyle="light-content"
				/>

				<NavigationContainer>
					<Navigation />
				</NavigationContainer>
			</SafeAreaView>
		</AuthProvider>
	)
	
}

export default App
