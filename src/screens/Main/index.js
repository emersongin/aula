import { StyleSheet, Text, View } from 'react-native';
import Form from '../../components/Form';

export default function Main() {
	return (
		<View>
			<Text style={styles.text}>NOSSO IMC</Text>
			<Form/>
        </View>
	);
}
const styles = StyleSheet.create({
	text: {
		fontSize: 32,
		textAlign: "center",
		marginBottom: 40
	}
});
