import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


export async function getFavorites(key) {
    const favorites = await AsyncStorage.getItem(key)

    return JSON.parse(favorites) || []

}

export async function saveFavorites(key, newItem) {
    let myFavorites = await getFavorites(key)

    let hasItem = myFavorites.some(item => item.id === newItem.id)

    if (hasItem) {
        Alert.alert("Favorito", "Esse item ja esta no seus favoritos")
        return
    }

    myFavorites.push(newItem)

    await AsyncStorage.setItem(key, JSON.stringify(myFavorites))

    Alert.alert("Sucesso", "Agora ele esta na sua lista de favoritos")
}

export async function removeItem(id) {

    let receips = await getFavorites("@appreceitas")

    let myFavorites = receips.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites))

    Alert.alert("Removido", "Foi removido da sua lista de favoritos")
    return myFavorites
}

export async function isFavorite(receipe) {

    let myReceipes = await getFavorites("@appreceitas")

    const favorites = myReceipes.find(item => item.id === receipe.id)

    if (favorites) {
        return true
    }
    return false


}

