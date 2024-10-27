import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Login() {
	return (
		<View style={styles.container}>
			<Text> It worked </Text>
			<Link href="/register">Register</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
