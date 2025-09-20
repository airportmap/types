import { type MapOptions } from 'leaflet';

export interface APMapOptions {
    mode?: 'normal' | 'theater';
    allowFullscreen?: boolean;
    mapOptions?: MapOptions;
}
