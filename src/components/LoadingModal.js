import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Modal } from 'react-native'

const LoadingModal = ({visible}) => {
    return (
        <Modal onRequestClose={() => null} visible={visible} transparent>
            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ borderRadius: 10, backgroundColor: 'white', padding: 25 }}>
                    <ActivityIndicator size='large' style={{marginVertical: 20}}/>
                    <Text style={{ fontSize: 15 }}>Loading...</Text>
                </View>
            </View>
        </Modal>
    )
}

export default LoadingModal;