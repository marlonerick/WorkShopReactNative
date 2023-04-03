import { StyleSheet, Text, View } from 'react-native'

export function Favorites() {

    return (
        <View style={styles.container}>
            <Text>
                Pagina de Favoritos !!
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
