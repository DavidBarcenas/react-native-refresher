import React from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native';

export const AlertScreen = () => {
    const showAlert = () => {
        Alert.alert(
            "Delete item",
            "Are you sure?",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        )
    }

    return (
        <View style={styles.container}>
            <Button title='Show alert' onPress={showAlert} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center"
    }
  });