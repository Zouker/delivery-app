import React from 'react';
import {render} from '@testing-library/react-native'
import {HomeScreen} from '../home.screen';

describe('Home screen', () => {

    it('should show map without confirm and search parts', () => {
        const page = render(<HomeScreen />);
        page.getByTestId('mapView')
        expect(page.queryAllByTestId('confirmDeliveryCard').length).toEqual(0);
        expect(page.queryAllByTestId('searchDeliveryCard').length).toEqual(0);
    })

    it('should show map with confirm and without search', ()=>{
        const page = render(<HomeScreen state={2} />);
        page.getByTestId('mapView')
        expect(page.queryAllByTestId('confirmDeliveryCard').length).toEqual(1);
        expect(page.queryAllByTestId('searchDeliveryCard').length).toEqual(0);
    })

    it('should show map without confirm and with search', ()=>{
        const page = render(<HomeScreen state={3} />);
        page.getByTestId('mapView')
        expect(page.queryAllByTestId('confirmDeliveryCard').length).toEqual(0);
        expect(page.queryAllByTestId('searchDeliveryCard').length).toEqual(1);
    })
})