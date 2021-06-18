import { ISprinkler } from '../Sprinkler/interfaces';

export interface IField {
    getId(): string;
    getWidth(): number;
    getLength(): number;
    getSquare(): number;
    getSquareAsync(callback: (square: number) => number): void;
    getSquareByPromise(): Promise<number>;
    addSprinkler(sprinkler: ISprinkler): void;
    removeSprinkler(id: string): void;
    getSprinklers(): ISprinkler[];
    triggerSprinklers(state: boolean): void;
}