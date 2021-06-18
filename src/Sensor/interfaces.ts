export interface ISensor {
    id: string;
    getId(): string;
    getType(): string;
    getSensitivity(): number;
}