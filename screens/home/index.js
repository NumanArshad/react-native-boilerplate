import React, { useContext } from "react";
import { View, Text, Button } from "react-native"
import authContext from "../../contexts/authContext";

const Home = () => {

    const {signOut} = useContext(authContext);
    return (
        <View>
            <Text>
                ...Home
            </Text>
            <Button title="logout"
                onPress={signOut} />
        </View>
    )
}

export default Home