import { MapOptions } from 'leaflet';
import { StateStorageOptions } from './state';

export interface APMapOptions {
    mapOptions?: MapOptions;
    mode?: 'normal' | 'theater';
    allowFullscreen?: boolean;
    urlManipulation?: boolean;
    stateStorage?: StateStorageOptions;
    trackUserPosition?: boolean;
    enableDeviceOrientation?: boolean;
    showDayNightBoundary?: boolean;
}
