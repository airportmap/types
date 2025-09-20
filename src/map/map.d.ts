import { type MapOptions } from 'leaflet';

export interface APMapOptions {
    mapOptions?: MapOptions;
    mode?: 'normal' | 'theater';
    allowFullscreen?: boolean;
    urlManipulation?: boolean;
    trackUserPosition?: boolean;
    enableDeviceOrientation?: boolean;
    showDayNightBoundary?: boolean;
}
