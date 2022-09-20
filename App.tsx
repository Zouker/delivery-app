import {Provider as PaperProvider} from 'react-native-paper'
import {theme} from './App.style';
import {AppNavigator} from './src/app.navigator';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import LoadingComponent from './src/components/loading/loading.component';

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <AppNavigator/>
                <LoadingComponent/>
            </PaperProvider>
        </Provider>
    );
}
