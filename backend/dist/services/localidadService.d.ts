export declare class LocalidadService {
    private prisma;
    constructor();
    getAllLocalidades(paisId?: number): Promise<({
        pais: {
            id: number;
            nombre: string;
        };
        _count: {
            estudiantes: number;
        };
    } & {
        id: number;
        paisId: number;
        nombre: string;
    })[]>;
    getLocalidadById(id: number): Promise<({
        pais: {
            id: number;
            nombre: string;
        };
        _count: {
            estudiantes: number;
        };
    } & {
        id: number;
        paisId: number;
        nombre: string;
    }) | null>;
    getLocalidadesByPais(paisId: number): Promise<({
        _count: {
            estudiantes: number;
        };
    } & {
        id: number;
        paisId: number;
        nombre: string;
    })[]>;
    createLocalidad(data: {
        nombre: string;
        paisId: number;
    }): Promise<{
        pais: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        paisId: number;
        nombre: string;
    }>;
    updateLocalidad(id: number, data: {
        nombre: string;
        paisId?: number;
    }): Promise<{
        pais: {
            id: number;
            nombre: string;
        };
    } & {
        id: number;
        paisId: number;
        nombre: string;
    }>;
    deleteLocalidad(id: number): Promise<{
        id: number;
        paisId: number;
        nombre: string;
    }>;
}
//# sourceMappingURL=localidadService.d.ts.map