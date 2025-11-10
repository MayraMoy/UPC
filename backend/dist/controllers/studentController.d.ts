import { Request, Response } from "express";
export declare const getStudents: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getStudentById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const createStudent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateStudent: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deactivateStudent: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=studentController.d.ts.map