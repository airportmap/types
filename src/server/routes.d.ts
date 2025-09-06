export interface Route {
    method: string;
    path: string;
    controller: string;
}

export interface RouteConfig {
    routes: Route[]
}
