import { StyleSheet, Text, View } from 'react-native'

export function Search() {

    return (
        <View style={styles.container}>
            <Text>
                Pagina Busca !!
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
