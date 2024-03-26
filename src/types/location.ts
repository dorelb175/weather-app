import { TCurrentConditions } from "./weatherApi"

export type TLocation = {
    id: number,
    name: string,
    currentWeatherConditions?: TCurrentConditions | null
}

export type TSuggestedLocation = {
    value: number,
    label: string,
    localizedName: string,
};