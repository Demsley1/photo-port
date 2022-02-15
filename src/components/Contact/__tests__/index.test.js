import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm Renders', () => {
    it('renders', () => {
        render(<ContactForm />)
    });

    it('matches with snapshot', () => {
        const{ asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Renders text content for title', () => {
    it('renders with h1 title', () => {
        const { getByTestId } = render(<ContactForm />);
        expect(getByTestId('contact-tag')).toHaveTextContent('Contact me')
        expect(getByTestId('contact-submit')).toHaveTextContent('Submit')
    })
})