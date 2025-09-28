import { MapOptions } from 'leaflet';
import { APMapStateStorageOptions } from './state';
import { APMapDayNightLayerOptions } from './layer';

export interface APMapOptions {
    mapOptions?: MapOptions;
    mode?: 'normal' | 'theater';
    allowFullscreen?: boolean;
    urlManipulation?: boolean;
    stateStorage?: APMapStateStorageOptions;
    trackUserPosition?: boolean;
    enableDeviceOrientation?: boolean;
    dayNight?: Partial< APMapDayNightLayerOptions > & {
        enabled?: boolean;
    };
}
