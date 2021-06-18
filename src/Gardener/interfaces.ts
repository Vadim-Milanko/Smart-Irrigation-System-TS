// import { IField } from '../Field/interfaces';

interface IGardener {
    getName(): string;
    getDepartment(): string;
    getEmployeedId(): string;
    setAvailableField(field: IField): void
    getAvailableField(): IField;
    onWatering(state: boolean): void;
}