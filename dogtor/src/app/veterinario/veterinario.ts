import { especialidad } from "../especialidad/especialidad";


export interface veterinario {
    id: number;
    usuario: string;
    nombre: string;
    especialidad: string;
    contrasena: string;
    foto: string;
    numAtenciones: number;
    estado: string;
   
}