import { mascota } from "../mascota/mascota";

export interface Cliente {
    id: number;
    cedula: string;
    nombre: string;
    correo: string;
    celular: number;
    mascotas?: mascota[];
}