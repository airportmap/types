import { MapOptions } from 'leaflet';
import { APMapStateStorageOptions } from './state';
import { APMapDayNightLayerOptions } from './layer';
import { APMapUIControl } from './ui';
import { APMapUnits } from './units';

export type APMapMode = 'normal' | 'theater';

export type APMapTheme = 'light' | 'dark';

export type APMapPerformance = 'high' | 'medium' | 'low';

export type APMapEventType =
    'theme-changed' | 'units-changed' | 'position-changed' | 'zoom-changed' |
    'layer-added' | 'layer-removed' | 'layer-toggled' | 'user-position-changed' |
    'device-orientation-changed';

export interface APMapOptions {
    mapOptions?: MapOptions;
    mode?: APMapMode;
    theme?: APMapTheme;
    units?: APMapUnits;
    uiControl?: APMapUIControl;
    allowFullscreen?: boolean;
    urlManipulation?: boolean;
    stateStorage?: APMapStateStorageOptions;
    trackUserPosition?: boolean;
    enableDeviceOrientation?: boolean;
    dayNight?: Partial< APMapDayNightLayerOptions > & {
        enabled?: boolean;
    };
}
