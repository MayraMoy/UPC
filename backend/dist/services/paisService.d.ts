export declare class PaisService {
    private prisma;
    constructor();
    getAllPaises(): Promise<({
        _count: {
            localidades: number;
            estudiantes: number;
        };
        localidades: {
            id: number;
            paisId: number;
            nombre: string;
        }[];
    } & {
        id: number;
        nombre: string;
    })[]>;
    getPaisById(id: number): Promise<({
        _count: {
            localidades: number;
            estudiantes: number;
        };
        localidades: {
            id: number;
            paisId: number;
            nombre: string;
        }[];
    } & {
        id: number;
        nombre: string;
    }) | null>;
    getPaisByNombre(nombre: string): Promise<{
        id: number;
        nombre: string;
    } | null>;
    createPais(data: {
        nombre: string;
    }): Promise<{
        id: number;
        nombre: string;
    }>;
    updatePais(id: number, data: {
        nombre: string;
    }): Promise<{
        id: number;
        nombre: string;
    }>;
    deletePais(id: number): Promise<{
        id: number;
        nombre: string;
    }>;
}
//# sourceMappingURL=paisService.d.ts.map