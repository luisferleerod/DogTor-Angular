import { droga } from "../droga/droga";
import { mascota } from "../mascota/mascota";
import { veterinario } from "../veterinario/veterinario";

export interface tratamiento {
    id: number;
    droga?: droga;
    mascota?: mascota;
    veterinario?: veterinario;
    fecha: Date;
}