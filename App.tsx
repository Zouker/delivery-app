import {Provider as PaperProvider} from 'react-native-paper'
import {theme} from './App.style';
import {AppNavigator} from './src/app.navigator';

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <AppNavigator/>
        </PaperProvider>
    );
}
