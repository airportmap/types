export type APMapUIControlGroup =
    'attributionControl' | 'fullscreenControl' | 'headingControl' |
    'layerControl' | 'settingsControl' | 'stateControl' | 'theaterControl' |
    'trackingControl' | 'zoomControl';

export type APMapUIControl = Partial< Record< APMapUIControlGroup, {
    enabled?: boolean;
} > >;

export interface APMapUIBntOptions {
    handler?: CallableFunction;
    icon?: string;
    activeIcon?: string;
    ariaLabel?: string;
    classes?: string;
}
