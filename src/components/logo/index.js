import { StyleSheet, Text, } from 'react-native'

import { View } from 'moti'

export function Logo() {
    return (
        <View
            style={style.logoArea}
            from={{
                opacity: 0,
                translateX: -50,

            }}
            animate={{
                opacity: 1,
                translateX: 0,

            }}
            transition={{
                type: 'timing',
                duration: 900,
            }}

        >
            <Text style={style.logoTitle}>
                Receita Fácil
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    logoArea: {
        backgroundColor: '#4CbE6C',
        alignSelf: 'flex-start',
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 32,
        marginBottom: 8,
    },
    logoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
})