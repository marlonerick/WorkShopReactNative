import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native'

import { Entypo } from '@expo/vector-icons'

export function Detail() {
    const route = useRoute()
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => console.log("teste")}>
                    <Entypo name="heart" size={28} color="#FF4141" />
                </Pressable>
            )
        })

    }, [navigation, route.params?.data])
    return (
        <View style={styles.container}>
            <Text>
                Pagina Detalhes da Receita !!
            </Text>
            <Text>
                {route.params?.data.cover}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCC',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
