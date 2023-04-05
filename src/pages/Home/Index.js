import {
    StyleSheet, Text, SafeAreaView,
    View, TextInput, TouchableOpacity, FlatList
} from 'react-native'
import { Logo } from '../../components/logo';

import { Ionicons } from '@expo/vector-icons'
import { useState, useEffect } from 'react';

import api from '../../services/api'
import { FoodList } from '../../components/foodslist';

export function Home() {
    const [inputValue, setinputValue] = useState('')
    const [foods, setFoods] = useState([])

    function handleSearch() {
        console.log(inputValue)
    }

    useEffect(() => {

        async function fetchApi() {

            const response = await api.get("/foods")
            setFoods(response.data)

        }
        fetchApi();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>
                Encontre a Receita
            </Text>
            <Text style={styles.title}>
                que combina com você
            </Text>

            <View style={styles.form}>
                <TextInput
                    placeholder='Digite o nome da comida...'
                    style={styles.input}
                    value={inputValue}
                    onChangeText={(text) => setinputValue(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Ionicons name='search' size={28} color='#4CBE6C' />
                </TouchableOpacity>
            </View>

            <FlatList
                data={foods}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) =>
                    <FoodList data={item} />}
                showsVerticalScrollIndicator={false}
            />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0e0e0e'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingLeft: 8,
        paddingRight: 8,
    },
    input: {
        width: '90%',
        maxWidth: '90%',
        height: 54,
    }
});
