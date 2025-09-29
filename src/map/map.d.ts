import { MapOptions } from 'leaflet';
import { APMapStateStorageOptions } from './state';
import { APMapDayNightLayerOptions } from './layer';
import { APMapUIControl } from './ui';

export type APMapMode = 'normal' | 'theater';

export type APMapTheme = 'light' | 'dark';

export type APMapUnits = 'default' | 'metric' | 'imperial';

export type APMapUnitSystems = 'metric' | 'imperial' | 'avionic';

export type APMapUnitSystemType = 'distance' | 'speed' | 'altitude';

type UnitConversionMap< S extends APMapUnitSystems > = {
    [ K in Exclude< APMapUnitSystems, S > ]: number;
};

export interface APMapUnitSystemEntry< S extends APMapUnitSystems > {
    base: string;
    convert: UnitConversionMap< S >;
    units: Record< string, number >;
}

export type APMapUnitSystem = {
    [ T in APMapUnitSystemType ]: APMapUnitSystemEntry< APMapUnitSystems >;
};

export type APMapPerformance = 'high' | 'medium' | 'low';

export type APMapEventType =
    'theme-changed' | 'units-changed' | 'position-changed' | 'zoom-changed' |
    'user-position-changed' | 'layer-added' | 'layer-removed' | 'layer-toggled';

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
