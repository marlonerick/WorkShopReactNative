import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StackRoutes } from './stackRoutes'
import { Favorites } from '../pages/Favorites/Index'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#000',
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name='HomeTab'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' color='#000' size={size} />
                        }
                        return <Ionicons name='home-outline' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen
                name='Favorites'
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='heart' color='red' size={size} />
                        }
                        return <Ionicons name='heart-outline' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}