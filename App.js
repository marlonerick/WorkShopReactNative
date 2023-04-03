import { NavigationContainer } from '@react-navigation/native';
import { Teste } from './src/components/teste/Index';
import { Routes } from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
