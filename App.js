import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screens/Main';

export default function App() {
	return (
		<View style={styles.container}>
			{/* <Header/> */}
			<MainScreen style={styles.mainScreen}/>
			{/* <Footer/> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		alignItems: "center",
		justifyContent: "center",
	}
});
