export type APMapUIControlGroup =
    'attributionControl' | 'fullscreenControl' | 'headingControl' |
    'layerControl' | 'scrollControl' | 'settingsControl' | 'stateControl' |
    'trackingControl' | 'zoomControl';

export type APMapUIControl = Partial< Record< APMapUIControlGroup, {
    enabled?: boolean;
} > >;

export interface APMapUIBntOptions {
    handler: CallableFunction;
    icon: string;
    text?: string;
    activeIcon?: string;
    ariaLabel?: string;
    classes?: string[];
}

export interface APMapScaleBar {
    ratio: number;
    scale: string;
    distance: number;
    unit: string;
    pixels: number;
    label: string;
}

export interface APMapHdgOptions {
    labels?: 'degrees' | 'cardinal' | 'mixed';
    pxPerDeg?: number;
    majorStep?: number;
    minorStep?: number;
    speed?: number;
}
