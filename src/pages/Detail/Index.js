import { StyleSheet, Text, View } from 'react-native'

export function Detail() {

    return (
        <View style={styles.container}>
            <Text>
                Pagina Detalhes da Receita !!
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
