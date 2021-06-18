class Sprinkler implements ISprinkler {
    public constructor(
        public id: string,
        private power: number,
        private capacity: number,
        private sensors: ISensor[]
    ) {}

    public getId(): string {
        return this.id;
    }
    public getPower(): number {
        return this.power;
    }
    public setCapacity(capacity: number): void {
        this.capacity = capacity;
    }
    public getCapacity(): number {
        return this.capacity;
    }
    public addSensor(sensor: ISensor): void {
        this.sensors.push(sensor);
    }
    public removeSensor(id: string): void {
        this.sensors = this.sensors.filter(sensor => sensor.id !== id);
    }
    public getSensors(): ISensor[] {
        return this.sensors;
    }
    public onOff(state: boolean): void {
        if (state === false) {
            this.capacity = 0;
            return;
        }

        const MIN_ENABLE_SENSITIVITY: number = 2;
        const MAX_ENABLE_SENSITIVITY: number = 4;
        const MIN_ENABLE_CAPACITY: number = 30;
        const AVERAGE_ENABLE_CAPACITY: number = 55;
        const MAX_ENABLE_CAPACITY: number = 80;

        const sprinklerSensorsSensitivity: number[] = this.sensors.map(sensor => sensor.getSensitivity());
        const sensorsSensitivity: number = sprinklerSensorsSensitivity.reduce((sum, sensitivity) => sum + sensitivity, 0);
        const averageSensitivity: number = sensorsSensitivity / this.sensors.length;
        
        if (averageSensitivity >= MIN_ENABLE_SENSITIVITY && averageSensitivity <= MAX_ENABLE_SENSITIVITY) {
            this.capacity = AVERAGE_ENABLE_CAPACITY;
        } else if (averageSensitivity < MIN_ENABLE_SENSITIVITY) {
            this.capacity = MAX_ENABLE_CAPACITY;
        } else {
            this.capacity = MIN_ENABLE_CAPACITY;
        }
    };
}