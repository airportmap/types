import { LayerOptions, TileLayerOptions } from 'leaflet';

export interface APMapLayerOptions extends LayerOptions {
    _id: string;
    name: string;
    description?: string;
    group?: string;
    visible?: boolean;
    minZoom?: number;
    maxZoom?: number;
    performanceImpact?: 'low' | 'medium' | 'high';
    interactive?: boolean;
    opacity?: number;
}

export interface APMapTileLayerOptions extends APMapLayerOptions, TileLayerOptions {
    url: string;
}
