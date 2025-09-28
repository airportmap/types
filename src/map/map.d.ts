import { MapOptions } from 'leaflet';
import { APMapStateStorageOptions } from './state';
import { APMapDayNightLayerOptions } from './layer';

export type APMapMode = 'normal' | 'theater';

export type APMapTheme = 'light' | 'dark';

export interface APMapOptions {
    mapOptions?: MapOptions;
    mode?: APMapMode;
    theme?: APMapTheme;
    allowFullscreen?: boolean;
    urlManipulation?: boolean;
    stateStorage?: APMapStateStorageOptions;
    trackUserPosition?: boolean;
    enableDeviceOrientation?: boolean;
    dayNight?: Partial< APMapDayNightLayerOptions > & {
        enabled?: boolean;
    };
}
