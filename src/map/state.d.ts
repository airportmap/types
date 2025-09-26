export interface APMapState {
    lat?: number;
    lng?: number;
    zoom?: number;
    [ key: string ]: any;
}

export interface APMapStateStorageOptions {
    enabled?: boolean;
    restoreOnLoad?: boolean;
    mapId?: string;
}
