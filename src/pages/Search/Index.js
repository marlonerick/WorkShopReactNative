import { StyleSheet, Text, View, FlatList, Alert } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import api from '../../services/api';
import { FoodList } from '../../components/foodslist';

export function Search() {

    const route = useRoute()

    const [receipes, setReceipes] = useState([])

    useEffect(() => {
        async function FetchReceipes() {
            const response = await api.get(`/foods?name_like=${route.params?.name}`)

            setReceipes(response.data)
        }

        FetchReceipes()

    }, [route.params?.name])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={receipes}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <FoodList data={item} />}
                ListEmptyComponent={() => Alert.alert("Desculpe", "Não conseguimos encontrar o que vocês esta procurando.")}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36,
    },
});
