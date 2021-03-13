import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { View, Text, Button } from "react-native"
import authContext from "../../contexts/authContext";

const Login = () => {

    const { signIn } = useContext(authContext);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Login
            </Text>
            <Button
                title="Login"
                onPress={signIn}
            />
        </View>
    )
}

export default Login