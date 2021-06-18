class Field implements IField {
    public constructor(
        protected id: string,
        protected width: number,
        protected length: number,
        protected sprinklers: ISprinkler[]
    ) { }

    public getId(): string {    
        return this.id;
    }
    public getWidth(): number {
        return this.width;
    }
    public getLength(): number {
        return this.length;
    }
    public getSquare(): number {
        return this.width * this.length;
    }
    public getSquareAsync(callback: (square: number) => void): void {
        setTimeout(() => {
            const square: number = this.width * this.length;
            callback(square);
        }, 5000);
    }
    public getSquareByPromise(): Promise<number> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const square = this.width * this.length;
                resolve(square);
            }, 5000)
        })
      }
    public addSprinkler(sprinkler: ISprinkler): void {
        this.sprinklers.push(sprinkler);
    }
    public removeSprinkler(id: string): void {
        this.sprinklers = this.sprinklers.filter(sprinkler => sprinkler.id !== id);
    }
    public getSprinklers(): ISprinkler[] {
        return this.sprinklers;
    }
    public triggerSprinklers(state: boolean): void {
        this.sprinklers.forEach(sprinkler => sprinkler.onOff(state));
    }
}