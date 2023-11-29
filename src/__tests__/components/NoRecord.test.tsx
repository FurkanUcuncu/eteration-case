import React from 'react';
import { render } from '@testing-library/react-native';
import NoRecord from '../../components/NoRecord';

const initialValues = {
    text: "test"
};

describe('NoRecord component Test', () => {
    it('NoRecord render', () => {
        render(<NoRecord {...initialValues} />)
    });
});
