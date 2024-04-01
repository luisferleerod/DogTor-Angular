export class ClienteCL {
    public id: number;
    public cedula: string;
    public nombre: string;
    public correo: string;
    public celular: string;

    constructor(id: number, cedula: string, nombre: string, correo: string, celular: string) {
        this.id = id;
        this.cedula = cedula;
        this.nombre = nombre;
        this.correo = correo;
        this.celular = celular;
    }
}




