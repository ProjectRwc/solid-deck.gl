import { Deck } from '@deck.gl/core/typed';
import { createEffect, onMount, splitProps } from 'solid-js';
export const DeckGL = (props) => {
    let canvas;
    let deck;
    const [canvasProps, deckProps] = splitProps(props, ['width', 'height', 'style']);
    onMount(() => {
        deck = new Deck({
            ...deckProps,
            canvas
        });
    });
    createEffect(() => {
        deck.setProps(deckProps);
    });
    return <canvas ref={canvas} {...canvasProps}/>;
};
