class Equipamento {
    public readonly id?: number;
    public nome?: string;

    constructor(props: Omit<Equipamento, "id">, id?: number) {
        Object.assign(this, props);

        if (id)
            this.id = id;
    }
}

export { Equipamento };