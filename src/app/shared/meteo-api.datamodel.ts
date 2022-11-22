export interface TimePointData {
    cloudcover?: number,  //1 to 9 number
    lifted_index?: number,  //-10 to 15  , if negative, the weather is unstable
    prec_amount?: number,  //0 to 9
    prec_type?: PrecType,
    rh2m?: string,  //relative humidity 2m
    temp2m?: number,  // temperature 2m
    timepoint?: number,  //how many hours in the future the prediction is - once every three hours
    weather?: Weather,
    wind10m?: {
        direction?: WindDirection,
        speed?: WindIntensity
    }
}

export interface MeteoApiData {
    dataseries?: TimePointData[],
    init?: string,
    product?: string
}

export enum WindDirection {
    N, NE, E, SE, S, SW, W, NW
}

export type WindIntensity = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export enum PrecType {
    snow, 
    rain, 
    frzr, //freezing rain
    icep, //ice pellets
    none
}

export type Weather =
    "clearday" | "clearnight" |
    "pcloudyday" | "pcloudynight" |  //few clouds
    "mcloudyday" | "mcloudynight" |  //medium clouds
    "cloudyday" | "cloudynight" |   //total coulds
    "lightrainday" | "lightrainnight" |
    "oshowerday" | "oshowernight" |  //like light rain day (more sun)
    "ishowerday" | "ishowernight" |  //like light rain day (more more sun)
    "lightsnowday" | "lightsnownight" | 
    "rainday" | "rainnight" |
    "snowday" | "snownight" |
    "rainsnowday" | "rainsnownight";  //hailstorm


export interface WeatherType {
    type: Weather,
    imageUrl: string
}

export const weatherImageMapping: Map<Weather, string> = new Map();
weatherImageMapping.set('clearday', "https://img.icons8.com/fluency/96/null/sun.png");
weatherImageMapping.set('clearnight', "https://img.icons8.com/fluency/96/null/full-moon.png");

weatherImageMapping.set('pcloudyday', "https://img.icons8.com/fluency/96/null/partly-cloudy-day.png");
weatherImageMapping.set('pcloudynight', "https://img.icons8.com/fluency/96/null/partly-cloudy-night.png");
weatherImageMapping.set('mcloudyday', "https://img.icons8.com/fluency/96/null/partly-cloudy-day.png");
weatherImageMapping.set('mcloudynight', "https://img.icons8.com/fluency/96/null/partly-cloudy-night.png");

weatherImageMapping.set('cloudyday', "https://img.icons8.com/fluency/96/null/clouds.png");
weatherImageMapping.set('cloudynight', "https://img.icons8.com/fluency/96/null/clouds.png");

weatherImageMapping.set('lightrainday', "https://img.icons8.com/fluency/96/null/partly-cloudy-rain.png");
weatherImageMapping.set('lightrainnight', "https://img.icons8.com/fluency/96/null/rainy-night.png");
weatherImageMapping.set('oshowerday', "https://img.icons8.com/fluency/96/null/partly-cloudy-rain.png");
weatherImageMapping.set('oshowernight', "https://img.icons8.com/fluency/96/null/rainy-night.png");
weatherImageMapping.set('ishowerday', "https://img.icons8.com/fluency/96/null/partly-cloudy-rain.png");
weatherImageMapping.set('ishowernight', "https://img.icons8.com/fluency/96/null/rainy-night.png");

weatherImageMapping.set('rainday', "https://img.icons8.com/fluency/96/null/intense-rain.png");
weatherImageMapping.set('rainnight', "https://img.icons8.com/fluency/96/null/intense-rain.png");

weatherImageMapping.set('snowday', "https://img.icons8.com/fluency/96/null/snow.png");
weatherImageMapping.set('snownight', "https://img.icons8.com/fluency/96/null/snow.png");
weatherImageMapping.set('lightsnowday', "https://img.icons8.com/fluency/96/null/snow.png");
weatherImageMapping.set('lightsnownight', "https://img.icons8.com/fluency/96/null/snow.png");

weatherImageMapping.set('rainsnowday', "https://img.icons8.com/fluency/96/null/chance-of-storm.png");
weatherImageMapping.set('rainsnownight', "https://img.icons8.com/fluency/96/null/stormy-night.png");


export const windImageMapping: Map<WindIntensity, string> = new Map();
windImageMapping.set(1, "https://img.icons8.com/fluency/48/null/wind-speed-8-12.png");
windImageMapping.set(2, "https://img.icons8.com/fluency/48/null/wind-speed-13-17.png");
windImageMapping.set(3, "https://img.icons8.com/fluency/48/null/wind-speed-18-22.png");
windImageMapping.set(4, "https://img.icons8.com/fluency/48/null/wind-speed-23-27.png");
windImageMapping.set(5, "https://img.icons8.com/fluency/48/null/wind-speed-28-32.png");
windImageMapping.set(6, "https://img.icons8.com/fluency/48/null/wind-speed-33-37.png");
windImageMapping.set(7, "https://img.icons8.com/fluency/48/null/wind-speed-38-42.png");
windImageMapping.set(8, "https://img.icons8.com/fluency/48/null/wind-speed-43-47.png");

export const windMSMapping: Map<WindIntensity, string> = new Map();
windMSMapping.set(1, "< 0.3m/s");
windMSMapping.set(2, "0.3 - 3.4m/s");
windMSMapping.set(3, "3.4 - 8.0m/s");
windMSMapping.set(4, "8.0 - 10.8m/s");
windMSMapping.set(5, "10.8 - 17.2m/s");
windMSMapping.set(6, "17.2 - 24.5m/s");
windMSMapping.set(7, "24.5 - 32.6m/s  STORM");
windMSMapping.set(8, "> 32.6m/s  HURRICANE");
