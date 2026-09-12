export interface Uvi {
    forecast: any[];
    history: any[];
    latitude: number;
    longitude: number;
    now: Record<string, any>;
    ok: any;
}
export interface UviListMatch {
    latitude: number;
    longitude: number;
}
