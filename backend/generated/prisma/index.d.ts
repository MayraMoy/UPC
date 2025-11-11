
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PAISES
 * 
 */
export type PAISES = $Result.DefaultSelection<Prisma.$PAISESPayload>
/**
 * Model LOCALIDADES
 * 
 */
export type LOCALIDADES = $Result.DefaultSelection<Prisma.$LOCALIDADESPayload>
/**
 * Model AREAS_TELEFONICAS
 * 
 */
export type AREAS_TELEFONICAS = $Result.DefaultSelection<Prisma.$AREAS_TELEFONICASPayload>
/**
 * Model GENEROS
 * 
 */
export type GENEROS = $Result.DefaultSelection<Prisma.$GENEROSPayload>
/**
 * Model CARRERAS
 * 
 */
export type CARRERAS = $Result.DefaultSelection<Prisma.$CARRERASPayload>
/**
 * Model MATERIAS
 * 
 */
export type MATERIAS = $Result.DefaultSelection<Prisma.$MATERIASPayload>
/**
 * Model CONDICIONES
 * 
 */
export type CONDICIONES = $Result.DefaultSelection<Prisma.$CONDICIONESPayload>
/**
 * Model ESTUDIANTES
 * 
 */
export type ESTUDIANTES = $Result.DefaultSelection<Prisma.$ESTUDIANTESPayload>
/**
 * Model INSCRIPCIONES
 * 
 */
export type INSCRIPCIONES = $Result.DefaultSelection<Prisma.$INSCRIPCIONESPayload>
/**
 * Model ESTUDIANTES_CARRERAS
 * 
 */
export type ESTUDIANTES_CARRERAS = $Result.DefaultSelection<Prisma.$ESTUDIANTES_CARRERASPayload>
/**
 * Model CURSADAS
 * 
 */
export type CURSADAS = $Result.DefaultSelection<Prisma.$CURSADASPayload>
/**
 * Model CONDICIONES_MATERIAS
 * 
 */
export type CONDICIONES_MATERIAS = $Result.DefaultSelection<Prisma.$CONDICIONES_MATERIASPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PAISES
 * const pAISES = await prisma.pAISES.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PAISES
   * const pAISES = await prisma.pAISES.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.pAISES`: Exposes CRUD operations for the **PAISES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PAISES
    * const pAISES = await prisma.pAISES.findMany()
    * ```
    */
  get pAISES(): Prisma.PAISESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lOCALIDADES`: Exposes CRUD operations for the **LOCALIDADES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LOCALIDADES
    * const lOCALIDADES = await prisma.lOCALIDADES.findMany()
    * ```
    */
  get lOCALIDADES(): Prisma.LOCALIDADESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aREAS_TELEFONICAS`: Exposes CRUD operations for the **AREAS_TELEFONICAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AREAS_TELEFONICAS
    * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.findMany()
    * ```
    */
  get aREAS_TELEFONICAS(): Prisma.AREAS_TELEFONICASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gENEROS`: Exposes CRUD operations for the **GENEROS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GENEROS
    * const gENEROS = await prisma.gENEROS.findMany()
    * ```
    */
  get gENEROS(): Prisma.GENEROSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cARRERAS`: Exposes CRUD operations for the **CARRERAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CARRERAS
    * const cARRERAS = await prisma.cARRERAS.findMany()
    * ```
    */
  get cARRERAS(): Prisma.CARRERASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mATERIAS`: Exposes CRUD operations for the **MATERIAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MATERIAS
    * const mATERIAS = await prisma.mATERIAS.findMany()
    * ```
    */
  get mATERIAS(): Prisma.MATERIASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cONDICIONES`: Exposes CRUD operations for the **CONDICIONES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CONDICIONES
    * const cONDICIONES = await prisma.cONDICIONES.findMany()
    * ```
    */
  get cONDICIONES(): Prisma.CONDICIONESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eSTUDIANTES`: Exposes CRUD operations for the **ESTUDIANTES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ESTUDIANTES
    * const eSTUDIANTES = await prisma.eSTUDIANTES.findMany()
    * ```
    */
  get eSTUDIANTES(): Prisma.ESTUDIANTESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.iNSCRIPCIONES`: Exposes CRUD operations for the **INSCRIPCIONES** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more INSCRIPCIONES
    * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.findMany()
    * ```
    */
  get iNSCRIPCIONES(): Prisma.INSCRIPCIONESDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eSTUDIANTES_CARRERAS`: Exposes CRUD operations for the **ESTUDIANTES_CARRERAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ESTUDIANTES_CARRERAS
    * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.findMany()
    * ```
    */
  get eSTUDIANTES_CARRERAS(): Prisma.ESTUDIANTES_CARRERASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cURSADAS`: Exposes CRUD operations for the **CURSADAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CURSADAS
    * const cURSADAS = await prisma.cURSADAS.findMany()
    * ```
    */
  get cURSADAS(): Prisma.CURSADASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cONDICIONES_MATERIAS`: Exposes CRUD operations for the **CONDICIONES_MATERIAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CONDICIONES_MATERIAS
    * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.findMany()
    * ```
    */
  get cONDICIONES_MATERIAS(): Prisma.CONDICIONES_MATERIASDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PAISES: 'PAISES',
    LOCALIDADES: 'LOCALIDADES',
    AREAS_TELEFONICAS: 'AREAS_TELEFONICAS',
    GENEROS: 'GENEROS',
    CARRERAS: 'CARRERAS',
    MATERIAS: 'MATERIAS',
    CONDICIONES: 'CONDICIONES',
    ESTUDIANTES: 'ESTUDIANTES',
    INSCRIPCIONES: 'INSCRIPCIONES',
    ESTUDIANTES_CARRERAS: 'ESTUDIANTES_CARRERAS',
    CURSADAS: 'CURSADAS',
    CONDICIONES_MATERIAS: 'CONDICIONES_MATERIAS'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "pAISES" | "lOCALIDADES" | "aREAS_TELEFONICAS" | "gENEROS" | "cARRERAS" | "mATERIAS" | "cONDICIONES" | "eSTUDIANTES" | "iNSCRIPCIONES" | "eSTUDIANTES_CARRERAS" | "cURSADAS" | "cONDICIONES_MATERIAS"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PAISES: {
        payload: Prisma.$PAISESPayload<ExtArgs>
        fields: Prisma.PAISESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PAISESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PAISESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>
          }
          findFirst: {
            args: Prisma.PAISESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PAISESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>
          }
          findMany: {
            args: Prisma.PAISESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>[]
          }
          create: {
            args: Prisma.PAISESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>
          }
          createMany: {
            args: Prisma.PAISESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PAISESCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>[]
          }
          delete: {
            args: Prisma.PAISESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>
          }
          update: {
            args: Prisma.PAISESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>
          }
          deleteMany: {
            args: Prisma.PAISESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PAISESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PAISESUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>[]
          }
          upsert: {
            args: Prisma.PAISESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PAISESPayload>
          }
          aggregate: {
            args: Prisma.PAISESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePAISES>
          }
          groupBy: {
            args: Prisma.PAISESGroupByArgs<ExtArgs>
            result: $Utils.Optional<PAISESGroupByOutputType>[]
          }
          count: {
            args: Prisma.PAISESCountArgs<ExtArgs>
            result: $Utils.Optional<PAISESCountAggregateOutputType> | number
          }
        }
      }
      LOCALIDADES: {
        payload: Prisma.$LOCALIDADESPayload<ExtArgs>
        fields: Prisma.LOCALIDADESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LOCALIDADESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LOCALIDADESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>
          }
          findFirst: {
            args: Prisma.LOCALIDADESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LOCALIDADESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>
          }
          findMany: {
            args: Prisma.LOCALIDADESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>[]
          }
          create: {
            args: Prisma.LOCALIDADESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>
          }
          createMany: {
            args: Prisma.LOCALIDADESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LOCALIDADESCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>[]
          }
          delete: {
            args: Prisma.LOCALIDADESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>
          }
          update: {
            args: Prisma.LOCALIDADESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>
          }
          deleteMany: {
            args: Prisma.LOCALIDADESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LOCALIDADESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LOCALIDADESUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>[]
          }
          upsert: {
            args: Prisma.LOCALIDADESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LOCALIDADESPayload>
          }
          aggregate: {
            args: Prisma.LOCALIDADESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLOCALIDADES>
          }
          groupBy: {
            args: Prisma.LOCALIDADESGroupByArgs<ExtArgs>
            result: $Utils.Optional<LOCALIDADESGroupByOutputType>[]
          }
          count: {
            args: Prisma.LOCALIDADESCountArgs<ExtArgs>
            result: $Utils.Optional<LOCALIDADESCountAggregateOutputType> | number
          }
        }
      }
      AREAS_TELEFONICAS: {
        payload: Prisma.$AREAS_TELEFONICASPayload<ExtArgs>
        fields: Prisma.AREAS_TELEFONICASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AREAS_TELEFONICASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AREAS_TELEFONICASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>
          }
          findFirst: {
            args: Prisma.AREAS_TELEFONICASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AREAS_TELEFONICASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>
          }
          findMany: {
            args: Prisma.AREAS_TELEFONICASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>[]
          }
          create: {
            args: Prisma.AREAS_TELEFONICASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>
          }
          createMany: {
            args: Prisma.AREAS_TELEFONICASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AREAS_TELEFONICASCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>[]
          }
          delete: {
            args: Prisma.AREAS_TELEFONICASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>
          }
          update: {
            args: Prisma.AREAS_TELEFONICASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>
          }
          deleteMany: {
            args: Prisma.AREAS_TELEFONICASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AREAS_TELEFONICASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AREAS_TELEFONICASUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>[]
          }
          upsert: {
            args: Prisma.AREAS_TELEFONICASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AREAS_TELEFONICASPayload>
          }
          aggregate: {
            args: Prisma.AREAS_TELEFONICASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAREAS_TELEFONICAS>
          }
          groupBy: {
            args: Prisma.AREAS_TELEFONICASGroupByArgs<ExtArgs>
            result: $Utils.Optional<AREAS_TELEFONICASGroupByOutputType>[]
          }
          count: {
            args: Prisma.AREAS_TELEFONICASCountArgs<ExtArgs>
            result: $Utils.Optional<AREAS_TELEFONICASCountAggregateOutputType> | number
          }
        }
      }
      GENEROS: {
        payload: Prisma.$GENEROSPayload<ExtArgs>
        fields: Prisma.GENEROSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GENEROSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GENEROSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>
          }
          findFirst: {
            args: Prisma.GENEROSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GENEROSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>
          }
          findMany: {
            args: Prisma.GENEROSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>[]
          }
          create: {
            args: Prisma.GENEROSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>
          }
          createMany: {
            args: Prisma.GENEROSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GENEROSCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>[]
          }
          delete: {
            args: Prisma.GENEROSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>
          }
          update: {
            args: Prisma.GENEROSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>
          }
          deleteMany: {
            args: Prisma.GENEROSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GENEROSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GENEROSUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>[]
          }
          upsert: {
            args: Prisma.GENEROSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GENEROSPayload>
          }
          aggregate: {
            args: Prisma.GENEROSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGENEROS>
          }
          groupBy: {
            args: Prisma.GENEROSGroupByArgs<ExtArgs>
            result: $Utils.Optional<GENEROSGroupByOutputType>[]
          }
          count: {
            args: Prisma.GENEROSCountArgs<ExtArgs>
            result: $Utils.Optional<GENEROSCountAggregateOutputType> | number
          }
        }
      }
      CARRERAS: {
        payload: Prisma.$CARRERASPayload<ExtArgs>
        fields: Prisma.CARRERASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CARRERASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CARRERASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>
          }
          findFirst: {
            args: Prisma.CARRERASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CARRERASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>
          }
          findMany: {
            args: Prisma.CARRERASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>[]
          }
          create: {
            args: Prisma.CARRERASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>
          }
          createMany: {
            args: Prisma.CARRERASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CARRERASCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>[]
          }
          delete: {
            args: Prisma.CARRERASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>
          }
          update: {
            args: Prisma.CARRERASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>
          }
          deleteMany: {
            args: Prisma.CARRERASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CARRERASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CARRERASUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>[]
          }
          upsert: {
            args: Prisma.CARRERASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CARRERASPayload>
          }
          aggregate: {
            args: Prisma.CARRERASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCARRERAS>
          }
          groupBy: {
            args: Prisma.CARRERASGroupByArgs<ExtArgs>
            result: $Utils.Optional<CARRERASGroupByOutputType>[]
          }
          count: {
            args: Prisma.CARRERASCountArgs<ExtArgs>
            result: $Utils.Optional<CARRERASCountAggregateOutputType> | number
          }
        }
      }
      MATERIAS: {
        payload: Prisma.$MATERIASPayload<ExtArgs>
        fields: Prisma.MATERIASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MATERIASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MATERIASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>
          }
          findFirst: {
            args: Prisma.MATERIASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MATERIASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>
          }
          findMany: {
            args: Prisma.MATERIASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>[]
          }
          create: {
            args: Prisma.MATERIASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>
          }
          createMany: {
            args: Prisma.MATERIASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MATERIASCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>[]
          }
          delete: {
            args: Prisma.MATERIASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>
          }
          update: {
            args: Prisma.MATERIASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>
          }
          deleteMany: {
            args: Prisma.MATERIASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MATERIASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MATERIASUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>[]
          }
          upsert: {
            args: Prisma.MATERIASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MATERIASPayload>
          }
          aggregate: {
            args: Prisma.MATERIASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMATERIAS>
          }
          groupBy: {
            args: Prisma.MATERIASGroupByArgs<ExtArgs>
            result: $Utils.Optional<MATERIASGroupByOutputType>[]
          }
          count: {
            args: Prisma.MATERIASCountArgs<ExtArgs>
            result: $Utils.Optional<MATERIASCountAggregateOutputType> | number
          }
        }
      }
      CONDICIONES: {
        payload: Prisma.$CONDICIONESPayload<ExtArgs>
        fields: Prisma.CONDICIONESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CONDICIONESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CONDICIONESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>
          }
          findFirst: {
            args: Prisma.CONDICIONESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CONDICIONESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>
          }
          findMany: {
            args: Prisma.CONDICIONESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>[]
          }
          create: {
            args: Prisma.CONDICIONESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>
          }
          createMany: {
            args: Prisma.CONDICIONESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CONDICIONESCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>[]
          }
          delete: {
            args: Prisma.CONDICIONESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>
          }
          update: {
            args: Prisma.CONDICIONESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>
          }
          deleteMany: {
            args: Prisma.CONDICIONESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CONDICIONESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CONDICIONESUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>[]
          }
          upsert: {
            args: Prisma.CONDICIONESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONESPayload>
          }
          aggregate: {
            args: Prisma.CONDICIONESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCONDICIONES>
          }
          groupBy: {
            args: Prisma.CONDICIONESGroupByArgs<ExtArgs>
            result: $Utils.Optional<CONDICIONESGroupByOutputType>[]
          }
          count: {
            args: Prisma.CONDICIONESCountArgs<ExtArgs>
            result: $Utils.Optional<CONDICIONESCountAggregateOutputType> | number
          }
        }
      }
      ESTUDIANTES: {
        payload: Prisma.$ESTUDIANTESPayload<ExtArgs>
        fields: Prisma.ESTUDIANTESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ESTUDIANTESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ESTUDIANTESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>
          }
          findFirst: {
            args: Prisma.ESTUDIANTESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ESTUDIANTESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>
          }
          findMany: {
            args: Prisma.ESTUDIANTESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>[]
          }
          create: {
            args: Prisma.ESTUDIANTESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>
          }
          createMany: {
            args: Prisma.ESTUDIANTESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ESTUDIANTESCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>[]
          }
          delete: {
            args: Prisma.ESTUDIANTESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>
          }
          update: {
            args: Prisma.ESTUDIANTESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>
          }
          deleteMany: {
            args: Prisma.ESTUDIANTESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ESTUDIANTESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ESTUDIANTESUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>[]
          }
          upsert: {
            args: Prisma.ESTUDIANTESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTESPayload>
          }
          aggregate: {
            args: Prisma.ESTUDIANTESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateESTUDIANTES>
          }
          groupBy: {
            args: Prisma.ESTUDIANTESGroupByArgs<ExtArgs>
            result: $Utils.Optional<ESTUDIANTESGroupByOutputType>[]
          }
          count: {
            args: Prisma.ESTUDIANTESCountArgs<ExtArgs>
            result: $Utils.Optional<ESTUDIANTESCountAggregateOutputType> | number
          }
        }
      }
      INSCRIPCIONES: {
        payload: Prisma.$INSCRIPCIONESPayload<ExtArgs>
        fields: Prisma.INSCRIPCIONESFieldRefs
        operations: {
          findUnique: {
            args: Prisma.INSCRIPCIONESFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.INSCRIPCIONESFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>
          }
          findFirst: {
            args: Prisma.INSCRIPCIONESFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.INSCRIPCIONESFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>
          }
          findMany: {
            args: Prisma.INSCRIPCIONESFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>[]
          }
          create: {
            args: Prisma.INSCRIPCIONESCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>
          }
          createMany: {
            args: Prisma.INSCRIPCIONESCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.INSCRIPCIONESCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>[]
          }
          delete: {
            args: Prisma.INSCRIPCIONESDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>
          }
          update: {
            args: Prisma.INSCRIPCIONESUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>
          }
          deleteMany: {
            args: Prisma.INSCRIPCIONESDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.INSCRIPCIONESUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.INSCRIPCIONESUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>[]
          }
          upsert: {
            args: Prisma.INSCRIPCIONESUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$INSCRIPCIONESPayload>
          }
          aggregate: {
            args: Prisma.INSCRIPCIONESAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateINSCRIPCIONES>
          }
          groupBy: {
            args: Prisma.INSCRIPCIONESGroupByArgs<ExtArgs>
            result: $Utils.Optional<INSCRIPCIONESGroupByOutputType>[]
          }
          count: {
            args: Prisma.INSCRIPCIONESCountArgs<ExtArgs>
            result: $Utils.Optional<INSCRIPCIONESCountAggregateOutputType> | number
          }
        }
      }
      ESTUDIANTES_CARRERAS: {
        payload: Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>
        fields: Prisma.ESTUDIANTES_CARRERASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ESTUDIANTES_CARRERASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ESTUDIANTES_CARRERASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>
          }
          findFirst: {
            args: Prisma.ESTUDIANTES_CARRERASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ESTUDIANTES_CARRERASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>
          }
          findMany: {
            args: Prisma.ESTUDIANTES_CARRERASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>[]
          }
          create: {
            args: Prisma.ESTUDIANTES_CARRERASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>
          }
          createMany: {
            args: Prisma.ESTUDIANTES_CARRERASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ESTUDIANTES_CARRERASCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>[]
          }
          delete: {
            args: Prisma.ESTUDIANTES_CARRERASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>
          }
          update: {
            args: Prisma.ESTUDIANTES_CARRERASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>
          }
          deleteMany: {
            args: Prisma.ESTUDIANTES_CARRERASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ESTUDIANTES_CARRERASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ESTUDIANTES_CARRERASUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>[]
          }
          upsert: {
            args: Prisma.ESTUDIANTES_CARRERASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ESTUDIANTES_CARRERASPayload>
          }
          aggregate: {
            args: Prisma.ESTUDIANTES_CARRERASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateESTUDIANTES_CARRERAS>
          }
          groupBy: {
            args: Prisma.ESTUDIANTES_CARRERASGroupByArgs<ExtArgs>
            result: $Utils.Optional<ESTUDIANTES_CARRERASGroupByOutputType>[]
          }
          count: {
            args: Prisma.ESTUDIANTES_CARRERASCountArgs<ExtArgs>
            result: $Utils.Optional<ESTUDIANTES_CARRERASCountAggregateOutputType> | number
          }
        }
      }
      CURSADAS: {
        payload: Prisma.$CURSADASPayload<ExtArgs>
        fields: Prisma.CURSADASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CURSADASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CURSADASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>
          }
          findFirst: {
            args: Prisma.CURSADASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CURSADASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>
          }
          findMany: {
            args: Prisma.CURSADASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>[]
          }
          create: {
            args: Prisma.CURSADASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>
          }
          createMany: {
            args: Prisma.CURSADASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CURSADASCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>[]
          }
          delete: {
            args: Prisma.CURSADASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>
          }
          update: {
            args: Prisma.CURSADASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>
          }
          deleteMany: {
            args: Prisma.CURSADASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CURSADASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CURSADASUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>[]
          }
          upsert: {
            args: Prisma.CURSADASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CURSADASPayload>
          }
          aggregate: {
            args: Prisma.CURSADASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCURSADAS>
          }
          groupBy: {
            args: Prisma.CURSADASGroupByArgs<ExtArgs>
            result: $Utils.Optional<CURSADASGroupByOutputType>[]
          }
          count: {
            args: Prisma.CURSADASCountArgs<ExtArgs>
            result: $Utils.Optional<CURSADASCountAggregateOutputType> | number
          }
        }
      }
      CONDICIONES_MATERIAS: {
        payload: Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>
        fields: Prisma.CONDICIONES_MATERIASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CONDICIONES_MATERIASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CONDICIONES_MATERIASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>
          }
          findFirst: {
            args: Prisma.CONDICIONES_MATERIASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CONDICIONES_MATERIASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>
          }
          findMany: {
            args: Prisma.CONDICIONES_MATERIASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>[]
          }
          create: {
            args: Prisma.CONDICIONES_MATERIASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>
          }
          createMany: {
            args: Prisma.CONDICIONES_MATERIASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CONDICIONES_MATERIASCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>[]
          }
          delete: {
            args: Prisma.CONDICIONES_MATERIASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>
          }
          update: {
            args: Prisma.CONDICIONES_MATERIASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>
          }
          deleteMany: {
            args: Prisma.CONDICIONES_MATERIASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CONDICIONES_MATERIASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CONDICIONES_MATERIASUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>[]
          }
          upsert: {
            args: Prisma.CONDICIONES_MATERIASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONDICIONES_MATERIASPayload>
          }
          aggregate: {
            args: Prisma.CONDICIONES_MATERIASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCONDICIONES_MATERIAS>
          }
          groupBy: {
            args: Prisma.CONDICIONES_MATERIASGroupByArgs<ExtArgs>
            result: $Utils.Optional<CONDICIONES_MATERIASGroupByOutputType>[]
          }
          count: {
            args: Prisma.CONDICIONES_MATERIASCountArgs<ExtArgs>
            result: $Utils.Optional<CONDICIONES_MATERIASCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    pAISES?: PAISESOmit
    lOCALIDADES?: LOCALIDADESOmit
    aREAS_TELEFONICAS?: AREAS_TELEFONICASOmit
    gENEROS?: GENEROSOmit
    cARRERAS?: CARRERASOmit
    mATERIAS?: MATERIASOmit
    cONDICIONES?: CONDICIONESOmit
    eSTUDIANTES?: ESTUDIANTESOmit
    iNSCRIPCIONES?: INSCRIPCIONESOmit
    eSTUDIANTES_CARRERAS?: ESTUDIANTES_CARRERASOmit
    cURSADAS?: CURSADASOmit
    cONDICIONES_MATERIAS?: CONDICIONES_MATERIASOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PAISESCountOutputType
   */

  export type PAISESCountOutputType = {
    localidades: number
    estudiantes: number
  }

  export type PAISESCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidades?: boolean | PAISESCountOutputTypeCountLocalidadesArgs
    estudiantes?: boolean | PAISESCountOutputTypeCountEstudiantesArgs
  }

  // Custom InputTypes
  /**
   * PAISESCountOutputType without action
   */
  export type PAISESCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISESCountOutputType
     */
    select?: PAISESCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PAISESCountOutputType without action
   */
  export type PAISESCountOutputTypeCountLocalidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LOCALIDADESWhereInput
  }

  /**
   * PAISESCountOutputType without action
   */
  export type PAISESCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESTUDIANTESWhereInput
  }


  /**
   * Count Type LOCALIDADESCountOutputType
   */

  export type LOCALIDADESCountOutputType = {
    estudiantes: number
  }

  export type LOCALIDADESCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | LOCALIDADESCountOutputTypeCountEstudiantesArgs
  }

  // Custom InputTypes
  /**
   * LOCALIDADESCountOutputType without action
   */
  export type LOCALIDADESCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADESCountOutputType
     */
    select?: LOCALIDADESCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LOCALIDADESCountOutputType without action
   */
  export type LOCALIDADESCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESTUDIANTESWhereInput
  }


  /**
   * Count Type AREAS_TELEFONICASCountOutputType
   */

  export type AREAS_TELEFONICASCountOutputType = {
    estudiantes: number
  }

  export type AREAS_TELEFONICASCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | AREAS_TELEFONICASCountOutputTypeCountEstudiantesArgs
  }

  // Custom InputTypes
  /**
   * AREAS_TELEFONICASCountOutputType without action
   */
  export type AREAS_TELEFONICASCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICASCountOutputType
     */
    select?: AREAS_TELEFONICASCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AREAS_TELEFONICASCountOutputType without action
   */
  export type AREAS_TELEFONICASCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESTUDIANTESWhereInput
  }


  /**
   * Count Type GENEROSCountOutputType
   */

  export type GENEROSCountOutputType = {
    estudiantes: number
  }

  export type GENEROSCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | GENEROSCountOutputTypeCountEstudiantesArgs
  }

  // Custom InputTypes
  /**
   * GENEROSCountOutputType without action
   */
  export type GENEROSCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROSCountOutputType
     */
    select?: GENEROSCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GENEROSCountOutputType without action
   */
  export type GENEROSCountOutputTypeCountEstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESTUDIANTESWhereInput
  }


  /**
   * Count Type CARRERASCountOutputType
   */

  export type CARRERASCountOutputType = {
    materias: number
    inscripciones: number
    estudiantes_carreras: number
  }

  export type CARRERASCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | CARRERASCountOutputTypeCountMateriasArgs
    inscripciones?: boolean | CARRERASCountOutputTypeCountInscripcionesArgs
    estudiantes_carreras?: boolean | CARRERASCountOutputTypeCountEstudiantes_carrerasArgs
  }

  // Custom InputTypes
  /**
   * CARRERASCountOutputType without action
   */
  export type CARRERASCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERASCountOutputType
     */
    select?: CARRERASCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CARRERASCountOutputType without action
   */
  export type CARRERASCountOutputTypeCountMateriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MATERIASWhereInput
  }

  /**
   * CARRERASCountOutputType without action
   */
  export type CARRERASCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: INSCRIPCIONESWhereInput
  }

  /**
   * CARRERASCountOutputType without action
   */
  export type CARRERASCountOutputTypeCountEstudiantes_carrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESTUDIANTES_CARRERASWhereInput
  }


  /**
   * Count Type MATERIASCountOutputType
   */

  export type MATERIASCountOutputType = {
    cursadas: number
    condiciones_materias: number
  }

  export type MATERIASCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cursadas?: boolean | MATERIASCountOutputTypeCountCursadasArgs
    condiciones_materias?: boolean | MATERIASCountOutputTypeCountCondiciones_materiasArgs
  }

  // Custom InputTypes
  /**
   * MATERIASCountOutputType without action
   */
  export type MATERIASCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIASCountOutputType
     */
    select?: MATERIASCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MATERIASCountOutputType without action
   */
  export type MATERIASCountOutputTypeCountCursadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CURSADASWhereInput
  }

  /**
   * MATERIASCountOutputType without action
   */
  export type MATERIASCountOutputTypeCountCondiciones_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CONDICIONES_MATERIASWhereInput
  }


  /**
   * Count Type CONDICIONESCountOutputType
   */

  export type CONDICIONESCountOutputType = {
    condiciones_materias: number
  }

  export type CONDICIONESCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    condiciones_materias?: boolean | CONDICIONESCountOutputTypeCountCondiciones_materiasArgs
  }

  // Custom InputTypes
  /**
   * CONDICIONESCountOutputType without action
   */
  export type CONDICIONESCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONESCountOutputType
     */
    select?: CONDICIONESCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CONDICIONESCountOutputType without action
   */
  export type CONDICIONESCountOutputTypeCountCondiciones_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CONDICIONES_MATERIASWhereInput
  }


  /**
   * Count Type ESTUDIANTESCountOutputType
   */

  export type ESTUDIANTESCountOutputType = {
    inscripciones: number
    estudiantes_carreras: number
    cursadas: number
    condiciones_materias: number
  }

  export type ESTUDIANTESCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | ESTUDIANTESCountOutputTypeCountInscripcionesArgs
    estudiantes_carreras?: boolean | ESTUDIANTESCountOutputTypeCountEstudiantes_carrerasArgs
    cursadas?: boolean | ESTUDIANTESCountOutputTypeCountCursadasArgs
    condiciones_materias?: boolean | ESTUDIANTESCountOutputTypeCountCondiciones_materiasArgs
  }

  // Custom InputTypes
  /**
   * ESTUDIANTESCountOutputType without action
   */
  export type ESTUDIANTESCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTESCountOutputType
     */
    select?: ESTUDIANTESCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ESTUDIANTESCountOutputType without action
   */
  export type ESTUDIANTESCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: INSCRIPCIONESWhereInput
  }

  /**
   * ESTUDIANTESCountOutputType without action
   */
  export type ESTUDIANTESCountOutputTypeCountEstudiantes_carrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESTUDIANTES_CARRERASWhereInput
  }

  /**
   * ESTUDIANTESCountOutputType without action
   */
  export type ESTUDIANTESCountOutputTypeCountCursadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CURSADASWhereInput
  }

  /**
   * ESTUDIANTESCountOutputType without action
   */
  export type ESTUDIANTESCountOutputTypeCountCondiciones_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CONDICIONES_MATERIASWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PAISES
   */

  export type AggregatePAISES = {
    _count: PAISESCountAggregateOutputType | null
    _avg: PAISESAvgAggregateOutputType | null
    _sum: PAISESSumAggregateOutputType | null
    _min: PAISESMinAggregateOutputType | null
    _max: PAISESMaxAggregateOutputType | null
  }

  export type PAISESAvgAggregateOutputType = {
    id_pais: number | null
  }

  export type PAISESSumAggregateOutputType = {
    id_pais: number | null
  }

  export type PAISESMinAggregateOutputType = {
    id_pais: number | null
    nombre: string | null
  }

  export type PAISESMaxAggregateOutputType = {
    id_pais: number | null
    nombre: string | null
  }

  export type PAISESCountAggregateOutputType = {
    id_pais: number
    nombre: number
    _all: number
  }


  export type PAISESAvgAggregateInputType = {
    id_pais?: true
  }

  export type PAISESSumAggregateInputType = {
    id_pais?: true
  }

  export type PAISESMinAggregateInputType = {
    id_pais?: true
    nombre?: true
  }

  export type PAISESMaxAggregateInputType = {
    id_pais?: true
    nombre?: true
  }

  export type PAISESCountAggregateInputType = {
    id_pais?: true
    nombre?: true
    _all?: true
  }

  export type PAISESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAISES to aggregate.
     */
    where?: PAISESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAISES to fetch.
     */
    orderBy?: PAISESOrderByWithRelationInput | PAISESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PAISESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAISES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAISES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PAISES
    **/
    _count?: true | PAISESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PAISESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PAISESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PAISESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PAISESMaxAggregateInputType
  }

  export type GetPAISESAggregateType<T extends PAISESAggregateArgs> = {
        [P in keyof T & keyof AggregatePAISES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePAISES[P]>
      : GetScalarType<T[P], AggregatePAISES[P]>
  }




  export type PAISESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PAISESWhereInput
    orderBy?: PAISESOrderByWithAggregationInput | PAISESOrderByWithAggregationInput[]
    by: PAISESScalarFieldEnum[] | PAISESScalarFieldEnum
    having?: PAISESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PAISESCountAggregateInputType | true
    _avg?: PAISESAvgAggregateInputType
    _sum?: PAISESSumAggregateInputType
    _min?: PAISESMinAggregateInputType
    _max?: PAISESMaxAggregateInputType
  }

  export type PAISESGroupByOutputType = {
    id_pais: number
    nombre: string
    _count: PAISESCountAggregateOutputType | null
    _avg: PAISESAvgAggregateOutputType | null
    _sum: PAISESSumAggregateOutputType | null
    _min: PAISESMinAggregateOutputType | null
    _max: PAISESMaxAggregateOutputType | null
  }

  type GetPAISESGroupByPayload<T extends PAISESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PAISESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PAISESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PAISESGroupByOutputType[P]>
            : GetScalarType<T[P], PAISESGroupByOutputType[P]>
        }
      >
    >


  export type PAISESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pais?: boolean
    nombre?: boolean
    localidades?: boolean | PAISES$localidadesArgs<ExtArgs>
    estudiantes?: boolean | PAISES$estudiantesArgs<ExtArgs>
    _count?: boolean | PAISESCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pAISES"]>

  export type PAISESSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pais?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["pAISES"]>

  export type PAISESSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pais?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["pAISES"]>

  export type PAISESSelectScalar = {
    id_pais?: boolean
    nombre?: boolean
  }

  export type PAISESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pais" | "nombre", ExtArgs["result"]["pAISES"]>
  export type PAISESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    localidades?: boolean | PAISES$localidadesArgs<ExtArgs>
    estudiantes?: boolean | PAISES$estudiantesArgs<ExtArgs>
    _count?: boolean | PAISESCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PAISESIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PAISESIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PAISESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PAISES"
    objects: {
      localidades: Prisma.$LOCALIDADESPayload<ExtArgs>[]
      estudiantes: Prisma.$ESTUDIANTESPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pais: number
      nombre: string
    }, ExtArgs["result"]["pAISES"]>
    composites: {}
  }

  type PAISESGetPayload<S extends boolean | null | undefined | PAISESDefaultArgs> = $Result.GetResult<Prisma.$PAISESPayload, S>

  type PAISESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PAISESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PAISESCountAggregateInputType | true
    }

  export interface PAISESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PAISES'], meta: { name: 'PAISES' } }
    /**
     * Find zero or one PAISES that matches the filter.
     * @param {PAISESFindUniqueArgs} args - Arguments to find a PAISES
     * @example
     * // Get one PAISES
     * const pAISES = await prisma.pAISES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PAISESFindUniqueArgs>(args: SelectSubset<T, PAISESFindUniqueArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PAISES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PAISESFindUniqueOrThrowArgs} args - Arguments to find a PAISES
     * @example
     * // Get one PAISES
     * const pAISES = await prisma.pAISES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PAISESFindUniqueOrThrowArgs>(args: SelectSubset<T, PAISESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAISES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAISESFindFirstArgs} args - Arguments to find a PAISES
     * @example
     * // Get one PAISES
     * const pAISES = await prisma.pAISES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PAISESFindFirstArgs>(args?: SelectSubset<T, PAISESFindFirstArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PAISES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAISESFindFirstOrThrowArgs} args - Arguments to find a PAISES
     * @example
     * // Get one PAISES
     * const pAISES = await prisma.pAISES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PAISESFindFirstOrThrowArgs>(args?: SelectSubset<T, PAISESFindFirstOrThrowArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PAISES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAISESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PAISES
     * const pAISES = await prisma.pAISES.findMany()
     * 
     * // Get first 10 PAISES
     * const pAISES = await prisma.pAISES.findMany({ take: 10 })
     * 
     * // Only select the `id_pais`
     * const pAISESWithId_paisOnly = await prisma.pAISES.findMany({ select: { id_pais: true } })
     * 
     */
    findMany<T extends PAISESFindManyArgs>(args?: SelectSubset<T, PAISESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PAISES.
     * @param {PAISESCreateArgs} args - Arguments to create a PAISES.
     * @example
     * // Create one PAISES
     * const PAISES = await prisma.pAISES.create({
     *   data: {
     *     // ... data to create a PAISES
     *   }
     * })
     * 
     */
    create<T extends PAISESCreateArgs>(args: SelectSubset<T, PAISESCreateArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PAISES.
     * @param {PAISESCreateManyArgs} args - Arguments to create many PAISES.
     * @example
     * // Create many PAISES
     * const pAISES = await prisma.pAISES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PAISESCreateManyArgs>(args?: SelectSubset<T, PAISESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PAISES and returns the data saved in the database.
     * @param {PAISESCreateManyAndReturnArgs} args - Arguments to create many PAISES.
     * @example
     * // Create many PAISES
     * const pAISES = await prisma.pAISES.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PAISES and only return the `id_pais`
     * const pAISESWithId_paisOnly = await prisma.pAISES.createManyAndReturn({
     *   select: { id_pais: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PAISESCreateManyAndReturnArgs>(args?: SelectSubset<T, PAISESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PAISES.
     * @param {PAISESDeleteArgs} args - Arguments to delete one PAISES.
     * @example
     * // Delete one PAISES
     * const PAISES = await prisma.pAISES.delete({
     *   where: {
     *     // ... filter to delete one PAISES
     *   }
     * })
     * 
     */
    delete<T extends PAISESDeleteArgs>(args: SelectSubset<T, PAISESDeleteArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PAISES.
     * @param {PAISESUpdateArgs} args - Arguments to update one PAISES.
     * @example
     * // Update one PAISES
     * const pAISES = await prisma.pAISES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PAISESUpdateArgs>(args: SelectSubset<T, PAISESUpdateArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PAISES.
     * @param {PAISESDeleteManyArgs} args - Arguments to filter PAISES to delete.
     * @example
     * // Delete a few PAISES
     * const { count } = await prisma.pAISES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PAISESDeleteManyArgs>(args?: SelectSubset<T, PAISESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAISES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAISESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PAISES
     * const pAISES = await prisma.pAISES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PAISESUpdateManyArgs>(args: SelectSubset<T, PAISESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PAISES and returns the data updated in the database.
     * @param {PAISESUpdateManyAndReturnArgs} args - Arguments to update many PAISES.
     * @example
     * // Update many PAISES
     * const pAISES = await prisma.pAISES.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PAISES and only return the `id_pais`
     * const pAISESWithId_paisOnly = await prisma.pAISES.updateManyAndReturn({
     *   select: { id_pais: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PAISESUpdateManyAndReturnArgs>(args: SelectSubset<T, PAISESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PAISES.
     * @param {PAISESUpsertArgs} args - Arguments to update or create a PAISES.
     * @example
     * // Update or create a PAISES
     * const pAISES = await prisma.pAISES.upsert({
     *   create: {
     *     // ... data to create a PAISES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PAISES we want to update
     *   }
     * })
     */
    upsert<T extends PAISESUpsertArgs>(args: SelectSubset<T, PAISESUpsertArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PAISES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAISESCountArgs} args - Arguments to filter PAISES to count.
     * @example
     * // Count the number of PAISES
     * const count = await prisma.pAISES.count({
     *   where: {
     *     // ... the filter for the PAISES we want to count
     *   }
     * })
    **/
    count<T extends PAISESCountArgs>(
      args?: Subset<T, PAISESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PAISESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PAISES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAISESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PAISESAggregateArgs>(args: Subset<T, PAISESAggregateArgs>): Prisma.PrismaPromise<GetPAISESAggregateType<T>>

    /**
     * Group by PAISES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PAISESGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PAISESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PAISESGroupByArgs['orderBy'] }
        : { orderBy?: PAISESGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PAISESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPAISESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PAISES model
   */
  readonly fields: PAISESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PAISES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PAISESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    localidades<T extends PAISES$localidadesArgs<ExtArgs> = {}>(args?: Subset<T, PAISES$localidadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estudiantes<T extends PAISES$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, PAISES$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PAISES model
   */
  interface PAISESFieldRefs {
    readonly id_pais: FieldRef<"PAISES", 'Int'>
    readonly nombre: FieldRef<"PAISES", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PAISES findUnique
   */
  export type PAISESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * Filter, which PAISES to fetch.
     */
    where: PAISESWhereUniqueInput
  }

  /**
   * PAISES findUniqueOrThrow
   */
  export type PAISESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * Filter, which PAISES to fetch.
     */
    where: PAISESWhereUniqueInput
  }

  /**
   * PAISES findFirst
   */
  export type PAISESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * Filter, which PAISES to fetch.
     */
    where?: PAISESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAISES to fetch.
     */
    orderBy?: PAISESOrderByWithRelationInput | PAISESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAISES.
     */
    cursor?: PAISESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAISES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAISES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAISES.
     */
    distinct?: PAISESScalarFieldEnum | PAISESScalarFieldEnum[]
  }

  /**
   * PAISES findFirstOrThrow
   */
  export type PAISESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * Filter, which PAISES to fetch.
     */
    where?: PAISESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAISES to fetch.
     */
    orderBy?: PAISESOrderByWithRelationInput | PAISESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PAISES.
     */
    cursor?: PAISESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAISES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAISES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PAISES.
     */
    distinct?: PAISESScalarFieldEnum | PAISESScalarFieldEnum[]
  }

  /**
   * PAISES findMany
   */
  export type PAISESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * Filter, which PAISES to fetch.
     */
    where?: PAISESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PAISES to fetch.
     */
    orderBy?: PAISESOrderByWithRelationInput | PAISESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PAISES.
     */
    cursor?: PAISESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PAISES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PAISES.
     */
    skip?: number
    distinct?: PAISESScalarFieldEnum | PAISESScalarFieldEnum[]
  }

  /**
   * PAISES create
   */
  export type PAISESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * The data needed to create a PAISES.
     */
    data: XOR<PAISESCreateInput, PAISESUncheckedCreateInput>
  }

  /**
   * PAISES createMany
   */
  export type PAISESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PAISES.
     */
    data: PAISESCreateManyInput | PAISESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAISES createManyAndReturn
   */
  export type PAISESCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * The data used to create many PAISES.
     */
    data: PAISESCreateManyInput | PAISESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PAISES update
   */
  export type PAISESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * The data needed to update a PAISES.
     */
    data: XOR<PAISESUpdateInput, PAISESUncheckedUpdateInput>
    /**
     * Choose, which PAISES to update.
     */
    where: PAISESWhereUniqueInput
  }

  /**
   * PAISES updateMany
   */
  export type PAISESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PAISES.
     */
    data: XOR<PAISESUpdateManyMutationInput, PAISESUncheckedUpdateManyInput>
    /**
     * Filter which PAISES to update
     */
    where?: PAISESWhereInput
    /**
     * Limit how many PAISES to update.
     */
    limit?: number
  }

  /**
   * PAISES updateManyAndReturn
   */
  export type PAISESUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * The data used to update PAISES.
     */
    data: XOR<PAISESUpdateManyMutationInput, PAISESUncheckedUpdateManyInput>
    /**
     * Filter which PAISES to update
     */
    where?: PAISESWhereInput
    /**
     * Limit how many PAISES to update.
     */
    limit?: number
  }

  /**
   * PAISES upsert
   */
  export type PAISESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * The filter to search for the PAISES to update in case it exists.
     */
    where: PAISESWhereUniqueInput
    /**
     * In case the PAISES found by the `where` argument doesn't exist, create a new PAISES with this data.
     */
    create: XOR<PAISESCreateInput, PAISESUncheckedCreateInput>
    /**
     * In case the PAISES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PAISESUpdateInput, PAISESUncheckedUpdateInput>
  }

  /**
   * PAISES delete
   */
  export type PAISESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
    /**
     * Filter which PAISES to delete.
     */
    where: PAISESWhereUniqueInput
  }

  /**
   * PAISES deleteMany
   */
  export type PAISESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PAISES to delete
     */
    where?: PAISESWhereInput
    /**
     * Limit how many PAISES to delete.
     */
    limit?: number
  }

  /**
   * PAISES.localidades
   */
  export type PAISES$localidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    where?: LOCALIDADESWhereInput
    orderBy?: LOCALIDADESOrderByWithRelationInput | LOCALIDADESOrderByWithRelationInput[]
    cursor?: LOCALIDADESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LOCALIDADESScalarFieldEnum | LOCALIDADESScalarFieldEnum[]
  }

  /**
   * PAISES.estudiantes
   */
  export type PAISES$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    where?: ESTUDIANTESWhereInput
    orderBy?: ESTUDIANTESOrderByWithRelationInput | ESTUDIANTESOrderByWithRelationInput[]
    cursor?: ESTUDIANTESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ESTUDIANTESScalarFieldEnum | ESTUDIANTESScalarFieldEnum[]
  }

  /**
   * PAISES without action
   */
  export type PAISESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PAISES
     */
    select?: PAISESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PAISES
     */
    omit?: PAISESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PAISESInclude<ExtArgs> | null
  }


  /**
   * Model LOCALIDADES
   */

  export type AggregateLOCALIDADES = {
    _count: LOCALIDADESCountAggregateOutputType | null
    _avg: LOCALIDADESAvgAggregateOutputType | null
    _sum: LOCALIDADESSumAggregateOutputType | null
    _min: LOCALIDADESMinAggregateOutputType | null
    _max: LOCALIDADESMaxAggregateOutputType | null
  }

  export type LOCALIDADESAvgAggregateOutputType = {
    id_localidad: number | null
    id_pais: number | null
  }

  export type LOCALIDADESSumAggregateOutputType = {
    id_localidad: number | null
    id_pais: number | null
  }

  export type LOCALIDADESMinAggregateOutputType = {
    id_localidad: number | null
    nombre: string | null
    id_pais: number | null
  }

  export type LOCALIDADESMaxAggregateOutputType = {
    id_localidad: number | null
    nombre: string | null
    id_pais: number | null
  }

  export type LOCALIDADESCountAggregateOutputType = {
    id_localidad: number
    nombre: number
    id_pais: number
    _all: number
  }


  export type LOCALIDADESAvgAggregateInputType = {
    id_localidad?: true
    id_pais?: true
  }

  export type LOCALIDADESSumAggregateInputType = {
    id_localidad?: true
    id_pais?: true
  }

  export type LOCALIDADESMinAggregateInputType = {
    id_localidad?: true
    nombre?: true
    id_pais?: true
  }

  export type LOCALIDADESMaxAggregateInputType = {
    id_localidad?: true
    nombre?: true
    id_pais?: true
  }

  export type LOCALIDADESCountAggregateInputType = {
    id_localidad?: true
    nombre?: true
    id_pais?: true
    _all?: true
  }

  export type LOCALIDADESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LOCALIDADES to aggregate.
     */
    where?: LOCALIDADESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOCALIDADES to fetch.
     */
    orderBy?: LOCALIDADESOrderByWithRelationInput | LOCALIDADESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LOCALIDADESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOCALIDADES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOCALIDADES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LOCALIDADES
    **/
    _count?: true | LOCALIDADESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LOCALIDADESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LOCALIDADESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LOCALIDADESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LOCALIDADESMaxAggregateInputType
  }

  export type GetLOCALIDADESAggregateType<T extends LOCALIDADESAggregateArgs> = {
        [P in keyof T & keyof AggregateLOCALIDADES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLOCALIDADES[P]>
      : GetScalarType<T[P], AggregateLOCALIDADES[P]>
  }




  export type LOCALIDADESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LOCALIDADESWhereInput
    orderBy?: LOCALIDADESOrderByWithAggregationInput | LOCALIDADESOrderByWithAggregationInput[]
    by: LOCALIDADESScalarFieldEnum[] | LOCALIDADESScalarFieldEnum
    having?: LOCALIDADESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LOCALIDADESCountAggregateInputType | true
    _avg?: LOCALIDADESAvgAggregateInputType
    _sum?: LOCALIDADESSumAggregateInputType
    _min?: LOCALIDADESMinAggregateInputType
    _max?: LOCALIDADESMaxAggregateInputType
  }

  export type LOCALIDADESGroupByOutputType = {
    id_localidad: number
    nombre: string
    id_pais: number
    _count: LOCALIDADESCountAggregateOutputType | null
    _avg: LOCALIDADESAvgAggregateOutputType | null
    _sum: LOCALIDADESSumAggregateOutputType | null
    _min: LOCALIDADESMinAggregateOutputType | null
    _max: LOCALIDADESMaxAggregateOutputType | null
  }

  type GetLOCALIDADESGroupByPayload<T extends LOCALIDADESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LOCALIDADESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LOCALIDADESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LOCALIDADESGroupByOutputType[P]>
            : GetScalarType<T[P], LOCALIDADESGroupByOutputType[P]>
        }
      >
    >


  export type LOCALIDADESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_localidad?: boolean
    nombre?: boolean
    id_pais?: boolean
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
    estudiantes?: boolean | LOCALIDADES$estudiantesArgs<ExtArgs>
    _count?: boolean | LOCALIDADESCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lOCALIDADES"]>

  export type LOCALIDADESSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_localidad?: boolean
    nombre?: boolean
    id_pais?: boolean
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lOCALIDADES"]>

  export type LOCALIDADESSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_localidad?: boolean
    nombre?: boolean
    id_pais?: boolean
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lOCALIDADES"]>

  export type LOCALIDADESSelectScalar = {
    id_localidad?: boolean
    nombre?: boolean
    id_pais?: boolean
  }

  export type LOCALIDADESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_localidad" | "nombre" | "id_pais", ExtArgs["result"]["lOCALIDADES"]>
  export type LOCALIDADESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
    estudiantes?: boolean | LOCALIDADES$estudiantesArgs<ExtArgs>
    _count?: boolean | LOCALIDADESCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LOCALIDADESIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
  }
  export type LOCALIDADESIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
  }

  export type $LOCALIDADESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LOCALIDADES"
    objects: {
      pais: Prisma.$PAISESPayload<ExtArgs>
      estudiantes: Prisma.$ESTUDIANTESPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_localidad: number
      nombre: string
      id_pais: number
    }, ExtArgs["result"]["lOCALIDADES"]>
    composites: {}
  }

  type LOCALIDADESGetPayload<S extends boolean | null | undefined | LOCALIDADESDefaultArgs> = $Result.GetResult<Prisma.$LOCALIDADESPayload, S>

  type LOCALIDADESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LOCALIDADESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LOCALIDADESCountAggregateInputType | true
    }

  export interface LOCALIDADESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LOCALIDADES'], meta: { name: 'LOCALIDADES' } }
    /**
     * Find zero or one LOCALIDADES that matches the filter.
     * @param {LOCALIDADESFindUniqueArgs} args - Arguments to find a LOCALIDADES
     * @example
     * // Get one LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LOCALIDADESFindUniqueArgs>(args: SelectSubset<T, LOCALIDADESFindUniqueArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LOCALIDADES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LOCALIDADESFindUniqueOrThrowArgs} args - Arguments to find a LOCALIDADES
     * @example
     * // Get one LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LOCALIDADESFindUniqueOrThrowArgs>(args: SelectSubset<T, LOCALIDADESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LOCALIDADES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOCALIDADESFindFirstArgs} args - Arguments to find a LOCALIDADES
     * @example
     * // Get one LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LOCALIDADESFindFirstArgs>(args?: SelectSubset<T, LOCALIDADESFindFirstArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LOCALIDADES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOCALIDADESFindFirstOrThrowArgs} args - Arguments to find a LOCALIDADES
     * @example
     * // Get one LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LOCALIDADESFindFirstOrThrowArgs>(args?: SelectSubset<T, LOCALIDADESFindFirstOrThrowArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LOCALIDADES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOCALIDADESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.findMany()
     * 
     * // Get first 10 LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.findMany({ take: 10 })
     * 
     * // Only select the `id_localidad`
     * const lOCALIDADESWithId_localidadOnly = await prisma.lOCALIDADES.findMany({ select: { id_localidad: true } })
     * 
     */
    findMany<T extends LOCALIDADESFindManyArgs>(args?: SelectSubset<T, LOCALIDADESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LOCALIDADES.
     * @param {LOCALIDADESCreateArgs} args - Arguments to create a LOCALIDADES.
     * @example
     * // Create one LOCALIDADES
     * const LOCALIDADES = await prisma.lOCALIDADES.create({
     *   data: {
     *     // ... data to create a LOCALIDADES
     *   }
     * })
     * 
     */
    create<T extends LOCALIDADESCreateArgs>(args: SelectSubset<T, LOCALIDADESCreateArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LOCALIDADES.
     * @param {LOCALIDADESCreateManyArgs} args - Arguments to create many LOCALIDADES.
     * @example
     * // Create many LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LOCALIDADESCreateManyArgs>(args?: SelectSubset<T, LOCALIDADESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LOCALIDADES and returns the data saved in the database.
     * @param {LOCALIDADESCreateManyAndReturnArgs} args - Arguments to create many LOCALIDADES.
     * @example
     * // Create many LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LOCALIDADES and only return the `id_localidad`
     * const lOCALIDADESWithId_localidadOnly = await prisma.lOCALIDADES.createManyAndReturn({
     *   select: { id_localidad: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LOCALIDADESCreateManyAndReturnArgs>(args?: SelectSubset<T, LOCALIDADESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LOCALIDADES.
     * @param {LOCALIDADESDeleteArgs} args - Arguments to delete one LOCALIDADES.
     * @example
     * // Delete one LOCALIDADES
     * const LOCALIDADES = await prisma.lOCALIDADES.delete({
     *   where: {
     *     // ... filter to delete one LOCALIDADES
     *   }
     * })
     * 
     */
    delete<T extends LOCALIDADESDeleteArgs>(args: SelectSubset<T, LOCALIDADESDeleteArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LOCALIDADES.
     * @param {LOCALIDADESUpdateArgs} args - Arguments to update one LOCALIDADES.
     * @example
     * // Update one LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LOCALIDADESUpdateArgs>(args: SelectSubset<T, LOCALIDADESUpdateArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LOCALIDADES.
     * @param {LOCALIDADESDeleteManyArgs} args - Arguments to filter LOCALIDADES to delete.
     * @example
     * // Delete a few LOCALIDADES
     * const { count } = await prisma.lOCALIDADES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LOCALIDADESDeleteManyArgs>(args?: SelectSubset<T, LOCALIDADESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LOCALIDADES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOCALIDADESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LOCALIDADESUpdateManyArgs>(args: SelectSubset<T, LOCALIDADESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LOCALIDADES and returns the data updated in the database.
     * @param {LOCALIDADESUpdateManyAndReturnArgs} args - Arguments to update many LOCALIDADES.
     * @example
     * // Update many LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LOCALIDADES and only return the `id_localidad`
     * const lOCALIDADESWithId_localidadOnly = await prisma.lOCALIDADES.updateManyAndReturn({
     *   select: { id_localidad: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LOCALIDADESUpdateManyAndReturnArgs>(args: SelectSubset<T, LOCALIDADESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LOCALIDADES.
     * @param {LOCALIDADESUpsertArgs} args - Arguments to update or create a LOCALIDADES.
     * @example
     * // Update or create a LOCALIDADES
     * const lOCALIDADES = await prisma.lOCALIDADES.upsert({
     *   create: {
     *     // ... data to create a LOCALIDADES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LOCALIDADES we want to update
     *   }
     * })
     */
    upsert<T extends LOCALIDADESUpsertArgs>(args: SelectSubset<T, LOCALIDADESUpsertArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LOCALIDADES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOCALIDADESCountArgs} args - Arguments to filter LOCALIDADES to count.
     * @example
     * // Count the number of LOCALIDADES
     * const count = await prisma.lOCALIDADES.count({
     *   where: {
     *     // ... the filter for the LOCALIDADES we want to count
     *   }
     * })
    **/
    count<T extends LOCALIDADESCountArgs>(
      args?: Subset<T, LOCALIDADESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LOCALIDADESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LOCALIDADES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOCALIDADESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LOCALIDADESAggregateArgs>(args: Subset<T, LOCALIDADESAggregateArgs>): Prisma.PrismaPromise<GetLOCALIDADESAggregateType<T>>

    /**
     * Group by LOCALIDADES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LOCALIDADESGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LOCALIDADESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LOCALIDADESGroupByArgs['orderBy'] }
        : { orderBy?: LOCALIDADESGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LOCALIDADESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLOCALIDADESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LOCALIDADES model
   */
  readonly fields: LOCALIDADESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LOCALIDADES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LOCALIDADESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pais<T extends PAISESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PAISESDefaultArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estudiantes<T extends LOCALIDADES$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, LOCALIDADES$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LOCALIDADES model
   */
  interface LOCALIDADESFieldRefs {
    readonly id_localidad: FieldRef<"LOCALIDADES", 'Int'>
    readonly nombre: FieldRef<"LOCALIDADES", 'String'>
    readonly id_pais: FieldRef<"LOCALIDADES", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LOCALIDADES findUnique
   */
  export type LOCALIDADESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * Filter, which LOCALIDADES to fetch.
     */
    where: LOCALIDADESWhereUniqueInput
  }

  /**
   * LOCALIDADES findUniqueOrThrow
   */
  export type LOCALIDADESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * Filter, which LOCALIDADES to fetch.
     */
    where: LOCALIDADESWhereUniqueInput
  }

  /**
   * LOCALIDADES findFirst
   */
  export type LOCALIDADESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * Filter, which LOCALIDADES to fetch.
     */
    where?: LOCALIDADESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOCALIDADES to fetch.
     */
    orderBy?: LOCALIDADESOrderByWithRelationInput | LOCALIDADESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LOCALIDADES.
     */
    cursor?: LOCALIDADESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOCALIDADES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOCALIDADES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LOCALIDADES.
     */
    distinct?: LOCALIDADESScalarFieldEnum | LOCALIDADESScalarFieldEnum[]
  }

  /**
   * LOCALIDADES findFirstOrThrow
   */
  export type LOCALIDADESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * Filter, which LOCALIDADES to fetch.
     */
    where?: LOCALIDADESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOCALIDADES to fetch.
     */
    orderBy?: LOCALIDADESOrderByWithRelationInput | LOCALIDADESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LOCALIDADES.
     */
    cursor?: LOCALIDADESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOCALIDADES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOCALIDADES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LOCALIDADES.
     */
    distinct?: LOCALIDADESScalarFieldEnum | LOCALIDADESScalarFieldEnum[]
  }

  /**
   * LOCALIDADES findMany
   */
  export type LOCALIDADESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * Filter, which LOCALIDADES to fetch.
     */
    where?: LOCALIDADESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LOCALIDADES to fetch.
     */
    orderBy?: LOCALIDADESOrderByWithRelationInput | LOCALIDADESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LOCALIDADES.
     */
    cursor?: LOCALIDADESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LOCALIDADES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LOCALIDADES.
     */
    skip?: number
    distinct?: LOCALIDADESScalarFieldEnum | LOCALIDADESScalarFieldEnum[]
  }

  /**
   * LOCALIDADES create
   */
  export type LOCALIDADESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * The data needed to create a LOCALIDADES.
     */
    data: XOR<LOCALIDADESCreateInput, LOCALIDADESUncheckedCreateInput>
  }

  /**
   * LOCALIDADES createMany
   */
  export type LOCALIDADESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LOCALIDADES.
     */
    data: LOCALIDADESCreateManyInput | LOCALIDADESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LOCALIDADES createManyAndReturn
   */
  export type LOCALIDADESCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * The data used to create many LOCALIDADES.
     */
    data: LOCALIDADESCreateManyInput | LOCALIDADESCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LOCALIDADES update
   */
  export type LOCALIDADESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * The data needed to update a LOCALIDADES.
     */
    data: XOR<LOCALIDADESUpdateInput, LOCALIDADESUncheckedUpdateInput>
    /**
     * Choose, which LOCALIDADES to update.
     */
    where: LOCALIDADESWhereUniqueInput
  }

  /**
   * LOCALIDADES updateMany
   */
  export type LOCALIDADESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LOCALIDADES.
     */
    data: XOR<LOCALIDADESUpdateManyMutationInput, LOCALIDADESUncheckedUpdateManyInput>
    /**
     * Filter which LOCALIDADES to update
     */
    where?: LOCALIDADESWhereInput
    /**
     * Limit how many LOCALIDADES to update.
     */
    limit?: number
  }

  /**
   * LOCALIDADES updateManyAndReturn
   */
  export type LOCALIDADESUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * The data used to update LOCALIDADES.
     */
    data: XOR<LOCALIDADESUpdateManyMutationInput, LOCALIDADESUncheckedUpdateManyInput>
    /**
     * Filter which LOCALIDADES to update
     */
    where?: LOCALIDADESWhereInput
    /**
     * Limit how many LOCALIDADES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LOCALIDADES upsert
   */
  export type LOCALIDADESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * The filter to search for the LOCALIDADES to update in case it exists.
     */
    where: LOCALIDADESWhereUniqueInput
    /**
     * In case the LOCALIDADES found by the `where` argument doesn't exist, create a new LOCALIDADES with this data.
     */
    create: XOR<LOCALIDADESCreateInput, LOCALIDADESUncheckedCreateInput>
    /**
     * In case the LOCALIDADES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LOCALIDADESUpdateInput, LOCALIDADESUncheckedUpdateInput>
  }

  /**
   * LOCALIDADES delete
   */
  export type LOCALIDADESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
    /**
     * Filter which LOCALIDADES to delete.
     */
    where: LOCALIDADESWhereUniqueInput
  }

  /**
   * LOCALIDADES deleteMany
   */
  export type LOCALIDADESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LOCALIDADES to delete
     */
    where?: LOCALIDADESWhereInput
    /**
     * Limit how many LOCALIDADES to delete.
     */
    limit?: number
  }

  /**
   * LOCALIDADES.estudiantes
   */
  export type LOCALIDADES$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    where?: ESTUDIANTESWhereInput
    orderBy?: ESTUDIANTESOrderByWithRelationInput | ESTUDIANTESOrderByWithRelationInput[]
    cursor?: ESTUDIANTESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ESTUDIANTESScalarFieldEnum | ESTUDIANTESScalarFieldEnum[]
  }

  /**
   * LOCALIDADES without action
   */
  export type LOCALIDADESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LOCALIDADES
     */
    select?: LOCALIDADESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LOCALIDADES
     */
    omit?: LOCALIDADESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LOCALIDADESInclude<ExtArgs> | null
  }


  /**
   * Model AREAS_TELEFONICAS
   */

  export type AggregateAREAS_TELEFONICAS = {
    _count: AREAS_TELEFONICASCountAggregateOutputType | null
    _avg: AREAS_TELEFONICASAvgAggregateOutputType | null
    _sum: AREAS_TELEFONICASSumAggregateOutputType | null
    _min: AREAS_TELEFONICASMinAggregateOutputType | null
    _max: AREAS_TELEFONICASMaxAggregateOutputType | null
  }

  export type AREAS_TELEFONICASAvgAggregateOutputType = {
    id_area_telefonica: number | null
  }

  export type AREAS_TELEFONICASSumAggregateOutputType = {
    id_area_telefonica: number | null
  }

  export type AREAS_TELEFONICASMinAggregateOutputType = {
    id_area_telefonica: number | null
    codigo: string | null
  }

  export type AREAS_TELEFONICASMaxAggregateOutputType = {
    id_area_telefonica: number | null
    codigo: string | null
  }

  export type AREAS_TELEFONICASCountAggregateOutputType = {
    id_area_telefonica: number
    codigo: number
    _all: number
  }


  export type AREAS_TELEFONICASAvgAggregateInputType = {
    id_area_telefonica?: true
  }

  export type AREAS_TELEFONICASSumAggregateInputType = {
    id_area_telefonica?: true
  }

  export type AREAS_TELEFONICASMinAggregateInputType = {
    id_area_telefonica?: true
    codigo?: true
  }

  export type AREAS_TELEFONICASMaxAggregateInputType = {
    id_area_telefonica?: true
    codigo?: true
  }

  export type AREAS_TELEFONICASCountAggregateInputType = {
    id_area_telefonica?: true
    codigo?: true
    _all?: true
  }

  export type AREAS_TELEFONICASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AREAS_TELEFONICAS to aggregate.
     */
    where?: AREAS_TELEFONICASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AREAS_TELEFONICAS to fetch.
     */
    orderBy?: AREAS_TELEFONICASOrderByWithRelationInput | AREAS_TELEFONICASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AREAS_TELEFONICASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AREAS_TELEFONICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AREAS_TELEFONICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AREAS_TELEFONICAS
    **/
    _count?: true | AREAS_TELEFONICASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AREAS_TELEFONICASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AREAS_TELEFONICASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AREAS_TELEFONICASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AREAS_TELEFONICASMaxAggregateInputType
  }

  export type GetAREAS_TELEFONICASAggregateType<T extends AREAS_TELEFONICASAggregateArgs> = {
        [P in keyof T & keyof AggregateAREAS_TELEFONICAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAREAS_TELEFONICAS[P]>
      : GetScalarType<T[P], AggregateAREAS_TELEFONICAS[P]>
  }




  export type AREAS_TELEFONICASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AREAS_TELEFONICASWhereInput
    orderBy?: AREAS_TELEFONICASOrderByWithAggregationInput | AREAS_TELEFONICASOrderByWithAggregationInput[]
    by: AREAS_TELEFONICASScalarFieldEnum[] | AREAS_TELEFONICASScalarFieldEnum
    having?: AREAS_TELEFONICASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AREAS_TELEFONICASCountAggregateInputType | true
    _avg?: AREAS_TELEFONICASAvgAggregateInputType
    _sum?: AREAS_TELEFONICASSumAggregateInputType
    _min?: AREAS_TELEFONICASMinAggregateInputType
    _max?: AREAS_TELEFONICASMaxAggregateInputType
  }

  export type AREAS_TELEFONICASGroupByOutputType = {
    id_area_telefonica: number
    codigo: string
    _count: AREAS_TELEFONICASCountAggregateOutputType | null
    _avg: AREAS_TELEFONICASAvgAggregateOutputType | null
    _sum: AREAS_TELEFONICASSumAggregateOutputType | null
    _min: AREAS_TELEFONICASMinAggregateOutputType | null
    _max: AREAS_TELEFONICASMaxAggregateOutputType | null
  }

  type GetAREAS_TELEFONICASGroupByPayload<T extends AREAS_TELEFONICASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AREAS_TELEFONICASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AREAS_TELEFONICASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AREAS_TELEFONICASGroupByOutputType[P]>
            : GetScalarType<T[P], AREAS_TELEFONICASGroupByOutputType[P]>
        }
      >
    >


  export type AREAS_TELEFONICASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_area_telefonica?: boolean
    codigo?: boolean
    estudiantes?: boolean | AREAS_TELEFONICAS$estudiantesArgs<ExtArgs>
    _count?: boolean | AREAS_TELEFONICASCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aREAS_TELEFONICAS"]>

  export type AREAS_TELEFONICASSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_area_telefonica?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["aREAS_TELEFONICAS"]>

  export type AREAS_TELEFONICASSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_area_telefonica?: boolean
    codigo?: boolean
  }, ExtArgs["result"]["aREAS_TELEFONICAS"]>

  export type AREAS_TELEFONICASSelectScalar = {
    id_area_telefonica?: boolean
    codigo?: boolean
  }

  export type AREAS_TELEFONICASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_area_telefonica" | "codigo", ExtArgs["result"]["aREAS_TELEFONICAS"]>
  export type AREAS_TELEFONICASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | AREAS_TELEFONICAS$estudiantesArgs<ExtArgs>
    _count?: boolean | AREAS_TELEFONICASCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AREAS_TELEFONICASIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AREAS_TELEFONICASIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AREAS_TELEFONICASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AREAS_TELEFONICAS"
    objects: {
      estudiantes: Prisma.$ESTUDIANTESPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_area_telefonica: number
      codigo: string
    }, ExtArgs["result"]["aREAS_TELEFONICAS"]>
    composites: {}
  }

  type AREAS_TELEFONICASGetPayload<S extends boolean | null | undefined | AREAS_TELEFONICASDefaultArgs> = $Result.GetResult<Prisma.$AREAS_TELEFONICASPayload, S>

  type AREAS_TELEFONICASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AREAS_TELEFONICASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AREAS_TELEFONICASCountAggregateInputType | true
    }

  export interface AREAS_TELEFONICASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AREAS_TELEFONICAS'], meta: { name: 'AREAS_TELEFONICAS' } }
    /**
     * Find zero or one AREAS_TELEFONICAS that matches the filter.
     * @param {AREAS_TELEFONICASFindUniqueArgs} args - Arguments to find a AREAS_TELEFONICAS
     * @example
     * // Get one AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AREAS_TELEFONICASFindUniqueArgs>(args: SelectSubset<T, AREAS_TELEFONICASFindUniqueArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AREAS_TELEFONICAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AREAS_TELEFONICASFindUniqueOrThrowArgs} args - Arguments to find a AREAS_TELEFONICAS
     * @example
     * // Get one AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AREAS_TELEFONICASFindUniqueOrThrowArgs>(args: SelectSubset<T, AREAS_TELEFONICASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AREAS_TELEFONICAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREAS_TELEFONICASFindFirstArgs} args - Arguments to find a AREAS_TELEFONICAS
     * @example
     * // Get one AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AREAS_TELEFONICASFindFirstArgs>(args?: SelectSubset<T, AREAS_TELEFONICASFindFirstArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AREAS_TELEFONICAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREAS_TELEFONICASFindFirstOrThrowArgs} args - Arguments to find a AREAS_TELEFONICAS
     * @example
     * // Get one AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AREAS_TELEFONICASFindFirstOrThrowArgs>(args?: SelectSubset<T, AREAS_TELEFONICASFindFirstOrThrowArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AREAS_TELEFONICAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREAS_TELEFONICASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.findMany()
     * 
     * // Get first 10 AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.findMany({ take: 10 })
     * 
     * // Only select the `id_area_telefonica`
     * const aREAS_TELEFONICASWithId_area_telefonicaOnly = await prisma.aREAS_TELEFONICAS.findMany({ select: { id_area_telefonica: true } })
     * 
     */
    findMany<T extends AREAS_TELEFONICASFindManyArgs>(args?: SelectSubset<T, AREAS_TELEFONICASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AREAS_TELEFONICAS.
     * @param {AREAS_TELEFONICASCreateArgs} args - Arguments to create a AREAS_TELEFONICAS.
     * @example
     * // Create one AREAS_TELEFONICAS
     * const AREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.create({
     *   data: {
     *     // ... data to create a AREAS_TELEFONICAS
     *   }
     * })
     * 
     */
    create<T extends AREAS_TELEFONICASCreateArgs>(args: SelectSubset<T, AREAS_TELEFONICASCreateArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AREAS_TELEFONICAS.
     * @param {AREAS_TELEFONICASCreateManyArgs} args - Arguments to create many AREAS_TELEFONICAS.
     * @example
     * // Create many AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AREAS_TELEFONICASCreateManyArgs>(args?: SelectSubset<T, AREAS_TELEFONICASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AREAS_TELEFONICAS and returns the data saved in the database.
     * @param {AREAS_TELEFONICASCreateManyAndReturnArgs} args - Arguments to create many AREAS_TELEFONICAS.
     * @example
     * // Create many AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AREAS_TELEFONICAS and only return the `id_area_telefonica`
     * const aREAS_TELEFONICASWithId_area_telefonicaOnly = await prisma.aREAS_TELEFONICAS.createManyAndReturn({
     *   select: { id_area_telefonica: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AREAS_TELEFONICASCreateManyAndReturnArgs>(args?: SelectSubset<T, AREAS_TELEFONICASCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AREAS_TELEFONICAS.
     * @param {AREAS_TELEFONICASDeleteArgs} args - Arguments to delete one AREAS_TELEFONICAS.
     * @example
     * // Delete one AREAS_TELEFONICAS
     * const AREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.delete({
     *   where: {
     *     // ... filter to delete one AREAS_TELEFONICAS
     *   }
     * })
     * 
     */
    delete<T extends AREAS_TELEFONICASDeleteArgs>(args: SelectSubset<T, AREAS_TELEFONICASDeleteArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AREAS_TELEFONICAS.
     * @param {AREAS_TELEFONICASUpdateArgs} args - Arguments to update one AREAS_TELEFONICAS.
     * @example
     * // Update one AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AREAS_TELEFONICASUpdateArgs>(args: SelectSubset<T, AREAS_TELEFONICASUpdateArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AREAS_TELEFONICAS.
     * @param {AREAS_TELEFONICASDeleteManyArgs} args - Arguments to filter AREAS_TELEFONICAS to delete.
     * @example
     * // Delete a few AREAS_TELEFONICAS
     * const { count } = await prisma.aREAS_TELEFONICAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AREAS_TELEFONICASDeleteManyArgs>(args?: SelectSubset<T, AREAS_TELEFONICASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AREAS_TELEFONICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREAS_TELEFONICASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AREAS_TELEFONICASUpdateManyArgs>(args: SelectSubset<T, AREAS_TELEFONICASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AREAS_TELEFONICAS and returns the data updated in the database.
     * @param {AREAS_TELEFONICASUpdateManyAndReturnArgs} args - Arguments to update many AREAS_TELEFONICAS.
     * @example
     * // Update many AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AREAS_TELEFONICAS and only return the `id_area_telefonica`
     * const aREAS_TELEFONICASWithId_area_telefonicaOnly = await prisma.aREAS_TELEFONICAS.updateManyAndReturn({
     *   select: { id_area_telefonica: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AREAS_TELEFONICASUpdateManyAndReturnArgs>(args: SelectSubset<T, AREAS_TELEFONICASUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AREAS_TELEFONICAS.
     * @param {AREAS_TELEFONICASUpsertArgs} args - Arguments to update or create a AREAS_TELEFONICAS.
     * @example
     * // Update or create a AREAS_TELEFONICAS
     * const aREAS_TELEFONICAS = await prisma.aREAS_TELEFONICAS.upsert({
     *   create: {
     *     // ... data to create a AREAS_TELEFONICAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AREAS_TELEFONICAS we want to update
     *   }
     * })
     */
    upsert<T extends AREAS_TELEFONICASUpsertArgs>(args: SelectSubset<T, AREAS_TELEFONICASUpsertArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AREAS_TELEFONICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREAS_TELEFONICASCountArgs} args - Arguments to filter AREAS_TELEFONICAS to count.
     * @example
     * // Count the number of AREAS_TELEFONICAS
     * const count = await prisma.aREAS_TELEFONICAS.count({
     *   where: {
     *     // ... the filter for the AREAS_TELEFONICAS we want to count
     *   }
     * })
    **/
    count<T extends AREAS_TELEFONICASCountArgs>(
      args?: Subset<T, AREAS_TELEFONICASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AREAS_TELEFONICASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AREAS_TELEFONICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREAS_TELEFONICASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AREAS_TELEFONICASAggregateArgs>(args: Subset<T, AREAS_TELEFONICASAggregateArgs>): Prisma.PrismaPromise<GetAREAS_TELEFONICASAggregateType<T>>

    /**
     * Group by AREAS_TELEFONICAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AREAS_TELEFONICASGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AREAS_TELEFONICASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AREAS_TELEFONICASGroupByArgs['orderBy'] }
        : { orderBy?: AREAS_TELEFONICASGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AREAS_TELEFONICASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAREAS_TELEFONICASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AREAS_TELEFONICAS model
   */
  readonly fields: AREAS_TELEFONICASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AREAS_TELEFONICAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AREAS_TELEFONICASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiantes<T extends AREAS_TELEFONICAS$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, AREAS_TELEFONICAS$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AREAS_TELEFONICAS model
   */
  interface AREAS_TELEFONICASFieldRefs {
    readonly id_area_telefonica: FieldRef<"AREAS_TELEFONICAS", 'Int'>
    readonly codigo: FieldRef<"AREAS_TELEFONICAS", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AREAS_TELEFONICAS findUnique
   */
  export type AREAS_TELEFONICASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * Filter, which AREAS_TELEFONICAS to fetch.
     */
    where: AREAS_TELEFONICASWhereUniqueInput
  }

  /**
   * AREAS_TELEFONICAS findUniqueOrThrow
   */
  export type AREAS_TELEFONICASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * Filter, which AREAS_TELEFONICAS to fetch.
     */
    where: AREAS_TELEFONICASWhereUniqueInput
  }

  /**
   * AREAS_TELEFONICAS findFirst
   */
  export type AREAS_TELEFONICASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * Filter, which AREAS_TELEFONICAS to fetch.
     */
    where?: AREAS_TELEFONICASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AREAS_TELEFONICAS to fetch.
     */
    orderBy?: AREAS_TELEFONICASOrderByWithRelationInput | AREAS_TELEFONICASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AREAS_TELEFONICAS.
     */
    cursor?: AREAS_TELEFONICASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AREAS_TELEFONICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AREAS_TELEFONICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AREAS_TELEFONICAS.
     */
    distinct?: AREAS_TELEFONICASScalarFieldEnum | AREAS_TELEFONICASScalarFieldEnum[]
  }

  /**
   * AREAS_TELEFONICAS findFirstOrThrow
   */
  export type AREAS_TELEFONICASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * Filter, which AREAS_TELEFONICAS to fetch.
     */
    where?: AREAS_TELEFONICASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AREAS_TELEFONICAS to fetch.
     */
    orderBy?: AREAS_TELEFONICASOrderByWithRelationInput | AREAS_TELEFONICASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AREAS_TELEFONICAS.
     */
    cursor?: AREAS_TELEFONICASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AREAS_TELEFONICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AREAS_TELEFONICAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AREAS_TELEFONICAS.
     */
    distinct?: AREAS_TELEFONICASScalarFieldEnum | AREAS_TELEFONICASScalarFieldEnum[]
  }

  /**
   * AREAS_TELEFONICAS findMany
   */
  export type AREAS_TELEFONICASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * Filter, which AREAS_TELEFONICAS to fetch.
     */
    where?: AREAS_TELEFONICASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AREAS_TELEFONICAS to fetch.
     */
    orderBy?: AREAS_TELEFONICASOrderByWithRelationInput | AREAS_TELEFONICASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AREAS_TELEFONICAS.
     */
    cursor?: AREAS_TELEFONICASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AREAS_TELEFONICAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AREAS_TELEFONICAS.
     */
    skip?: number
    distinct?: AREAS_TELEFONICASScalarFieldEnum | AREAS_TELEFONICASScalarFieldEnum[]
  }

  /**
   * AREAS_TELEFONICAS create
   */
  export type AREAS_TELEFONICASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * The data needed to create a AREAS_TELEFONICAS.
     */
    data: XOR<AREAS_TELEFONICASCreateInput, AREAS_TELEFONICASUncheckedCreateInput>
  }

  /**
   * AREAS_TELEFONICAS createMany
   */
  export type AREAS_TELEFONICASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AREAS_TELEFONICAS.
     */
    data: AREAS_TELEFONICASCreateManyInput | AREAS_TELEFONICASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AREAS_TELEFONICAS createManyAndReturn
   */
  export type AREAS_TELEFONICASCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * The data used to create many AREAS_TELEFONICAS.
     */
    data: AREAS_TELEFONICASCreateManyInput | AREAS_TELEFONICASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AREAS_TELEFONICAS update
   */
  export type AREAS_TELEFONICASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * The data needed to update a AREAS_TELEFONICAS.
     */
    data: XOR<AREAS_TELEFONICASUpdateInput, AREAS_TELEFONICASUncheckedUpdateInput>
    /**
     * Choose, which AREAS_TELEFONICAS to update.
     */
    where: AREAS_TELEFONICASWhereUniqueInput
  }

  /**
   * AREAS_TELEFONICAS updateMany
   */
  export type AREAS_TELEFONICASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AREAS_TELEFONICAS.
     */
    data: XOR<AREAS_TELEFONICASUpdateManyMutationInput, AREAS_TELEFONICASUncheckedUpdateManyInput>
    /**
     * Filter which AREAS_TELEFONICAS to update
     */
    where?: AREAS_TELEFONICASWhereInput
    /**
     * Limit how many AREAS_TELEFONICAS to update.
     */
    limit?: number
  }

  /**
   * AREAS_TELEFONICAS updateManyAndReturn
   */
  export type AREAS_TELEFONICASUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * The data used to update AREAS_TELEFONICAS.
     */
    data: XOR<AREAS_TELEFONICASUpdateManyMutationInput, AREAS_TELEFONICASUncheckedUpdateManyInput>
    /**
     * Filter which AREAS_TELEFONICAS to update
     */
    where?: AREAS_TELEFONICASWhereInput
    /**
     * Limit how many AREAS_TELEFONICAS to update.
     */
    limit?: number
  }

  /**
   * AREAS_TELEFONICAS upsert
   */
  export type AREAS_TELEFONICASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * The filter to search for the AREAS_TELEFONICAS to update in case it exists.
     */
    where: AREAS_TELEFONICASWhereUniqueInput
    /**
     * In case the AREAS_TELEFONICAS found by the `where` argument doesn't exist, create a new AREAS_TELEFONICAS with this data.
     */
    create: XOR<AREAS_TELEFONICASCreateInput, AREAS_TELEFONICASUncheckedCreateInput>
    /**
     * In case the AREAS_TELEFONICAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AREAS_TELEFONICASUpdateInput, AREAS_TELEFONICASUncheckedUpdateInput>
  }

  /**
   * AREAS_TELEFONICAS delete
   */
  export type AREAS_TELEFONICASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
    /**
     * Filter which AREAS_TELEFONICAS to delete.
     */
    where: AREAS_TELEFONICASWhereUniqueInput
  }

  /**
   * AREAS_TELEFONICAS deleteMany
   */
  export type AREAS_TELEFONICASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AREAS_TELEFONICAS to delete
     */
    where?: AREAS_TELEFONICASWhereInput
    /**
     * Limit how many AREAS_TELEFONICAS to delete.
     */
    limit?: number
  }

  /**
   * AREAS_TELEFONICAS.estudiantes
   */
  export type AREAS_TELEFONICAS$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    where?: ESTUDIANTESWhereInput
    orderBy?: ESTUDIANTESOrderByWithRelationInput | ESTUDIANTESOrderByWithRelationInput[]
    cursor?: ESTUDIANTESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ESTUDIANTESScalarFieldEnum | ESTUDIANTESScalarFieldEnum[]
  }

  /**
   * AREAS_TELEFONICAS without action
   */
  export type AREAS_TELEFONICASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AREAS_TELEFONICAS
     */
    select?: AREAS_TELEFONICASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AREAS_TELEFONICAS
     */
    omit?: AREAS_TELEFONICASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AREAS_TELEFONICASInclude<ExtArgs> | null
  }


  /**
   * Model GENEROS
   */

  export type AggregateGENEROS = {
    _count: GENEROSCountAggregateOutputType | null
    _avg: GENEROSAvgAggregateOutputType | null
    _sum: GENEROSSumAggregateOutputType | null
    _min: GENEROSMinAggregateOutputType | null
    _max: GENEROSMaxAggregateOutputType | null
  }

  export type GENEROSAvgAggregateOutputType = {
    id_genero: number | null
  }

  export type GENEROSSumAggregateOutputType = {
    id_genero: number | null
  }

  export type GENEROSMinAggregateOutputType = {
    id_genero: number | null
    nombre: string | null
  }

  export type GENEROSMaxAggregateOutputType = {
    id_genero: number | null
    nombre: string | null
  }

  export type GENEROSCountAggregateOutputType = {
    id_genero: number
    nombre: number
    _all: number
  }


  export type GENEROSAvgAggregateInputType = {
    id_genero?: true
  }

  export type GENEROSSumAggregateInputType = {
    id_genero?: true
  }

  export type GENEROSMinAggregateInputType = {
    id_genero?: true
    nombre?: true
  }

  export type GENEROSMaxAggregateInputType = {
    id_genero?: true
    nombre?: true
  }

  export type GENEROSCountAggregateInputType = {
    id_genero?: true
    nombre?: true
    _all?: true
  }

  export type GENEROSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GENEROS to aggregate.
     */
    where?: GENEROSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GENEROS to fetch.
     */
    orderBy?: GENEROSOrderByWithRelationInput | GENEROSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GENEROSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GENEROS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GENEROS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GENEROS
    **/
    _count?: true | GENEROSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GENEROSAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GENEROSSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GENEROSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GENEROSMaxAggregateInputType
  }

  export type GetGENEROSAggregateType<T extends GENEROSAggregateArgs> = {
        [P in keyof T & keyof AggregateGENEROS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGENEROS[P]>
      : GetScalarType<T[P], AggregateGENEROS[P]>
  }




  export type GENEROSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GENEROSWhereInput
    orderBy?: GENEROSOrderByWithAggregationInput | GENEROSOrderByWithAggregationInput[]
    by: GENEROSScalarFieldEnum[] | GENEROSScalarFieldEnum
    having?: GENEROSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GENEROSCountAggregateInputType | true
    _avg?: GENEROSAvgAggregateInputType
    _sum?: GENEROSSumAggregateInputType
    _min?: GENEROSMinAggregateInputType
    _max?: GENEROSMaxAggregateInputType
  }

  export type GENEROSGroupByOutputType = {
    id_genero: number
    nombre: string
    _count: GENEROSCountAggregateOutputType | null
    _avg: GENEROSAvgAggregateOutputType | null
    _sum: GENEROSSumAggregateOutputType | null
    _min: GENEROSMinAggregateOutputType | null
    _max: GENEROSMaxAggregateOutputType | null
  }

  type GetGENEROSGroupByPayload<T extends GENEROSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GENEROSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GENEROSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GENEROSGroupByOutputType[P]>
            : GetScalarType<T[P], GENEROSGroupByOutputType[P]>
        }
      >
    >


  export type GENEROSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_genero?: boolean
    nombre?: boolean
    estudiantes?: boolean | GENEROS$estudiantesArgs<ExtArgs>
    _count?: boolean | GENEROSCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gENEROS"]>

  export type GENEROSSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_genero?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["gENEROS"]>

  export type GENEROSSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_genero?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["gENEROS"]>

  export type GENEROSSelectScalar = {
    id_genero?: boolean
    nombre?: boolean
  }

  export type GENEROSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_genero" | "nombre", ExtArgs["result"]["gENEROS"]>
  export type GENEROSInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiantes?: boolean | GENEROS$estudiantesArgs<ExtArgs>
    _count?: boolean | GENEROSCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GENEROSIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GENEROSIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GENEROSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GENEROS"
    objects: {
      estudiantes: Prisma.$ESTUDIANTESPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_genero: number
      nombre: string
    }, ExtArgs["result"]["gENEROS"]>
    composites: {}
  }

  type GENEROSGetPayload<S extends boolean | null | undefined | GENEROSDefaultArgs> = $Result.GetResult<Prisma.$GENEROSPayload, S>

  type GENEROSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GENEROSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GENEROSCountAggregateInputType | true
    }

  export interface GENEROSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GENEROS'], meta: { name: 'GENEROS' } }
    /**
     * Find zero or one GENEROS that matches the filter.
     * @param {GENEROSFindUniqueArgs} args - Arguments to find a GENEROS
     * @example
     * // Get one GENEROS
     * const gENEROS = await prisma.gENEROS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GENEROSFindUniqueArgs>(args: SelectSubset<T, GENEROSFindUniqueArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GENEROS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GENEROSFindUniqueOrThrowArgs} args - Arguments to find a GENEROS
     * @example
     * // Get one GENEROS
     * const gENEROS = await prisma.gENEROS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GENEROSFindUniqueOrThrowArgs>(args: SelectSubset<T, GENEROSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GENEROS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GENEROSFindFirstArgs} args - Arguments to find a GENEROS
     * @example
     * // Get one GENEROS
     * const gENEROS = await prisma.gENEROS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GENEROSFindFirstArgs>(args?: SelectSubset<T, GENEROSFindFirstArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GENEROS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GENEROSFindFirstOrThrowArgs} args - Arguments to find a GENEROS
     * @example
     * // Get one GENEROS
     * const gENEROS = await prisma.gENEROS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GENEROSFindFirstOrThrowArgs>(args?: SelectSubset<T, GENEROSFindFirstOrThrowArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GENEROS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GENEROSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GENEROS
     * const gENEROS = await prisma.gENEROS.findMany()
     * 
     * // Get first 10 GENEROS
     * const gENEROS = await prisma.gENEROS.findMany({ take: 10 })
     * 
     * // Only select the `id_genero`
     * const gENEROSWithId_generoOnly = await prisma.gENEROS.findMany({ select: { id_genero: true } })
     * 
     */
    findMany<T extends GENEROSFindManyArgs>(args?: SelectSubset<T, GENEROSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GENEROS.
     * @param {GENEROSCreateArgs} args - Arguments to create a GENEROS.
     * @example
     * // Create one GENEROS
     * const GENEROS = await prisma.gENEROS.create({
     *   data: {
     *     // ... data to create a GENEROS
     *   }
     * })
     * 
     */
    create<T extends GENEROSCreateArgs>(args: SelectSubset<T, GENEROSCreateArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GENEROS.
     * @param {GENEROSCreateManyArgs} args - Arguments to create many GENEROS.
     * @example
     * // Create many GENEROS
     * const gENEROS = await prisma.gENEROS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GENEROSCreateManyArgs>(args?: SelectSubset<T, GENEROSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GENEROS and returns the data saved in the database.
     * @param {GENEROSCreateManyAndReturnArgs} args - Arguments to create many GENEROS.
     * @example
     * // Create many GENEROS
     * const gENEROS = await prisma.gENEROS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GENEROS and only return the `id_genero`
     * const gENEROSWithId_generoOnly = await prisma.gENEROS.createManyAndReturn({
     *   select: { id_genero: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GENEROSCreateManyAndReturnArgs>(args?: SelectSubset<T, GENEROSCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GENEROS.
     * @param {GENEROSDeleteArgs} args - Arguments to delete one GENEROS.
     * @example
     * // Delete one GENEROS
     * const GENEROS = await prisma.gENEROS.delete({
     *   where: {
     *     // ... filter to delete one GENEROS
     *   }
     * })
     * 
     */
    delete<T extends GENEROSDeleteArgs>(args: SelectSubset<T, GENEROSDeleteArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GENEROS.
     * @param {GENEROSUpdateArgs} args - Arguments to update one GENEROS.
     * @example
     * // Update one GENEROS
     * const gENEROS = await prisma.gENEROS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GENEROSUpdateArgs>(args: SelectSubset<T, GENEROSUpdateArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GENEROS.
     * @param {GENEROSDeleteManyArgs} args - Arguments to filter GENEROS to delete.
     * @example
     * // Delete a few GENEROS
     * const { count } = await prisma.gENEROS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GENEROSDeleteManyArgs>(args?: SelectSubset<T, GENEROSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GENEROS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GENEROSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GENEROS
     * const gENEROS = await prisma.gENEROS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GENEROSUpdateManyArgs>(args: SelectSubset<T, GENEROSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GENEROS and returns the data updated in the database.
     * @param {GENEROSUpdateManyAndReturnArgs} args - Arguments to update many GENEROS.
     * @example
     * // Update many GENEROS
     * const gENEROS = await prisma.gENEROS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GENEROS and only return the `id_genero`
     * const gENEROSWithId_generoOnly = await prisma.gENEROS.updateManyAndReturn({
     *   select: { id_genero: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GENEROSUpdateManyAndReturnArgs>(args: SelectSubset<T, GENEROSUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GENEROS.
     * @param {GENEROSUpsertArgs} args - Arguments to update or create a GENEROS.
     * @example
     * // Update or create a GENEROS
     * const gENEROS = await prisma.gENEROS.upsert({
     *   create: {
     *     // ... data to create a GENEROS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GENEROS we want to update
     *   }
     * })
     */
    upsert<T extends GENEROSUpsertArgs>(args: SelectSubset<T, GENEROSUpsertArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GENEROS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GENEROSCountArgs} args - Arguments to filter GENEROS to count.
     * @example
     * // Count the number of GENEROS
     * const count = await prisma.gENEROS.count({
     *   where: {
     *     // ... the filter for the GENEROS we want to count
     *   }
     * })
    **/
    count<T extends GENEROSCountArgs>(
      args?: Subset<T, GENEROSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GENEROSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GENEROS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GENEROSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GENEROSAggregateArgs>(args: Subset<T, GENEROSAggregateArgs>): Prisma.PrismaPromise<GetGENEROSAggregateType<T>>

    /**
     * Group by GENEROS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GENEROSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GENEROSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GENEROSGroupByArgs['orderBy'] }
        : { orderBy?: GENEROSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GENEROSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGENEROSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GENEROS model
   */
  readonly fields: GENEROSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GENEROS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GENEROSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiantes<T extends GENEROS$estudiantesArgs<ExtArgs> = {}>(args?: Subset<T, GENEROS$estudiantesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GENEROS model
   */
  interface GENEROSFieldRefs {
    readonly id_genero: FieldRef<"GENEROS", 'Int'>
    readonly nombre: FieldRef<"GENEROS", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GENEROS findUnique
   */
  export type GENEROSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * Filter, which GENEROS to fetch.
     */
    where: GENEROSWhereUniqueInput
  }

  /**
   * GENEROS findUniqueOrThrow
   */
  export type GENEROSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * Filter, which GENEROS to fetch.
     */
    where: GENEROSWhereUniqueInput
  }

  /**
   * GENEROS findFirst
   */
  export type GENEROSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * Filter, which GENEROS to fetch.
     */
    where?: GENEROSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GENEROS to fetch.
     */
    orderBy?: GENEROSOrderByWithRelationInput | GENEROSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GENEROS.
     */
    cursor?: GENEROSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GENEROS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GENEROS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GENEROS.
     */
    distinct?: GENEROSScalarFieldEnum | GENEROSScalarFieldEnum[]
  }

  /**
   * GENEROS findFirstOrThrow
   */
  export type GENEROSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * Filter, which GENEROS to fetch.
     */
    where?: GENEROSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GENEROS to fetch.
     */
    orderBy?: GENEROSOrderByWithRelationInput | GENEROSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GENEROS.
     */
    cursor?: GENEROSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GENEROS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GENEROS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GENEROS.
     */
    distinct?: GENEROSScalarFieldEnum | GENEROSScalarFieldEnum[]
  }

  /**
   * GENEROS findMany
   */
  export type GENEROSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * Filter, which GENEROS to fetch.
     */
    where?: GENEROSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GENEROS to fetch.
     */
    orderBy?: GENEROSOrderByWithRelationInput | GENEROSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GENEROS.
     */
    cursor?: GENEROSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GENEROS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GENEROS.
     */
    skip?: number
    distinct?: GENEROSScalarFieldEnum | GENEROSScalarFieldEnum[]
  }

  /**
   * GENEROS create
   */
  export type GENEROSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * The data needed to create a GENEROS.
     */
    data: XOR<GENEROSCreateInput, GENEROSUncheckedCreateInput>
  }

  /**
   * GENEROS createMany
   */
  export type GENEROSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GENEROS.
     */
    data: GENEROSCreateManyInput | GENEROSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GENEROS createManyAndReturn
   */
  export type GENEROSCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * The data used to create many GENEROS.
     */
    data: GENEROSCreateManyInput | GENEROSCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GENEROS update
   */
  export type GENEROSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * The data needed to update a GENEROS.
     */
    data: XOR<GENEROSUpdateInput, GENEROSUncheckedUpdateInput>
    /**
     * Choose, which GENEROS to update.
     */
    where: GENEROSWhereUniqueInput
  }

  /**
   * GENEROS updateMany
   */
  export type GENEROSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GENEROS.
     */
    data: XOR<GENEROSUpdateManyMutationInput, GENEROSUncheckedUpdateManyInput>
    /**
     * Filter which GENEROS to update
     */
    where?: GENEROSWhereInput
    /**
     * Limit how many GENEROS to update.
     */
    limit?: number
  }

  /**
   * GENEROS updateManyAndReturn
   */
  export type GENEROSUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * The data used to update GENEROS.
     */
    data: XOR<GENEROSUpdateManyMutationInput, GENEROSUncheckedUpdateManyInput>
    /**
     * Filter which GENEROS to update
     */
    where?: GENEROSWhereInput
    /**
     * Limit how many GENEROS to update.
     */
    limit?: number
  }

  /**
   * GENEROS upsert
   */
  export type GENEROSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * The filter to search for the GENEROS to update in case it exists.
     */
    where: GENEROSWhereUniqueInput
    /**
     * In case the GENEROS found by the `where` argument doesn't exist, create a new GENEROS with this data.
     */
    create: XOR<GENEROSCreateInput, GENEROSUncheckedCreateInput>
    /**
     * In case the GENEROS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GENEROSUpdateInput, GENEROSUncheckedUpdateInput>
  }

  /**
   * GENEROS delete
   */
  export type GENEROSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
    /**
     * Filter which GENEROS to delete.
     */
    where: GENEROSWhereUniqueInput
  }

  /**
   * GENEROS deleteMany
   */
  export type GENEROSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GENEROS to delete
     */
    where?: GENEROSWhereInput
    /**
     * Limit how many GENEROS to delete.
     */
    limit?: number
  }

  /**
   * GENEROS.estudiantes
   */
  export type GENEROS$estudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    where?: ESTUDIANTESWhereInput
    orderBy?: ESTUDIANTESOrderByWithRelationInput | ESTUDIANTESOrderByWithRelationInput[]
    cursor?: ESTUDIANTESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ESTUDIANTESScalarFieldEnum | ESTUDIANTESScalarFieldEnum[]
  }

  /**
   * GENEROS without action
   */
  export type GENEROSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GENEROS
     */
    select?: GENEROSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GENEROS
     */
    omit?: GENEROSOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GENEROSInclude<ExtArgs> | null
  }


  /**
   * Model CARRERAS
   */

  export type AggregateCARRERAS = {
    _count: CARRERASCountAggregateOutputType | null
    _avg: CARRERASAvgAggregateOutputType | null
    _sum: CARRERASSumAggregateOutputType | null
    _min: CARRERASMinAggregateOutputType | null
    _max: CARRERASMaxAggregateOutputType | null
  }

  export type CARRERASAvgAggregateOutputType = {
    id_carrera: number | null
    duracion: number | null
  }

  export type CARRERASSumAggregateOutputType = {
    id_carrera: number | null
    duracion: number | null
  }

  export type CARRERASMinAggregateOutputType = {
    id_carrera: number | null
    nombre: string | null
    duracion: number | null
    titulo_otorgado: string | null
  }

  export type CARRERASMaxAggregateOutputType = {
    id_carrera: number | null
    nombre: string | null
    duracion: number | null
    titulo_otorgado: string | null
  }

  export type CARRERASCountAggregateOutputType = {
    id_carrera: number
    nombre: number
    duracion: number
    titulo_otorgado: number
    _all: number
  }


  export type CARRERASAvgAggregateInputType = {
    id_carrera?: true
    duracion?: true
  }

  export type CARRERASSumAggregateInputType = {
    id_carrera?: true
    duracion?: true
  }

  export type CARRERASMinAggregateInputType = {
    id_carrera?: true
    nombre?: true
    duracion?: true
    titulo_otorgado?: true
  }

  export type CARRERASMaxAggregateInputType = {
    id_carrera?: true
    nombre?: true
    duracion?: true
    titulo_otorgado?: true
  }

  export type CARRERASCountAggregateInputType = {
    id_carrera?: true
    nombre?: true
    duracion?: true
    titulo_otorgado?: true
    _all?: true
  }

  export type CARRERASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CARRERAS to aggregate.
     */
    where?: CARRERASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CARRERAS to fetch.
     */
    orderBy?: CARRERASOrderByWithRelationInput | CARRERASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CARRERASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CARRERAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CARRERAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CARRERAS
    **/
    _count?: true | CARRERASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CARRERASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CARRERASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CARRERASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CARRERASMaxAggregateInputType
  }

  export type GetCARRERASAggregateType<T extends CARRERASAggregateArgs> = {
        [P in keyof T & keyof AggregateCARRERAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCARRERAS[P]>
      : GetScalarType<T[P], AggregateCARRERAS[P]>
  }




  export type CARRERASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CARRERASWhereInput
    orderBy?: CARRERASOrderByWithAggregationInput | CARRERASOrderByWithAggregationInput[]
    by: CARRERASScalarFieldEnum[] | CARRERASScalarFieldEnum
    having?: CARRERASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CARRERASCountAggregateInputType | true
    _avg?: CARRERASAvgAggregateInputType
    _sum?: CARRERASSumAggregateInputType
    _min?: CARRERASMinAggregateInputType
    _max?: CARRERASMaxAggregateInputType
  }

  export type CARRERASGroupByOutputType = {
    id_carrera: number
    nombre: string
    duracion: number
    titulo_otorgado: string
    _count: CARRERASCountAggregateOutputType | null
    _avg: CARRERASAvgAggregateOutputType | null
    _sum: CARRERASSumAggregateOutputType | null
    _min: CARRERASMinAggregateOutputType | null
    _max: CARRERASMaxAggregateOutputType | null
  }

  type GetCARRERASGroupByPayload<T extends CARRERASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CARRERASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CARRERASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CARRERASGroupByOutputType[P]>
            : GetScalarType<T[P], CARRERASGroupByOutputType[P]>
        }
      >
    >


  export type CARRERASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre?: boolean
    duracion?: boolean
    titulo_otorgado?: boolean
    materias?: boolean | CARRERAS$materiasArgs<ExtArgs>
    inscripciones?: boolean | CARRERAS$inscripcionesArgs<ExtArgs>
    estudiantes_carreras?: boolean | CARRERAS$estudiantes_carrerasArgs<ExtArgs>
    _count?: boolean | CARRERASCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cARRERAS"]>

  export type CARRERASSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre?: boolean
    duracion?: boolean
    titulo_otorgado?: boolean
  }, ExtArgs["result"]["cARRERAS"]>

  export type CARRERASSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_carrera?: boolean
    nombre?: boolean
    duracion?: boolean
    titulo_otorgado?: boolean
  }, ExtArgs["result"]["cARRERAS"]>

  export type CARRERASSelectScalar = {
    id_carrera?: boolean
    nombre?: boolean
    duracion?: boolean
    titulo_otorgado?: boolean
  }

  export type CARRERASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_carrera" | "nombre" | "duracion" | "titulo_otorgado", ExtArgs["result"]["cARRERAS"]>
  export type CARRERASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    materias?: boolean | CARRERAS$materiasArgs<ExtArgs>
    inscripciones?: boolean | CARRERAS$inscripcionesArgs<ExtArgs>
    estudiantes_carreras?: boolean | CARRERAS$estudiantes_carrerasArgs<ExtArgs>
    _count?: boolean | CARRERASCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CARRERASIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CARRERASIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CARRERASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CARRERAS"
    objects: {
      materias: Prisma.$MATERIASPayload<ExtArgs>[]
      inscripciones: Prisma.$INSCRIPCIONESPayload<ExtArgs>[]
      estudiantes_carreras: Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_carrera: number
      nombre: string
      duracion: number
      titulo_otorgado: string
    }, ExtArgs["result"]["cARRERAS"]>
    composites: {}
  }

  type CARRERASGetPayload<S extends boolean | null | undefined | CARRERASDefaultArgs> = $Result.GetResult<Prisma.$CARRERASPayload, S>

  type CARRERASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CARRERASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CARRERASCountAggregateInputType | true
    }

  export interface CARRERASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CARRERAS'], meta: { name: 'CARRERAS' } }
    /**
     * Find zero or one CARRERAS that matches the filter.
     * @param {CARRERASFindUniqueArgs} args - Arguments to find a CARRERAS
     * @example
     * // Get one CARRERAS
     * const cARRERAS = await prisma.cARRERAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CARRERASFindUniqueArgs>(args: SelectSubset<T, CARRERASFindUniqueArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CARRERAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CARRERASFindUniqueOrThrowArgs} args - Arguments to find a CARRERAS
     * @example
     * // Get one CARRERAS
     * const cARRERAS = await prisma.cARRERAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CARRERASFindUniqueOrThrowArgs>(args: SelectSubset<T, CARRERASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CARRERAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CARRERASFindFirstArgs} args - Arguments to find a CARRERAS
     * @example
     * // Get one CARRERAS
     * const cARRERAS = await prisma.cARRERAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CARRERASFindFirstArgs>(args?: SelectSubset<T, CARRERASFindFirstArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CARRERAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CARRERASFindFirstOrThrowArgs} args - Arguments to find a CARRERAS
     * @example
     * // Get one CARRERAS
     * const cARRERAS = await prisma.cARRERAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CARRERASFindFirstOrThrowArgs>(args?: SelectSubset<T, CARRERASFindFirstOrThrowArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CARRERAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CARRERASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CARRERAS
     * const cARRERAS = await prisma.cARRERAS.findMany()
     * 
     * // Get first 10 CARRERAS
     * const cARRERAS = await prisma.cARRERAS.findMany({ take: 10 })
     * 
     * // Only select the `id_carrera`
     * const cARRERASWithId_carreraOnly = await prisma.cARRERAS.findMany({ select: { id_carrera: true } })
     * 
     */
    findMany<T extends CARRERASFindManyArgs>(args?: SelectSubset<T, CARRERASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CARRERAS.
     * @param {CARRERASCreateArgs} args - Arguments to create a CARRERAS.
     * @example
     * // Create one CARRERAS
     * const CARRERAS = await prisma.cARRERAS.create({
     *   data: {
     *     // ... data to create a CARRERAS
     *   }
     * })
     * 
     */
    create<T extends CARRERASCreateArgs>(args: SelectSubset<T, CARRERASCreateArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CARRERAS.
     * @param {CARRERASCreateManyArgs} args - Arguments to create many CARRERAS.
     * @example
     * // Create many CARRERAS
     * const cARRERAS = await prisma.cARRERAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CARRERASCreateManyArgs>(args?: SelectSubset<T, CARRERASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CARRERAS and returns the data saved in the database.
     * @param {CARRERASCreateManyAndReturnArgs} args - Arguments to create many CARRERAS.
     * @example
     * // Create many CARRERAS
     * const cARRERAS = await prisma.cARRERAS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CARRERAS and only return the `id_carrera`
     * const cARRERASWithId_carreraOnly = await prisma.cARRERAS.createManyAndReturn({
     *   select: { id_carrera: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CARRERASCreateManyAndReturnArgs>(args?: SelectSubset<T, CARRERASCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CARRERAS.
     * @param {CARRERASDeleteArgs} args - Arguments to delete one CARRERAS.
     * @example
     * // Delete one CARRERAS
     * const CARRERAS = await prisma.cARRERAS.delete({
     *   where: {
     *     // ... filter to delete one CARRERAS
     *   }
     * })
     * 
     */
    delete<T extends CARRERASDeleteArgs>(args: SelectSubset<T, CARRERASDeleteArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CARRERAS.
     * @param {CARRERASUpdateArgs} args - Arguments to update one CARRERAS.
     * @example
     * // Update one CARRERAS
     * const cARRERAS = await prisma.cARRERAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CARRERASUpdateArgs>(args: SelectSubset<T, CARRERASUpdateArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CARRERAS.
     * @param {CARRERASDeleteManyArgs} args - Arguments to filter CARRERAS to delete.
     * @example
     * // Delete a few CARRERAS
     * const { count } = await prisma.cARRERAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CARRERASDeleteManyArgs>(args?: SelectSubset<T, CARRERASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CARRERAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CARRERASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CARRERAS
     * const cARRERAS = await prisma.cARRERAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CARRERASUpdateManyArgs>(args: SelectSubset<T, CARRERASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CARRERAS and returns the data updated in the database.
     * @param {CARRERASUpdateManyAndReturnArgs} args - Arguments to update many CARRERAS.
     * @example
     * // Update many CARRERAS
     * const cARRERAS = await prisma.cARRERAS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CARRERAS and only return the `id_carrera`
     * const cARRERASWithId_carreraOnly = await prisma.cARRERAS.updateManyAndReturn({
     *   select: { id_carrera: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CARRERASUpdateManyAndReturnArgs>(args: SelectSubset<T, CARRERASUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CARRERAS.
     * @param {CARRERASUpsertArgs} args - Arguments to update or create a CARRERAS.
     * @example
     * // Update or create a CARRERAS
     * const cARRERAS = await prisma.cARRERAS.upsert({
     *   create: {
     *     // ... data to create a CARRERAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CARRERAS we want to update
     *   }
     * })
     */
    upsert<T extends CARRERASUpsertArgs>(args: SelectSubset<T, CARRERASUpsertArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CARRERAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CARRERASCountArgs} args - Arguments to filter CARRERAS to count.
     * @example
     * // Count the number of CARRERAS
     * const count = await prisma.cARRERAS.count({
     *   where: {
     *     // ... the filter for the CARRERAS we want to count
     *   }
     * })
    **/
    count<T extends CARRERASCountArgs>(
      args?: Subset<T, CARRERASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CARRERASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CARRERAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CARRERASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CARRERASAggregateArgs>(args: Subset<T, CARRERASAggregateArgs>): Prisma.PrismaPromise<GetCARRERASAggregateType<T>>

    /**
     * Group by CARRERAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CARRERASGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CARRERASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CARRERASGroupByArgs['orderBy'] }
        : { orderBy?: CARRERASGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CARRERASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCARRERASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CARRERAS model
   */
  readonly fields: CARRERASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CARRERAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CARRERASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    materias<T extends CARRERAS$materiasArgs<ExtArgs> = {}>(args?: Subset<T, CARRERAS$materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inscripciones<T extends CARRERAS$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, CARRERAS$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estudiantes_carreras<T extends CARRERAS$estudiantes_carrerasArgs<ExtArgs> = {}>(args?: Subset<T, CARRERAS$estudiantes_carrerasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CARRERAS model
   */
  interface CARRERASFieldRefs {
    readonly id_carrera: FieldRef<"CARRERAS", 'Int'>
    readonly nombre: FieldRef<"CARRERAS", 'String'>
    readonly duracion: FieldRef<"CARRERAS", 'Int'>
    readonly titulo_otorgado: FieldRef<"CARRERAS", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CARRERAS findUnique
   */
  export type CARRERASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which CARRERAS to fetch.
     */
    where: CARRERASWhereUniqueInput
  }

  /**
   * CARRERAS findUniqueOrThrow
   */
  export type CARRERASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which CARRERAS to fetch.
     */
    where: CARRERASWhereUniqueInput
  }

  /**
   * CARRERAS findFirst
   */
  export type CARRERASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which CARRERAS to fetch.
     */
    where?: CARRERASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CARRERAS to fetch.
     */
    orderBy?: CARRERASOrderByWithRelationInput | CARRERASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CARRERAS.
     */
    cursor?: CARRERASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CARRERAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CARRERAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CARRERAS.
     */
    distinct?: CARRERASScalarFieldEnum | CARRERASScalarFieldEnum[]
  }

  /**
   * CARRERAS findFirstOrThrow
   */
  export type CARRERASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which CARRERAS to fetch.
     */
    where?: CARRERASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CARRERAS to fetch.
     */
    orderBy?: CARRERASOrderByWithRelationInput | CARRERASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CARRERAS.
     */
    cursor?: CARRERASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CARRERAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CARRERAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CARRERAS.
     */
    distinct?: CARRERASScalarFieldEnum | CARRERASScalarFieldEnum[]
  }

  /**
   * CARRERAS findMany
   */
  export type CARRERASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which CARRERAS to fetch.
     */
    where?: CARRERASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CARRERAS to fetch.
     */
    orderBy?: CARRERASOrderByWithRelationInput | CARRERASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CARRERAS.
     */
    cursor?: CARRERASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CARRERAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CARRERAS.
     */
    skip?: number
    distinct?: CARRERASScalarFieldEnum | CARRERASScalarFieldEnum[]
  }

  /**
   * CARRERAS create
   */
  export type CARRERASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * The data needed to create a CARRERAS.
     */
    data: XOR<CARRERASCreateInput, CARRERASUncheckedCreateInput>
  }

  /**
   * CARRERAS createMany
   */
  export type CARRERASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CARRERAS.
     */
    data: CARRERASCreateManyInput | CARRERASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CARRERAS createManyAndReturn
   */
  export type CARRERASCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * The data used to create many CARRERAS.
     */
    data: CARRERASCreateManyInput | CARRERASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CARRERAS update
   */
  export type CARRERASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * The data needed to update a CARRERAS.
     */
    data: XOR<CARRERASUpdateInput, CARRERASUncheckedUpdateInput>
    /**
     * Choose, which CARRERAS to update.
     */
    where: CARRERASWhereUniqueInput
  }

  /**
   * CARRERAS updateMany
   */
  export type CARRERASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CARRERAS.
     */
    data: XOR<CARRERASUpdateManyMutationInput, CARRERASUncheckedUpdateManyInput>
    /**
     * Filter which CARRERAS to update
     */
    where?: CARRERASWhereInput
    /**
     * Limit how many CARRERAS to update.
     */
    limit?: number
  }

  /**
   * CARRERAS updateManyAndReturn
   */
  export type CARRERASUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * The data used to update CARRERAS.
     */
    data: XOR<CARRERASUpdateManyMutationInput, CARRERASUncheckedUpdateManyInput>
    /**
     * Filter which CARRERAS to update
     */
    where?: CARRERASWhereInput
    /**
     * Limit how many CARRERAS to update.
     */
    limit?: number
  }

  /**
   * CARRERAS upsert
   */
  export type CARRERASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * The filter to search for the CARRERAS to update in case it exists.
     */
    where: CARRERASWhereUniqueInput
    /**
     * In case the CARRERAS found by the `where` argument doesn't exist, create a new CARRERAS with this data.
     */
    create: XOR<CARRERASCreateInput, CARRERASUncheckedCreateInput>
    /**
     * In case the CARRERAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CARRERASUpdateInput, CARRERASUncheckedUpdateInput>
  }

  /**
   * CARRERAS delete
   */
  export type CARRERASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
    /**
     * Filter which CARRERAS to delete.
     */
    where: CARRERASWhereUniqueInput
  }

  /**
   * CARRERAS deleteMany
   */
  export type CARRERASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CARRERAS to delete
     */
    where?: CARRERASWhereInput
    /**
     * Limit how many CARRERAS to delete.
     */
    limit?: number
  }

  /**
   * CARRERAS.materias
   */
  export type CARRERAS$materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    where?: MATERIASWhereInput
    orderBy?: MATERIASOrderByWithRelationInput | MATERIASOrderByWithRelationInput[]
    cursor?: MATERIASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MATERIASScalarFieldEnum | MATERIASScalarFieldEnum[]
  }

  /**
   * CARRERAS.inscripciones
   */
  export type CARRERAS$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    where?: INSCRIPCIONESWhereInput
    orderBy?: INSCRIPCIONESOrderByWithRelationInput | INSCRIPCIONESOrderByWithRelationInput[]
    cursor?: INSCRIPCIONESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: INSCRIPCIONESScalarFieldEnum | INSCRIPCIONESScalarFieldEnum[]
  }

  /**
   * CARRERAS.estudiantes_carreras
   */
  export type CARRERAS$estudiantes_carrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    where?: ESTUDIANTES_CARRERASWhereInput
    orderBy?: ESTUDIANTES_CARRERASOrderByWithRelationInput | ESTUDIANTES_CARRERASOrderByWithRelationInput[]
    cursor?: ESTUDIANTES_CARRERASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ESTUDIANTES_CARRERASScalarFieldEnum | ESTUDIANTES_CARRERASScalarFieldEnum[]
  }

  /**
   * CARRERAS without action
   */
  export type CARRERASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CARRERAS
     */
    select?: CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CARRERAS
     */
    omit?: CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CARRERASInclude<ExtArgs> | null
  }


  /**
   * Model MATERIAS
   */

  export type AggregateMATERIAS = {
    _count: MATERIASCountAggregateOutputType | null
    _avg: MATERIASAvgAggregateOutputType | null
    _sum: MATERIASSumAggregateOutputType | null
    _min: MATERIASMinAggregateOutputType | null
    _max: MATERIASMaxAggregateOutputType | null
  }

  export type MATERIASAvgAggregateOutputType = {
    id_materia: number | null
    id_carrera: number | null
  }

  export type MATERIASSumAggregateOutputType = {
    id_materia: number | null
    id_carrera: number | null
  }

  export type MATERIASMinAggregateOutputType = {
    id_materia: number | null
    nombre: string | null
    id_carrera: number | null
  }

  export type MATERIASMaxAggregateOutputType = {
    id_materia: number | null
    nombre: string | null
    id_carrera: number | null
  }

  export type MATERIASCountAggregateOutputType = {
    id_materia: number
    nombre: number
    id_carrera: number
    _all: number
  }


  export type MATERIASAvgAggregateInputType = {
    id_materia?: true
    id_carrera?: true
  }

  export type MATERIASSumAggregateInputType = {
    id_materia?: true
    id_carrera?: true
  }

  export type MATERIASMinAggregateInputType = {
    id_materia?: true
    nombre?: true
    id_carrera?: true
  }

  export type MATERIASMaxAggregateInputType = {
    id_materia?: true
    nombre?: true
    id_carrera?: true
  }

  export type MATERIASCountAggregateInputType = {
    id_materia?: true
    nombre?: true
    id_carrera?: true
    _all?: true
  }

  export type MATERIASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MATERIAS to aggregate.
     */
    where?: MATERIASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MATERIAS to fetch.
     */
    orderBy?: MATERIASOrderByWithRelationInput | MATERIASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MATERIASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MATERIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MATERIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MATERIAS
    **/
    _count?: true | MATERIASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MATERIASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MATERIASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MATERIASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MATERIASMaxAggregateInputType
  }

  export type GetMATERIASAggregateType<T extends MATERIASAggregateArgs> = {
        [P in keyof T & keyof AggregateMATERIAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMATERIAS[P]>
      : GetScalarType<T[P], AggregateMATERIAS[P]>
  }




  export type MATERIASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MATERIASWhereInput
    orderBy?: MATERIASOrderByWithAggregationInput | MATERIASOrderByWithAggregationInput[]
    by: MATERIASScalarFieldEnum[] | MATERIASScalarFieldEnum
    having?: MATERIASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MATERIASCountAggregateInputType | true
    _avg?: MATERIASAvgAggregateInputType
    _sum?: MATERIASSumAggregateInputType
    _min?: MATERIASMinAggregateInputType
    _max?: MATERIASMaxAggregateInputType
  }

  export type MATERIASGroupByOutputType = {
    id_materia: number
    nombre: string
    id_carrera: number
    _count: MATERIASCountAggregateOutputType | null
    _avg: MATERIASAvgAggregateOutputType | null
    _sum: MATERIASSumAggregateOutputType | null
    _min: MATERIASMinAggregateOutputType | null
    _max: MATERIASMaxAggregateOutputType | null
  }

  type GetMATERIASGroupByPayload<T extends MATERIASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MATERIASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MATERIASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MATERIASGroupByOutputType[P]>
            : GetScalarType<T[P], MATERIASGroupByOutputType[P]>
        }
      >
    >


  export type MATERIASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    id_carrera?: boolean
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
    cursadas?: boolean | MATERIAS$cursadasArgs<ExtArgs>
    condiciones_materias?: boolean | MATERIAS$condiciones_materiasArgs<ExtArgs>
    _count?: boolean | MATERIASCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mATERIAS"]>

  export type MATERIASSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    id_carrera?: boolean
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mATERIAS"]>

  export type MATERIASSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_materia?: boolean
    nombre?: boolean
    id_carrera?: boolean
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mATERIAS"]>

  export type MATERIASSelectScalar = {
    id_materia?: boolean
    nombre?: boolean
    id_carrera?: boolean
  }

  export type MATERIASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_materia" | "nombre" | "id_carrera", ExtArgs["result"]["mATERIAS"]>
  export type MATERIASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
    cursadas?: boolean | MATERIAS$cursadasArgs<ExtArgs>
    condiciones_materias?: boolean | MATERIAS$condiciones_materiasArgs<ExtArgs>
    _count?: boolean | MATERIASCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MATERIASIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }
  export type MATERIASIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }

  export type $MATERIASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MATERIAS"
    objects: {
      carrera: Prisma.$CARRERASPayload<ExtArgs>
      cursadas: Prisma.$CURSADASPayload<ExtArgs>[]
      condiciones_materias: Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_materia: number
      nombre: string
      id_carrera: number
    }, ExtArgs["result"]["mATERIAS"]>
    composites: {}
  }

  type MATERIASGetPayload<S extends boolean | null | undefined | MATERIASDefaultArgs> = $Result.GetResult<Prisma.$MATERIASPayload, S>

  type MATERIASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MATERIASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MATERIASCountAggregateInputType | true
    }

  export interface MATERIASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MATERIAS'], meta: { name: 'MATERIAS' } }
    /**
     * Find zero or one MATERIAS that matches the filter.
     * @param {MATERIASFindUniqueArgs} args - Arguments to find a MATERIAS
     * @example
     * // Get one MATERIAS
     * const mATERIAS = await prisma.mATERIAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MATERIASFindUniqueArgs>(args: SelectSubset<T, MATERIASFindUniqueArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MATERIAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MATERIASFindUniqueOrThrowArgs} args - Arguments to find a MATERIAS
     * @example
     * // Get one MATERIAS
     * const mATERIAS = await prisma.mATERIAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MATERIASFindUniqueOrThrowArgs>(args: SelectSubset<T, MATERIASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MATERIAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MATERIASFindFirstArgs} args - Arguments to find a MATERIAS
     * @example
     * // Get one MATERIAS
     * const mATERIAS = await prisma.mATERIAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MATERIASFindFirstArgs>(args?: SelectSubset<T, MATERIASFindFirstArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MATERIAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MATERIASFindFirstOrThrowArgs} args - Arguments to find a MATERIAS
     * @example
     * // Get one MATERIAS
     * const mATERIAS = await prisma.mATERIAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MATERIASFindFirstOrThrowArgs>(args?: SelectSubset<T, MATERIASFindFirstOrThrowArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MATERIAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MATERIASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MATERIAS
     * const mATERIAS = await prisma.mATERIAS.findMany()
     * 
     * // Get first 10 MATERIAS
     * const mATERIAS = await prisma.mATERIAS.findMany({ take: 10 })
     * 
     * // Only select the `id_materia`
     * const mATERIASWithId_materiaOnly = await prisma.mATERIAS.findMany({ select: { id_materia: true } })
     * 
     */
    findMany<T extends MATERIASFindManyArgs>(args?: SelectSubset<T, MATERIASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MATERIAS.
     * @param {MATERIASCreateArgs} args - Arguments to create a MATERIAS.
     * @example
     * // Create one MATERIAS
     * const MATERIAS = await prisma.mATERIAS.create({
     *   data: {
     *     // ... data to create a MATERIAS
     *   }
     * })
     * 
     */
    create<T extends MATERIASCreateArgs>(args: SelectSubset<T, MATERIASCreateArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MATERIAS.
     * @param {MATERIASCreateManyArgs} args - Arguments to create many MATERIAS.
     * @example
     * // Create many MATERIAS
     * const mATERIAS = await prisma.mATERIAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MATERIASCreateManyArgs>(args?: SelectSubset<T, MATERIASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MATERIAS and returns the data saved in the database.
     * @param {MATERIASCreateManyAndReturnArgs} args - Arguments to create many MATERIAS.
     * @example
     * // Create many MATERIAS
     * const mATERIAS = await prisma.mATERIAS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MATERIAS and only return the `id_materia`
     * const mATERIASWithId_materiaOnly = await prisma.mATERIAS.createManyAndReturn({
     *   select: { id_materia: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MATERIASCreateManyAndReturnArgs>(args?: SelectSubset<T, MATERIASCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MATERIAS.
     * @param {MATERIASDeleteArgs} args - Arguments to delete one MATERIAS.
     * @example
     * // Delete one MATERIAS
     * const MATERIAS = await prisma.mATERIAS.delete({
     *   where: {
     *     // ... filter to delete one MATERIAS
     *   }
     * })
     * 
     */
    delete<T extends MATERIASDeleteArgs>(args: SelectSubset<T, MATERIASDeleteArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MATERIAS.
     * @param {MATERIASUpdateArgs} args - Arguments to update one MATERIAS.
     * @example
     * // Update one MATERIAS
     * const mATERIAS = await prisma.mATERIAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MATERIASUpdateArgs>(args: SelectSubset<T, MATERIASUpdateArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MATERIAS.
     * @param {MATERIASDeleteManyArgs} args - Arguments to filter MATERIAS to delete.
     * @example
     * // Delete a few MATERIAS
     * const { count } = await prisma.mATERIAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MATERIASDeleteManyArgs>(args?: SelectSubset<T, MATERIASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MATERIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MATERIASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MATERIAS
     * const mATERIAS = await prisma.mATERIAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MATERIASUpdateManyArgs>(args: SelectSubset<T, MATERIASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MATERIAS and returns the data updated in the database.
     * @param {MATERIASUpdateManyAndReturnArgs} args - Arguments to update many MATERIAS.
     * @example
     * // Update many MATERIAS
     * const mATERIAS = await prisma.mATERIAS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MATERIAS and only return the `id_materia`
     * const mATERIASWithId_materiaOnly = await prisma.mATERIAS.updateManyAndReturn({
     *   select: { id_materia: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MATERIASUpdateManyAndReturnArgs>(args: SelectSubset<T, MATERIASUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MATERIAS.
     * @param {MATERIASUpsertArgs} args - Arguments to update or create a MATERIAS.
     * @example
     * // Update or create a MATERIAS
     * const mATERIAS = await prisma.mATERIAS.upsert({
     *   create: {
     *     // ... data to create a MATERIAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MATERIAS we want to update
     *   }
     * })
     */
    upsert<T extends MATERIASUpsertArgs>(args: SelectSubset<T, MATERIASUpsertArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MATERIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MATERIASCountArgs} args - Arguments to filter MATERIAS to count.
     * @example
     * // Count the number of MATERIAS
     * const count = await prisma.mATERIAS.count({
     *   where: {
     *     // ... the filter for the MATERIAS we want to count
     *   }
     * })
    **/
    count<T extends MATERIASCountArgs>(
      args?: Subset<T, MATERIASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MATERIASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MATERIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MATERIASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MATERIASAggregateArgs>(args: Subset<T, MATERIASAggregateArgs>): Prisma.PrismaPromise<GetMATERIASAggregateType<T>>

    /**
     * Group by MATERIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MATERIASGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MATERIASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MATERIASGroupByArgs['orderBy'] }
        : { orderBy?: MATERIASGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MATERIASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMATERIASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MATERIAS model
   */
  readonly fields: MATERIASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MATERIAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MATERIASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carrera<T extends CARRERASDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CARRERASDefaultArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cursadas<T extends MATERIAS$cursadasArgs<ExtArgs> = {}>(args?: Subset<T, MATERIAS$cursadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    condiciones_materias<T extends MATERIAS$condiciones_materiasArgs<ExtArgs> = {}>(args?: Subset<T, MATERIAS$condiciones_materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MATERIAS model
   */
  interface MATERIASFieldRefs {
    readonly id_materia: FieldRef<"MATERIAS", 'Int'>
    readonly nombre: FieldRef<"MATERIAS", 'String'>
    readonly id_carrera: FieldRef<"MATERIAS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MATERIAS findUnique
   */
  export type MATERIASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which MATERIAS to fetch.
     */
    where: MATERIASWhereUniqueInput
  }

  /**
   * MATERIAS findUniqueOrThrow
   */
  export type MATERIASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which MATERIAS to fetch.
     */
    where: MATERIASWhereUniqueInput
  }

  /**
   * MATERIAS findFirst
   */
  export type MATERIASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which MATERIAS to fetch.
     */
    where?: MATERIASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MATERIAS to fetch.
     */
    orderBy?: MATERIASOrderByWithRelationInput | MATERIASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MATERIAS.
     */
    cursor?: MATERIASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MATERIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MATERIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MATERIAS.
     */
    distinct?: MATERIASScalarFieldEnum | MATERIASScalarFieldEnum[]
  }

  /**
   * MATERIAS findFirstOrThrow
   */
  export type MATERIASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which MATERIAS to fetch.
     */
    where?: MATERIASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MATERIAS to fetch.
     */
    orderBy?: MATERIASOrderByWithRelationInput | MATERIASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MATERIAS.
     */
    cursor?: MATERIASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MATERIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MATERIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MATERIAS.
     */
    distinct?: MATERIASScalarFieldEnum | MATERIASScalarFieldEnum[]
  }

  /**
   * MATERIAS findMany
   */
  export type MATERIASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which MATERIAS to fetch.
     */
    where?: MATERIASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MATERIAS to fetch.
     */
    orderBy?: MATERIASOrderByWithRelationInput | MATERIASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MATERIAS.
     */
    cursor?: MATERIASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MATERIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MATERIAS.
     */
    skip?: number
    distinct?: MATERIASScalarFieldEnum | MATERIASScalarFieldEnum[]
  }

  /**
   * MATERIAS create
   */
  export type MATERIASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * The data needed to create a MATERIAS.
     */
    data: XOR<MATERIASCreateInput, MATERIASUncheckedCreateInput>
  }

  /**
   * MATERIAS createMany
   */
  export type MATERIASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MATERIAS.
     */
    data: MATERIASCreateManyInput | MATERIASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MATERIAS createManyAndReturn
   */
  export type MATERIASCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * The data used to create many MATERIAS.
     */
    data: MATERIASCreateManyInput | MATERIASCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MATERIAS update
   */
  export type MATERIASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * The data needed to update a MATERIAS.
     */
    data: XOR<MATERIASUpdateInput, MATERIASUncheckedUpdateInput>
    /**
     * Choose, which MATERIAS to update.
     */
    where: MATERIASWhereUniqueInput
  }

  /**
   * MATERIAS updateMany
   */
  export type MATERIASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MATERIAS.
     */
    data: XOR<MATERIASUpdateManyMutationInput, MATERIASUncheckedUpdateManyInput>
    /**
     * Filter which MATERIAS to update
     */
    where?: MATERIASWhereInput
    /**
     * Limit how many MATERIAS to update.
     */
    limit?: number
  }

  /**
   * MATERIAS updateManyAndReturn
   */
  export type MATERIASUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * The data used to update MATERIAS.
     */
    data: XOR<MATERIASUpdateManyMutationInput, MATERIASUncheckedUpdateManyInput>
    /**
     * Filter which MATERIAS to update
     */
    where?: MATERIASWhereInput
    /**
     * Limit how many MATERIAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MATERIAS upsert
   */
  export type MATERIASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * The filter to search for the MATERIAS to update in case it exists.
     */
    where: MATERIASWhereUniqueInput
    /**
     * In case the MATERIAS found by the `where` argument doesn't exist, create a new MATERIAS with this data.
     */
    create: XOR<MATERIASCreateInput, MATERIASUncheckedCreateInput>
    /**
     * In case the MATERIAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MATERIASUpdateInput, MATERIASUncheckedUpdateInput>
  }

  /**
   * MATERIAS delete
   */
  export type MATERIASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
    /**
     * Filter which MATERIAS to delete.
     */
    where: MATERIASWhereUniqueInput
  }

  /**
   * MATERIAS deleteMany
   */
  export type MATERIASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MATERIAS to delete
     */
    where?: MATERIASWhereInput
    /**
     * Limit how many MATERIAS to delete.
     */
    limit?: number
  }

  /**
   * MATERIAS.cursadas
   */
  export type MATERIAS$cursadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    where?: CURSADASWhereInput
    orderBy?: CURSADASOrderByWithRelationInput | CURSADASOrderByWithRelationInput[]
    cursor?: CURSADASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CURSADASScalarFieldEnum | CURSADASScalarFieldEnum[]
  }

  /**
   * MATERIAS.condiciones_materias
   */
  export type MATERIAS$condiciones_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    where?: CONDICIONES_MATERIASWhereInput
    orderBy?: CONDICIONES_MATERIASOrderByWithRelationInput | CONDICIONES_MATERIASOrderByWithRelationInput[]
    cursor?: CONDICIONES_MATERIASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CONDICIONES_MATERIASScalarFieldEnum | CONDICIONES_MATERIASScalarFieldEnum[]
  }

  /**
   * MATERIAS without action
   */
  export type MATERIASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MATERIAS
     */
    select?: MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MATERIAS
     */
    omit?: MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MATERIASInclude<ExtArgs> | null
  }


  /**
   * Model CONDICIONES
   */

  export type AggregateCONDICIONES = {
    _count: CONDICIONESCountAggregateOutputType | null
    _avg: CONDICIONESAvgAggregateOutputType | null
    _sum: CONDICIONESSumAggregateOutputType | null
    _min: CONDICIONESMinAggregateOutputType | null
    _max: CONDICIONESMaxAggregateOutputType | null
  }

  export type CONDICIONESAvgAggregateOutputType = {
    id_condition: number | null
  }

  export type CONDICIONESSumAggregateOutputType = {
    id_condition: number | null
  }

  export type CONDICIONESMinAggregateOutputType = {
    id_condition: number | null
    nombre: string | null
  }

  export type CONDICIONESMaxAggregateOutputType = {
    id_condition: number | null
    nombre: string | null
  }

  export type CONDICIONESCountAggregateOutputType = {
    id_condition: number
    nombre: number
    _all: number
  }


  export type CONDICIONESAvgAggregateInputType = {
    id_condition?: true
  }

  export type CONDICIONESSumAggregateInputType = {
    id_condition?: true
  }

  export type CONDICIONESMinAggregateInputType = {
    id_condition?: true
    nombre?: true
  }

  export type CONDICIONESMaxAggregateInputType = {
    id_condition?: true
    nombre?: true
  }

  export type CONDICIONESCountAggregateInputType = {
    id_condition?: true
    nombre?: true
    _all?: true
  }

  export type CONDICIONESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONDICIONES to aggregate.
     */
    where?: CONDICIONESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONDICIONES to fetch.
     */
    orderBy?: CONDICIONESOrderByWithRelationInput | CONDICIONESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CONDICIONESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONDICIONES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONDICIONES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CONDICIONES
    **/
    _count?: true | CONDICIONESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CONDICIONESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CONDICIONESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CONDICIONESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CONDICIONESMaxAggregateInputType
  }

  export type GetCONDICIONESAggregateType<T extends CONDICIONESAggregateArgs> = {
        [P in keyof T & keyof AggregateCONDICIONES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCONDICIONES[P]>
      : GetScalarType<T[P], AggregateCONDICIONES[P]>
  }




  export type CONDICIONESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CONDICIONESWhereInput
    orderBy?: CONDICIONESOrderByWithAggregationInput | CONDICIONESOrderByWithAggregationInput[]
    by: CONDICIONESScalarFieldEnum[] | CONDICIONESScalarFieldEnum
    having?: CONDICIONESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CONDICIONESCountAggregateInputType | true
    _avg?: CONDICIONESAvgAggregateInputType
    _sum?: CONDICIONESSumAggregateInputType
    _min?: CONDICIONESMinAggregateInputType
    _max?: CONDICIONESMaxAggregateInputType
  }

  export type CONDICIONESGroupByOutputType = {
    id_condition: number
    nombre: string
    _count: CONDICIONESCountAggregateOutputType | null
    _avg: CONDICIONESAvgAggregateOutputType | null
    _sum: CONDICIONESSumAggregateOutputType | null
    _min: CONDICIONESMinAggregateOutputType | null
    _max: CONDICIONESMaxAggregateOutputType | null
  }

  type GetCONDICIONESGroupByPayload<T extends CONDICIONESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CONDICIONESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CONDICIONESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CONDICIONESGroupByOutputType[P]>
            : GetScalarType<T[P], CONDICIONESGroupByOutputType[P]>
        }
      >
    >


  export type CONDICIONESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_condition?: boolean
    nombre?: boolean
    condiciones_materias?: boolean | CONDICIONES$condiciones_materiasArgs<ExtArgs>
    _count?: boolean | CONDICIONESCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cONDICIONES"]>

  export type CONDICIONESSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_condition?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["cONDICIONES"]>

  export type CONDICIONESSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_condition?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["cONDICIONES"]>

  export type CONDICIONESSelectScalar = {
    id_condition?: boolean
    nombre?: boolean
  }

  export type CONDICIONESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_condition" | "nombre", ExtArgs["result"]["cONDICIONES"]>
  export type CONDICIONESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    condiciones_materias?: boolean | CONDICIONES$condiciones_materiasArgs<ExtArgs>
    _count?: boolean | CONDICIONESCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CONDICIONESIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CONDICIONESIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CONDICIONESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CONDICIONES"
    objects: {
      condiciones_materias: Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_condition: number
      nombre: string
    }, ExtArgs["result"]["cONDICIONES"]>
    composites: {}
  }

  type CONDICIONESGetPayload<S extends boolean | null | undefined | CONDICIONESDefaultArgs> = $Result.GetResult<Prisma.$CONDICIONESPayload, S>

  type CONDICIONESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CONDICIONESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CONDICIONESCountAggregateInputType | true
    }

  export interface CONDICIONESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CONDICIONES'], meta: { name: 'CONDICIONES' } }
    /**
     * Find zero or one CONDICIONES that matches the filter.
     * @param {CONDICIONESFindUniqueArgs} args - Arguments to find a CONDICIONES
     * @example
     * // Get one CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CONDICIONESFindUniqueArgs>(args: SelectSubset<T, CONDICIONESFindUniqueArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CONDICIONES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CONDICIONESFindUniqueOrThrowArgs} args - Arguments to find a CONDICIONES
     * @example
     * // Get one CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CONDICIONESFindUniqueOrThrowArgs>(args: SelectSubset<T, CONDICIONESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CONDICIONES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONESFindFirstArgs} args - Arguments to find a CONDICIONES
     * @example
     * // Get one CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CONDICIONESFindFirstArgs>(args?: SelectSubset<T, CONDICIONESFindFirstArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CONDICIONES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONESFindFirstOrThrowArgs} args - Arguments to find a CONDICIONES
     * @example
     * // Get one CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CONDICIONESFindFirstOrThrowArgs>(args?: SelectSubset<T, CONDICIONESFindFirstOrThrowArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CONDICIONES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.findMany()
     * 
     * // Get first 10 CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.findMany({ take: 10 })
     * 
     * // Only select the `id_condition`
     * const cONDICIONESWithId_conditionOnly = await prisma.cONDICIONES.findMany({ select: { id_condition: true } })
     * 
     */
    findMany<T extends CONDICIONESFindManyArgs>(args?: SelectSubset<T, CONDICIONESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CONDICIONES.
     * @param {CONDICIONESCreateArgs} args - Arguments to create a CONDICIONES.
     * @example
     * // Create one CONDICIONES
     * const CONDICIONES = await prisma.cONDICIONES.create({
     *   data: {
     *     // ... data to create a CONDICIONES
     *   }
     * })
     * 
     */
    create<T extends CONDICIONESCreateArgs>(args: SelectSubset<T, CONDICIONESCreateArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CONDICIONES.
     * @param {CONDICIONESCreateManyArgs} args - Arguments to create many CONDICIONES.
     * @example
     * // Create many CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CONDICIONESCreateManyArgs>(args?: SelectSubset<T, CONDICIONESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CONDICIONES and returns the data saved in the database.
     * @param {CONDICIONESCreateManyAndReturnArgs} args - Arguments to create many CONDICIONES.
     * @example
     * // Create many CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CONDICIONES and only return the `id_condition`
     * const cONDICIONESWithId_conditionOnly = await prisma.cONDICIONES.createManyAndReturn({
     *   select: { id_condition: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CONDICIONESCreateManyAndReturnArgs>(args?: SelectSubset<T, CONDICIONESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CONDICIONES.
     * @param {CONDICIONESDeleteArgs} args - Arguments to delete one CONDICIONES.
     * @example
     * // Delete one CONDICIONES
     * const CONDICIONES = await prisma.cONDICIONES.delete({
     *   where: {
     *     // ... filter to delete one CONDICIONES
     *   }
     * })
     * 
     */
    delete<T extends CONDICIONESDeleteArgs>(args: SelectSubset<T, CONDICIONESDeleteArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CONDICIONES.
     * @param {CONDICIONESUpdateArgs} args - Arguments to update one CONDICIONES.
     * @example
     * // Update one CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CONDICIONESUpdateArgs>(args: SelectSubset<T, CONDICIONESUpdateArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CONDICIONES.
     * @param {CONDICIONESDeleteManyArgs} args - Arguments to filter CONDICIONES to delete.
     * @example
     * // Delete a few CONDICIONES
     * const { count } = await prisma.cONDICIONES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CONDICIONESDeleteManyArgs>(args?: SelectSubset<T, CONDICIONESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CONDICIONES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CONDICIONESUpdateManyArgs>(args: SelectSubset<T, CONDICIONESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CONDICIONES and returns the data updated in the database.
     * @param {CONDICIONESUpdateManyAndReturnArgs} args - Arguments to update many CONDICIONES.
     * @example
     * // Update many CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CONDICIONES and only return the `id_condition`
     * const cONDICIONESWithId_conditionOnly = await prisma.cONDICIONES.updateManyAndReturn({
     *   select: { id_condition: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CONDICIONESUpdateManyAndReturnArgs>(args: SelectSubset<T, CONDICIONESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CONDICIONES.
     * @param {CONDICIONESUpsertArgs} args - Arguments to update or create a CONDICIONES.
     * @example
     * // Update or create a CONDICIONES
     * const cONDICIONES = await prisma.cONDICIONES.upsert({
     *   create: {
     *     // ... data to create a CONDICIONES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CONDICIONES we want to update
     *   }
     * })
     */
    upsert<T extends CONDICIONESUpsertArgs>(args: SelectSubset<T, CONDICIONESUpsertArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CONDICIONES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONESCountArgs} args - Arguments to filter CONDICIONES to count.
     * @example
     * // Count the number of CONDICIONES
     * const count = await prisma.cONDICIONES.count({
     *   where: {
     *     // ... the filter for the CONDICIONES we want to count
     *   }
     * })
    **/
    count<T extends CONDICIONESCountArgs>(
      args?: Subset<T, CONDICIONESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CONDICIONESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CONDICIONES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CONDICIONESAggregateArgs>(args: Subset<T, CONDICIONESAggregateArgs>): Prisma.PrismaPromise<GetCONDICIONESAggregateType<T>>

    /**
     * Group by CONDICIONES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONESGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CONDICIONESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CONDICIONESGroupByArgs['orderBy'] }
        : { orderBy?: CONDICIONESGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CONDICIONESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCONDICIONESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CONDICIONES model
   */
  readonly fields: CONDICIONESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CONDICIONES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CONDICIONESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    condiciones_materias<T extends CONDICIONES$condiciones_materiasArgs<ExtArgs> = {}>(args?: Subset<T, CONDICIONES$condiciones_materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CONDICIONES model
   */
  interface CONDICIONESFieldRefs {
    readonly id_condition: FieldRef<"CONDICIONES", 'Int'>
    readonly nombre: FieldRef<"CONDICIONES", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CONDICIONES findUnique
   */
  export type CONDICIONESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES to fetch.
     */
    where: CONDICIONESWhereUniqueInput
  }

  /**
   * CONDICIONES findUniqueOrThrow
   */
  export type CONDICIONESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES to fetch.
     */
    where: CONDICIONESWhereUniqueInput
  }

  /**
   * CONDICIONES findFirst
   */
  export type CONDICIONESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES to fetch.
     */
    where?: CONDICIONESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONDICIONES to fetch.
     */
    orderBy?: CONDICIONESOrderByWithRelationInput | CONDICIONESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONDICIONES.
     */
    cursor?: CONDICIONESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONDICIONES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONDICIONES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONDICIONES.
     */
    distinct?: CONDICIONESScalarFieldEnum | CONDICIONESScalarFieldEnum[]
  }

  /**
   * CONDICIONES findFirstOrThrow
   */
  export type CONDICIONESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES to fetch.
     */
    where?: CONDICIONESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONDICIONES to fetch.
     */
    orderBy?: CONDICIONESOrderByWithRelationInput | CONDICIONESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONDICIONES.
     */
    cursor?: CONDICIONESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONDICIONES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONDICIONES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONDICIONES.
     */
    distinct?: CONDICIONESScalarFieldEnum | CONDICIONESScalarFieldEnum[]
  }

  /**
   * CONDICIONES findMany
   */
  export type CONDICIONESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES to fetch.
     */
    where?: CONDICIONESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONDICIONES to fetch.
     */
    orderBy?: CONDICIONESOrderByWithRelationInput | CONDICIONESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CONDICIONES.
     */
    cursor?: CONDICIONESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONDICIONES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONDICIONES.
     */
    skip?: number
    distinct?: CONDICIONESScalarFieldEnum | CONDICIONESScalarFieldEnum[]
  }

  /**
   * CONDICIONES create
   */
  export type CONDICIONESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * The data needed to create a CONDICIONES.
     */
    data: XOR<CONDICIONESCreateInput, CONDICIONESUncheckedCreateInput>
  }

  /**
   * CONDICIONES createMany
   */
  export type CONDICIONESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CONDICIONES.
     */
    data: CONDICIONESCreateManyInput | CONDICIONESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CONDICIONES createManyAndReturn
   */
  export type CONDICIONESCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * The data used to create many CONDICIONES.
     */
    data: CONDICIONESCreateManyInput | CONDICIONESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CONDICIONES update
   */
  export type CONDICIONESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * The data needed to update a CONDICIONES.
     */
    data: XOR<CONDICIONESUpdateInput, CONDICIONESUncheckedUpdateInput>
    /**
     * Choose, which CONDICIONES to update.
     */
    where: CONDICIONESWhereUniqueInput
  }

  /**
   * CONDICIONES updateMany
   */
  export type CONDICIONESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CONDICIONES.
     */
    data: XOR<CONDICIONESUpdateManyMutationInput, CONDICIONESUncheckedUpdateManyInput>
    /**
     * Filter which CONDICIONES to update
     */
    where?: CONDICIONESWhereInput
    /**
     * Limit how many CONDICIONES to update.
     */
    limit?: number
  }

  /**
   * CONDICIONES updateManyAndReturn
   */
  export type CONDICIONESUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * The data used to update CONDICIONES.
     */
    data: XOR<CONDICIONESUpdateManyMutationInput, CONDICIONESUncheckedUpdateManyInput>
    /**
     * Filter which CONDICIONES to update
     */
    where?: CONDICIONESWhereInput
    /**
     * Limit how many CONDICIONES to update.
     */
    limit?: number
  }

  /**
   * CONDICIONES upsert
   */
  export type CONDICIONESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * The filter to search for the CONDICIONES to update in case it exists.
     */
    where: CONDICIONESWhereUniqueInput
    /**
     * In case the CONDICIONES found by the `where` argument doesn't exist, create a new CONDICIONES with this data.
     */
    create: XOR<CONDICIONESCreateInput, CONDICIONESUncheckedCreateInput>
    /**
     * In case the CONDICIONES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CONDICIONESUpdateInput, CONDICIONESUncheckedUpdateInput>
  }

  /**
   * CONDICIONES delete
   */
  export type CONDICIONESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
    /**
     * Filter which CONDICIONES to delete.
     */
    where: CONDICIONESWhereUniqueInput
  }

  /**
   * CONDICIONES deleteMany
   */
  export type CONDICIONESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONDICIONES to delete
     */
    where?: CONDICIONESWhereInput
    /**
     * Limit how many CONDICIONES to delete.
     */
    limit?: number
  }

  /**
   * CONDICIONES.condiciones_materias
   */
  export type CONDICIONES$condiciones_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    where?: CONDICIONES_MATERIASWhereInput
    orderBy?: CONDICIONES_MATERIASOrderByWithRelationInput | CONDICIONES_MATERIASOrderByWithRelationInput[]
    cursor?: CONDICIONES_MATERIASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CONDICIONES_MATERIASScalarFieldEnum | CONDICIONES_MATERIASScalarFieldEnum[]
  }

  /**
   * CONDICIONES without action
   */
  export type CONDICIONESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES
     */
    select?: CONDICIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES
     */
    omit?: CONDICIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONESInclude<ExtArgs> | null
  }


  /**
   * Model ESTUDIANTES
   */

  export type AggregateESTUDIANTES = {
    _count: ESTUDIANTESCountAggregateOutputType | null
    _avg: ESTUDIANTESAvgAggregateOutputType | null
    _sum: ESTUDIANTESSumAggregateOutputType | null
    _min: ESTUDIANTESMinAggregateOutputType | null
    _max: ESTUDIANTESMaxAggregateOutputType | null
  }

  export type ESTUDIANTESAvgAggregateOutputType = {
    id_estudiante: number | null
    id_pais: number | null
    id_localidad: number | null
    id_area_telefonica: number | null
    id_genero: number | null
  }

  export type ESTUDIANTESSumAggregateOutputType = {
    id_estudiante: number | null
    id_pais: number | null
    id_localidad: number | null
    id_area_telefonica: number | null
    id_genero: number | null
  }

  export type ESTUDIANTESMinAggregateOutputType = {
    id_estudiante: number | null
    id_pais: number | null
    id_localidad: number | null
    id_area_telefonica: number | null
    id_genero: number | null
    nombres: string | null
    apellidos: string | null
    dni: string | null
    fecha_nacimiento: Date | null
    email: string | null
    telefono: string | null
    domicilio: string | null
    fecha_ingreso: Date | null
    cohorte: string | null
    secundario: string | null
    cuil: string | null
    examen_mayores25: boolean | null
    solicito_beca: boolean | null
    trabajador: boolean | null
    persona_a_cargo: boolean | null
    observaciones: string | null
    estado: string | null
  }

  export type ESTUDIANTESMaxAggregateOutputType = {
    id_estudiante: number | null
    id_pais: number | null
    id_localidad: number | null
    id_area_telefonica: number | null
    id_genero: number | null
    nombres: string | null
    apellidos: string | null
    dni: string | null
    fecha_nacimiento: Date | null
    email: string | null
    telefono: string | null
    domicilio: string | null
    fecha_ingreso: Date | null
    cohorte: string | null
    secundario: string | null
    cuil: string | null
    examen_mayores25: boolean | null
    solicito_beca: boolean | null
    trabajador: boolean | null
    persona_a_cargo: boolean | null
    observaciones: string | null
    estado: string | null
  }

  export type ESTUDIANTESCountAggregateOutputType = {
    id_estudiante: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: number
    apellidos: number
    dni: number
    fecha_nacimiento: number
    email: number
    telefono: number
    domicilio: number
    fecha_ingreso: number
    cohorte: number
    secundario: number
    cuil: number
    examen_mayores25: number
    solicito_beca: number
    trabajador: number
    persona_a_cargo: number
    observaciones: number
    estado: number
    _all: number
  }


  export type ESTUDIANTESAvgAggregateInputType = {
    id_estudiante?: true
    id_pais?: true
    id_localidad?: true
    id_area_telefonica?: true
    id_genero?: true
  }

  export type ESTUDIANTESSumAggregateInputType = {
    id_estudiante?: true
    id_pais?: true
    id_localidad?: true
    id_area_telefonica?: true
    id_genero?: true
  }

  export type ESTUDIANTESMinAggregateInputType = {
    id_estudiante?: true
    id_pais?: true
    id_localidad?: true
    id_area_telefonica?: true
    id_genero?: true
    nombres?: true
    apellidos?: true
    dni?: true
    fecha_nacimiento?: true
    email?: true
    telefono?: true
    domicilio?: true
    fecha_ingreso?: true
    cohorte?: true
    secundario?: true
    cuil?: true
    examen_mayores25?: true
    solicito_beca?: true
    trabajador?: true
    persona_a_cargo?: true
    observaciones?: true
    estado?: true
  }

  export type ESTUDIANTESMaxAggregateInputType = {
    id_estudiante?: true
    id_pais?: true
    id_localidad?: true
    id_area_telefonica?: true
    id_genero?: true
    nombres?: true
    apellidos?: true
    dni?: true
    fecha_nacimiento?: true
    email?: true
    telefono?: true
    domicilio?: true
    fecha_ingreso?: true
    cohorte?: true
    secundario?: true
    cuil?: true
    examen_mayores25?: true
    solicito_beca?: true
    trabajador?: true
    persona_a_cargo?: true
    observaciones?: true
    estado?: true
  }

  export type ESTUDIANTESCountAggregateInputType = {
    id_estudiante?: true
    id_pais?: true
    id_localidad?: true
    id_area_telefonica?: true
    id_genero?: true
    nombres?: true
    apellidos?: true
    dni?: true
    fecha_nacimiento?: true
    email?: true
    telefono?: true
    domicilio?: true
    fecha_ingreso?: true
    cohorte?: true
    secundario?: true
    cuil?: true
    examen_mayores25?: true
    solicito_beca?: true
    trabajador?: true
    persona_a_cargo?: true
    observaciones?: true
    estado?: true
    _all?: true
  }

  export type ESTUDIANTESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ESTUDIANTES to aggregate.
     */
    where?: ESTUDIANTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESTUDIANTES to fetch.
     */
    orderBy?: ESTUDIANTESOrderByWithRelationInput | ESTUDIANTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ESTUDIANTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESTUDIANTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESTUDIANTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ESTUDIANTES
    **/
    _count?: true | ESTUDIANTESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ESTUDIANTESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ESTUDIANTESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ESTUDIANTESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ESTUDIANTESMaxAggregateInputType
  }

  export type GetESTUDIANTESAggregateType<T extends ESTUDIANTESAggregateArgs> = {
        [P in keyof T & keyof AggregateESTUDIANTES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateESTUDIANTES[P]>
      : GetScalarType<T[P], AggregateESTUDIANTES[P]>
  }




  export type ESTUDIANTESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESTUDIANTESWhereInput
    orderBy?: ESTUDIANTESOrderByWithAggregationInput | ESTUDIANTESOrderByWithAggregationInput[]
    by: ESTUDIANTESScalarFieldEnum[] | ESTUDIANTESScalarFieldEnum
    having?: ESTUDIANTESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ESTUDIANTESCountAggregateInputType | true
    _avg?: ESTUDIANTESAvgAggregateInputType
    _sum?: ESTUDIANTESSumAggregateInputType
    _min?: ESTUDIANTESMinAggregateInputType
    _max?: ESTUDIANTESMaxAggregateInputType
  }

  export type ESTUDIANTESGroupByOutputType = {
    id_estudiante: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones: string | null
    estado: string
    _count: ESTUDIANTESCountAggregateOutputType | null
    _avg: ESTUDIANTESAvgAggregateOutputType | null
    _sum: ESTUDIANTESSumAggregateOutputType | null
    _min: ESTUDIANTESMinAggregateOutputType | null
    _max: ESTUDIANTESMaxAggregateOutputType | null
  }

  type GetESTUDIANTESGroupByPayload<T extends ESTUDIANTESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ESTUDIANTESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ESTUDIANTESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ESTUDIANTESGroupByOutputType[P]>
            : GetScalarType<T[P], ESTUDIANTESGroupByOutputType[P]>
        }
      >
    >


  export type ESTUDIANTESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    id_pais?: boolean
    id_localidad?: boolean
    id_area_telefonica?: boolean
    id_genero?: boolean
    nombres?: boolean
    apellidos?: boolean
    dni?: boolean
    fecha_nacimiento?: boolean
    email?: boolean
    telefono?: boolean
    domicilio?: boolean
    fecha_ingreso?: boolean
    cohorte?: boolean
    secundario?: boolean
    cuil?: boolean
    examen_mayores25?: boolean
    solicito_beca?: boolean
    trabajador?: boolean
    persona_a_cargo?: boolean
    observaciones?: boolean
    estado?: boolean
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
    localidad?: boolean | LOCALIDADESDefaultArgs<ExtArgs>
    area_telefonica?: boolean | AREAS_TELEFONICASDefaultArgs<ExtArgs>
    genero?: boolean | GENEROSDefaultArgs<ExtArgs>
    inscripciones?: boolean | ESTUDIANTES$inscripcionesArgs<ExtArgs>
    estudiantes_carreras?: boolean | ESTUDIANTES$estudiantes_carrerasArgs<ExtArgs>
    cursadas?: boolean | ESTUDIANTES$cursadasArgs<ExtArgs>
    condiciones_materias?: boolean | ESTUDIANTES$condiciones_materiasArgs<ExtArgs>
    _count?: boolean | ESTUDIANTESCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSTUDIANTES"]>

  export type ESTUDIANTESSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    id_pais?: boolean
    id_localidad?: boolean
    id_area_telefonica?: boolean
    id_genero?: boolean
    nombres?: boolean
    apellidos?: boolean
    dni?: boolean
    fecha_nacimiento?: boolean
    email?: boolean
    telefono?: boolean
    domicilio?: boolean
    fecha_ingreso?: boolean
    cohorte?: boolean
    secundario?: boolean
    cuil?: boolean
    examen_mayores25?: boolean
    solicito_beca?: boolean
    trabajador?: boolean
    persona_a_cargo?: boolean
    observaciones?: boolean
    estado?: boolean
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
    localidad?: boolean | LOCALIDADESDefaultArgs<ExtArgs>
    area_telefonica?: boolean | AREAS_TELEFONICASDefaultArgs<ExtArgs>
    genero?: boolean | GENEROSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSTUDIANTES"]>

  export type ESTUDIANTESSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_estudiante?: boolean
    id_pais?: boolean
    id_localidad?: boolean
    id_area_telefonica?: boolean
    id_genero?: boolean
    nombres?: boolean
    apellidos?: boolean
    dni?: boolean
    fecha_nacimiento?: boolean
    email?: boolean
    telefono?: boolean
    domicilio?: boolean
    fecha_ingreso?: boolean
    cohorte?: boolean
    secundario?: boolean
    cuil?: boolean
    examen_mayores25?: boolean
    solicito_beca?: boolean
    trabajador?: boolean
    persona_a_cargo?: boolean
    observaciones?: boolean
    estado?: boolean
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
    localidad?: boolean | LOCALIDADESDefaultArgs<ExtArgs>
    area_telefonica?: boolean | AREAS_TELEFONICASDefaultArgs<ExtArgs>
    genero?: boolean | GENEROSDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSTUDIANTES"]>

  export type ESTUDIANTESSelectScalar = {
    id_estudiante?: boolean
    id_pais?: boolean
    id_localidad?: boolean
    id_area_telefonica?: boolean
    id_genero?: boolean
    nombres?: boolean
    apellidos?: boolean
    dni?: boolean
    fecha_nacimiento?: boolean
    email?: boolean
    telefono?: boolean
    domicilio?: boolean
    fecha_ingreso?: boolean
    cohorte?: boolean
    secundario?: boolean
    cuil?: boolean
    examen_mayores25?: boolean
    solicito_beca?: boolean
    trabajador?: boolean
    persona_a_cargo?: boolean
    observaciones?: boolean
    estado?: boolean
  }

  export type ESTUDIANTESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_estudiante" | "id_pais" | "id_localidad" | "id_area_telefonica" | "id_genero" | "nombres" | "apellidos" | "dni" | "fecha_nacimiento" | "email" | "telefono" | "domicilio" | "fecha_ingreso" | "cohorte" | "secundario" | "cuil" | "examen_mayores25" | "solicito_beca" | "trabajador" | "persona_a_cargo" | "observaciones" | "estado", ExtArgs["result"]["eSTUDIANTES"]>
  export type ESTUDIANTESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
    localidad?: boolean | LOCALIDADESDefaultArgs<ExtArgs>
    area_telefonica?: boolean | AREAS_TELEFONICASDefaultArgs<ExtArgs>
    genero?: boolean | GENEROSDefaultArgs<ExtArgs>
    inscripciones?: boolean | ESTUDIANTES$inscripcionesArgs<ExtArgs>
    estudiantes_carreras?: boolean | ESTUDIANTES$estudiantes_carrerasArgs<ExtArgs>
    cursadas?: boolean | ESTUDIANTES$cursadasArgs<ExtArgs>
    condiciones_materias?: boolean | ESTUDIANTES$condiciones_materiasArgs<ExtArgs>
    _count?: boolean | ESTUDIANTESCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ESTUDIANTESIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
    localidad?: boolean | LOCALIDADESDefaultArgs<ExtArgs>
    area_telefonica?: boolean | AREAS_TELEFONICASDefaultArgs<ExtArgs>
    genero?: boolean | GENEROSDefaultArgs<ExtArgs>
  }
  export type ESTUDIANTESIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pais?: boolean | PAISESDefaultArgs<ExtArgs>
    localidad?: boolean | LOCALIDADESDefaultArgs<ExtArgs>
    area_telefonica?: boolean | AREAS_TELEFONICASDefaultArgs<ExtArgs>
    genero?: boolean | GENEROSDefaultArgs<ExtArgs>
  }

  export type $ESTUDIANTESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ESTUDIANTES"
    objects: {
      pais: Prisma.$PAISESPayload<ExtArgs>
      localidad: Prisma.$LOCALIDADESPayload<ExtArgs>
      area_telefonica: Prisma.$AREAS_TELEFONICASPayload<ExtArgs>
      genero: Prisma.$GENEROSPayload<ExtArgs>
      inscripciones: Prisma.$INSCRIPCIONESPayload<ExtArgs>[]
      estudiantes_carreras: Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>[]
      cursadas: Prisma.$CURSADASPayload<ExtArgs>[]
      condiciones_materias: Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_estudiante: number
      id_pais: number
      id_localidad: number
      id_area_telefonica: number
      id_genero: number
      nombres: string
      apellidos: string
      dni: string
      fecha_nacimiento: Date
      email: string
      telefono: string
      domicilio: string
      fecha_ingreso: Date
      cohorte: string
      secundario: string
      cuil: string
      examen_mayores25: boolean
      solicito_beca: boolean
      trabajador: boolean
      persona_a_cargo: boolean
      observaciones: string | null
      estado: string
    }, ExtArgs["result"]["eSTUDIANTES"]>
    composites: {}
  }

  type ESTUDIANTESGetPayload<S extends boolean | null | undefined | ESTUDIANTESDefaultArgs> = $Result.GetResult<Prisma.$ESTUDIANTESPayload, S>

  type ESTUDIANTESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ESTUDIANTESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ESTUDIANTESCountAggregateInputType | true
    }

  export interface ESTUDIANTESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ESTUDIANTES'], meta: { name: 'ESTUDIANTES' } }
    /**
     * Find zero or one ESTUDIANTES that matches the filter.
     * @param {ESTUDIANTESFindUniqueArgs} args - Arguments to find a ESTUDIANTES
     * @example
     * // Get one ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ESTUDIANTESFindUniqueArgs>(args: SelectSubset<T, ESTUDIANTESFindUniqueArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ESTUDIANTES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ESTUDIANTESFindUniqueOrThrowArgs} args - Arguments to find a ESTUDIANTES
     * @example
     * // Get one ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ESTUDIANTESFindUniqueOrThrowArgs>(args: SelectSubset<T, ESTUDIANTESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ESTUDIANTES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTESFindFirstArgs} args - Arguments to find a ESTUDIANTES
     * @example
     * // Get one ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ESTUDIANTESFindFirstArgs>(args?: SelectSubset<T, ESTUDIANTESFindFirstArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ESTUDIANTES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTESFindFirstOrThrowArgs} args - Arguments to find a ESTUDIANTES
     * @example
     * // Get one ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ESTUDIANTESFindFirstOrThrowArgs>(args?: SelectSubset<T, ESTUDIANTESFindFirstOrThrowArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ESTUDIANTES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.findMany()
     * 
     * // Get first 10 ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.findMany({ take: 10 })
     * 
     * // Only select the `id_estudiante`
     * const eSTUDIANTESWithId_estudianteOnly = await prisma.eSTUDIANTES.findMany({ select: { id_estudiante: true } })
     * 
     */
    findMany<T extends ESTUDIANTESFindManyArgs>(args?: SelectSubset<T, ESTUDIANTESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ESTUDIANTES.
     * @param {ESTUDIANTESCreateArgs} args - Arguments to create a ESTUDIANTES.
     * @example
     * // Create one ESTUDIANTES
     * const ESTUDIANTES = await prisma.eSTUDIANTES.create({
     *   data: {
     *     // ... data to create a ESTUDIANTES
     *   }
     * })
     * 
     */
    create<T extends ESTUDIANTESCreateArgs>(args: SelectSubset<T, ESTUDIANTESCreateArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ESTUDIANTES.
     * @param {ESTUDIANTESCreateManyArgs} args - Arguments to create many ESTUDIANTES.
     * @example
     * // Create many ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ESTUDIANTESCreateManyArgs>(args?: SelectSubset<T, ESTUDIANTESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ESTUDIANTES and returns the data saved in the database.
     * @param {ESTUDIANTESCreateManyAndReturnArgs} args - Arguments to create many ESTUDIANTES.
     * @example
     * // Create many ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ESTUDIANTES and only return the `id_estudiante`
     * const eSTUDIANTESWithId_estudianteOnly = await prisma.eSTUDIANTES.createManyAndReturn({
     *   select: { id_estudiante: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ESTUDIANTESCreateManyAndReturnArgs>(args?: SelectSubset<T, ESTUDIANTESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ESTUDIANTES.
     * @param {ESTUDIANTESDeleteArgs} args - Arguments to delete one ESTUDIANTES.
     * @example
     * // Delete one ESTUDIANTES
     * const ESTUDIANTES = await prisma.eSTUDIANTES.delete({
     *   where: {
     *     // ... filter to delete one ESTUDIANTES
     *   }
     * })
     * 
     */
    delete<T extends ESTUDIANTESDeleteArgs>(args: SelectSubset<T, ESTUDIANTESDeleteArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ESTUDIANTES.
     * @param {ESTUDIANTESUpdateArgs} args - Arguments to update one ESTUDIANTES.
     * @example
     * // Update one ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ESTUDIANTESUpdateArgs>(args: SelectSubset<T, ESTUDIANTESUpdateArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ESTUDIANTES.
     * @param {ESTUDIANTESDeleteManyArgs} args - Arguments to filter ESTUDIANTES to delete.
     * @example
     * // Delete a few ESTUDIANTES
     * const { count } = await prisma.eSTUDIANTES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ESTUDIANTESDeleteManyArgs>(args?: SelectSubset<T, ESTUDIANTESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ESTUDIANTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ESTUDIANTESUpdateManyArgs>(args: SelectSubset<T, ESTUDIANTESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ESTUDIANTES and returns the data updated in the database.
     * @param {ESTUDIANTESUpdateManyAndReturnArgs} args - Arguments to update many ESTUDIANTES.
     * @example
     * // Update many ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ESTUDIANTES and only return the `id_estudiante`
     * const eSTUDIANTESWithId_estudianteOnly = await prisma.eSTUDIANTES.updateManyAndReturn({
     *   select: { id_estudiante: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ESTUDIANTESUpdateManyAndReturnArgs>(args: SelectSubset<T, ESTUDIANTESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ESTUDIANTES.
     * @param {ESTUDIANTESUpsertArgs} args - Arguments to update or create a ESTUDIANTES.
     * @example
     * // Update or create a ESTUDIANTES
     * const eSTUDIANTES = await prisma.eSTUDIANTES.upsert({
     *   create: {
     *     // ... data to create a ESTUDIANTES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ESTUDIANTES we want to update
     *   }
     * })
     */
    upsert<T extends ESTUDIANTESUpsertArgs>(args: SelectSubset<T, ESTUDIANTESUpsertArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ESTUDIANTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTESCountArgs} args - Arguments to filter ESTUDIANTES to count.
     * @example
     * // Count the number of ESTUDIANTES
     * const count = await prisma.eSTUDIANTES.count({
     *   where: {
     *     // ... the filter for the ESTUDIANTES we want to count
     *   }
     * })
    **/
    count<T extends ESTUDIANTESCountArgs>(
      args?: Subset<T, ESTUDIANTESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ESTUDIANTESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ESTUDIANTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ESTUDIANTESAggregateArgs>(args: Subset<T, ESTUDIANTESAggregateArgs>): Prisma.PrismaPromise<GetESTUDIANTESAggregateType<T>>

    /**
     * Group by ESTUDIANTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTESGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ESTUDIANTESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ESTUDIANTESGroupByArgs['orderBy'] }
        : { orderBy?: ESTUDIANTESGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ESTUDIANTESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetESTUDIANTESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ESTUDIANTES model
   */
  readonly fields: ESTUDIANTESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ESTUDIANTES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ESTUDIANTESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pais<T extends PAISESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PAISESDefaultArgs<ExtArgs>>): Prisma__PAISESClient<$Result.GetResult<Prisma.$PAISESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    localidad<T extends LOCALIDADESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LOCALIDADESDefaultArgs<ExtArgs>>): Prisma__LOCALIDADESClient<$Result.GetResult<Prisma.$LOCALIDADESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    area_telefonica<T extends AREAS_TELEFONICASDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AREAS_TELEFONICASDefaultArgs<ExtArgs>>): Prisma__AREAS_TELEFONICASClient<$Result.GetResult<Prisma.$AREAS_TELEFONICASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genero<T extends GENEROSDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GENEROSDefaultArgs<ExtArgs>>): Prisma__GENEROSClient<$Result.GetResult<Prisma.$GENEROSPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inscripciones<T extends ESTUDIANTES$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, ESTUDIANTES$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    estudiantes_carreras<T extends ESTUDIANTES$estudiantes_carrerasArgs<ExtArgs> = {}>(args?: Subset<T, ESTUDIANTES$estudiantes_carrerasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cursadas<T extends ESTUDIANTES$cursadasArgs<ExtArgs> = {}>(args?: Subset<T, ESTUDIANTES$cursadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    condiciones_materias<T extends ESTUDIANTES$condiciones_materiasArgs<ExtArgs> = {}>(args?: Subset<T, ESTUDIANTES$condiciones_materiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ESTUDIANTES model
   */
  interface ESTUDIANTESFieldRefs {
    readonly id_estudiante: FieldRef<"ESTUDIANTES", 'Int'>
    readonly id_pais: FieldRef<"ESTUDIANTES", 'Int'>
    readonly id_localidad: FieldRef<"ESTUDIANTES", 'Int'>
    readonly id_area_telefonica: FieldRef<"ESTUDIANTES", 'Int'>
    readonly id_genero: FieldRef<"ESTUDIANTES", 'Int'>
    readonly nombres: FieldRef<"ESTUDIANTES", 'String'>
    readonly apellidos: FieldRef<"ESTUDIANTES", 'String'>
    readonly dni: FieldRef<"ESTUDIANTES", 'String'>
    readonly fecha_nacimiento: FieldRef<"ESTUDIANTES", 'DateTime'>
    readonly email: FieldRef<"ESTUDIANTES", 'String'>
    readonly telefono: FieldRef<"ESTUDIANTES", 'String'>
    readonly domicilio: FieldRef<"ESTUDIANTES", 'String'>
    readonly fecha_ingreso: FieldRef<"ESTUDIANTES", 'DateTime'>
    readonly cohorte: FieldRef<"ESTUDIANTES", 'String'>
    readonly secundario: FieldRef<"ESTUDIANTES", 'String'>
    readonly cuil: FieldRef<"ESTUDIANTES", 'String'>
    readonly examen_mayores25: FieldRef<"ESTUDIANTES", 'Boolean'>
    readonly solicito_beca: FieldRef<"ESTUDIANTES", 'Boolean'>
    readonly trabajador: FieldRef<"ESTUDIANTES", 'Boolean'>
    readonly persona_a_cargo: FieldRef<"ESTUDIANTES", 'Boolean'>
    readonly observaciones: FieldRef<"ESTUDIANTES", 'String'>
    readonly estado: FieldRef<"ESTUDIANTES", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ESTUDIANTES findUnique
   */
  export type ESTUDIANTESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES to fetch.
     */
    where: ESTUDIANTESWhereUniqueInput
  }

  /**
   * ESTUDIANTES findUniqueOrThrow
   */
  export type ESTUDIANTESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES to fetch.
     */
    where: ESTUDIANTESWhereUniqueInput
  }

  /**
   * ESTUDIANTES findFirst
   */
  export type ESTUDIANTESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES to fetch.
     */
    where?: ESTUDIANTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESTUDIANTES to fetch.
     */
    orderBy?: ESTUDIANTESOrderByWithRelationInput | ESTUDIANTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ESTUDIANTES.
     */
    cursor?: ESTUDIANTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESTUDIANTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESTUDIANTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESTUDIANTES.
     */
    distinct?: ESTUDIANTESScalarFieldEnum | ESTUDIANTESScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES findFirstOrThrow
   */
  export type ESTUDIANTESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES to fetch.
     */
    where?: ESTUDIANTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESTUDIANTES to fetch.
     */
    orderBy?: ESTUDIANTESOrderByWithRelationInput | ESTUDIANTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ESTUDIANTES.
     */
    cursor?: ESTUDIANTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESTUDIANTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESTUDIANTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESTUDIANTES.
     */
    distinct?: ESTUDIANTESScalarFieldEnum | ESTUDIANTESScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES findMany
   */
  export type ESTUDIANTESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES to fetch.
     */
    where?: ESTUDIANTESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESTUDIANTES to fetch.
     */
    orderBy?: ESTUDIANTESOrderByWithRelationInput | ESTUDIANTESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ESTUDIANTES.
     */
    cursor?: ESTUDIANTESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESTUDIANTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESTUDIANTES.
     */
    skip?: number
    distinct?: ESTUDIANTESScalarFieldEnum | ESTUDIANTESScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES create
   */
  export type ESTUDIANTESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * The data needed to create a ESTUDIANTES.
     */
    data: XOR<ESTUDIANTESCreateInput, ESTUDIANTESUncheckedCreateInput>
  }

  /**
   * ESTUDIANTES createMany
   */
  export type ESTUDIANTESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ESTUDIANTES.
     */
    data: ESTUDIANTESCreateManyInput | ESTUDIANTESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ESTUDIANTES createManyAndReturn
   */
  export type ESTUDIANTESCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * The data used to create many ESTUDIANTES.
     */
    data: ESTUDIANTESCreateManyInput | ESTUDIANTESCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ESTUDIANTES update
   */
  export type ESTUDIANTESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * The data needed to update a ESTUDIANTES.
     */
    data: XOR<ESTUDIANTESUpdateInput, ESTUDIANTESUncheckedUpdateInput>
    /**
     * Choose, which ESTUDIANTES to update.
     */
    where: ESTUDIANTESWhereUniqueInput
  }

  /**
   * ESTUDIANTES updateMany
   */
  export type ESTUDIANTESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ESTUDIANTES.
     */
    data: XOR<ESTUDIANTESUpdateManyMutationInput, ESTUDIANTESUncheckedUpdateManyInput>
    /**
     * Filter which ESTUDIANTES to update
     */
    where?: ESTUDIANTESWhereInput
    /**
     * Limit how many ESTUDIANTES to update.
     */
    limit?: number
  }

  /**
   * ESTUDIANTES updateManyAndReturn
   */
  export type ESTUDIANTESUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * The data used to update ESTUDIANTES.
     */
    data: XOR<ESTUDIANTESUpdateManyMutationInput, ESTUDIANTESUncheckedUpdateManyInput>
    /**
     * Filter which ESTUDIANTES to update
     */
    where?: ESTUDIANTESWhereInput
    /**
     * Limit how many ESTUDIANTES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ESTUDIANTES upsert
   */
  export type ESTUDIANTESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * The filter to search for the ESTUDIANTES to update in case it exists.
     */
    where: ESTUDIANTESWhereUniqueInput
    /**
     * In case the ESTUDIANTES found by the `where` argument doesn't exist, create a new ESTUDIANTES with this data.
     */
    create: XOR<ESTUDIANTESCreateInput, ESTUDIANTESUncheckedCreateInput>
    /**
     * In case the ESTUDIANTES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ESTUDIANTESUpdateInput, ESTUDIANTESUncheckedUpdateInput>
  }

  /**
   * ESTUDIANTES delete
   */
  export type ESTUDIANTESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
    /**
     * Filter which ESTUDIANTES to delete.
     */
    where: ESTUDIANTESWhereUniqueInput
  }

  /**
   * ESTUDIANTES deleteMany
   */
  export type ESTUDIANTESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ESTUDIANTES to delete
     */
    where?: ESTUDIANTESWhereInput
    /**
     * Limit how many ESTUDIANTES to delete.
     */
    limit?: number
  }

  /**
   * ESTUDIANTES.inscripciones
   */
  export type ESTUDIANTES$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    where?: INSCRIPCIONESWhereInput
    orderBy?: INSCRIPCIONESOrderByWithRelationInput | INSCRIPCIONESOrderByWithRelationInput[]
    cursor?: INSCRIPCIONESWhereUniqueInput
    take?: number
    skip?: number
    distinct?: INSCRIPCIONESScalarFieldEnum | INSCRIPCIONESScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES.estudiantes_carreras
   */
  export type ESTUDIANTES$estudiantes_carrerasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    where?: ESTUDIANTES_CARRERASWhereInput
    orderBy?: ESTUDIANTES_CARRERASOrderByWithRelationInput | ESTUDIANTES_CARRERASOrderByWithRelationInput[]
    cursor?: ESTUDIANTES_CARRERASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ESTUDIANTES_CARRERASScalarFieldEnum | ESTUDIANTES_CARRERASScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES.cursadas
   */
  export type ESTUDIANTES$cursadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    where?: CURSADASWhereInput
    orderBy?: CURSADASOrderByWithRelationInput | CURSADASOrderByWithRelationInput[]
    cursor?: CURSADASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CURSADASScalarFieldEnum | CURSADASScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES.condiciones_materias
   */
  export type ESTUDIANTES$condiciones_materiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    where?: CONDICIONES_MATERIASWhereInput
    orderBy?: CONDICIONES_MATERIASOrderByWithRelationInput | CONDICIONES_MATERIASOrderByWithRelationInput[]
    cursor?: CONDICIONES_MATERIASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CONDICIONES_MATERIASScalarFieldEnum | CONDICIONES_MATERIASScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES without action
   */
  export type ESTUDIANTESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES
     */
    select?: ESTUDIANTESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES
     */
    omit?: ESTUDIANTESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTESInclude<ExtArgs> | null
  }


  /**
   * Model INSCRIPCIONES
   */

  export type AggregateINSCRIPCIONES = {
    _count: INSCRIPCIONESCountAggregateOutputType | null
    _avg: INSCRIPCIONESAvgAggregateOutputType | null
    _sum: INSCRIPCIONESSumAggregateOutputType | null
    _min: INSCRIPCIONESMinAggregateOutputType | null
    _max: INSCRIPCIONESMaxAggregateOutputType | null
  }

  export type INSCRIPCIONESAvgAggregateOutputType = {
    id_inscripcion: number | null
    id_estudiante: number | null
    id_carrera: number | null
  }

  export type INSCRIPCIONESSumAggregateOutputType = {
    id_inscripcion: number | null
    id_estudiante: number | null
    id_carrera: number | null
  }

  export type INSCRIPCIONESMinAggregateOutputType = {
    id_inscripcion: number | null
    id_estudiante: number | null
    id_carrera: number | null
    fecha_inscripcion: Date | null
    estado: boolean | null
    causa_inactividad: string | null
  }

  export type INSCRIPCIONESMaxAggregateOutputType = {
    id_inscripcion: number | null
    id_estudiante: number | null
    id_carrera: number | null
    fecha_inscripcion: Date | null
    estado: boolean | null
    causa_inactividad: string | null
  }

  export type INSCRIPCIONESCountAggregateOutputType = {
    id_inscripcion: number
    id_estudiante: number
    id_carrera: number
    fecha_inscripcion: number
    estado: number
    causa_inactividad: number
    _all: number
  }


  export type INSCRIPCIONESAvgAggregateInputType = {
    id_inscripcion?: true
    id_estudiante?: true
    id_carrera?: true
  }

  export type INSCRIPCIONESSumAggregateInputType = {
    id_inscripcion?: true
    id_estudiante?: true
    id_carrera?: true
  }

  export type INSCRIPCIONESMinAggregateInputType = {
    id_inscripcion?: true
    id_estudiante?: true
    id_carrera?: true
    fecha_inscripcion?: true
    estado?: true
    causa_inactividad?: true
  }

  export type INSCRIPCIONESMaxAggregateInputType = {
    id_inscripcion?: true
    id_estudiante?: true
    id_carrera?: true
    fecha_inscripcion?: true
    estado?: true
    causa_inactividad?: true
  }

  export type INSCRIPCIONESCountAggregateInputType = {
    id_inscripcion?: true
    id_estudiante?: true
    id_carrera?: true
    fecha_inscripcion?: true
    estado?: true
    causa_inactividad?: true
    _all?: true
  }

  export type INSCRIPCIONESAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which INSCRIPCIONES to aggregate.
     */
    where?: INSCRIPCIONESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of INSCRIPCIONES to fetch.
     */
    orderBy?: INSCRIPCIONESOrderByWithRelationInput | INSCRIPCIONESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: INSCRIPCIONESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` INSCRIPCIONES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` INSCRIPCIONES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned INSCRIPCIONES
    **/
    _count?: true | INSCRIPCIONESCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: INSCRIPCIONESAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: INSCRIPCIONESSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: INSCRIPCIONESMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: INSCRIPCIONESMaxAggregateInputType
  }

  export type GetINSCRIPCIONESAggregateType<T extends INSCRIPCIONESAggregateArgs> = {
        [P in keyof T & keyof AggregateINSCRIPCIONES]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateINSCRIPCIONES[P]>
      : GetScalarType<T[P], AggregateINSCRIPCIONES[P]>
  }




  export type INSCRIPCIONESGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: INSCRIPCIONESWhereInput
    orderBy?: INSCRIPCIONESOrderByWithAggregationInput | INSCRIPCIONESOrderByWithAggregationInput[]
    by: INSCRIPCIONESScalarFieldEnum[] | INSCRIPCIONESScalarFieldEnum
    having?: INSCRIPCIONESScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: INSCRIPCIONESCountAggregateInputType | true
    _avg?: INSCRIPCIONESAvgAggregateInputType
    _sum?: INSCRIPCIONESSumAggregateInputType
    _min?: INSCRIPCIONESMinAggregateInputType
    _max?: INSCRIPCIONESMaxAggregateInputType
  }

  export type INSCRIPCIONESGroupByOutputType = {
    id_inscripcion: number
    id_estudiante: number
    id_carrera: number
    fecha_inscripcion: Date
    estado: boolean
    causa_inactividad: string | null
    _count: INSCRIPCIONESCountAggregateOutputType | null
    _avg: INSCRIPCIONESAvgAggregateOutputType | null
    _sum: INSCRIPCIONESSumAggregateOutputType | null
    _min: INSCRIPCIONESMinAggregateOutputType | null
    _max: INSCRIPCIONESMaxAggregateOutputType | null
  }

  type GetINSCRIPCIONESGroupByPayload<T extends INSCRIPCIONESGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<INSCRIPCIONESGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof INSCRIPCIONESGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], INSCRIPCIONESGroupByOutputType[P]>
            : GetScalarType<T[P], INSCRIPCIONESGroupByOutputType[P]>
        }
      >
    >


  export type INSCRIPCIONESSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion?: boolean
    id_estudiante?: boolean
    id_carrera?: boolean
    fecha_inscripcion?: boolean
    estado?: boolean
    causa_inactividad?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iNSCRIPCIONES"]>

  export type INSCRIPCIONESSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion?: boolean
    id_estudiante?: boolean
    id_carrera?: boolean
    fecha_inscripcion?: boolean
    estado?: boolean
    causa_inactividad?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iNSCRIPCIONES"]>

  export type INSCRIPCIONESSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inscripcion?: boolean
    id_estudiante?: boolean
    id_carrera?: boolean
    fecha_inscripcion?: boolean
    estado?: boolean
    causa_inactividad?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["iNSCRIPCIONES"]>

  export type INSCRIPCIONESSelectScalar = {
    id_inscripcion?: boolean
    id_estudiante?: boolean
    id_carrera?: boolean
    fecha_inscripcion?: boolean
    estado?: boolean
    causa_inactividad?: boolean
  }

  export type INSCRIPCIONESOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_inscripcion" | "id_estudiante" | "id_carrera" | "fecha_inscripcion" | "estado" | "causa_inactividad", ExtArgs["result"]["iNSCRIPCIONES"]>
  export type INSCRIPCIONESInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }
  export type INSCRIPCIONESIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }
  export type INSCRIPCIONESIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }

  export type $INSCRIPCIONESPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "INSCRIPCIONES"
    objects: {
      estudiante: Prisma.$ESTUDIANTESPayload<ExtArgs>
      carrera: Prisma.$CARRERASPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_inscripcion: number
      id_estudiante: number
      id_carrera: number
      fecha_inscripcion: Date
      estado: boolean
      causa_inactividad: string | null
    }, ExtArgs["result"]["iNSCRIPCIONES"]>
    composites: {}
  }

  type INSCRIPCIONESGetPayload<S extends boolean | null | undefined | INSCRIPCIONESDefaultArgs> = $Result.GetResult<Prisma.$INSCRIPCIONESPayload, S>

  type INSCRIPCIONESCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<INSCRIPCIONESFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: INSCRIPCIONESCountAggregateInputType | true
    }

  export interface INSCRIPCIONESDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['INSCRIPCIONES'], meta: { name: 'INSCRIPCIONES' } }
    /**
     * Find zero or one INSCRIPCIONES that matches the filter.
     * @param {INSCRIPCIONESFindUniqueArgs} args - Arguments to find a INSCRIPCIONES
     * @example
     * // Get one INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends INSCRIPCIONESFindUniqueArgs>(args: SelectSubset<T, INSCRIPCIONESFindUniqueArgs<ExtArgs>>): Prisma__INSCRIPCIONESClient<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one INSCRIPCIONES that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {INSCRIPCIONESFindUniqueOrThrowArgs} args - Arguments to find a INSCRIPCIONES
     * @example
     * // Get one INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends INSCRIPCIONESFindUniqueOrThrowArgs>(args: SelectSubset<T, INSCRIPCIONESFindUniqueOrThrowArgs<ExtArgs>>): Prisma__INSCRIPCIONESClient<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first INSCRIPCIONES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {INSCRIPCIONESFindFirstArgs} args - Arguments to find a INSCRIPCIONES
     * @example
     * // Get one INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends INSCRIPCIONESFindFirstArgs>(args?: SelectSubset<T, INSCRIPCIONESFindFirstArgs<ExtArgs>>): Prisma__INSCRIPCIONESClient<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first INSCRIPCIONES that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {INSCRIPCIONESFindFirstOrThrowArgs} args - Arguments to find a INSCRIPCIONES
     * @example
     * // Get one INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends INSCRIPCIONESFindFirstOrThrowArgs>(args?: SelectSubset<T, INSCRIPCIONESFindFirstOrThrowArgs<ExtArgs>>): Prisma__INSCRIPCIONESClient<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more INSCRIPCIONES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {INSCRIPCIONESFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.findMany()
     * 
     * // Get first 10 INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.findMany({ take: 10 })
     * 
     * // Only select the `id_inscripcion`
     * const iNSCRIPCIONESWithId_inscripcionOnly = await prisma.iNSCRIPCIONES.findMany({ select: { id_inscripcion: true } })
     * 
     */
    findMany<T extends INSCRIPCIONESFindManyArgs>(args?: SelectSubset<T, INSCRIPCIONESFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a INSCRIPCIONES.
     * @param {INSCRIPCIONESCreateArgs} args - Arguments to create a INSCRIPCIONES.
     * @example
     * // Create one INSCRIPCIONES
     * const INSCRIPCIONES = await prisma.iNSCRIPCIONES.create({
     *   data: {
     *     // ... data to create a INSCRIPCIONES
     *   }
     * })
     * 
     */
    create<T extends INSCRIPCIONESCreateArgs>(args: SelectSubset<T, INSCRIPCIONESCreateArgs<ExtArgs>>): Prisma__INSCRIPCIONESClient<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many INSCRIPCIONES.
     * @param {INSCRIPCIONESCreateManyArgs} args - Arguments to create many INSCRIPCIONES.
     * @example
     * // Create many INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends INSCRIPCIONESCreateManyArgs>(args?: SelectSubset<T, INSCRIPCIONESCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many INSCRIPCIONES and returns the data saved in the database.
     * @param {INSCRIPCIONESCreateManyAndReturnArgs} args - Arguments to create many INSCRIPCIONES.
     * @example
     * // Create many INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many INSCRIPCIONES and only return the `id_inscripcion`
     * const iNSCRIPCIONESWithId_inscripcionOnly = await prisma.iNSCRIPCIONES.createManyAndReturn({
     *   select: { id_inscripcion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends INSCRIPCIONESCreateManyAndReturnArgs>(args?: SelectSubset<T, INSCRIPCIONESCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a INSCRIPCIONES.
     * @param {INSCRIPCIONESDeleteArgs} args - Arguments to delete one INSCRIPCIONES.
     * @example
     * // Delete one INSCRIPCIONES
     * const INSCRIPCIONES = await prisma.iNSCRIPCIONES.delete({
     *   where: {
     *     // ... filter to delete one INSCRIPCIONES
     *   }
     * })
     * 
     */
    delete<T extends INSCRIPCIONESDeleteArgs>(args: SelectSubset<T, INSCRIPCIONESDeleteArgs<ExtArgs>>): Prisma__INSCRIPCIONESClient<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one INSCRIPCIONES.
     * @param {INSCRIPCIONESUpdateArgs} args - Arguments to update one INSCRIPCIONES.
     * @example
     * // Update one INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends INSCRIPCIONESUpdateArgs>(args: SelectSubset<T, INSCRIPCIONESUpdateArgs<ExtArgs>>): Prisma__INSCRIPCIONESClient<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more INSCRIPCIONES.
     * @param {INSCRIPCIONESDeleteManyArgs} args - Arguments to filter INSCRIPCIONES to delete.
     * @example
     * // Delete a few INSCRIPCIONES
     * const { count } = await prisma.iNSCRIPCIONES.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends INSCRIPCIONESDeleteManyArgs>(args?: SelectSubset<T, INSCRIPCIONESDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more INSCRIPCIONES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {INSCRIPCIONESUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends INSCRIPCIONESUpdateManyArgs>(args: SelectSubset<T, INSCRIPCIONESUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more INSCRIPCIONES and returns the data updated in the database.
     * @param {INSCRIPCIONESUpdateManyAndReturnArgs} args - Arguments to update many INSCRIPCIONES.
     * @example
     * // Update many INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more INSCRIPCIONES and only return the `id_inscripcion`
     * const iNSCRIPCIONESWithId_inscripcionOnly = await prisma.iNSCRIPCIONES.updateManyAndReturn({
     *   select: { id_inscripcion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends INSCRIPCIONESUpdateManyAndReturnArgs>(args: SelectSubset<T, INSCRIPCIONESUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one INSCRIPCIONES.
     * @param {INSCRIPCIONESUpsertArgs} args - Arguments to update or create a INSCRIPCIONES.
     * @example
     * // Update or create a INSCRIPCIONES
     * const iNSCRIPCIONES = await prisma.iNSCRIPCIONES.upsert({
     *   create: {
     *     // ... data to create a INSCRIPCIONES
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the INSCRIPCIONES we want to update
     *   }
     * })
     */
    upsert<T extends INSCRIPCIONESUpsertArgs>(args: SelectSubset<T, INSCRIPCIONESUpsertArgs<ExtArgs>>): Prisma__INSCRIPCIONESClient<$Result.GetResult<Prisma.$INSCRIPCIONESPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of INSCRIPCIONES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {INSCRIPCIONESCountArgs} args - Arguments to filter INSCRIPCIONES to count.
     * @example
     * // Count the number of INSCRIPCIONES
     * const count = await prisma.iNSCRIPCIONES.count({
     *   where: {
     *     // ... the filter for the INSCRIPCIONES we want to count
     *   }
     * })
    **/
    count<T extends INSCRIPCIONESCountArgs>(
      args?: Subset<T, INSCRIPCIONESCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], INSCRIPCIONESCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a INSCRIPCIONES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {INSCRIPCIONESAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends INSCRIPCIONESAggregateArgs>(args: Subset<T, INSCRIPCIONESAggregateArgs>): Prisma.PrismaPromise<GetINSCRIPCIONESAggregateType<T>>

    /**
     * Group by INSCRIPCIONES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {INSCRIPCIONESGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends INSCRIPCIONESGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: INSCRIPCIONESGroupByArgs['orderBy'] }
        : { orderBy?: INSCRIPCIONESGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, INSCRIPCIONESGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetINSCRIPCIONESGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the INSCRIPCIONES model
   */
  readonly fields: INSCRIPCIONESFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for INSCRIPCIONES.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__INSCRIPCIONESClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends ESTUDIANTESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ESTUDIANTESDefaultArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carrera<T extends CARRERASDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CARRERASDefaultArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the INSCRIPCIONES model
   */
  interface INSCRIPCIONESFieldRefs {
    readonly id_inscripcion: FieldRef<"INSCRIPCIONES", 'Int'>
    readonly id_estudiante: FieldRef<"INSCRIPCIONES", 'Int'>
    readonly id_carrera: FieldRef<"INSCRIPCIONES", 'Int'>
    readonly fecha_inscripcion: FieldRef<"INSCRIPCIONES", 'DateTime'>
    readonly estado: FieldRef<"INSCRIPCIONES", 'Boolean'>
    readonly causa_inactividad: FieldRef<"INSCRIPCIONES", 'String'>
  }
    

  // Custom InputTypes
  /**
   * INSCRIPCIONES findUnique
   */
  export type INSCRIPCIONESFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * Filter, which INSCRIPCIONES to fetch.
     */
    where: INSCRIPCIONESWhereUniqueInput
  }

  /**
   * INSCRIPCIONES findUniqueOrThrow
   */
  export type INSCRIPCIONESFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * Filter, which INSCRIPCIONES to fetch.
     */
    where: INSCRIPCIONESWhereUniqueInput
  }

  /**
   * INSCRIPCIONES findFirst
   */
  export type INSCRIPCIONESFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * Filter, which INSCRIPCIONES to fetch.
     */
    where?: INSCRIPCIONESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of INSCRIPCIONES to fetch.
     */
    orderBy?: INSCRIPCIONESOrderByWithRelationInput | INSCRIPCIONESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for INSCRIPCIONES.
     */
    cursor?: INSCRIPCIONESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` INSCRIPCIONES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` INSCRIPCIONES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of INSCRIPCIONES.
     */
    distinct?: INSCRIPCIONESScalarFieldEnum | INSCRIPCIONESScalarFieldEnum[]
  }

  /**
   * INSCRIPCIONES findFirstOrThrow
   */
  export type INSCRIPCIONESFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * Filter, which INSCRIPCIONES to fetch.
     */
    where?: INSCRIPCIONESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of INSCRIPCIONES to fetch.
     */
    orderBy?: INSCRIPCIONESOrderByWithRelationInput | INSCRIPCIONESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for INSCRIPCIONES.
     */
    cursor?: INSCRIPCIONESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` INSCRIPCIONES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` INSCRIPCIONES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of INSCRIPCIONES.
     */
    distinct?: INSCRIPCIONESScalarFieldEnum | INSCRIPCIONESScalarFieldEnum[]
  }

  /**
   * INSCRIPCIONES findMany
   */
  export type INSCRIPCIONESFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * Filter, which INSCRIPCIONES to fetch.
     */
    where?: INSCRIPCIONESWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of INSCRIPCIONES to fetch.
     */
    orderBy?: INSCRIPCIONESOrderByWithRelationInput | INSCRIPCIONESOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing INSCRIPCIONES.
     */
    cursor?: INSCRIPCIONESWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` INSCRIPCIONES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` INSCRIPCIONES.
     */
    skip?: number
    distinct?: INSCRIPCIONESScalarFieldEnum | INSCRIPCIONESScalarFieldEnum[]
  }

  /**
   * INSCRIPCIONES create
   */
  export type INSCRIPCIONESCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * The data needed to create a INSCRIPCIONES.
     */
    data: XOR<INSCRIPCIONESCreateInput, INSCRIPCIONESUncheckedCreateInput>
  }

  /**
   * INSCRIPCIONES createMany
   */
  export type INSCRIPCIONESCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many INSCRIPCIONES.
     */
    data: INSCRIPCIONESCreateManyInput | INSCRIPCIONESCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * INSCRIPCIONES createManyAndReturn
   */
  export type INSCRIPCIONESCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * The data used to create many INSCRIPCIONES.
     */
    data: INSCRIPCIONESCreateManyInput | INSCRIPCIONESCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * INSCRIPCIONES update
   */
  export type INSCRIPCIONESUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * The data needed to update a INSCRIPCIONES.
     */
    data: XOR<INSCRIPCIONESUpdateInput, INSCRIPCIONESUncheckedUpdateInput>
    /**
     * Choose, which INSCRIPCIONES to update.
     */
    where: INSCRIPCIONESWhereUniqueInput
  }

  /**
   * INSCRIPCIONES updateMany
   */
  export type INSCRIPCIONESUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update INSCRIPCIONES.
     */
    data: XOR<INSCRIPCIONESUpdateManyMutationInput, INSCRIPCIONESUncheckedUpdateManyInput>
    /**
     * Filter which INSCRIPCIONES to update
     */
    where?: INSCRIPCIONESWhereInput
    /**
     * Limit how many INSCRIPCIONES to update.
     */
    limit?: number
  }

  /**
   * INSCRIPCIONES updateManyAndReturn
   */
  export type INSCRIPCIONESUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * The data used to update INSCRIPCIONES.
     */
    data: XOR<INSCRIPCIONESUpdateManyMutationInput, INSCRIPCIONESUncheckedUpdateManyInput>
    /**
     * Filter which INSCRIPCIONES to update
     */
    where?: INSCRIPCIONESWhereInput
    /**
     * Limit how many INSCRIPCIONES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * INSCRIPCIONES upsert
   */
  export type INSCRIPCIONESUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * The filter to search for the INSCRIPCIONES to update in case it exists.
     */
    where: INSCRIPCIONESWhereUniqueInput
    /**
     * In case the INSCRIPCIONES found by the `where` argument doesn't exist, create a new INSCRIPCIONES with this data.
     */
    create: XOR<INSCRIPCIONESCreateInput, INSCRIPCIONESUncheckedCreateInput>
    /**
     * In case the INSCRIPCIONES was found with the provided `where` argument, update it with this data.
     */
    update: XOR<INSCRIPCIONESUpdateInput, INSCRIPCIONESUncheckedUpdateInput>
  }

  /**
   * INSCRIPCIONES delete
   */
  export type INSCRIPCIONESDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
    /**
     * Filter which INSCRIPCIONES to delete.
     */
    where: INSCRIPCIONESWhereUniqueInput
  }

  /**
   * INSCRIPCIONES deleteMany
   */
  export type INSCRIPCIONESDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which INSCRIPCIONES to delete
     */
    where?: INSCRIPCIONESWhereInput
    /**
     * Limit how many INSCRIPCIONES to delete.
     */
    limit?: number
  }

  /**
   * INSCRIPCIONES without action
   */
  export type INSCRIPCIONESDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the INSCRIPCIONES
     */
    select?: INSCRIPCIONESSelect<ExtArgs> | null
    /**
     * Omit specific fields from the INSCRIPCIONES
     */
    omit?: INSCRIPCIONESOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: INSCRIPCIONESInclude<ExtArgs> | null
  }


  /**
   * Model ESTUDIANTES_CARRERAS
   */

  export type AggregateESTUDIANTES_CARRERAS = {
    _count: ESTUDIANTES_CARRERASCountAggregateOutputType | null
    _avg: ESTUDIANTES_CARRERASAvgAggregateOutputType | null
    _sum: ESTUDIANTES_CARRERASSumAggregateOutputType | null
    _min: ESTUDIANTES_CARRERASMinAggregateOutputType | null
    _max: ESTUDIANTES_CARRERASMaxAggregateOutputType | null
  }

  export type ESTUDIANTES_CARRERASAvgAggregateOutputType = {
    id_ec: number | null
    id_estudiante: number | null
    id_carrera: number | null
  }

  export type ESTUDIANTES_CARRERASSumAggregateOutputType = {
    id_ec: number | null
    id_estudiante: number | null
    id_carrera: number | null
  }

  export type ESTUDIANTES_CARRERASMinAggregateOutputType = {
    id_ec: number | null
    id_estudiante: number | null
    id_carrera: number | null
    fecha_alta: Date | null
    fecha_baja: Date | null
  }

  export type ESTUDIANTES_CARRERASMaxAggregateOutputType = {
    id_ec: number | null
    id_estudiante: number | null
    id_carrera: number | null
    fecha_alta: Date | null
    fecha_baja: Date | null
  }

  export type ESTUDIANTES_CARRERASCountAggregateOutputType = {
    id_ec: number
    id_estudiante: number
    id_carrera: number
    fecha_alta: number
    fecha_baja: number
    _all: number
  }


  export type ESTUDIANTES_CARRERASAvgAggregateInputType = {
    id_ec?: true
    id_estudiante?: true
    id_carrera?: true
  }

  export type ESTUDIANTES_CARRERASSumAggregateInputType = {
    id_ec?: true
    id_estudiante?: true
    id_carrera?: true
  }

  export type ESTUDIANTES_CARRERASMinAggregateInputType = {
    id_ec?: true
    id_estudiante?: true
    id_carrera?: true
    fecha_alta?: true
    fecha_baja?: true
  }

  export type ESTUDIANTES_CARRERASMaxAggregateInputType = {
    id_ec?: true
    id_estudiante?: true
    id_carrera?: true
    fecha_alta?: true
    fecha_baja?: true
  }

  export type ESTUDIANTES_CARRERASCountAggregateInputType = {
    id_ec?: true
    id_estudiante?: true
    id_carrera?: true
    fecha_alta?: true
    fecha_baja?: true
    _all?: true
  }

  export type ESTUDIANTES_CARRERASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ESTUDIANTES_CARRERAS to aggregate.
     */
    where?: ESTUDIANTES_CARRERASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESTUDIANTES_CARRERAS to fetch.
     */
    orderBy?: ESTUDIANTES_CARRERASOrderByWithRelationInput | ESTUDIANTES_CARRERASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ESTUDIANTES_CARRERASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESTUDIANTES_CARRERAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESTUDIANTES_CARRERAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ESTUDIANTES_CARRERAS
    **/
    _count?: true | ESTUDIANTES_CARRERASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ESTUDIANTES_CARRERASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ESTUDIANTES_CARRERASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ESTUDIANTES_CARRERASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ESTUDIANTES_CARRERASMaxAggregateInputType
  }

  export type GetESTUDIANTES_CARRERASAggregateType<T extends ESTUDIANTES_CARRERASAggregateArgs> = {
        [P in keyof T & keyof AggregateESTUDIANTES_CARRERAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateESTUDIANTES_CARRERAS[P]>
      : GetScalarType<T[P], AggregateESTUDIANTES_CARRERAS[P]>
  }




  export type ESTUDIANTES_CARRERASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ESTUDIANTES_CARRERASWhereInput
    orderBy?: ESTUDIANTES_CARRERASOrderByWithAggregationInput | ESTUDIANTES_CARRERASOrderByWithAggregationInput[]
    by: ESTUDIANTES_CARRERASScalarFieldEnum[] | ESTUDIANTES_CARRERASScalarFieldEnum
    having?: ESTUDIANTES_CARRERASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ESTUDIANTES_CARRERASCountAggregateInputType | true
    _avg?: ESTUDIANTES_CARRERASAvgAggregateInputType
    _sum?: ESTUDIANTES_CARRERASSumAggregateInputType
    _min?: ESTUDIANTES_CARRERASMinAggregateInputType
    _max?: ESTUDIANTES_CARRERASMaxAggregateInputType
  }

  export type ESTUDIANTES_CARRERASGroupByOutputType = {
    id_ec: number
    id_estudiante: number
    id_carrera: number
    fecha_alta: Date
    fecha_baja: Date | null
    _count: ESTUDIANTES_CARRERASCountAggregateOutputType | null
    _avg: ESTUDIANTES_CARRERASAvgAggregateOutputType | null
    _sum: ESTUDIANTES_CARRERASSumAggregateOutputType | null
    _min: ESTUDIANTES_CARRERASMinAggregateOutputType | null
    _max: ESTUDIANTES_CARRERASMaxAggregateOutputType | null
  }

  type GetESTUDIANTES_CARRERASGroupByPayload<T extends ESTUDIANTES_CARRERASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ESTUDIANTES_CARRERASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ESTUDIANTES_CARRERASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ESTUDIANTES_CARRERASGroupByOutputType[P]>
            : GetScalarType<T[P], ESTUDIANTES_CARRERASGroupByOutputType[P]>
        }
      >
    >


  export type ESTUDIANTES_CARRERASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ec?: boolean
    id_estudiante?: boolean
    id_carrera?: boolean
    fecha_alta?: boolean
    fecha_baja?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSTUDIANTES_CARRERAS"]>

  export type ESTUDIANTES_CARRERASSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ec?: boolean
    id_estudiante?: boolean
    id_carrera?: boolean
    fecha_alta?: boolean
    fecha_baja?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSTUDIANTES_CARRERAS"]>

  export type ESTUDIANTES_CARRERASSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ec?: boolean
    id_estudiante?: boolean
    id_carrera?: boolean
    fecha_alta?: boolean
    fecha_baja?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eSTUDIANTES_CARRERAS"]>

  export type ESTUDIANTES_CARRERASSelectScalar = {
    id_ec?: boolean
    id_estudiante?: boolean
    id_carrera?: boolean
    fecha_alta?: boolean
    fecha_baja?: boolean
  }

  export type ESTUDIANTES_CARRERASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ec" | "id_estudiante" | "id_carrera" | "fecha_alta" | "fecha_baja", ExtArgs["result"]["eSTUDIANTES_CARRERAS"]>
  export type ESTUDIANTES_CARRERASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }
  export type ESTUDIANTES_CARRERASIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }
  export type ESTUDIANTES_CARRERASIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    carrera?: boolean | CARRERASDefaultArgs<ExtArgs>
  }

  export type $ESTUDIANTES_CARRERASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ESTUDIANTES_CARRERAS"
    objects: {
      estudiante: Prisma.$ESTUDIANTESPayload<ExtArgs>
      carrera: Prisma.$CARRERASPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ec: number
      id_estudiante: number
      id_carrera: number
      fecha_alta: Date
      fecha_baja: Date | null
    }, ExtArgs["result"]["eSTUDIANTES_CARRERAS"]>
    composites: {}
  }

  type ESTUDIANTES_CARRERASGetPayload<S extends boolean | null | undefined | ESTUDIANTES_CARRERASDefaultArgs> = $Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload, S>

  type ESTUDIANTES_CARRERASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ESTUDIANTES_CARRERASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ESTUDIANTES_CARRERASCountAggregateInputType | true
    }

  export interface ESTUDIANTES_CARRERASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ESTUDIANTES_CARRERAS'], meta: { name: 'ESTUDIANTES_CARRERAS' } }
    /**
     * Find zero or one ESTUDIANTES_CARRERAS that matches the filter.
     * @param {ESTUDIANTES_CARRERASFindUniqueArgs} args - Arguments to find a ESTUDIANTES_CARRERAS
     * @example
     * // Get one ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ESTUDIANTES_CARRERASFindUniqueArgs>(args: SelectSubset<T, ESTUDIANTES_CARRERASFindUniqueArgs<ExtArgs>>): Prisma__ESTUDIANTES_CARRERASClient<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ESTUDIANTES_CARRERAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ESTUDIANTES_CARRERASFindUniqueOrThrowArgs} args - Arguments to find a ESTUDIANTES_CARRERAS
     * @example
     * // Get one ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ESTUDIANTES_CARRERASFindUniqueOrThrowArgs>(args: SelectSubset<T, ESTUDIANTES_CARRERASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ESTUDIANTES_CARRERASClient<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ESTUDIANTES_CARRERAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTES_CARRERASFindFirstArgs} args - Arguments to find a ESTUDIANTES_CARRERAS
     * @example
     * // Get one ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ESTUDIANTES_CARRERASFindFirstArgs>(args?: SelectSubset<T, ESTUDIANTES_CARRERASFindFirstArgs<ExtArgs>>): Prisma__ESTUDIANTES_CARRERASClient<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ESTUDIANTES_CARRERAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTES_CARRERASFindFirstOrThrowArgs} args - Arguments to find a ESTUDIANTES_CARRERAS
     * @example
     * // Get one ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ESTUDIANTES_CARRERASFindFirstOrThrowArgs>(args?: SelectSubset<T, ESTUDIANTES_CARRERASFindFirstOrThrowArgs<ExtArgs>>): Prisma__ESTUDIANTES_CARRERASClient<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ESTUDIANTES_CARRERAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTES_CARRERASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.findMany()
     * 
     * // Get first 10 ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.findMany({ take: 10 })
     * 
     * // Only select the `id_ec`
     * const eSTUDIANTES_CARRERASWithId_ecOnly = await prisma.eSTUDIANTES_CARRERAS.findMany({ select: { id_ec: true } })
     * 
     */
    findMany<T extends ESTUDIANTES_CARRERASFindManyArgs>(args?: SelectSubset<T, ESTUDIANTES_CARRERASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ESTUDIANTES_CARRERAS.
     * @param {ESTUDIANTES_CARRERASCreateArgs} args - Arguments to create a ESTUDIANTES_CARRERAS.
     * @example
     * // Create one ESTUDIANTES_CARRERAS
     * const ESTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.create({
     *   data: {
     *     // ... data to create a ESTUDIANTES_CARRERAS
     *   }
     * })
     * 
     */
    create<T extends ESTUDIANTES_CARRERASCreateArgs>(args: SelectSubset<T, ESTUDIANTES_CARRERASCreateArgs<ExtArgs>>): Prisma__ESTUDIANTES_CARRERASClient<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ESTUDIANTES_CARRERAS.
     * @param {ESTUDIANTES_CARRERASCreateManyArgs} args - Arguments to create many ESTUDIANTES_CARRERAS.
     * @example
     * // Create many ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ESTUDIANTES_CARRERASCreateManyArgs>(args?: SelectSubset<T, ESTUDIANTES_CARRERASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ESTUDIANTES_CARRERAS and returns the data saved in the database.
     * @param {ESTUDIANTES_CARRERASCreateManyAndReturnArgs} args - Arguments to create many ESTUDIANTES_CARRERAS.
     * @example
     * // Create many ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ESTUDIANTES_CARRERAS and only return the `id_ec`
     * const eSTUDIANTES_CARRERASWithId_ecOnly = await prisma.eSTUDIANTES_CARRERAS.createManyAndReturn({
     *   select: { id_ec: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ESTUDIANTES_CARRERASCreateManyAndReturnArgs>(args?: SelectSubset<T, ESTUDIANTES_CARRERASCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ESTUDIANTES_CARRERAS.
     * @param {ESTUDIANTES_CARRERASDeleteArgs} args - Arguments to delete one ESTUDIANTES_CARRERAS.
     * @example
     * // Delete one ESTUDIANTES_CARRERAS
     * const ESTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.delete({
     *   where: {
     *     // ... filter to delete one ESTUDIANTES_CARRERAS
     *   }
     * })
     * 
     */
    delete<T extends ESTUDIANTES_CARRERASDeleteArgs>(args: SelectSubset<T, ESTUDIANTES_CARRERASDeleteArgs<ExtArgs>>): Prisma__ESTUDIANTES_CARRERASClient<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ESTUDIANTES_CARRERAS.
     * @param {ESTUDIANTES_CARRERASUpdateArgs} args - Arguments to update one ESTUDIANTES_CARRERAS.
     * @example
     * // Update one ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ESTUDIANTES_CARRERASUpdateArgs>(args: SelectSubset<T, ESTUDIANTES_CARRERASUpdateArgs<ExtArgs>>): Prisma__ESTUDIANTES_CARRERASClient<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ESTUDIANTES_CARRERAS.
     * @param {ESTUDIANTES_CARRERASDeleteManyArgs} args - Arguments to filter ESTUDIANTES_CARRERAS to delete.
     * @example
     * // Delete a few ESTUDIANTES_CARRERAS
     * const { count } = await prisma.eSTUDIANTES_CARRERAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ESTUDIANTES_CARRERASDeleteManyArgs>(args?: SelectSubset<T, ESTUDIANTES_CARRERASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ESTUDIANTES_CARRERAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTES_CARRERASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ESTUDIANTES_CARRERASUpdateManyArgs>(args: SelectSubset<T, ESTUDIANTES_CARRERASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ESTUDIANTES_CARRERAS and returns the data updated in the database.
     * @param {ESTUDIANTES_CARRERASUpdateManyAndReturnArgs} args - Arguments to update many ESTUDIANTES_CARRERAS.
     * @example
     * // Update many ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ESTUDIANTES_CARRERAS and only return the `id_ec`
     * const eSTUDIANTES_CARRERASWithId_ecOnly = await prisma.eSTUDIANTES_CARRERAS.updateManyAndReturn({
     *   select: { id_ec: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ESTUDIANTES_CARRERASUpdateManyAndReturnArgs>(args: SelectSubset<T, ESTUDIANTES_CARRERASUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ESTUDIANTES_CARRERAS.
     * @param {ESTUDIANTES_CARRERASUpsertArgs} args - Arguments to update or create a ESTUDIANTES_CARRERAS.
     * @example
     * // Update or create a ESTUDIANTES_CARRERAS
     * const eSTUDIANTES_CARRERAS = await prisma.eSTUDIANTES_CARRERAS.upsert({
     *   create: {
     *     // ... data to create a ESTUDIANTES_CARRERAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ESTUDIANTES_CARRERAS we want to update
     *   }
     * })
     */
    upsert<T extends ESTUDIANTES_CARRERASUpsertArgs>(args: SelectSubset<T, ESTUDIANTES_CARRERASUpsertArgs<ExtArgs>>): Prisma__ESTUDIANTES_CARRERASClient<$Result.GetResult<Prisma.$ESTUDIANTES_CARRERASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ESTUDIANTES_CARRERAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTES_CARRERASCountArgs} args - Arguments to filter ESTUDIANTES_CARRERAS to count.
     * @example
     * // Count the number of ESTUDIANTES_CARRERAS
     * const count = await prisma.eSTUDIANTES_CARRERAS.count({
     *   where: {
     *     // ... the filter for the ESTUDIANTES_CARRERAS we want to count
     *   }
     * })
    **/
    count<T extends ESTUDIANTES_CARRERASCountArgs>(
      args?: Subset<T, ESTUDIANTES_CARRERASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ESTUDIANTES_CARRERASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ESTUDIANTES_CARRERAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTES_CARRERASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ESTUDIANTES_CARRERASAggregateArgs>(args: Subset<T, ESTUDIANTES_CARRERASAggregateArgs>): Prisma.PrismaPromise<GetESTUDIANTES_CARRERASAggregateType<T>>

    /**
     * Group by ESTUDIANTES_CARRERAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ESTUDIANTES_CARRERASGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ESTUDIANTES_CARRERASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ESTUDIANTES_CARRERASGroupByArgs['orderBy'] }
        : { orderBy?: ESTUDIANTES_CARRERASGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ESTUDIANTES_CARRERASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetESTUDIANTES_CARRERASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ESTUDIANTES_CARRERAS model
   */
  readonly fields: ESTUDIANTES_CARRERASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ESTUDIANTES_CARRERAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ESTUDIANTES_CARRERASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends ESTUDIANTESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ESTUDIANTESDefaultArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carrera<T extends CARRERASDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CARRERASDefaultArgs<ExtArgs>>): Prisma__CARRERASClient<$Result.GetResult<Prisma.$CARRERASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ESTUDIANTES_CARRERAS model
   */
  interface ESTUDIANTES_CARRERASFieldRefs {
    readonly id_ec: FieldRef<"ESTUDIANTES_CARRERAS", 'Int'>
    readonly id_estudiante: FieldRef<"ESTUDIANTES_CARRERAS", 'Int'>
    readonly id_carrera: FieldRef<"ESTUDIANTES_CARRERAS", 'Int'>
    readonly fecha_alta: FieldRef<"ESTUDIANTES_CARRERAS", 'DateTime'>
    readonly fecha_baja: FieldRef<"ESTUDIANTES_CARRERAS", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ESTUDIANTES_CARRERAS findUnique
   */
  export type ESTUDIANTES_CARRERASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES_CARRERAS to fetch.
     */
    where: ESTUDIANTES_CARRERASWhereUniqueInput
  }

  /**
   * ESTUDIANTES_CARRERAS findUniqueOrThrow
   */
  export type ESTUDIANTES_CARRERASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES_CARRERAS to fetch.
     */
    where: ESTUDIANTES_CARRERASWhereUniqueInput
  }

  /**
   * ESTUDIANTES_CARRERAS findFirst
   */
  export type ESTUDIANTES_CARRERASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES_CARRERAS to fetch.
     */
    where?: ESTUDIANTES_CARRERASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESTUDIANTES_CARRERAS to fetch.
     */
    orderBy?: ESTUDIANTES_CARRERASOrderByWithRelationInput | ESTUDIANTES_CARRERASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ESTUDIANTES_CARRERAS.
     */
    cursor?: ESTUDIANTES_CARRERASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESTUDIANTES_CARRERAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESTUDIANTES_CARRERAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESTUDIANTES_CARRERAS.
     */
    distinct?: ESTUDIANTES_CARRERASScalarFieldEnum | ESTUDIANTES_CARRERASScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES_CARRERAS findFirstOrThrow
   */
  export type ESTUDIANTES_CARRERASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES_CARRERAS to fetch.
     */
    where?: ESTUDIANTES_CARRERASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESTUDIANTES_CARRERAS to fetch.
     */
    orderBy?: ESTUDIANTES_CARRERASOrderByWithRelationInput | ESTUDIANTES_CARRERASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ESTUDIANTES_CARRERAS.
     */
    cursor?: ESTUDIANTES_CARRERASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESTUDIANTES_CARRERAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESTUDIANTES_CARRERAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ESTUDIANTES_CARRERAS.
     */
    distinct?: ESTUDIANTES_CARRERASScalarFieldEnum | ESTUDIANTES_CARRERASScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES_CARRERAS findMany
   */
  export type ESTUDIANTES_CARRERASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * Filter, which ESTUDIANTES_CARRERAS to fetch.
     */
    where?: ESTUDIANTES_CARRERASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ESTUDIANTES_CARRERAS to fetch.
     */
    orderBy?: ESTUDIANTES_CARRERASOrderByWithRelationInput | ESTUDIANTES_CARRERASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ESTUDIANTES_CARRERAS.
     */
    cursor?: ESTUDIANTES_CARRERASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ESTUDIANTES_CARRERAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ESTUDIANTES_CARRERAS.
     */
    skip?: number
    distinct?: ESTUDIANTES_CARRERASScalarFieldEnum | ESTUDIANTES_CARRERASScalarFieldEnum[]
  }

  /**
   * ESTUDIANTES_CARRERAS create
   */
  export type ESTUDIANTES_CARRERASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * The data needed to create a ESTUDIANTES_CARRERAS.
     */
    data: XOR<ESTUDIANTES_CARRERASCreateInput, ESTUDIANTES_CARRERASUncheckedCreateInput>
  }

  /**
   * ESTUDIANTES_CARRERAS createMany
   */
  export type ESTUDIANTES_CARRERASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ESTUDIANTES_CARRERAS.
     */
    data: ESTUDIANTES_CARRERASCreateManyInput | ESTUDIANTES_CARRERASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ESTUDIANTES_CARRERAS createManyAndReturn
   */
  export type ESTUDIANTES_CARRERASCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * The data used to create many ESTUDIANTES_CARRERAS.
     */
    data: ESTUDIANTES_CARRERASCreateManyInput | ESTUDIANTES_CARRERASCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ESTUDIANTES_CARRERAS update
   */
  export type ESTUDIANTES_CARRERASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * The data needed to update a ESTUDIANTES_CARRERAS.
     */
    data: XOR<ESTUDIANTES_CARRERASUpdateInput, ESTUDIANTES_CARRERASUncheckedUpdateInput>
    /**
     * Choose, which ESTUDIANTES_CARRERAS to update.
     */
    where: ESTUDIANTES_CARRERASWhereUniqueInput
  }

  /**
   * ESTUDIANTES_CARRERAS updateMany
   */
  export type ESTUDIANTES_CARRERASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ESTUDIANTES_CARRERAS.
     */
    data: XOR<ESTUDIANTES_CARRERASUpdateManyMutationInput, ESTUDIANTES_CARRERASUncheckedUpdateManyInput>
    /**
     * Filter which ESTUDIANTES_CARRERAS to update
     */
    where?: ESTUDIANTES_CARRERASWhereInput
    /**
     * Limit how many ESTUDIANTES_CARRERAS to update.
     */
    limit?: number
  }

  /**
   * ESTUDIANTES_CARRERAS updateManyAndReturn
   */
  export type ESTUDIANTES_CARRERASUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * The data used to update ESTUDIANTES_CARRERAS.
     */
    data: XOR<ESTUDIANTES_CARRERASUpdateManyMutationInput, ESTUDIANTES_CARRERASUncheckedUpdateManyInput>
    /**
     * Filter which ESTUDIANTES_CARRERAS to update
     */
    where?: ESTUDIANTES_CARRERASWhereInput
    /**
     * Limit how many ESTUDIANTES_CARRERAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ESTUDIANTES_CARRERAS upsert
   */
  export type ESTUDIANTES_CARRERASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * The filter to search for the ESTUDIANTES_CARRERAS to update in case it exists.
     */
    where: ESTUDIANTES_CARRERASWhereUniqueInput
    /**
     * In case the ESTUDIANTES_CARRERAS found by the `where` argument doesn't exist, create a new ESTUDIANTES_CARRERAS with this data.
     */
    create: XOR<ESTUDIANTES_CARRERASCreateInput, ESTUDIANTES_CARRERASUncheckedCreateInput>
    /**
     * In case the ESTUDIANTES_CARRERAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ESTUDIANTES_CARRERASUpdateInput, ESTUDIANTES_CARRERASUncheckedUpdateInput>
  }

  /**
   * ESTUDIANTES_CARRERAS delete
   */
  export type ESTUDIANTES_CARRERASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
    /**
     * Filter which ESTUDIANTES_CARRERAS to delete.
     */
    where: ESTUDIANTES_CARRERASWhereUniqueInput
  }

  /**
   * ESTUDIANTES_CARRERAS deleteMany
   */
  export type ESTUDIANTES_CARRERASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ESTUDIANTES_CARRERAS to delete
     */
    where?: ESTUDIANTES_CARRERASWhereInput
    /**
     * Limit how many ESTUDIANTES_CARRERAS to delete.
     */
    limit?: number
  }

  /**
   * ESTUDIANTES_CARRERAS without action
   */
  export type ESTUDIANTES_CARRERASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ESTUDIANTES_CARRERAS
     */
    select?: ESTUDIANTES_CARRERASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ESTUDIANTES_CARRERAS
     */
    omit?: ESTUDIANTES_CARRERASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ESTUDIANTES_CARRERASInclude<ExtArgs> | null
  }


  /**
   * Model CURSADAS
   */

  export type AggregateCURSADAS = {
    _count: CURSADASCountAggregateOutputType | null
    _avg: CURSADASAvgAggregateOutputType | null
    _sum: CURSADASSumAggregateOutputType | null
    _min: CURSADASMinAggregateOutputType | null
    _max: CURSADASMaxAggregateOutputType | null
  }

  export type CURSADASAvgAggregateOutputType = {
    id_cursada: number | null
    id_estudiante: number | null
    id_materia: number | null
    nota_final: Decimal | null
  }

  export type CURSADASSumAggregateOutputType = {
    id_cursada: number | null
    id_estudiante: number | null
    id_materia: number | null
    nota_final: Decimal | null
  }

  export type CURSADASMinAggregateOutputType = {
    id_cursada: number | null
    id_estudiante: number | null
    id_materia: number | null
    nota_final: Decimal | null
  }

  export type CURSADASMaxAggregateOutputType = {
    id_cursada: number | null
    id_estudiante: number | null
    id_materia: number | null
    nota_final: Decimal | null
  }

  export type CURSADASCountAggregateOutputType = {
    id_cursada: number
    id_estudiante: number
    id_materia: number
    nota_final: number
    _all: number
  }


  export type CURSADASAvgAggregateInputType = {
    id_cursada?: true
    id_estudiante?: true
    id_materia?: true
    nota_final?: true
  }

  export type CURSADASSumAggregateInputType = {
    id_cursada?: true
    id_estudiante?: true
    id_materia?: true
    nota_final?: true
  }

  export type CURSADASMinAggregateInputType = {
    id_cursada?: true
    id_estudiante?: true
    id_materia?: true
    nota_final?: true
  }

  export type CURSADASMaxAggregateInputType = {
    id_cursada?: true
    id_estudiante?: true
    id_materia?: true
    nota_final?: true
  }

  export type CURSADASCountAggregateInputType = {
    id_cursada?: true
    id_estudiante?: true
    id_materia?: true
    nota_final?: true
    _all?: true
  }

  export type CURSADASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CURSADAS to aggregate.
     */
    where?: CURSADASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CURSADAS to fetch.
     */
    orderBy?: CURSADASOrderByWithRelationInput | CURSADASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CURSADASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CURSADAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CURSADAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CURSADAS
    **/
    _count?: true | CURSADASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CURSADASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CURSADASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CURSADASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CURSADASMaxAggregateInputType
  }

  export type GetCURSADASAggregateType<T extends CURSADASAggregateArgs> = {
        [P in keyof T & keyof AggregateCURSADAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCURSADAS[P]>
      : GetScalarType<T[P], AggregateCURSADAS[P]>
  }




  export type CURSADASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CURSADASWhereInput
    orderBy?: CURSADASOrderByWithAggregationInput | CURSADASOrderByWithAggregationInput[]
    by: CURSADASScalarFieldEnum[] | CURSADASScalarFieldEnum
    having?: CURSADASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CURSADASCountAggregateInputType | true
    _avg?: CURSADASAvgAggregateInputType
    _sum?: CURSADASSumAggregateInputType
    _min?: CURSADASMinAggregateInputType
    _max?: CURSADASMaxAggregateInputType
  }

  export type CURSADASGroupByOutputType = {
    id_cursada: number
    id_estudiante: number
    id_materia: number
    nota_final: Decimal | null
    _count: CURSADASCountAggregateOutputType | null
    _avg: CURSADASAvgAggregateOutputType | null
    _sum: CURSADASSumAggregateOutputType | null
    _min: CURSADASMinAggregateOutputType | null
    _max: CURSADASMaxAggregateOutputType | null
  }

  type GetCURSADASGroupByPayload<T extends CURSADASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CURSADASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CURSADASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CURSADASGroupByOutputType[P]>
            : GetScalarType<T[P], CURSADASGroupByOutputType[P]>
        }
      >
    >


  export type CURSADASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cursada?: boolean
    id_estudiante?: boolean
    id_materia?: boolean
    nota_final?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cURSADAS"]>

  export type CURSADASSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cursada?: boolean
    id_estudiante?: boolean
    id_materia?: boolean
    nota_final?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cURSADAS"]>

  export type CURSADASSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cursada?: boolean
    id_estudiante?: boolean
    id_materia?: boolean
    nota_final?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cURSADAS"]>

  export type CURSADASSelectScalar = {
    id_cursada?: boolean
    id_estudiante?: boolean
    id_materia?: boolean
    nota_final?: boolean
  }

  export type CURSADASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cursada" | "id_estudiante" | "id_materia" | "nota_final", ExtArgs["result"]["cURSADAS"]>
  export type CURSADASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
  }
  export type CURSADASIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
  }
  export type CURSADASIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
  }

  export type $CURSADASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CURSADAS"
    objects: {
      estudiante: Prisma.$ESTUDIANTESPayload<ExtArgs>
      materia: Prisma.$MATERIASPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cursada: number
      id_estudiante: number
      id_materia: number
      nota_final: Prisma.Decimal | null
    }, ExtArgs["result"]["cURSADAS"]>
    composites: {}
  }

  type CURSADASGetPayload<S extends boolean | null | undefined | CURSADASDefaultArgs> = $Result.GetResult<Prisma.$CURSADASPayload, S>

  type CURSADASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CURSADASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CURSADASCountAggregateInputType | true
    }

  export interface CURSADASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CURSADAS'], meta: { name: 'CURSADAS' } }
    /**
     * Find zero or one CURSADAS that matches the filter.
     * @param {CURSADASFindUniqueArgs} args - Arguments to find a CURSADAS
     * @example
     * // Get one CURSADAS
     * const cURSADAS = await prisma.cURSADAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CURSADASFindUniqueArgs>(args: SelectSubset<T, CURSADASFindUniqueArgs<ExtArgs>>): Prisma__CURSADASClient<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CURSADAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CURSADASFindUniqueOrThrowArgs} args - Arguments to find a CURSADAS
     * @example
     * // Get one CURSADAS
     * const cURSADAS = await prisma.cURSADAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CURSADASFindUniqueOrThrowArgs>(args: SelectSubset<T, CURSADASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CURSADASClient<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CURSADAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CURSADASFindFirstArgs} args - Arguments to find a CURSADAS
     * @example
     * // Get one CURSADAS
     * const cURSADAS = await prisma.cURSADAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CURSADASFindFirstArgs>(args?: SelectSubset<T, CURSADASFindFirstArgs<ExtArgs>>): Prisma__CURSADASClient<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CURSADAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CURSADASFindFirstOrThrowArgs} args - Arguments to find a CURSADAS
     * @example
     * // Get one CURSADAS
     * const cURSADAS = await prisma.cURSADAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CURSADASFindFirstOrThrowArgs>(args?: SelectSubset<T, CURSADASFindFirstOrThrowArgs<ExtArgs>>): Prisma__CURSADASClient<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CURSADAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CURSADASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CURSADAS
     * const cURSADAS = await prisma.cURSADAS.findMany()
     * 
     * // Get first 10 CURSADAS
     * const cURSADAS = await prisma.cURSADAS.findMany({ take: 10 })
     * 
     * // Only select the `id_cursada`
     * const cURSADASWithId_cursadaOnly = await prisma.cURSADAS.findMany({ select: { id_cursada: true } })
     * 
     */
    findMany<T extends CURSADASFindManyArgs>(args?: SelectSubset<T, CURSADASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CURSADAS.
     * @param {CURSADASCreateArgs} args - Arguments to create a CURSADAS.
     * @example
     * // Create one CURSADAS
     * const CURSADAS = await prisma.cURSADAS.create({
     *   data: {
     *     // ... data to create a CURSADAS
     *   }
     * })
     * 
     */
    create<T extends CURSADASCreateArgs>(args: SelectSubset<T, CURSADASCreateArgs<ExtArgs>>): Prisma__CURSADASClient<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CURSADAS.
     * @param {CURSADASCreateManyArgs} args - Arguments to create many CURSADAS.
     * @example
     * // Create many CURSADAS
     * const cURSADAS = await prisma.cURSADAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CURSADASCreateManyArgs>(args?: SelectSubset<T, CURSADASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CURSADAS and returns the data saved in the database.
     * @param {CURSADASCreateManyAndReturnArgs} args - Arguments to create many CURSADAS.
     * @example
     * // Create many CURSADAS
     * const cURSADAS = await prisma.cURSADAS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CURSADAS and only return the `id_cursada`
     * const cURSADASWithId_cursadaOnly = await prisma.cURSADAS.createManyAndReturn({
     *   select: { id_cursada: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CURSADASCreateManyAndReturnArgs>(args?: SelectSubset<T, CURSADASCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CURSADAS.
     * @param {CURSADASDeleteArgs} args - Arguments to delete one CURSADAS.
     * @example
     * // Delete one CURSADAS
     * const CURSADAS = await prisma.cURSADAS.delete({
     *   where: {
     *     // ... filter to delete one CURSADAS
     *   }
     * })
     * 
     */
    delete<T extends CURSADASDeleteArgs>(args: SelectSubset<T, CURSADASDeleteArgs<ExtArgs>>): Prisma__CURSADASClient<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CURSADAS.
     * @param {CURSADASUpdateArgs} args - Arguments to update one CURSADAS.
     * @example
     * // Update one CURSADAS
     * const cURSADAS = await prisma.cURSADAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CURSADASUpdateArgs>(args: SelectSubset<T, CURSADASUpdateArgs<ExtArgs>>): Prisma__CURSADASClient<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CURSADAS.
     * @param {CURSADASDeleteManyArgs} args - Arguments to filter CURSADAS to delete.
     * @example
     * // Delete a few CURSADAS
     * const { count } = await prisma.cURSADAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CURSADASDeleteManyArgs>(args?: SelectSubset<T, CURSADASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CURSADAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CURSADASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CURSADAS
     * const cURSADAS = await prisma.cURSADAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CURSADASUpdateManyArgs>(args: SelectSubset<T, CURSADASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CURSADAS and returns the data updated in the database.
     * @param {CURSADASUpdateManyAndReturnArgs} args - Arguments to update many CURSADAS.
     * @example
     * // Update many CURSADAS
     * const cURSADAS = await prisma.cURSADAS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CURSADAS and only return the `id_cursada`
     * const cURSADASWithId_cursadaOnly = await prisma.cURSADAS.updateManyAndReturn({
     *   select: { id_cursada: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CURSADASUpdateManyAndReturnArgs>(args: SelectSubset<T, CURSADASUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CURSADAS.
     * @param {CURSADASUpsertArgs} args - Arguments to update or create a CURSADAS.
     * @example
     * // Update or create a CURSADAS
     * const cURSADAS = await prisma.cURSADAS.upsert({
     *   create: {
     *     // ... data to create a CURSADAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CURSADAS we want to update
     *   }
     * })
     */
    upsert<T extends CURSADASUpsertArgs>(args: SelectSubset<T, CURSADASUpsertArgs<ExtArgs>>): Prisma__CURSADASClient<$Result.GetResult<Prisma.$CURSADASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CURSADAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CURSADASCountArgs} args - Arguments to filter CURSADAS to count.
     * @example
     * // Count the number of CURSADAS
     * const count = await prisma.cURSADAS.count({
     *   where: {
     *     // ... the filter for the CURSADAS we want to count
     *   }
     * })
    **/
    count<T extends CURSADASCountArgs>(
      args?: Subset<T, CURSADASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CURSADASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CURSADAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CURSADASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CURSADASAggregateArgs>(args: Subset<T, CURSADASAggregateArgs>): Prisma.PrismaPromise<GetCURSADASAggregateType<T>>

    /**
     * Group by CURSADAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CURSADASGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CURSADASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CURSADASGroupByArgs['orderBy'] }
        : { orderBy?: CURSADASGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CURSADASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCURSADASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CURSADAS model
   */
  readonly fields: CURSADASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CURSADAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CURSADASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends ESTUDIANTESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ESTUDIANTESDefaultArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MATERIASDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MATERIASDefaultArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CURSADAS model
   */
  interface CURSADASFieldRefs {
    readonly id_cursada: FieldRef<"CURSADAS", 'Int'>
    readonly id_estudiante: FieldRef<"CURSADAS", 'Int'>
    readonly id_materia: FieldRef<"CURSADAS", 'Int'>
    readonly nota_final: FieldRef<"CURSADAS", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * CURSADAS findUnique
   */
  export type CURSADASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * Filter, which CURSADAS to fetch.
     */
    where: CURSADASWhereUniqueInput
  }

  /**
   * CURSADAS findUniqueOrThrow
   */
  export type CURSADASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * Filter, which CURSADAS to fetch.
     */
    where: CURSADASWhereUniqueInput
  }

  /**
   * CURSADAS findFirst
   */
  export type CURSADASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * Filter, which CURSADAS to fetch.
     */
    where?: CURSADASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CURSADAS to fetch.
     */
    orderBy?: CURSADASOrderByWithRelationInput | CURSADASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CURSADAS.
     */
    cursor?: CURSADASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CURSADAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CURSADAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CURSADAS.
     */
    distinct?: CURSADASScalarFieldEnum | CURSADASScalarFieldEnum[]
  }

  /**
   * CURSADAS findFirstOrThrow
   */
  export type CURSADASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * Filter, which CURSADAS to fetch.
     */
    where?: CURSADASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CURSADAS to fetch.
     */
    orderBy?: CURSADASOrderByWithRelationInput | CURSADASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CURSADAS.
     */
    cursor?: CURSADASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CURSADAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CURSADAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CURSADAS.
     */
    distinct?: CURSADASScalarFieldEnum | CURSADASScalarFieldEnum[]
  }

  /**
   * CURSADAS findMany
   */
  export type CURSADASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * Filter, which CURSADAS to fetch.
     */
    where?: CURSADASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CURSADAS to fetch.
     */
    orderBy?: CURSADASOrderByWithRelationInput | CURSADASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CURSADAS.
     */
    cursor?: CURSADASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CURSADAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CURSADAS.
     */
    skip?: number
    distinct?: CURSADASScalarFieldEnum | CURSADASScalarFieldEnum[]
  }

  /**
   * CURSADAS create
   */
  export type CURSADASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * The data needed to create a CURSADAS.
     */
    data: XOR<CURSADASCreateInput, CURSADASUncheckedCreateInput>
  }

  /**
   * CURSADAS createMany
   */
  export type CURSADASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CURSADAS.
     */
    data: CURSADASCreateManyInput | CURSADASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CURSADAS createManyAndReturn
   */
  export type CURSADASCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * The data used to create many CURSADAS.
     */
    data: CURSADASCreateManyInput | CURSADASCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CURSADAS update
   */
  export type CURSADASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * The data needed to update a CURSADAS.
     */
    data: XOR<CURSADASUpdateInput, CURSADASUncheckedUpdateInput>
    /**
     * Choose, which CURSADAS to update.
     */
    where: CURSADASWhereUniqueInput
  }

  /**
   * CURSADAS updateMany
   */
  export type CURSADASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CURSADAS.
     */
    data: XOR<CURSADASUpdateManyMutationInput, CURSADASUncheckedUpdateManyInput>
    /**
     * Filter which CURSADAS to update
     */
    where?: CURSADASWhereInput
    /**
     * Limit how many CURSADAS to update.
     */
    limit?: number
  }

  /**
   * CURSADAS updateManyAndReturn
   */
  export type CURSADASUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * The data used to update CURSADAS.
     */
    data: XOR<CURSADASUpdateManyMutationInput, CURSADASUncheckedUpdateManyInput>
    /**
     * Filter which CURSADAS to update
     */
    where?: CURSADASWhereInput
    /**
     * Limit how many CURSADAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CURSADAS upsert
   */
  export type CURSADASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * The filter to search for the CURSADAS to update in case it exists.
     */
    where: CURSADASWhereUniqueInput
    /**
     * In case the CURSADAS found by the `where` argument doesn't exist, create a new CURSADAS with this data.
     */
    create: XOR<CURSADASCreateInput, CURSADASUncheckedCreateInput>
    /**
     * In case the CURSADAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CURSADASUpdateInput, CURSADASUncheckedUpdateInput>
  }

  /**
   * CURSADAS delete
   */
  export type CURSADASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
    /**
     * Filter which CURSADAS to delete.
     */
    where: CURSADASWhereUniqueInput
  }

  /**
   * CURSADAS deleteMany
   */
  export type CURSADASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CURSADAS to delete
     */
    where?: CURSADASWhereInput
    /**
     * Limit how many CURSADAS to delete.
     */
    limit?: number
  }

  /**
   * CURSADAS without action
   */
  export type CURSADASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CURSADAS
     */
    select?: CURSADASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CURSADAS
     */
    omit?: CURSADASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CURSADASInclude<ExtArgs> | null
  }


  /**
   * Model CONDICIONES_MATERIAS
   */

  export type AggregateCONDICIONES_MATERIAS = {
    _count: CONDICIONES_MATERIASCountAggregateOutputType | null
    _avg: CONDICIONES_MATERIASAvgAggregateOutputType | null
    _sum: CONDICIONES_MATERIASSumAggregateOutputType | null
    _min: CONDICIONES_MATERIASMinAggregateOutputType | null
    _max: CONDICIONES_MATERIASMaxAggregateOutputType | null
  }

  export type CONDICIONES_MATERIASAvgAggregateOutputType = {
    id_cm: number | null
    id_estudiante: number | null
    id_materia: number | null
    id_condition: number | null
  }

  export type CONDICIONES_MATERIASSumAggregateOutputType = {
    id_cm: number | null
    id_estudiante: number | null
    id_materia: number | null
    id_condition: number | null
  }

  export type CONDICIONES_MATERIASMinAggregateOutputType = {
    id_cm: number | null
    id_estudiante: number | null
    id_materia: number | null
    id_condition: number | null
  }

  export type CONDICIONES_MATERIASMaxAggregateOutputType = {
    id_cm: number | null
    id_estudiante: number | null
    id_materia: number | null
    id_condition: number | null
  }

  export type CONDICIONES_MATERIASCountAggregateOutputType = {
    id_cm: number
    id_estudiante: number
    id_materia: number
    id_condition: number
    _all: number
  }


  export type CONDICIONES_MATERIASAvgAggregateInputType = {
    id_cm?: true
    id_estudiante?: true
    id_materia?: true
    id_condition?: true
  }

  export type CONDICIONES_MATERIASSumAggregateInputType = {
    id_cm?: true
    id_estudiante?: true
    id_materia?: true
    id_condition?: true
  }

  export type CONDICIONES_MATERIASMinAggregateInputType = {
    id_cm?: true
    id_estudiante?: true
    id_materia?: true
    id_condition?: true
  }

  export type CONDICIONES_MATERIASMaxAggregateInputType = {
    id_cm?: true
    id_estudiante?: true
    id_materia?: true
    id_condition?: true
  }

  export type CONDICIONES_MATERIASCountAggregateInputType = {
    id_cm?: true
    id_estudiante?: true
    id_materia?: true
    id_condition?: true
    _all?: true
  }

  export type CONDICIONES_MATERIASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONDICIONES_MATERIAS to aggregate.
     */
    where?: CONDICIONES_MATERIASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONDICIONES_MATERIAS to fetch.
     */
    orderBy?: CONDICIONES_MATERIASOrderByWithRelationInput | CONDICIONES_MATERIASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CONDICIONES_MATERIASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONDICIONES_MATERIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONDICIONES_MATERIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CONDICIONES_MATERIAS
    **/
    _count?: true | CONDICIONES_MATERIASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CONDICIONES_MATERIASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CONDICIONES_MATERIASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CONDICIONES_MATERIASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CONDICIONES_MATERIASMaxAggregateInputType
  }

  export type GetCONDICIONES_MATERIASAggregateType<T extends CONDICIONES_MATERIASAggregateArgs> = {
        [P in keyof T & keyof AggregateCONDICIONES_MATERIAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCONDICIONES_MATERIAS[P]>
      : GetScalarType<T[P], AggregateCONDICIONES_MATERIAS[P]>
  }




  export type CONDICIONES_MATERIASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CONDICIONES_MATERIASWhereInput
    orderBy?: CONDICIONES_MATERIASOrderByWithAggregationInput | CONDICIONES_MATERIASOrderByWithAggregationInput[]
    by: CONDICIONES_MATERIASScalarFieldEnum[] | CONDICIONES_MATERIASScalarFieldEnum
    having?: CONDICIONES_MATERIASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CONDICIONES_MATERIASCountAggregateInputType | true
    _avg?: CONDICIONES_MATERIASAvgAggregateInputType
    _sum?: CONDICIONES_MATERIASSumAggregateInputType
    _min?: CONDICIONES_MATERIASMinAggregateInputType
    _max?: CONDICIONES_MATERIASMaxAggregateInputType
  }

  export type CONDICIONES_MATERIASGroupByOutputType = {
    id_cm: number
    id_estudiante: number
    id_materia: number
    id_condition: number
    _count: CONDICIONES_MATERIASCountAggregateOutputType | null
    _avg: CONDICIONES_MATERIASAvgAggregateOutputType | null
    _sum: CONDICIONES_MATERIASSumAggregateOutputType | null
    _min: CONDICIONES_MATERIASMinAggregateOutputType | null
    _max: CONDICIONES_MATERIASMaxAggregateOutputType | null
  }

  type GetCONDICIONES_MATERIASGroupByPayload<T extends CONDICIONES_MATERIASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CONDICIONES_MATERIASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CONDICIONES_MATERIASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CONDICIONES_MATERIASGroupByOutputType[P]>
            : GetScalarType<T[P], CONDICIONES_MATERIASGroupByOutputType[P]>
        }
      >
    >


  export type CONDICIONES_MATERIASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cm?: boolean
    id_estudiante?: boolean
    id_materia?: boolean
    id_condition?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
    condicion?: boolean | CONDICIONESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cONDICIONES_MATERIAS"]>

  export type CONDICIONES_MATERIASSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cm?: boolean
    id_estudiante?: boolean
    id_materia?: boolean
    id_condition?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
    condicion?: boolean | CONDICIONESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cONDICIONES_MATERIAS"]>

  export type CONDICIONES_MATERIASSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cm?: boolean
    id_estudiante?: boolean
    id_materia?: boolean
    id_condition?: boolean
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
    condicion?: boolean | CONDICIONESDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cONDICIONES_MATERIAS"]>

  export type CONDICIONES_MATERIASSelectScalar = {
    id_cm?: boolean
    id_estudiante?: boolean
    id_materia?: boolean
    id_condition?: boolean
  }

  export type CONDICIONES_MATERIASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cm" | "id_estudiante" | "id_materia" | "id_condition", ExtArgs["result"]["cONDICIONES_MATERIAS"]>
  export type CONDICIONES_MATERIASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
    condicion?: boolean | CONDICIONESDefaultArgs<ExtArgs>
  }
  export type CONDICIONES_MATERIASIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
    condicion?: boolean | CONDICIONESDefaultArgs<ExtArgs>
  }
  export type CONDICIONES_MATERIASIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante?: boolean | ESTUDIANTESDefaultArgs<ExtArgs>
    materia?: boolean | MATERIASDefaultArgs<ExtArgs>
    condicion?: boolean | CONDICIONESDefaultArgs<ExtArgs>
  }

  export type $CONDICIONES_MATERIASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CONDICIONES_MATERIAS"
    objects: {
      estudiante: Prisma.$ESTUDIANTESPayload<ExtArgs>
      materia: Prisma.$MATERIASPayload<ExtArgs>
      condicion: Prisma.$CONDICIONESPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cm: number
      id_estudiante: number
      id_materia: number
      id_condition: number
    }, ExtArgs["result"]["cONDICIONES_MATERIAS"]>
    composites: {}
  }

  type CONDICIONES_MATERIASGetPayload<S extends boolean | null | undefined | CONDICIONES_MATERIASDefaultArgs> = $Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload, S>

  type CONDICIONES_MATERIASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CONDICIONES_MATERIASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CONDICIONES_MATERIASCountAggregateInputType | true
    }

  export interface CONDICIONES_MATERIASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CONDICIONES_MATERIAS'], meta: { name: 'CONDICIONES_MATERIAS' } }
    /**
     * Find zero or one CONDICIONES_MATERIAS that matches the filter.
     * @param {CONDICIONES_MATERIASFindUniqueArgs} args - Arguments to find a CONDICIONES_MATERIAS
     * @example
     * // Get one CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CONDICIONES_MATERIASFindUniqueArgs>(args: SelectSubset<T, CONDICIONES_MATERIASFindUniqueArgs<ExtArgs>>): Prisma__CONDICIONES_MATERIASClient<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CONDICIONES_MATERIAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CONDICIONES_MATERIASFindUniqueOrThrowArgs} args - Arguments to find a CONDICIONES_MATERIAS
     * @example
     * // Get one CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CONDICIONES_MATERIASFindUniqueOrThrowArgs>(args: SelectSubset<T, CONDICIONES_MATERIASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CONDICIONES_MATERIASClient<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CONDICIONES_MATERIAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONES_MATERIASFindFirstArgs} args - Arguments to find a CONDICIONES_MATERIAS
     * @example
     * // Get one CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CONDICIONES_MATERIASFindFirstArgs>(args?: SelectSubset<T, CONDICIONES_MATERIASFindFirstArgs<ExtArgs>>): Prisma__CONDICIONES_MATERIASClient<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CONDICIONES_MATERIAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONES_MATERIASFindFirstOrThrowArgs} args - Arguments to find a CONDICIONES_MATERIAS
     * @example
     * // Get one CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CONDICIONES_MATERIASFindFirstOrThrowArgs>(args?: SelectSubset<T, CONDICIONES_MATERIASFindFirstOrThrowArgs<ExtArgs>>): Prisma__CONDICIONES_MATERIASClient<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CONDICIONES_MATERIAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONES_MATERIASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.findMany()
     * 
     * // Get first 10 CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.findMany({ take: 10 })
     * 
     * // Only select the `id_cm`
     * const cONDICIONES_MATERIASWithId_cmOnly = await prisma.cONDICIONES_MATERIAS.findMany({ select: { id_cm: true } })
     * 
     */
    findMany<T extends CONDICIONES_MATERIASFindManyArgs>(args?: SelectSubset<T, CONDICIONES_MATERIASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CONDICIONES_MATERIAS.
     * @param {CONDICIONES_MATERIASCreateArgs} args - Arguments to create a CONDICIONES_MATERIAS.
     * @example
     * // Create one CONDICIONES_MATERIAS
     * const CONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.create({
     *   data: {
     *     // ... data to create a CONDICIONES_MATERIAS
     *   }
     * })
     * 
     */
    create<T extends CONDICIONES_MATERIASCreateArgs>(args: SelectSubset<T, CONDICIONES_MATERIASCreateArgs<ExtArgs>>): Prisma__CONDICIONES_MATERIASClient<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CONDICIONES_MATERIAS.
     * @param {CONDICIONES_MATERIASCreateManyArgs} args - Arguments to create many CONDICIONES_MATERIAS.
     * @example
     * // Create many CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CONDICIONES_MATERIASCreateManyArgs>(args?: SelectSubset<T, CONDICIONES_MATERIASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CONDICIONES_MATERIAS and returns the data saved in the database.
     * @param {CONDICIONES_MATERIASCreateManyAndReturnArgs} args - Arguments to create many CONDICIONES_MATERIAS.
     * @example
     * // Create many CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CONDICIONES_MATERIAS and only return the `id_cm`
     * const cONDICIONES_MATERIASWithId_cmOnly = await prisma.cONDICIONES_MATERIAS.createManyAndReturn({
     *   select: { id_cm: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CONDICIONES_MATERIASCreateManyAndReturnArgs>(args?: SelectSubset<T, CONDICIONES_MATERIASCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CONDICIONES_MATERIAS.
     * @param {CONDICIONES_MATERIASDeleteArgs} args - Arguments to delete one CONDICIONES_MATERIAS.
     * @example
     * // Delete one CONDICIONES_MATERIAS
     * const CONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.delete({
     *   where: {
     *     // ... filter to delete one CONDICIONES_MATERIAS
     *   }
     * })
     * 
     */
    delete<T extends CONDICIONES_MATERIASDeleteArgs>(args: SelectSubset<T, CONDICIONES_MATERIASDeleteArgs<ExtArgs>>): Prisma__CONDICIONES_MATERIASClient<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CONDICIONES_MATERIAS.
     * @param {CONDICIONES_MATERIASUpdateArgs} args - Arguments to update one CONDICIONES_MATERIAS.
     * @example
     * // Update one CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CONDICIONES_MATERIASUpdateArgs>(args: SelectSubset<T, CONDICIONES_MATERIASUpdateArgs<ExtArgs>>): Prisma__CONDICIONES_MATERIASClient<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CONDICIONES_MATERIAS.
     * @param {CONDICIONES_MATERIASDeleteManyArgs} args - Arguments to filter CONDICIONES_MATERIAS to delete.
     * @example
     * // Delete a few CONDICIONES_MATERIAS
     * const { count } = await prisma.cONDICIONES_MATERIAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CONDICIONES_MATERIASDeleteManyArgs>(args?: SelectSubset<T, CONDICIONES_MATERIASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CONDICIONES_MATERIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONES_MATERIASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CONDICIONES_MATERIASUpdateManyArgs>(args: SelectSubset<T, CONDICIONES_MATERIASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CONDICIONES_MATERIAS and returns the data updated in the database.
     * @param {CONDICIONES_MATERIASUpdateManyAndReturnArgs} args - Arguments to update many CONDICIONES_MATERIAS.
     * @example
     * // Update many CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CONDICIONES_MATERIAS and only return the `id_cm`
     * const cONDICIONES_MATERIASWithId_cmOnly = await prisma.cONDICIONES_MATERIAS.updateManyAndReturn({
     *   select: { id_cm: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CONDICIONES_MATERIASUpdateManyAndReturnArgs>(args: SelectSubset<T, CONDICIONES_MATERIASUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CONDICIONES_MATERIAS.
     * @param {CONDICIONES_MATERIASUpsertArgs} args - Arguments to update or create a CONDICIONES_MATERIAS.
     * @example
     * // Update or create a CONDICIONES_MATERIAS
     * const cONDICIONES_MATERIAS = await prisma.cONDICIONES_MATERIAS.upsert({
     *   create: {
     *     // ... data to create a CONDICIONES_MATERIAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CONDICIONES_MATERIAS we want to update
     *   }
     * })
     */
    upsert<T extends CONDICIONES_MATERIASUpsertArgs>(args: SelectSubset<T, CONDICIONES_MATERIASUpsertArgs<ExtArgs>>): Prisma__CONDICIONES_MATERIASClient<$Result.GetResult<Prisma.$CONDICIONES_MATERIASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CONDICIONES_MATERIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONES_MATERIASCountArgs} args - Arguments to filter CONDICIONES_MATERIAS to count.
     * @example
     * // Count the number of CONDICIONES_MATERIAS
     * const count = await prisma.cONDICIONES_MATERIAS.count({
     *   where: {
     *     // ... the filter for the CONDICIONES_MATERIAS we want to count
     *   }
     * })
    **/
    count<T extends CONDICIONES_MATERIASCountArgs>(
      args?: Subset<T, CONDICIONES_MATERIASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CONDICIONES_MATERIASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CONDICIONES_MATERIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONES_MATERIASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CONDICIONES_MATERIASAggregateArgs>(args: Subset<T, CONDICIONES_MATERIASAggregateArgs>): Prisma.PrismaPromise<GetCONDICIONES_MATERIASAggregateType<T>>

    /**
     * Group by CONDICIONES_MATERIAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONDICIONES_MATERIASGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CONDICIONES_MATERIASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CONDICIONES_MATERIASGroupByArgs['orderBy'] }
        : { orderBy?: CONDICIONES_MATERIASGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CONDICIONES_MATERIASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCONDICIONES_MATERIASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CONDICIONES_MATERIAS model
   */
  readonly fields: CONDICIONES_MATERIASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CONDICIONES_MATERIAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CONDICIONES_MATERIASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante<T extends ESTUDIANTESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ESTUDIANTESDefaultArgs<ExtArgs>>): Prisma__ESTUDIANTESClient<$Result.GetResult<Prisma.$ESTUDIANTESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    materia<T extends MATERIASDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MATERIASDefaultArgs<ExtArgs>>): Prisma__MATERIASClient<$Result.GetResult<Prisma.$MATERIASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    condicion<T extends CONDICIONESDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CONDICIONESDefaultArgs<ExtArgs>>): Prisma__CONDICIONESClient<$Result.GetResult<Prisma.$CONDICIONESPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CONDICIONES_MATERIAS model
   */
  interface CONDICIONES_MATERIASFieldRefs {
    readonly id_cm: FieldRef<"CONDICIONES_MATERIAS", 'Int'>
    readonly id_estudiante: FieldRef<"CONDICIONES_MATERIAS", 'Int'>
    readonly id_materia: FieldRef<"CONDICIONES_MATERIAS", 'Int'>
    readonly id_condition: FieldRef<"CONDICIONES_MATERIAS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CONDICIONES_MATERIAS findUnique
   */
  export type CONDICIONES_MATERIASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES_MATERIAS to fetch.
     */
    where: CONDICIONES_MATERIASWhereUniqueInput
  }

  /**
   * CONDICIONES_MATERIAS findUniqueOrThrow
   */
  export type CONDICIONES_MATERIASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES_MATERIAS to fetch.
     */
    where: CONDICIONES_MATERIASWhereUniqueInput
  }

  /**
   * CONDICIONES_MATERIAS findFirst
   */
  export type CONDICIONES_MATERIASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES_MATERIAS to fetch.
     */
    where?: CONDICIONES_MATERIASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONDICIONES_MATERIAS to fetch.
     */
    orderBy?: CONDICIONES_MATERIASOrderByWithRelationInput | CONDICIONES_MATERIASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONDICIONES_MATERIAS.
     */
    cursor?: CONDICIONES_MATERIASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONDICIONES_MATERIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONDICIONES_MATERIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONDICIONES_MATERIAS.
     */
    distinct?: CONDICIONES_MATERIASScalarFieldEnum | CONDICIONES_MATERIASScalarFieldEnum[]
  }

  /**
   * CONDICIONES_MATERIAS findFirstOrThrow
   */
  export type CONDICIONES_MATERIASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES_MATERIAS to fetch.
     */
    where?: CONDICIONES_MATERIASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONDICIONES_MATERIAS to fetch.
     */
    orderBy?: CONDICIONES_MATERIASOrderByWithRelationInput | CONDICIONES_MATERIASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONDICIONES_MATERIAS.
     */
    cursor?: CONDICIONES_MATERIASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONDICIONES_MATERIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONDICIONES_MATERIAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONDICIONES_MATERIAS.
     */
    distinct?: CONDICIONES_MATERIASScalarFieldEnum | CONDICIONES_MATERIASScalarFieldEnum[]
  }

  /**
   * CONDICIONES_MATERIAS findMany
   */
  export type CONDICIONES_MATERIASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * Filter, which CONDICIONES_MATERIAS to fetch.
     */
    where?: CONDICIONES_MATERIASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONDICIONES_MATERIAS to fetch.
     */
    orderBy?: CONDICIONES_MATERIASOrderByWithRelationInput | CONDICIONES_MATERIASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CONDICIONES_MATERIAS.
     */
    cursor?: CONDICIONES_MATERIASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONDICIONES_MATERIAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONDICIONES_MATERIAS.
     */
    skip?: number
    distinct?: CONDICIONES_MATERIASScalarFieldEnum | CONDICIONES_MATERIASScalarFieldEnum[]
  }

  /**
   * CONDICIONES_MATERIAS create
   */
  export type CONDICIONES_MATERIASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * The data needed to create a CONDICIONES_MATERIAS.
     */
    data: XOR<CONDICIONES_MATERIASCreateInput, CONDICIONES_MATERIASUncheckedCreateInput>
  }

  /**
   * CONDICIONES_MATERIAS createMany
   */
  export type CONDICIONES_MATERIASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CONDICIONES_MATERIAS.
     */
    data: CONDICIONES_MATERIASCreateManyInput | CONDICIONES_MATERIASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CONDICIONES_MATERIAS createManyAndReturn
   */
  export type CONDICIONES_MATERIASCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * The data used to create many CONDICIONES_MATERIAS.
     */
    data: CONDICIONES_MATERIASCreateManyInput | CONDICIONES_MATERIASCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CONDICIONES_MATERIAS update
   */
  export type CONDICIONES_MATERIASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * The data needed to update a CONDICIONES_MATERIAS.
     */
    data: XOR<CONDICIONES_MATERIASUpdateInput, CONDICIONES_MATERIASUncheckedUpdateInput>
    /**
     * Choose, which CONDICIONES_MATERIAS to update.
     */
    where: CONDICIONES_MATERIASWhereUniqueInput
  }

  /**
   * CONDICIONES_MATERIAS updateMany
   */
  export type CONDICIONES_MATERIASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CONDICIONES_MATERIAS.
     */
    data: XOR<CONDICIONES_MATERIASUpdateManyMutationInput, CONDICIONES_MATERIASUncheckedUpdateManyInput>
    /**
     * Filter which CONDICIONES_MATERIAS to update
     */
    where?: CONDICIONES_MATERIASWhereInput
    /**
     * Limit how many CONDICIONES_MATERIAS to update.
     */
    limit?: number
  }

  /**
   * CONDICIONES_MATERIAS updateManyAndReturn
   */
  export type CONDICIONES_MATERIASUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * The data used to update CONDICIONES_MATERIAS.
     */
    data: XOR<CONDICIONES_MATERIASUpdateManyMutationInput, CONDICIONES_MATERIASUncheckedUpdateManyInput>
    /**
     * Filter which CONDICIONES_MATERIAS to update
     */
    where?: CONDICIONES_MATERIASWhereInput
    /**
     * Limit how many CONDICIONES_MATERIAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CONDICIONES_MATERIAS upsert
   */
  export type CONDICIONES_MATERIASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * The filter to search for the CONDICIONES_MATERIAS to update in case it exists.
     */
    where: CONDICIONES_MATERIASWhereUniqueInput
    /**
     * In case the CONDICIONES_MATERIAS found by the `where` argument doesn't exist, create a new CONDICIONES_MATERIAS with this data.
     */
    create: XOR<CONDICIONES_MATERIASCreateInput, CONDICIONES_MATERIASUncheckedCreateInput>
    /**
     * In case the CONDICIONES_MATERIAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CONDICIONES_MATERIASUpdateInput, CONDICIONES_MATERIASUncheckedUpdateInput>
  }

  /**
   * CONDICIONES_MATERIAS delete
   */
  export type CONDICIONES_MATERIASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
    /**
     * Filter which CONDICIONES_MATERIAS to delete.
     */
    where: CONDICIONES_MATERIASWhereUniqueInput
  }

  /**
   * CONDICIONES_MATERIAS deleteMany
   */
  export type CONDICIONES_MATERIASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONDICIONES_MATERIAS to delete
     */
    where?: CONDICIONES_MATERIASWhereInput
    /**
     * Limit how many CONDICIONES_MATERIAS to delete.
     */
    limit?: number
  }

  /**
   * CONDICIONES_MATERIAS without action
   */
  export type CONDICIONES_MATERIASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONDICIONES_MATERIAS
     */
    select?: CONDICIONES_MATERIASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONDICIONES_MATERIAS
     */
    omit?: CONDICIONES_MATERIASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CONDICIONES_MATERIASInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PAISESScalarFieldEnum: {
    id_pais: 'id_pais',
    nombre: 'nombre'
  };

  export type PAISESScalarFieldEnum = (typeof PAISESScalarFieldEnum)[keyof typeof PAISESScalarFieldEnum]


  export const LOCALIDADESScalarFieldEnum: {
    id_localidad: 'id_localidad',
    nombre: 'nombre',
    id_pais: 'id_pais'
  };

  export type LOCALIDADESScalarFieldEnum = (typeof LOCALIDADESScalarFieldEnum)[keyof typeof LOCALIDADESScalarFieldEnum]


  export const AREAS_TELEFONICASScalarFieldEnum: {
    id_area_telefonica: 'id_area_telefonica',
    codigo: 'codigo'
  };

  export type AREAS_TELEFONICASScalarFieldEnum = (typeof AREAS_TELEFONICASScalarFieldEnum)[keyof typeof AREAS_TELEFONICASScalarFieldEnum]


  export const GENEROSScalarFieldEnum: {
    id_genero: 'id_genero',
    nombre: 'nombre'
  };

  export type GENEROSScalarFieldEnum = (typeof GENEROSScalarFieldEnum)[keyof typeof GENEROSScalarFieldEnum]


  export const CARRERASScalarFieldEnum: {
    id_carrera: 'id_carrera',
    nombre: 'nombre',
    duracion: 'duracion',
    titulo_otorgado: 'titulo_otorgado'
  };

  export type CARRERASScalarFieldEnum = (typeof CARRERASScalarFieldEnum)[keyof typeof CARRERASScalarFieldEnum]


  export const MATERIASScalarFieldEnum: {
    id_materia: 'id_materia',
    nombre: 'nombre',
    id_carrera: 'id_carrera'
  };

  export type MATERIASScalarFieldEnum = (typeof MATERIASScalarFieldEnum)[keyof typeof MATERIASScalarFieldEnum]


  export const CONDICIONESScalarFieldEnum: {
    id_condition: 'id_condition',
    nombre: 'nombre'
  };

  export type CONDICIONESScalarFieldEnum = (typeof CONDICIONESScalarFieldEnum)[keyof typeof CONDICIONESScalarFieldEnum]


  export const ESTUDIANTESScalarFieldEnum: {
    id_estudiante: 'id_estudiante',
    id_pais: 'id_pais',
    id_localidad: 'id_localidad',
    id_area_telefonica: 'id_area_telefonica',
    id_genero: 'id_genero',
    nombres: 'nombres',
    apellidos: 'apellidos',
    dni: 'dni',
    fecha_nacimiento: 'fecha_nacimiento',
    email: 'email',
    telefono: 'telefono',
    domicilio: 'domicilio',
    fecha_ingreso: 'fecha_ingreso',
    cohorte: 'cohorte',
    secundario: 'secundario',
    cuil: 'cuil',
    examen_mayores25: 'examen_mayores25',
    solicito_beca: 'solicito_beca',
    trabajador: 'trabajador',
    persona_a_cargo: 'persona_a_cargo',
    observaciones: 'observaciones',
    estado: 'estado'
  };

  export type ESTUDIANTESScalarFieldEnum = (typeof ESTUDIANTESScalarFieldEnum)[keyof typeof ESTUDIANTESScalarFieldEnum]


  export const INSCRIPCIONESScalarFieldEnum: {
    id_inscripcion: 'id_inscripcion',
    id_estudiante: 'id_estudiante',
    id_carrera: 'id_carrera',
    fecha_inscripcion: 'fecha_inscripcion',
    estado: 'estado',
    causa_inactividad: 'causa_inactividad'
  };

  export type INSCRIPCIONESScalarFieldEnum = (typeof INSCRIPCIONESScalarFieldEnum)[keyof typeof INSCRIPCIONESScalarFieldEnum]


  export const ESTUDIANTES_CARRERASScalarFieldEnum: {
    id_ec: 'id_ec',
    id_estudiante: 'id_estudiante',
    id_carrera: 'id_carrera',
    fecha_alta: 'fecha_alta',
    fecha_baja: 'fecha_baja'
  };

  export type ESTUDIANTES_CARRERASScalarFieldEnum = (typeof ESTUDIANTES_CARRERASScalarFieldEnum)[keyof typeof ESTUDIANTES_CARRERASScalarFieldEnum]


  export const CURSADASScalarFieldEnum: {
    id_cursada: 'id_cursada',
    id_estudiante: 'id_estudiante',
    id_materia: 'id_materia',
    nota_final: 'nota_final'
  };

  export type CURSADASScalarFieldEnum = (typeof CURSADASScalarFieldEnum)[keyof typeof CURSADASScalarFieldEnum]


  export const CONDICIONES_MATERIASScalarFieldEnum: {
    id_cm: 'id_cm',
    id_estudiante: 'id_estudiante',
    id_materia: 'id_materia',
    id_condition: 'id_condition'
  };

  export type CONDICIONES_MATERIASScalarFieldEnum = (typeof CONDICIONES_MATERIASScalarFieldEnum)[keyof typeof CONDICIONES_MATERIASScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PAISESWhereInput = {
    AND?: PAISESWhereInput | PAISESWhereInput[]
    OR?: PAISESWhereInput[]
    NOT?: PAISESWhereInput | PAISESWhereInput[]
    id_pais?: IntFilter<"PAISES"> | number
    nombre?: StringFilter<"PAISES"> | string
    localidades?: LOCALIDADESListRelationFilter
    estudiantes?: ESTUDIANTESListRelationFilter
  }

  export type PAISESOrderByWithRelationInput = {
    id_pais?: SortOrder
    nombre?: SortOrder
    localidades?: LOCALIDADESOrderByRelationAggregateInput
    estudiantes?: ESTUDIANTESOrderByRelationAggregateInput
  }

  export type PAISESWhereUniqueInput = Prisma.AtLeast<{
    id_pais?: number
    AND?: PAISESWhereInput | PAISESWhereInput[]
    OR?: PAISESWhereInput[]
    NOT?: PAISESWhereInput | PAISESWhereInput[]
    nombre?: StringFilter<"PAISES"> | string
    localidades?: LOCALIDADESListRelationFilter
    estudiantes?: ESTUDIANTESListRelationFilter
  }, "id_pais">

  export type PAISESOrderByWithAggregationInput = {
    id_pais?: SortOrder
    nombre?: SortOrder
    _count?: PAISESCountOrderByAggregateInput
    _avg?: PAISESAvgOrderByAggregateInput
    _max?: PAISESMaxOrderByAggregateInput
    _min?: PAISESMinOrderByAggregateInput
    _sum?: PAISESSumOrderByAggregateInput
  }

  export type PAISESScalarWhereWithAggregatesInput = {
    AND?: PAISESScalarWhereWithAggregatesInput | PAISESScalarWhereWithAggregatesInput[]
    OR?: PAISESScalarWhereWithAggregatesInput[]
    NOT?: PAISESScalarWhereWithAggregatesInput | PAISESScalarWhereWithAggregatesInput[]
    id_pais?: IntWithAggregatesFilter<"PAISES"> | number
    nombre?: StringWithAggregatesFilter<"PAISES"> | string
  }

  export type LOCALIDADESWhereInput = {
    AND?: LOCALIDADESWhereInput | LOCALIDADESWhereInput[]
    OR?: LOCALIDADESWhereInput[]
    NOT?: LOCALIDADESWhereInput | LOCALIDADESWhereInput[]
    id_localidad?: IntFilter<"LOCALIDADES"> | number
    nombre?: StringFilter<"LOCALIDADES"> | string
    id_pais?: IntFilter<"LOCALIDADES"> | number
    pais?: XOR<PAISESScalarRelationFilter, PAISESWhereInput>
    estudiantes?: ESTUDIANTESListRelationFilter
  }

  export type LOCALIDADESOrderByWithRelationInput = {
    id_localidad?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrder
    pais?: PAISESOrderByWithRelationInput
    estudiantes?: ESTUDIANTESOrderByRelationAggregateInput
  }

  export type LOCALIDADESWhereUniqueInput = Prisma.AtLeast<{
    id_localidad?: number
    AND?: LOCALIDADESWhereInput | LOCALIDADESWhereInput[]
    OR?: LOCALIDADESWhereInput[]
    NOT?: LOCALIDADESWhereInput | LOCALIDADESWhereInput[]
    nombre?: StringFilter<"LOCALIDADES"> | string
    id_pais?: IntFilter<"LOCALIDADES"> | number
    pais?: XOR<PAISESScalarRelationFilter, PAISESWhereInput>
    estudiantes?: ESTUDIANTESListRelationFilter
  }, "id_localidad">

  export type LOCALIDADESOrderByWithAggregationInput = {
    id_localidad?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrder
    _count?: LOCALIDADESCountOrderByAggregateInput
    _avg?: LOCALIDADESAvgOrderByAggregateInput
    _max?: LOCALIDADESMaxOrderByAggregateInput
    _min?: LOCALIDADESMinOrderByAggregateInput
    _sum?: LOCALIDADESSumOrderByAggregateInput
  }

  export type LOCALIDADESScalarWhereWithAggregatesInput = {
    AND?: LOCALIDADESScalarWhereWithAggregatesInput | LOCALIDADESScalarWhereWithAggregatesInput[]
    OR?: LOCALIDADESScalarWhereWithAggregatesInput[]
    NOT?: LOCALIDADESScalarWhereWithAggregatesInput | LOCALIDADESScalarWhereWithAggregatesInput[]
    id_localidad?: IntWithAggregatesFilter<"LOCALIDADES"> | number
    nombre?: StringWithAggregatesFilter<"LOCALIDADES"> | string
    id_pais?: IntWithAggregatesFilter<"LOCALIDADES"> | number
  }

  export type AREAS_TELEFONICASWhereInput = {
    AND?: AREAS_TELEFONICASWhereInput | AREAS_TELEFONICASWhereInput[]
    OR?: AREAS_TELEFONICASWhereInput[]
    NOT?: AREAS_TELEFONICASWhereInput | AREAS_TELEFONICASWhereInput[]
    id_area_telefonica?: IntFilter<"AREAS_TELEFONICAS"> | number
    codigo?: StringFilter<"AREAS_TELEFONICAS"> | string
    estudiantes?: ESTUDIANTESListRelationFilter
  }

  export type AREAS_TELEFONICASOrderByWithRelationInput = {
    id_area_telefonica?: SortOrder
    codigo?: SortOrder
    estudiantes?: ESTUDIANTESOrderByRelationAggregateInput
  }

  export type AREAS_TELEFONICASWhereUniqueInput = Prisma.AtLeast<{
    id_area_telefonica?: number
    AND?: AREAS_TELEFONICASWhereInput | AREAS_TELEFONICASWhereInput[]
    OR?: AREAS_TELEFONICASWhereInput[]
    NOT?: AREAS_TELEFONICASWhereInput | AREAS_TELEFONICASWhereInput[]
    codigo?: StringFilter<"AREAS_TELEFONICAS"> | string
    estudiantes?: ESTUDIANTESListRelationFilter
  }, "id_area_telefonica">

  export type AREAS_TELEFONICASOrderByWithAggregationInput = {
    id_area_telefonica?: SortOrder
    codigo?: SortOrder
    _count?: AREAS_TELEFONICASCountOrderByAggregateInput
    _avg?: AREAS_TELEFONICASAvgOrderByAggregateInput
    _max?: AREAS_TELEFONICASMaxOrderByAggregateInput
    _min?: AREAS_TELEFONICASMinOrderByAggregateInput
    _sum?: AREAS_TELEFONICASSumOrderByAggregateInput
  }

  export type AREAS_TELEFONICASScalarWhereWithAggregatesInput = {
    AND?: AREAS_TELEFONICASScalarWhereWithAggregatesInput | AREAS_TELEFONICASScalarWhereWithAggregatesInput[]
    OR?: AREAS_TELEFONICASScalarWhereWithAggregatesInput[]
    NOT?: AREAS_TELEFONICASScalarWhereWithAggregatesInput | AREAS_TELEFONICASScalarWhereWithAggregatesInput[]
    id_area_telefonica?: IntWithAggregatesFilter<"AREAS_TELEFONICAS"> | number
    codigo?: StringWithAggregatesFilter<"AREAS_TELEFONICAS"> | string
  }

  export type GENEROSWhereInput = {
    AND?: GENEROSWhereInput | GENEROSWhereInput[]
    OR?: GENEROSWhereInput[]
    NOT?: GENEROSWhereInput | GENEROSWhereInput[]
    id_genero?: IntFilter<"GENEROS"> | number
    nombre?: StringFilter<"GENEROS"> | string
    estudiantes?: ESTUDIANTESListRelationFilter
  }

  export type GENEROSOrderByWithRelationInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
    estudiantes?: ESTUDIANTESOrderByRelationAggregateInput
  }

  export type GENEROSWhereUniqueInput = Prisma.AtLeast<{
    id_genero?: number
    AND?: GENEROSWhereInput | GENEROSWhereInput[]
    OR?: GENEROSWhereInput[]
    NOT?: GENEROSWhereInput | GENEROSWhereInput[]
    nombre?: StringFilter<"GENEROS"> | string
    estudiantes?: ESTUDIANTESListRelationFilter
  }, "id_genero">

  export type GENEROSOrderByWithAggregationInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
    _count?: GENEROSCountOrderByAggregateInput
    _avg?: GENEROSAvgOrderByAggregateInput
    _max?: GENEROSMaxOrderByAggregateInput
    _min?: GENEROSMinOrderByAggregateInput
    _sum?: GENEROSSumOrderByAggregateInput
  }

  export type GENEROSScalarWhereWithAggregatesInput = {
    AND?: GENEROSScalarWhereWithAggregatesInput | GENEROSScalarWhereWithAggregatesInput[]
    OR?: GENEROSScalarWhereWithAggregatesInput[]
    NOT?: GENEROSScalarWhereWithAggregatesInput | GENEROSScalarWhereWithAggregatesInput[]
    id_genero?: IntWithAggregatesFilter<"GENEROS"> | number
    nombre?: StringWithAggregatesFilter<"GENEROS"> | string
  }

  export type CARRERASWhereInput = {
    AND?: CARRERASWhereInput | CARRERASWhereInput[]
    OR?: CARRERASWhereInput[]
    NOT?: CARRERASWhereInput | CARRERASWhereInput[]
    id_carrera?: IntFilter<"CARRERAS"> | number
    nombre?: StringFilter<"CARRERAS"> | string
    duracion?: IntFilter<"CARRERAS"> | number
    titulo_otorgado?: StringFilter<"CARRERAS"> | string
    materias?: MATERIASListRelationFilter
    inscripciones?: INSCRIPCIONESListRelationFilter
    estudiantes_carreras?: ESTUDIANTES_CARRERASListRelationFilter
  }

  export type CARRERASOrderByWithRelationInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    titulo_otorgado?: SortOrder
    materias?: MATERIASOrderByRelationAggregateInput
    inscripciones?: INSCRIPCIONESOrderByRelationAggregateInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASOrderByRelationAggregateInput
  }

  export type CARRERASWhereUniqueInput = Prisma.AtLeast<{
    id_carrera?: number
    AND?: CARRERASWhereInput | CARRERASWhereInput[]
    OR?: CARRERASWhereInput[]
    NOT?: CARRERASWhereInput | CARRERASWhereInput[]
    nombre?: StringFilter<"CARRERAS"> | string
    duracion?: IntFilter<"CARRERAS"> | number
    titulo_otorgado?: StringFilter<"CARRERAS"> | string
    materias?: MATERIASListRelationFilter
    inscripciones?: INSCRIPCIONESListRelationFilter
    estudiantes_carreras?: ESTUDIANTES_CARRERASListRelationFilter
  }, "id_carrera">

  export type CARRERASOrderByWithAggregationInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    titulo_otorgado?: SortOrder
    _count?: CARRERASCountOrderByAggregateInput
    _avg?: CARRERASAvgOrderByAggregateInput
    _max?: CARRERASMaxOrderByAggregateInput
    _min?: CARRERASMinOrderByAggregateInput
    _sum?: CARRERASSumOrderByAggregateInput
  }

  export type CARRERASScalarWhereWithAggregatesInput = {
    AND?: CARRERASScalarWhereWithAggregatesInput | CARRERASScalarWhereWithAggregatesInput[]
    OR?: CARRERASScalarWhereWithAggregatesInput[]
    NOT?: CARRERASScalarWhereWithAggregatesInput | CARRERASScalarWhereWithAggregatesInput[]
    id_carrera?: IntWithAggregatesFilter<"CARRERAS"> | number
    nombre?: StringWithAggregatesFilter<"CARRERAS"> | string
    duracion?: IntWithAggregatesFilter<"CARRERAS"> | number
    titulo_otorgado?: StringWithAggregatesFilter<"CARRERAS"> | string
  }

  export type MATERIASWhereInput = {
    AND?: MATERIASWhereInput | MATERIASWhereInput[]
    OR?: MATERIASWhereInput[]
    NOT?: MATERIASWhereInput | MATERIASWhereInput[]
    id_materia?: IntFilter<"MATERIAS"> | number
    nombre?: StringFilter<"MATERIAS"> | string
    id_carrera?: IntFilter<"MATERIAS"> | number
    carrera?: XOR<CARRERASScalarRelationFilter, CARRERASWhereInput>
    cursadas?: CURSADASListRelationFilter
    condiciones_materias?: CONDICIONES_MATERIASListRelationFilter
  }

  export type MATERIASOrderByWithRelationInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    id_carrera?: SortOrder
    carrera?: CARRERASOrderByWithRelationInput
    cursadas?: CURSADASOrderByRelationAggregateInput
    condiciones_materias?: CONDICIONES_MATERIASOrderByRelationAggregateInput
  }

  export type MATERIASWhereUniqueInput = Prisma.AtLeast<{
    id_materia?: number
    AND?: MATERIASWhereInput | MATERIASWhereInput[]
    OR?: MATERIASWhereInput[]
    NOT?: MATERIASWhereInput | MATERIASWhereInput[]
    nombre?: StringFilter<"MATERIAS"> | string
    id_carrera?: IntFilter<"MATERIAS"> | number
    carrera?: XOR<CARRERASScalarRelationFilter, CARRERASWhereInput>
    cursadas?: CURSADASListRelationFilter
    condiciones_materias?: CONDICIONES_MATERIASListRelationFilter
  }, "id_materia">

  export type MATERIASOrderByWithAggregationInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    id_carrera?: SortOrder
    _count?: MATERIASCountOrderByAggregateInput
    _avg?: MATERIASAvgOrderByAggregateInput
    _max?: MATERIASMaxOrderByAggregateInput
    _min?: MATERIASMinOrderByAggregateInput
    _sum?: MATERIASSumOrderByAggregateInput
  }

  export type MATERIASScalarWhereWithAggregatesInput = {
    AND?: MATERIASScalarWhereWithAggregatesInput | MATERIASScalarWhereWithAggregatesInput[]
    OR?: MATERIASScalarWhereWithAggregatesInput[]
    NOT?: MATERIASScalarWhereWithAggregatesInput | MATERIASScalarWhereWithAggregatesInput[]
    id_materia?: IntWithAggregatesFilter<"MATERIAS"> | number
    nombre?: StringWithAggregatesFilter<"MATERIAS"> | string
    id_carrera?: IntWithAggregatesFilter<"MATERIAS"> | number
  }

  export type CONDICIONESWhereInput = {
    AND?: CONDICIONESWhereInput | CONDICIONESWhereInput[]
    OR?: CONDICIONESWhereInput[]
    NOT?: CONDICIONESWhereInput | CONDICIONESWhereInput[]
    id_condition?: IntFilter<"CONDICIONES"> | number
    nombre?: StringFilter<"CONDICIONES"> | string
    condiciones_materias?: CONDICIONES_MATERIASListRelationFilter
  }

  export type CONDICIONESOrderByWithRelationInput = {
    id_condition?: SortOrder
    nombre?: SortOrder
    condiciones_materias?: CONDICIONES_MATERIASOrderByRelationAggregateInput
  }

  export type CONDICIONESWhereUniqueInput = Prisma.AtLeast<{
    id_condition?: number
    AND?: CONDICIONESWhereInput | CONDICIONESWhereInput[]
    OR?: CONDICIONESWhereInput[]
    NOT?: CONDICIONESWhereInput | CONDICIONESWhereInput[]
    nombre?: StringFilter<"CONDICIONES"> | string
    condiciones_materias?: CONDICIONES_MATERIASListRelationFilter
  }, "id_condition">

  export type CONDICIONESOrderByWithAggregationInput = {
    id_condition?: SortOrder
    nombre?: SortOrder
    _count?: CONDICIONESCountOrderByAggregateInput
    _avg?: CONDICIONESAvgOrderByAggregateInput
    _max?: CONDICIONESMaxOrderByAggregateInput
    _min?: CONDICIONESMinOrderByAggregateInput
    _sum?: CONDICIONESSumOrderByAggregateInput
  }

  export type CONDICIONESScalarWhereWithAggregatesInput = {
    AND?: CONDICIONESScalarWhereWithAggregatesInput | CONDICIONESScalarWhereWithAggregatesInput[]
    OR?: CONDICIONESScalarWhereWithAggregatesInput[]
    NOT?: CONDICIONESScalarWhereWithAggregatesInput | CONDICIONESScalarWhereWithAggregatesInput[]
    id_condition?: IntWithAggregatesFilter<"CONDICIONES"> | number
    nombre?: StringWithAggregatesFilter<"CONDICIONES"> | string
  }

  export type ESTUDIANTESWhereInput = {
    AND?: ESTUDIANTESWhereInput | ESTUDIANTESWhereInput[]
    OR?: ESTUDIANTESWhereInput[]
    NOT?: ESTUDIANTESWhereInput | ESTUDIANTESWhereInput[]
    id_estudiante?: IntFilter<"ESTUDIANTES"> | number
    id_pais?: IntFilter<"ESTUDIANTES"> | number
    id_localidad?: IntFilter<"ESTUDIANTES"> | number
    id_area_telefonica?: IntFilter<"ESTUDIANTES"> | number
    id_genero?: IntFilter<"ESTUDIANTES"> | number
    nombres?: StringFilter<"ESTUDIANTES"> | string
    apellidos?: StringFilter<"ESTUDIANTES"> | string
    dni?: StringFilter<"ESTUDIANTES"> | string
    fecha_nacimiento?: DateTimeFilter<"ESTUDIANTES"> | Date | string
    email?: StringFilter<"ESTUDIANTES"> | string
    telefono?: StringFilter<"ESTUDIANTES"> | string
    domicilio?: StringFilter<"ESTUDIANTES"> | string
    fecha_ingreso?: DateTimeFilter<"ESTUDIANTES"> | Date | string
    cohorte?: StringFilter<"ESTUDIANTES"> | string
    secundario?: StringFilter<"ESTUDIANTES"> | string
    cuil?: StringFilter<"ESTUDIANTES"> | string
    examen_mayores25?: BoolFilter<"ESTUDIANTES"> | boolean
    solicito_beca?: BoolFilter<"ESTUDIANTES"> | boolean
    trabajador?: BoolFilter<"ESTUDIANTES"> | boolean
    persona_a_cargo?: BoolFilter<"ESTUDIANTES"> | boolean
    observaciones?: StringNullableFilter<"ESTUDIANTES"> | string | null
    estado?: StringFilter<"ESTUDIANTES"> | string
    pais?: XOR<PAISESScalarRelationFilter, PAISESWhereInput>
    localidad?: XOR<LOCALIDADESScalarRelationFilter, LOCALIDADESWhereInput>
    area_telefonica?: XOR<AREAS_TELEFONICASScalarRelationFilter, AREAS_TELEFONICASWhereInput>
    genero?: XOR<GENEROSScalarRelationFilter, GENEROSWhereInput>
    inscripciones?: INSCRIPCIONESListRelationFilter
    estudiantes_carreras?: ESTUDIANTES_CARRERASListRelationFilter
    cursadas?: CURSADASListRelationFilter
    condiciones_materias?: CONDICIONES_MATERIASListRelationFilter
  }

  export type ESTUDIANTESOrderByWithRelationInput = {
    id_estudiante?: SortOrder
    id_pais?: SortOrder
    id_localidad?: SortOrder
    id_area_telefonica?: SortOrder
    id_genero?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    domicilio?: SortOrder
    fecha_ingreso?: SortOrder
    cohorte?: SortOrder
    secundario?: SortOrder
    cuil?: SortOrder
    examen_mayores25?: SortOrder
    solicito_beca?: SortOrder
    trabajador?: SortOrder
    persona_a_cargo?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    estado?: SortOrder
    pais?: PAISESOrderByWithRelationInput
    localidad?: LOCALIDADESOrderByWithRelationInput
    area_telefonica?: AREAS_TELEFONICASOrderByWithRelationInput
    genero?: GENEROSOrderByWithRelationInput
    inscripciones?: INSCRIPCIONESOrderByRelationAggregateInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASOrderByRelationAggregateInput
    cursadas?: CURSADASOrderByRelationAggregateInput
    condiciones_materias?: CONDICIONES_MATERIASOrderByRelationAggregateInput
  }

  export type ESTUDIANTESWhereUniqueInput = Prisma.AtLeast<{
    id_estudiante?: number
    dni?: string
    AND?: ESTUDIANTESWhereInput | ESTUDIANTESWhereInput[]
    OR?: ESTUDIANTESWhereInput[]
    NOT?: ESTUDIANTESWhereInput | ESTUDIANTESWhereInput[]
    id_pais?: IntFilter<"ESTUDIANTES"> | number
    id_localidad?: IntFilter<"ESTUDIANTES"> | number
    id_area_telefonica?: IntFilter<"ESTUDIANTES"> | number
    id_genero?: IntFilter<"ESTUDIANTES"> | number
    nombres?: StringFilter<"ESTUDIANTES"> | string
    apellidos?: StringFilter<"ESTUDIANTES"> | string
    fecha_nacimiento?: DateTimeFilter<"ESTUDIANTES"> | Date | string
    email?: StringFilter<"ESTUDIANTES"> | string
    telefono?: StringFilter<"ESTUDIANTES"> | string
    domicilio?: StringFilter<"ESTUDIANTES"> | string
    fecha_ingreso?: DateTimeFilter<"ESTUDIANTES"> | Date | string
    cohorte?: StringFilter<"ESTUDIANTES"> | string
    secundario?: StringFilter<"ESTUDIANTES"> | string
    cuil?: StringFilter<"ESTUDIANTES"> | string
    examen_mayores25?: BoolFilter<"ESTUDIANTES"> | boolean
    solicito_beca?: BoolFilter<"ESTUDIANTES"> | boolean
    trabajador?: BoolFilter<"ESTUDIANTES"> | boolean
    persona_a_cargo?: BoolFilter<"ESTUDIANTES"> | boolean
    observaciones?: StringNullableFilter<"ESTUDIANTES"> | string | null
    estado?: StringFilter<"ESTUDIANTES"> | string
    pais?: XOR<PAISESScalarRelationFilter, PAISESWhereInput>
    localidad?: XOR<LOCALIDADESScalarRelationFilter, LOCALIDADESWhereInput>
    area_telefonica?: XOR<AREAS_TELEFONICASScalarRelationFilter, AREAS_TELEFONICASWhereInput>
    genero?: XOR<GENEROSScalarRelationFilter, GENEROSWhereInput>
    inscripciones?: INSCRIPCIONESListRelationFilter
    estudiantes_carreras?: ESTUDIANTES_CARRERASListRelationFilter
    cursadas?: CURSADASListRelationFilter
    condiciones_materias?: CONDICIONES_MATERIASListRelationFilter
  }, "id_estudiante" | "dni">

  export type ESTUDIANTESOrderByWithAggregationInput = {
    id_estudiante?: SortOrder
    id_pais?: SortOrder
    id_localidad?: SortOrder
    id_area_telefonica?: SortOrder
    id_genero?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    domicilio?: SortOrder
    fecha_ingreso?: SortOrder
    cohorte?: SortOrder
    secundario?: SortOrder
    cuil?: SortOrder
    examen_mayores25?: SortOrder
    solicito_beca?: SortOrder
    trabajador?: SortOrder
    persona_a_cargo?: SortOrder
    observaciones?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: ESTUDIANTESCountOrderByAggregateInput
    _avg?: ESTUDIANTESAvgOrderByAggregateInput
    _max?: ESTUDIANTESMaxOrderByAggregateInput
    _min?: ESTUDIANTESMinOrderByAggregateInput
    _sum?: ESTUDIANTESSumOrderByAggregateInput
  }

  export type ESTUDIANTESScalarWhereWithAggregatesInput = {
    AND?: ESTUDIANTESScalarWhereWithAggregatesInput | ESTUDIANTESScalarWhereWithAggregatesInput[]
    OR?: ESTUDIANTESScalarWhereWithAggregatesInput[]
    NOT?: ESTUDIANTESScalarWhereWithAggregatesInput | ESTUDIANTESScalarWhereWithAggregatesInput[]
    id_estudiante?: IntWithAggregatesFilter<"ESTUDIANTES"> | number
    id_pais?: IntWithAggregatesFilter<"ESTUDIANTES"> | number
    id_localidad?: IntWithAggregatesFilter<"ESTUDIANTES"> | number
    id_area_telefonica?: IntWithAggregatesFilter<"ESTUDIANTES"> | number
    id_genero?: IntWithAggregatesFilter<"ESTUDIANTES"> | number
    nombres?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    apellidos?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    dni?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    fecha_nacimiento?: DateTimeWithAggregatesFilter<"ESTUDIANTES"> | Date | string
    email?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    telefono?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    domicilio?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    fecha_ingreso?: DateTimeWithAggregatesFilter<"ESTUDIANTES"> | Date | string
    cohorte?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    secundario?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    cuil?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
    examen_mayores25?: BoolWithAggregatesFilter<"ESTUDIANTES"> | boolean
    solicito_beca?: BoolWithAggregatesFilter<"ESTUDIANTES"> | boolean
    trabajador?: BoolWithAggregatesFilter<"ESTUDIANTES"> | boolean
    persona_a_cargo?: BoolWithAggregatesFilter<"ESTUDIANTES"> | boolean
    observaciones?: StringNullableWithAggregatesFilter<"ESTUDIANTES"> | string | null
    estado?: StringWithAggregatesFilter<"ESTUDIANTES"> | string
  }

  export type INSCRIPCIONESWhereInput = {
    AND?: INSCRIPCIONESWhereInput | INSCRIPCIONESWhereInput[]
    OR?: INSCRIPCIONESWhereInput[]
    NOT?: INSCRIPCIONESWhereInput | INSCRIPCIONESWhereInput[]
    id_inscripcion?: IntFilter<"INSCRIPCIONES"> | number
    id_estudiante?: IntFilter<"INSCRIPCIONES"> | number
    id_carrera?: IntFilter<"INSCRIPCIONES"> | number
    fecha_inscripcion?: DateTimeFilter<"INSCRIPCIONES"> | Date | string
    estado?: BoolFilter<"INSCRIPCIONES"> | boolean
    causa_inactividad?: StringNullableFilter<"INSCRIPCIONES"> | string | null
    estudiante?: XOR<ESTUDIANTESScalarRelationFilter, ESTUDIANTESWhereInput>
    carrera?: XOR<CARRERASScalarRelationFilter, CARRERASWhereInput>
  }

  export type INSCRIPCIONESOrderByWithRelationInput = {
    id_inscripcion?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
    causa_inactividad?: SortOrderInput | SortOrder
    estudiante?: ESTUDIANTESOrderByWithRelationInput
    carrera?: CARRERASOrderByWithRelationInput
  }

  export type INSCRIPCIONESWhereUniqueInput = Prisma.AtLeast<{
    id_inscripcion?: number
    AND?: INSCRIPCIONESWhereInput | INSCRIPCIONESWhereInput[]
    OR?: INSCRIPCIONESWhereInput[]
    NOT?: INSCRIPCIONESWhereInput | INSCRIPCIONESWhereInput[]
    id_estudiante?: IntFilter<"INSCRIPCIONES"> | number
    id_carrera?: IntFilter<"INSCRIPCIONES"> | number
    fecha_inscripcion?: DateTimeFilter<"INSCRIPCIONES"> | Date | string
    estado?: BoolFilter<"INSCRIPCIONES"> | boolean
    causa_inactividad?: StringNullableFilter<"INSCRIPCIONES"> | string | null
    estudiante?: XOR<ESTUDIANTESScalarRelationFilter, ESTUDIANTESWhereInput>
    carrera?: XOR<CARRERASScalarRelationFilter, CARRERASWhereInput>
  }, "id_inscripcion">

  export type INSCRIPCIONESOrderByWithAggregationInput = {
    id_inscripcion?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
    causa_inactividad?: SortOrderInput | SortOrder
    _count?: INSCRIPCIONESCountOrderByAggregateInput
    _avg?: INSCRIPCIONESAvgOrderByAggregateInput
    _max?: INSCRIPCIONESMaxOrderByAggregateInput
    _min?: INSCRIPCIONESMinOrderByAggregateInput
    _sum?: INSCRIPCIONESSumOrderByAggregateInput
  }

  export type INSCRIPCIONESScalarWhereWithAggregatesInput = {
    AND?: INSCRIPCIONESScalarWhereWithAggregatesInput | INSCRIPCIONESScalarWhereWithAggregatesInput[]
    OR?: INSCRIPCIONESScalarWhereWithAggregatesInput[]
    NOT?: INSCRIPCIONESScalarWhereWithAggregatesInput | INSCRIPCIONESScalarWhereWithAggregatesInput[]
    id_inscripcion?: IntWithAggregatesFilter<"INSCRIPCIONES"> | number
    id_estudiante?: IntWithAggregatesFilter<"INSCRIPCIONES"> | number
    id_carrera?: IntWithAggregatesFilter<"INSCRIPCIONES"> | number
    fecha_inscripcion?: DateTimeWithAggregatesFilter<"INSCRIPCIONES"> | Date | string
    estado?: BoolWithAggregatesFilter<"INSCRIPCIONES"> | boolean
    causa_inactividad?: StringNullableWithAggregatesFilter<"INSCRIPCIONES"> | string | null
  }

  export type ESTUDIANTES_CARRERASWhereInput = {
    AND?: ESTUDIANTES_CARRERASWhereInput | ESTUDIANTES_CARRERASWhereInput[]
    OR?: ESTUDIANTES_CARRERASWhereInput[]
    NOT?: ESTUDIANTES_CARRERASWhereInput | ESTUDIANTES_CARRERASWhereInput[]
    id_ec?: IntFilter<"ESTUDIANTES_CARRERAS"> | number
    id_estudiante?: IntFilter<"ESTUDIANTES_CARRERAS"> | number
    id_carrera?: IntFilter<"ESTUDIANTES_CARRERAS"> | number
    fecha_alta?: DateTimeFilter<"ESTUDIANTES_CARRERAS"> | Date | string
    fecha_baja?: DateTimeNullableFilter<"ESTUDIANTES_CARRERAS"> | Date | string | null
    estudiante?: XOR<ESTUDIANTESScalarRelationFilter, ESTUDIANTESWhereInput>
    carrera?: XOR<CARRERASScalarRelationFilter, CARRERASWhereInput>
  }

  export type ESTUDIANTES_CARRERASOrderByWithRelationInput = {
    id_ec?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_alta?: SortOrder
    fecha_baja?: SortOrderInput | SortOrder
    estudiante?: ESTUDIANTESOrderByWithRelationInput
    carrera?: CARRERASOrderByWithRelationInput
  }

  export type ESTUDIANTES_CARRERASWhereUniqueInput = Prisma.AtLeast<{
    id_ec?: number
    AND?: ESTUDIANTES_CARRERASWhereInput | ESTUDIANTES_CARRERASWhereInput[]
    OR?: ESTUDIANTES_CARRERASWhereInput[]
    NOT?: ESTUDIANTES_CARRERASWhereInput | ESTUDIANTES_CARRERASWhereInput[]
    id_estudiante?: IntFilter<"ESTUDIANTES_CARRERAS"> | number
    id_carrera?: IntFilter<"ESTUDIANTES_CARRERAS"> | number
    fecha_alta?: DateTimeFilter<"ESTUDIANTES_CARRERAS"> | Date | string
    fecha_baja?: DateTimeNullableFilter<"ESTUDIANTES_CARRERAS"> | Date | string | null
    estudiante?: XOR<ESTUDIANTESScalarRelationFilter, ESTUDIANTESWhereInput>
    carrera?: XOR<CARRERASScalarRelationFilter, CARRERASWhereInput>
  }, "id_ec">

  export type ESTUDIANTES_CARRERASOrderByWithAggregationInput = {
    id_ec?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_alta?: SortOrder
    fecha_baja?: SortOrderInput | SortOrder
    _count?: ESTUDIANTES_CARRERASCountOrderByAggregateInput
    _avg?: ESTUDIANTES_CARRERASAvgOrderByAggregateInput
    _max?: ESTUDIANTES_CARRERASMaxOrderByAggregateInput
    _min?: ESTUDIANTES_CARRERASMinOrderByAggregateInput
    _sum?: ESTUDIANTES_CARRERASSumOrderByAggregateInput
  }

  export type ESTUDIANTES_CARRERASScalarWhereWithAggregatesInput = {
    AND?: ESTUDIANTES_CARRERASScalarWhereWithAggregatesInput | ESTUDIANTES_CARRERASScalarWhereWithAggregatesInput[]
    OR?: ESTUDIANTES_CARRERASScalarWhereWithAggregatesInput[]
    NOT?: ESTUDIANTES_CARRERASScalarWhereWithAggregatesInput | ESTUDIANTES_CARRERASScalarWhereWithAggregatesInput[]
    id_ec?: IntWithAggregatesFilter<"ESTUDIANTES_CARRERAS"> | number
    id_estudiante?: IntWithAggregatesFilter<"ESTUDIANTES_CARRERAS"> | number
    id_carrera?: IntWithAggregatesFilter<"ESTUDIANTES_CARRERAS"> | number
    fecha_alta?: DateTimeWithAggregatesFilter<"ESTUDIANTES_CARRERAS"> | Date | string
    fecha_baja?: DateTimeNullableWithAggregatesFilter<"ESTUDIANTES_CARRERAS"> | Date | string | null
  }

  export type CURSADASWhereInput = {
    AND?: CURSADASWhereInput | CURSADASWhereInput[]
    OR?: CURSADASWhereInput[]
    NOT?: CURSADASWhereInput | CURSADASWhereInput[]
    id_cursada?: IntFilter<"CURSADAS"> | number
    id_estudiante?: IntFilter<"CURSADAS"> | number
    id_materia?: IntFilter<"CURSADAS"> | number
    nota_final?: DecimalNullableFilter<"CURSADAS"> | Decimal | DecimalJsLike | number | string | null
    estudiante?: XOR<ESTUDIANTESScalarRelationFilter, ESTUDIANTESWhereInput>
    materia?: XOR<MATERIASScalarRelationFilter, MATERIASWhereInput>
  }

  export type CURSADASOrderByWithRelationInput = {
    id_cursada?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    nota_final?: SortOrderInput | SortOrder
    estudiante?: ESTUDIANTESOrderByWithRelationInput
    materia?: MATERIASOrderByWithRelationInput
  }

  export type CURSADASWhereUniqueInput = Prisma.AtLeast<{
    id_cursada?: number
    AND?: CURSADASWhereInput | CURSADASWhereInput[]
    OR?: CURSADASWhereInput[]
    NOT?: CURSADASWhereInput | CURSADASWhereInput[]
    id_estudiante?: IntFilter<"CURSADAS"> | number
    id_materia?: IntFilter<"CURSADAS"> | number
    nota_final?: DecimalNullableFilter<"CURSADAS"> | Decimal | DecimalJsLike | number | string | null
    estudiante?: XOR<ESTUDIANTESScalarRelationFilter, ESTUDIANTESWhereInput>
    materia?: XOR<MATERIASScalarRelationFilter, MATERIASWhereInput>
  }, "id_cursada">

  export type CURSADASOrderByWithAggregationInput = {
    id_cursada?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    nota_final?: SortOrderInput | SortOrder
    _count?: CURSADASCountOrderByAggregateInput
    _avg?: CURSADASAvgOrderByAggregateInput
    _max?: CURSADASMaxOrderByAggregateInput
    _min?: CURSADASMinOrderByAggregateInput
    _sum?: CURSADASSumOrderByAggregateInput
  }

  export type CURSADASScalarWhereWithAggregatesInput = {
    AND?: CURSADASScalarWhereWithAggregatesInput | CURSADASScalarWhereWithAggregatesInput[]
    OR?: CURSADASScalarWhereWithAggregatesInput[]
    NOT?: CURSADASScalarWhereWithAggregatesInput | CURSADASScalarWhereWithAggregatesInput[]
    id_cursada?: IntWithAggregatesFilter<"CURSADAS"> | number
    id_estudiante?: IntWithAggregatesFilter<"CURSADAS"> | number
    id_materia?: IntWithAggregatesFilter<"CURSADAS"> | number
    nota_final?: DecimalNullableWithAggregatesFilter<"CURSADAS"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CONDICIONES_MATERIASWhereInput = {
    AND?: CONDICIONES_MATERIASWhereInput | CONDICIONES_MATERIASWhereInput[]
    OR?: CONDICIONES_MATERIASWhereInput[]
    NOT?: CONDICIONES_MATERIASWhereInput | CONDICIONES_MATERIASWhereInput[]
    id_cm?: IntFilter<"CONDICIONES_MATERIAS"> | number
    id_estudiante?: IntFilter<"CONDICIONES_MATERIAS"> | number
    id_materia?: IntFilter<"CONDICIONES_MATERIAS"> | number
    id_condition?: IntFilter<"CONDICIONES_MATERIAS"> | number
    estudiante?: XOR<ESTUDIANTESScalarRelationFilter, ESTUDIANTESWhereInput>
    materia?: XOR<MATERIASScalarRelationFilter, MATERIASWhereInput>
    condicion?: XOR<CONDICIONESScalarRelationFilter, CONDICIONESWhereInput>
  }

  export type CONDICIONES_MATERIASOrderByWithRelationInput = {
    id_cm?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_condition?: SortOrder
    estudiante?: ESTUDIANTESOrderByWithRelationInput
    materia?: MATERIASOrderByWithRelationInput
    condicion?: CONDICIONESOrderByWithRelationInput
  }

  export type CONDICIONES_MATERIASWhereUniqueInput = Prisma.AtLeast<{
    id_cm?: number
    AND?: CONDICIONES_MATERIASWhereInput | CONDICIONES_MATERIASWhereInput[]
    OR?: CONDICIONES_MATERIASWhereInput[]
    NOT?: CONDICIONES_MATERIASWhereInput | CONDICIONES_MATERIASWhereInput[]
    id_estudiante?: IntFilter<"CONDICIONES_MATERIAS"> | number
    id_materia?: IntFilter<"CONDICIONES_MATERIAS"> | number
    id_condition?: IntFilter<"CONDICIONES_MATERIAS"> | number
    estudiante?: XOR<ESTUDIANTESScalarRelationFilter, ESTUDIANTESWhereInput>
    materia?: XOR<MATERIASScalarRelationFilter, MATERIASWhereInput>
    condicion?: XOR<CONDICIONESScalarRelationFilter, CONDICIONESWhereInput>
  }, "id_cm">

  export type CONDICIONES_MATERIASOrderByWithAggregationInput = {
    id_cm?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_condition?: SortOrder
    _count?: CONDICIONES_MATERIASCountOrderByAggregateInput
    _avg?: CONDICIONES_MATERIASAvgOrderByAggregateInput
    _max?: CONDICIONES_MATERIASMaxOrderByAggregateInput
    _min?: CONDICIONES_MATERIASMinOrderByAggregateInput
    _sum?: CONDICIONES_MATERIASSumOrderByAggregateInput
  }

  export type CONDICIONES_MATERIASScalarWhereWithAggregatesInput = {
    AND?: CONDICIONES_MATERIASScalarWhereWithAggregatesInput | CONDICIONES_MATERIASScalarWhereWithAggregatesInput[]
    OR?: CONDICIONES_MATERIASScalarWhereWithAggregatesInput[]
    NOT?: CONDICIONES_MATERIASScalarWhereWithAggregatesInput | CONDICIONES_MATERIASScalarWhereWithAggregatesInput[]
    id_cm?: IntWithAggregatesFilter<"CONDICIONES_MATERIAS"> | number
    id_estudiante?: IntWithAggregatesFilter<"CONDICIONES_MATERIAS"> | number
    id_materia?: IntWithAggregatesFilter<"CONDICIONES_MATERIAS"> | number
    id_condition?: IntWithAggregatesFilter<"CONDICIONES_MATERIAS"> | number
  }

  export type PAISESCreateInput = {
    nombre: string
    localidades?: LOCALIDADESCreateNestedManyWithoutPaisInput
    estudiantes?: ESTUDIANTESCreateNestedManyWithoutPaisInput
  }

  export type PAISESUncheckedCreateInput = {
    id_pais?: number
    nombre: string
    localidades?: LOCALIDADESUncheckedCreateNestedManyWithoutPaisInput
    estudiantes?: ESTUDIANTESUncheckedCreateNestedManyWithoutPaisInput
  }

  export type PAISESUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    localidades?: LOCALIDADESUpdateManyWithoutPaisNestedInput
    estudiantes?: ESTUDIANTESUpdateManyWithoutPaisNestedInput
  }

  export type PAISESUncheckedUpdateInput = {
    id_pais?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    localidades?: LOCALIDADESUncheckedUpdateManyWithoutPaisNestedInput
    estudiantes?: ESTUDIANTESUncheckedUpdateManyWithoutPaisNestedInput
  }

  export type PAISESCreateManyInput = {
    id_pais?: number
    nombre: string
  }

  export type PAISESUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PAISESUncheckedUpdateManyInput = {
    id_pais?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LOCALIDADESCreateInput = {
    nombre: string
    pais: PAISESCreateNestedOneWithoutLocalidadesInput
    estudiantes?: ESTUDIANTESCreateNestedManyWithoutLocalidadInput
  }

  export type LOCALIDADESUncheckedCreateInput = {
    id_localidad?: number
    nombre: string
    id_pais: number
    estudiantes?: ESTUDIANTESUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LOCALIDADESUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutLocalidadesNestedInput
    estudiantes?: ESTUDIANTESUpdateManyWithoutLocalidadNestedInput
  }

  export type LOCALIDADESUncheckedUpdateInput = {
    id_localidad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_pais?: IntFieldUpdateOperationsInput | number
    estudiantes?: ESTUDIANTESUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type LOCALIDADESCreateManyInput = {
    id_localidad?: number
    nombre: string
    id_pais: number
  }

  export type LOCALIDADESUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LOCALIDADESUncheckedUpdateManyInput = {
    id_localidad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_pais?: IntFieldUpdateOperationsInput | number
  }

  export type AREAS_TELEFONICASCreateInput = {
    codigo: string
    estudiantes?: ESTUDIANTESCreateNestedManyWithoutArea_telefonicaInput
  }

  export type AREAS_TELEFONICASUncheckedCreateInput = {
    id_area_telefonica?: number
    codigo: string
    estudiantes?: ESTUDIANTESUncheckedCreateNestedManyWithoutArea_telefonicaInput
  }

  export type AREAS_TELEFONICASUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    estudiantes?: ESTUDIANTESUpdateManyWithoutArea_telefonicaNestedInput
  }

  export type AREAS_TELEFONICASUncheckedUpdateInput = {
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    estudiantes?: ESTUDIANTESUncheckedUpdateManyWithoutArea_telefonicaNestedInput
  }

  export type AREAS_TELEFONICASCreateManyInput = {
    id_area_telefonica?: number
    codigo: string
  }

  export type AREAS_TELEFONICASUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type AREAS_TELEFONICASUncheckedUpdateManyInput = {
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type GENEROSCreateInput = {
    nombre: string
    estudiantes?: ESTUDIANTESCreateNestedManyWithoutGeneroInput
  }

  export type GENEROSUncheckedCreateInput = {
    id_genero?: number
    nombre: string
    estudiantes?: ESTUDIANTESUncheckedCreateNestedManyWithoutGeneroInput
  }

  export type GENEROSUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: ESTUDIANTESUpdateManyWithoutGeneroNestedInput
  }

  export type GENEROSUncheckedUpdateInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: ESTUDIANTESUncheckedUpdateManyWithoutGeneroNestedInput
  }

  export type GENEROSCreateManyInput = {
    id_genero?: number
    nombre: string
  }

  export type GENEROSUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GENEROSUncheckedUpdateManyInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CARRERASCreateInput = {
    nombre: string
    duracion: number
    titulo_otorgado: string
    materias?: MATERIASCreateNestedManyWithoutCarreraInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutCarreraInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutCarreraInput
  }

  export type CARRERASUncheckedCreateInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    titulo_otorgado: string
    materias?: MATERIASUncheckedCreateNestedManyWithoutCarreraInput
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutCarreraInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CARRERASUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
    materias?: MATERIASUpdateManyWithoutCarreraNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutCarreraNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutCarreraNestedInput
  }

  export type CARRERASUncheckedUpdateInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
    materias?: MATERIASUncheckedUpdateManyWithoutCarreraNestedInput
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutCarreraNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CARRERASCreateManyInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    titulo_otorgado: string
  }

  export type CARRERASUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
  }

  export type CARRERASUncheckedUpdateManyInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
  }

  export type MATERIASCreateInput = {
    nombre: string
    carrera: CARRERASCreateNestedOneWithoutMateriasInput
    cursadas?: CURSADASCreateNestedManyWithoutMateriaInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutMateriaInput
  }

  export type MATERIASUncheckedCreateInput = {
    id_materia?: number
    nombre: string
    id_carrera: number
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutMateriaInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MATERIASUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CARRERASUpdateOneRequiredWithoutMateriasNestedInput
    cursadas?: CURSADASUpdateManyWithoutMateriaNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutMateriaNestedInput
  }

  export type MATERIASUncheckedUpdateInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    cursadas?: CURSADASUncheckedUpdateManyWithoutMateriaNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MATERIASCreateManyInput = {
    id_materia?: number
    nombre: string
    id_carrera: number
  }

  export type MATERIASUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MATERIASUncheckedUpdateManyInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
  }

  export type CONDICIONESCreateInput = {
    nombre: string
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutCondicionInput
  }

  export type CONDICIONESUncheckedCreateInput = {
    id_condition?: number
    nombre: string
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutCondicionInput
  }

  export type CONDICIONESUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutCondicionNestedInput
  }

  export type CONDICIONESUncheckedUpdateInput = {
    id_condition?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutCondicionNestedInput
  }

  export type CONDICIONESCreateManyInput = {
    id_condition?: number
    nombre: string
  }

  export type CONDICIONESUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CONDICIONESUncheckedUpdateManyInput = {
    id_condition?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ESTUDIANTESCreateInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    pais: PAISESCreateNestedOneWithoutEstudiantesInput
    localidad: LOCALIDADESCreateNestedOneWithoutEstudiantesInput
    area_telefonica: AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput
    genero: GENEROSCreateNestedOneWithoutEstudiantesInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutEstudiantesNestedInput
    localidad?: LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput
    area_telefonica?: AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput
    genero?: GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESCreateManyInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
  }

  export type ESTUDIANTESUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ESTUDIANTESUncheckedUpdateManyInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type INSCRIPCIONESCreateInput = {
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
    estudiante: ESTUDIANTESCreateNestedOneWithoutInscripcionesInput
    carrera: CARRERASCreateNestedOneWithoutInscripcionesInput
  }

  export type INSCRIPCIONESUncheckedCreateInput = {
    id_inscripcion?: number
    id_estudiante: number
    id_carrera: number
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
  }

  export type INSCRIPCIONESUpdateInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutInscripcionesNestedInput
    carrera?: CARRERASUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type INSCRIPCIONESUncheckedUpdateInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type INSCRIPCIONESCreateManyInput = {
    id_inscripcion?: number
    id_estudiante: number
    id_carrera: number
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
  }

  export type INSCRIPCIONESUpdateManyMutationInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type INSCRIPCIONESUncheckedUpdateManyInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ESTUDIANTES_CARRERASCreateInput = {
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
    estudiante: ESTUDIANTESCreateNestedOneWithoutEstudiantes_carrerasInput
    carrera: CARRERASCreateNestedOneWithoutEstudiantes_carrerasInput
  }

  export type ESTUDIANTES_CARRERASUncheckedCreateInput = {
    id_ec?: number
    id_estudiante: number
    id_carrera: number
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
  }

  export type ESTUDIANTES_CARRERASUpdateInput = {
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutEstudiantes_carrerasNestedInput
    carrera?: CARRERASUpdateOneRequiredWithoutEstudiantes_carrerasNestedInput
  }

  export type ESTUDIANTES_CARRERASUncheckedUpdateInput = {
    id_ec?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ESTUDIANTES_CARRERASCreateManyInput = {
    id_ec?: number
    id_estudiante: number
    id_carrera: number
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
  }

  export type ESTUDIANTES_CARRERASUpdateManyMutationInput = {
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ESTUDIANTES_CARRERASUncheckedUpdateManyInput = {
    id_ec?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CURSADASCreateInput = {
    nota_final?: Decimal | DecimalJsLike | number | string | null
    estudiante: ESTUDIANTESCreateNestedOneWithoutCursadasInput
    materia: MATERIASCreateNestedOneWithoutCursadasInput
  }

  export type CURSADASUncheckedCreateInput = {
    id_cursada?: number
    id_estudiante: number
    id_materia: number
    nota_final?: Decimal | DecimalJsLike | number | string | null
  }

  export type CURSADASUpdateInput = {
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutCursadasNestedInput
    materia?: MATERIASUpdateOneRequiredWithoutCursadasNestedInput
  }

  export type CURSADASUncheckedUpdateInput = {
    id_cursada?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CURSADASCreateManyInput = {
    id_cursada?: number
    id_estudiante: number
    id_materia: number
    nota_final?: Decimal | DecimalJsLike | number | string | null
  }

  export type CURSADASUpdateManyMutationInput = {
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CURSADASUncheckedUpdateManyInput = {
    id_cursada?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CONDICIONES_MATERIASCreateInput = {
    estudiante: ESTUDIANTESCreateNestedOneWithoutCondiciones_materiasInput
    materia: MATERIASCreateNestedOneWithoutCondiciones_materiasInput
    condicion: CONDICIONESCreateNestedOneWithoutCondiciones_materiasInput
  }

  export type CONDICIONES_MATERIASUncheckedCreateInput = {
    id_cm?: number
    id_estudiante: number
    id_materia: number
    id_condition: number
  }

  export type CONDICIONES_MATERIASUpdateInput = {
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutCondiciones_materiasNestedInput
    materia?: MATERIASUpdateOneRequiredWithoutCondiciones_materiasNestedInput
    condicion?: CONDICIONESUpdateOneRequiredWithoutCondiciones_materiasNestedInput
  }

  export type CONDICIONES_MATERIASUncheckedUpdateInput = {
    id_cm?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    id_condition?: IntFieldUpdateOperationsInput | number
  }

  export type CONDICIONES_MATERIASCreateManyInput = {
    id_cm?: number
    id_estudiante: number
    id_materia: number
    id_condition: number
  }

  export type CONDICIONES_MATERIASUpdateManyMutationInput = {

  }

  export type CONDICIONES_MATERIASUncheckedUpdateManyInput = {
    id_cm?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    id_condition?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type LOCALIDADESListRelationFilter = {
    every?: LOCALIDADESWhereInput
    some?: LOCALIDADESWhereInput
    none?: LOCALIDADESWhereInput
  }

  export type ESTUDIANTESListRelationFilter = {
    every?: ESTUDIANTESWhereInput
    some?: ESTUDIANTESWhereInput
    none?: ESTUDIANTESWhereInput
  }

  export type LOCALIDADESOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ESTUDIANTESOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PAISESCountOrderByAggregateInput = {
    id_pais?: SortOrder
    nombre?: SortOrder
  }

  export type PAISESAvgOrderByAggregateInput = {
    id_pais?: SortOrder
  }

  export type PAISESMaxOrderByAggregateInput = {
    id_pais?: SortOrder
    nombre?: SortOrder
  }

  export type PAISESMinOrderByAggregateInput = {
    id_pais?: SortOrder
    nombre?: SortOrder
  }

  export type PAISESSumOrderByAggregateInput = {
    id_pais?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type PAISESScalarRelationFilter = {
    is?: PAISESWhereInput
    isNot?: PAISESWhereInput
  }

  export type LOCALIDADESCountOrderByAggregateInput = {
    id_localidad?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrder
  }

  export type LOCALIDADESAvgOrderByAggregateInput = {
    id_localidad?: SortOrder
    id_pais?: SortOrder
  }

  export type LOCALIDADESMaxOrderByAggregateInput = {
    id_localidad?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrder
  }

  export type LOCALIDADESMinOrderByAggregateInput = {
    id_localidad?: SortOrder
    nombre?: SortOrder
    id_pais?: SortOrder
  }

  export type LOCALIDADESSumOrderByAggregateInput = {
    id_localidad?: SortOrder
    id_pais?: SortOrder
  }

  export type AREAS_TELEFONICASCountOrderByAggregateInput = {
    id_area_telefonica?: SortOrder
    codigo?: SortOrder
  }

  export type AREAS_TELEFONICASAvgOrderByAggregateInput = {
    id_area_telefonica?: SortOrder
  }

  export type AREAS_TELEFONICASMaxOrderByAggregateInput = {
    id_area_telefonica?: SortOrder
    codigo?: SortOrder
  }

  export type AREAS_TELEFONICASMinOrderByAggregateInput = {
    id_area_telefonica?: SortOrder
    codigo?: SortOrder
  }

  export type AREAS_TELEFONICASSumOrderByAggregateInput = {
    id_area_telefonica?: SortOrder
  }

  export type GENEROSCountOrderByAggregateInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
  }

  export type GENEROSAvgOrderByAggregateInput = {
    id_genero?: SortOrder
  }

  export type GENEROSMaxOrderByAggregateInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
  }

  export type GENEROSMinOrderByAggregateInput = {
    id_genero?: SortOrder
    nombre?: SortOrder
  }

  export type GENEROSSumOrderByAggregateInput = {
    id_genero?: SortOrder
  }

  export type MATERIASListRelationFilter = {
    every?: MATERIASWhereInput
    some?: MATERIASWhereInput
    none?: MATERIASWhereInput
  }

  export type INSCRIPCIONESListRelationFilter = {
    every?: INSCRIPCIONESWhereInput
    some?: INSCRIPCIONESWhereInput
    none?: INSCRIPCIONESWhereInput
  }

  export type ESTUDIANTES_CARRERASListRelationFilter = {
    every?: ESTUDIANTES_CARRERASWhereInput
    some?: ESTUDIANTES_CARRERASWhereInput
    none?: ESTUDIANTES_CARRERASWhereInput
  }

  export type MATERIASOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type INSCRIPCIONESOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ESTUDIANTES_CARRERASOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CARRERASCountOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    titulo_otorgado?: SortOrder
  }

  export type CARRERASAvgOrderByAggregateInput = {
    id_carrera?: SortOrder
    duracion?: SortOrder
  }

  export type CARRERASMaxOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    titulo_otorgado?: SortOrder
  }

  export type CARRERASMinOrderByAggregateInput = {
    id_carrera?: SortOrder
    nombre?: SortOrder
    duracion?: SortOrder
    titulo_otorgado?: SortOrder
  }

  export type CARRERASSumOrderByAggregateInput = {
    id_carrera?: SortOrder
    duracion?: SortOrder
  }

  export type CARRERASScalarRelationFilter = {
    is?: CARRERASWhereInput
    isNot?: CARRERASWhereInput
  }

  export type CURSADASListRelationFilter = {
    every?: CURSADASWhereInput
    some?: CURSADASWhereInput
    none?: CURSADASWhereInput
  }

  export type CONDICIONES_MATERIASListRelationFilter = {
    every?: CONDICIONES_MATERIASWhereInput
    some?: CONDICIONES_MATERIASWhereInput
    none?: CONDICIONES_MATERIASWhereInput
  }

  export type CURSADASOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CONDICIONES_MATERIASOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MATERIASCountOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    id_carrera?: SortOrder
  }

  export type MATERIASAvgOrderByAggregateInput = {
    id_materia?: SortOrder
    id_carrera?: SortOrder
  }

  export type MATERIASMaxOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    id_carrera?: SortOrder
  }

  export type MATERIASMinOrderByAggregateInput = {
    id_materia?: SortOrder
    nombre?: SortOrder
    id_carrera?: SortOrder
  }

  export type MATERIASSumOrderByAggregateInput = {
    id_materia?: SortOrder
    id_carrera?: SortOrder
  }

  export type CONDICIONESCountOrderByAggregateInput = {
    id_condition?: SortOrder
    nombre?: SortOrder
  }

  export type CONDICIONESAvgOrderByAggregateInput = {
    id_condition?: SortOrder
  }

  export type CONDICIONESMaxOrderByAggregateInput = {
    id_condition?: SortOrder
    nombre?: SortOrder
  }

  export type CONDICIONESMinOrderByAggregateInput = {
    id_condition?: SortOrder
    nombre?: SortOrder
  }

  export type CONDICIONESSumOrderByAggregateInput = {
    id_condition?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LOCALIDADESScalarRelationFilter = {
    is?: LOCALIDADESWhereInput
    isNot?: LOCALIDADESWhereInput
  }

  export type AREAS_TELEFONICASScalarRelationFilter = {
    is?: AREAS_TELEFONICASWhereInput
    isNot?: AREAS_TELEFONICASWhereInput
  }

  export type GENEROSScalarRelationFilter = {
    is?: GENEROSWhereInput
    isNot?: GENEROSWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ESTUDIANTESCountOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_pais?: SortOrder
    id_localidad?: SortOrder
    id_area_telefonica?: SortOrder
    id_genero?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    domicilio?: SortOrder
    fecha_ingreso?: SortOrder
    cohorte?: SortOrder
    secundario?: SortOrder
    cuil?: SortOrder
    examen_mayores25?: SortOrder
    solicito_beca?: SortOrder
    trabajador?: SortOrder
    persona_a_cargo?: SortOrder
    observaciones?: SortOrder
    estado?: SortOrder
  }

  export type ESTUDIANTESAvgOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_pais?: SortOrder
    id_localidad?: SortOrder
    id_area_telefonica?: SortOrder
    id_genero?: SortOrder
  }

  export type ESTUDIANTESMaxOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_pais?: SortOrder
    id_localidad?: SortOrder
    id_area_telefonica?: SortOrder
    id_genero?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    domicilio?: SortOrder
    fecha_ingreso?: SortOrder
    cohorte?: SortOrder
    secundario?: SortOrder
    cuil?: SortOrder
    examen_mayores25?: SortOrder
    solicito_beca?: SortOrder
    trabajador?: SortOrder
    persona_a_cargo?: SortOrder
    observaciones?: SortOrder
    estado?: SortOrder
  }

  export type ESTUDIANTESMinOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_pais?: SortOrder
    id_localidad?: SortOrder
    id_area_telefonica?: SortOrder
    id_genero?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    domicilio?: SortOrder
    fecha_ingreso?: SortOrder
    cohorte?: SortOrder
    secundario?: SortOrder
    cuil?: SortOrder
    examen_mayores25?: SortOrder
    solicito_beca?: SortOrder
    trabajador?: SortOrder
    persona_a_cargo?: SortOrder
    observaciones?: SortOrder
    estado?: SortOrder
  }

  export type ESTUDIANTESSumOrderByAggregateInput = {
    id_estudiante?: SortOrder
    id_pais?: SortOrder
    id_localidad?: SortOrder
    id_area_telefonica?: SortOrder
    id_genero?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ESTUDIANTESScalarRelationFilter = {
    is?: ESTUDIANTESWhereInput
    isNot?: ESTUDIANTESWhereInput
  }

  export type INSCRIPCIONESCountOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
    causa_inactividad?: SortOrder
  }

  export type INSCRIPCIONESAvgOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
  }

  export type INSCRIPCIONESMaxOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
    causa_inactividad?: SortOrder
  }

  export type INSCRIPCIONESMinOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_inscripcion?: SortOrder
    estado?: SortOrder
    causa_inactividad?: SortOrder
  }

  export type INSCRIPCIONESSumOrderByAggregateInput = {
    id_inscripcion?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ESTUDIANTES_CARRERASCountOrderByAggregateInput = {
    id_ec?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_alta?: SortOrder
    fecha_baja?: SortOrder
  }

  export type ESTUDIANTES_CARRERASAvgOrderByAggregateInput = {
    id_ec?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
  }

  export type ESTUDIANTES_CARRERASMaxOrderByAggregateInput = {
    id_ec?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_alta?: SortOrder
    fecha_baja?: SortOrder
  }

  export type ESTUDIANTES_CARRERASMinOrderByAggregateInput = {
    id_ec?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
    fecha_alta?: SortOrder
    fecha_baja?: SortOrder
  }

  export type ESTUDIANTES_CARRERASSumOrderByAggregateInput = {
    id_ec?: SortOrder
    id_estudiante?: SortOrder
    id_carrera?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type MATERIASScalarRelationFilter = {
    is?: MATERIASWhereInput
    isNot?: MATERIASWhereInput
  }

  export type CURSADASCountOrderByAggregateInput = {
    id_cursada?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    nota_final?: SortOrder
  }

  export type CURSADASAvgOrderByAggregateInput = {
    id_cursada?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    nota_final?: SortOrder
  }

  export type CURSADASMaxOrderByAggregateInput = {
    id_cursada?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    nota_final?: SortOrder
  }

  export type CURSADASMinOrderByAggregateInput = {
    id_cursada?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    nota_final?: SortOrder
  }

  export type CURSADASSumOrderByAggregateInput = {
    id_cursada?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    nota_final?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type CONDICIONESScalarRelationFilter = {
    is?: CONDICIONESWhereInput
    isNot?: CONDICIONESWhereInput
  }

  export type CONDICIONES_MATERIASCountOrderByAggregateInput = {
    id_cm?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_condition?: SortOrder
  }

  export type CONDICIONES_MATERIASAvgOrderByAggregateInput = {
    id_cm?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_condition?: SortOrder
  }

  export type CONDICIONES_MATERIASMaxOrderByAggregateInput = {
    id_cm?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_condition?: SortOrder
  }

  export type CONDICIONES_MATERIASMinOrderByAggregateInput = {
    id_cm?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_condition?: SortOrder
  }

  export type CONDICIONES_MATERIASSumOrderByAggregateInput = {
    id_cm?: SortOrder
    id_estudiante?: SortOrder
    id_materia?: SortOrder
    id_condition?: SortOrder
  }

  export type LOCALIDADESCreateNestedManyWithoutPaisInput = {
    create?: XOR<LOCALIDADESCreateWithoutPaisInput, LOCALIDADESUncheckedCreateWithoutPaisInput> | LOCALIDADESCreateWithoutPaisInput[] | LOCALIDADESUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: LOCALIDADESCreateOrConnectWithoutPaisInput | LOCALIDADESCreateOrConnectWithoutPaisInput[]
    createMany?: LOCALIDADESCreateManyPaisInputEnvelope
    connect?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
  }

  export type ESTUDIANTESCreateNestedManyWithoutPaisInput = {
    create?: XOR<ESTUDIANTESCreateWithoutPaisInput, ESTUDIANTESUncheckedCreateWithoutPaisInput> | ESTUDIANTESCreateWithoutPaisInput[] | ESTUDIANTESUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutPaisInput | ESTUDIANTESCreateOrConnectWithoutPaisInput[]
    createMany?: ESTUDIANTESCreateManyPaisInputEnvelope
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
  }

  export type LOCALIDADESUncheckedCreateNestedManyWithoutPaisInput = {
    create?: XOR<LOCALIDADESCreateWithoutPaisInput, LOCALIDADESUncheckedCreateWithoutPaisInput> | LOCALIDADESCreateWithoutPaisInput[] | LOCALIDADESUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: LOCALIDADESCreateOrConnectWithoutPaisInput | LOCALIDADESCreateOrConnectWithoutPaisInput[]
    createMany?: LOCALIDADESCreateManyPaisInputEnvelope
    connect?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
  }

  export type ESTUDIANTESUncheckedCreateNestedManyWithoutPaisInput = {
    create?: XOR<ESTUDIANTESCreateWithoutPaisInput, ESTUDIANTESUncheckedCreateWithoutPaisInput> | ESTUDIANTESCreateWithoutPaisInput[] | ESTUDIANTESUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutPaisInput | ESTUDIANTESCreateOrConnectWithoutPaisInput[]
    createMany?: ESTUDIANTESCreateManyPaisInputEnvelope
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LOCALIDADESUpdateManyWithoutPaisNestedInput = {
    create?: XOR<LOCALIDADESCreateWithoutPaisInput, LOCALIDADESUncheckedCreateWithoutPaisInput> | LOCALIDADESCreateWithoutPaisInput[] | LOCALIDADESUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: LOCALIDADESCreateOrConnectWithoutPaisInput | LOCALIDADESCreateOrConnectWithoutPaisInput[]
    upsert?: LOCALIDADESUpsertWithWhereUniqueWithoutPaisInput | LOCALIDADESUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: LOCALIDADESCreateManyPaisInputEnvelope
    set?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
    disconnect?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
    delete?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
    connect?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
    update?: LOCALIDADESUpdateWithWhereUniqueWithoutPaisInput | LOCALIDADESUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: LOCALIDADESUpdateManyWithWhereWithoutPaisInput | LOCALIDADESUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: LOCALIDADESScalarWhereInput | LOCALIDADESScalarWhereInput[]
  }

  export type ESTUDIANTESUpdateManyWithoutPaisNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutPaisInput, ESTUDIANTESUncheckedCreateWithoutPaisInput> | ESTUDIANTESCreateWithoutPaisInput[] | ESTUDIANTESUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutPaisInput | ESTUDIANTESCreateOrConnectWithoutPaisInput[]
    upsert?: ESTUDIANTESUpsertWithWhereUniqueWithoutPaisInput | ESTUDIANTESUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: ESTUDIANTESCreateManyPaisInputEnvelope
    set?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    disconnect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    delete?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    update?: ESTUDIANTESUpdateWithWhereUniqueWithoutPaisInput | ESTUDIANTESUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: ESTUDIANTESUpdateManyWithWhereWithoutPaisInput | ESTUDIANTESUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LOCALIDADESUncheckedUpdateManyWithoutPaisNestedInput = {
    create?: XOR<LOCALIDADESCreateWithoutPaisInput, LOCALIDADESUncheckedCreateWithoutPaisInput> | LOCALIDADESCreateWithoutPaisInput[] | LOCALIDADESUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: LOCALIDADESCreateOrConnectWithoutPaisInput | LOCALIDADESCreateOrConnectWithoutPaisInput[]
    upsert?: LOCALIDADESUpsertWithWhereUniqueWithoutPaisInput | LOCALIDADESUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: LOCALIDADESCreateManyPaisInputEnvelope
    set?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
    disconnect?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
    delete?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
    connect?: LOCALIDADESWhereUniqueInput | LOCALIDADESWhereUniqueInput[]
    update?: LOCALIDADESUpdateWithWhereUniqueWithoutPaisInput | LOCALIDADESUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: LOCALIDADESUpdateManyWithWhereWithoutPaisInput | LOCALIDADESUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: LOCALIDADESScalarWhereInput | LOCALIDADESScalarWhereInput[]
  }

  export type ESTUDIANTESUncheckedUpdateManyWithoutPaisNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutPaisInput, ESTUDIANTESUncheckedCreateWithoutPaisInput> | ESTUDIANTESCreateWithoutPaisInput[] | ESTUDIANTESUncheckedCreateWithoutPaisInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutPaisInput | ESTUDIANTESCreateOrConnectWithoutPaisInput[]
    upsert?: ESTUDIANTESUpsertWithWhereUniqueWithoutPaisInput | ESTUDIANTESUpsertWithWhereUniqueWithoutPaisInput[]
    createMany?: ESTUDIANTESCreateManyPaisInputEnvelope
    set?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    disconnect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    delete?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    update?: ESTUDIANTESUpdateWithWhereUniqueWithoutPaisInput | ESTUDIANTESUpdateWithWhereUniqueWithoutPaisInput[]
    updateMany?: ESTUDIANTESUpdateManyWithWhereWithoutPaisInput | ESTUDIANTESUpdateManyWithWhereWithoutPaisInput[]
    deleteMany?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
  }

  export type PAISESCreateNestedOneWithoutLocalidadesInput = {
    create?: XOR<PAISESCreateWithoutLocalidadesInput, PAISESUncheckedCreateWithoutLocalidadesInput>
    connectOrCreate?: PAISESCreateOrConnectWithoutLocalidadesInput
    connect?: PAISESWhereUniqueInput
  }

  export type ESTUDIANTESCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<ESTUDIANTESCreateWithoutLocalidadInput, ESTUDIANTESUncheckedCreateWithoutLocalidadInput> | ESTUDIANTESCreateWithoutLocalidadInput[] | ESTUDIANTESUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutLocalidadInput | ESTUDIANTESCreateOrConnectWithoutLocalidadInput[]
    createMany?: ESTUDIANTESCreateManyLocalidadInputEnvelope
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
  }

  export type ESTUDIANTESUncheckedCreateNestedManyWithoutLocalidadInput = {
    create?: XOR<ESTUDIANTESCreateWithoutLocalidadInput, ESTUDIANTESUncheckedCreateWithoutLocalidadInput> | ESTUDIANTESCreateWithoutLocalidadInput[] | ESTUDIANTESUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutLocalidadInput | ESTUDIANTESCreateOrConnectWithoutLocalidadInput[]
    createMany?: ESTUDIANTESCreateManyLocalidadInputEnvelope
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
  }

  export type PAISESUpdateOneRequiredWithoutLocalidadesNestedInput = {
    create?: XOR<PAISESCreateWithoutLocalidadesInput, PAISESUncheckedCreateWithoutLocalidadesInput>
    connectOrCreate?: PAISESCreateOrConnectWithoutLocalidadesInput
    upsert?: PAISESUpsertWithoutLocalidadesInput
    connect?: PAISESWhereUniqueInput
    update?: XOR<XOR<PAISESUpdateToOneWithWhereWithoutLocalidadesInput, PAISESUpdateWithoutLocalidadesInput>, PAISESUncheckedUpdateWithoutLocalidadesInput>
  }

  export type ESTUDIANTESUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutLocalidadInput, ESTUDIANTESUncheckedCreateWithoutLocalidadInput> | ESTUDIANTESCreateWithoutLocalidadInput[] | ESTUDIANTESUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutLocalidadInput | ESTUDIANTESCreateOrConnectWithoutLocalidadInput[]
    upsert?: ESTUDIANTESUpsertWithWhereUniqueWithoutLocalidadInput | ESTUDIANTESUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: ESTUDIANTESCreateManyLocalidadInputEnvelope
    set?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    disconnect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    delete?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    update?: ESTUDIANTESUpdateWithWhereUniqueWithoutLocalidadInput | ESTUDIANTESUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: ESTUDIANTESUpdateManyWithWhereWithoutLocalidadInput | ESTUDIANTESUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
  }

  export type ESTUDIANTESUncheckedUpdateManyWithoutLocalidadNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutLocalidadInput, ESTUDIANTESUncheckedCreateWithoutLocalidadInput> | ESTUDIANTESCreateWithoutLocalidadInput[] | ESTUDIANTESUncheckedCreateWithoutLocalidadInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutLocalidadInput | ESTUDIANTESCreateOrConnectWithoutLocalidadInput[]
    upsert?: ESTUDIANTESUpsertWithWhereUniqueWithoutLocalidadInput | ESTUDIANTESUpsertWithWhereUniqueWithoutLocalidadInput[]
    createMany?: ESTUDIANTESCreateManyLocalidadInputEnvelope
    set?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    disconnect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    delete?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    update?: ESTUDIANTESUpdateWithWhereUniqueWithoutLocalidadInput | ESTUDIANTESUpdateWithWhereUniqueWithoutLocalidadInput[]
    updateMany?: ESTUDIANTESUpdateManyWithWhereWithoutLocalidadInput | ESTUDIANTESUpdateManyWithWhereWithoutLocalidadInput[]
    deleteMany?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
  }

  export type ESTUDIANTESCreateNestedManyWithoutArea_telefonicaInput = {
    create?: XOR<ESTUDIANTESCreateWithoutArea_telefonicaInput, ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput> | ESTUDIANTESCreateWithoutArea_telefonicaInput[] | ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput | ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput[]
    createMany?: ESTUDIANTESCreateManyArea_telefonicaInputEnvelope
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
  }

  export type ESTUDIANTESUncheckedCreateNestedManyWithoutArea_telefonicaInput = {
    create?: XOR<ESTUDIANTESCreateWithoutArea_telefonicaInput, ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput> | ESTUDIANTESCreateWithoutArea_telefonicaInput[] | ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput | ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput[]
    createMany?: ESTUDIANTESCreateManyArea_telefonicaInputEnvelope
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
  }

  export type ESTUDIANTESUpdateManyWithoutArea_telefonicaNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutArea_telefonicaInput, ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput> | ESTUDIANTESCreateWithoutArea_telefonicaInput[] | ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput | ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput[]
    upsert?: ESTUDIANTESUpsertWithWhereUniqueWithoutArea_telefonicaInput | ESTUDIANTESUpsertWithWhereUniqueWithoutArea_telefonicaInput[]
    createMany?: ESTUDIANTESCreateManyArea_telefonicaInputEnvelope
    set?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    disconnect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    delete?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    update?: ESTUDIANTESUpdateWithWhereUniqueWithoutArea_telefonicaInput | ESTUDIANTESUpdateWithWhereUniqueWithoutArea_telefonicaInput[]
    updateMany?: ESTUDIANTESUpdateManyWithWhereWithoutArea_telefonicaInput | ESTUDIANTESUpdateManyWithWhereWithoutArea_telefonicaInput[]
    deleteMany?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
  }

  export type ESTUDIANTESUncheckedUpdateManyWithoutArea_telefonicaNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutArea_telefonicaInput, ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput> | ESTUDIANTESCreateWithoutArea_telefonicaInput[] | ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput | ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput[]
    upsert?: ESTUDIANTESUpsertWithWhereUniqueWithoutArea_telefonicaInput | ESTUDIANTESUpsertWithWhereUniqueWithoutArea_telefonicaInput[]
    createMany?: ESTUDIANTESCreateManyArea_telefonicaInputEnvelope
    set?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    disconnect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    delete?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    update?: ESTUDIANTESUpdateWithWhereUniqueWithoutArea_telefonicaInput | ESTUDIANTESUpdateWithWhereUniqueWithoutArea_telefonicaInput[]
    updateMany?: ESTUDIANTESUpdateManyWithWhereWithoutArea_telefonicaInput | ESTUDIANTESUpdateManyWithWhereWithoutArea_telefonicaInput[]
    deleteMany?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
  }

  export type ESTUDIANTESCreateNestedManyWithoutGeneroInput = {
    create?: XOR<ESTUDIANTESCreateWithoutGeneroInput, ESTUDIANTESUncheckedCreateWithoutGeneroInput> | ESTUDIANTESCreateWithoutGeneroInput[] | ESTUDIANTESUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutGeneroInput | ESTUDIANTESCreateOrConnectWithoutGeneroInput[]
    createMany?: ESTUDIANTESCreateManyGeneroInputEnvelope
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
  }

  export type ESTUDIANTESUncheckedCreateNestedManyWithoutGeneroInput = {
    create?: XOR<ESTUDIANTESCreateWithoutGeneroInput, ESTUDIANTESUncheckedCreateWithoutGeneroInput> | ESTUDIANTESCreateWithoutGeneroInput[] | ESTUDIANTESUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutGeneroInput | ESTUDIANTESCreateOrConnectWithoutGeneroInput[]
    createMany?: ESTUDIANTESCreateManyGeneroInputEnvelope
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
  }

  export type ESTUDIANTESUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutGeneroInput, ESTUDIANTESUncheckedCreateWithoutGeneroInput> | ESTUDIANTESCreateWithoutGeneroInput[] | ESTUDIANTESUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutGeneroInput | ESTUDIANTESCreateOrConnectWithoutGeneroInput[]
    upsert?: ESTUDIANTESUpsertWithWhereUniqueWithoutGeneroInput | ESTUDIANTESUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: ESTUDIANTESCreateManyGeneroInputEnvelope
    set?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    disconnect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    delete?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    update?: ESTUDIANTESUpdateWithWhereUniqueWithoutGeneroInput | ESTUDIANTESUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: ESTUDIANTESUpdateManyWithWhereWithoutGeneroInput | ESTUDIANTESUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
  }

  export type ESTUDIANTESUncheckedUpdateManyWithoutGeneroNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutGeneroInput, ESTUDIANTESUncheckedCreateWithoutGeneroInput> | ESTUDIANTESCreateWithoutGeneroInput[] | ESTUDIANTESUncheckedCreateWithoutGeneroInput[]
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutGeneroInput | ESTUDIANTESCreateOrConnectWithoutGeneroInput[]
    upsert?: ESTUDIANTESUpsertWithWhereUniqueWithoutGeneroInput | ESTUDIANTESUpsertWithWhereUniqueWithoutGeneroInput[]
    createMany?: ESTUDIANTESCreateManyGeneroInputEnvelope
    set?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    disconnect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    delete?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    connect?: ESTUDIANTESWhereUniqueInput | ESTUDIANTESWhereUniqueInput[]
    update?: ESTUDIANTESUpdateWithWhereUniqueWithoutGeneroInput | ESTUDIANTESUpdateWithWhereUniqueWithoutGeneroInput[]
    updateMany?: ESTUDIANTESUpdateManyWithWhereWithoutGeneroInput | ESTUDIANTESUpdateManyWithWhereWithoutGeneroInput[]
    deleteMany?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
  }

  export type MATERIASCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MATERIASCreateWithoutCarreraInput, MATERIASUncheckedCreateWithoutCarreraInput> | MATERIASCreateWithoutCarreraInput[] | MATERIASUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MATERIASCreateOrConnectWithoutCarreraInput | MATERIASCreateOrConnectWithoutCarreraInput[]
    createMany?: MATERIASCreateManyCarreraInputEnvelope
    connect?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
  }

  export type INSCRIPCIONESCreateNestedManyWithoutCarreraInput = {
    create?: XOR<INSCRIPCIONESCreateWithoutCarreraInput, INSCRIPCIONESUncheckedCreateWithoutCarreraInput> | INSCRIPCIONESCreateWithoutCarreraInput[] | INSCRIPCIONESUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: INSCRIPCIONESCreateOrConnectWithoutCarreraInput | INSCRIPCIONESCreateOrConnectWithoutCarreraInput[]
    createMany?: INSCRIPCIONESCreateManyCarreraInputEnvelope
    connect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
  }

  export type ESTUDIANTES_CARRERASCreateNestedManyWithoutCarreraInput = {
    create?: XOR<ESTUDIANTES_CARRERASCreateWithoutCarreraInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput> | ESTUDIANTES_CARRERASCreateWithoutCarreraInput[] | ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput | ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput[]
    createMany?: ESTUDIANTES_CARRERASCreateManyCarreraInputEnvelope
    connect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
  }

  export type MATERIASUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<MATERIASCreateWithoutCarreraInput, MATERIASUncheckedCreateWithoutCarreraInput> | MATERIASCreateWithoutCarreraInput[] | MATERIASUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MATERIASCreateOrConnectWithoutCarreraInput | MATERIASCreateOrConnectWithoutCarreraInput[]
    createMany?: MATERIASCreateManyCarreraInputEnvelope
    connect?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
  }

  export type INSCRIPCIONESUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<INSCRIPCIONESCreateWithoutCarreraInput, INSCRIPCIONESUncheckedCreateWithoutCarreraInput> | INSCRIPCIONESCreateWithoutCarreraInput[] | INSCRIPCIONESUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: INSCRIPCIONESCreateOrConnectWithoutCarreraInput | INSCRIPCIONESCreateOrConnectWithoutCarreraInput[]
    createMany?: INSCRIPCIONESCreateManyCarreraInputEnvelope
    connect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
  }

  export type ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutCarreraInput = {
    create?: XOR<ESTUDIANTES_CARRERASCreateWithoutCarreraInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput> | ESTUDIANTES_CARRERASCreateWithoutCarreraInput[] | ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput | ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput[]
    createMany?: ESTUDIANTES_CARRERASCreateManyCarreraInputEnvelope
    connect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
  }

  export type MATERIASUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MATERIASCreateWithoutCarreraInput, MATERIASUncheckedCreateWithoutCarreraInput> | MATERIASCreateWithoutCarreraInput[] | MATERIASUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MATERIASCreateOrConnectWithoutCarreraInput | MATERIASCreateOrConnectWithoutCarreraInput[]
    upsert?: MATERIASUpsertWithWhereUniqueWithoutCarreraInput | MATERIASUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MATERIASCreateManyCarreraInputEnvelope
    set?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
    disconnect?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
    delete?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
    connect?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
    update?: MATERIASUpdateWithWhereUniqueWithoutCarreraInput | MATERIASUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MATERIASUpdateManyWithWhereWithoutCarreraInput | MATERIASUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MATERIASScalarWhereInput | MATERIASScalarWhereInput[]
  }

  export type INSCRIPCIONESUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<INSCRIPCIONESCreateWithoutCarreraInput, INSCRIPCIONESUncheckedCreateWithoutCarreraInput> | INSCRIPCIONESCreateWithoutCarreraInput[] | INSCRIPCIONESUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: INSCRIPCIONESCreateOrConnectWithoutCarreraInput | INSCRIPCIONESCreateOrConnectWithoutCarreraInput[]
    upsert?: INSCRIPCIONESUpsertWithWhereUniqueWithoutCarreraInput | INSCRIPCIONESUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: INSCRIPCIONESCreateManyCarreraInputEnvelope
    set?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    disconnect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    delete?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    connect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    update?: INSCRIPCIONESUpdateWithWhereUniqueWithoutCarreraInput | INSCRIPCIONESUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: INSCRIPCIONESUpdateManyWithWhereWithoutCarreraInput | INSCRIPCIONESUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: INSCRIPCIONESScalarWhereInput | INSCRIPCIONESScalarWhereInput[]
  }

  export type ESTUDIANTES_CARRERASUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<ESTUDIANTES_CARRERASCreateWithoutCarreraInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput> | ESTUDIANTES_CARRERASCreateWithoutCarreraInput[] | ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput | ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput[]
    upsert?: ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutCarreraInput | ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: ESTUDIANTES_CARRERASCreateManyCarreraInputEnvelope
    set?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    disconnect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    delete?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    connect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    update?: ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutCarreraInput | ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutCarreraInput | ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: ESTUDIANTES_CARRERASScalarWhereInput | ESTUDIANTES_CARRERASScalarWhereInput[]
  }

  export type MATERIASUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<MATERIASCreateWithoutCarreraInput, MATERIASUncheckedCreateWithoutCarreraInput> | MATERIASCreateWithoutCarreraInput[] | MATERIASUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: MATERIASCreateOrConnectWithoutCarreraInput | MATERIASCreateOrConnectWithoutCarreraInput[]
    upsert?: MATERIASUpsertWithWhereUniqueWithoutCarreraInput | MATERIASUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: MATERIASCreateManyCarreraInputEnvelope
    set?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
    disconnect?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
    delete?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
    connect?: MATERIASWhereUniqueInput | MATERIASWhereUniqueInput[]
    update?: MATERIASUpdateWithWhereUniqueWithoutCarreraInput | MATERIASUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: MATERIASUpdateManyWithWhereWithoutCarreraInput | MATERIASUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: MATERIASScalarWhereInput | MATERIASScalarWhereInput[]
  }

  export type INSCRIPCIONESUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<INSCRIPCIONESCreateWithoutCarreraInput, INSCRIPCIONESUncheckedCreateWithoutCarreraInput> | INSCRIPCIONESCreateWithoutCarreraInput[] | INSCRIPCIONESUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: INSCRIPCIONESCreateOrConnectWithoutCarreraInput | INSCRIPCIONESCreateOrConnectWithoutCarreraInput[]
    upsert?: INSCRIPCIONESUpsertWithWhereUniqueWithoutCarreraInput | INSCRIPCIONESUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: INSCRIPCIONESCreateManyCarreraInputEnvelope
    set?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    disconnect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    delete?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    connect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    update?: INSCRIPCIONESUpdateWithWhereUniqueWithoutCarreraInput | INSCRIPCIONESUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: INSCRIPCIONESUpdateManyWithWhereWithoutCarreraInput | INSCRIPCIONESUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: INSCRIPCIONESScalarWhereInput | INSCRIPCIONESScalarWhereInput[]
  }

  export type ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutCarreraNestedInput = {
    create?: XOR<ESTUDIANTES_CARRERASCreateWithoutCarreraInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput> | ESTUDIANTES_CARRERASCreateWithoutCarreraInput[] | ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput[]
    connectOrCreate?: ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput | ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput[]
    upsert?: ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutCarreraInput | ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutCarreraInput[]
    createMany?: ESTUDIANTES_CARRERASCreateManyCarreraInputEnvelope
    set?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    disconnect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    delete?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    connect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    update?: ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutCarreraInput | ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutCarreraInput[]
    updateMany?: ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutCarreraInput | ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutCarreraInput[]
    deleteMany?: ESTUDIANTES_CARRERASScalarWhereInput | ESTUDIANTES_CARRERASScalarWhereInput[]
  }

  export type CARRERASCreateNestedOneWithoutMateriasInput = {
    create?: XOR<CARRERASCreateWithoutMateriasInput, CARRERASUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CARRERASCreateOrConnectWithoutMateriasInput
    connect?: CARRERASWhereUniqueInput
  }

  export type CURSADASCreateNestedManyWithoutMateriaInput = {
    create?: XOR<CURSADASCreateWithoutMateriaInput, CURSADASUncheckedCreateWithoutMateriaInput> | CURSADASCreateWithoutMateriaInput[] | CURSADASUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CURSADASCreateOrConnectWithoutMateriaInput | CURSADASCreateOrConnectWithoutMateriaInput[]
    createMany?: CURSADASCreateManyMateriaInputEnvelope
    connect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
  }

  export type CONDICIONES_MATERIASCreateNestedManyWithoutMateriaInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutMateriaInput, CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput> | CONDICIONES_MATERIASCreateWithoutMateriaInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput | CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput[]
    createMany?: CONDICIONES_MATERIASCreateManyMateriaInputEnvelope
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
  }

  export type CURSADASUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<CURSADASCreateWithoutMateriaInput, CURSADASUncheckedCreateWithoutMateriaInput> | CURSADASCreateWithoutMateriaInput[] | CURSADASUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CURSADASCreateOrConnectWithoutMateriaInput | CURSADASCreateOrConnectWithoutMateriaInput[]
    createMany?: CURSADASCreateManyMateriaInputEnvelope
    connect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
  }

  export type CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutMateriaInput, CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput> | CONDICIONES_MATERIASCreateWithoutMateriaInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput | CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput[]
    createMany?: CONDICIONES_MATERIASCreateManyMateriaInputEnvelope
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
  }

  export type CARRERASUpdateOneRequiredWithoutMateriasNestedInput = {
    create?: XOR<CARRERASCreateWithoutMateriasInput, CARRERASUncheckedCreateWithoutMateriasInput>
    connectOrCreate?: CARRERASCreateOrConnectWithoutMateriasInput
    upsert?: CARRERASUpsertWithoutMateriasInput
    connect?: CARRERASWhereUniqueInput
    update?: XOR<XOR<CARRERASUpdateToOneWithWhereWithoutMateriasInput, CARRERASUpdateWithoutMateriasInput>, CARRERASUncheckedUpdateWithoutMateriasInput>
  }

  export type CURSADASUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<CURSADASCreateWithoutMateriaInput, CURSADASUncheckedCreateWithoutMateriaInput> | CURSADASCreateWithoutMateriaInput[] | CURSADASUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CURSADASCreateOrConnectWithoutMateriaInput | CURSADASCreateOrConnectWithoutMateriaInput[]
    upsert?: CURSADASUpsertWithWhereUniqueWithoutMateriaInput | CURSADASUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: CURSADASCreateManyMateriaInputEnvelope
    set?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    disconnect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    delete?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    connect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    update?: CURSADASUpdateWithWhereUniqueWithoutMateriaInput | CURSADASUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: CURSADASUpdateManyWithWhereWithoutMateriaInput | CURSADASUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: CURSADASScalarWhereInput | CURSADASScalarWhereInput[]
  }

  export type CONDICIONES_MATERIASUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutMateriaInput, CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput> | CONDICIONES_MATERIASCreateWithoutMateriaInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput | CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput[]
    upsert?: CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutMateriaInput | CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: CONDICIONES_MATERIASCreateManyMateriaInputEnvelope
    set?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    disconnect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    delete?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    update?: CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutMateriaInput | CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: CONDICIONES_MATERIASUpdateManyWithWhereWithoutMateriaInput | CONDICIONES_MATERIASUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: CONDICIONES_MATERIASScalarWhereInput | CONDICIONES_MATERIASScalarWhereInput[]
  }

  export type CURSADASUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<CURSADASCreateWithoutMateriaInput, CURSADASUncheckedCreateWithoutMateriaInput> | CURSADASCreateWithoutMateriaInput[] | CURSADASUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CURSADASCreateOrConnectWithoutMateriaInput | CURSADASCreateOrConnectWithoutMateriaInput[]
    upsert?: CURSADASUpsertWithWhereUniqueWithoutMateriaInput | CURSADASUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: CURSADASCreateManyMateriaInputEnvelope
    set?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    disconnect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    delete?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    connect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    update?: CURSADASUpdateWithWhereUniqueWithoutMateriaInput | CURSADASUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: CURSADASUpdateManyWithWhereWithoutMateriaInput | CURSADASUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: CURSADASScalarWhereInput | CURSADASScalarWhereInput[]
  }

  export type CONDICIONES_MATERIASUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutMateriaInput, CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput> | CONDICIONES_MATERIASCreateWithoutMateriaInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput | CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput[]
    upsert?: CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutMateriaInput | CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutMateriaInput[]
    createMany?: CONDICIONES_MATERIASCreateManyMateriaInputEnvelope
    set?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    disconnect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    delete?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    update?: CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutMateriaInput | CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutMateriaInput[]
    updateMany?: CONDICIONES_MATERIASUpdateManyWithWhereWithoutMateriaInput | CONDICIONES_MATERIASUpdateManyWithWhereWithoutMateriaInput[]
    deleteMany?: CONDICIONES_MATERIASScalarWhereInput | CONDICIONES_MATERIASScalarWhereInput[]
  }

  export type CONDICIONES_MATERIASCreateNestedManyWithoutCondicionInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutCondicionInput, CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput> | CONDICIONES_MATERIASCreateWithoutCondicionInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput | CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput[]
    createMany?: CONDICIONES_MATERIASCreateManyCondicionInputEnvelope
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
  }

  export type CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutCondicionInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutCondicionInput, CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput> | CONDICIONES_MATERIASCreateWithoutCondicionInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput | CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput[]
    createMany?: CONDICIONES_MATERIASCreateManyCondicionInputEnvelope
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
  }

  export type CONDICIONES_MATERIASUpdateManyWithoutCondicionNestedInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutCondicionInput, CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput> | CONDICIONES_MATERIASCreateWithoutCondicionInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput | CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput[]
    upsert?: CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutCondicionInput | CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutCondicionInput[]
    createMany?: CONDICIONES_MATERIASCreateManyCondicionInputEnvelope
    set?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    disconnect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    delete?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    update?: CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutCondicionInput | CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutCondicionInput[]
    updateMany?: CONDICIONES_MATERIASUpdateManyWithWhereWithoutCondicionInput | CONDICIONES_MATERIASUpdateManyWithWhereWithoutCondicionInput[]
    deleteMany?: CONDICIONES_MATERIASScalarWhereInput | CONDICIONES_MATERIASScalarWhereInput[]
  }

  export type CONDICIONES_MATERIASUncheckedUpdateManyWithoutCondicionNestedInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutCondicionInput, CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput> | CONDICIONES_MATERIASCreateWithoutCondicionInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput | CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput[]
    upsert?: CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutCondicionInput | CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutCondicionInput[]
    createMany?: CONDICIONES_MATERIASCreateManyCondicionInputEnvelope
    set?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    disconnect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    delete?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    update?: CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutCondicionInput | CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutCondicionInput[]
    updateMany?: CONDICIONES_MATERIASUpdateManyWithWhereWithoutCondicionInput | CONDICIONES_MATERIASUpdateManyWithWhereWithoutCondicionInput[]
    deleteMany?: CONDICIONES_MATERIASScalarWhereInput | CONDICIONES_MATERIASScalarWhereInput[]
  }

  export type PAISESCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<PAISESCreateWithoutEstudiantesInput, PAISESUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: PAISESCreateOrConnectWithoutEstudiantesInput
    connect?: PAISESWhereUniqueInput
  }

  export type LOCALIDADESCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<LOCALIDADESCreateWithoutEstudiantesInput, LOCALIDADESUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: LOCALIDADESCreateOrConnectWithoutEstudiantesInput
    connect?: LOCALIDADESWhereUniqueInput
  }

  export type AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<AREAS_TELEFONICASCreateWithoutEstudiantesInput, AREAS_TELEFONICASUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: AREAS_TELEFONICASCreateOrConnectWithoutEstudiantesInput
    connect?: AREAS_TELEFONICASWhereUniqueInput
  }

  export type GENEROSCreateNestedOneWithoutEstudiantesInput = {
    create?: XOR<GENEROSCreateWithoutEstudiantesInput, GENEROSUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: GENEROSCreateOrConnectWithoutEstudiantesInput
    connect?: GENEROSWhereUniqueInput
  }

  export type INSCRIPCIONESCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<INSCRIPCIONESCreateWithoutEstudianteInput, INSCRIPCIONESUncheckedCreateWithoutEstudianteInput> | INSCRIPCIONESCreateWithoutEstudianteInput[] | INSCRIPCIONESUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: INSCRIPCIONESCreateOrConnectWithoutEstudianteInput | INSCRIPCIONESCreateOrConnectWithoutEstudianteInput[]
    createMany?: INSCRIPCIONESCreateManyEstudianteInputEnvelope
    connect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
  }

  export type ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<ESTUDIANTES_CARRERASCreateWithoutEstudianteInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput> | ESTUDIANTES_CARRERASCreateWithoutEstudianteInput[] | ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput | ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput[]
    createMany?: ESTUDIANTES_CARRERASCreateManyEstudianteInputEnvelope
    connect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
  }

  export type CURSADASCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<CURSADASCreateWithoutEstudianteInput, CURSADASUncheckedCreateWithoutEstudianteInput> | CURSADASCreateWithoutEstudianteInput[] | CURSADASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CURSADASCreateOrConnectWithoutEstudianteInput | CURSADASCreateOrConnectWithoutEstudianteInput[]
    createMany?: CURSADASCreateManyEstudianteInputEnvelope
    connect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
  }

  export type CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutEstudianteInput, CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput> | CONDICIONES_MATERIASCreateWithoutEstudianteInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput | CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput[]
    createMany?: CONDICIONES_MATERIASCreateManyEstudianteInputEnvelope
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
  }

  export type INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<INSCRIPCIONESCreateWithoutEstudianteInput, INSCRIPCIONESUncheckedCreateWithoutEstudianteInput> | INSCRIPCIONESCreateWithoutEstudianteInput[] | INSCRIPCIONESUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: INSCRIPCIONESCreateOrConnectWithoutEstudianteInput | INSCRIPCIONESCreateOrConnectWithoutEstudianteInput[]
    createMany?: INSCRIPCIONESCreateManyEstudianteInputEnvelope
    connect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
  }

  export type ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<ESTUDIANTES_CARRERASCreateWithoutEstudianteInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput> | ESTUDIANTES_CARRERASCreateWithoutEstudianteInput[] | ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput | ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput[]
    createMany?: ESTUDIANTES_CARRERASCreateManyEstudianteInputEnvelope
    connect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
  }

  export type CURSADASUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<CURSADASCreateWithoutEstudianteInput, CURSADASUncheckedCreateWithoutEstudianteInput> | CURSADASCreateWithoutEstudianteInput[] | CURSADASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CURSADASCreateOrConnectWithoutEstudianteInput | CURSADASCreateOrConnectWithoutEstudianteInput[]
    createMany?: CURSADASCreateManyEstudianteInputEnvelope
    connect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
  }

  export type CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutEstudianteInput, CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput> | CONDICIONES_MATERIASCreateWithoutEstudianteInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput | CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput[]
    createMany?: CONDICIONES_MATERIASCreateManyEstudianteInputEnvelope
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PAISESUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<PAISESCreateWithoutEstudiantesInput, PAISESUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: PAISESCreateOrConnectWithoutEstudiantesInput
    upsert?: PAISESUpsertWithoutEstudiantesInput
    connect?: PAISESWhereUniqueInput
    update?: XOR<XOR<PAISESUpdateToOneWithWhereWithoutEstudiantesInput, PAISESUpdateWithoutEstudiantesInput>, PAISESUncheckedUpdateWithoutEstudiantesInput>
  }

  export type LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<LOCALIDADESCreateWithoutEstudiantesInput, LOCALIDADESUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: LOCALIDADESCreateOrConnectWithoutEstudiantesInput
    upsert?: LOCALIDADESUpsertWithoutEstudiantesInput
    connect?: LOCALIDADESWhereUniqueInput
    update?: XOR<XOR<LOCALIDADESUpdateToOneWithWhereWithoutEstudiantesInput, LOCALIDADESUpdateWithoutEstudiantesInput>, LOCALIDADESUncheckedUpdateWithoutEstudiantesInput>
  }

  export type AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<AREAS_TELEFONICASCreateWithoutEstudiantesInput, AREAS_TELEFONICASUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: AREAS_TELEFONICASCreateOrConnectWithoutEstudiantesInput
    upsert?: AREAS_TELEFONICASUpsertWithoutEstudiantesInput
    connect?: AREAS_TELEFONICASWhereUniqueInput
    update?: XOR<XOR<AREAS_TELEFONICASUpdateToOneWithWhereWithoutEstudiantesInput, AREAS_TELEFONICASUpdateWithoutEstudiantesInput>, AREAS_TELEFONICASUncheckedUpdateWithoutEstudiantesInput>
  }

  export type GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput = {
    create?: XOR<GENEROSCreateWithoutEstudiantesInput, GENEROSUncheckedCreateWithoutEstudiantesInput>
    connectOrCreate?: GENEROSCreateOrConnectWithoutEstudiantesInput
    upsert?: GENEROSUpsertWithoutEstudiantesInput
    connect?: GENEROSWhereUniqueInput
    update?: XOR<XOR<GENEROSUpdateToOneWithWhereWithoutEstudiantesInput, GENEROSUpdateWithoutEstudiantesInput>, GENEROSUncheckedUpdateWithoutEstudiantesInput>
  }

  export type INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<INSCRIPCIONESCreateWithoutEstudianteInput, INSCRIPCIONESUncheckedCreateWithoutEstudianteInput> | INSCRIPCIONESCreateWithoutEstudianteInput[] | INSCRIPCIONESUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: INSCRIPCIONESCreateOrConnectWithoutEstudianteInput | INSCRIPCIONESCreateOrConnectWithoutEstudianteInput[]
    upsert?: INSCRIPCIONESUpsertWithWhereUniqueWithoutEstudianteInput | INSCRIPCIONESUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: INSCRIPCIONESCreateManyEstudianteInputEnvelope
    set?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    disconnect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    delete?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    connect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    update?: INSCRIPCIONESUpdateWithWhereUniqueWithoutEstudianteInput | INSCRIPCIONESUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: INSCRIPCIONESUpdateManyWithWhereWithoutEstudianteInput | INSCRIPCIONESUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: INSCRIPCIONESScalarWhereInput | INSCRIPCIONESScalarWhereInput[]
  }

  export type ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<ESTUDIANTES_CARRERASCreateWithoutEstudianteInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput> | ESTUDIANTES_CARRERASCreateWithoutEstudianteInput[] | ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput | ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput[]
    upsert?: ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutEstudianteInput | ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: ESTUDIANTES_CARRERASCreateManyEstudianteInputEnvelope
    set?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    disconnect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    delete?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    connect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    update?: ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutEstudianteInput | ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutEstudianteInput | ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: ESTUDIANTES_CARRERASScalarWhereInput | ESTUDIANTES_CARRERASScalarWhereInput[]
  }

  export type CURSADASUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<CURSADASCreateWithoutEstudianteInput, CURSADASUncheckedCreateWithoutEstudianteInput> | CURSADASCreateWithoutEstudianteInput[] | CURSADASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CURSADASCreateOrConnectWithoutEstudianteInput | CURSADASCreateOrConnectWithoutEstudianteInput[]
    upsert?: CURSADASUpsertWithWhereUniqueWithoutEstudianteInput | CURSADASUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: CURSADASCreateManyEstudianteInputEnvelope
    set?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    disconnect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    delete?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    connect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    update?: CURSADASUpdateWithWhereUniqueWithoutEstudianteInput | CURSADASUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: CURSADASUpdateManyWithWhereWithoutEstudianteInput | CURSADASUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: CURSADASScalarWhereInput | CURSADASScalarWhereInput[]
  }

  export type CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutEstudianteInput, CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput> | CONDICIONES_MATERIASCreateWithoutEstudianteInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput | CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput[]
    upsert?: CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutEstudianteInput | CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: CONDICIONES_MATERIASCreateManyEstudianteInputEnvelope
    set?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    disconnect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    delete?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    update?: CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutEstudianteInput | CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: CONDICIONES_MATERIASUpdateManyWithWhereWithoutEstudianteInput | CONDICIONES_MATERIASUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: CONDICIONES_MATERIASScalarWhereInput | CONDICIONES_MATERIASScalarWhereInput[]
  }

  export type INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<INSCRIPCIONESCreateWithoutEstudianteInput, INSCRIPCIONESUncheckedCreateWithoutEstudianteInput> | INSCRIPCIONESCreateWithoutEstudianteInput[] | INSCRIPCIONESUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: INSCRIPCIONESCreateOrConnectWithoutEstudianteInput | INSCRIPCIONESCreateOrConnectWithoutEstudianteInput[]
    upsert?: INSCRIPCIONESUpsertWithWhereUniqueWithoutEstudianteInput | INSCRIPCIONESUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: INSCRIPCIONESCreateManyEstudianteInputEnvelope
    set?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    disconnect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    delete?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    connect?: INSCRIPCIONESWhereUniqueInput | INSCRIPCIONESWhereUniqueInput[]
    update?: INSCRIPCIONESUpdateWithWhereUniqueWithoutEstudianteInput | INSCRIPCIONESUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: INSCRIPCIONESUpdateManyWithWhereWithoutEstudianteInput | INSCRIPCIONESUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: INSCRIPCIONESScalarWhereInput | INSCRIPCIONESScalarWhereInput[]
  }

  export type ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<ESTUDIANTES_CARRERASCreateWithoutEstudianteInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput> | ESTUDIANTES_CARRERASCreateWithoutEstudianteInput[] | ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput | ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput[]
    upsert?: ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutEstudianteInput | ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: ESTUDIANTES_CARRERASCreateManyEstudianteInputEnvelope
    set?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    disconnect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    delete?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    connect?: ESTUDIANTES_CARRERASWhereUniqueInput | ESTUDIANTES_CARRERASWhereUniqueInput[]
    update?: ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutEstudianteInput | ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutEstudianteInput | ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: ESTUDIANTES_CARRERASScalarWhereInput | ESTUDIANTES_CARRERASScalarWhereInput[]
  }

  export type CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<CURSADASCreateWithoutEstudianteInput, CURSADASUncheckedCreateWithoutEstudianteInput> | CURSADASCreateWithoutEstudianteInput[] | CURSADASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CURSADASCreateOrConnectWithoutEstudianteInput | CURSADASCreateOrConnectWithoutEstudianteInput[]
    upsert?: CURSADASUpsertWithWhereUniqueWithoutEstudianteInput | CURSADASUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: CURSADASCreateManyEstudianteInputEnvelope
    set?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    disconnect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    delete?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    connect?: CURSADASWhereUniqueInput | CURSADASWhereUniqueInput[]
    update?: CURSADASUpdateWithWhereUniqueWithoutEstudianteInput | CURSADASUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: CURSADASUpdateManyWithWhereWithoutEstudianteInput | CURSADASUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: CURSADASScalarWhereInput | CURSADASScalarWhereInput[]
  }

  export type CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<CONDICIONES_MATERIASCreateWithoutEstudianteInput, CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput> | CONDICIONES_MATERIASCreateWithoutEstudianteInput[] | CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput | CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput[]
    upsert?: CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutEstudianteInput | CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: CONDICIONES_MATERIASCreateManyEstudianteInputEnvelope
    set?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    disconnect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    delete?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    connect?: CONDICIONES_MATERIASWhereUniqueInput | CONDICIONES_MATERIASWhereUniqueInput[]
    update?: CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutEstudianteInput | CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: CONDICIONES_MATERIASUpdateManyWithWhereWithoutEstudianteInput | CONDICIONES_MATERIASUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: CONDICIONES_MATERIASScalarWhereInput | CONDICIONES_MATERIASScalarWhereInput[]
  }

  export type ESTUDIANTESCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<ESTUDIANTESCreateWithoutInscripcionesInput, ESTUDIANTESUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutInscripcionesInput
    connect?: ESTUDIANTESWhereUniqueInput
  }

  export type CARRERASCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<CARRERASCreateWithoutInscripcionesInput, CARRERASUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: CARRERASCreateOrConnectWithoutInscripcionesInput
    connect?: CARRERASWhereUniqueInput
  }

  export type ESTUDIANTESUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutInscripcionesInput, ESTUDIANTESUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutInscripcionesInput
    upsert?: ESTUDIANTESUpsertWithoutInscripcionesInput
    connect?: ESTUDIANTESWhereUniqueInput
    update?: XOR<XOR<ESTUDIANTESUpdateToOneWithWhereWithoutInscripcionesInput, ESTUDIANTESUpdateWithoutInscripcionesInput>, ESTUDIANTESUncheckedUpdateWithoutInscripcionesInput>
  }

  export type CARRERASUpdateOneRequiredWithoutInscripcionesNestedInput = {
    create?: XOR<CARRERASCreateWithoutInscripcionesInput, CARRERASUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: CARRERASCreateOrConnectWithoutInscripcionesInput
    upsert?: CARRERASUpsertWithoutInscripcionesInput
    connect?: CARRERASWhereUniqueInput
    update?: XOR<XOR<CARRERASUpdateToOneWithWhereWithoutInscripcionesInput, CARRERASUpdateWithoutInscripcionesInput>, CARRERASUncheckedUpdateWithoutInscripcionesInput>
  }

  export type ESTUDIANTESCreateNestedOneWithoutEstudiantes_carrerasInput = {
    create?: XOR<ESTUDIANTESCreateWithoutEstudiantes_carrerasInput, ESTUDIANTESUncheckedCreateWithoutEstudiantes_carrerasInput>
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutEstudiantes_carrerasInput
    connect?: ESTUDIANTESWhereUniqueInput
  }

  export type CARRERASCreateNestedOneWithoutEstudiantes_carrerasInput = {
    create?: XOR<CARRERASCreateWithoutEstudiantes_carrerasInput, CARRERASUncheckedCreateWithoutEstudiantes_carrerasInput>
    connectOrCreate?: CARRERASCreateOrConnectWithoutEstudiantes_carrerasInput
    connect?: CARRERASWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ESTUDIANTESUpdateOneRequiredWithoutEstudiantes_carrerasNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutEstudiantes_carrerasInput, ESTUDIANTESUncheckedCreateWithoutEstudiantes_carrerasInput>
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutEstudiantes_carrerasInput
    upsert?: ESTUDIANTESUpsertWithoutEstudiantes_carrerasInput
    connect?: ESTUDIANTESWhereUniqueInput
    update?: XOR<XOR<ESTUDIANTESUpdateToOneWithWhereWithoutEstudiantes_carrerasInput, ESTUDIANTESUpdateWithoutEstudiantes_carrerasInput>, ESTUDIANTESUncheckedUpdateWithoutEstudiantes_carrerasInput>
  }

  export type CARRERASUpdateOneRequiredWithoutEstudiantes_carrerasNestedInput = {
    create?: XOR<CARRERASCreateWithoutEstudiantes_carrerasInput, CARRERASUncheckedCreateWithoutEstudiantes_carrerasInput>
    connectOrCreate?: CARRERASCreateOrConnectWithoutEstudiantes_carrerasInput
    upsert?: CARRERASUpsertWithoutEstudiantes_carrerasInput
    connect?: CARRERASWhereUniqueInput
    update?: XOR<XOR<CARRERASUpdateToOneWithWhereWithoutEstudiantes_carrerasInput, CARRERASUpdateWithoutEstudiantes_carrerasInput>, CARRERASUncheckedUpdateWithoutEstudiantes_carrerasInput>
  }

  export type ESTUDIANTESCreateNestedOneWithoutCursadasInput = {
    create?: XOR<ESTUDIANTESCreateWithoutCursadasInput, ESTUDIANTESUncheckedCreateWithoutCursadasInput>
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutCursadasInput
    connect?: ESTUDIANTESWhereUniqueInput
  }

  export type MATERIASCreateNestedOneWithoutCursadasInput = {
    create?: XOR<MATERIASCreateWithoutCursadasInput, MATERIASUncheckedCreateWithoutCursadasInput>
    connectOrCreate?: MATERIASCreateOrConnectWithoutCursadasInput
    connect?: MATERIASWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ESTUDIANTESUpdateOneRequiredWithoutCursadasNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutCursadasInput, ESTUDIANTESUncheckedCreateWithoutCursadasInput>
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutCursadasInput
    upsert?: ESTUDIANTESUpsertWithoutCursadasInput
    connect?: ESTUDIANTESWhereUniqueInput
    update?: XOR<XOR<ESTUDIANTESUpdateToOneWithWhereWithoutCursadasInput, ESTUDIANTESUpdateWithoutCursadasInput>, ESTUDIANTESUncheckedUpdateWithoutCursadasInput>
  }

  export type MATERIASUpdateOneRequiredWithoutCursadasNestedInput = {
    create?: XOR<MATERIASCreateWithoutCursadasInput, MATERIASUncheckedCreateWithoutCursadasInput>
    connectOrCreate?: MATERIASCreateOrConnectWithoutCursadasInput
    upsert?: MATERIASUpsertWithoutCursadasInput
    connect?: MATERIASWhereUniqueInput
    update?: XOR<XOR<MATERIASUpdateToOneWithWhereWithoutCursadasInput, MATERIASUpdateWithoutCursadasInput>, MATERIASUncheckedUpdateWithoutCursadasInput>
  }

  export type ESTUDIANTESCreateNestedOneWithoutCondiciones_materiasInput = {
    create?: XOR<ESTUDIANTESCreateWithoutCondiciones_materiasInput, ESTUDIANTESUncheckedCreateWithoutCondiciones_materiasInput>
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutCondiciones_materiasInput
    connect?: ESTUDIANTESWhereUniqueInput
  }

  export type MATERIASCreateNestedOneWithoutCondiciones_materiasInput = {
    create?: XOR<MATERIASCreateWithoutCondiciones_materiasInput, MATERIASUncheckedCreateWithoutCondiciones_materiasInput>
    connectOrCreate?: MATERIASCreateOrConnectWithoutCondiciones_materiasInput
    connect?: MATERIASWhereUniqueInput
  }

  export type CONDICIONESCreateNestedOneWithoutCondiciones_materiasInput = {
    create?: XOR<CONDICIONESCreateWithoutCondiciones_materiasInput, CONDICIONESUncheckedCreateWithoutCondiciones_materiasInput>
    connectOrCreate?: CONDICIONESCreateOrConnectWithoutCondiciones_materiasInput
    connect?: CONDICIONESWhereUniqueInput
  }

  export type ESTUDIANTESUpdateOneRequiredWithoutCondiciones_materiasNestedInput = {
    create?: XOR<ESTUDIANTESCreateWithoutCondiciones_materiasInput, ESTUDIANTESUncheckedCreateWithoutCondiciones_materiasInput>
    connectOrCreate?: ESTUDIANTESCreateOrConnectWithoutCondiciones_materiasInput
    upsert?: ESTUDIANTESUpsertWithoutCondiciones_materiasInput
    connect?: ESTUDIANTESWhereUniqueInput
    update?: XOR<XOR<ESTUDIANTESUpdateToOneWithWhereWithoutCondiciones_materiasInput, ESTUDIANTESUpdateWithoutCondiciones_materiasInput>, ESTUDIANTESUncheckedUpdateWithoutCondiciones_materiasInput>
  }

  export type MATERIASUpdateOneRequiredWithoutCondiciones_materiasNestedInput = {
    create?: XOR<MATERIASCreateWithoutCondiciones_materiasInput, MATERIASUncheckedCreateWithoutCondiciones_materiasInput>
    connectOrCreate?: MATERIASCreateOrConnectWithoutCondiciones_materiasInput
    upsert?: MATERIASUpsertWithoutCondiciones_materiasInput
    connect?: MATERIASWhereUniqueInput
    update?: XOR<XOR<MATERIASUpdateToOneWithWhereWithoutCondiciones_materiasInput, MATERIASUpdateWithoutCondiciones_materiasInput>, MATERIASUncheckedUpdateWithoutCondiciones_materiasInput>
  }

  export type CONDICIONESUpdateOneRequiredWithoutCondiciones_materiasNestedInput = {
    create?: XOR<CONDICIONESCreateWithoutCondiciones_materiasInput, CONDICIONESUncheckedCreateWithoutCondiciones_materiasInput>
    connectOrCreate?: CONDICIONESCreateOrConnectWithoutCondiciones_materiasInput
    upsert?: CONDICIONESUpsertWithoutCondiciones_materiasInput
    connect?: CONDICIONESWhereUniqueInput
    update?: XOR<XOR<CONDICIONESUpdateToOneWithWhereWithoutCondiciones_materiasInput, CONDICIONESUpdateWithoutCondiciones_materiasInput>, CONDICIONESUncheckedUpdateWithoutCondiciones_materiasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type LOCALIDADESCreateWithoutPaisInput = {
    nombre: string
    estudiantes?: ESTUDIANTESCreateNestedManyWithoutLocalidadInput
  }

  export type LOCALIDADESUncheckedCreateWithoutPaisInput = {
    id_localidad?: number
    nombre: string
    estudiantes?: ESTUDIANTESUncheckedCreateNestedManyWithoutLocalidadInput
  }

  export type LOCALIDADESCreateOrConnectWithoutPaisInput = {
    where: LOCALIDADESWhereUniqueInput
    create: XOR<LOCALIDADESCreateWithoutPaisInput, LOCALIDADESUncheckedCreateWithoutPaisInput>
  }

  export type LOCALIDADESCreateManyPaisInputEnvelope = {
    data: LOCALIDADESCreateManyPaisInput | LOCALIDADESCreateManyPaisInput[]
    skipDuplicates?: boolean
  }

  export type ESTUDIANTESCreateWithoutPaisInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    localidad: LOCALIDADESCreateNestedOneWithoutEstudiantesInput
    area_telefonica: AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput
    genero: GENEROSCreateNestedOneWithoutEstudiantesInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateWithoutPaisInput = {
    id_estudiante?: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESCreateOrConnectWithoutPaisInput = {
    where: ESTUDIANTESWhereUniqueInput
    create: XOR<ESTUDIANTESCreateWithoutPaisInput, ESTUDIANTESUncheckedCreateWithoutPaisInput>
  }

  export type ESTUDIANTESCreateManyPaisInputEnvelope = {
    data: ESTUDIANTESCreateManyPaisInput | ESTUDIANTESCreateManyPaisInput[]
    skipDuplicates?: boolean
  }

  export type LOCALIDADESUpsertWithWhereUniqueWithoutPaisInput = {
    where: LOCALIDADESWhereUniqueInput
    update: XOR<LOCALIDADESUpdateWithoutPaisInput, LOCALIDADESUncheckedUpdateWithoutPaisInput>
    create: XOR<LOCALIDADESCreateWithoutPaisInput, LOCALIDADESUncheckedCreateWithoutPaisInput>
  }

  export type LOCALIDADESUpdateWithWhereUniqueWithoutPaisInput = {
    where: LOCALIDADESWhereUniqueInput
    data: XOR<LOCALIDADESUpdateWithoutPaisInput, LOCALIDADESUncheckedUpdateWithoutPaisInput>
  }

  export type LOCALIDADESUpdateManyWithWhereWithoutPaisInput = {
    where: LOCALIDADESScalarWhereInput
    data: XOR<LOCALIDADESUpdateManyMutationInput, LOCALIDADESUncheckedUpdateManyWithoutPaisInput>
  }

  export type LOCALIDADESScalarWhereInput = {
    AND?: LOCALIDADESScalarWhereInput | LOCALIDADESScalarWhereInput[]
    OR?: LOCALIDADESScalarWhereInput[]
    NOT?: LOCALIDADESScalarWhereInput | LOCALIDADESScalarWhereInput[]
    id_localidad?: IntFilter<"LOCALIDADES"> | number
    nombre?: StringFilter<"LOCALIDADES"> | string
    id_pais?: IntFilter<"LOCALIDADES"> | number
  }

  export type ESTUDIANTESUpsertWithWhereUniqueWithoutPaisInput = {
    where: ESTUDIANTESWhereUniqueInput
    update: XOR<ESTUDIANTESUpdateWithoutPaisInput, ESTUDIANTESUncheckedUpdateWithoutPaisInput>
    create: XOR<ESTUDIANTESCreateWithoutPaisInput, ESTUDIANTESUncheckedCreateWithoutPaisInput>
  }

  export type ESTUDIANTESUpdateWithWhereUniqueWithoutPaisInput = {
    where: ESTUDIANTESWhereUniqueInput
    data: XOR<ESTUDIANTESUpdateWithoutPaisInput, ESTUDIANTESUncheckedUpdateWithoutPaisInput>
  }

  export type ESTUDIANTESUpdateManyWithWhereWithoutPaisInput = {
    where: ESTUDIANTESScalarWhereInput
    data: XOR<ESTUDIANTESUpdateManyMutationInput, ESTUDIANTESUncheckedUpdateManyWithoutPaisInput>
  }

  export type ESTUDIANTESScalarWhereInput = {
    AND?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
    OR?: ESTUDIANTESScalarWhereInput[]
    NOT?: ESTUDIANTESScalarWhereInput | ESTUDIANTESScalarWhereInput[]
    id_estudiante?: IntFilter<"ESTUDIANTES"> | number
    id_pais?: IntFilter<"ESTUDIANTES"> | number
    id_localidad?: IntFilter<"ESTUDIANTES"> | number
    id_area_telefonica?: IntFilter<"ESTUDIANTES"> | number
    id_genero?: IntFilter<"ESTUDIANTES"> | number
    nombres?: StringFilter<"ESTUDIANTES"> | string
    apellidos?: StringFilter<"ESTUDIANTES"> | string
    dni?: StringFilter<"ESTUDIANTES"> | string
    fecha_nacimiento?: DateTimeFilter<"ESTUDIANTES"> | Date | string
    email?: StringFilter<"ESTUDIANTES"> | string
    telefono?: StringFilter<"ESTUDIANTES"> | string
    domicilio?: StringFilter<"ESTUDIANTES"> | string
    fecha_ingreso?: DateTimeFilter<"ESTUDIANTES"> | Date | string
    cohorte?: StringFilter<"ESTUDIANTES"> | string
    secundario?: StringFilter<"ESTUDIANTES"> | string
    cuil?: StringFilter<"ESTUDIANTES"> | string
    examen_mayores25?: BoolFilter<"ESTUDIANTES"> | boolean
    solicito_beca?: BoolFilter<"ESTUDIANTES"> | boolean
    trabajador?: BoolFilter<"ESTUDIANTES"> | boolean
    persona_a_cargo?: BoolFilter<"ESTUDIANTES"> | boolean
    observaciones?: StringNullableFilter<"ESTUDIANTES"> | string | null
    estado?: StringFilter<"ESTUDIANTES"> | string
  }

  export type PAISESCreateWithoutLocalidadesInput = {
    nombre: string
    estudiantes?: ESTUDIANTESCreateNestedManyWithoutPaisInput
  }

  export type PAISESUncheckedCreateWithoutLocalidadesInput = {
    id_pais?: number
    nombre: string
    estudiantes?: ESTUDIANTESUncheckedCreateNestedManyWithoutPaisInput
  }

  export type PAISESCreateOrConnectWithoutLocalidadesInput = {
    where: PAISESWhereUniqueInput
    create: XOR<PAISESCreateWithoutLocalidadesInput, PAISESUncheckedCreateWithoutLocalidadesInput>
  }

  export type ESTUDIANTESCreateWithoutLocalidadInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    pais: PAISESCreateNestedOneWithoutEstudiantesInput
    area_telefonica: AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput
    genero: GENEROSCreateNestedOneWithoutEstudiantesInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateWithoutLocalidadInput = {
    id_estudiante?: number
    id_pais: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESCreateOrConnectWithoutLocalidadInput = {
    where: ESTUDIANTESWhereUniqueInput
    create: XOR<ESTUDIANTESCreateWithoutLocalidadInput, ESTUDIANTESUncheckedCreateWithoutLocalidadInput>
  }

  export type ESTUDIANTESCreateManyLocalidadInputEnvelope = {
    data: ESTUDIANTESCreateManyLocalidadInput | ESTUDIANTESCreateManyLocalidadInput[]
    skipDuplicates?: boolean
  }

  export type PAISESUpsertWithoutLocalidadesInput = {
    update: XOR<PAISESUpdateWithoutLocalidadesInput, PAISESUncheckedUpdateWithoutLocalidadesInput>
    create: XOR<PAISESCreateWithoutLocalidadesInput, PAISESUncheckedCreateWithoutLocalidadesInput>
    where?: PAISESWhereInput
  }

  export type PAISESUpdateToOneWithWhereWithoutLocalidadesInput = {
    where?: PAISESWhereInput
    data: XOR<PAISESUpdateWithoutLocalidadesInput, PAISESUncheckedUpdateWithoutLocalidadesInput>
  }

  export type PAISESUpdateWithoutLocalidadesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: ESTUDIANTESUpdateManyWithoutPaisNestedInput
  }

  export type PAISESUncheckedUpdateWithoutLocalidadesInput = {
    id_pais?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: ESTUDIANTESUncheckedUpdateManyWithoutPaisNestedInput
  }

  export type ESTUDIANTESUpsertWithWhereUniqueWithoutLocalidadInput = {
    where: ESTUDIANTESWhereUniqueInput
    update: XOR<ESTUDIANTESUpdateWithoutLocalidadInput, ESTUDIANTESUncheckedUpdateWithoutLocalidadInput>
    create: XOR<ESTUDIANTESCreateWithoutLocalidadInput, ESTUDIANTESUncheckedCreateWithoutLocalidadInput>
  }

  export type ESTUDIANTESUpdateWithWhereUniqueWithoutLocalidadInput = {
    where: ESTUDIANTESWhereUniqueInput
    data: XOR<ESTUDIANTESUpdateWithoutLocalidadInput, ESTUDIANTESUncheckedUpdateWithoutLocalidadInput>
  }

  export type ESTUDIANTESUpdateManyWithWhereWithoutLocalidadInput = {
    where: ESTUDIANTESScalarWhereInput
    data: XOR<ESTUDIANTESUpdateManyMutationInput, ESTUDIANTESUncheckedUpdateManyWithoutLocalidadInput>
  }

  export type ESTUDIANTESCreateWithoutArea_telefonicaInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    pais: PAISESCreateNestedOneWithoutEstudiantesInput
    localidad: LOCALIDADESCreateNestedOneWithoutEstudiantesInput
    genero: GENEROSCreateNestedOneWithoutEstudiantesInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESCreateOrConnectWithoutArea_telefonicaInput = {
    where: ESTUDIANTESWhereUniqueInput
    create: XOR<ESTUDIANTESCreateWithoutArea_telefonicaInput, ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput>
  }

  export type ESTUDIANTESCreateManyArea_telefonicaInputEnvelope = {
    data: ESTUDIANTESCreateManyArea_telefonicaInput | ESTUDIANTESCreateManyArea_telefonicaInput[]
    skipDuplicates?: boolean
  }

  export type ESTUDIANTESUpsertWithWhereUniqueWithoutArea_telefonicaInput = {
    where: ESTUDIANTESWhereUniqueInput
    update: XOR<ESTUDIANTESUpdateWithoutArea_telefonicaInput, ESTUDIANTESUncheckedUpdateWithoutArea_telefonicaInput>
    create: XOR<ESTUDIANTESCreateWithoutArea_telefonicaInput, ESTUDIANTESUncheckedCreateWithoutArea_telefonicaInput>
  }

  export type ESTUDIANTESUpdateWithWhereUniqueWithoutArea_telefonicaInput = {
    where: ESTUDIANTESWhereUniqueInput
    data: XOR<ESTUDIANTESUpdateWithoutArea_telefonicaInput, ESTUDIANTESUncheckedUpdateWithoutArea_telefonicaInput>
  }

  export type ESTUDIANTESUpdateManyWithWhereWithoutArea_telefonicaInput = {
    where: ESTUDIANTESScalarWhereInput
    data: XOR<ESTUDIANTESUpdateManyMutationInput, ESTUDIANTESUncheckedUpdateManyWithoutArea_telefonicaInput>
  }

  export type ESTUDIANTESCreateWithoutGeneroInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    pais: PAISESCreateNestedOneWithoutEstudiantesInput
    localidad: LOCALIDADESCreateNestedOneWithoutEstudiantesInput
    area_telefonica: AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateWithoutGeneroInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESCreateOrConnectWithoutGeneroInput = {
    where: ESTUDIANTESWhereUniqueInput
    create: XOR<ESTUDIANTESCreateWithoutGeneroInput, ESTUDIANTESUncheckedCreateWithoutGeneroInput>
  }

  export type ESTUDIANTESCreateManyGeneroInputEnvelope = {
    data: ESTUDIANTESCreateManyGeneroInput | ESTUDIANTESCreateManyGeneroInput[]
    skipDuplicates?: boolean
  }

  export type ESTUDIANTESUpsertWithWhereUniqueWithoutGeneroInput = {
    where: ESTUDIANTESWhereUniqueInput
    update: XOR<ESTUDIANTESUpdateWithoutGeneroInput, ESTUDIANTESUncheckedUpdateWithoutGeneroInput>
    create: XOR<ESTUDIANTESCreateWithoutGeneroInput, ESTUDIANTESUncheckedCreateWithoutGeneroInput>
  }

  export type ESTUDIANTESUpdateWithWhereUniqueWithoutGeneroInput = {
    where: ESTUDIANTESWhereUniqueInput
    data: XOR<ESTUDIANTESUpdateWithoutGeneroInput, ESTUDIANTESUncheckedUpdateWithoutGeneroInput>
  }

  export type ESTUDIANTESUpdateManyWithWhereWithoutGeneroInput = {
    where: ESTUDIANTESScalarWhereInput
    data: XOR<ESTUDIANTESUpdateManyMutationInput, ESTUDIANTESUncheckedUpdateManyWithoutGeneroInput>
  }

  export type MATERIASCreateWithoutCarreraInput = {
    nombre: string
    cursadas?: CURSADASCreateNestedManyWithoutMateriaInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutMateriaInput
  }

  export type MATERIASUncheckedCreateWithoutCarreraInput = {
    id_materia?: number
    nombre: string
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutMateriaInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MATERIASCreateOrConnectWithoutCarreraInput = {
    where: MATERIASWhereUniqueInput
    create: XOR<MATERIASCreateWithoutCarreraInput, MATERIASUncheckedCreateWithoutCarreraInput>
  }

  export type MATERIASCreateManyCarreraInputEnvelope = {
    data: MATERIASCreateManyCarreraInput | MATERIASCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type INSCRIPCIONESCreateWithoutCarreraInput = {
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
    estudiante: ESTUDIANTESCreateNestedOneWithoutInscripcionesInput
  }

  export type INSCRIPCIONESUncheckedCreateWithoutCarreraInput = {
    id_inscripcion?: number
    id_estudiante: number
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
  }

  export type INSCRIPCIONESCreateOrConnectWithoutCarreraInput = {
    where: INSCRIPCIONESWhereUniqueInput
    create: XOR<INSCRIPCIONESCreateWithoutCarreraInput, INSCRIPCIONESUncheckedCreateWithoutCarreraInput>
  }

  export type INSCRIPCIONESCreateManyCarreraInputEnvelope = {
    data: INSCRIPCIONESCreateManyCarreraInput | INSCRIPCIONESCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type ESTUDIANTES_CARRERASCreateWithoutCarreraInput = {
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
    estudiante: ESTUDIANTESCreateNestedOneWithoutEstudiantes_carrerasInput
  }

  export type ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput = {
    id_ec?: number
    id_estudiante: number
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
  }

  export type ESTUDIANTES_CARRERASCreateOrConnectWithoutCarreraInput = {
    where: ESTUDIANTES_CARRERASWhereUniqueInput
    create: XOR<ESTUDIANTES_CARRERASCreateWithoutCarreraInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput>
  }

  export type ESTUDIANTES_CARRERASCreateManyCarreraInputEnvelope = {
    data: ESTUDIANTES_CARRERASCreateManyCarreraInput | ESTUDIANTES_CARRERASCreateManyCarreraInput[]
    skipDuplicates?: boolean
  }

  export type MATERIASUpsertWithWhereUniqueWithoutCarreraInput = {
    where: MATERIASWhereUniqueInput
    update: XOR<MATERIASUpdateWithoutCarreraInput, MATERIASUncheckedUpdateWithoutCarreraInput>
    create: XOR<MATERIASCreateWithoutCarreraInput, MATERIASUncheckedCreateWithoutCarreraInput>
  }

  export type MATERIASUpdateWithWhereUniqueWithoutCarreraInput = {
    where: MATERIASWhereUniqueInput
    data: XOR<MATERIASUpdateWithoutCarreraInput, MATERIASUncheckedUpdateWithoutCarreraInput>
  }

  export type MATERIASUpdateManyWithWhereWithoutCarreraInput = {
    where: MATERIASScalarWhereInput
    data: XOR<MATERIASUpdateManyMutationInput, MATERIASUncheckedUpdateManyWithoutCarreraInput>
  }

  export type MATERIASScalarWhereInput = {
    AND?: MATERIASScalarWhereInput | MATERIASScalarWhereInput[]
    OR?: MATERIASScalarWhereInput[]
    NOT?: MATERIASScalarWhereInput | MATERIASScalarWhereInput[]
    id_materia?: IntFilter<"MATERIAS"> | number
    nombre?: StringFilter<"MATERIAS"> | string
    id_carrera?: IntFilter<"MATERIAS"> | number
  }

  export type INSCRIPCIONESUpsertWithWhereUniqueWithoutCarreraInput = {
    where: INSCRIPCIONESWhereUniqueInput
    update: XOR<INSCRIPCIONESUpdateWithoutCarreraInput, INSCRIPCIONESUncheckedUpdateWithoutCarreraInput>
    create: XOR<INSCRIPCIONESCreateWithoutCarreraInput, INSCRIPCIONESUncheckedCreateWithoutCarreraInput>
  }

  export type INSCRIPCIONESUpdateWithWhereUniqueWithoutCarreraInput = {
    where: INSCRIPCIONESWhereUniqueInput
    data: XOR<INSCRIPCIONESUpdateWithoutCarreraInput, INSCRIPCIONESUncheckedUpdateWithoutCarreraInput>
  }

  export type INSCRIPCIONESUpdateManyWithWhereWithoutCarreraInput = {
    where: INSCRIPCIONESScalarWhereInput
    data: XOR<INSCRIPCIONESUpdateManyMutationInput, INSCRIPCIONESUncheckedUpdateManyWithoutCarreraInput>
  }

  export type INSCRIPCIONESScalarWhereInput = {
    AND?: INSCRIPCIONESScalarWhereInput | INSCRIPCIONESScalarWhereInput[]
    OR?: INSCRIPCIONESScalarWhereInput[]
    NOT?: INSCRIPCIONESScalarWhereInput | INSCRIPCIONESScalarWhereInput[]
    id_inscripcion?: IntFilter<"INSCRIPCIONES"> | number
    id_estudiante?: IntFilter<"INSCRIPCIONES"> | number
    id_carrera?: IntFilter<"INSCRIPCIONES"> | number
    fecha_inscripcion?: DateTimeFilter<"INSCRIPCIONES"> | Date | string
    estado?: BoolFilter<"INSCRIPCIONES"> | boolean
    causa_inactividad?: StringNullableFilter<"INSCRIPCIONES"> | string | null
  }

  export type ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutCarreraInput = {
    where: ESTUDIANTES_CARRERASWhereUniqueInput
    update: XOR<ESTUDIANTES_CARRERASUpdateWithoutCarreraInput, ESTUDIANTES_CARRERASUncheckedUpdateWithoutCarreraInput>
    create: XOR<ESTUDIANTES_CARRERASCreateWithoutCarreraInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutCarreraInput>
  }

  export type ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutCarreraInput = {
    where: ESTUDIANTES_CARRERASWhereUniqueInput
    data: XOR<ESTUDIANTES_CARRERASUpdateWithoutCarreraInput, ESTUDIANTES_CARRERASUncheckedUpdateWithoutCarreraInput>
  }

  export type ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutCarreraInput = {
    where: ESTUDIANTES_CARRERASScalarWhereInput
    data: XOR<ESTUDIANTES_CARRERASUpdateManyMutationInput, ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutCarreraInput>
  }

  export type ESTUDIANTES_CARRERASScalarWhereInput = {
    AND?: ESTUDIANTES_CARRERASScalarWhereInput | ESTUDIANTES_CARRERASScalarWhereInput[]
    OR?: ESTUDIANTES_CARRERASScalarWhereInput[]
    NOT?: ESTUDIANTES_CARRERASScalarWhereInput | ESTUDIANTES_CARRERASScalarWhereInput[]
    id_ec?: IntFilter<"ESTUDIANTES_CARRERAS"> | number
    id_estudiante?: IntFilter<"ESTUDIANTES_CARRERAS"> | number
    id_carrera?: IntFilter<"ESTUDIANTES_CARRERAS"> | number
    fecha_alta?: DateTimeFilter<"ESTUDIANTES_CARRERAS"> | Date | string
    fecha_baja?: DateTimeNullableFilter<"ESTUDIANTES_CARRERAS"> | Date | string | null
  }

  export type CARRERASCreateWithoutMateriasInput = {
    nombre: string
    duracion: number
    titulo_otorgado: string
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutCarreraInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutCarreraInput
  }

  export type CARRERASUncheckedCreateWithoutMateriasInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    titulo_otorgado: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutCarreraInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CARRERASCreateOrConnectWithoutMateriasInput = {
    where: CARRERASWhereUniqueInput
    create: XOR<CARRERASCreateWithoutMateriasInput, CARRERASUncheckedCreateWithoutMateriasInput>
  }

  export type CURSADASCreateWithoutMateriaInput = {
    nota_final?: Decimal | DecimalJsLike | number | string | null
    estudiante: ESTUDIANTESCreateNestedOneWithoutCursadasInput
  }

  export type CURSADASUncheckedCreateWithoutMateriaInput = {
    id_cursada?: number
    id_estudiante: number
    nota_final?: Decimal | DecimalJsLike | number | string | null
  }

  export type CURSADASCreateOrConnectWithoutMateriaInput = {
    where: CURSADASWhereUniqueInput
    create: XOR<CURSADASCreateWithoutMateriaInput, CURSADASUncheckedCreateWithoutMateriaInput>
  }

  export type CURSADASCreateManyMateriaInputEnvelope = {
    data: CURSADASCreateManyMateriaInput | CURSADASCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type CONDICIONES_MATERIASCreateWithoutMateriaInput = {
    estudiante: ESTUDIANTESCreateNestedOneWithoutCondiciones_materiasInput
    condicion: CONDICIONESCreateNestedOneWithoutCondiciones_materiasInput
  }

  export type CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput = {
    id_cm?: number
    id_estudiante: number
    id_condition: number
  }

  export type CONDICIONES_MATERIASCreateOrConnectWithoutMateriaInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    create: XOR<CONDICIONES_MATERIASCreateWithoutMateriaInput, CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput>
  }

  export type CONDICIONES_MATERIASCreateManyMateriaInputEnvelope = {
    data: CONDICIONES_MATERIASCreateManyMateriaInput | CONDICIONES_MATERIASCreateManyMateriaInput[]
    skipDuplicates?: boolean
  }

  export type CARRERASUpsertWithoutMateriasInput = {
    update: XOR<CARRERASUpdateWithoutMateriasInput, CARRERASUncheckedUpdateWithoutMateriasInput>
    create: XOR<CARRERASCreateWithoutMateriasInput, CARRERASUncheckedCreateWithoutMateriasInput>
    where?: CARRERASWhereInput
  }

  export type CARRERASUpdateToOneWithWhereWithoutMateriasInput = {
    where?: CARRERASWhereInput
    data: XOR<CARRERASUpdateWithoutMateriasInput, CARRERASUncheckedUpdateWithoutMateriasInput>
  }

  export type CARRERASUpdateWithoutMateriasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUpdateManyWithoutCarreraNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutCarreraNestedInput
  }

  export type CARRERASUncheckedUpdateWithoutMateriasInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutCarreraNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type CURSADASUpsertWithWhereUniqueWithoutMateriaInput = {
    where: CURSADASWhereUniqueInput
    update: XOR<CURSADASUpdateWithoutMateriaInput, CURSADASUncheckedUpdateWithoutMateriaInput>
    create: XOR<CURSADASCreateWithoutMateriaInput, CURSADASUncheckedCreateWithoutMateriaInput>
  }

  export type CURSADASUpdateWithWhereUniqueWithoutMateriaInput = {
    where: CURSADASWhereUniqueInput
    data: XOR<CURSADASUpdateWithoutMateriaInput, CURSADASUncheckedUpdateWithoutMateriaInput>
  }

  export type CURSADASUpdateManyWithWhereWithoutMateriaInput = {
    where: CURSADASScalarWhereInput
    data: XOR<CURSADASUpdateManyMutationInput, CURSADASUncheckedUpdateManyWithoutMateriaInput>
  }

  export type CURSADASScalarWhereInput = {
    AND?: CURSADASScalarWhereInput | CURSADASScalarWhereInput[]
    OR?: CURSADASScalarWhereInput[]
    NOT?: CURSADASScalarWhereInput | CURSADASScalarWhereInput[]
    id_cursada?: IntFilter<"CURSADAS"> | number
    id_estudiante?: IntFilter<"CURSADAS"> | number
    id_materia?: IntFilter<"CURSADAS"> | number
    nota_final?: DecimalNullableFilter<"CURSADAS"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutMateriaInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    update: XOR<CONDICIONES_MATERIASUpdateWithoutMateriaInput, CONDICIONES_MATERIASUncheckedUpdateWithoutMateriaInput>
    create: XOR<CONDICIONES_MATERIASCreateWithoutMateriaInput, CONDICIONES_MATERIASUncheckedCreateWithoutMateriaInput>
  }

  export type CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutMateriaInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    data: XOR<CONDICIONES_MATERIASUpdateWithoutMateriaInput, CONDICIONES_MATERIASUncheckedUpdateWithoutMateriaInput>
  }

  export type CONDICIONES_MATERIASUpdateManyWithWhereWithoutMateriaInput = {
    where: CONDICIONES_MATERIASScalarWhereInput
    data: XOR<CONDICIONES_MATERIASUpdateManyMutationInput, CONDICIONES_MATERIASUncheckedUpdateManyWithoutMateriaInput>
  }

  export type CONDICIONES_MATERIASScalarWhereInput = {
    AND?: CONDICIONES_MATERIASScalarWhereInput | CONDICIONES_MATERIASScalarWhereInput[]
    OR?: CONDICIONES_MATERIASScalarWhereInput[]
    NOT?: CONDICIONES_MATERIASScalarWhereInput | CONDICIONES_MATERIASScalarWhereInput[]
    id_cm?: IntFilter<"CONDICIONES_MATERIAS"> | number
    id_estudiante?: IntFilter<"CONDICIONES_MATERIAS"> | number
    id_materia?: IntFilter<"CONDICIONES_MATERIAS"> | number
    id_condition?: IntFilter<"CONDICIONES_MATERIAS"> | number
  }

  export type CONDICIONES_MATERIASCreateWithoutCondicionInput = {
    estudiante: ESTUDIANTESCreateNestedOneWithoutCondiciones_materiasInput
    materia: MATERIASCreateNestedOneWithoutCondiciones_materiasInput
  }

  export type CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput = {
    id_cm?: number
    id_estudiante: number
    id_materia: number
  }

  export type CONDICIONES_MATERIASCreateOrConnectWithoutCondicionInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    create: XOR<CONDICIONES_MATERIASCreateWithoutCondicionInput, CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput>
  }

  export type CONDICIONES_MATERIASCreateManyCondicionInputEnvelope = {
    data: CONDICIONES_MATERIASCreateManyCondicionInput | CONDICIONES_MATERIASCreateManyCondicionInput[]
    skipDuplicates?: boolean
  }

  export type CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutCondicionInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    update: XOR<CONDICIONES_MATERIASUpdateWithoutCondicionInput, CONDICIONES_MATERIASUncheckedUpdateWithoutCondicionInput>
    create: XOR<CONDICIONES_MATERIASCreateWithoutCondicionInput, CONDICIONES_MATERIASUncheckedCreateWithoutCondicionInput>
  }

  export type CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutCondicionInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    data: XOR<CONDICIONES_MATERIASUpdateWithoutCondicionInput, CONDICIONES_MATERIASUncheckedUpdateWithoutCondicionInput>
  }

  export type CONDICIONES_MATERIASUpdateManyWithWhereWithoutCondicionInput = {
    where: CONDICIONES_MATERIASScalarWhereInput
    data: XOR<CONDICIONES_MATERIASUpdateManyMutationInput, CONDICIONES_MATERIASUncheckedUpdateManyWithoutCondicionInput>
  }

  export type PAISESCreateWithoutEstudiantesInput = {
    nombre: string
    localidades?: LOCALIDADESCreateNestedManyWithoutPaisInput
  }

  export type PAISESUncheckedCreateWithoutEstudiantesInput = {
    id_pais?: number
    nombre: string
    localidades?: LOCALIDADESUncheckedCreateNestedManyWithoutPaisInput
  }

  export type PAISESCreateOrConnectWithoutEstudiantesInput = {
    where: PAISESWhereUniqueInput
    create: XOR<PAISESCreateWithoutEstudiantesInput, PAISESUncheckedCreateWithoutEstudiantesInput>
  }

  export type LOCALIDADESCreateWithoutEstudiantesInput = {
    nombre: string
    pais: PAISESCreateNestedOneWithoutLocalidadesInput
  }

  export type LOCALIDADESUncheckedCreateWithoutEstudiantesInput = {
    id_localidad?: number
    nombre: string
    id_pais: number
  }

  export type LOCALIDADESCreateOrConnectWithoutEstudiantesInput = {
    where: LOCALIDADESWhereUniqueInput
    create: XOR<LOCALIDADESCreateWithoutEstudiantesInput, LOCALIDADESUncheckedCreateWithoutEstudiantesInput>
  }

  export type AREAS_TELEFONICASCreateWithoutEstudiantesInput = {
    codigo: string
  }

  export type AREAS_TELEFONICASUncheckedCreateWithoutEstudiantesInput = {
    id_area_telefonica?: number
    codigo: string
  }

  export type AREAS_TELEFONICASCreateOrConnectWithoutEstudiantesInput = {
    where: AREAS_TELEFONICASWhereUniqueInput
    create: XOR<AREAS_TELEFONICASCreateWithoutEstudiantesInput, AREAS_TELEFONICASUncheckedCreateWithoutEstudiantesInput>
  }

  export type GENEROSCreateWithoutEstudiantesInput = {
    nombre: string
  }

  export type GENEROSUncheckedCreateWithoutEstudiantesInput = {
    id_genero?: number
    nombre: string
  }

  export type GENEROSCreateOrConnectWithoutEstudiantesInput = {
    where: GENEROSWhereUniqueInput
    create: XOR<GENEROSCreateWithoutEstudiantesInput, GENEROSUncheckedCreateWithoutEstudiantesInput>
  }

  export type INSCRIPCIONESCreateWithoutEstudianteInput = {
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
    carrera: CARRERASCreateNestedOneWithoutInscripcionesInput
  }

  export type INSCRIPCIONESUncheckedCreateWithoutEstudianteInput = {
    id_inscripcion?: number
    id_carrera: number
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
  }

  export type INSCRIPCIONESCreateOrConnectWithoutEstudianteInput = {
    where: INSCRIPCIONESWhereUniqueInput
    create: XOR<INSCRIPCIONESCreateWithoutEstudianteInput, INSCRIPCIONESUncheckedCreateWithoutEstudianteInput>
  }

  export type INSCRIPCIONESCreateManyEstudianteInputEnvelope = {
    data: INSCRIPCIONESCreateManyEstudianteInput | INSCRIPCIONESCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type ESTUDIANTES_CARRERASCreateWithoutEstudianteInput = {
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
    carrera: CARRERASCreateNestedOneWithoutEstudiantes_carrerasInput
  }

  export type ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput = {
    id_ec?: number
    id_carrera: number
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
  }

  export type ESTUDIANTES_CARRERASCreateOrConnectWithoutEstudianteInput = {
    where: ESTUDIANTES_CARRERASWhereUniqueInput
    create: XOR<ESTUDIANTES_CARRERASCreateWithoutEstudianteInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput>
  }

  export type ESTUDIANTES_CARRERASCreateManyEstudianteInputEnvelope = {
    data: ESTUDIANTES_CARRERASCreateManyEstudianteInput | ESTUDIANTES_CARRERASCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type CURSADASCreateWithoutEstudianteInput = {
    nota_final?: Decimal | DecimalJsLike | number | string | null
    materia: MATERIASCreateNestedOneWithoutCursadasInput
  }

  export type CURSADASUncheckedCreateWithoutEstudianteInput = {
    id_cursada?: number
    id_materia: number
    nota_final?: Decimal | DecimalJsLike | number | string | null
  }

  export type CURSADASCreateOrConnectWithoutEstudianteInput = {
    where: CURSADASWhereUniqueInput
    create: XOR<CURSADASCreateWithoutEstudianteInput, CURSADASUncheckedCreateWithoutEstudianteInput>
  }

  export type CURSADASCreateManyEstudianteInputEnvelope = {
    data: CURSADASCreateManyEstudianteInput | CURSADASCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type CONDICIONES_MATERIASCreateWithoutEstudianteInput = {
    materia: MATERIASCreateNestedOneWithoutCondiciones_materiasInput
    condicion: CONDICIONESCreateNestedOneWithoutCondiciones_materiasInput
  }

  export type CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput = {
    id_cm?: number
    id_materia: number
    id_condition: number
  }

  export type CONDICIONES_MATERIASCreateOrConnectWithoutEstudianteInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    create: XOR<CONDICIONES_MATERIASCreateWithoutEstudianteInput, CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput>
  }

  export type CONDICIONES_MATERIASCreateManyEstudianteInputEnvelope = {
    data: CONDICIONES_MATERIASCreateManyEstudianteInput | CONDICIONES_MATERIASCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type PAISESUpsertWithoutEstudiantesInput = {
    update: XOR<PAISESUpdateWithoutEstudiantesInput, PAISESUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<PAISESCreateWithoutEstudiantesInput, PAISESUncheckedCreateWithoutEstudiantesInput>
    where?: PAISESWhereInput
  }

  export type PAISESUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: PAISESWhereInput
    data: XOR<PAISESUpdateWithoutEstudiantesInput, PAISESUncheckedUpdateWithoutEstudiantesInput>
  }

  export type PAISESUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    localidades?: LOCALIDADESUpdateManyWithoutPaisNestedInput
  }

  export type PAISESUncheckedUpdateWithoutEstudiantesInput = {
    id_pais?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    localidades?: LOCALIDADESUncheckedUpdateManyWithoutPaisNestedInput
  }

  export type LOCALIDADESUpsertWithoutEstudiantesInput = {
    update: XOR<LOCALIDADESUpdateWithoutEstudiantesInput, LOCALIDADESUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<LOCALIDADESCreateWithoutEstudiantesInput, LOCALIDADESUncheckedCreateWithoutEstudiantesInput>
    where?: LOCALIDADESWhereInput
  }

  export type LOCALIDADESUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: LOCALIDADESWhereInput
    data: XOR<LOCALIDADESUpdateWithoutEstudiantesInput, LOCALIDADESUncheckedUpdateWithoutEstudiantesInput>
  }

  export type LOCALIDADESUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutLocalidadesNestedInput
  }

  export type LOCALIDADESUncheckedUpdateWithoutEstudiantesInput = {
    id_localidad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_pais?: IntFieldUpdateOperationsInput | number
  }

  export type AREAS_TELEFONICASUpsertWithoutEstudiantesInput = {
    update: XOR<AREAS_TELEFONICASUpdateWithoutEstudiantesInput, AREAS_TELEFONICASUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<AREAS_TELEFONICASCreateWithoutEstudiantesInput, AREAS_TELEFONICASUncheckedCreateWithoutEstudiantesInput>
    where?: AREAS_TELEFONICASWhereInput
  }

  export type AREAS_TELEFONICASUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: AREAS_TELEFONICASWhereInput
    data: XOR<AREAS_TELEFONICASUpdateWithoutEstudiantesInput, AREAS_TELEFONICASUncheckedUpdateWithoutEstudiantesInput>
  }

  export type AREAS_TELEFONICASUpdateWithoutEstudiantesInput = {
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type AREAS_TELEFONICASUncheckedUpdateWithoutEstudiantesInput = {
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
  }

  export type GENEROSUpsertWithoutEstudiantesInput = {
    update: XOR<GENEROSUpdateWithoutEstudiantesInput, GENEROSUncheckedUpdateWithoutEstudiantesInput>
    create: XOR<GENEROSCreateWithoutEstudiantesInput, GENEROSUncheckedCreateWithoutEstudiantesInput>
    where?: GENEROSWhereInput
  }

  export type GENEROSUpdateToOneWithWhereWithoutEstudiantesInput = {
    where?: GENEROSWhereInput
    data: XOR<GENEROSUpdateWithoutEstudiantesInput, GENEROSUncheckedUpdateWithoutEstudiantesInput>
  }

  export type GENEROSUpdateWithoutEstudiantesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type GENEROSUncheckedUpdateWithoutEstudiantesInput = {
    id_genero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type INSCRIPCIONESUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: INSCRIPCIONESWhereUniqueInput
    update: XOR<INSCRIPCIONESUpdateWithoutEstudianteInput, INSCRIPCIONESUncheckedUpdateWithoutEstudianteInput>
    create: XOR<INSCRIPCIONESCreateWithoutEstudianteInput, INSCRIPCIONESUncheckedCreateWithoutEstudianteInput>
  }

  export type INSCRIPCIONESUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: INSCRIPCIONESWhereUniqueInput
    data: XOR<INSCRIPCIONESUpdateWithoutEstudianteInput, INSCRIPCIONESUncheckedUpdateWithoutEstudianteInput>
  }

  export type INSCRIPCIONESUpdateManyWithWhereWithoutEstudianteInput = {
    where: INSCRIPCIONESScalarWhereInput
    data: XOR<INSCRIPCIONESUpdateManyMutationInput, INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type ESTUDIANTES_CARRERASUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: ESTUDIANTES_CARRERASWhereUniqueInput
    update: XOR<ESTUDIANTES_CARRERASUpdateWithoutEstudianteInput, ESTUDIANTES_CARRERASUncheckedUpdateWithoutEstudianteInput>
    create: XOR<ESTUDIANTES_CARRERASCreateWithoutEstudianteInput, ESTUDIANTES_CARRERASUncheckedCreateWithoutEstudianteInput>
  }

  export type ESTUDIANTES_CARRERASUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: ESTUDIANTES_CARRERASWhereUniqueInput
    data: XOR<ESTUDIANTES_CARRERASUpdateWithoutEstudianteInput, ESTUDIANTES_CARRERASUncheckedUpdateWithoutEstudianteInput>
  }

  export type ESTUDIANTES_CARRERASUpdateManyWithWhereWithoutEstudianteInput = {
    where: ESTUDIANTES_CARRERASScalarWhereInput
    data: XOR<ESTUDIANTES_CARRERASUpdateManyMutationInput, ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type CURSADASUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: CURSADASWhereUniqueInput
    update: XOR<CURSADASUpdateWithoutEstudianteInput, CURSADASUncheckedUpdateWithoutEstudianteInput>
    create: XOR<CURSADASCreateWithoutEstudianteInput, CURSADASUncheckedCreateWithoutEstudianteInput>
  }

  export type CURSADASUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: CURSADASWhereUniqueInput
    data: XOR<CURSADASUpdateWithoutEstudianteInput, CURSADASUncheckedUpdateWithoutEstudianteInput>
  }

  export type CURSADASUpdateManyWithWhereWithoutEstudianteInput = {
    where: CURSADASScalarWhereInput
    data: XOR<CURSADASUpdateManyMutationInput, CURSADASUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type CONDICIONES_MATERIASUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    update: XOR<CONDICIONES_MATERIASUpdateWithoutEstudianteInput, CONDICIONES_MATERIASUncheckedUpdateWithoutEstudianteInput>
    create: XOR<CONDICIONES_MATERIASCreateWithoutEstudianteInput, CONDICIONES_MATERIASUncheckedCreateWithoutEstudianteInput>
  }

  export type CONDICIONES_MATERIASUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: CONDICIONES_MATERIASWhereUniqueInput
    data: XOR<CONDICIONES_MATERIASUpdateWithoutEstudianteInput, CONDICIONES_MATERIASUncheckedUpdateWithoutEstudianteInput>
  }

  export type CONDICIONES_MATERIASUpdateManyWithWhereWithoutEstudianteInput = {
    where: CONDICIONES_MATERIASScalarWhereInput
    data: XOR<CONDICIONES_MATERIASUpdateManyMutationInput, CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type ESTUDIANTESCreateWithoutInscripcionesInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    pais: PAISESCreateNestedOneWithoutEstudiantesInput
    localidad: LOCALIDADESCreateNestedOneWithoutEstudiantesInput
    area_telefonica: AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput
    genero: GENEROSCreateNestedOneWithoutEstudiantesInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateWithoutInscripcionesInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESCreateOrConnectWithoutInscripcionesInput = {
    where: ESTUDIANTESWhereUniqueInput
    create: XOR<ESTUDIANTESCreateWithoutInscripcionesInput, ESTUDIANTESUncheckedCreateWithoutInscripcionesInput>
  }

  export type CARRERASCreateWithoutInscripcionesInput = {
    nombre: string
    duracion: number
    titulo_otorgado: string
    materias?: MATERIASCreateNestedManyWithoutCarreraInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutCarreraInput
  }

  export type CARRERASUncheckedCreateWithoutInscripcionesInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    titulo_otorgado: string
    materias?: MATERIASUncheckedCreateNestedManyWithoutCarreraInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CARRERASCreateOrConnectWithoutInscripcionesInput = {
    where: CARRERASWhereUniqueInput
    create: XOR<CARRERASCreateWithoutInscripcionesInput, CARRERASUncheckedCreateWithoutInscripcionesInput>
  }

  export type ESTUDIANTESUpsertWithoutInscripcionesInput = {
    update: XOR<ESTUDIANTESUpdateWithoutInscripcionesInput, ESTUDIANTESUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<ESTUDIANTESCreateWithoutInscripcionesInput, ESTUDIANTESUncheckedCreateWithoutInscripcionesInput>
    where?: ESTUDIANTESWhereInput
  }

  export type ESTUDIANTESUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: ESTUDIANTESWhereInput
    data: XOR<ESTUDIANTESUpdateWithoutInscripcionesInput, ESTUDIANTESUncheckedUpdateWithoutInscripcionesInput>
  }

  export type ESTUDIANTESUpdateWithoutInscripcionesInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutEstudiantesNestedInput
    localidad?: LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput
    area_telefonica?: AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput
    genero?: GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateWithoutInscripcionesInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type CARRERASUpsertWithoutInscripcionesInput = {
    update: XOR<CARRERASUpdateWithoutInscripcionesInput, CARRERASUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<CARRERASCreateWithoutInscripcionesInput, CARRERASUncheckedCreateWithoutInscripcionesInput>
    where?: CARRERASWhereInput
  }

  export type CARRERASUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: CARRERASWhereInput
    data: XOR<CARRERASUpdateWithoutInscripcionesInput, CARRERASUncheckedUpdateWithoutInscripcionesInput>
  }

  export type CARRERASUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
    materias?: MATERIASUpdateManyWithoutCarreraNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutCarreraNestedInput
  }

  export type CARRERASUncheckedUpdateWithoutInscripcionesInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
    materias?: MATERIASUncheckedUpdateManyWithoutCarreraNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type ESTUDIANTESCreateWithoutEstudiantes_carrerasInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    pais: PAISESCreateNestedOneWithoutEstudiantesInput
    localidad: LOCALIDADESCreateNestedOneWithoutEstudiantesInput
    area_telefonica: AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput
    genero: GENEROSCreateNestedOneWithoutEstudiantesInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateWithoutEstudiantes_carrerasInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESCreateOrConnectWithoutEstudiantes_carrerasInput = {
    where: ESTUDIANTESWhereUniqueInput
    create: XOR<ESTUDIANTESCreateWithoutEstudiantes_carrerasInput, ESTUDIANTESUncheckedCreateWithoutEstudiantes_carrerasInput>
  }

  export type CARRERASCreateWithoutEstudiantes_carrerasInput = {
    nombre: string
    duracion: number
    titulo_otorgado: string
    materias?: MATERIASCreateNestedManyWithoutCarreraInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutCarreraInput
  }

  export type CARRERASUncheckedCreateWithoutEstudiantes_carrerasInput = {
    id_carrera?: number
    nombre: string
    duracion: number
    titulo_otorgado: string
    materias?: MATERIASUncheckedCreateNestedManyWithoutCarreraInput
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutCarreraInput
  }

  export type CARRERASCreateOrConnectWithoutEstudiantes_carrerasInput = {
    where: CARRERASWhereUniqueInput
    create: XOR<CARRERASCreateWithoutEstudiantes_carrerasInput, CARRERASUncheckedCreateWithoutEstudiantes_carrerasInput>
  }

  export type ESTUDIANTESUpsertWithoutEstudiantes_carrerasInput = {
    update: XOR<ESTUDIANTESUpdateWithoutEstudiantes_carrerasInput, ESTUDIANTESUncheckedUpdateWithoutEstudiantes_carrerasInput>
    create: XOR<ESTUDIANTESCreateWithoutEstudiantes_carrerasInput, ESTUDIANTESUncheckedCreateWithoutEstudiantes_carrerasInput>
    where?: ESTUDIANTESWhereInput
  }

  export type ESTUDIANTESUpdateToOneWithWhereWithoutEstudiantes_carrerasInput = {
    where?: ESTUDIANTESWhereInput
    data: XOR<ESTUDIANTESUpdateWithoutEstudiantes_carrerasInput, ESTUDIANTESUncheckedUpdateWithoutEstudiantes_carrerasInput>
  }

  export type ESTUDIANTESUpdateWithoutEstudiantes_carrerasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutEstudiantesNestedInput
    localidad?: LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput
    area_telefonica?: AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput
    genero?: GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateWithoutEstudiantes_carrerasInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type CARRERASUpsertWithoutEstudiantes_carrerasInput = {
    update: XOR<CARRERASUpdateWithoutEstudiantes_carrerasInput, CARRERASUncheckedUpdateWithoutEstudiantes_carrerasInput>
    create: XOR<CARRERASCreateWithoutEstudiantes_carrerasInput, CARRERASUncheckedCreateWithoutEstudiantes_carrerasInput>
    where?: CARRERASWhereInput
  }

  export type CARRERASUpdateToOneWithWhereWithoutEstudiantes_carrerasInput = {
    where?: CARRERASWhereInput
    data: XOR<CARRERASUpdateWithoutEstudiantes_carrerasInput, CARRERASUncheckedUpdateWithoutEstudiantes_carrerasInput>
  }

  export type CARRERASUpdateWithoutEstudiantes_carrerasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
    materias?: MATERIASUpdateManyWithoutCarreraNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutCarreraNestedInput
  }

  export type CARRERASUncheckedUpdateWithoutEstudiantes_carrerasInput = {
    id_carrera?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    duracion?: IntFieldUpdateOperationsInput | number
    titulo_otorgado?: StringFieldUpdateOperationsInput | string
    materias?: MATERIASUncheckedUpdateManyWithoutCarreraNestedInput
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutCarreraNestedInput
  }

  export type ESTUDIANTESCreateWithoutCursadasInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    pais: PAISESCreateNestedOneWithoutEstudiantesInput
    localidad: LOCALIDADESCreateNestedOneWithoutEstudiantesInput
    area_telefonica: AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput
    genero: GENEROSCreateNestedOneWithoutEstudiantesInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateWithoutCursadasInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESCreateOrConnectWithoutCursadasInput = {
    where: ESTUDIANTESWhereUniqueInput
    create: XOR<ESTUDIANTESCreateWithoutCursadasInput, ESTUDIANTESUncheckedCreateWithoutCursadasInput>
  }

  export type MATERIASCreateWithoutCursadasInput = {
    nombre: string
    carrera: CARRERASCreateNestedOneWithoutMateriasInput
    condiciones_materias?: CONDICIONES_MATERIASCreateNestedManyWithoutMateriaInput
  }

  export type MATERIASUncheckedCreateWithoutCursadasInput = {
    id_materia?: number
    nombre: string
    id_carrera: number
    condiciones_materias?: CONDICIONES_MATERIASUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MATERIASCreateOrConnectWithoutCursadasInput = {
    where: MATERIASWhereUniqueInput
    create: XOR<MATERIASCreateWithoutCursadasInput, MATERIASUncheckedCreateWithoutCursadasInput>
  }

  export type ESTUDIANTESUpsertWithoutCursadasInput = {
    update: XOR<ESTUDIANTESUpdateWithoutCursadasInput, ESTUDIANTESUncheckedUpdateWithoutCursadasInput>
    create: XOR<ESTUDIANTESCreateWithoutCursadasInput, ESTUDIANTESUncheckedCreateWithoutCursadasInput>
    where?: ESTUDIANTESWhereInput
  }

  export type ESTUDIANTESUpdateToOneWithWhereWithoutCursadasInput = {
    where?: ESTUDIANTESWhereInput
    data: XOR<ESTUDIANTESUpdateWithoutCursadasInput, ESTUDIANTESUncheckedUpdateWithoutCursadasInput>
  }

  export type ESTUDIANTESUpdateWithoutCursadasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutEstudiantesNestedInput
    localidad?: LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput
    area_telefonica?: AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput
    genero?: GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateWithoutCursadasInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type MATERIASUpsertWithoutCursadasInput = {
    update: XOR<MATERIASUpdateWithoutCursadasInput, MATERIASUncheckedUpdateWithoutCursadasInput>
    create: XOR<MATERIASCreateWithoutCursadasInput, MATERIASUncheckedCreateWithoutCursadasInput>
    where?: MATERIASWhereInput
  }

  export type MATERIASUpdateToOneWithWhereWithoutCursadasInput = {
    where?: MATERIASWhereInput
    data: XOR<MATERIASUpdateWithoutCursadasInput, MATERIASUncheckedUpdateWithoutCursadasInput>
  }

  export type MATERIASUpdateWithoutCursadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CARRERASUpdateOneRequiredWithoutMateriasNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutMateriaNestedInput
  }

  export type MATERIASUncheckedUpdateWithoutCursadasInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type ESTUDIANTESCreateWithoutCondiciones_materiasInput = {
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    pais: PAISESCreateNestedOneWithoutEstudiantesInput
    localidad: LOCALIDADESCreateNestedOneWithoutEstudiantesInput
    area_telefonica: AREAS_TELEFONICASCreateNestedOneWithoutEstudiantesInput
    genero: GENEROSCreateNestedOneWithoutEstudiantesInput
    inscripciones?: INSCRIPCIONESCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESUncheckedCreateWithoutCondiciones_materiasInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
    inscripciones?: INSCRIPCIONESUncheckedCreateNestedManyWithoutEstudianteInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedCreateNestedManyWithoutEstudianteInput
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type ESTUDIANTESCreateOrConnectWithoutCondiciones_materiasInput = {
    where: ESTUDIANTESWhereUniqueInput
    create: XOR<ESTUDIANTESCreateWithoutCondiciones_materiasInput, ESTUDIANTESUncheckedCreateWithoutCondiciones_materiasInput>
  }

  export type MATERIASCreateWithoutCondiciones_materiasInput = {
    nombre: string
    carrera: CARRERASCreateNestedOneWithoutMateriasInput
    cursadas?: CURSADASCreateNestedManyWithoutMateriaInput
  }

  export type MATERIASUncheckedCreateWithoutCondiciones_materiasInput = {
    id_materia?: number
    nombre: string
    id_carrera: number
    cursadas?: CURSADASUncheckedCreateNestedManyWithoutMateriaInput
  }

  export type MATERIASCreateOrConnectWithoutCondiciones_materiasInput = {
    where: MATERIASWhereUniqueInput
    create: XOR<MATERIASCreateWithoutCondiciones_materiasInput, MATERIASUncheckedCreateWithoutCondiciones_materiasInput>
  }

  export type CONDICIONESCreateWithoutCondiciones_materiasInput = {
    nombre: string
  }

  export type CONDICIONESUncheckedCreateWithoutCondiciones_materiasInput = {
    id_condition?: number
    nombre: string
  }

  export type CONDICIONESCreateOrConnectWithoutCondiciones_materiasInput = {
    where: CONDICIONESWhereUniqueInput
    create: XOR<CONDICIONESCreateWithoutCondiciones_materiasInput, CONDICIONESUncheckedCreateWithoutCondiciones_materiasInput>
  }

  export type ESTUDIANTESUpsertWithoutCondiciones_materiasInput = {
    update: XOR<ESTUDIANTESUpdateWithoutCondiciones_materiasInput, ESTUDIANTESUncheckedUpdateWithoutCondiciones_materiasInput>
    create: XOR<ESTUDIANTESCreateWithoutCondiciones_materiasInput, ESTUDIANTESUncheckedCreateWithoutCondiciones_materiasInput>
    where?: ESTUDIANTESWhereInput
  }

  export type ESTUDIANTESUpdateToOneWithWhereWithoutCondiciones_materiasInput = {
    where?: ESTUDIANTESWhereInput
    data: XOR<ESTUDIANTESUpdateWithoutCondiciones_materiasInput, ESTUDIANTESUncheckedUpdateWithoutCondiciones_materiasInput>
  }

  export type ESTUDIANTESUpdateWithoutCondiciones_materiasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutEstudiantesNestedInput
    localidad?: LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput
    area_telefonica?: AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput
    genero?: GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateWithoutCondiciones_materiasInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type MATERIASUpsertWithoutCondiciones_materiasInput = {
    update: XOR<MATERIASUpdateWithoutCondiciones_materiasInput, MATERIASUncheckedUpdateWithoutCondiciones_materiasInput>
    create: XOR<MATERIASCreateWithoutCondiciones_materiasInput, MATERIASUncheckedCreateWithoutCondiciones_materiasInput>
    where?: MATERIASWhereInput
  }

  export type MATERIASUpdateToOneWithWhereWithoutCondiciones_materiasInput = {
    where?: MATERIASWhereInput
    data: XOR<MATERIASUpdateWithoutCondiciones_materiasInput, MATERIASUncheckedUpdateWithoutCondiciones_materiasInput>
  }

  export type MATERIASUpdateWithoutCondiciones_materiasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    carrera?: CARRERASUpdateOneRequiredWithoutMateriasNestedInput
    cursadas?: CURSADASUpdateManyWithoutMateriaNestedInput
  }

  export type MATERIASUncheckedUpdateWithoutCondiciones_materiasInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    id_carrera?: IntFieldUpdateOperationsInput | number
    cursadas?: CURSADASUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type CONDICIONESUpsertWithoutCondiciones_materiasInput = {
    update: XOR<CONDICIONESUpdateWithoutCondiciones_materiasInput, CONDICIONESUncheckedUpdateWithoutCondiciones_materiasInput>
    create: XOR<CONDICIONESCreateWithoutCondiciones_materiasInput, CONDICIONESUncheckedCreateWithoutCondiciones_materiasInput>
    where?: CONDICIONESWhereInput
  }

  export type CONDICIONESUpdateToOneWithWhereWithoutCondiciones_materiasInput = {
    where?: CONDICIONESWhereInput
    data: XOR<CONDICIONESUpdateWithoutCondiciones_materiasInput, CONDICIONESUncheckedUpdateWithoutCondiciones_materiasInput>
  }

  export type CONDICIONESUpdateWithoutCondiciones_materiasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type CONDICIONESUncheckedUpdateWithoutCondiciones_materiasInput = {
    id_condition?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type LOCALIDADESCreateManyPaisInput = {
    id_localidad?: number
    nombre: string
  }

  export type ESTUDIANTESCreateManyPaisInput = {
    id_estudiante?: number
    id_localidad: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
  }

  export type LOCALIDADESUpdateWithoutPaisInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: ESTUDIANTESUpdateManyWithoutLocalidadNestedInput
  }

  export type LOCALIDADESUncheckedUpdateWithoutPaisInput = {
    id_localidad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estudiantes?: ESTUDIANTESUncheckedUpdateManyWithoutLocalidadNestedInput
  }

  export type LOCALIDADESUncheckedUpdateManyWithoutPaisInput = {
    id_localidad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type ESTUDIANTESUpdateWithoutPaisInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    localidad?: LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput
    area_telefonica?: AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput
    genero?: GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateWithoutPaisInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateManyWithoutPaisInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ESTUDIANTESCreateManyLocalidadInput = {
    id_estudiante?: number
    id_pais: number
    id_area_telefonica: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
  }

  export type ESTUDIANTESUpdateWithoutLocalidadInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutEstudiantesNestedInput
    area_telefonica?: AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput
    genero?: GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateWithoutLocalidadInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateManyWithoutLocalidadInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ESTUDIANTESCreateManyArea_telefonicaInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_genero: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
  }

  export type ESTUDIANTESUpdateWithoutArea_telefonicaInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutEstudiantesNestedInput
    localidad?: LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput
    genero?: GENEROSUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateWithoutArea_telefonicaInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateManyWithoutArea_telefonicaInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_genero?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ESTUDIANTESCreateManyGeneroInput = {
    id_estudiante?: number
    id_pais: number
    id_localidad: number
    id_area_telefonica: number
    nombres: string
    apellidos: string
    dni: string
    fecha_nacimiento: Date | string
    email: string
    telefono: string
    domicilio: string
    fecha_ingreso: Date | string
    cohorte: string
    secundario: string
    cuil: string
    examen_mayores25: boolean
    solicito_beca: boolean
    trabajador: boolean
    persona_a_cargo: boolean
    observaciones?: string | null
    estado?: string
  }

  export type ESTUDIANTESUpdateWithoutGeneroInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    pais?: PAISESUpdateOneRequiredWithoutEstudiantesNestedInput
    localidad?: LOCALIDADESUpdateOneRequiredWithoutEstudiantesNestedInput
    area_telefonica?: AREAS_TELEFONICASUpdateOneRequiredWithoutEstudiantesNestedInput
    inscripciones?: INSCRIPCIONESUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateWithoutGeneroInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    inscripciones?: INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteNestedInput
    estudiantes_carreras?: ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteNestedInput
    cursadas?: CURSADASUncheckedUpdateManyWithoutEstudianteNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type ESTUDIANTESUncheckedUpdateManyWithoutGeneroInput = {
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_pais?: IntFieldUpdateOperationsInput | number
    id_localidad?: IntFieldUpdateOperationsInput | number
    id_area_telefonica?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    domicilio?: StringFieldUpdateOperationsInput | string
    fecha_ingreso?: DateTimeFieldUpdateOperationsInput | Date | string
    cohorte?: StringFieldUpdateOperationsInput | string
    secundario?: StringFieldUpdateOperationsInput | string
    cuil?: StringFieldUpdateOperationsInput | string
    examen_mayores25?: BoolFieldUpdateOperationsInput | boolean
    solicito_beca?: BoolFieldUpdateOperationsInput | boolean
    trabajador?: BoolFieldUpdateOperationsInput | boolean
    persona_a_cargo?: BoolFieldUpdateOperationsInput | boolean
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type MATERIASCreateManyCarreraInput = {
    id_materia?: number
    nombre: string
  }

  export type INSCRIPCIONESCreateManyCarreraInput = {
    id_inscripcion?: number
    id_estudiante: number
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
  }

  export type ESTUDIANTES_CARRERASCreateManyCarreraInput = {
    id_ec?: number
    id_estudiante: number
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
  }

  export type MATERIASUpdateWithoutCarreraInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cursadas?: CURSADASUpdateManyWithoutMateriaNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUpdateManyWithoutMateriaNestedInput
  }

  export type MATERIASUncheckedUpdateWithoutCarreraInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cursadas?: CURSADASUncheckedUpdateManyWithoutMateriaNestedInput
    condiciones_materias?: CONDICIONES_MATERIASUncheckedUpdateManyWithoutMateriaNestedInput
  }

  export type MATERIASUncheckedUpdateManyWithoutCarreraInput = {
    id_materia?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type INSCRIPCIONESUpdateWithoutCarreraInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type INSCRIPCIONESUncheckedUpdateWithoutCarreraInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type INSCRIPCIONESUncheckedUpdateManyWithoutCarreraInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ESTUDIANTES_CARRERASUpdateWithoutCarreraInput = {
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutEstudiantes_carrerasNestedInput
  }

  export type ESTUDIANTES_CARRERASUncheckedUpdateWithoutCarreraInput = {
    id_ec?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutCarreraInput = {
    id_ec?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CURSADASCreateManyMateriaInput = {
    id_cursada?: number
    id_estudiante: number
    nota_final?: Decimal | DecimalJsLike | number | string | null
  }

  export type CONDICIONES_MATERIASCreateManyMateriaInput = {
    id_cm?: number
    id_estudiante: number
    id_condition: number
  }

  export type CURSADASUpdateWithoutMateriaInput = {
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutCursadasNestedInput
  }

  export type CURSADASUncheckedUpdateWithoutMateriaInput = {
    id_cursada?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CURSADASUncheckedUpdateManyWithoutMateriaInput = {
    id_cursada?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CONDICIONES_MATERIASUpdateWithoutMateriaInput = {
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutCondiciones_materiasNestedInput
    condicion?: CONDICIONESUpdateOneRequiredWithoutCondiciones_materiasNestedInput
  }

  export type CONDICIONES_MATERIASUncheckedUpdateWithoutMateriaInput = {
    id_cm?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_condition?: IntFieldUpdateOperationsInput | number
  }

  export type CONDICIONES_MATERIASUncheckedUpdateManyWithoutMateriaInput = {
    id_cm?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_condition?: IntFieldUpdateOperationsInput | number
  }

  export type CONDICIONES_MATERIASCreateManyCondicionInput = {
    id_cm?: number
    id_estudiante: number
    id_materia: number
  }

  export type CONDICIONES_MATERIASUpdateWithoutCondicionInput = {
    estudiante?: ESTUDIANTESUpdateOneRequiredWithoutCondiciones_materiasNestedInput
    materia?: MATERIASUpdateOneRequiredWithoutCondiciones_materiasNestedInput
  }

  export type CONDICIONES_MATERIASUncheckedUpdateWithoutCondicionInput = {
    id_cm?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
  }

  export type CONDICIONES_MATERIASUncheckedUpdateManyWithoutCondicionInput = {
    id_cm?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
  }

  export type INSCRIPCIONESCreateManyEstudianteInput = {
    id_inscripcion?: number
    id_carrera: number
    fecha_inscripcion?: Date | string
    estado?: boolean
    causa_inactividad?: string | null
  }

  export type ESTUDIANTES_CARRERASCreateManyEstudianteInput = {
    id_ec?: number
    id_carrera: number
    fecha_alta?: Date | string
    fecha_baja?: Date | string | null
  }

  export type CURSADASCreateManyEstudianteInput = {
    id_cursada?: number
    id_materia: number
    nota_final?: Decimal | DecimalJsLike | number | string | null
  }

  export type CONDICIONES_MATERIASCreateManyEstudianteInput = {
    id_cm?: number
    id_materia: number
    id_condition: number
  }

  export type INSCRIPCIONESUpdateWithoutEstudianteInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
    carrera?: CARRERASUpdateOneRequiredWithoutInscripcionesNestedInput
  }

  export type INSCRIPCIONESUncheckedUpdateWithoutEstudianteInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type INSCRIPCIONESUncheckedUpdateManyWithoutEstudianteInput = {
    id_inscripcion?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    causa_inactividad?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ESTUDIANTES_CARRERASUpdateWithoutEstudianteInput = {
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carrera?: CARRERASUpdateOneRequiredWithoutEstudiantes_carrerasNestedInput
  }

  export type ESTUDIANTES_CARRERASUncheckedUpdateWithoutEstudianteInput = {
    id_ec?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ESTUDIANTES_CARRERASUncheckedUpdateManyWithoutEstudianteInput = {
    id_ec?: IntFieldUpdateOperationsInput | number
    id_carrera?: IntFieldUpdateOperationsInput | number
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_baja?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CURSADASUpdateWithoutEstudianteInput = {
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    materia?: MATERIASUpdateOneRequiredWithoutCursadasNestedInput
  }

  export type CURSADASUncheckedUpdateWithoutEstudianteInput = {
    id_cursada?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CURSADASUncheckedUpdateManyWithoutEstudianteInput = {
    id_cursada?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    nota_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CONDICIONES_MATERIASUpdateWithoutEstudianteInput = {
    materia?: MATERIASUpdateOneRequiredWithoutCondiciones_materiasNestedInput
    condicion?: CONDICIONESUpdateOneRequiredWithoutCondiciones_materiasNestedInput
  }

  export type CONDICIONES_MATERIASUncheckedUpdateWithoutEstudianteInput = {
    id_cm?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    id_condition?: IntFieldUpdateOperationsInput | number
  }

  export type CONDICIONES_MATERIASUncheckedUpdateManyWithoutEstudianteInput = {
    id_cm?: IntFieldUpdateOperationsInput | number
    id_materia?: IntFieldUpdateOperationsInput | number
    id_condition?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}