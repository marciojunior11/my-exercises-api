type Delegate = {
  findMany(args?: any): Promise<any>;
  findUnique(args: any): Promise<any>;
  create(args: any): Promise<any>;
  update(args: any): Promise<any>;
  delete(args: any): Promise<any>;
};

type FindManyArgs<D> =
  D extends { findMany(args?: infer A): any } ? A : never;

type FindUniqueArgs<D> =
  D extends { findUnique(args: infer A): any } ? A : never;

type CreateArgs<D> =
  D extends { create(args: infer A): any } ? A : never;

type UpdateArgs<D> =
  D extends { update(args: infer A): any } ? A : never;

type DeleteArgs<D> =
  D extends { delete(args: infer A): any } ? A : never;

type ModelType<D> =
  D extends { findUnique(args: any): Promise<infer R> } ? R : never;

export interface IRepository<D extends Delegate> {
    findMany(
        args?: FindManyArgs<D>
    ): Promise<ModelType<D>[]>;

    findUnique(
        args: FindUniqueArgs<D>
    ): Promise<ModelType<D> | null>;

    create(
        args: CreateArgs<D>
    ): Promise<ModelType<D>>;

    update(
        args: UpdateArgs<D>
    ): Promise<ModelType<D>>;

    delete(
        args: DeleteArgs<D>
    ): Promise<ModelType<D>>;
}

export abstract class Repository<D extends Delegate>
  implements IRepository<D>
{
  constructor(protected readonly delegate: D) {}

  findMany(args?: FindManyArgs<D>) {
    return this.delegate.findMany(args);
  }

  findUnique(args: FindUniqueArgs<D>) {
    return this.delegate.findUnique(args);
  }

  create(args: CreateArgs<D>) {
    return this.delegate.create(args);
  }

  update(args: UpdateArgs<D>) {
    return this.delegate.update(args);
  }

  delete(args: DeleteArgs<D>) {
    return this.delegate.delete(args);
  }
}