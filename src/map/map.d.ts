import { MapOptions } from 'leaflet';
import { APMapMode, APMapTheme } from './types';
import { APMapStateStorageOptions } from './state';
import { APMapDayNightLayerOptions } from './layer';

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
