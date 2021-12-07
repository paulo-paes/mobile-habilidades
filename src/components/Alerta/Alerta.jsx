import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Snackbar, Button } from 'react-native-paper'

export default function Alerta({text, visible, setVisible, duration = 7000}) {

    function fechar(){
        setVisible(false)
    }

    return (
        <View style={styles.container}>
          <Snackbar
            visible={visible}
            onDismiss={fechar}
            action={{
              label: 'Fechar',
              onPress: () => {
                fechar()
              },
            }}
            duration={duration}
            >
            {text}
          </Snackbar>
        </View>
    );
};
    
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'space-between',
    },
});

