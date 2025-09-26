import { MapOptions } from 'leaflet';
import { APMapStateStorageOptions } from './state';

export interface APMapOptions {
    mapOptions?: MapOptions;
    mode?: 'normal' | 'theater';
    allowFullscreen?: boolean;
    urlManipulation?: boolean;
    stateStorage?: APMapStateStorageOptions;
    trackUserPosition?: boolean;
    enableDeviceOrientation?: boolean;
    showDayNightBoundary?: boolean;
}
