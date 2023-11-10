import { Deck, DeckProps } from '@deck.gl/core/typed';
import { JSX, createEffect, onMount, splitProps } from 'solid-js';

export type SolidDeckProps = Omit<DeckProps, 'container' | 'canvas' | 'style' | 'width' | 'height'> & {
    width?: number;
    height?: number;
    style?: JSX.CSSProperties;
};

export const DeckGL = (props: SolidDeckProps) => {
    let canvas: HTMLCanvasElement;
    let deck: Deck;

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

    return <canvas ref={canvas!} {...canvasProps} />;
}