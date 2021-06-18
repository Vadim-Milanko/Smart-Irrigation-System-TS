class ReserveField extends Field implements IReserveField{
    public constructor(
        protected id: string,
        protected width: number,
        protected length: number,
        protected sprinklers: ISprinkler[],
        private surface: string
    ) {
        super(id, width, length, sprinklers)
    }

    public getSurface(): string {
        return this.surface;
    }
}