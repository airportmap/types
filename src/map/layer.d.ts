import { LayerOptions } from 'leaflet';

export interface APMapLayerOptions extends LayerOptions {
    id: string;
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
