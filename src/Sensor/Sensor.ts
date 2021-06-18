class Sensor implements ISensor {
    public constructor(
        public id: string,
        private type: string
    ) {}

    public getId(): string {
        return this.id;
    }
    public getType(): string {
        return this.type;
    }
    public getSensitivity(): number {
        return randomInteger(1, 5);
    }
}