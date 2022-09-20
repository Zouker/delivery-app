import {Provider} from 'react-redux';
import {store} from '../../../store/store';
import {hide, show} from '../../../store/loading/loading.actions';

const {default: LoadingComponent} = require('../loading.component');
const {render} = require('@testing-library/react-native')

describe('loading component', () => {
    it('should hide loading component when is not loading', () => {
        const component = render(
            <Provider store={store}>
                <LoadingComponent/>
            </Provider>
        )

        store.dispatch(hide())

        const loading = component.queryAllByTestId('loadingComponent')

        expect(loading.length).toEqual(0)
    })
    it('should show loading component when it is loading', () => {
        const component = render(
            <Provider store={store}>
                <LoadingComponent/>
            </Provider>
        )

        store.dispatch(show())

        const loading = component.queryAllByTestId('loadingComponent')

        expect(loading.length).toEqual(1)
    })
})