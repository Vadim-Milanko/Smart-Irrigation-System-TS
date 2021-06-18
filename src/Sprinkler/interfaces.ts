import { ISensor } from '../Sensor/interfaces'

export interface ISprinkler {
    id: string;
    getId(): string;
    getPower(): number;
    setCapacity(capacity: number): void;
    getCapacity(): number;
    addSensor(sensor: ISensor): void;
    removeSensor(id: string): void;
    getSensors(): ISensor[];
    onOff(state: boolean): void;
}