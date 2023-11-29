import React from 'react';
import { render } from '@testing-library/react-native';
import Loading from '../../components/Loading';

describe('Loading component Test', () => {
    it('Loading render', () => {
        render(<Loading />)
    });
});
