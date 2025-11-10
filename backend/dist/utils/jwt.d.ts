export declare const generateToken: (payload: {
    id: number;
    role: string;
}) => string;
export declare const verifyToken: (token: string) => {
    id: number;
    role: string;
};
//# sourceMappingURL=jwt.d.ts.map