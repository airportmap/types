export interface Route {
    path: string;
    controller: string;
    method: string;
}

export interface RouteConfig {
    routes: Route[]
}
