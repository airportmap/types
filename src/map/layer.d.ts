import { LayerOptions, TileLayerOptions } from 'leaflet';
import { APMapPerformance, APMapTheme } from './types';

export interface APMapLayerOptions extends LayerOptions {
    _id: string;
    name: string;
    description?: string;
    group?: string;
    visible?: boolean;
    minZoom?: number;
    maxZoom?: number;
    performanceImpact?: APMapPerformance;
    interactive?: boolean;
    opacity?: number;
}

export interface APMapTileLayerOptions extends APMapLayerOptions, TileLayerOptions {
    url: string;
    themedURLs?: Partial< Record< APMapTheme, string > >;
}

export interface APMapDayNightLayerOptions extends APMapLayerOptions {
    animationSpeed?: number;
    nightColor?: string;
    nightOpacity?: number;
    longitudeRange?: number;
    resolution?: number;
}
