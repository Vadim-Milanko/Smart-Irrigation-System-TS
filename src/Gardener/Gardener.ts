class Gardener {
     public constructor(
        private name: string,
        private department: string,
        private employeedId: string,
        private availableField: IField
    ) {}
    
    public getName(): string {
        return this.name;
    }
    public getDepartment(): string {
        return this.department;
    }
    public getEmployeedId(): string {
        return this.employeedId;
    }
    public setAvailableField(field: IField): void {
        this.availableField = field;
    }
    public getAvailableField(): IField {
        return this.availableField;
    }
    public onWatering(state: boolean): void {
        this.availableField.triggerSprinklers(state);
    }
}