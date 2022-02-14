import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../Photolist';

function Gallery({ currentCategory }) {
    const { name, description } = currentCategory;
    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={name}/>
        </section>
    );
}

export default Gallery;