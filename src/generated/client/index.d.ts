
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
 * Model PublicForm
 * 
 */
export type PublicForm = $Result.DefaultSelection<Prisma.$PublicFormPayload>
/**
 * Model CalendarEvent
 * 
 */
export type CalendarEvent = $Result.DefaultSelection<Prisma.$CalendarEventPayload>
/**
 * Model StudentAdmission
 * 
 */
export type StudentAdmission = $Result.DefaultSelection<Prisma.$StudentAdmissionPayload>
/**
 * Model TraiRegister
 * 
 */
export type TraiRegister = $Result.DefaultSelection<Prisma.$TraiRegisterPayload>
/**
 * Model InstiRegister
 * 
 */
export type InstiRegister = $Result.DefaultSelection<Prisma.$InstiRegisterPayload>
/**
 * Model ContactSubmission
 * 
 */
export type ContactSubmission = $Result.DefaultSelection<Prisma.$ContactSubmissionPayload>
/**
 * Model DonationSubmission
 * 
 */
export type DonationSubmission = $Result.DefaultSelection<Prisma.$DonationSubmissionPayload>
/**
 * Model JobPosting
 * 
 */
export type JobPosting = $Result.DefaultSelection<Prisma.$JobPostingPayload>
/**
 * Model JobApplication
 * 
 */
export type JobApplication = $Result.DefaultSelection<Prisma.$JobApplicationPayload>
/**
 * Model Documentation
 * 
 */
export type Documentation = $Result.DefaultSelection<Prisma.$DocumentationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PublicForms
 * const publicForms = await prisma.publicForm.findMany()
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
   * // Fetch zero or more PublicForms
   * const publicForms = await prisma.publicForm.findMany()
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
   * `prisma.publicForm`: Exposes CRUD operations for the **PublicForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublicForms
    * const publicForms = await prisma.publicForm.findMany()
    * ```
    */
  get publicForm(): Prisma.PublicFormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.calendarEvent`: Exposes CRUD operations for the **CalendarEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CalendarEvents
    * const calendarEvents = await prisma.calendarEvent.findMany()
    * ```
    */
  get calendarEvent(): Prisma.CalendarEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentAdmission`: Exposes CRUD operations for the **StudentAdmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentAdmissions
    * const studentAdmissions = await prisma.studentAdmission.findMany()
    * ```
    */
  get studentAdmission(): Prisma.StudentAdmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.traiRegister`: Exposes CRUD operations for the **TraiRegister** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TraiRegisters
    * const traiRegisters = await prisma.traiRegister.findMany()
    * ```
    */
  get traiRegister(): Prisma.TraiRegisterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instiRegister`: Exposes CRUD operations for the **InstiRegister** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstiRegisters
    * const instiRegisters = await prisma.instiRegister.findMany()
    * ```
    */
  get instiRegister(): Prisma.InstiRegisterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactSubmission`: Exposes CRUD operations for the **ContactSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactSubmissions
    * const contactSubmissions = await prisma.contactSubmission.findMany()
    * ```
    */
  get contactSubmission(): Prisma.ContactSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donationSubmission`: Exposes CRUD operations for the **DonationSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DonationSubmissions
    * const donationSubmissions = await prisma.donationSubmission.findMany()
    * ```
    */
  get donationSubmission(): Prisma.DonationSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobPosting`: Exposes CRUD operations for the **JobPosting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobPostings
    * const jobPostings = await prisma.jobPosting.findMany()
    * ```
    */
  get jobPosting(): Prisma.JobPostingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.jobApplication`: Exposes CRUD operations for the **JobApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JobApplications
    * const jobApplications = await prisma.jobApplication.findMany()
    * ```
    */
  get jobApplication(): Prisma.JobApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentation`: Exposes CRUD operations for the **Documentation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documentations
    * const documentations = await prisma.documentation.findMany()
    * ```
    */
  get documentation(): Prisma.DocumentationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    PublicForm: 'PublicForm',
    CalendarEvent: 'CalendarEvent',
    StudentAdmission: 'StudentAdmission',
    TraiRegister: 'TraiRegister',
    InstiRegister: 'InstiRegister',
    ContactSubmission: 'ContactSubmission',
    DonationSubmission: 'DonationSubmission',
    JobPosting: 'JobPosting',
    JobApplication: 'JobApplication',
    Documentation: 'Documentation'
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
      modelProps: "publicForm" | "calendarEvent" | "studentAdmission" | "traiRegister" | "instiRegister" | "contactSubmission" | "donationSubmission" | "jobPosting" | "jobApplication" | "documentation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PublicForm: {
        payload: Prisma.$PublicFormPayload<ExtArgs>
        fields: Prisma.PublicFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublicFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublicFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>
          }
          findFirst: {
            args: Prisma.PublicFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublicFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>
          }
          findMany: {
            args: Prisma.PublicFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>[]
          }
          create: {
            args: Prisma.PublicFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>
          }
          createMany: {
            args: Prisma.PublicFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublicFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>[]
          }
          delete: {
            args: Prisma.PublicFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>
          }
          update: {
            args: Prisma.PublicFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>
          }
          deleteMany: {
            args: Prisma.PublicFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublicFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublicFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>[]
          }
          upsert: {
            args: Prisma.PublicFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublicFormPayload>
          }
          aggregate: {
            args: Prisma.PublicFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublicForm>
          }
          groupBy: {
            args: Prisma.PublicFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublicFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublicFormCountArgs<ExtArgs>
            result: $Utils.Optional<PublicFormCountAggregateOutputType> | number
          }
        }
      }
      CalendarEvent: {
        payload: Prisma.$CalendarEventPayload<ExtArgs>
        fields: Prisma.CalendarEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CalendarEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CalendarEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findFirst: {
            args: Prisma.CalendarEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CalendarEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          findMany: {
            args: Prisma.CalendarEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          create: {
            args: Prisma.CalendarEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          createMany: {
            args: Prisma.CalendarEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CalendarEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          delete: {
            args: Prisma.CalendarEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          update: {
            args: Prisma.CalendarEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          deleteMany: {
            args: Prisma.CalendarEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CalendarEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CalendarEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>[]
          }
          upsert: {
            args: Prisma.CalendarEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CalendarEventPayload>
          }
          aggregate: {
            args: Prisma.CalendarEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCalendarEvent>
          }
          groupBy: {
            args: Prisma.CalendarEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.CalendarEventCountArgs<ExtArgs>
            result: $Utils.Optional<CalendarEventCountAggregateOutputType> | number
          }
        }
      }
      StudentAdmission: {
        payload: Prisma.$StudentAdmissionPayload<ExtArgs>
        fields: Prisma.StudentAdmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentAdmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentAdmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>
          }
          findFirst: {
            args: Prisma.StudentAdmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentAdmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>
          }
          findMany: {
            args: Prisma.StudentAdmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>[]
          }
          create: {
            args: Prisma.StudentAdmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>
          }
          createMany: {
            args: Prisma.StudentAdmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentAdmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>[]
          }
          delete: {
            args: Prisma.StudentAdmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>
          }
          update: {
            args: Prisma.StudentAdmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>
          }
          deleteMany: {
            args: Prisma.StudentAdmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentAdmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentAdmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>[]
          }
          upsert: {
            args: Prisma.StudentAdmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentAdmissionPayload>
          }
          aggregate: {
            args: Prisma.StudentAdmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentAdmission>
          }
          groupBy: {
            args: Prisma.StudentAdmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentAdmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentAdmissionCountArgs<ExtArgs>
            result: $Utils.Optional<StudentAdmissionCountAggregateOutputType> | number
          }
        }
      }
      TraiRegister: {
        payload: Prisma.$TraiRegisterPayload<ExtArgs>
        fields: Prisma.TraiRegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TraiRegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TraiRegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>
          }
          findFirst: {
            args: Prisma.TraiRegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TraiRegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>
          }
          findMany: {
            args: Prisma.TraiRegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>[]
          }
          create: {
            args: Prisma.TraiRegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>
          }
          createMany: {
            args: Prisma.TraiRegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TraiRegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>[]
          }
          delete: {
            args: Prisma.TraiRegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>
          }
          update: {
            args: Prisma.TraiRegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>
          }
          deleteMany: {
            args: Prisma.TraiRegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TraiRegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TraiRegisterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>[]
          }
          upsert: {
            args: Prisma.TraiRegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TraiRegisterPayload>
          }
          aggregate: {
            args: Prisma.TraiRegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTraiRegister>
          }
          groupBy: {
            args: Prisma.TraiRegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<TraiRegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.TraiRegisterCountArgs<ExtArgs>
            result: $Utils.Optional<TraiRegisterCountAggregateOutputType> | number
          }
        }
      }
      InstiRegister: {
        payload: Prisma.$InstiRegisterPayload<ExtArgs>
        fields: Prisma.InstiRegisterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstiRegisterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstiRegisterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>
          }
          findFirst: {
            args: Prisma.InstiRegisterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstiRegisterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>
          }
          findMany: {
            args: Prisma.InstiRegisterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>[]
          }
          create: {
            args: Prisma.InstiRegisterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>
          }
          createMany: {
            args: Prisma.InstiRegisterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstiRegisterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>[]
          }
          delete: {
            args: Prisma.InstiRegisterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>
          }
          update: {
            args: Prisma.InstiRegisterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>
          }
          deleteMany: {
            args: Prisma.InstiRegisterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstiRegisterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstiRegisterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>[]
          }
          upsert: {
            args: Prisma.InstiRegisterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstiRegisterPayload>
          }
          aggregate: {
            args: Prisma.InstiRegisterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstiRegister>
          }
          groupBy: {
            args: Prisma.InstiRegisterGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstiRegisterGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstiRegisterCountArgs<ExtArgs>
            result: $Utils.Optional<InstiRegisterCountAggregateOutputType> | number
          }
        }
      }
      ContactSubmission: {
        payload: Prisma.$ContactSubmissionPayload<ExtArgs>
        fields: Prisma.ContactSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findFirst: {
            args: Prisma.ContactSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          findMany: {
            args: Prisma.ContactSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          create: {
            args: Prisma.ContactSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          createMany: {
            args: Prisma.ContactSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          delete: {
            args: Prisma.ContactSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          update: {
            args: Prisma.ContactSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.ContactSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.ContactSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactSubmissionPayload>
          }
          aggregate: {
            args: Prisma.ContactSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactSubmission>
          }
          groupBy: {
            args: Prisma.ContactSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<ContactSubmissionCountAggregateOutputType> | number
          }
        }
      }
      DonationSubmission: {
        payload: Prisma.$DonationSubmissionPayload<ExtArgs>
        fields: Prisma.DonationSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>
          }
          findFirst: {
            args: Prisma.DonationSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>
          }
          findMany: {
            args: Prisma.DonationSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>[]
          }
          create: {
            args: Prisma.DonationSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>
          }
          createMany: {
            args: Prisma.DonationSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>[]
          }
          delete: {
            args: Prisma.DonationSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>
          }
          update: {
            args: Prisma.DonationSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.DonationSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.DonationSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationSubmissionPayload>
          }
          aggregate: {
            args: Prisma.DonationSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonationSubmission>
          }
          groupBy: {
            args: Prisma.DonationSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<DonationSubmissionCountAggregateOutputType> | number
          }
        }
      }
      JobPosting: {
        payload: Prisma.$JobPostingPayload<ExtArgs>
        fields: Prisma.JobPostingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobPostingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobPostingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findFirst: {
            args: Prisma.JobPostingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobPostingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          findMany: {
            args: Prisma.JobPostingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          create: {
            args: Prisma.JobPostingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          createMany: {
            args: Prisma.JobPostingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobPostingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          delete: {
            args: Prisma.JobPostingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          update: {
            args: Prisma.JobPostingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          deleteMany: {
            args: Prisma.JobPostingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobPostingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobPostingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>[]
          }
          upsert: {
            args: Prisma.JobPostingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPostingPayload>
          }
          aggregate: {
            args: Prisma.JobPostingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobPosting>
          }
          groupBy: {
            args: Prisma.JobPostingGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobPostingGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobPostingCountArgs<ExtArgs>
            result: $Utils.Optional<JobPostingCountAggregateOutputType> | number
          }
        }
      }
      JobApplication: {
        payload: Prisma.$JobApplicationPayload<ExtArgs>
        fields: Prisma.JobApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findFirst: {
            args: Prisma.JobApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          findMany: {
            args: Prisma.JobApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          create: {
            args: Prisma.JobApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          createMany: {
            args: Prisma.JobApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          delete: {
            args: Prisma.JobApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          update: {
            args: Prisma.JobApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          deleteMany: {
            args: Prisma.JobApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>[]
          }
          upsert: {
            args: Prisma.JobApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobApplicationPayload>
          }
          aggregate: {
            args: Prisma.JobApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJobApplication>
          }
          groupBy: {
            args: Prisma.JobApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<JobApplicationCountAggregateOutputType> | number
          }
        }
      }
      Documentation: {
        payload: Prisma.$DocumentationPayload<ExtArgs>
        fields: Prisma.DocumentationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>
          }
          findFirst: {
            args: Prisma.DocumentationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>
          }
          findMany: {
            args: Prisma.DocumentationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>[]
          }
          create: {
            args: Prisma.DocumentationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>
          }
          createMany: {
            args: Prisma.DocumentationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>[]
          }
          delete: {
            args: Prisma.DocumentationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>
          }
          update: {
            args: Prisma.DocumentationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>
          }
          deleteMany: {
            args: Prisma.DocumentationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>[]
          }
          upsert: {
            args: Prisma.DocumentationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentationPayload>
          }
          aggregate: {
            args: Prisma.DocumentationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentation>
          }
          groupBy: {
            args: Prisma.DocumentationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentationCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentationCountAggregateOutputType> | number
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
    publicForm?: PublicFormOmit
    calendarEvent?: CalendarEventOmit
    studentAdmission?: StudentAdmissionOmit
    traiRegister?: TraiRegisterOmit
    instiRegister?: InstiRegisterOmit
    contactSubmission?: ContactSubmissionOmit
    donationSubmission?: DonationSubmissionOmit
    jobPosting?: JobPostingOmit
    jobApplication?: JobApplicationOmit
    documentation?: DocumentationOmit
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
   * Models
   */

  /**
   * Model PublicForm
   */

  export type AggregatePublicForm = {
    _count: PublicFormCountAggregateOutputType | null
    _min: PublicFormMinAggregateOutputType | null
    _max: PublicFormMaxAggregateOutputType | null
  }

  export type PublicFormMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type PublicFormMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    createdAt: Date | null
  }

  export type PublicFormCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    createdAt: number
    _all: number
  }


  export type PublicFormMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type PublicFormMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
  }

  export type PublicFormCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type PublicFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicForm to aggregate.
     */
    where?: PublicFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicForms to fetch.
     */
    orderBy?: PublicFormOrderByWithRelationInput | PublicFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublicFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublicForms
    **/
    _count?: true | PublicFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublicFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublicFormMaxAggregateInputType
  }

  export type GetPublicFormAggregateType<T extends PublicFormAggregateArgs> = {
        [P in keyof T & keyof AggregatePublicForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublicForm[P]>
      : GetScalarType<T[P], AggregatePublicForm[P]>
  }




  export type PublicFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublicFormWhereInput
    orderBy?: PublicFormOrderByWithAggregationInput | PublicFormOrderByWithAggregationInput[]
    by: PublicFormScalarFieldEnum[] | PublicFormScalarFieldEnum
    having?: PublicFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublicFormCountAggregateInputType | true
    _min?: PublicFormMinAggregateInputType
    _max?: PublicFormMaxAggregateInputType
  }

  export type PublicFormGroupByOutputType = {
    id: string
    name: string
    email: string
    message: string
    createdAt: Date
    _count: PublicFormCountAggregateOutputType | null
    _min: PublicFormMinAggregateOutputType | null
    _max: PublicFormMaxAggregateOutputType | null
  }

  type GetPublicFormGroupByPayload<T extends PublicFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublicFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublicFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublicFormGroupByOutputType[P]>
            : GetScalarType<T[P], PublicFormGroupByOutputType[P]>
        }
      >
    >


  export type PublicFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["publicForm"]>

  export type PublicFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["publicForm"]>

  export type PublicFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["publicForm"]>

  export type PublicFormSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type PublicFormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message" | "createdAt", ExtArgs["result"]["publicForm"]>

  export type $PublicFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublicForm"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      message: string
      createdAt: Date
    }, ExtArgs["result"]["publicForm"]>
    composites: {}
  }

  type PublicFormGetPayload<S extends boolean | null | undefined | PublicFormDefaultArgs> = $Result.GetResult<Prisma.$PublicFormPayload, S>

  type PublicFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublicFormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublicFormCountAggregateInputType | true
    }

  export interface PublicFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublicForm'], meta: { name: 'PublicForm' } }
    /**
     * Find zero or one PublicForm that matches the filter.
     * @param {PublicFormFindUniqueArgs} args - Arguments to find a PublicForm
     * @example
     * // Get one PublicForm
     * const publicForm = await prisma.publicForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublicFormFindUniqueArgs>(args: SelectSubset<T, PublicFormFindUniqueArgs<ExtArgs>>): Prisma__PublicFormClient<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublicForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublicFormFindUniqueOrThrowArgs} args - Arguments to find a PublicForm
     * @example
     * // Get one PublicForm
     * const publicForm = await prisma.publicForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublicFormFindUniqueOrThrowArgs>(args: SelectSubset<T, PublicFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublicFormClient<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFormFindFirstArgs} args - Arguments to find a PublicForm
     * @example
     * // Get one PublicForm
     * const publicForm = await prisma.publicForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublicFormFindFirstArgs>(args?: SelectSubset<T, PublicFormFindFirstArgs<ExtArgs>>): Prisma__PublicFormClient<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublicForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFormFindFirstOrThrowArgs} args - Arguments to find a PublicForm
     * @example
     * // Get one PublicForm
     * const publicForm = await prisma.publicForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublicFormFindFirstOrThrowArgs>(args?: SelectSubset<T, PublicFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublicFormClient<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublicForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublicForms
     * const publicForms = await prisma.publicForm.findMany()
     * 
     * // Get first 10 PublicForms
     * const publicForms = await prisma.publicForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publicFormWithIdOnly = await prisma.publicForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublicFormFindManyArgs>(args?: SelectSubset<T, PublicFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublicForm.
     * @param {PublicFormCreateArgs} args - Arguments to create a PublicForm.
     * @example
     * // Create one PublicForm
     * const PublicForm = await prisma.publicForm.create({
     *   data: {
     *     // ... data to create a PublicForm
     *   }
     * })
     * 
     */
    create<T extends PublicFormCreateArgs>(args: SelectSubset<T, PublicFormCreateArgs<ExtArgs>>): Prisma__PublicFormClient<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublicForms.
     * @param {PublicFormCreateManyArgs} args - Arguments to create many PublicForms.
     * @example
     * // Create many PublicForms
     * const publicForm = await prisma.publicForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublicFormCreateManyArgs>(args?: SelectSubset<T, PublicFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublicForms and returns the data saved in the database.
     * @param {PublicFormCreateManyAndReturnArgs} args - Arguments to create many PublicForms.
     * @example
     * // Create many PublicForms
     * const publicForm = await prisma.publicForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublicForms and only return the `id`
     * const publicFormWithIdOnly = await prisma.publicForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublicFormCreateManyAndReturnArgs>(args?: SelectSubset<T, PublicFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublicForm.
     * @param {PublicFormDeleteArgs} args - Arguments to delete one PublicForm.
     * @example
     * // Delete one PublicForm
     * const PublicForm = await prisma.publicForm.delete({
     *   where: {
     *     // ... filter to delete one PublicForm
     *   }
     * })
     * 
     */
    delete<T extends PublicFormDeleteArgs>(args: SelectSubset<T, PublicFormDeleteArgs<ExtArgs>>): Prisma__PublicFormClient<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublicForm.
     * @param {PublicFormUpdateArgs} args - Arguments to update one PublicForm.
     * @example
     * // Update one PublicForm
     * const publicForm = await prisma.publicForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublicFormUpdateArgs>(args: SelectSubset<T, PublicFormUpdateArgs<ExtArgs>>): Prisma__PublicFormClient<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublicForms.
     * @param {PublicFormDeleteManyArgs} args - Arguments to filter PublicForms to delete.
     * @example
     * // Delete a few PublicForms
     * const { count } = await prisma.publicForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublicFormDeleteManyArgs>(args?: SelectSubset<T, PublicFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublicForms
     * const publicForm = await prisma.publicForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublicFormUpdateManyArgs>(args: SelectSubset<T, PublicFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublicForms and returns the data updated in the database.
     * @param {PublicFormUpdateManyAndReturnArgs} args - Arguments to update many PublicForms.
     * @example
     * // Update many PublicForms
     * const publicForm = await prisma.publicForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublicForms and only return the `id`
     * const publicFormWithIdOnly = await prisma.publicForm.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends PublicFormUpdateManyAndReturnArgs>(args: SelectSubset<T, PublicFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublicForm.
     * @param {PublicFormUpsertArgs} args - Arguments to update or create a PublicForm.
     * @example
     * // Update or create a PublicForm
     * const publicForm = await prisma.publicForm.upsert({
     *   create: {
     *     // ... data to create a PublicForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublicForm we want to update
     *   }
     * })
     */
    upsert<T extends PublicFormUpsertArgs>(args: SelectSubset<T, PublicFormUpsertArgs<ExtArgs>>): Prisma__PublicFormClient<$Result.GetResult<Prisma.$PublicFormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublicForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFormCountArgs} args - Arguments to filter PublicForms to count.
     * @example
     * // Count the number of PublicForms
     * const count = await prisma.publicForm.count({
     *   where: {
     *     // ... the filter for the PublicForms we want to count
     *   }
     * })
    **/
    count<T extends PublicFormCountArgs>(
      args?: Subset<T, PublicFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublicFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublicForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublicFormAggregateArgs>(args: Subset<T, PublicFormAggregateArgs>): Prisma.PrismaPromise<GetPublicFormAggregateType<T>>

    /**
     * Group by PublicForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublicFormGroupByArgs} args - Group by arguments.
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
      T extends PublicFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublicFormGroupByArgs['orderBy'] }
        : { orderBy?: PublicFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublicFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublicFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublicForm model
   */
  readonly fields: PublicFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublicForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublicFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PublicForm model
   */
  interface PublicFormFieldRefs {
    readonly id: FieldRef<"PublicForm", 'String'>
    readonly name: FieldRef<"PublicForm", 'String'>
    readonly email: FieldRef<"PublicForm", 'String'>
    readonly message: FieldRef<"PublicForm", 'String'>
    readonly createdAt: FieldRef<"PublicForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublicForm findUnique
   */
  export type PublicFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * Filter, which PublicForm to fetch.
     */
    where: PublicFormWhereUniqueInput
  }

  /**
   * PublicForm findUniqueOrThrow
   */
  export type PublicFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * Filter, which PublicForm to fetch.
     */
    where: PublicFormWhereUniqueInput
  }

  /**
   * PublicForm findFirst
   */
  export type PublicFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * Filter, which PublicForm to fetch.
     */
    where?: PublicFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicForms to fetch.
     */
    orderBy?: PublicFormOrderByWithRelationInput | PublicFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicForms.
     */
    cursor?: PublicFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicForms.
     */
    distinct?: PublicFormScalarFieldEnum | PublicFormScalarFieldEnum[]
  }

  /**
   * PublicForm findFirstOrThrow
   */
  export type PublicFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * Filter, which PublicForm to fetch.
     */
    where?: PublicFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicForms to fetch.
     */
    orderBy?: PublicFormOrderByWithRelationInput | PublicFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublicForms.
     */
    cursor?: PublicFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublicForms.
     */
    distinct?: PublicFormScalarFieldEnum | PublicFormScalarFieldEnum[]
  }

  /**
   * PublicForm findMany
   */
  export type PublicFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * Filter, which PublicForms to fetch.
     */
    where?: PublicFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublicForms to fetch.
     */
    orderBy?: PublicFormOrderByWithRelationInput | PublicFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublicForms.
     */
    cursor?: PublicFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublicForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublicForms.
     */
    skip?: number
    distinct?: PublicFormScalarFieldEnum | PublicFormScalarFieldEnum[]
  }

  /**
   * PublicForm create
   */
  export type PublicFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * The data needed to create a PublicForm.
     */
    data: XOR<PublicFormCreateInput, PublicFormUncheckedCreateInput>
  }

  /**
   * PublicForm createMany
   */
  export type PublicFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublicForms.
     */
    data: PublicFormCreateManyInput | PublicFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicForm createManyAndReturn
   */
  export type PublicFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * The data used to create many PublicForms.
     */
    data: PublicFormCreateManyInput | PublicFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublicForm update
   */
  export type PublicFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * The data needed to update a PublicForm.
     */
    data: XOR<PublicFormUpdateInput, PublicFormUncheckedUpdateInput>
    /**
     * Choose, which PublicForm to update.
     */
    where: PublicFormWhereUniqueInput
  }

  /**
   * PublicForm updateMany
   */
  export type PublicFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublicForms.
     */
    data: XOR<PublicFormUpdateManyMutationInput, PublicFormUncheckedUpdateManyInput>
    /**
     * Filter which PublicForms to update
     */
    where?: PublicFormWhereInput
    /**
     * Limit how many PublicForms to update.
     */
    limit?: number
  }

  /**
   * PublicForm updateManyAndReturn
   */
  export type PublicFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * The data used to update PublicForms.
     */
    data: XOR<PublicFormUpdateManyMutationInput, PublicFormUncheckedUpdateManyInput>
    /**
     * Filter which PublicForms to update
     */
    where?: PublicFormWhereInput
    /**
     * Limit how many PublicForms to update.
     */
    limit?: number
  }

  /**
   * PublicForm upsert
   */
  export type PublicFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * The filter to search for the PublicForm to update in case it exists.
     */
    where: PublicFormWhereUniqueInput
    /**
     * In case the PublicForm found by the `where` argument doesn't exist, create a new PublicForm with this data.
     */
    create: XOR<PublicFormCreateInput, PublicFormUncheckedCreateInput>
    /**
     * In case the PublicForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublicFormUpdateInput, PublicFormUncheckedUpdateInput>
  }

  /**
   * PublicForm delete
   */
  export type PublicFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
    /**
     * Filter which PublicForm to delete.
     */
    where: PublicFormWhereUniqueInput
  }

  /**
   * PublicForm deleteMany
   */
  export type PublicFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublicForms to delete
     */
    where?: PublicFormWhereInput
    /**
     * Limit how many PublicForms to delete.
     */
    limit?: number
  }

  /**
   * PublicForm without action
   */
  export type PublicFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublicForm
     */
    select?: PublicFormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublicForm
     */
    omit?: PublicFormOmit<ExtArgs> | null
  }


  /**
   * Model CalendarEvent
   */

  export type AggregateCalendarEvent = {
    _count: CalendarEventCountAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  export type CalendarEventMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CalendarEventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CalendarEventCountAggregateOutputType = {
    id: number
    title: number
    date: number
    description: number
    createdAt: number
    _all: number
  }


  export type CalendarEventMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    createdAt?: true
  }

  export type CalendarEventMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    createdAt?: true
  }

  export type CalendarEventCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CalendarEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvent to aggregate.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CalendarEvents
    **/
    _count?: true | CalendarEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CalendarEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CalendarEventMaxAggregateInputType
  }

  export type GetCalendarEventAggregateType<T extends CalendarEventAggregateArgs> = {
        [P in keyof T & keyof AggregateCalendarEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCalendarEvent[P]>
      : GetScalarType<T[P], AggregateCalendarEvent[P]>
  }




  export type CalendarEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CalendarEventWhereInput
    orderBy?: CalendarEventOrderByWithAggregationInput | CalendarEventOrderByWithAggregationInput[]
    by: CalendarEventScalarFieldEnum[] | CalendarEventScalarFieldEnum
    having?: CalendarEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CalendarEventCountAggregateInputType | true
    _min?: CalendarEventMinAggregateInputType
    _max?: CalendarEventMaxAggregateInputType
  }

  export type CalendarEventGroupByOutputType = {
    id: string
    title: string
    date: string
    description: string | null
    createdAt: Date
    _count: CalendarEventCountAggregateOutputType | null
    _min: CalendarEventMinAggregateOutputType | null
    _max: CalendarEventMaxAggregateOutputType | null
  }

  type GetCalendarEventGroupByPayload<T extends CalendarEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CalendarEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CalendarEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
            : GetScalarType<T[P], CalendarEventGroupByOutputType[P]>
        }
      >
    >


  export type CalendarEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["calendarEvent"]>

  export type CalendarEventSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type CalendarEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "description" | "createdAt", ExtArgs["result"]["calendarEvent"]>

  export type $CalendarEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CalendarEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      date: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["calendarEvent"]>
    composites: {}
  }

  type CalendarEventGetPayload<S extends boolean | null | undefined | CalendarEventDefaultArgs> = $Result.GetResult<Prisma.$CalendarEventPayload, S>

  type CalendarEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CalendarEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CalendarEventCountAggregateInputType | true
    }

  export interface CalendarEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CalendarEvent'], meta: { name: 'CalendarEvent' } }
    /**
     * Find zero or one CalendarEvent that matches the filter.
     * @param {CalendarEventFindUniqueArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CalendarEventFindUniqueArgs>(args: SelectSubset<T, CalendarEventFindUniqueArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CalendarEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CalendarEventFindUniqueOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CalendarEventFindUniqueOrThrowArgs>(args: SelectSubset<T, CalendarEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CalendarEventFindFirstArgs>(args?: SelectSubset<T, CalendarEventFindFirstArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CalendarEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindFirstOrThrowArgs} args - Arguments to find a CalendarEvent
     * @example
     * // Get one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CalendarEventFindFirstOrThrowArgs>(args?: SelectSubset<T, CalendarEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CalendarEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany()
     * 
     * // Get first 10 CalendarEvents
     * const calendarEvents = await prisma.calendarEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CalendarEventFindManyArgs>(args?: SelectSubset<T, CalendarEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CalendarEvent.
     * @param {CalendarEventCreateArgs} args - Arguments to create a CalendarEvent.
     * @example
     * // Create one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.create({
     *   data: {
     *     // ... data to create a CalendarEvent
     *   }
     * })
     * 
     */
    create<T extends CalendarEventCreateArgs>(args: SelectSubset<T, CalendarEventCreateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CalendarEvents.
     * @param {CalendarEventCreateManyArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CalendarEventCreateManyArgs>(args?: SelectSubset<T, CalendarEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CalendarEvents and returns the data saved in the database.
     * @param {CalendarEventCreateManyAndReturnArgs} args - Arguments to create many CalendarEvents.
     * @example
     * // Create many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CalendarEventCreateManyAndReturnArgs>(args?: SelectSubset<T, CalendarEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CalendarEvent.
     * @param {CalendarEventDeleteArgs} args - Arguments to delete one CalendarEvent.
     * @example
     * // Delete one CalendarEvent
     * const CalendarEvent = await prisma.calendarEvent.delete({
     *   where: {
     *     // ... filter to delete one CalendarEvent
     *   }
     * })
     * 
     */
    delete<T extends CalendarEventDeleteArgs>(args: SelectSubset<T, CalendarEventDeleteArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CalendarEvent.
     * @param {CalendarEventUpdateArgs} args - Arguments to update one CalendarEvent.
     * @example
     * // Update one CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CalendarEventUpdateArgs>(args: SelectSubset<T, CalendarEventUpdateArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CalendarEvents.
     * @param {CalendarEventDeleteManyArgs} args - Arguments to filter CalendarEvents to delete.
     * @example
     * // Delete a few CalendarEvents
     * const { count } = await prisma.calendarEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CalendarEventDeleteManyArgs>(args?: SelectSubset<T, CalendarEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CalendarEventUpdateManyArgs>(args: SelectSubset<T, CalendarEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CalendarEvents and returns the data updated in the database.
     * @param {CalendarEventUpdateManyAndReturnArgs} args - Arguments to update many CalendarEvents.
     * @example
     * // Update many CalendarEvents
     * const calendarEvent = await prisma.calendarEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CalendarEvents and only return the `id`
     * const calendarEventWithIdOnly = await prisma.calendarEvent.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends CalendarEventUpdateManyAndReturnArgs>(args: SelectSubset<T, CalendarEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CalendarEvent.
     * @param {CalendarEventUpsertArgs} args - Arguments to update or create a CalendarEvent.
     * @example
     * // Update or create a CalendarEvent
     * const calendarEvent = await prisma.calendarEvent.upsert({
     *   create: {
     *     // ... data to create a CalendarEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CalendarEvent we want to update
     *   }
     * })
     */
    upsert<T extends CalendarEventUpsertArgs>(args: SelectSubset<T, CalendarEventUpsertArgs<ExtArgs>>): Prisma__CalendarEventClient<$Result.GetResult<Prisma.$CalendarEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CalendarEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventCountArgs} args - Arguments to filter CalendarEvents to count.
     * @example
     * // Count the number of CalendarEvents
     * const count = await prisma.calendarEvent.count({
     *   where: {
     *     // ... the filter for the CalendarEvents we want to count
     *   }
     * })
    **/
    count<T extends CalendarEventCountArgs>(
      args?: Subset<T, CalendarEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CalendarEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CalendarEventAggregateArgs>(args: Subset<T, CalendarEventAggregateArgs>): Prisma.PrismaPromise<GetCalendarEventAggregateType<T>>

    /**
     * Group by CalendarEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CalendarEventGroupByArgs} args - Group by arguments.
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
      T extends CalendarEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CalendarEventGroupByArgs['orderBy'] }
        : { orderBy?: CalendarEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CalendarEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCalendarEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CalendarEvent model
   */
  readonly fields: CalendarEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CalendarEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CalendarEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the CalendarEvent model
   */
  interface CalendarEventFieldRefs {
    readonly id: FieldRef<"CalendarEvent", 'String'>
    readonly title: FieldRef<"CalendarEvent", 'String'>
    readonly date: FieldRef<"CalendarEvent", 'String'>
    readonly description: FieldRef<"CalendarEvent", 'String'>
    readonly createdAt: FieldRef<"CalendarEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CalendarEvent findUnique
   */
  export type CalendarEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findUniqueOrThrow
   */
  export type CalendarEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent findFirst
   */
  export type CalendarEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findFirstOrThrow
   */
  export type CalendarEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvent to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CalendarEvents.
     */
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent findMany
   */
  export type CalendarEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter, which CalendarEvents to fetch.
     */
    where?: CalendarEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CalendarEvents to fetch.
     */
    orderBy?: CalendarEventOrderByWithRelationInput | CalendarEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CalendarEvents.
     */
    cursor?: CalendarEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CalendarEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CalendarEvents.
     */
    skip?: number
    distinct?: CalendarEventScalarFieldEnum | CalendarEventScalarFieldEnum[]
  }

  /**
   * CalendarEvent create
   */
  export type CalendarEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data needed to create a CalendarEvent.
     */
    data: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
  }

  /**
   * CalendarEvent createMany
   */
  export type CalendarEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarEvent createManyAndReturn
   */
  export type CalendarEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to create many CalendarEvents.
     */
    data: CalendarEventCreateManyInput | CalendarEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CalendarEvent update
   */
  export type CalendarEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data needed to update a CalendarEvent.
     */
    data: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
    /**
     * Choose, which CalendarEvent to update.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent updateMany
   */
  export type CalendarEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
  }

  /**
   * CalendarEvent updateManyAndReturn
   */
  export type CalendarEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The data used to update CalendarEvents.
     */
    data: XOR<CalendarEventUpdateManyMutationInput, CalendarEventUncheckedUpdateManyInput>
    /**
     * Filter which CalendarEvents to update
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to update.
     */
    limit?: number
  }

  /**
   * CalendarEvent upsert
   */
  export type CalendarEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * The filter to search for the CalendarEvent to update in case it exists.
     */
    where: CalendarEventWhereUniqueInput
    /**
     * In case the CalendarEvent found by the `where` argument doesn't exist, create a new CalendarEvent with this data.
     */
    create: XOR<CalendarEventCreateInput, CalendarEventUncheckedCreateInput>
    /**
     * In case the CalendarEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CalendarEventUpdateInput, CalendarEventUncheckedUpdateInput>
  }

  /**
   * CalendarEvent delete
   */
  export type CalendarEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
    /**
     * Filter which CalendarEvent to delete.
     */
    where: CalendarEventWhereUniqueInput
  }

  /**
   * CalendarEvent deleteMany
   */
  export type CalendarEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CalendarEvents to delete
     */
    where?: CalendarEventWhereInput
    /**
     * Limit how many CalendarEvents to delete.
     */
    limit?: number
  }

  /**
   * CalendarEvent without action
   */
  export type CalendarEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CalendarEvent
     */
    select?: CalendarEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CalendarEvent
     */
    omit?: CalendarEventOmit<ExtArgs> | null
  }


  /**
   * Model StudentAdmission
   */

  export type AggregateStudentAdmission = {
    _count: StudentAdmissionCountAggregateOutputType | null
    _min: StudentAdmissionMinAggregateOutputType | null
    _max: StudentAdmissionMaxAggregateOutputType | null
  }

  export type StudentAdmissionMinAggregateOutputType = {
    id: string | null
    district: string | null
    schoolName: string | null
    studentName: string | null
    fatherName: string | null
    dob: string | null
    className: string | null
    aadharNo: string | null
    address: string | null
    phoneNo: string | null
    studentSignature: string | null
    principalSignature: string | null
    seal: string | null
    instiId: string | null
    createdAt: Date | null
    udise: string | null
    management: string | null
    mandal: string | null
    chairmanName: string | null
    chairmanMobile: string | null
    headName: string | null
    headPhone: string | null
    altPhone: string | null
    principalEmail: string | null
    instiEmail: string | null
    coordinatorName: string | null
    coordinatorMobile: string | null
    mouStatus: string | null
    mouStart: string | null
    mouEnd: string | null
    enrollmentEstimate: string | null
    notes: string | null
    staffCount: string | null
    studentCount: string | null
    totalClasses: string | null
    feesCollected: string | null
    recentUpdates: string | null
  }

  export type StudentAdmissionMaxAggregateOutputType = {
    id: string | null
    district: string | null
    schoolName: string | null
    studentName: string | null
    fatherName: string | null
    dob: string | null
    className: string | null
    aadharNo: string | null
    address: string | null
    phoneNo: string | null
    studentSignature: string | null
    principalSignature: string | null
    seal: string | null
    instiId: string | null
    createdAt: Date | null
    udise: string | null
    management: string | null
    mandal: string | null
    chairmanName: string | null
    chairmanMobile: string | null
    headName: string | null
    headPhone: string | null
    altPhone: string | null
    principalEmail: string | null
    instiEmail: string | null
    coordinatorName: string | null
    coordinatorMobile: string | null
    mouStatus: string | null
    mouStart: string | null
    mouEnd: string | null
    enrollmentEstimate: string | null
    notes: string | null
    staffCount: string | null
    studentCount: string | null
    totalClasses: string | null
    feesCollected: string | null
    recentUpdates: string | null
  }

  export type StudentAdmissionCountAggregateOutputType = {
    id: number
    district: number
    schoolName: number
    studentName: number
    fatherName: number
    dob: number
    className: number
    aadharNo: number
    address: number
    phoneNo: number
    studentSignature: number
    principalSignature: number
    seal: number
    instiId: number
    createdAt: number
    udise: number
    management: number
    mandal: number
    chairmanName: number
    chairmanMobile: number
    headName: number
    headPhone: number
    altPhone: number
    principalEmail: number
    instiEmail: number
    coordinatorName: number
    coordinatorMobile: number
    mouStatus: number
    mouStart: number
    mouEnd: number
    enrollmentEstimate: number
    notes: number
    staffCount: number
    studentCount: number
    totalClasses: number
    feesCollected: number
    recentUpdates: number
    _all: number
  }


  export type StudentAdmissionMinAggregateInputType = {
    id?: true
    district?: true
    schoolName?: true
    studentName?: true
    fatherName?: true
    dob?: true
    className?: true
    aadharNo?: true
    address?: true
    phoneNo?: true
    studentSignature?: true
    principalSignature?: true
    seal?: true
    instiId?: true
    createdAt?: true
    udise?: true
    management?: true
    mandal?: true
    chairmanName?: true
    chairmanMobile?: true
    headName?: true
    headPhone?: true
    altPhone?: true
    principalEmail?: true
    instiEmail?: true
    coordinatorName?: true
    coordinatorMobile?: true
    mouStatus?: true
    mouStart?: true
    mouEnd?: true
    enrollmentEstimate?: true
    notes?: true
    staffCount?: true
    studentCount?: true
    totalClasses?: true
    feesCollected?: true
    recentUpdates?: true
  }

  export type StudentAdmissionMaxAggregateInputType = {
    id?: true
    district?: true
    schoolName?: true
    studentName?: true
    fatherName?: true
    dob?: true
    className?: true
    aadharNo?: true
    address?: true
    phoneNo?: true
    studentSignature?: true
    principalSignature?: true
    seal?: true
    instiId?: true
    createdAt?: true
    udise?: true
    management?: true
    mandal?: true
    chairmanName?: true
    chairmanMobile?: true
    headName?: true
    headPhone?: true
    altPhone?: true
    principalEmail?: true
    instiEmail?: true
    coordinatorName?: true
    coordinatorMobile?: true
    mouStatus?: true
    mouStart?: true
    mouEnd?: true
    enrollmentEstimate?: true
    notes?: true
    staffCount?: true
    studentCount?: true
    totalClasses?: true
    feesCollected?: true
    recentUpdates?: true
  }

  export type StudentAdmissionCountAggregateInputType = {
    id?: true
    district?: true
    schoolName?: true
    studentName?: true
    fatherName?: true
    dob?: true
    className?: true
    aadharNo?: true
    address?: true
    phoneNo?: true
    studentSignature?: true
    principalSignature?: true
    seal?: true
    instiId?: true
    createdAt?: true
    udise?: true
    management?: true
    mandal?: true
    chairmanName?: true
    chairmanMobile?: true
    headName?: true
    headPhone?: true
    altPhone?: true
    principalEmail?: true
    instiEmail?: true
    coordinatorName?: true
    coordinatorMobile?: true
    mouStatus?: true
    mouStart?: true
    mouEnd?: true
    enrollmentEstimate?: true
    notes?: true
    staffCount?: true
    studentCount?: true
    totalClasses?: true
    feesCollected?: true
    recentUpdates?: true
    _all?: true
  }

  export type StudentAdmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAdmission to aggregate.
     */
    where?: StudentAdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAdmissions to fetch.
     */
    orderBy?: StudentAdmissionOrderByWithRelationInput | StudentAdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentAdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAdmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAdmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentAdmissions
    **/
    _count?: true | StudentAdmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentAdmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentAdmissionMaxAggregateInputType
  }

  export type GetStudentAdmissionAggregateType<T extends StudentAdmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentAdmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentAdmission[P]>
      : GetScalarType<T[P], AggregateStudentAdmission[P]>
  }




  export type StudentAdmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentAdmissionWhereInput
    orderBy?: StudentAdmissionOrderByWithAggregationInput | StudentAdmissionOrderByWithAggregationInput[]
    by: StudentAdmissionScalarFieldEnum[] | StudentAdmissionScalarFieldEnum
    having?: StudentAdmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentAdmissionCountAggregateInputType | true
    _min?: StudentAdmissionMinAggregateInputType
    _max?: StudentAdmissionMaxAggregateInputType
  }

  export type StudentAdmissionGroupByOutputType = {
    id: string
    district: string
    schoolName: string
    studentName: string
    fatherName: string
    dob: string
    className: string
    aadharNo: string
    address: string
    phoneNo: string
    studentSignature: string
    principalSignature: string
    seal: string
    instiId: string | null
    createdAt: Date
    udise: string | null
    management: string | null
    mandal: string | null
    chairmanName: string | null
    chairmanMobile: string | null
    headName: string | null
    headPhone: string | null
    altPhone: string | null
    principalEmail: string | null
    instiEmail: string | null
    coordinatorName: string | null
    coordinatorMobile: string | null
    mouStatus: string | null
    mouStart: string | null
    mouEnd: string | null
    enrollmentEstimate: string | null
    notes: string | null
    staffCount: string | null
    studentCount: string | null
    totalClasses: string | null
    feesCollected: string | null
    recentUpdates: string | null
    _count: StudentAdmissionCountAggregateOutputType | null
    _min: StudentAdmissionMinAggregateOutputType | null
    _max: StudentAdmissionMaxAggregateOutputType | null
  }

  type GetStudentAdmissionGroupByPayload<T extends StudentAdmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentAdmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentAdmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentAdmissionGroupByOutputType[P]>
            : GetScalarType<T[P], StudentAdmissionGroupByOutputType[P]>
        }
      >
    >


  export type StudentAdmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    district?: boolean
    schoolName?: boolean
    studentName?: boolean
    fatherName?: boolean
    dob?: boolean
    className?: boolean
    aadharNo?: boolean
    address?: boolean
    phoneNo?: boolean
    studentSignature?: boolean
    principalSignature?: boolean
    seal?: boolean
    instiId?: boolean
    createdAt?: boolean
    udise?: boolean
    management?: boolean
    mandal?: boolean
    chairmanName?: boolean
    chairmanMobile?: boolean
    headName?: boolean
    headPhone?: boolean
    altPhone?: boolean
    principalEmail?: boolean
    instiEmail?: boolean
    coordinatorName?: boolean
    coordinatorMobile?: boolean
    mouStatus?: boolean
    mouStart?: boolean
    mouEnd?: boolean
    enrollmentEstimate?: boolean
    notes?: boolean
    staffCount?: boolean
    studentCount?: boolean
    totalClasses?: boolean
    feesCollected?: boolean
    recentUpdates?: boolean
  }, ExtArgs["result"]["studentAdmission"]>

  export type StudentAdmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    district?: boolean
    schoolName?: boolean
    studentName?: boolean
    fatherName?: boolean
    dob?: boolean
    className?: boolean
    aadharNo?: boolean
    address?: boolean
    phoneNo?: boolean
    studentSignature?: boolean
    principalSignature?: boolean
    seal?: boolean
    instiId?: boolean
    createdAt?: boolean
    udise?: boolean
    management?: boolean
    mandal?: boolean
    chairmanName?: boolean
    chairmanMobile?: boolean
    headName?: boolean
    headPhone?: boolean
    altPhone?: boolean
    principalEmail?: boolean
    instiEmail?: boolean
    coordinatorName?: boolean
    coordinatorMobile?: boolean
    mouStatus?: boolean
    mouStart?: boolean
    mouEnd?: boolean
    enrollmentEstimate?: boolean
    notes?: boolean
    staffCount?: boolean
    studentCount?: boolean
    totalClasses?: boolean
    feesCollected?: boolean
    recentUpdates?: boolean
  }, ExtArgs["result"]["studentAdmission"]>

  export type StudentAdmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    district?: boolean
    schoolName?: boolean
    studentName?: boolean
    fatherName?: boolean
    dob?: boolean
    className?: boolean
    aadharNo?: boolean
    address?: boolean
    phoneNo?: boolean
    studentSignature?: boolean
    principalSignature?: boolean
    seal?: boolean
    instiId?: boolean
    createdAt?: boolean
    udise?: boolean
    management?: boolean
    mandal?: boolean
    chairmanName?: boolean
    chairmanMobile?: boolean
    headName?: boolean
    headPhone?: boolean
    altPhone?: boolean
    principalEmail?: boolean
    instiEmail?: boolean
    coordinatorName?: boolean
    coordinatorMobile?: boolean
    mouStatus?: boolean
    mouStart?: boolean
    mouEnd?: boolean
    enrollmentEstimate?: boolean
    notes?: boolean
    staffCount?: boolean
    studentCount?: boolean
    totalClasses?: boolean
    feesCollected?: boolean
    recentUpdates?: boolean
  }, ExtArgs["result"]["studentAdmission"]>

  export type StudentAdmissionSelectScalar = {
    id?: boolean
    district?: boolean
    schoolName?: boolean
    studentName?: boolean
    fatherName?: boolean
    dob?: boolean
    className?: boolean
    aadharNo?: boolean
    address?: boolean
    phoneNo?: boolean
    studentSignature?: boolean
    principalSignature?: boolean
    seal?: boolean
    instiId?: boolean
    createdAt?: boolean
    udise?: boolean
    management?: boolean
    mandal?: boolean
    chairmanName?: boolean
    chairmanMobile?: boolean
    headName?: boolean
    headPhone?: boolean
    altPhone?: boolean
    principalEmail?: boolean
    instiEmail?: boolean
    coordinatorName?: boolean
    coordinatorMobile?: boolean
    mouStatus?: boolean
    mouStart?: boolean
    mouEnd?: boolean
    enrollmentEstimate?: boolean
    notes?: boolean
    staffCount?: boolean
    studentCount?: boolean
    totalClasses?: boolean
    feesCollected?: boolean
    recentUpdates?: boolean
  }

  export type StudentAdmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "district" | "schoolName" | "studentName" | "fatherName" | "dob" | "className" | "aadharNo" | "address" | "phoneNo" | "studentSignature" | "principalSignature" | "seal" | "instiId" | "createdAt" | "udise" | "management" | "mandal" | "chairmanName" | "chairmanMobile" | "headName" | "headPhone" | "altPhone" | "principalEmail" | "instiEmail" | "coordinatorName" | "coordinatorMobile" | "mouStatus" | "mouStart" | "mouEnd" | "enrollmentEstimate" | "notes" | "staffCount" | "studentCount" | "totalClasses" | "feesCollected" | "recentUpdates", ExtArgs["result"]["studentAdmission"]>

  export type $StudentAdmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentAdmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      district: string
      schoolName: string
      studentName: string
      fatherName: string
      dob: string
      className: string
      aadharNo: string
      address: string
      phoneNo: string
      studentSignature: string
      principalSignature: string
      seal: string
      instiId: string | null
      createdAt: Date
      udise: string | null
      management: string | null
      mandal: string | null
      chairmanName: string | null
      chairmanMobile: string | null
      headName: string | null
      headPhone: string | null
      altPhone: string | null
      principalEmail: string | null
      instiEmail: string | null
      coordinatorName: string | null
      coordinatorMobile: string | null
      mouStatus: string | null
      mouStart: string | null
      mouEnd: string | null
      enrollmentEstimate: string | null
      notes: string | null
      staffCount: string | null
      studentCount: string | null
      totalClasses: string | null
      feesCollected: string | null
      recentUpdates: string | null
    }, ExtArgs["result"]["studentAdmission"]>
    composites: {}
  }

  type StudentAdmissionGetPayload<S extends boolean | null | undefined | StudentAdmissionDefaultArgs> = $Result.GetResult<Prisma.$StudentAdmissionPayload, S>

  type StudentAdmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentAdmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentAdmissionCountAggregateInputType | true
    }

  export interface StudentAdmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentAdmission'], meta: { name: 'StudentAdmission' } }
    /**
     * Find zero or one StudentAdmission that matches the filter.
     * @param {StudentAdmissionFindUniqueArgs} args - Arguments to find a StudentAdmission
     * @example
     * // Get one StudentAdmission
     * const studentAdmission = await prisma.studentAdmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentAdmissionFindUniqueArgs>(args: SelectSubset<T, StudentAdmissionFindUniqueArgs<ExtArgs>>): Prisma__StudentAdmissionClient<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentAdmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentAdmissionFindUniqueOrThrowArgs} args - Arguments to find a StudentAdmission
     * @example
     * // Get one StudentAdmission
     * const studentAdmission = await prisma.studentAdmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentAdmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentAdmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentAdmissionClient<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAdmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAdmissionFindFirstArgs} args - Arguments to find a StudentAdmission
     * @example
     * // Get one StudentAdmission
     * const studentAdmission = await prisma.studentAdmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentAdmissionFindFirstArgs>(args?: SelectSubset<T, StudentAdmissionFindFirstArgs<ExtArgs>>): Prisma__StudentAdmissionClient<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentAdmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAdmissionFindFirstOrThrowArgs} args - Arguments to find a StudentAdmission
     * @example
     * // Get one StudentAdmission
     * const studentAdmission = await prisma.studentAdmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentAdmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentAdmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentAdmissionClient<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentAdmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAdmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentAdmissions
     * const studentAdmissions = await prisma.studentAdmission.findMany()
     * 
     * // Get first 10 StudentAdmissions
     * const studentAdmissions = await prisma.studentAdmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentAdmissionWithIdOnly = await prisma.studentAdmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentAdmissionFindManyArgs>(args?: SelectSubset<T, StudentAdmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentAdmission.
     * @param {StudentAdmissionCreateArgs} args - Arguments to create a StudentAdmission.
     * @example
     * // Create one StudentAdmission
     * const StudentAdmission = await prisma.studentAdmission.create({
     *   data: {
     *     // ... data to create a StudentAdmission
     *   }
     * })
     * 
     */
    create<T extends StudentAdmissionCreateArgs>(args: SelectSubset<T, StudentAdmissionCreateArgs<ExtArgs>>): Prisma__StudentAdmissionClient<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentAdmissions.
     * @param {StudentAdmissionCreateManyArgs} args - Arguments to create many StudentAdmissions.
     * @example
     * // Create many StudentAdmissions
     * const studentAdmission = await prisma.studentAdmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentAdmissionCreateManyArgs>(args?: SelectSubset<T, StudentAdmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentAdmissions and returns the data saved in the database.
     * @param {StudentAdmissionCreateManyAndReturnArgs} args - Arguments to create many StudentAdmissions.
     * @example
     * // Create many StudentAdmissions
     * const studentAdmission = await prisma.studentAdmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentAdmissions and only return the `id`
     * const studentAdmissionWithIdOnly = await prisma.studentAdmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentAdmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentAdmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentAdmission.
     * @param {StudentAdmissionDeleteArgs} args - Arguments to delete one StudentAdmission.
     * @example
     * // Delete one StudentAdmission
     * const StudentAdmission = await prisma.studentAdmission.delete({
     *   where: {
     *     // ... filter to delete one StudentAdmission
     *   }
     * })
     * 
     */
    delete<T extends StudentAdmissionDeleteArgs>(args: SelectSubset<T, StudentAdmissionDeleteArgs<ExtArgs>>): Prisma__StudentAdmissionClient<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentAdmission.
     * @param {StudentAdmissionUpdateArgs} args - Arguments to update one StudentAdmission.
     * @example
     * // Update one StudentAdmission
     * const studentAdmission = await prisma.studentAdmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentAdmissionUpdateArgs>(args: SelectSubset<T, StudentAdmissionUpdateArgs<ExtArgs>>): Prisma__StudentAdmissionClient<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentAdmissions.
     * @param {StudentAdmissionDeleteManyArgs} args - Arguments to filter StudentAdmissions to delete.
     * @example
     * // Delete a few StudentAdmissions
     * const { count } = await prisma.studentAdmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentAdmissionDeleteManyArgs>(args?: SelectSubset<T, StudentAdmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAdmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAdmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentAdmissions
     * const studentAdmission = await prisma.studentAdmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentAdmissionUpdateManyArgs>(args: SelectSubset<T, StudentAdmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentAdmissions and returns the data updated in the database.
     * @param {StudentAdmissionUpdateManyAndReturnArgs} args - Arguments to update many StudentAdmissions.
     * @example
     * // Update many StudentAdmissions
     * const studentAdmission = await prisma.studentAdmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentAdmissions and only return the `id`
     * const studentAdmissionWithIdOnly = await prisma.studentAdmission.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends StudentAdmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentAdmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentAdmission.
     * @param {StudentAdmissionUpsertArgs} args - Arguments to update or create a StudentAdmission.
     * @example
     * // Update or create a StudentAdmission
     * const studentAdmission = await prisma.studentAdmission.upsert({
     *   create: {
     *     // ... data to create a StudentAdmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentAdmission we want to update
     *   }
     * })
     */
    upsert<T extends StudentAdmissionUpsertArgs>(args: SelectSubset<T, StudentAdmissionUpsertArgs<ExtArgs>>): Prisma__StudentAdmissionClient<$Result.GetResult<Prisma.$StudentAdmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentAdmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAdmissionCountArgs} args - Arguments to filter StudentAdmissions to count.
     * @example
     * // Count the number of StudentAdmissions
     * const count = await prisma.studentAdmission.count({
     *   where: {
     *     // ... the filter for the StudentAdmissions we want to count
     *   }
     * })
    **/
    count<T extends StudentAdmissionCountArgs>(
      args?: Subset<T, StudentAdmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentAdmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentAdmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAdmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAdmissionAggregateArgs>(args: Subset<T, StudentAdmissionAggregateArgs>): Prisma.PrismaPromise<GetStudentAdmissionAggregateType<T>>

    /**
     * Group by StudentAdmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAdmissionGroupByArgs} args - Group by arguments.
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
      T extends StudentAdmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentAdmissionGroupByArgs['orderBy'] }
        : { orderBy?: StudentAdmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentAdmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentAdmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentAdmission model
   */
  readonly fields: StudentAdmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentAdmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentAdmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the StudentAdmission model
   */
  interface StudentAdmissionFieldRefs {
    readonly id: FieldRef<"StudentAdmission", 'String'>
    readonly district: FieldRef<"StudentAdmission", 'String'>
    readonly schoolName: FieldRef<"StudentAdmission", 'String'>
    readonly studentName: FieldRef<"StudentAdmission", 'String'>
    readonly fatherName: FieldRef<"StudentAdmission", 'String'>
    readonly dob: FieldRef<"StudentAdmission", 'String'>
    readonly className: FieldRef<"StudentAdmission", 'String'>
    readonly aadharNo: FieldRef<"StudentAdmission", 'String'>
    readonly address: FieldRef<"StudentAdmission", 'String'>
    readonly phoneNo: FieldRef<"StudentAdmission", 'String'>
    readonly studentSignature: FieldRef<"StudentAdmission", 'String'>
    readonly principalSignature: FieldRef<"StudentAdmission", 'String'>
    readonly seal: FieldRef<"StudentAdmission", 'String'>
    readonly instiId: FieldRef<"StudentAdmission", 'String'>
    readonly createdAt: FieldRef<"StudentAdmission", 'DateTime'>
    readonly udise: FieldRef<"StudentAdmission", 'String'>
    readonly management: FieldRef<"StudentAdmission", 'String'>
    readonly mandal: FieldRef<"StudentAdmission", 'String'>
    readonly chairmanName: FieldRef<"StudentAdmission", 'String'>
    readonly chairmanMobile: FieldRef<"StudentAdmission", 'String'>
    readonly headName: FieldRef<"StudentAdmission", 'String'>
    readonly headPhone: FieldRef<"StudentAdmission", 'String'>
    readonly altPhone: FieldRef<"StudentAdmission", 'String'>
    readonly principalEmail: FieldRef<"StudentAdmission", 'String'>
    readonly instiEmail: FieldRef<"StudentAdmission", 'String'>
    readonly coordinatorName: FieldRef<"StudentAdmission", 'String'>
    readonly coordinatorMobile: FieldRef<"StudentAdmission", 'String'>
    readonly mouStatus: FieldRef<"StudentAdmission", 'String'>
    readonly mouStart: FieldRef<"StudentAdmission", 'String'>
    readonly mouEnd: FieldRef<"StudentAdmission", 'String'>
    readonly enrollmentEstimate: FieldRef<"StudentAdmission", 'String'>
    readonly notes: FieldRef<"StudentAdmission", 'String'>
    readonly staffCount: FieldRef<"StudentAdmission", 'String'>
    readonly studentCount: FieldRef<"StudentAdmission", 'String'>
    readonly totalClasses: FieldRef<"StudentAdmission", 'String'>
    readonly feesCollected: FieldRef<"StudentAdmission", 'String'>
    readonly recentUpdates: FieldRef<"StudentAdmission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StudentAdmission findUnique
   */
  export type StudentAdmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * Filter, which StudentAdmission to fetch.
     */
    where: StudentAdmissionWhereUniqueInput
  }

  /**
   * StudentAdmission findUniqueOrThrow
   */
  export type StudentAdmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * Filter, which StudentAdmission to fetch.
     */
    where: StudentAdmissionWhereUniqueInput
  }

  /**
   * StudentAdmission findFirst
   */
  export type StudentAdmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * Filter, which StudentAdmission to fetch.
     */
    where?: StudentAdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAdmissions to fetch.
     */
    orderBy?: StudentAdmissionOrderByWithRelationInput | StudentAdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAdmissions.
     */
    cursor?: StudentAdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAdmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAdmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAdmissions.
     */
    distinct?: StudentAdmissionScalarFieldEnum | StudentAdmissionScalarFieldEnum[]
  }

  /**
   * StudentAdmission findFirstOrThrow
   */
  export type StudentAdmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * Filter, which StudentAdmission to fetch.
     */
    where?: StudentAdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAdmissions to fetch.
     */
    orderBy?: StudentAdmissionOrderByWithRelationInput | StudentAdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentAdmissions.
     */
    cursor?: StudentAdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAdmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAdmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentAdmissions.
     */
    distinct?: StudentAdmissionScalarFieldEnum | StudentAdmissionScalarFieldEnum[]
  }

  /**
   * StudentAdmission findMany
   */
  export type StudentAdmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * Filter, which StudentAdmissions to fetch.
     */
    where?: StudentAdmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentAdmissions to fetch.
     */
    orderBy?: StudentAdmissionOrderByWithRelationInput | StudentAdmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentAdmissions.
     */
    cursor?: StudentAdmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentAdmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentAdmissions.
     */
    skip?: number
    distinct?: StudentAdmissionScalarFieldEnum | StudentAdmissionScalarFieldEnum[]
  }

  /**
   * StudentAdmission create
   */
  export type StudentAdmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a StudentAdmission.
     */
    data: XOR<StudentAdmissionCreateInput, StudentAdmissionUncheckedCreateInput>
  }

  /**
   * StudentAdmission createMany
   */
  export type StudentAdmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentAdmissions.
     */
    data: StudentAdmissionCreateManyInput | StudentAdmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAdmission createManyAndReturn
   */
  export type StudentAdmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * The data used to create many StudentAdmissions.
     */
    data: StudentAdmissionCreateManyInput | StudentAdmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentAdmission update
   */
  export type StudentAdmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a StudentAdmission.
     */
    data: XOR<StudentAdmissionUpdateInput, StudentAdmissionUncheckedUpdateInput>
    /**
     * Choose, which StudentAdmission to update.
     */
    where: StudentAdmissionWhereUniqueInput
  }

  /**
   * StudentAdmission updateMany
   */
  export type StudentAdmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentAdmissions.
     */
    data: XOR<StudentAdmissionUpdateManyMutationInput, StudentAdmissionUncheckedUpdateManyInput>
    /**
     * Filter which StudentAdmissions to update
     */
    where?: StudentAdmissionWhereInput
    /**
     * Limit how many StudentAdmissions to update.
     */
    limit?: number
  }

  /**
   * StudentAdmission updateManyAndReturn
   */
  export type StudentAdmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * The data used to update StudentAdmissions.
     */
    data: XOR<StudentAdmissionUpdateManyMutationInput, StudentAdmissionUncheckedUpdateManyInput>
    /**
     * Filter which StudentAdmissions to update
     */
    where?: StudentAdmissionWhereInput
    /**
     * Limit how many StudentAdmissions to update.
     */
    limit?: number
  }

  /**
   * StudentAdmission upsert
   */
  export type StudentAdmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the StudentAdmission to update in case it exists.
     */
    where: StudentAdmissionWhereUniqueInput
    /**
     * In case the StudentAdmission found by the `where` argument doesn't exist, create a new StudentAdmission with this data.
     */
    create: XOR<StudentAdmissionCreateInput, StudentAdmissionUncheckedCreateInput>
    /**
     * In case the StudentAdmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentAdmissionUpdateInput, StudentAdmissionUncheckedUpdateInput>
  }

  /**
   * StudentAdmission delete
   */
  export type StudentAdmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
    /**
     * Filter which StudentAdmission to delete.
     */
    where: StudentAdmissionWhereUniqueInput
  }

  /**
   * StudentAdmission deleteMany
   */
  export type StudentAdmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentAdmissions to delete
     */
    where?: StudentAdmissionWhereInput
    /**
     * Limit how many StudentAdmissions to delete.
     */
    limit?: number
  }

  /**
   * StudentAdmission without action
   */
  export type StudentAdmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentAdmission
     */
    select?: StudentAdmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentAdmission
     */
    omit?: StudentAdmissionOmit<ExtArgs> | null
  }


  /**
   * Model TraiRegister
   */

  export type AggregateTraiRegister = {
    _count: TraiRegisterCountAggregateOutputType | null
    _min: TraiRegisterMinAggregateOutputType | null
    _max: TraiRegisterMaxAggregateOutputType | null
  }

  export type TraiRegisterMinAggregateOutputType = {
    id: string | null
    uniqueId: string | null
    fullName: string | null
    phoneNo: string | null
    email: string | null
    district: string | null
    password: string | null
    status: string | null
    createdAt: Date | null
  }

  export type TraiRegisterMaxAggregateOutputType = {
    id: string | null
    uniqueId: string | null
    fullName: string | null
    phoneNo: string | null
    email: string | null
    district: string | null
    password: string | null
    status: string | null
    createdAt: Date | null
  }

  export type TraiRegisterCountAggregateOutputType = {
    id: number
    uniqueId: number
    fullName: number
    phoneNo: number
    email: number
    district: number
    password: number
    status: number
    createdAt: number
    _all: number
  }


  export type TraiRegisterMinAggregateInputType = {
    id?: true
    uniqueId?: true
    fullName?: true
    phoneNo?: true
    email?: true
    district?: true
    password?: true
    status?: true
    createdAt?: true
  }

  export type TraiRegisterMaxAggregateInputType = {
    id?: true
    uniqueId?: true
    fullName?: true
    phoneNo?: true
    email?: true
    district?: true
    password?: true
    status?: true
    createdAt?: true
  }

  export type TraiRegisterCountAggregateInputType = {
    id?: true
    uniqueId?: true
    fullName?: true
    phoneNo?: true
    email?: true
    district?: true
    password?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type TraiRegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TraiRegister to aggregate.
     */
    where?: TraiRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraiRegisters to fetch.
     */
    orderBy?: TraiRegisterOrderByWithRelationInput | TraiRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TraiRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraiRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraiRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TraiRegisters
    **/
    _count?: true | TraiRegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TraiRegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TraiRegisterMaxAggregateInputType
  }

  export type GetTraiRegisterAggregateType<T extends TraiRegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateTraiRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTraiRegister[P]>
      : GetScalarType<T[P], AggregateTraiRegister[P]>
  }




  export type TraiRegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TraiRegisterWhereInput
    orderBy?: TraiRegisterOrderByWithAggregationInput | TraiRegisterOrderByWithAggregationInput[]
    by: TraiRegisterScalarFieldEnum[] | TraiRegisterScalarFieldEnum
    having?: TraiRegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TraiRegisterCountAggregateInputType | true
    _min?: TraiRegisterMinAggregateInputType
    _max?: TraiRegisterMaxAggregateInputType
  }

  export type TraiRegisterGroupByOutputType = {
    id: string
    uniqueId: string
    fullName: string
    phoneNo: string
    email: string
    district: string
    password: string
    status: string
    createdAt: Date
    _count: TraiRegisterCountAggregateOutputType | null
    _min: TraiRegisterMinAggregateOutputType | null
    _max: TraiRegisterMaxAggregateOutputType | null
  }

  type GetTraiRegisterGroupByPayload<T extends TraiRegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TraiRegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TraiRegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TraiRegisterGroupByOutputType[P]>
            : GetScalarType<T[P], TraiRegisterGroupByOutputType[P]>
        }
      >
    >


  export type TraiRegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    fullName?: boolean
    phoneNo?: boolean
    email?: boolean
    district?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["traiRegister"]>

  export type TraiRegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    fullName?: boolean
    phoneNo?: boolean
    email?: boolean
    district?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["traiRegister"]>

  export type TraiRegisterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    fullName?: boolean
    phoneNo?: boolean
    email?: boolean
    district?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["traiRegister"]>

  export type TraiRegisterSelectScalar = {
    id?: boolean
    uniqueId?: boolean
    fullName?: boolean
    phoneNo?: boolean
    email?: boolean
    district?: boolean
    password?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type TraiRegisterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueId" | "fullName" | "phoneNo" | "email" | "district" | "password" | "status" | "createdAt", ExtArgs["result"]["traiRegister"]>

  export type $TraiRegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TraiRegister"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uniqueId: string
      fullName: string
      phoneNo: string
      email: string
      district: string
      password: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["traiRegister"]>
    composites: {}
  }

  type TraiRegisterGetPayload<S extends boolean | null | undefined | TraiRegisterDefaultArgs> = $Result.GetResult<Prisma.$TraiRegisterPayload, S>

  type TraiRegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TraiRegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TraiRegisterCountAggregateInputType | true
    }

  export interface TraiRegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TraiRegister'], meta: { name: 'TraiRegister' } }
    /**
     * Find zero or one TraiRegister that matches the filter.
     * @param {TraiRegisterFindUniqueArgs} args - Arguments to find a TraiRegister
     * @example
     * // Get one TraiRegister
     * const traiRegister = await prisma.traiRegister.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TraiRegisterFindUniqueArgs>(args: SelectSubset<T, TraiRegisterFindUniqueArgs<ExtArgs>>): Prisma__TraiRegisterClient<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TraiRegister that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TraiRegisterFindUniqueOrThrowArgs} args - Arguments to find a TraiRegister
     * @example
     * // Get one TraiRegister
     * const traiRegister = await prisma.traiRegister.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TraiRegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, TraiRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TraiRegisterClient<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TraiRegister that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraiRegisterFindFirstArgs} args - Arguments to find a TraiRegister
     * @example
     * // Get one TraiRegister
     * const traiRegister = await prisma.traiRegister.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TraiRegisterFindFirstArgs>(args?: SelectSubset<T, TraiRegisterFindFirstArgs<ExtArgs>>): Prisma__TraiRegisterClient<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TraiRegister that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraiRegisterFindFirstOrThrowArgs} args - Arguments to find a TraiRegister
     * @example
     * // Get one TraiRegister
     * const traiRegister = await prisma.traiRegister.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TraiRegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, TraiRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__TraiRegisterClient<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TraiRegisters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraiRegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TraiRegisters
     * const traiRegisters = await prisma.traiRegister.findMany()
     * 
     * // Get first 10 TraiRegisters
     * const traiRegisters = await prisma.traiRegister.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const traiRegisterWithIdOnly = await prisma.traiRegister.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TraiRegisterFindManyArgs>(args?: SelectSubset<T, TraiRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TraiRegister.
     * @param {TraiRegisterCreateArgs} args - Arguments to create a TraiRegister.
     * @example
     * // Create one TraiRegister
     * const TraiRegister = await prisma.traiRegister.create({
     *   data: {
     *     // ... data to create a TraiRegister
     *   }
     * })
     * 
     */
    create<T extends TraiRegisterCreateArgs>(args: SelectSubset<T, TraiRegisterCreateArgs<ExtArgs>>): Prisma__TraiRegisterClient<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TraiRegisters.
     * @param {TraiRegisterCreateManyArgs} args - Arguments to create many TraiRegisters.
     * @example
     * // Create many TraiRegisters
     * const traiRegister = await prisma.traiRegister.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TraiRegisterCreateManyArgs>(args?: SelectSubset<T, TraiRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TraiRegisters and returns the data saved in the database.
     * @param {TraiRegisterCreateManyAndReturnArgs} args - Arguments to create many TraiRegisters.
     * @example
     * // Create many TraiRegisters
     * const traiRegister = await prisma.traiRegister.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TraiRegisters and only return the `id`
     * const traiRegisterWithIdOnly = await prisma.traiRegister.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TraiRegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, TraiRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TraiRegister.
     * @param {TraiRegisterDeleteArgs} args - Arguments to delete one TraiRegister.
     * @example
     * // Delete one TraiRegister
     * const TraiRegister = await prisma.traiRegister.delete({
     *   where: {
     *     // ... filter to delete one TraiRegister
     *   }
     * })
     * 
     */
    delete<T extends TraiRegisterDeleteArgs>(args: SelectSubset<T, TraiRegisterDeleteArgs<ExtArgs>>): Prisma__TraiRegisterClient<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TraiRegister.
     * @param {TraiRegisterUpdateArgs} args - Arguments to update one TraiRegister.
     * @example
     * // Update one TraiRegister
     * const traiRegister = await prisma.traiRegister.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TraiRegisterUpdateArgs>(args: SelectSubset<T, TraiRegisterUpdateArgs<ExtArgs>>): Prisma__TraiRegisterClient<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TraiRegisters.
     * @param {TraiRegisterDeleteManyArgs} args - Arguments to filter TraiRegisters to delete.
     * @example
     * // Delete a few TraiRegisters
     * const { count } = await prisma.traiRegister.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TraiRegisterDeleteManyArgs>(args?: SelectSubset<T, TraiRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TraiRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraiRegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TraiRegisters
     * const traiRegister = await prisma.traiRegister.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TraiRegisterUpdateManyArgs>(args: SelectSubset<T, TraiRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TraiRegisters and returns the data updated in the database.
     * @param {TraiRegisterUpdateManyAndReturnArgs} args - Arguments to update many TraiRegisters.
     * @example
     * // Update many TraiRegisters
     * const traiRegister = await prisma.traiRegister.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TraiRegisters and only return the `id`
     * const traiRegisterWithIdOnly = await prisma.traiRegister.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends TraiRegisterUpdateManyAndReturnArgs>(args: SelectSubset<T, TraiRegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TraiRegister.
     * @param {TraiRegisterUpsertArgs} args - Arguments to update or create a TraiRegister.
     * @example
     * // Update or create a TraiRegister
     * const traiRegister = await prisma.traiRegister.upsert({
     *   create: {
     *     // ... data to create a TraiRegister
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TraiRegister we want to update
     *   }
     * })
     */
    upsert<T extends TraiRegisterUpsertArgs>(args: SelectSubset<T, TraiRegisterUpsertArgs<ExtArgs>>): Prisma__TraiRegisterClient<$Result.GetResult<Prisma.$TraiRegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TraiRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraiRegisterCountArgs} args - Arguments to filter TraiRegisters to count.
     * @example
     * // Count the number of TraiRegisters
     * const count = await prisma.traiRegister.count({
     *   where: {
     *     // ... the filter for the TraiRegisters we want to count
     *   }
     * })
    **/
    count<T extends TraiRegisterCountArgs>(
      args?: Subset<T, TraiRegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TraiRegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TraiRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraiRegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TraiRegisterAggregateArgs>(args: Subset<T, TraiRegisterAggregateArgs>): Prisma.PrismaPromise<GetTraiRegisterAggregateType<T>>

    /**
     * Group by TraiRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TraiRegisterGroupByArgs} args - Group by arguments.
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
      T extends TraiRegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TraiRegisterGroupByArgs['orderBy'] }
        : { orderBy?: TraiRegisterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TraiRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraiRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TraiRegister model
   */
  readonly fields: TraiRegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TraiRegister.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TraiRegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TraiRegister model
   */
  interface TraiRegisterFieldRefs {
    readonly id: FieldRef<"TraiRegister", 'String'>
    readonly uniqueId: FieldRef<"TraiRegister", 'String'>
    readonly fullName: FieldRef<"TraiRegister", 'String'>
    readonly phoneNo: FieldRef<"TraiRegister", 'String'>
    readonly email: FieldRef<"TraiRegister", 'String'>
    readonly district: FieldRef<"TraiRegister", 'String'>
    readonly password: FieldRef<"TraiRegister", 'String'>
    readonly status: FieldRef<"TraiRegister", 'String'>
    readonly createdAt: FieldRef<"TraiRegister", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TraiRegister findUnique
   */
  export type TraiRegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which TraiRegister to fetch.
     */
    where: TraiRegisterWhereUniqueInput
  }

  /**
   * TraiRegister findUniqueOrThrow
   */
  export type TraiRegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which TraiRegister to fetch.
     */
    where: TraiRegisterWhereUniqueInput
  }

  /**
   * TraiRegister findFirst
   */
  export type TraiRegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which TraiRegister to fetch.
     */
    where?: TraiRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraiRegisters to fetch.
     */
    orderBy?: TraiRegisterOrderByWithRelationInput | TraiRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TraiRegisters.
     */
    cursor?: TraiRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraiRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraiRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TraiRegisters.
     */
    distinct?: TraiRegisterScalarFieldEnum | TraiRegisterScalarFieldEnum[]
  }

  /**
   * TraiRegister findFirstOrThrow
   */
  export type TraiRegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which TraiRegister to fetch.
     */
    where?: TraiRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraiRegisters to fetch.
     */
    orderBy?: TraiRegisterOrderByWithRelationInput | TraiRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TraiRegisters.
     */
    cursor?: TraiRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraiRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraiRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TraiRegisters.
     */
    distinct?: TraiRegisterScalarFieldEnum | TraiRegisterScalarFieldEnum[]
  }

  /**
   * TraiRegister findMany
   */
  export type TraiRegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which TraiRegisters to fetch.
     */
    where?: TraiRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TraiRegisters to fetch.
     */
    orderBy?: TraiRegisterOrderByWithRelationInput | TraiRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TraiRegisters.
     */
    cursor?: TraiRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TraiRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TraiRegisters.
     */
    skip?: number
    distinct?: TraiRegisterScalarFieldEnum | TraiRegisterScalarFieldEnum[]
  }

  /**
   * TraiRegister create
   */
  export type TraiRegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * The data needed to create a TraiRegister.
     */
    data: XOR<TraiRegisterCreateInput, TraiRegisterUncheckedCreateInput>
  }

  /**
   * TraiRegister createMany
   */
  export type TraiRegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TraiRegisters.
     */
    data: TraiRegisterCreateManyInput | TraiRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TraiRegister createManyAndReturn
   */
  export type TraiRegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * The data used to create many TraiRegisters.
     */
    data: TraiRegisterCreateManyInput | TraiRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TraiRegister update
   */
  export type TraiRegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * The data needed to update a TraiRegister.
     */
    data: XOR<TraiRegisterUpdateInput, TraiRegisterUncheckedUpdateInput>
    /**
     * Choose, which TraiRegister to update.
     */
    where: TraiRegisterWhereUniqueInput
  }

  /**
   * TraiRegister updateMany
   */
  export type TraiRegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TraiRegisters.
     */
    data: XOR<TraiRegisterUpdateManyMutationInput, TraiRegisterUncheckedUpdateManyInput>
    /**
     * Filter which TraiRegisters to update
     */
    where?: TraiRegisterWhereInput
    /**
     * Limit how many TraiRegisters to update.
     */
    limit?: number
  }

  /**
   * TraiRegister updateManyAndReturn
   */
  export type TraiRegisterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * The data used to update TraiRegisters.
     */
    data: XOR<TraiRegisterUpdateManyMutationInput, TraiRegisterUncheckedUpdateManyInput>
    /**
     * Filter which TraiRegisters to update
     */
    where?: TraiRegisterWhereInput
    /**
     * Limit how many TraiRegisters to update.
     */
    limit?: number
  }

  /**
   * TraiRegister upsert
   */
  export type TraiRegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * The filter to search for the TraiRegister to update in case it exists.
     */
    where: TraiRegisterWhereUniqueInput
    /**
     * In case the TraiRegister found by the `where` argument doesn't exist, create a new TraiRegister with this data.
     */
    create: XOR<TraiRegisterCreateInput, TraiRegisterUncheckedCreateInput>
    /**
     * In case the TraiRegister was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TraiRegisterUpdateInput, TraiRegisterUncheckedUpdateInput>
  }

  /**
   * TraiRegister delete
   */
  export type TraiRegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
    /**
     * Filter which TraiRegister to delete.
     */
    where: TraiRegisterWhereUniqueInput
  }

  /**
   * TraiRegister deleteMany
   */
  export type TraiRegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TraiRegisters to delete
     */
    where?: TraiRegisterWhereInput
    /**
     * Limit how many TraiRegisters to delete.
     */
    limit?: number
  }

  /**
   * TraiRegister without action
   */
  export type TraiRegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TraiRegister
     */
    select?: TraiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TraiRegister
     */
    omit?: TraiRegisterOmit<ExtArgs> | null
  }


  /**
   * Model InstiRegister
   */

  export type AggregateInstiRegister = {
    _count: InstiRegisterCountAggregateOutputType | null
    _min: InstiRegisterMinAggregateOutputType | null
    _max: InstiRegisterMaxAggregateOutputType | null
  }

  export type InstiRegisterMinAggregateOutputType = {
    id: string | null
    uniqueId: string | null
    instiName: string | null
    instiType: string | null
    headName: string | null
    phoneNo: string | null
    email: string | null
    district: string | null
    password: string | null
    status: string | null
    trainerId: string | null
    udise: string | null
    management: string | null
    mandal: string | null
    address: string | null
    chairmanName: string | null
    chairmanMobile: string | null
    headPhone: string | null
    altPhone: string | null
    principalEmail: string | null
    coordinatorName: string | null
    coordinatorMobile: string | null
    mouStatus: string | null
    mouStart: string | null
    mouEnd: string | null
    enrollmentEstimate: string | null
    notes: string | null
    staffCount: string | null
    studentCount: string | null
    totalClasses: string | null
    feesCollected: string | null
    recentUpdates: string | null
    isProfileComplete: boolean | null
    createdAt: Date | null
  }

  export type InstiRegisterMaxAggregateOutputType = {
    id: string | null
    uniqueId: string | null
    instiName: string | null
    instiType: string | null
    headName: string | null
    phoneNo: string | null
    email: string | null
    district: string | null
    password: string | null
    status: string | null
    trainerId: string | null
    udise: string | null
    management: string | null
    mandal: string | null
    address: string | null
    chairmanName: string | null
    chairmanMobile: string | null
    headPhone: string | null
    altPhone: string | null
    principalEmail: string | null
    coordinatorName: string | null
    coordinatorMobile: string | null
    mouStatus: string | null
    mouStart: string | null
    mouEnd: string | null
    enrollmentEstimate: string | null
    notes: string | null
    staffCount: string | null
    studentCount: string | null
    totalClasses: string | null
    feesCollected: string | null
    recentUpdates: string | null
    isProfileComplete: boolean | null
    createdAt: Date | null
  }

  export type InstiRegisterCountAggregateOutputType = {
    id: number
    uniqueId: number
    instiName: number
    instiType: number
    headName: number
    phoneNo: number
    email: number
    district: number
    password: number
    status: number
    trainerId: number
    udise: number
    management: number
    mandal: number
    address: number
    chairmanName: number
    chairmanMobile: number
    headPhone: number
    altPhone: number
    principalEmail: number
    coordinatorName: number
    coordinatorMobile: number
    mouStatus: number
    mouStart: number
    mouEnd: number
    enrollmentEstimate: number
    notes: number
    staffCount: number
    studentCount: number
    totalClasses: number
    feesCollected: number
    recentUpdates: number
    isProfileComplete: number
    createdAt: number
    _all: number
  }


  export type InstiRegisterMinAggregateInputType = {
    id?: true
    uniqueId?: true
    instiName?: true
    instiType?: true
    headName?: true
    phoneNo?: true
    email?: true
    district?: true
    password?: true
    status?: true
    trainerId?: true
    udise?: true
    management?: true
    mandal?: true
    address?: true
    chairmanName?: true
    chairmanMobile?: true
    headPhone?: true
    altPhone?: true
    principalEmail?: true
    coordinatorName?: true
    coordinatorMobile?: true
    mouStatus?: true
    mouStart?: true
    mouEnd?: true
    enrollmentEstimate?: true
    notes?: true
    staffCount?: true
    studentCount?: true
    totalClasses?: true
    feesCollected?: true
    recentUpdates?: true
    isProfileComplete?: true
    createdAt?: true
  }

  export type InstiRegisterMaxAggregateInputType = {
    id?: true
    uniqueId?: true
    instiName?: true
    instiType?: true
    headName?: true
    phoneNo?: true
    email?: true
    district?: true
    password?: true
    status?: true
    trainerId?: true
    udise?: true
    management?: true
    mandal?: true
    address?: true
    chairmanName?: true
    chairmanMobile?: true
    headPhone?: true
    altPhone?: true
    principalEmail?: true
    coordinatorName?: true
    coordinatorMobile?: true
    mouStatus?: true
    mouStart?: true
    mouEnd?: true
    enrollmentEstimate?: true
    notes?: true
    staffCount?: true
    studentCount?: true
    totalClasses?: true
    feesCollected?: true
    recentUpdates?: true
    isProfileComplete?: true
    createdAt?: true
  }

  export type InstiRegisterCountAggregateInputType = {
    id?: true
    uniqueId?: true
    instiName?: true
    instiType?: true
    headName?: true
    phoneNo?: true
    email?: true
    district?: true
    password?: true
    status?: true
    trainerId?: true
    udise?: true
    management?: true
    mandal?: true
    address?: true
    chairmanName?: true
    chairmanMobile?: true
    headPhone?: true
    altPhone?: true
    principalEmail?: true
    coordinatorName?: true
    coordinatorMobile?: true
    mouStatus?: true
    mouStart?: true
    mouEnd?: true
    enrollmentEstimate?: true
    notes?: true
    staffCount?: true
    studentCount?: true
    totalClasses?: true
    feesCollected?: true
    recentUpdates?: true
    isProfileComplete?: true
    createdAt?: true
    _all?: true
  }

  export type InstiRegisterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstiRegister to aggregate.
     */
    where?: InstiRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstiRegisters to fetch.
     */
    orderBy?: InstiRegisterOrderByWithRelationInput | InstiRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstiRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstiRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstiRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstiRegisters
    **/
    _count?: true | InstiRegisterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstiRegisterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstiRegisterMaxAggregateInputType
  }

  export type GetInstiRegisterAggregateType<T extends InstiRegisterAggregateArgs> = {
        [P in keyof T & keyof AggregateInstiRegister]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstiRegister[P]>
      : GetScalarType<T[P], AggregateInstiRegister[P]>
  }




  export type InstiRegisterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstiRegisterWhereInput
    orderBy?: InstiRegisterOrderByWithAggregationInput | InstiRegisterOrderByWithAggregationInput[]
    by: InstiRegisterScalarFieldEnum[] | InstiRegisterScalarFieldEnum
    having?: InstiRegisterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstiRegisterCountAggregateInputType | true
    _min?: InstiRegisterMinAggregateInputType
    _max?: InstiRegisterMaxAggregateInputType
  }

  export type InstiRegisterGroupByOutputType = {
    id: string
    uniqueId: string
    instiName: string
    instiType: string
    headName: string
    phoneNo: string
    email: string
    district: string
    password: string
    status: string
    trainerId: string | null
    udise: string | null
    management: string | null
    mandal: string | null
    address: string | null
    chairmanName: string | null
    chairmanMobile: string | null
    headPhone: string | null
    altPhone: string | null
    principalEmail: string | null
    coordinatorName: string | null
    coordinatorMobile: string | null
    mouStatus: string | null
    mouStart: string | null
    mouEnd: string | null
    enrollmentEstimate: string | null
    notes: string | null
    staffCount: string | null
    studentCount: string | null
    totalClasses: string | null
    feesCollected: string | null
    recentUpdates: string | null
    isProfileComplete: boolean
    createdAt: Date
    _count: InstiRegisterCountAggregateOutputType | null
    _min: InstiRegisterMinAggregateOutputType | null
    _max: InstiRegisterMaxAggregateOutputType | null
  }

  type GetInstiRegisterGroupByPayload<T extends InstiRegisterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstiRegisterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstiRegisterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstiRegisterGroupByOutputType[P]>
            : GetScalarType<T[P], InstiRegisterGroupByOutputType[P]>
        }
      >
    >


  export type InstiRegisterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    instiName?: boolean
    instiType?: boolean
    headName?: boolean
    phoneNo?: boolean
    email?: boolean
    district?: boolean
    password?: boolean
    status?: boolean
    trainerId?: boolean
    udise?: boolean
    management?: boolean
    mandal?: boolean
    address?: boolean
    chairmanName?: boolean
    chairmanMobile?: boolean
    headPhone?: boolean
    altPhone?: boolean
    principalEmail?: boolean
    coordinatorName?: boolean
    coordinatorMobile?: boolean
    mouStatus?: boolean
    mouStart?: boolean
    mouEnd?: boolean
    enrollmentEstimate?: boolean
    notes?: boolean
    staffCount?: boolean
    studentCount?: boolean
    totalClasses?: boolean
    feesCollected?: boolean
    recentUpdates?: boolean
    isProfileComplete?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["instiRegister"]>

  export type InstiRegisterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    instiName?: boolean
    instiType?: boolean
    headName?: boolean
    phoneNo?: boolean
    email?: boolean
    district?: boolean
    password?: boolean
    status?: boolean
    trainerId?: boolean
    udise?: boolean
    management?: boolean
    mandal?: boolean
    address?: boolean
    chairmanName?: boolean
    chairmanMobile?: boolean
    headPhone?: boolean
    altPhone?: boolean
    principalEmail?: boolean
    coordinatorName?: boolean
    coordinatorMobile?: boolean
    mouStatus?: boolean
    mouStart?: boolean
    mouEnd?: boolean
    enrollmentEstimate?: boolean
    notes?: boolean
    staffCount?: boolean
    studentCount?: boolean
    totalClasses?: boolean
    feesCollected?: boolean
    recentUpdates?: boolean
    isProfileComplete?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["instiRegister"]>

  export type InstiRegisterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uniqueId?: boolean
    instiName?: boolean
    instiType?: boolean
    headName?: boolean
    phoneNo?: boolean
    email?: boolean
    district?: boolean
    password?: boolean
    status?: boolean
    trainerId?: boolean
    udise?: boolean
    management?: boolean
    mandal?: boolean
    address?: boolean
    chairmanName?: boolean
    chairmanMobile?: boolean
    headPhone?: boolean
    altPhone?: boolean
    principalEmail?: boolean
    coordinatorName?: boolean
    coordinatorMobile?: boolean
    mouStatus?: boolean
    mouStart?: boolean
    mouEnd?: boolean
    enrollmentEstimate?: boolean
    notes?: boolean
    staffCount?: boolean
    studentCount?: boolean
    totalClasses?: boolean
    feesCollected?: boolean
    recentUpdates?: boolean
    isProfileComplete?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["instiRegister"]>

  export type InstiRegisterSelectScalar = {
    id?: boolean
    uniqueId?: boolean
    instiName?: boolean
    instiType?: boolean
    headName?: boolean
    phoneNo?: boolean
    email?: boolean
    district?: boolean
    password?: boolean
    status?: boolean
    trainerId?: boolean
    udise?: boolean
    management?: boolean
    mandal?: boolean
    address?: boolean
    chairmanName?: boolean
    chairmanMobile?: boolean
    headPhone?: boolean
    altPhone?: boolean
    principalEmail?: boolean
    coordinatorName?: boolean
    coordinatorMobile?: boolean
    mouStatus?: boolean
    mouStart?: boolean
    mouEnd?: boolean
    enrollmentEstimate?: boolean
    notes?: boolean
    staffCount?: boolean
    studentCount?: boolean
    totalClasses?: boolean
    feesCollected?: boolean
    recentUpdates?: boolean
    isProfileComplete?: boolean
    createdAt?: boolean
  }

  export type InstiRegisterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uniqueId" | "instiName" | "instiType" | "headName" | "phoneNo" | "email" | "district" | "password" | "status" | "trainerId" | "udise" | "management" | "mandal" | "address" | "chairmanName" | "chairmanMobile" | "headPhone" | "altPhone" | "principalEmail" | "coordinatorName" | "coordinatorMobile" | "mouStatus" | "mouStart" | "mouEnd" | "enrollmentEstimate" | "notes" | "staffCount" | "studentCount" | "totalClasses" | "feesCollected" | "recentUpdates" | "isProfileComplete" | "createdAt", ExtArgs["result"]["instiRegister"]>

  export type $InstiRegisterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstiRegister"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      uniqueId: string
      instiName: string
      instiType: string
      headName: string
      phoneNo: string
      email: string
      district: string
      password: string
      status: string
      trainerId: string | null
      udise: string | null
      management: string | null
      mandal: string | null
      address: string | null
      chairmanName: string | null
      chairmanMobile: string | null
      headPhone: string | null
      altPhone: string | null
      principalEmail: string | null
      coordinatorName: string | null
      coordinatorMobile: string | null
      mouStatus: string | null
      mouStart: string | null
      mouEnd: string | null
      enrollmentEstimate: string | null
      notes: string | null
      staffCount: string | null
      studentCount: string | null
      totalClasses: string | null
      feesCollected: string | null
      recentUpdates: string | null
      isProfileComplete: boolean
      createdAt: Date
    }, ExtArgs["result"]["instiRegister"]>
    composites: {}
  }

  type InstiRegisterGetPayload<S extends boolean | null | undefined | InstiRegisterDefaultArgs> = $Result.GetResult<Prisma.$InstiRegisterPayload, S>

  type InstiRegisterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstiRegisterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstiRegisterCountAggregateInputType | true
    }

  export interface InstiRegisterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstiRegister'], meta: { name: 'InstiRegister' } }
    /**
     * Find zero or one InstiRegister that matches the filter.
     * @param {InstiRegisterFindUniqueArgs} args - Arguments to find a InstiRegister
     * @example
     * // Get one InstiRegister
     * const instiRegister = await prisma.instiRegister.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstiRegisterFindUniqueArgs>(args: SelectSubset<T, InstiRegisterFindUniqueArgs<ExtArgs>>): Prisma__InstiRegisterClient<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstiRegister that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstiRegisterFindUniqueOrThrowArgs} args - Arguments to find a InstiRegister
     * @example
     * // Get one InstiRegister
     * const instiRegister = await prisma.instiRegister.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstiRegisterFindUniqueOrThrowArgs>(args: SelectSubset<T, InstiRegisterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstiRegisterClient<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstiRegister that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstiRegisterFindFirstArgs} args - Arguments to find a InstiRegister
     * @example
     * // Get one InstiRegister
     * const instiRegister = await prisma.instiRegister.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstiRegisterFindFirstArgs>(args?: SelectSubset<T, InstiRegisterFindFirstArgs<ExtArgs>>): Prisma__InstiRegisterClient<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstiRegister that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstiRegisterFindFirstOrThrowArgs} args - Arguments to find a InstiRegister
     * @example
     * // Get one InstiRegister
     * const instiRegister = await prisma.instiRegister.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstiRegisterFindFirstOrThrowArgs>(args?: SelectSubset<T, InstiRegisterFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstiRegisterClient<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstiRegisters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstiRegisterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstiRegisters
     * const instiRegisters = await prisma.instiRegister.findMany()
     * 
     * // Get first 10 InstiRegisters
     * const instiRegisters = await prisma.instiRegister.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instiRegisterWithIdOnly = await prisma.instiRegister.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstiRegisterFindManyArgs>(args?: SelectSubset<T, InstiRegisterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstiRegister.
     * @param {InstiRegisterCreateArgs} args - Arguments to create a InstiRegister.
     * @example
     * // Create one InstiRegister
     * const InstiRegister = await prisma.instiRegister.create({
     *   data: {
     *     // ... data to create a InstiRegister
     *   }
     * })
     * 
     */
    create<T extends InstiRegisterCreateArgs>(args: SelectSubset<T, InstiRegisterCreateArgs<ExtArgs>>): Prisma__InstiRegisterClient<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstiRegisters.
     * @param {InstiRegisterCreateManyArgs} args - Arguments to create many InstiRegisters.
     * @example
     * // Create many InstiRegisters
     * const instiRegister = await prisma.instiRegister.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstiRegisterCreateManyArgs>(args?: SelectSubset<T, InstiRegisterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstiRegisters and returns the data saved in the database.
     * @param {InstiRegisterCreateManyAndReturnArgs} args - Arguments to create many InstiRegisters.
     * @example
     * // Create many InstiRegisters
     * const instiRegister = await prisma.instiRegister.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstiRegisters and only return the `id`
     * const instiRegisterWithIdOnly = await prisma.instiRegister.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstiRegisterCreateManyAndReturnArgs>(args?: SelectSubset<T, InstiRegisterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstiRegister.
     * @param {InstiRegisterDeleteArgs} args - Arguments to delete one InstiRegister.
     * @example
     * // Delete one InstiRegister
     * const InstiRegister = await prisma.instiRegister.delete({
     *   where: {
     *     // ... filter to delete one InstiRegister
     *   }
     * })
     * 
     */
    delete<T extends InstiRegisterDeleteArgs>(args: SelectSubset<T, InstiRegisterDeleteArgs<ExtArgs>>): Prisma__InstiRegisterClient<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstiRegister.
     * @param {InstiRegisterUpdateArgs} args - Arguments to update one InstiRegister.
     * @example
     * // Update one InstiRegister
     * const instiRegister = await prisma.instiRegister.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstiRegisterUpdateArgs>(args: SelectSubset<T, InstiRegisterUpdateArgs<ExtArgs>>): Prisma__InstiRegisterClient<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstiRegisters.
     * @param {InstiRegisterDeleteManyArgs} args - Arguments to filter InstiRegisters to delete.
     * @example
     * // Delete a few InstiRegisters
     * const { count } = await prisma.instiRegister.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstiRegisterDeleteManyArgs>(args?: SelectSubset<T, InstiRegisterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstiRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstiRegisterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstiRegisters
     * const instiRegister = await prisma.instiRegister.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstiRegisterUpdateManyArgs>(args: SelectSubset<T, InstiRegisterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstiRegisters and returns the data updated in the database.
     * @param {InstiRegisterUpdateManyAndReturnArgs} args - Arguments to update many InstiRegisters.
     * @example
     * // Update many InstiRegisters
     * const instiRegister = await prisma.instiRegister.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstiRegisters and only return the `id`
     * const instiRegisterWithIdOnly = await prisma.instiRegister.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends InstiRegisterUpdateManyAndReturnArgs>(args: SelectSubset<T, InstiRegisterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstiRegister.
     * @param {InstiRegisterUpsertArgs} args - Arguments to update or create a InstiRegister.
     * @example
     * // Update or create a InstiRegister
     * const instiRegister = await prisma.instiRegister.upsert({
     *   create: {
     *     // ... data to create a InstiRegister
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstiRegister we want to update
     *   }
     * })
     */
    upsert<T extends InstiRegisterUpsertArgs>(args: SelectSubset<T, InstiRegisterUpsertArgs<ExtArgs>>): Prisma__InstiRegisterClient<$Result.GetResult<Prisma.$InstiRegisterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstiRegisters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstiRegisterCountArgs} args - Arguments to filter InstiRegisters to count.
     * @example
     * // Count the number of InstiRegisters
     * const count = await prisma.instiRegister.count({
     *   where: {
     *     // ... the filter for the InstiRegisters we want to count
     *   }
     * })
    **/
    count<T extends InstiRegisterCountArgs>(
      args?: Subset<T, InstiRegisterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstiRegisterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstiRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstiRegisterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstiRegisterAggregateArgs>(args: Subset<T, InstiRegisterAggregateArgs>): Prisma.PrismaPromise<GetInstiRegisterAggregateType<T>>

    /**
     * Group by InstiRegister.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstiRegisterGroupByArgs} args - Group by arguments.
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
      T extends InstiRegisterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstiRegisterGroupByArgs['orderBy'] }
        : { orderBy?: InstiRegisterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstiRegisterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstiRegisterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstiRegister model
   */
  readonly fields: InstiRegisterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstiRegister.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstiRegisterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the InstiRegister model
   */
  interface InstiRegisterFieldRefs {
    readonly id: FieldRef<"InstiRegister", 'String'>
    readonly uniqueId: FieldRef<"InstiRegister", 'String'>
    readonly instiName: FieldRef<"InstiRegister", 'String'>
    readonly instiType: FieldRef<"InstiRegister", 'String'>
    readonly headName: FieldRef<"InstiRegister", 'String'>
    readonly phoneNo: FieldRef<"InstiRegister", 'String'>
    readonly email: FieldRef<"InstiRegister", 'String'>
    readonly district: FieldRef<"InstiRegister", 'String'>
    readonly password: FieldRef<"InstiRegister", 'String'>
    readonly status: FieldRef<"InstiRegister", 'String'>
    readonly trainerId: FieldRef<"InstiRegister", 'String'>
    readonly udise: FieldRef<"InstiRegister", 'String'>
    readonly management: FieldRef<"InstiRegister", 'String'>
    readonly mandal: FieldRef<"InstiRegister", 'String'>
    readonly address: FieldRef<"InstiRegister", 'String'>
    readonly chairmanName: FieldRef<"InstiRegister", 'String'>
    readonly chairmanMobile: FieldRef<"InstiRegister", 'String'>
    readonly headPhone: FieldRef<"InstiRegister", 'String'>
    readonly altPhone: FieldRef<"InstiRegister", 'String'>
    readonly principalEmail: FieldRef<"InstiRegister", 'String'>
    readonly coordinatorName: FieldRef<"InstiRegister", 'String'>
    readonly coordinatorMobile: FieldRef<"InstiRegister", 'String'>
    readonly mouStatus: FieldRef<"InstiRegister", 'String'>
    readonly mouStart: FieldRef<"InstiRegister", 'String'>
    readonly mouEnd: FieldRef<"InstiRegister", 'String'>
    readonly enrollmentEstimate: FieldRef<"InstiRegister", 'String'>
    readonly notes: FieldRef<"InstiRegister", 'String'>
    readonly staffCount: FieldRef<"InstiRegister", 'String'>
    readonly studentCount: FieldRef<"InstiRegister", 'String'>
    readonly totalClasses: FieldRef<"InstiRegister", 'String'>
    readonly feesCollected: FieldRef<"InstiRegister", 'String'>
    readonly recentUpdates: FieldRef<"InstiRegister", 'String'>
    readonly isProfileComplete: FieldRef<"InstiRegister", 'Boolean'>
    readonly createdAt: FieldRef<"InstiRegister", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstiRegister findUnique
   */
  export type InstiRegisterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which InstiRegister to fetch.
     */
    where: InstiRegisterWhereUniqueInput
  }

  /**
   * InstiRegister findUniqueOrThrow
   */
  export type InstiRegisterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which InstiRegister to fetch.
     */
    where: InstiRegisterWhereUniqueInput
  }

  /**
   * InstiRegister findFirst
   */
  export type InstiRegisterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which InstiRegister to fetch.
     */
    where?: InstiRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstiRegisters to fetch.
     */
    orderBy?: InstiRegisterOrderByWithRelationInput | InstiRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstiRegisters.
     */
    cursor?: InstiRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstiRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstiRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstiRegisters.
     */
    distinct?: InstiRegisterScalarFieldEnum | InstiRegisterScalarFieldEnum[]
  }

  /**
   * InstiRegister findFirstOrThrow
   */
  export type InstiRegisterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which InstiRegister to fetch.
     */
    where?: InstiRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstiRegisters to fetch.
     */
    orderBy?: InstiRegisterOrderByWithRelationInput | InstiRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstiRegisters.
     */
    cursor?: InstiRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstiRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstiRegisters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstiRegisters.
     */
    distinct?: InstiRegisterScalarFieldEnum | InstiRegisterScalarFieldEnum[]
  }

  /**
   * InstiRegister findMany
   */
  export type InstiRegisterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * Filter, which InstiRegisters to fetch.
     */
    where?: InstiRegisterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstiRegisters to fetch.
     */
    orderBy?: InstiRegisterOrderByWithRelationInput | InstiRegisterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstiRegisters.
     */
    cursor?: InstiRegisterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstiRegisters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstiRegisters.
     */
    skip?: number
    distinct?: InstiRegisterScalarFieldEnum | InstiRegisterScalarFieldEnum[]
  }

  /**
   * InstiRegister create
   */
  export type InstiRegisterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * The data needed to create a InstiRegister.
     */
    data: XOR<InstiRegisterCreateInput, InstiRegisterUncheckedCreateInput>
  }

  /**
   * InstiRegister createMany
   */
  export type InstiRegisterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstiRegisters.
     */
    data: InstiRegisterCreateManyInput | InstiRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstiRegister createManyAndReturn
   */
  export type InstiRegisterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * The data used to create many InstiRegisters.
     */
    data: InstiRegisterCreateManyInput | InstiRegisterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstiRegister update
   */
  export type InstiRegisterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * The data needed to update a InstiRegister.
     */
    data: XOR<InstiRegisterUpdateInput, InstiRegisterUncheckedUpdateInput>
    /**
     * Choose, which InstiRegister to update.
     */
    where: InstiRegisterWhereUniqueInput
  }

  /**
   * InstiRegister updateMany
   */
  export type InstiRegisterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstiRegisters.
     */
    data: XOR<InstiRegisterUpdateManyMutationInput, InstiRegisterUncheckedUpdateManyInput>
    /**
     * Filter which InstiRegisters to update
     */
    where?: InstiRegisterWhereInput
    /**
     * Limit how many InstiRegisters to update.
     */
    limit?: number
  }

  /**
   * InstiRegister updateManyAndReturn
   */
  export type InstiRegisterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * The data used to update InstiRegisters.
     */
    data: XOR<InstiRegisterUpdateManyMutationInput, InstiRegisterUncheckedUpdateManyInput>
    /**
     * Filter which InstiRegisters to update
     */
    where?: InstiRegisterWhereInput
    /**
     * Limit how many InstiRegisters to update.
     */
    limit?: number
  }

  /**
   * InstiRegister upsert
   */
  export type InstiRegisterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * The filter to search for the InstiRegister to update in case it exists.
     */
    where: InstiRegisterWhereUniqueInput
    /**
     * In case the InstiRegister found by the `where` argument doesn't exist, create a new InstiRegister with this data.
     */
    create: XOR<InstiRegisterCreateInput, InstiRegisterUncheckedCreateInput>
    /**
     * In case the InstiRegister was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstiRegisterUpdateInput, InstiRegisterUncheckedUpdateInput>
  }

  /**
   * InstiRegister delete
   */
  export type InstiRegisterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
    /**
     * Filter which InstiRegister to delete.
     */
    where: InstiRegisterWhereUniqueInput
  }

  /**
   * InstiRegister deleteMany
   */
  export type InstiRegisterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstiRegisters to delete
     */
    where?: InstiRegisterWhereInput
    /**
     * Limit how many InstiRegisters to delete.
     */
    limit?: number
  }

  /**
   * InstiRegister without action
   */
  export type InstiRegisterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstiRegister
     */
    select?: InstiRegisterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstiRegister
     */
    omit?: InstiRegisterOmit<ExtArgs> | null
  }


  /**
   * Model ContactSubmission
   */

  export type AggregateContactSubmission = {
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  export type ContactSubmissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    phone: string | null
    subject: string | null
    createdAt: Date | null
  }

  export type ContactSubmissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    message: string | null
    phone: string | null
    subject: string | null
    createdAt: Date | null
  }

  export type ContactSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    message: number
    phone: number
    subject: number
    createdAt: number
    _all: number
  }


  export type ContactSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    phone?: true
    subject?: true
    createdAt?: true
  }

  export type ContactSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    phone?: true
    subject?: true
    createdAt?: true
  }

  export type ContactSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    message?: true
    phone?: true
    subject?: true
    createdAt?: true
    _all?: true
  }

  export type ContactSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmission to aggregate.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactSubmissions
    **/
    _count?: true | ContactSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type GetContactSubmissionAggregateType<T extends ContactSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateContactSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactSubmission[P]>
      : GetScalarType<T[P], AggregateContactSubmission[P]>
  }




  export type ContactSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactSubmissionWhereInput
    orderBy?: ContactSubmissionOrderByWithAggregationInput | ContactSubmissionOrderByWithAggregationInput[]
    by: ContactSubmissionScalarFieldEnum[] | ContactSubmissionScalarFieldEnum
    having?: ContactSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactSubmissionCountAggregateInputType | true
    _min?: ContactSubmissionMinAggregateInputType
    _max?: ContactSubmissionMaxAggregateInputType
  }

  export type ContactSubmissionGroupByOutputType = {
    id: string
    name: string
    email: string
    message: string
    phone: string | null
    subject: string | null
    createdAt: Date
    _count: ContactSubmissionCountAggregateOutputType | null
    _min: ContactSubmissionMinAggregateOutputType | null
    _max: ContactSubmissionMaxAggregateOutputType | null
  }

  type GetContactSubmissionGroupByPayload<T extends ContactSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], ContactSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type ContactSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    phone?: boolean
    subject?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    phone?: boolean
    subject?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    phone?: boolean
    subject?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["contactSubmission"]>

  export type ContactSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    message?: boolean
    phone?: boolean
    subject?: boolean
    createdAt?: boolean
  }

  export type ContactSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "message" | "phone" | "subject" | "createdAt", ExtArgs["result"]["contactSubmission"]>

  export type $ContactSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      message: string
      phone: string | null
      subject: string | null
      createdAt: Date
    }, ExtArgs["result"]["contactSubmission"]>
    composites: {}
  }

  type ContactSubmissionGetPayload<S extends boolean | null | undefined | ContactSubmissionDefaultArgs> = $Result.GetResult<Prisma.$ContactSubmissionPayload, S>

  type ContactSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactSubmissionCountAggregateInputType | true
    }

  export interface ContactSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactSubmission'], meta: { name: 'ContactSubmission' } }
    /**
     * Find zero or one ContactSubmission that matches the filter.
     * @param {ContactSubmissionFindUniqueArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactSubmissionFindUniqueArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactSubmissionFindUniqueOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactSubmissionFindFirstArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindFirstOrThrowArgs} args - Arguments to find a ContactSubmission
     * @example
     * // Get one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany()
     * 
     * // Get first 10 ContactSubmissions
     * const contactSubmissions = await prisma.contactSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactSubmissionFindManyArgs>(args?: SelectSubset<T, ContactSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactSubmission.
     * @param {ContactSubmissionCreateArgs} args - Arguments to create a ContactSubmission.
     * @example
     * // Create one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.create({
     *   data: {
     *     // ... data to create a ContactSubmission
     *   }
     * })
     * 
     */
    create<T extends ContactSubmissionCreateArgs>(args: SelectSubset<T, ContactSubmissionCreateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactSubmissions.
     * @param {ContactSubmissionCreateManyArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactSubmissionCreateManyArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactSubmissions and returns the data saved in the database.
     * @param {ContactSubmissionCreateManyAndReturnArgs} args - Arguments to create many ContactSubmissions.
     * @example
     * // Create many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactSubmission.
     * @param {ContactSubmissionDeleteArgs} args - Arguments to delete one ContactSubmission.
     * @example
     * // Delete one ContactSubmission
     * const ContactSubmission = await prisma.contactSubmission.delete({
     *   where: {
     *     // ... filter to delete one ContactSubmission
     *   }
     * })
     * 
     */
    delete<T extends ContactSubmissionDeleteArgs>(args: SelectSubset<T, ContactSubmissionDeleteArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactSubmission.
     * @param {ContactSubmissionUpdateArgs} args - Arguments to update one ContactSubmission.
     * @example
     * // Update one ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactSubmissionUpdateArgs>(args: SelectSubset<T, ContactSubmissionUpdateArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactSubmissions.
     * @param {ContactSubmissionDeleteManyArgs} args - Arguments to filter ContactSubmissions to delete.
     * @example
     * // Delete a few ContactSubmissions
     * const { count } = await prisma.contactSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactSubmissionDeleteManyArgs>(args?: SelectSubset<T, ContactSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactSubmissionUpdateManyArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactSubmissions and returns the data updated in the database.
     * @param {ContactSubmissionUpdateManyAndReturnArgs} args - Arguments to update many ContactSubmissions.
     * @example
     * // Update many ContactSubmissions
     * const contactSubmission = await prisma.contactSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactSubmissions and only return the `id`
     * const contactSubmissionWithIdOnly = await prisma.contactSubmission.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ContactSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactSubmission.
     * @param {ContactSubmissionUpsertArgs} args - Arguments to update or create a ContactSubmission.
     * @example
     * // Update or create a ContactSubmission
     * const contactSubmission = await prisma.contactSubmission.upsert({
     *   create: {
     *     // ... data to create a ContactSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactSubmission we want to update
     *   }
     * })
     */
    upsert<T extends ContactSubmissionUpsertArgs>(args: SelectSubset<T, ContactSubmissionUpsertArgs<ExtArgs>>): Prisma__ContactSubmissionClient<$Result.GetResult<Prisma.$ContactSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionCountArgs} args - Arguments to filter ContactSubmissions to count.
     * @example
     * // Count the number of ContactSubmissions
     * const count = await prisma.contactSubmission.count({
     *   where: {
     *     // ... the filter for the ContactSubmissions we want to count
     *   }
     * })
    **/
    count<T extends ContactSubmissionCountArgs>(
      args?: Subset<T, ContactSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactSubmissionAggregateArgs>(args: Subset<T, ContactSubmissionAggregateArgs>): Prisma.PrismaPromise<GetContactSubmissionAggregateType<T>>

    /**
     * Group by ContactSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactSubmissionGroupByArgs} args - Group by arguments.
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
      T extends ContactSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: ContactSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactSubmission model
   */
  readonly fields: ContactSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ContactSubmission model
   */
  interface ContactSubmissionFieldRefs {
    readonly id: FieldRef<"ContactSubmission", 'String'>
    readonly name: FieldRef<"ContactSubmission", 'String'>
    readonly email: FieldRef<"ContactSubmission", 'String'>
    readonly message: FieldRef<"ContactSubmission", 'String'>
    readonly phone: FieldRef<"ContactSubmission", 'String'>
    readonly subject: FieldRef<"ContactSubmission", 'String'>
    readonly createdAt: FieldRef<"ContactSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactSubmission findUnique
   */
  export type ContactSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findUniqueOrThrow
   */
  export type ContactSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission findFirst
   */
  export type ContactSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findFirstOrThrow
   */
  export type ContactSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmission to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactSubmissions.
     */
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission findMany
   */
  export type ContactSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which ContactSubmissions to fetch.
     */
    where?: ContactSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactSubmissions to fetch.
     */
    orderBy?: ContactSubmissionOrderByWithRelationInput | ContactSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactSubmissions.
     */
    cursor?: ContactSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactSubmissions.
     */
    skip?: number
    distinct?: ContactSubmissionScalarFieldEnum | ContactSubmissionScalarFieldEnum[]
  }

  /**
   * ContactSubmission create
   */
  export type ContactSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a ContactSubmission.
     */
    data: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
  }

  /**
   * ContactSubmission createMany
   */
  export type ContactSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSubmission createManyAndReturn
   */
  export type ContactSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many ContactSubmissions.
     */
    data: ContactSubmissionCreateManyInput | ContactSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactSubmission update
   */
  export type ContactSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a ContactSubmission.
     */
    data: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
    /**
     * Choose, which ContactSubmission to update.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission updateMany
   */
  export type ContactSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission updateManyAndReturn
   */
  export type ContactSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update ContactSubmissions.
     */
    data: XOR<ContactSubmissionUpdateManyMutationInput, ContactSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which ContactSubmissions to update
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to update.
     */
    limit?: number
  }

  /**
   * ContactSubmission upsert
   */
  export type ContactSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the ContactSubmission to update in case it exists.
     */
    where: ContactSubmissionWhereUniqueInput
    /**
     * In case the ContactSubmission found by the `where` argument doesn't exist, create a new ContactSubmission with this data.
     */
    create: XOR<ContactSubmissionCreateInput, ContactSubmissionUncheckedCreateInput>
    /**
     * In case the ContactSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactSubmissionUpdateInput, ContactSubmissionUncheckedUpdateInput>
  }

  /**
   * ContactSubmission delete
   */
  export type ContactSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
    /**
     * Filter which ContactSubmission to delete.
     */
    where: ContactSubmissionWhereUniqueInput
  }

  /**
   * ContactSubmission deleteMany
   */
  export type ContactSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactSubmissions to delete
     */
    where?: ContactSubmissionWhereInput
    /**
     * Limit how many ContactSubmissions to delete.
     */
    limit?: number
  }

  /**
   * ContactSubmission without action
   */
  export type ContactSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactSubmission
     */
    select?: ContactSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactSubmission
     */
    omit?: ContactSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model DonationSubmission
   */

  export type AggregateDonationSubmission = {
    _count: DonationSubmissionCountAggregateOutputType | null
    _min: DonationSubmissionMinAggregateOutputType | null
    _max: DonationSubmissionMaxAggregateOutputType | null
  }

  export type DonationSubmissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    amount: string | null
    pan: string | null
    address: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type DonationSubmissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    amount: string | null
    pan: string | null
    address: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type DonationSubmissionCountAggregateOutputType = {
    id: number
    name: number
    email: number
    amount: number
    pan: number
    address: number
    phone: number
    createdAt: number
    _all: number
  }


  export type DonationSubmissionMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    amount?: true
    pan?: true
    address?: true
    phone?: true
    createdAt?: true
  }

  export type DonationSubmissionMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    amount?: true
    pan?: true
    address?: true
    phone?: true
    createdAt?: true
  }

  export type DonationSubmissionCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    amount?: true
    pan?: true
    address?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type DonationSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationSubmission to aggregate.
     */
    where?: DonationSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationSubmissions to fetch.
     */
    orderBy?: DonationSubmissionOrderByWithRelationInput | DonationSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DonationSubmissions
    **/
    _count?: true | DonationSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationSubmissionMaxAggregateInputType
  }

  export type GetDonationSubmissionAggregateType<T extends DonationSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateDonationSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonationSubmission[P]>
      : GetScalarType<T[P], AggregateDonationSubmission[P]>
  }




  export type DonationSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationSubmissionWhereInput
    orderBy?: DonationSubmissionOrderByWithAggregationInput | DonationSubmissionOrderByWithAggregationInput[]
    by: DonationSubmissionScalarFieldEnum[] | DonationSubmissionScalarFieldEnum
    having?: DonationSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationSubmissionCountAggregateInputType | true
    _min?: DonationSubmissionMinAggregateInputType
    _max?: DonationSubmissionMaxAggregateInputType
  }

  export type DonationSubmissionGroupByOutputType = {
    id: string
    name: string
    email: string
    amount: string
    pan: string | null
    address: string | null
    phone: string | null
    createdAt: Date
    _count: DonationSubmissionCountAggregateOutputType | null
    _min: DonationSubmissionMinAggregateOutputType | null
    _max: DonationSubmissionMaxAggregateOutputType | null
  }

  type GetDonationSubmissionGroupByPayload<T extends DonationSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], DonationSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type DonationSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    amount?: boolean
    pan?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["donationSubmission"]>

  export type DonationSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    amount?: boolean
    pan?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["donationSubmission"]>

  export type DonationSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    amount?: boolean
    pan?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["donationSubmission"]>

  export type DonationSubmissionSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    amount?: boolean
    pan?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type DonationSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "amount" | "pan" | "address" | "phone" | "createdAt", ExtArgs["result"]["donationSubmission"]>

  export type $DonationSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DonationSubmission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      amount: string
      pan: string | null
      address: string | null
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["donationSubmission"]>
    composites: {}
  }

  type DonationSubmissionGetPayload<S extends boolean | null | undefined | DonationSubmissionDefaultArgs> = $Result.GetResult<Prisma.$DonationSubmissionPayload, S>

  type DonationSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationSubmissionCountAggregateInputType | true
    }

  export interface DonationSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DonationSubmission'], meta: { name: 'DonationSubmission' } }
    /**
     * Find zero or one DonationSubmission that matches the filter.
     * @param {DonationSubmissionFindUniqueArgs} args - Arguments to find a DonationSubmission
     * @example
     * // Get one DonationSubmission
     * const donationSubmission = await prisma.donationSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationSubmissionFindUniqueArgs>(args: SelectSubset<T, DonationSubmissionFindUniqueArgs<ExtArgs>>): Prisma__DonationSubmissionClient<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DonationSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationSubmissionFindUniqueOrThrowArgs} args - Arguments to find a DonationSubmission
     * @example
     * // Get one DonationSubmission
     * const donationSubmission = await prisma.donationSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationSubmissionClient<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationSubmissionFindFirstArgs} args - Arguments to find a DonationSubmission
     * @example
     * // Get one DonationSubmission
     * const donationSubmission = await prisma.donationSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationSubmissionFindFirstArgs>(args?: SelectSubset<T, DonationSubmissionFindFirstArgs<ExtArgs>>): Prisma__DonationSubmissionClient<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DonationSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationSubmissionFindFirstOrThrowArgs} args - Arguments to find a DonationSubmission
     * @example
     * // Get one DonationSubmission
     * const donationSubmission = await prisma.donationSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationSubmissionClient<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DonationSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DonationSubmissions
     * const donationSubmissions = await prisma.donationSubmission.findMany()
     * 
     * // Get first 10 DonationSubmissions
     * const donationSubmissions = await prisma.donationSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationSubmissionWithIdOnly = await prisma.donationSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationSubmissionFindManyArgs>(args?: SelectSubset<T, DonationSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DonationSubmission.
     * @param {DonationSubmissionCreateArgs} args - Arguments to create a DonationSubmission.
     * @example
     * // Create one DonationSubmission
     * const DonationSubmission = await prisma.donationSubmission.create({
     *   data: {
     *     // ... data to create a DonationSubmission
     *   }
     * })
     * 
     */
    create<T extends DonationSubmissionCreateArgs>(args: SelectSubset<T, DonationSubmissionCreateArgs<ExtArgs>>): Prisma__DonationSubmissionClient<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DonationSubmissions.
     * @param {DonationSubmissionCreateManyArgs} args - Arguments to create many DonationSubmissions.
     * @example
     * // Create many DonationSubmissions
     * const donationSubmission = await prisma.donationSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationSubmissionCreateManyArgs>(args?: SelectSubset<T, DonationSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DonationSubmissions and returns the data saved in the database.
     * @param {DonationSubmissionCreateManyAndReturnArgs} args - Arguments to create many DonationSubmissions.
     * @example
     * // Create many DonationSubmissions
     * const donationSubmission = await prisma.donationSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DonationSubmissions and only return the `id`
     * const donationSubmissionWithIdOnly = await prisma.donationSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DonationSubmission.
     * @param {DonationSubmissionDeleteArgs} args - Arguments to delete one DonationSubmission.
     * @example
     * // Delete one DonationSubmission
     * const DonationSubmission = await prisma.donationSubmission.delete({
     *   where: {
     *     // ... filter to delete one DonationSubmission
     *   }
     * })
     * 
     */
    delete<T extends DonationSubmissionDeleteArgs>(args: SelectSubset<T, DonationSubmissionDeleteArgs<ExtArgs>>): Prisma__DonationSubmissionClient<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DonationSubmission.
     * @param {DonationSubmissionUpdateArgs} args - Arguments to update one DonationSubmission.
     * @example
     * // Update one DonationSubmission
     * const donationSubmission = await prisma.donationSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationSubmissionUpdateArgs>(args: SelectSubset<T, DonationSubmissionUpdateArgs<ExtArgs>>): Prisma__DonationSubmissionClient<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DonationSubmissions.
     * @param {DonationSubmissionDeleteManyArgs} args - Arguments to filter DonationSubmissions to delete.
     * @example
     * // Delete a few DonationSubmissions
     * const { count } = await prisma.donationSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationSubmissionDeleteManyArgs>(args?: SelectSubset<T, DonationSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DonationSubmissions
     * const donationSubmission = await prisma.donationSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationSubmissionUpdateManyArgs>(args: SelectSubset<T, DonationSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DonationSubmissions and returns the data updated in the database.
     * @param {DonationSubmissionUpdateManyAndReturnArgs} args - Arguments to update many DonationSubmissions.
     * @example
     * // Update many DonationSubmissions
     * const donationSubmission = await prisma.donationSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DonationSubmissions and only return the `id`
     * const donationSubmissionWithIdOnly = await prisma.donationSubmission.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DonationSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DonationSubmission.
     * @param {DonationSubmissionUpsertArgs} args - Arguments to update or create a DonationSubmission.
     * @example
     * // Update or create a DonationSubmission
     * const donationSubmission = await prisma.donationSubmission.upsert({
     *   create: {
     *     // ... data to create a DonationSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DonationSubmission we want to update
     *   }
     * })
     */
    upsert<T extends DonationSubmissionUpsertArgs>(args: SelectSubset<T, DonationSubmissionUpsertArgs<ExtArgs>>): Prisma__DonationSubmissionClient<$Result.GetResult<Prisma.$DonationSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DonationSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationSubmissionCountArgs} args - Arguments to filter DonationSubmissions to count.
     * @example
     * // Count the number of DonationSubmissions
     * const count = await prisma.donationSubmission.count({
     *   where: {
     *     // ... the filter for the DonationSubmissions we want to count
     *   }
     * })
    **/
    count<T extends DonationSubmissionCountArgs>(
      args?: Subset<T, DonationSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DonationSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DonationSubmissionAggregateArgs>(args: Subset<T, DonationSubmissionAggregateArgs>): Prisma.PrismaPromise<GetDonationSubmissionAggregateType<T>>

    /**
     * Group by DonationSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationSubmissionGroupByArgs} args - Group by arguments.
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
      T extends DonationSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: DonationSubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DonationSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DonationSubmission model
   */
  readonly fields: DonationSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DonationSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the DonationSubmission model
   */
  interface DonationSubmissionFieldRefs {
    readonly id: FieldRef<"DonationSubmission", 'String'>
    readonly name: FieldRef<"DonationSubmission", 'String'>
    readonly email: FieldRef<"DonationSubmission", 'String'>
    readonly amount: FieldRef<"DonationSubmission", 'String'>
    readonly pan: FieldRef<"DonationSubmission", 'String'>
    readonly address: FieldRef<"DonationSubmission", 'String'>
    readonly phone: FieldRef<"DonationSubmission", 'String'>
    readonly createdAt: FieldRef<"DonationSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DonationSubmission findUnique
   */
  export type DonationSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which DonationSubmission to fetch.
     */
    where: DonationSubmissionWhereUniqueInput
  }

  /**
   * DonationSubmission findUniqueOrThrow
   */
  export type DonationSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which DonationSubmission to fetch.
     */
    where: DonationSubmissionWhereUniqueInput
  }

  /**
   * DonationSubmission findFirst
   */
  export type DonationSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which DonationSubmission to fetch.
     */
    where?: DonationSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationSubmissions to fetch.
     */
    orderBy?: DonationSubmissionOrderByWithRelationInput | DonationSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationSubmissions.
     */
    cursor?: DonationSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationSubmissions.
     */
    distinct?: DonationSubmissionScalarFieldEnum | DonationSubmissionScalarFieldEnum[]
  }

  /**
   * DonationSubmission findFirstOrThrow
   */
  export type DonationSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which DonationSubmission to fetch.
     */
    where?: DonationSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationSubmissions to fetch.
     */
    orderBy?: DonationSubmissionOrderByWithRelationInput | DonationSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DonationSubmissions.
     */
    cursor?: DonationSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DonationSubmissions.
     */
    distinct?: DonationSubmissionScalarFieldEnum | DonationSubmissionScalarFieldEnum[]
  }

  /**
   * DonationSubmission findMany
   */
  export type DonationSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * Filter, which DonationSubmissions to fetch.
     */
    where?: DonationSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DonationSubmissions to fetch.
     */
    orderBy?: DonationSubmissionOrderByWithRelationInput | DonationSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DonationSubmissions.
     */
    cursor?: DonationSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DonationSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DonationSubmissions.
     */
    skip?: number
    distinct?: DonationSubmissionScalarFieldEnum | DonationSubmissionScalarFieldEnum[]
  }

  /**
   * DonationSubmission create
   */
  export type DonationSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to create a DonationSubmission.
     */
    data: XOR<DonationSubmissionCreateInput, DonationSubmissionUncheckedCreateInput>
  }

  /**
   * DonationSubmission createMany
   */
  export type DonationSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DonationSubmissions.
     */
    data: DonationSubmissionCreateManyInput | DonationSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationSubmission createManyAndReturn
   */
  export type DonationSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many DonationSubmissions.
     */
    data: DonationSubmissionCreateManyInput | DonationSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DonationSubmission update
   */
  export type DonationSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * The data needed to update a DonationSubmission.
     */
    data: XOR<DonationSubmissionUpdateInput, DonationSubmissionUncheckedUpdateInput>
    /**
     * Choose, which DonationSubmission to update.
     */
    where: DonationSubmissionWhereUniqueInput
  }

  /**
   * DonationSubmission updateMany
   */
  export type DonationSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DonationSubmissions.
     */
    data: XOR<DonationSubmissionUpdateManyMutationInput, DonationSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which DonationSubmissions to update
     */
    where?: DonationSubmissionWhereInput
    /**
     * Limit how many DonationSubmissions to update.
     */
    limit?: number
  }

  /**
   * DonationSubmission updateManyAndReturn
   */
  export type DonationSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update DonationSubmissions.
     */
    data: XOR<DonationSubmissionUpdateManyMutationInput, DonationSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which DonationSubmissions to update
     */
    where?: DonationSubmissionWhereInput
    /**
     * Limit how many DonationSubmissions to update.
     */
    limit?: number
  }

  /**
   * DonationSubmission upsert
   */
  export type DonationSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * The filter to search for the DonationSubmission to update in case it exists.
     */
    where: DonationSubmissionWhereUniqueInput
    /**
     * In case the DonationSubmission found by the `where` argument doesn't exist, create a new DonationSubmission with this data.
     */
    create: XOR<DonationSubmissionCreateInput, DonationSubmissionUncheckedCreateInput>
    /**
     * In case the DonationSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationSubmissionUpdateInput, DonationSubmissionUncheckedUpdateInput>
  }

  /**
   * DonationSubmission delete
   */
  export type DonationSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
    /**
     * Filter which DonationSubmission to delete.
     */
    where: DonationSubmissionWhereUniqueInput
  }

  /**
   * DonationSubmission deleteMany
   */
  export type DonationSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DonationSubmissions to delete
     */
    where?: DonationSubmissionWhereInput
    /**
     * Limit how many DonationSubmissions to delete.
     */
    limit?: number
  }

  /**
   * DonationSubmission without action
   */
  export type DonationSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DonationSubmission
     */
    select?: DonationSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DonationSubmission
     */
    omit?: DonationSubmissionOmit<ExtArgs> | null
  }


  /**
   * Model JobPosting
   */

  export type AggregateJobPosting = {
    _count: JobPostingCountAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  export type JobPostingMinAggregateOutputType = {
    id: string | null
    title: string | null
    role: string | null
    type: string | null
    location: string | null
    description: string | null
    deadline: string | null
    createdAt: Date | null
    active: boolean | null
  }

  export type JobPostingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    role: string | null
    type: string | null
    location: string | null
    description: string | null
    deadline: string | null
    createdAt: Date | null
    active: boolean | null
  }

  export type JobPostingCountAggregateOutputType = {
    id: number
    title: number
    role: number
    type: number
    location: number
    description: number
    deadline: number
    createdAt: number
    active: number
    _all: number
  }


  export type JobPostingMinAggregateInputType = {
    id?: true
    title?: true
    role?: true
    type?: true
    location?: true
    description?: true
    deadline?: true
    createdAt?: true
    active?: true
  }

  export type JobPostingMaxAggregateInputType = {
    id?: true
    title?: true
    role?: true
    type?: true
    location?: true
    description?: true
    deadline?: true
    createdAt?: true
    active?: true
  }

  export type JobPostingCountAggregateInputType = {
    id?: true
    title?: true
    role?: true
    type?: true
    location?: true
    description?: true
    deadline?: true
    createdAt?: true
    active?: true
    _all?: true
  }

  export type JobPostingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPosting to aggregate.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobPostings
    **/
    _count?: true | JobPostingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobPostingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobPostingMaxAggregateInputType
  }

  export type GetJobPostingAggregateType<T extends JobPostingAggregateArgs> = {
        [P in keyof T & keyof AggregateJobPosting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobPosting[P]>
      : GetScalarType<T[P], AggregateJobPosting[P]>
  }




  export type JobPostingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobPostingWhereInput
    orderBy?: JobPostingOrderByWithAggregationInput | JobPostingOrderByWithAggregationInput[]
    by: JobPostingScalarFieldEnum[] | JobPostingScalarFieldEnum
    having?: JobPostingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobPostingCountAggregateInputType | true
    _min?: JobPostingMinAggregateInputType
    _max?: JobPostingMaxAggregateInputType
  }

  export type JobPostingGroupByOutputType = {
    id: string
    title: string
    role: string
    type: string
    location: string | null
    description: string
    deadline: string | null
    createdAt: Date
    active: boolean
    _count: JobPostingCountAggregateOutputType | null
    _min: JobPostingMinAggregateOutputType | null
    _max: JobPostingMaxAggregateOutputType | null
  }

  type GetJobPostingGroupByPayload<T extends JobPostingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobPostingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobPostingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
            : GetScalarType<T[P], JobPostingGroupByOutputType[P]>
        }
      >
    >


  export type JobPostingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    role?: boolean
    type?: boolean
    location?: boolean
    description?: boolean
    deadline?: boolean
    createdAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    role?: boolean
    type?: boolean
    location?: boolean
    description?: boolean
    deadline?: boolean
    createdAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    role?: boolean
    type?: boolean
    location?: boolean
    description?: boolean
    deadline?: boolean
    createdAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["jobPosting"]>

  export type JobPostingSelectScalar = {
    id?: boolean
    title?: boolean
    role?: boolean
    type?: boolean
    location?: boolean
    description?: boolean
    deadline?: boolean
    createdAt?: boolean
    active?: boolean
  }

  export type JobPostingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "role" | "type" | "location" | "description" | "deadline" | "createdAt" | "active", ExtArgs["result"]["jobPosting"]>

  export type $JobPostingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobPosting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      role: string
      type: string
      location: string | null
      description: string
      deadline: string | null
      createdAt: Date
      active: boolean
    }, ExtArgs["result"]["jobPosting"]>
    composites: {}
  }

  type JobPostingGetPayload<S extends boolean | null | undefined | JobPostingDefaultArgs> = $Result.GetResult<Prisma.$JobPostingPayload, S>

  type JobPostingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobPostingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobPostingCountAggregateInputType | true
    }

  export interface JobPostingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobPosting'], meta: { name: 'JobPosting' } }
    /**
     * Find zero or one JobPosting that matches the filter.
     * @param {JobPostingFindUniqueArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobPostingFindUniqueArgs>(args: SelectSubset<T, JobPostingFindUniqueArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobPosting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobPostingFindUniqueOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobPostingFindUniqueOrThrowArgs>(args: SelectSubset<T, JobPostingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobPostingFindFirstArgs>(args?: SelectSubset<T, JobPostingFindFirstArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobPosting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindFirstOrThrowArgs} args - Arguments to find a JobPosting
     * @example
     * // Get one JobPosting
     * const jobPosting = await prisma.jobPosting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobPostingFindFirstOrThrowArgs>(args?: SelectSubset<T, JobPostingFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobPostings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobPostings
     * const jobPostings = await prisma.jobPosting.findMany()
     * 
     * // Get first 10 JobPostings
     * const jobPostings = await prisma.jobPosting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobPostingFindManyArgs>(args?: SelectSubset<T, JobPostingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobPosting.
     * @param {JobPostingCreateArgs} args - Arguments to create a JobPosting.
     * @example
     * // Create one JobPosting
     * const JobPosting = await prisma.jobPosting.create({
     *   data: {
     *     // ... data to create a JobPosting
     *   }
     * })
     * 
     */
    create<T extends JobPostingCreateArgs>(args: SelectSubset<T, JobPostingCreateArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobPostings.
     * @param {JobPostingCreateManyArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobPostingCreateManyArgs>(args?: SelectSubset<T, JobPostingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobPostings and returns the data saved in the database.
     * @param {JobPostingCreateManyAndReturnArgs} args - Arguments to create many JobPostings.
     * @example
     * // Create many JobPostings
     * const jobPosting = await prisma.jobPosting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobPostingCreateManyAndReturnArgs>(args?: SelectSubset<T, JobPostingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobPosting.
     * @param {JobPostingDeleteArgs} args - Arguments to delete one JobPosting.
     * @example
     * // Delete one JobPosting
     * const JobPosting = await prisma.jobPosting.delete({
     *   where: {
     *     // ... filter to delete one JobPosting
     *   }
     * })
     * 
     */
    delete<T extends JobPostingDeleteArgs>(args: SelectSubset<T, JobPostingDeleteArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobPosting.
     * @param {JobPostingUpdateArgs} args - Arguments to update one JobPosting.
     * @example
     * // Update one JobPosting
     * const jobPosting = await prisma.jobPosting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobPostingUpdateArgs>(args: SelectSubset<T, JobPostingUpdateArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobPostings.
     * @param {JobPostingDeleteManyArgs} args - Arguments to filter JobPostings to delete.
     * @example
     * // Delete a few JobPostings
     * const { count } = await prisma.jobPosting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobPostingDeleteManyArgs>(args?: SelectSubset<T, JobPostingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobPostingUpdateManyArgs>(args: SelectSubset<T, JobPostingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobPostings and returns the data updated in the database.
     * @param {JobPostingUpdateManyAndReturnArgs} args - Arguments to update many JobPostings.
     * @example
     * // Update many JobPostings
     * const jobPosting = await prisma.jobPosting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobPostings and only return the `id`
     * const jobPostingWithIdOnly = await prisma.jobPosting.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends JobPostingUpdateManyAndReturnArgs>(args: SelectSubset<T, JobPostingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobPosting.
     * @param {JobPostingUpsertArgs} args - Arguments to update or create a JobPosting.
     * @example
     * // Update or create a JobPosting
     * const jobPosting = await prisma.jobPosting.upsert({
     *   create: {
     *     // ... data to create a JobPosting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobPosting we want to update
     *   }
     * })
     */
    upsert<T extends JobPostingUpsertArgs>(args: SelectSubset<T, JobPostingUpsertArgs<ExtArgs>>): Prisma__JobPostingClient<$Result.GetResult<Prisma.$JobPostingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobPostings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingCountArgs} args - Arguments to filter JobPostings to count.
     * @example
     * // Count the number of JobPostings
     * const count = await prisma.jobPosting.count({
     *   where: {
     *     // ... the filter for the JobPostings we want to count
     *   }
     * })
    **/
    count<T extends JobPostingCountArgs>(
      args?: Subset<T, JobPostingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobPostingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobPostingAggregateArgs>(args: Subset<T, JobPostingAggregateArgs>): Prisma.PrismaPromise<GetJobPostingAggregateType<T>>

    /**
     * Group by JobPosting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobPostingGroupByArgs} args - Group by arguments.
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
      T extends JobPostingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobPostingGroupByArgs['orderBy'] }
        : { orderBy?: JobPostingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobPostingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobPostingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobPosting model
   */
  readonly fields: JobPostingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobPosting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobPostingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the JobPosting model
   */
  interface JobPostingFieldRefs {
    readonly id: FieldRef<"JobPosting", 'String'>
    readonly title: FieldRef<"JobPosting", 'String'>
    readonly role: FieldRef<"JobPosting", 'String'>
    readonly type: FieldRef<"JobPosting", 'String'>
    readonly location: FieldRef<"JobPosting", 'String'>
    readonly description: FieldRef<"JobPosting", 'String'>
    readonly deadline: FieldRef<"JobPosting", 'String'>
    readonly createdAt: FieldRef<"JobPosting", 'DateTime'>
    readonly active: FieldRef<"JobPosting", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * JobPosting findUnique
   */
  export type JobPostingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting findUniqueOrThrow
   */
  export type JobPostingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting findFirst
   */
  export type JobPostingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting findFirstOrThrow
   */
  export type JobPostingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Filter, which JobPosting to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobPostings.
     */
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting findMany
   */
  export type JobPostingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Filter, which JobPostings to fetch.
     */
    where?: JobPostingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobPostings to fetch.
     */
    orderBy?: JobPostingOrderByWithRelationInput | JobPostingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobPostings.
     */
    cursor?: JobPostingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobPostings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobPostings.
     */
    skip?: number
    distinct?: JobPostingScalarFieldEnum | JobPostingScalarFieldEnum[]
  }

  /**
   * JobPosting create
   */
  export type JobPostingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data needed to create a JobPosting.
     */
    data: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
  }

  /**
   * JobPosting createMany
   */
  export type JobPostingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPosting createManyAndReturn
   */
  export type JobPostingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data used to create many JobPostings.
     */
    data: JobPostingCreateManyInput | JobPostingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobPosting update
   */
  export type JobPostingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data needed to update a JobPosting.
     */
    data: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
    /**
     * Choose, which JobPosting to update.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting updateMany
   */
  export type JobPostingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number
  }

  /**
   * JobPosting updateManyAndReturn
   */
  export type JobPostingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The data used to update JobPostings.
     */
    data: XOR<JobPostingUpdateManyMutationInput, JobPostingUncheckedUpdateManyInput>
    /**
     * Filter which JobPostings to update
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to update.
     */
    limit?: number
  }

  /**
   * JobPosting upsert
   */
  export type JobPostingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * The filter to search for the JobPosting to update in case it exists.
     */
    where: JobPostingWhereUniqueInput
    /**
     * In case the JobPosting found by the `where` argument doesn't exist, create a new JobPosting with this data.
     */
    create: XOR<JobPostingCreateInput, JobPostingUncheckedCreateInput>
    /**
     * In case the JobPosting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobPostingUpdateInput, JobPostingUncheckedUpdateInput>
  }

  /**
   * JobPosting delete
   */
  export type JobPostingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
    /**
     * Filter which JobPosting to delete.
     */
    where: JobPostingWhereUniqueInput
  }

  /**
   * JobPosting deleteMany
   */
  export type JobPostingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobPostings to delete
     */
    where?: JobPostingWhereInput
    /**
     * Limit how many JobPostings to delete.
     */
    limit?: number
  }

  /**
   * JobPosting without action
   */
  export type JobPostingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobPosting
     */
    select?: JobPostingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobPosting
     */
    omit?: JobPostingOmit<ExtArgs> | null
  }


  /**
   * Model JobApplication
   */

  export type AggregateJobApplication = {
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  export type JobApplicationMinAggregateOutputType = {
    id: string | null
    jobId: string | null
    applicantName: string | null
    email: string | null
    phone: string | null
    resumeUrl: string | null
    coverLetter: string | null
    createdAt: Date | null
  }

  export type JobApplicationMaxAggregateOutputType = {
    id: string | null
    jobId: string | null
    applicantName: string | null
    email: string | null
    phone: string | null
    resumeUrl: string | null
    coverLetter: string | null
    createdAt: Date | null
  }

  export type JobApplicationCountAggregateOutputType = {
    id: number
    jobId: number
    applicantName: number
    email: number
    phone: number
    resumeUrl: number
    coverLetter: number
    createdAt: number
    _all: number
  }


  export type JobApplicationMinAggregateInputType = {
    id?: true
    jobId?: true
    applicantName?: true
    email?: true
    phone?: true
    resumeUrl?: true
    coverLetter?: true
    createdAt?: true
  }

  export type JobApplicationMaxAggregateInputType = {
    id?: true
    jobId?: true
    applicantName?: true
    email?: true
    phone?: true
    resumeUrl?: true
    coverLetter?: true
    createdAt?: true
  }

  export type JobApplicationCountAggregateInputType = {
    id?: true
    jobId?: true
    applicantName?: true
    email?: true
    phone?: true
    resumeUrl?: true
    coverLetter?: true
    createdAt?: true
    _all?: true
  }

  export type JobApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplication to aggregate.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JobApplications
    **/
    _count?: true | JobApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobApplicationMaxAggregateInputType
  }

  export type GetJobApplicationAggregateType<T extends JobApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateJobApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJobApplication[P]>
      : GetScalarType<T[P], AggregateJobApplication[P]>
  }




  export type JobApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobApplicationWhereInput
    orderBy?: JobApplicationOrderByWithAggregationInput | JobApplicationOrderByWithAggregationInput[]
    by: JobApplicationScalarFieldEnum[] | JobApplicationScalarFieldEnum
    having?: JobApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobApplicationCountAggregateInputType | true
    _min?: JobApplicationMinAggregateInputType
    _max?: JobApplicationMaxAggregateInputType
  }

  export type JobApplicationGroupByOutputType = {
    id: string
    jobId: string
    applicantName: string
    email: string
    phone: string
    resumeUrl: string
    coverLetter: string | null
    createdAt: Date
    _count: JobApplicationCountAggregateOutputType | null
    _min: JobApplicationMinAggregateOutputType | null
    _max: JobApplicationMaxAggregateOutputType | null
  }

  type GetJobApplicationGroupByPayload<T extends JobApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], JobApplicationGroupByOutputType[P]>
        }
      >
    >


  export type JobApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantName?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    coverLetter?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantName?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    coverLetter?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobId?: boolean
    applicantName?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    coverLetter?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jobApplication"]>

  export type JobApplicationSelectScalar = {
    id?: boolean
    jobId?: boolean
    applicantName?: boolean
    email?: boolean
    phone?: boolean
    resumeUrl?: boolean
    coverLetter?: boolean
    createdAt?: boolean
  }

  export type JobApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobId" | "applicantName" | "email" | "phone" | "resumeUrl" | "coverLetter" | "createdAt", ExtArgs["result"]["jobApplication"]>

  export type $JobApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JobApplication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobId: string
      applicantName: string
      email: string
      phone: string
      resumeUrl: string
      coverLetter: string | null
      createdAt: Date
    }, ExtArgs["result"]["jobApplication"]>
    composites: {}
  }

  type JobApplicationGetPayload<S extends boolean | null | undefined | JobApplicationDefaultArgs> = $Result.GetResult<Prisma.$JobApplicationPayload, S>

  type JobApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobApplicationCountAggregateInputType | true
    }

  export interface JobApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JobApplication'], meta: { name: 'JobApplication' } }
    /**
     * Find zero or one JobApplication that matches the filter.
     * @param {JobApplicationFindUniqueArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobApplicationFindUniqueArgs>(args: SelectSubset<T, JobApplicationFindUniqueArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JobApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobApplicationFindUniqueOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, JobApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobApplicationFindFirstArgs>(args?: SelectSubset<T, JobApplicationFindFirstArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JobApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindFirstOrThrowArgs} args - Arguments to find a JobApplication
     * @example
     * // Get one JobApplication
     * const jobApplication = await prisma.jobApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, JobApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JobApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JobApplications
     * const jobApplications = await prisma.jobApplication.findMany()
     * 
     * // Get first 10 JobApplications
     * const jobApplications = await prisma.jobApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JobApplicationFindManyArgs>(args?: SelectSubset<T, JobApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JobApplication.
     * @param {JobApplicationCreateArgs} args - Arguments to create a JobApplication.
     * @example
     * // Create one JobApplication
     * const JobApplication = await prisma.jobApplication.create({
     *   data: {
     *     // ... data to create a JobApplication
     *   }
     * })
     * 
     */
    create<T extends JobApplicationCreateArgs>(args: SelectSubset<T, JobApplicationCreateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JobApplications.
     * @param {JobApplicationCreateManyArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobApplicationCreateManyArgs>(args?: SelectSubset<T, JobApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JobApplications and returns the data saved in the database.
     * @param {JobApplicationCreateManyAndReturnArgs} args - Arguments to create many JobApplications.
     * @example
     * // Create many JobApplications
     * const jobApplication = await prisma.jobApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, JobApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JobApplication.
     * @param {JobApplicationDeleteArgs} args - Arguments to delete one JobApplication.
     * @example
     * // Delete one JobApplication
     * const JobApplication = await prisma.jobApplication.delete({
     *   where: {
     *     // ... filter to delete one JobApplication
     *   }
     * })
     * 
     */
    delete<T extends JobApplicationDeleteArgs>(args: SelectSubset<T, JobApplicationDeleteArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JobApplication.
     * @param {JobApplicationUpdateArgs} args - Arguments to update one JobApplication.
     * @example
     * // Update one JobApplication
     * const jobApplication = await prisma.jobApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobApplicationUpdateArgs>(args: SelectSubset<T, JobApplicationUpdateArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JobApplications.
     * @param {JobApplicationDeleteManyArgs} args - Arguments to filter JobApplications to delete.
     * @example
     * // Delete a few JobApplications
     * const { count } = await prisma.jobApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobApplicationDeleteManyArgs>(args?: SelectSubset<T, JobApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobApplicationUpdateManyArgs>(args: SelectSubset<T, JobApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JobApplications and returns the data updated in the database.
     * @param {JobApplicationUpdateManyAndReturnArgs} args - Arguments to update many JobApplications.
     * @example
     * // Update many JobApplications
     * const jobApplication = await prisma.jobApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JobApplications and only return the `id`
     * const jobApplicationWithIdOnly = await prisma.jobApplication.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends JobApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, JobApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JobApplication.
     * @param {JobApplicationUpsertArgs} args - Arguments to update or create a JobApplication.
     * @example
     * // Update or create a JobApplication
     * const jobApplication = await prisma.jobApplication.upsert({
     *   create: {
     *     // ... data to create a JobApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JobApplication we want to update
     *   }
     * })
     */
    upsert<T extends JobApplicationUpsertArgs>(args: SelectSubset<T, JobApplicationUpsertArgs<ExtArgs>>): Prisma__JobApplicationClient<$Result.GetResult<Prisma.$JobApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JobApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationCountArgs} args - Arguments to filter JobApplications to count.
     * @example
     * // Count the number of JobApplications
     * const count = await prisma.jobApplication.count({
     *   where: {
     *     // ... the filter for the JobApplications we want to count
     *   }
     * })
    **/
    count<T extends JobApplicationCountArgs>(
      args?: Subset<T, JobApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JobApplicationAggregateArgs>(args: Subset<T, JobApplicationAggregateArgs>): Prisma.PrismaPromise<GetJobApplicationAggregateType<T>>

    /**
     * Group by JobApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobApplicationGroupByArgs} args - Group by arguments.
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
      T extends JobApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobApplicationGroupByArgs['orderBy'] }
        : { orderBy?: JobApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JobApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JobApplication model
   */
  readonly fields: JobApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JobApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the JobApplication model
   */
  interface JobApplicationFieldRefs {
    readonly id: FieldRef<"JobApplication", 'String'>
    readonly jobId: FieldRef<"JobApplication", 'String'>
    readonly applicantName: FieldRef<"JobApplication", 'String'>
    readonly email: FieldRef<"JobApplication", 'String'>
    readonly phone: FieldRef<"JobApplication", 'String'>
    readonly resumeUrl: FieldRef<"JobApplication", 'String'>
    readonly coverLetter: FieldRef<"JobApplication", 'String'>
    readonly createdAt: FieldRef<"JobApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JobApplication findUnique
   */
  export type JobApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findUniqueOrThrow
   */
  export type JobApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication findFirst
   */
  export type JobApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findFirstOrThrow
   */
  export type JobApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplication to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JobApplications.
     */
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication findMany
   */
  export type JobApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter, which JobApplications to fetch.
     */
    where?: JobApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JobApplications to fetch.
     */
    orderBy?: JobApplicationOrderByWithRelationInput | JobApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JobApplications.
     */
    cursor?: JobApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JobApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JobApplications.
     */
    skip?: number
    distinct?: JobApplicationScalarFieldEnum | JobApplicationScalarFieldEnum[]
  }

  /**
   * JobApplication create
   */
  export type JobApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a JobApplication.
     */
    data: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
  }

  /**
   * JobApplication createMany
   */
  export type JobApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplication createManyAndReturn
   */
  export type JobApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many JobApplications.
     */
    data: JobApplicationCreateManyInput | JobApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JobApplication update
   */
  export type JobApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a JobApplication.
     */
    data: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
    /**
     * Choose, which JobApplication to update.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication updateMany
   */
  export type JobApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication updateManyAndReturn
   */
  export type JobApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The data used to update JobApplications.
     */
    data: XOR<JobApplicationUpdateManyMutationInput, JobApplicationUncheckedUpdateManyInput>
    /**
     * Filter which JobApplications to update
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to update.
     */
    limit?: number
  }

  /**
   * JobApplication upsert
   */
  export type JobApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the JobApplication to update in case it exists.
     */
    where: JobApplicationWhereUniqueInput
    /**
     * In case the JobApplication found by the `where` argument doesn't exist, create a new JobApplication with this data.
     */
    create: XOR<JobApplicationCreateInput, JobApplicationUncheckedCreateInput>
    /**
     * In case the JobApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobApplicationUpdateInput, JobApplicationUncheckedUpdateInput>
  }

  /**
   * JobApplication delete
   */
  export type JobApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
    /**
     * Filter which JobApplication to delete.
     */
    where: JobApplicationWhereUniqueInput
  }

  /**
   * JobApplication deleteMany
   */
  export type JobApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JobApplications to delete
     */
    where?: JobApplicationWhereInput
    /**
     * Limit how many JobApplications to delete.
     */
    limit?: number
  }

  /**
   * JobApplication without action
   */
  export type JobApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JobApplication
     */
    select?: JobApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JobApplication
     */
    omit?: JobApplicationOmit<ExtArgs> | null
  }


  /**
   * Model Documentation
   */

  export type AggregateDocumentation = {
    _count: DocumentationCountAggregateOutputType | null
    _min: DocumentationMinAggregateOutputType | null
    _max: DocumentationMaxAggregateOutputType | null
  }

  export type DocumentationMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    fileUrl: string | null
    category: string | null
    createdAt: Date | null
  }

  export type DocumentationMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    fileUrl: string | null
    category: string | null
    createdAt: Date | null
  }

  export type DocumentationCountAggregateOutputType = {
    id: number
    title: number
    description: number
    fileUrl: number
    category: number
    createdAt: number
    _all: number
  }


  export type DocumentationMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    category?: true
    createdAt?: true
  }

  export type DocumentationMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    category?: true
    createdAt?: true
  }

  export type DocumentationCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    fileUrl?: true
    category?: true
    createdAt?: true
    _all?: true
  }

  export type DocumentationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documentation to aggregate.
     */
    where?: DocumentationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentations to fetch.
     */
    orderBy?: DocumentationOrderByWithRelationInput | DocumentationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documentations
    **/
    _count?: true | DocumentationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentationMaxAggregateInputType
  }

  export type GetDocumentationAggregateType<T extends DocumentationAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentation[P]>
      : GetScalarType<T[P], AggregateDocumentation[P]>
  }




  export type DocumentationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentationWhereInput
    orderBy?: DocumentationOrderByWithAggregationInput | DocumentationOrderByWithAggregationInput[]
    by: DocumentationScalarFieldEnum[] | DocumentationScalarFieldEnum
    having?: DocumentationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentationCountAggregateInputType | true
    _min?: DocumentationMinAggregateInputType
    _max?: DocumentationMaxAggregateInputType
  }

  export type DocumentationGroupByOutputType = {
    id: string
    title: string
    description: string | null
    fileUrl: string
    category: string | null
    createdAt: Date
    _count: DocumentationCountAggregateOutputType | null
    _min: DocumentationMinAggregateOutputType | null
    _max: DocumentationMaxAggregateOutputType | null
  }

  type GetDocumentationGroupByPayload<T extends DocumentationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentationGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentationGroupByOutputType[P]>
        }
      >
    >


  export type DocumentationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["documentation"]>

  export type DocumentationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["documentation"]>

  export type DocumentationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    category?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["documentation"]>

  export type DocumentationSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    fileUrl?: boolean
    category?: boolean
    createdAt?: boolean
  }

  export type DocumentationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "fileUrl" | "category" | "createdAt", ExtArgs["result"]["documentation"]>

  export type $DocumentationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Documentation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      fileUrl: string
      category: string | null
      createdAt: Date
    }, ExtArgs["result"]["documentation"]>
    composites: {}
  }

  type DocumentationGetPayload<S extends boolean | null | undefined | DocumentationDefaultArgs> = $Result.GetResult<Prisma.$DocumentationPayload, S>

  type DocumentationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentationCountAggregateInputType | true
    }

  export interface DocumentationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Documentation'], meta: { name: 'Documentation' } }
    /**
     * Find zero or one Documentation that matches the filter.
     * @param {DocumentationFindUniqueArgs} args - Arguments to find a Documentation
     * @example
     * // Get one Documentation
     * const documentation = await prisma.documentation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentationFindUniqueArgs>(args: SelectSubset<T, DocumentationFindUniqueArgs<ExtArgs>>): Prisma__DocumentationClient<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Documentation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentationFindUniqueOrThrowArgs} args - Arguments to find a Documentation
     * @example
     * // Get one Documentation
     * const documentation = await prisma.documentation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentationFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentationClient<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documentation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationFindFirstArgs} args - Arguments to find a Documentation
     * @example
     * // Get one Documentation
     * const documentation = await prisma.documentation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentationFindFirstArgs>(args?: SelectSubset<T, DocumentationFindFirstArgs<ExtArgs>>): Prisma__DocumentationClient<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Documentation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationFindFirstOrThrowArgs} args - Arguments to find a Documentation
     * @example
     * // Get one Documentation
     * const documentation = await prisma.documentation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentationFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentationClient<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documentations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documentations
     * const documentations = await prisma.documentation.findMany()
     * 
     * // Get first 10 Documentations
     * const documentations = await prisma.documentation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentationWithIdOnly = await prisma.documentation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentationFindManyArgs>(args?: SelectSubset<T, DocumentationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Documentation.
     * @param {DocumentationCreateArgs} args - Arguments to create a Documentation.
     * @example
     * // Create one Documentation
     * const Documentation = await prisma.documentation.create({
     *   data: {
     *     // ... data to create a Documentation
     *   }
     * })
     * 
     */
    create<T extends DocumentationCreateArgs>(args: SelectSubset<T, DocumentationCreateArgs<ExtArgs>>): Prisma__DocumentationClient<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documentations.
     * @param {DocumentationCreateManyArgs} args - Arguments to create many Documentations.
     * @example
     * // Create many Documentations
     * const documentation = await prisma.documentation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentationCreateManyArgs>(args?: SelectSubset<T, DocumentationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documentations and returns the data saved in the database.
     * @param {DocumentationCreateManyAndReturnArgs} args - Arguments to create many Documentations.
     * @example
     * // Create many Documentations
     * const documentation = await prisma.documentation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documentations and only return the `id`
     * const documentationWithIdOnly = await prisma.documentation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentationCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Documentation.
     * @param {DocumentationDeleteArgs} args - Arguments to delete one Documentation.
     * @example
     * // Delete one Documentation
     * const Documentation = await prisma.documentation.delete({
     *   where: {
     *     // ... filter to delete one Documentation
     *   }
     * })
     * 
     */
    delete<T extends DocumentationDeleteArgs>(args: SelectSubset<T, DocumentationDeleteArgs<ExtArgs>>): Prisma__DocumentationClient<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Documentation.
     * @param {DocumentationUpdateArgs} args - Arguments to update one Documentation.
     * @example
     * // Update one Documentation
     * const documentation = await prisma.documentation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentationUpdateArgs>(args: SelectSubset<T, DocumentationUpdateArgs<ExtArgs>>): Prisma__DocumentationClient<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documentations.
     * @param {DocumentationDeleteManyArgs} args - Arguments to filter Documentations to delete.
     * @example
     * // Delete a few Documentations
     * const { count } = await prisma.documentation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentationDeleteManyArgs>(args?: SelectSubset<T, DocumentationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documentations
     * const documentation = await prisma.documentation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentationUpdateManyArgs>(args: SelectSubset<T, DocumentationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documentations and returns the data updated in the database.
     * @param {DocumentationUpdateManyAndReturnArgs} args - Arguments to update many Documentations.
     * @example
     * // Update many Documentations
     * const documentation = await prisma.documentation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documentations and only return the `id`
     * const documentationWithIdOnly = await prisma.documentation.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends DocumentationUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Documentation.
     * @param {DocumentationUpsertArgs} args - Arguments to update or create a Documentation.
     * @example
     * // Update or create a Documentation
     * const documentation = await prisma.documentation.upsert({
     *   create: {
     *     // ... data to create a Documentation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Documentation we want to update
     *   }
     * })
     */
    upsert<T extends DocumentationUpsertArgs>(args: SelectSubset<T, DocumentationUpsertArgs<ExtArgs>>): Prisma__DocumentationClient<$Result.GetResult<Prisma.$DocumentationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documentations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationCountArgs} args - Arguments to filter Documentations to count.
     * @example
     * // Count the number of Documentations
     * const count = await prisma.documentation.count({
     *   where: {
     *     // ... the filter for the Documentations we want to count
     *   }
     * })
    **/
    count<T extends DocumentationCountArgs>(
      args?: Subset<T, DocumentationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Documentation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentationAggregateArgs>(args: Subset<T, DocumentationAggregateArgs>): Prisma.PrismaPromise<GetDocumentationAggregateType<T>>

    /**
     * Group by Documentation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentationGroupByArgs} args - Group by arguments.
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
      T extends DocumentationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentationGroupByArgs['orderBy'] }
        : { orderBy?: DocumentationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Documentation model
   */
  readonly fields: DocumentationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Documentation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Documentation model
   */
  interface DocumentationFieldRefs {
    readonly id: FieldRef<"Documentation", 'String'>
    readonly title: FieldRef<"Documentation", 'String'>
    readonly description: FieldRef<"Documentation", 'String'>
    readonly fileUrl: FieldRef<"Documentation", 'String'>
    readonly category: FieldRef<"Documentation", 'String'>
    readonly createdAt: FieldRef<"Documentation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Documentation findUnique
   */
  export type DocumentationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * Filter, which Documentation to fetch.
     */
    where: DocumentationWhereUniqueInput
  }

  /**
   * Documentation findUniqueOrThrow
   */
  export type DocumentationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * Filter, which Documentation to fetch.
     */
    where: DocumentationWhereUniqueInput
  }

  /**
   * Documentation findFirst
   */
  export type DocumentationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * Filter, which Documentation to fetch.
     */
    where?: DocumentationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentations to fetch.
     */
    orderBy?: DocumentationOrderByWithRelationInput | DocumentationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentations.
     */
    cursor?: DocumentationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentations.
     */
    distinct?: DocumentationScalarFieldEnum | DocumentationScalarFieldEnum[]
  }

  /**
   * Documentation findFirstOrThrow
   */
  export type DocumentationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * Filter, which Documentation to fetch.
     */
    where?: DocumentationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentations to fetch.
     */
    orderBy?: DocumentationOrderByWithRelationInput | DocumentationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documentations.
     */
    cursor?: DocumentationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documentations.
     */
    distinct?: DocumentationScalarFieldEnum | DocumentationScalarFieldEnum[]
  }

  /**
   * Documentation findMany
   */
  export type DocumentationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * Filter, which Documentations to fetch.
     */
    where?: DocumentationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documentations to fetch.
     */
    orderBy?: DocumentationOrderByWithRelationInput | DocumentationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documentations.
     */
    cursor?: DocumentationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documentations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documentations.
     */
    skip?: number
    distinct?: DocumentationScalarFieldEnum | DocumentationScalarFieldEnum[]
  }

  /**
   * Documentation create
   */
  export type DocumentationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * The data needed to create a Documentation.
     */
    data: XOR<DocumentationCreateInput, DocumentationUncheckedCreateInput>
  }

  /**
   * Documentation createMany
   */
  export type DocumentationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documentations.
     */
    data: DocumentationCreateManyInput | DocumentationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documentation createManyAndReturn
   */
  export type DocumentationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * The data used to create many Documentations.
     */
    data: DocumentationCreateManyInput | DocumentationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Documentation update
   */
  export type DocumentationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * The data needed to update a Documentation.
     */
    data: XOR<DocumentationUpdateInput, DocumentationUncheckedUpdateInput>
    /**
     * Choose, which Documentation to update.
     */
    where: DocumentationWhereUniqueInput
  }

  /**
   * Documentation updateMany
   */
  export type DocumentationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documentations.
     */
    data: XOR<DocumentationUpdateManyMutationInput, DocumentationUncheckedUpdateManyInput>
    /**
     * Filter which Documentations to update
     */
    where?: DocumentationWhereInput
    /**
     * Limit how many Documentations to update.
     */
    limit?: number
  }

  /**
   * Documentation updateManyAndReturn
   */
  export type DocumentationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * The data used to update Documentations.
     */
    data: XOR<DocumentationUpdateManyMutationInput, DocumentationUncheckedUpdateManyInput>
    /**
     * Filter which Documentations to update
     */
    where?: DocumentationWhereInput
    /**
     * Limit how many Documentations to update.
     */
    limit?: number
  }

  /**
   * Documentation upsert
   */
  export type DocumentationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * The filter to search for the Documentation to update in case it exists.
     */
    where: DocumentationWhereUniqueInput
    /**
     * In case the Documentation found by the `where` argument doesn't exist, create a new Documentation with this data.
     */
    create: XOR<DocumentationCreateInput, DocumentationUncheckedCreateInput>
    /**
     * In case the Documentation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentationUpdateInput, DocumentationUncheckedUpdateInput>
  }

  /**
   * Documentation delete
   */
  export type DocumentationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
    /**
     * Filter which Documentation to delete.
     */
    where: DocumentationWhereUniqueInput
  }

  /**
   * Documentation deleteMany
   */
  export type DocumentationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documentations to delete
     */
    where?: DocumentationWhereInput
    /**
     * Limit how many Documentations to delete.
     */
    limit?: number
  }

  /**
   * Documentation without action
   */
  export type DocumentationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Documentation
     */
    select?: DocumentationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Documentation
     */
    omit?: DocumentationOmit<ExtArgs> | null
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


  export const PublicFormScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type PublicFormScalarFieldEnum = (typeof PublicFormScalarFieldEnum)[keyof typeof PublicFormScalarFieldEnum]


  export const CalendarEventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CalendarEventScalarFieldEnum = (typeof CalendarEventScalarFieldEnum)[keyof typeof CalendarEventScalarFieldEnum]


  export const StudentAdmissionScalarFieldEnum: {
    id: 'id',
    district: 'district',
    schoolName: 'schoolName',
    studentName: 'studentName',
    fatherName: 'fatherName',
    dob: 'dob',
    className: 'className',
    aadharNo: 'aadharNo',
    address: 'address',
    phoneNo: 'phoneNo',
    studentSignature: 'studentSignature',
    principalSignature: 'principalSignature',
    seal: 'seal',
    instiId: 'instiId',
    createdAt: 'createdAt',
    udise: 'udise',
    management: 'management',
    mandal: 'mandal',
    chairmanName: 'chairmanName',
    chairmanMobile: 'chairmanMobile',
    headName: 'headName',
    headPhone: 'headPhone',
    altPhone: 'altPhone',
    principalEmail: 'principalEmail',
    instiEmail: 'instiEmail',
    coordinatorName: 'coordinatorName',
    coordinatorMobile: 'coordinatorMobile',
    mouStatus: 'mouStatus',
    mouStart: 'mouStart',
    mouEnd: 'mouEnd',
    enrollmentEstimate: 'enrollmentEstimate',
    notes: 'notes',
    staffCount: 'staffCount',
    studentCount: 'studentCount',
    totalClasses: 'totalClasses',
    feesCollected: 'feesCollected',
    recentUpdates: 'recentUpdates'
  };

  export type StudentAdmissionScalarFieldEnum = (typeof StudentAdmissionScalarFieldEnum)[keyof typeof StudentAdmissionScalarFieldEnum]


  export const TraiRegisterScalarFieldEnum: {
    id: 'id',
    uniqueId: 'uniqueId',
    fullName: 'fullName',
    phoneNo: 'phoneNo',
    email: 'email',
    district: 'district',
    password: 'password',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type TraiRegisterScalarFieldEnum = (typeof TraiRegisterScalarFieldEnum)[keyof typeof TraiRegisterScalarFieldEnum]


  export const InstiRegisterScalarFieldEnum: {
    id: 'id',
    uniqueId: 'uniqueId',
    instiName: 'instiName',
    instiType: 'instiType',
    headName: 'headName',
    phoneNo: 'phoneNo',
    email: 'email',
    district: 'district',
    password: 'password',
    status: 'status',
    trainerId: 'trainerId',
    udise: 'udise',
    management: 'management',
    mandal: 'mandal',
    address: 'address',
    chairmanName: 'chairmanName',
    chairmanMobile: 'chairmanMobile',
    headPhone: 'headPhone',
    altPhone: 'altPhone',
    principalEmail: 'principalEmail',
    coordinatorName: 'coordinatorName',
    coordinatorMobile: 'coordinatorMobile',
    mouStatus: 'mouStatus',
    mouStart: 'mouStart',
    mouEnd: 'mouEnd',
    enrollmentEstimate: 'enrollmentEstimate',
    notes: 'notes',
    staffCount: 'staffCount',
    studentCount: 'studentCount',
    totalClasses: 'totalClasses',
    feesCollected: 'feesCollected',
    recentUpdates: 'recentUpdates',
    isProfileComplete: 'isProfileComplete',
    createdAt: 'createdAt'
  };

  export type InstiRegisterScalarFieldEnum = (typeof InstiRegisterScalarFieldEnum)[keyof typeof InstiRegisterScalarFieldEnum]


  export const ContactSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    message: 'message',
    phone: 'phone',
    subject: 'subject',
    createdAt: 'createdAt'
  };

  export type ContactSubmissionScalarFieldEnum = (typeof ContactSubmissionScalarFieldEnum)[keyof typeof ContactSubmissionScalarFieldEnum]


  export const DonationSubmissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    amount: 'amount',
    pan: 'pan',
    address: 'address',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type DonationSubmissionScalarFieldEnum = (typeof DonationSubmissionScalarFieldEnum)[keyof typeof DonationSubmissionScalarFieldEnum]


  export const JobPostingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    role: 'role',
    type: 'type',
    location: 'location',
    description: 'description',
    deadline: 'deadline',
    createdAt: 'createdAt',
    active: 'active'
  };

  export type JobPostingScalarFieldEnum = (typeof JobPostingScalarFieldEnum)[keyof typeof JobPostingScalarFieldEnum]


  export const JobApplicationScalarFieldEnum: {
    id: 'id',
    jobId: 'jobId',
    applicantName: 'applicantName',
    email: 'email',
    phone: 'phone',
    resumeUrl: 'resumeUrl',
    coverLetter: 'coverLetter',
    createdAt: 'createdAt'
  };

  export type JobApplicationScalarFieldEnum = (typeof JobApplicationScalarFieldEnum)[keyof typeof JobApplicationScalarFieldEnum]


  export const DocumentationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    fileUrl: 'fileUrl',
    category: 'category',
    createdAt: 'createdAt'
  };

  export type DocumentationScalarFieldEnum = (typeof DocumentationScalarFieldEnum)[keyof typeof DocumentationScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PublicFormWhereInput = {
    AND?: PublicFormWhereInput | PublicFormWhereInput[]
    OR?: PublicFormWhereInput[]
    NOT?: PublicFormWhereInput | PublicFormWhereInput[]
    id?: StringFilter<"PublicForm"> | string
    name?: StringFilter<"PublicForm"> | string
    email?: StringFilter<"PublicForm"> | string
    message?: StringFilter<"PublicForm"> | string
    createdAt?: DateTimeFilter<"PublicForm"> | Date | string
  }

  export type PublicFormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type PublicFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PublicFormWhereInput | PublicFormWhereInput[]
    OR?: PublicFormWhereInput[]
    NOT?: PublicFormWhereInput | PublicFormWhereInput[]
    name?: StringFilter<"PublicForm"> | string
    email?: StringFilter<"PublicForm"> | string
    message?: StringFilter<"PublicForm"> | string
    createdAt?: DateTimeFilter<"PublicForm"> | Date | string
  }, "id">

  export type PublicFormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    _count?: PublicFormCountOrderByAggregateInput
    _max?: PublicFormMaxOrderByAggregateInput
    _min?: PublicFormMinOrderByAggregateInput
  }

  export type PublicFormScalarWhereWithAggregatesInput = {
    AND?: PublicFormScalarWhereWithAggregatesInput | PublicFormScalarWhereWithAggregatesInput[]
    OR?: PublicFormScalarWhereWithAggregatesInput[]
    NOT?: PublicFormScalarWhereWithAggregatesInput | PublicFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PublicForm"> | string
    name?: StringWithAggregatesFilter<"PublicForm"> | string
    email?: StringWithAggregatesFilter<"PublicForm"> | string
    message?: StringWithAggregatesFilter<"PublicForm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PublicForm"> | Date | string
  }

  export type CalendarEventWhereInput = {
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    id?: StringFilter<"CalendarEvent"> | string
    title?: StringFilter<"CalendarEvent"> | string
    date?: StringFilter<"CalendarEvent"> | string
    description?: StringNullableFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeFilter<"CalendarEvent"> | Date | string
  }

  export type CalendarEventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CalendarEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CalendarEventWhereInput | CalendarEventWhereInput[]
    OR?: CalendarEventWhereInput[]
    NOT?: CalendarEventWhereInput | CalendarEventWhereInput[]
    title?: StringFilter<"CalendarEvent"> | string
    date?: StringFilter<"CalendarEvent"> | string
    description?: StringNullableFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeFilter<"CalendarEvent"> | Date | string
  }, "id">

  export type CalendarEventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CalendarEventCountOrderByAggregateInput
    _max?: CalendarEventMaxOrderByAggregateInput
    _min?: CalendarEventMinOrderByAggregateInput
  }

  export type CalendarEventScalarWhereWithAggregatesInput = {
    AND?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    OR?: CalendarEventScalarWhereWithAggregatesInput[]
    NOT?: CalendarEventScalarWhereWithAggregatesInput | CalendarEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CalendarEvent"> | string
    title?: StringWithAggregatesFilter<"CalendarEvent"> | string
    date?: StringWithAggregatesFilter<"CalendarEvent"> | string
    description?: StringNullableWithAggregatesFilter<"CalendarEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CalendarEvent"> | Date | string
  }

  export type StudentAdmissionWhereInput = {
    AND?: StudentAdmissionWhereInput | StudentAdmissionWhereInput[]
    OR?: StudentAdmissionWhereInput[]
    NOT?: StudentAdmissionWhereInput | StudentAdmissionWhereInput[]
    id?: StringFilter<"StudentAdmission"> | string
    district?: StringFilter<"StudentAdmission"> | string
    schoolName?: StringFilter<"StudentAdmission"> | string
    studentName?: StringFilter<"StudentAdmission"> | string
    fatherName?: StringFilter<"StudentAdmission"> | string
    dob?: StringFilter<"StudentAdmission"> | string
    className?: StringFilter<"StudentAdmission"> | string
    aadharNo?: StringFilter<"StudentAdmission"> | string
    address?: StringFilter<"StudentAdmission"> | string
    phoneNo?: StringFilter<"StudentAdmission"> | string
    studentSignature?: StringFilter<"StudentAdmission"> | string
    principalSignature?: StringFilter<"StudentAdmission"> | string
    seal?: StringFilter<"StudentAdmission"> | string
    instiId?: StringNullableFilter<"StudentAdmission"> | string | null
    createdAt?: DateTimeFilter<"StudentAdmission"> | Date | string
    udise?: StringNullableFilter<"StudentAdmission"> | string | null
    management?: StringNullableFilter<"StudentAdmission"> | string | null
    mandal?: StringNullableFilter<"StudentAdmission"> | string | null
    chairmanName?: StringNullableFilter<"StudentAdmission"> | string | null
    chairmanMobile?: StringNullableFilter<"StudentAdmission"> | string | null
    headName?: StringNullableFilter<"StudentAdmission"> | string | null
    headPhone?: StringNullableFilter<"StudentAdmission"> | string | null
    altPhone?: StringNullableFilter<"StudentAdmission"> | string | null
    principalEmail?: StringNullableFilter<"StudentAdmission"> | string | null
    instiEmail?: StringNullableFilter<"StudentAdmission"> | string | null
    coordinatorName?: StringNullableFilter<"StudentAdmission"> | string | null
    coordinatorMobile?: StringNullableFilter<"StudentAdmission"> | string | null
    mouStatus?: StringNullableFilter<"StudentAdmission"> | string | null
    mouStart?: StringNullableFilter<"StudentAdmission"> | string | null
    mouEnd?: StringNullableFilter<"StudentAdmission"> | string | null
    enrollmentEstimate?: StringNullableFilter<"StudentAdmission"> | string | null
    notes?: StringNullableFilter<"StudentAdmission"> | string | null
    staffCount?: StringNullableFilter<"StudentAdmission"> | string | null
    studentCount?: StringNullableFilter<"StudentAdmission"> | string | null
    totalClasses?: StringNullableFilter<"StudentAdmission"> | string | null
    feesCollected?: StringNullableFilter<"StudentAdmission"> | string | null
    recentUpdates?: StringNullableFilter<"StudentAdmission"> | string | null
  }

  export type StudentAdmissionOrderByWithRelationInput = {
    id?: SortOrder
    district?: SortOrder
    schoolName?: SortOrder
    studentName?: SortOrder
    fatherName?: SortOrder
    dob?: SortOrder
    className?: SortOrder
    aadharNo?: SortOrder
    address?: SortOrder
    phoneNo?: SortOrder
    studentSignature?: SortOrder
    principalSignature?: SortOrder
    seal?: SortOrder
    instiId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    udise?: SortOrderInput | SortOrder
    management?: SortOrderInput | SortOrder
    mandal?: SortOrderInput | SortOrder
    chairmanName?: SortOrderInput | SortOrder
    chairmanMobile?: SortOrderInput | SortOrder
    headName?: SortOrderInput | SortOrder
    headPhone?: SortOrderInput | SortOrder
    altPhone?: SortOrderInput | SortOrder
    principalEmail?: SortOrderInput | SortOrder
    instiEmail?: SortOrderInput | SortOrder
    coordinatorName?: SortOrderInput | SortOrder
    coordinatorMobile?: SortOrderInput | SortOrder
    mouStatus?: SortOrderInput | SortOrder
    mouStart?: SortOrderInput | SortOrder
    mouEnd?: SortOrderInput | SortOrder
    enrollmentEstimate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    staffCount?: SortOrderInput | SortOrder
    studentCount?: SortOrderInput | SortOrder
    totalClasses?: SortOrderInput | SortOrder
    feesCollected?: SortOrderInput | SortOrder
    recentUpdates?: SortOrderInput | SortOrder
  }

  export type StudentAdmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentAdmissionWhereInput | StudentAdmissionWhereInput[]
    OR?: StudentAdmissionWhereInput[]
    NOT?: StudentAdmissionWhereInput | StudentAdmissionWhereInput[]
    district?: StringFilter<"StudentAdmission"> | string
    schoolName?: StringFilter<"StudentAdmission"> | string
    studentName?: StringFilter<"StudentAdmission"> | string
    fatherName?: StringFilter<"StudentAdmission"> | string
    dob?: StringFilter<"StudentAdmission"> | string
    className?: StringFilter<"StudentAdmission"> | string
    aadharNo?: StringFilter<"StudentAdmission"> | string
    address?: StringFilter<"StudentAdmission"> | string
    phoneNo?: StringFilter<"StudentAdmission"> | string
    studentSignature?: StringFilter<"StudentAdmission"> | string
    principalSignature?: StringFilter<"StudentAdmission"> | string
    seal?: StringFilter<"StudentAdmission"> | string
    instiId?: StringNullableFilter<"StudentAdmission"> | string | null
    createdAt?: DateTimeFilter<"StudentAdmission"> | Date | string
    udise?: StringNullableFilter<"StudentAdmission"> | string | null
    management?: StringNullableFilter<"StudentAdmission"> | string | null
    mandal?: StringNullableFilter<"StudentAdmission"> | string | null
    chairmanName?: StringNullableFilter<"StudentAdmission"> | string | null
    chairmanMobile?: StringNullableFilter<"StudentAdmission"> | string | null
    headName?: StringNullableFilter<"StudentAdmission"> | string | null
    headPhone?: StringNullableFilter<"StudentAdmission"> | string | null
    altPhone?: StringNullableFilter<"StudentAdmission"> | string | null
    principalEmail?: StringNullableFilter<"StudentAdmission"> | string | null
    instiEmail?: StringNullableFilter<"StudentAdmission"> | string | null
    coordinatorName?: StringNullableFilter<"StudentAdmission"> | string | null
    coordinatorMobile?: StringNullableFilter<"StudentAdmission"> | string | null
    mouStatus?: StringNullableFilter<"StudentAdmission"> | string | null
    mouStart?: StringNullableFilter<"StudentAdmission"> | string | null
    mouEnd?: StringNullableFilter<"StudentAdmission"> | string | null
    enrollmentEstimate?: StringNullableFilter<"StudentAdmission"> | string | null
    notes?: StringNullableFilter<"StudentAdmission"> | string | null
    staffCount?: StringNullableFilter<"StudentAdmission"> | string | null
    studentCount?: StringNullableFilter<"StudentAdmission"> | string | null
    totalClasses?: StringNullableFilter<"StudentAdmission"> | string | null
    feesCollected?: StringNullableFilter<"StudentAdmission"> | string | null
    recentUpdates?: StringNullableFilter<"StudentAdmission"> | string | null
  }, "id">

  export type StudentAdmissionOrderByWithAggregationInput = {
    id?: SortOrder
    district?: SortOrder
    schoolName?: SortOrder
    studentName?: SortOrder
    fatherName?: SortOrder
    dob?: SortOrder
    className?: SortOrder
    aadharNo?: SortOrder
    address?: SortOrder
    phoneNo?: SortOrder
    studentSignature?: SortOrder
    principalSignature?: SortOrder
    seal?: SortOrder
    instiId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    udise?: SortOrderInput | SortOrder
    management?: SortOrderInput | SortOrder
    mandal?: SortOrderInput | SortOrder
    chairmanName?: SortOrderInput | SortOrder
    chairmanMobile?: SortOrderInput | SortOrder
    headName?: SortOrderInput | SortOrder
    headPhone?: SortOrderInput | SortOrder
    altPhone?: SortOrderInput | SortOrder
    principalEmail?: SortOrderInput | SortOrder
    instiEmail?: SortOrderInput | SortOrder
    coordinatorName?: SortOrderInput | SortOrder
    coordinatorMobile?: SortOrderInput | SortOrder
    mouStatus?: SortOrderInput | SortOrder
    mouStart?: SortOrderInput | SortOrder
    mouEnd?: SortOrderInput | SortOrder
    enrollmentEstimate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    staffCount?: SortOrderInput | SortOrder
    studentCount?: SortOrderInput | SortOrder
    totalClasses?: SortOrderInput | SortOrder
    feesCollected?: SortOrderInput | SortOrder
    recentUpdates?: SortOrderInput | SortOrder
    _count?: StudentAdmissionCountOrderByAggregateInput
    _max?: StudentAdmissionMaxOrderByAggregateInput
    _min?: StudentAdmissionMinOrderByAggregateInput
  }

  export type StudentAdmissionScalarWhereWithAggregatesInput = {
    AND?: StudentAdmissionScalarWhereWithAggregatesInput | StudentAdmissionScalarWhereWithAggregatesInput[]
    OR?: StudentAdmissionScalarWhereWithAggregatesInput[]
    NOT?: StudentAdmissionScalarWhereWithAggregatesInput | StudentAdmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentAdmission"> | string
    district?: StringWithAggregatesFilter<"StudentAdmission"> | string
    schoolName?: StringWithAggregatesFilter<"StudentAdmission"> | string
    studentName?: StringWithAggregatesFilter<"StudentAdmission"> | string
    fatherName?: StringWithAggregatesFilter<"StudentAdmission"> | string
    dob?: StringWithAggregatesFilter<"StudentAdmission"> | string
    className?: StringWithAggregatesFilter<"StudentAdmission"> | string
    aadharNo?: StringWithAggregatesFilter<"StudentAdmission"> | string
    address?: StringWithAggregatesFilter<"StudentAdmission"> | string
    phoneNo?: StringWithAggregatesFilter<"StudentAdmission"> | string
    studentSignature?: StringWithAggregatesFilter<"StudentAdmission"> | string
    principalSignature?: StringWithAggregatesFilter<"StudentAdmission"> | string
    seal?: StringWithAggregatesFilter<"StudentAdmission"> | string
    instiId?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentAdmission"> | Date | string
    udise?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    management?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    mandal?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    chairmanName?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    chairmanMobile?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    headName?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    headPhone?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    altPhone?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    principalEmail?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    instiEmail?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    coordinatorName?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    coordinatorMobile?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    mouStatus?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    mouStart?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    mouEnd?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    enrollmentEstimate?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    notes?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    staffCount?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    studentCount?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    totalClasses?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    feesCollected?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
    recentUpdates?: StringNullableWithAggregatesFilter<"StudentAdmission"> | string | null
  }

  export type TraiRegisterWhereInput = {
    AND?: TraiRegisterWhereInput | TraiRegisterWhereInput[]
    OR?: TraiRegisterWhereInput[]
    NOT?: TraiRegisterWhereInput | TraiRegisterWhereInput[]
    id?: StringFilter<"TraiRegister"> | string
    uniqueId?: StringFilter<"TraiRegister"> | string
    fullName?: StringFilter<"TraiRegister"> | string
    phoneNo?: StringFilter<"TraiRegister"> | string
    email?: StringFilter<"TraiRegister"> | string
    district?: StringFilter<"TraiRegister"> | string
    password?: StringFilter<"TraiRegister"> | string
    status?: StringFilter<"TraiRegister"> | string
    createdAt?: DateTimeFilter<"TraiRegister"> | Date | string
  }

  export type TraiRegisterOrderByWithRelationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    fullName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TraiRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueId?: string
    AND?: TraiRegisterWhereInput | TraiRegisterWhereInput[]
    OR?: TraiRegisterWhereInput[]
    NOT?: TraiRegisterWhereInput | TraiRegisterWhereInput[]
    fullName?: StringFilter<"TraiRegister"> | string
    phoneNo?: StringFilter<"TraiRegister"> | string
    email?: StringFilter<"TraiRegister"> | string
    district?: StringFilter<"TraiRegister"> | string
    password?: StringFilter<"TraiRegister"> | string
    status?: StringFilter<"TraiRegister"> | string
    createdAt?: DateTimeFilter<"TraiRegister"> | Date | string
  }, "id" | "uniqueId">

  export type TraiRegisterOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    fullName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: TraiRegisterCountOrderByAggregateInput
    _max?: TraiRegisterMaxOrderByAggregateInput
    _min?: TraiRegisterMinOrderByAggregateInput
  }

  export type TraiRegisterScalarWhereWithAggregatesInput = {
    AND?: TraiRegisterScalarWhereWithAggregatesInput | TraiRegisterScalarWhereWithAggregatesInput[]
    OR?: TraiRegisterScalarWhereWithAggregatesInput[]
    NOT?: TraiRegisterScalarWhereWithAggregatesInput | TraiRegisterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TraiRegister"> | string
    uniqueId?: StringWithAggregatesFilter<"TraiRegister"> | string
    fullName?: StringWithAggregatesFilter<"TraiRegister"> | string
    phoneNo?: StringWithAggregatesFilter<"TraiRegister"> | string
    email?: StringWithAggregatesFilter<"TraiRegister"> | string
    district?: StringWithAggregatesFilter<"TraiRegister"> | string
    password?: StringWithAggregatesFilter<"TraiRegister"> | string
    status?: StringWithAggregatesFilter<"TraiRegister"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TraiRegister"> | Date | string
  }

  export type InstiRegisterWhereInput = {
    AND?: InstiRegisterWhereInput | InstiRegisterWhereInput[]
    OR?: InstiRegisterWhereInput[]
    NOT?: InstiRegisterWhereInput | InstiRegisterWhereInput[]
    id?: StringFilter<"InstiRegister"> | string
    uniqueId?: StringFilter<"InstiRegister"> | string
    instiName?: StringFilter<"InstiRegister"> | string
    instiType?: StringFilter<"InstiRegister"> | string
    headName?: StringFilter<"InstiRegister"> | string
    phoneNo?: StringFilter<"InstiRegister"> | string
    email?: StringFilter<"InstiRegister"> | string
    district?: StringFilter<"InstiRegister"> | string
    password?: StringFilter<"InstiRegister"> | string
    status?: StringFilter<"InstiRegister"> | string
    trainerId?: StringNullableFilter<"InstiRegister"> | string | null
    udise?: StringNullableFilter<"InstiRegister"> | string | null
    management?: StringNullableFilter<"InstiRegister"> | string | null
    mandal?: StringNullableFilter<"InstiRegister"> | string | null
    address?: StringNullableFilter<"InstiRegister"> | string | null
    chairmanName?: StringNullableFilter<"InstiRegister"> | string | null
    chairmanMobile?: StringNullableFilter<"InstiRegister"> | string | null
    headPhone?: StringNullableFilter<"InstiRegister"> | string | null
    altPhone?: StringNullableFilter<"InstiRegister"> | string | null
    principalEmail?: StringNullableFilter<"InstiRegister"> | string | null
    coordinatorName?: StringNullableFilter<"InstiRegister"> | string | null
    coordinatorMobile?: StringNullableFilter<"InstiRegister"> | string | null
    mouStatus?: StringNullableFilter<"InstiRegister"> | string | null
    mouStart?: StringNullableFilter<"InstiRegister"> | string | null
    mouEnd?: StringNullableFilter<"InstiRegister"> | string | null
    enrollmentEstimate?: StringNullableFilter<"InstiRegister"> | string | null
    notes?: StringNullableFilter<"InstiRegister"> | string | null
    staffCount?: StringNullableFilter<"InstiRegister"> | string | null
    studentCount?: StringNullableFilter<"InstiRegister"> | string | null
    totalClasses?: StringNullableFilter<"InstiRegister"> | string | null
    feesCollected?: StringNullableFilter<"InstiRegister"> | string | null
    recentUpdates?: StringNullableFilter<"InstiRegister"> | string | null
    isProfileComplete?: BoolFilter<"InstiRegister"> | boolean
    createdAt?: DateTimeFilter<"InstiRegister"> | Date | string
  }

  export type InstiRegisterOrderByWithRelationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    instiName?: SortOrder
    instiType?: SortOrder
    headName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    trainerId?: SortOrderInput | SortOrder
    udise?: SortOrderInput | SortOrder
    management?: SortOrderInput | SortOrder
    mandal?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    chairmanName?: SortOrderInput | SortOrder
    chairmanMobile?: SortOrderInput | SortOrder
    headPhone?: SortOrderInput | SortOrder
    altPhone?: SortOrderInput | SortOrder
    principalEmail?: SortOrderInput | SortOrder
    coordinatorName?: SortOrderInput | SortOrder
    coordinatorMobile?: SortOrderInput | SortOrder
    mouStatus?: SortOrderInput | SortOrder
    mouStart?: SortOrderInput | SortOrder
    mouEnd?: SortOrderInput | SortOrder
    enrollmentEstimate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    staffCount?: SortOrderInput | SortOrder
    studentCount?: SortOrderInput | SortOrder
    totalClasses?: SortOrderInput | SortOrder
    feesCollected?: SortOrderInput | SortOrder
    recentUpdates?: SortOrderInput | SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
  }

  export type InstiRegisterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    uniqueId?: string
    AND?: InstiRegisterWhereInput | InstiRegisterWhereInput[]
    OR?: InstiRegisterWhereInput[]
    NOT?: InstiRegisterWhereInput | InstiRegisterWhereInput[]
    instiName?: StringFilter<"InstiRegister"> | string
    instiType?: StringFilter<"InstiRegister"> | string
    headName?: StringFilter<"InstiRegister"> | string
    phoneNo?: StringFilter<"InstiRegister"> | string
    email?: StringFilter<"InstiRegister"> | string
    district?: StringFilter<"InstiRegister"> | string
    password?: StringFilter<"InstiRegister"> | string
    status?: StringFilter<"InstiRegister"> | string
    trainerId?: StringNullableFilter<"InstiRegister"> | string | null
    udise?: StringNullableFilter<"InstiRegister"> | string | null
    management?: StringNullableFilter<"InstiRegister"> | string | null
    mandal?: StringNullableFilter<"InstiRegister"> | string | null
    address?: StringNullableFilter<"InstiRegister"> | string | null
    chairmanName?: StringNullableFilter<"InstiRegister"> | string | null
    chairmanMobile?: StringNullableFilter<"InstiRegister"> | string | null
    headPhone?: StringNullableFilter<"InstiRegister"> | string | null
    altPhone?: StringNullableFilter<"InstiRegister"> | string | null
    principalEmail?: StringNullableFilter<"InstiRegister"> | string | null
    coordinatorName?: StringNullableFilter<"InstiRegister"> | string | null
    coordinatorMobile?: StringNullableFilter<"InstiRegister"> | string | null
    mouStatus?: StringNullableFilter<"InstiRegister"> | string | null
    mouStart?: StringNullableFilter<"InstiRegister"> | string | null
    mouEnd?: StringNullableFilter<"InstiRegister"> | string | null
    enrollmentEstimate?: StringNullableFilter<"InstiRegister"> | string | null
    notes?: StringNullableFilter<"InstiRegister"> | string | null
    staffCount?: StringNullableFilter<"InstiRegister"> | string | null
    studentCount?: StringNullableFilter<"InstiRegister"> | string | null
    totalClasses?: StringNullableFilter<"InstiRegister"> | string | null
    feesCollected?: StringNullableFilter<"InstiRegister"> | string | null
    recentUpdates?: StringNullableFilter<"InstiRegister"> | string | null
    isProfileComplete?: BoolFilter<"InstiRegister"> | boolean
    createdAt?: DateTimeFilter<"InstiRegister"> | Date | string
  }, "id" | "uniqueId">

  export type InstiRegisterOrderByWithAggregationInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    instiName?: SortOrder
    instiType?: SortOrder
    headName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    trainerId?: SortOrderInput | SortOrder
    udise?: SortOrderInput | SortOrder
    management?: SortOrderInput | SortOrder
    mandal?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    chairmanName?: SortOrderInput | SortOrder
    chairmanMobile?: SortOrderInput | SortOrder
    headPhone?: SortOrderInput | SortOrder
    altPhone?: SortOrderInput | SortOrder
    principalEmail?: SortOrderInput | SortOrder
    coordinatorName?: SortOrderInput | SortOrder
    coordinatorMobile?: SortOrderInput | SortOrder
    mouStatus?: SortOrderInput | SortOrder
    mouStart?: SortOrderInput | SortOrder
    mouEnd?: SortOrderInput | SortOrder
    enrollmentEstimate?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    staffCount?: SortOrderInput | SortOrder
    studentCount?: SortOrderInput | SortOrder
    totalClasses?: SortOrderInput | SortOrder
    feesCollected?: SortOrderInput | SortOrder
    recentUpdates?: SortOrderInput | SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
    _count?: InstiRegisterCountOrderByAggregateInput
    _max?: InstiRegisterMaxOrderByAggregateInput
    _min?: InstiRegisterMinOrderByAggregateInput
  }

  export type InstiRegisterScalarWhereWithAggregatesInput = {
    AND?: InstiRegisterScalarWhereWithAggregatesInput | InstiRegisterScalarWhereWithAggregatesInput[]
    OR?: InstiRegisterScalarWhereWithAggregatesInput[]
    NOT?: InstiRegisterScalarWhereWithAggregatesInput | InstiRegisterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstiRegister"> | string
    uniqueId?: StringWithAggregatesFilter<"InstiRegister"> | string
    instiName?: StringWithAggregatesFilter<"InstiRegister"> | string
    instiType?: StringWithAggregatesFilter<"InstiRegister"> | string
    headName?: StringWithAggregatesFilter<"InstiRegister"> | string
    phoneNo?: StringWithAggregatesFilter<"InstiRegister"> | string
    email?: StringWithAggregatesFilter<"InstiRegister"> | string
    district?: StringWithAggregatesFilter<"InstiRegister"> | string
    password?: StringWithAggregatesFilter<"InstiRegister"> | string
    status?: StringWithAggregatesFilter<"InstiRegister"> | string
    trainerId?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    udise?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    management?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    mandal?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    address?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    chairmanName?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    chairmanMobile?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    headPhone?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    altPhone?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    principalEmail?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    coordinatorName?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    coordinatorMobile?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    mouStatus?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    mouStart?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    mouEnd?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    enrollmentEstimate?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    notes?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    staffCount?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    studentCount?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    totalClasses?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    feesCollected?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    recentUpdates?: StringNullableWithAggregatesFilter<"InstiRegister"> | string | null
    isProfileComplete?: BoolWithAggregatesFilter<"InstiRegister"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"InstiRegister"> | Date | string
  }

  export type ContactSubmissionWhereInput = {
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    id?: StringFilter<"ContactSubmission"> | string
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    message?: StringFilter<"ContactSubmission"> | string
    phone?: StringNullableFilter<"ContactSubmission"> | string | null
    subject?: StringNullableFilter<"ContactSubmission"> | string | null
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }

  export type ContactSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    OR?: ContactSubmissionWhereInput[]
    NOT?: ContactSubmissionWhereInput | ContactSubmissionWhereInput[]
    name?: StringFilter<"ContactSubmission"> | string
    email?: StringFilter<"ContactSubmission"> | string
    message?: StringFilter<"ContactSubmission"> | string
    phone?: StringNullableFilter<"ContactSubmission"> | string | null
    subject?: StringNullableFilter<"ContactSubmission"> | string | null
    createdAt?: DateTimeFilter<"ContactSubmission"> | Date | string
  }, "id">

  export type ContactSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    phone?: SortOrderInput | SortOrder
    subject?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ContactSubmissionCountOrderByAggregateInput
    _max?: ContactSubmissionMaxOrderByAggregateInput
    _min?: ContactSubmissionMinOrderByAggregateInput
  }

  export type ContactSubmissionScalarWhereWithAggregatesInput = {
    AND?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    OR?: ContactSubmissionScalarWhereWithAggregatesInput[]
    NOT?: ContactSubmissionScalarWhereWithAggregatesInput | ContactSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactSubmission"> | string
    name?: StringWithAggregatesFilter<"ContactSubmission"> | string
    email?: StringWithAggregatesFilter<"ContactSubmission"> | string
    message?: StringWithAggregatesFilter<"ContactSubmission"> | string
    phone?: StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null
    subject?: StringNullableWithAggregatesFilter<"ContactSubmission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactSubmission"> | Date | string
  }

  export type DonationSubmissionWhereInput = {
    AND?: DonationSubmissionWhereInput | DonationSubmissionWhereInput[]
    OR?: DonationSubmissionWhereInput[]
    NOT?: DonationSubmissionWhereInput | DonationSubmissionWhereInput[]
    id?: StringFilter<"DonationSubmission"> | string
    name?: StringFilter<"DonationSubmission"> | string
    email?: StringFilter<"DonationSubmission"> | string
    amount?: StringFilter<"DonationSubmission"> | string
    pan?: StringNullableFilter<"DonationSubmission"> | string | null
    address?: StringNullableFilter<"DonationSubmission"> | string | null
    phone?: StringNullableFilter<"DonationSubmission"> | string | null
    createdAt?: DateTimeFilter<"DonationSubmission"> | Date | string
  }

  export type DonationSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    pan?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type DonationSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DonationSubmissionWhereInput | DonationSubmissionWhereInput[]
    OR?: DonationSubmissionWhereInput[]
    NOT?: DonationSubmissionWhereInput | DonationSubmissionWhereInput[]
    name?: StringFilter<"DonationSubmission"> | string
    email?: StringFilter<"DonationSubmission"> | string
    amount?: StringFilter<"DonationSubmission"> | string
    pan?: StringNullableFilter<"DonationSubmission"> | string | null
    address?: StringNullableFilter<"DonationSubmission"> | string | null
    phone?: StringNullableFilter<"DonationSubmission"> | string | null
    createdAt?: DateTimeFilter<"DonationSubmission"> | Date | string
  }, "id">

  export type DonationSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    pan?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DonationSubmissionCountOrderByAggregateInput
    _max?: DonationSubmissionMaxOrderByAggregateInput
    _min?: DonationSubmissionMinOrderByAggregateInput
  }

  export type DonationSubmissionScalarWhereWithAggregatesInput = {
    AND?: DonationSubmissionScalarWhereWithAggregatesInput | DonationSubmissionScalarWhereWithAggregatesInput[]
    OR?: DonationSubmissionScalarWhereWithAggregatesInput[]
    NOT?: DonationSubmissionScalarWhereWithAggregatesInput | DonationSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DonationSubmission"> | string
    name?: StringWithAggregatesFilter<"DonationSubmission"> | string
    email?: StringWithAggregatesFilter<"DonationSubmission"> | string
    amount?: StringWithAggregatesFilter<"DonationSubmission"> | string
    pan?: StringNullableWithAggregatesFilter<"DonationSubmission"> | string | null
    address?: StringNullableWithAggregatesFilter<"DonationSubmission"> | string | null
    phone?: StringNullableWithAggregatesFilter<"DonationSubmission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DonationSubmission"> | Date | string
  }

  export type JobPostingWhereInput = {
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    id?: StringFilter<"JobPosting"> | string
    title?: StringFilter<"JobPosting"> | string
    role?: StringFilter<"JobPosting"> | string
    type?: StringFilter<"JobPosting"> | string
    location?: StringNullableFilter<"JobPosting"> | string | null
    description?: StringFilter<"JobPosting"> | string
    deadline?: StringNullableFilter<"JobPosting"> | string | null
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    active?: BoolFilter<"JobPosting"> | boolean
  }

  export type JobPostingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    type?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrder
    deadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type JobPostingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobPostingWhereInput | JobPostingWhereInput[]
    OR?: JobPostingWhereInput[]
    NOT?: JobPostingWhereInput | JobPostingWhereInput[]
    title?: StringFilter<"JobPosting"> | string
    role?: StringFilter<"JobPosting"> | string
    type?: StringFilter<"JobPosting"> | string
    location?: StringNullableFilter<"JobPosting"> | string | null
    description?: StringFilter<"JobPosting"> | string
    deadline?: StringNullableFilter<"JobPosting"> | string | null
    createdAt?: DateTimeFilter<"JobPosting"> | Date | string
    active?: BoolFilter<"JobPosting"> | boolean
  }, "id">

  export type JobPostingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    type?: SortOrder
    location?: SortOrderInput | SortOrder
    description?: SortOrder
    deadline?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    _count?: JobPostingCountOrderByAggregateInput
    _max?: JobPostingMaxOrderByAggregateInput
    _min?: JobPostingMinOrderByAggregateInput
  }

  export type JobPostingScalarWhereWithAggregatesInput = {
    AND?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    OR?: JobPostingScalarWhereWithAggregatesInput[]
    NOT?: JobPostingScalarWhereWithAggregatesInput | JobPostingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobPosting"> | string
    title?: StringWithAggregatesFilter<"JobPosting"> | string
    role?: StringWithAggregatesFilter<"JobPosting"> | string
    type?: StringWithAggregatesFilter<"JobPosting"> | string
    location?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    description?: StringWithAggregatesFilter<"JobPosting"> | string
    deadline?: StringNullableWithAggregatesFilter<"JobPosting"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobPosting"> | Date | string
    active?: BoolWithAggregatesFilter<"JobPosting"> | boolean
  }

  export type JobApplicationWhereInput = {
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    id?: StringFilter<"JobApplication"> | string
    jobId?: StringFilter<"JobApplication"> | string
    applicantName?: StringFilter<"JobApplication"> | string
    email?: StringFilter<"JobApplication"> | string
    phone?: StringFilter<"JobApplication"> | string
    resumeUrl?: StringFilter<"JobApplication"> | string
    coverLetter?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
  }

  export type JobApplicationOrderByWithRelationInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type JobApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JobApplicationWhereInput | JobApplicationWhereInput[]
    OR?: JobApplicationWhereInput[]
    NOT?: JobApplicationWhereInput | JobApplicationWhereInput[]
    jobId?: StringFilter<"JobApplication"> | string
    applicantName?: StringFilter<"JobApplication"> | string
    email?: StringFilter<"JobApplication"> | string
    phone?: StringFilter<"JobApplication"> | string
    resumeUrl?: StringFilter<"JobApplication"> | string
    coverLetter?: StringNullableFilter<"JobApplication"> | string | null
    createdAt?: DateTimeFilter<"JobApplication"> | Date | string
  }, "id">

  export type JobApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JobApplicationCountOrderByAggregateInput
    _max?: JobApplicationMaxOrderByAggregateInput
    _min?: JobApplicationMinOrderByAggregateInput
  }

  export type JobApplicationScalarWhereWithAggregatesInput = {
    AND?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    OR?: JobApplicationScalarWhereWithAggregatesInput[]
    NOT?: JobApplicationScalarWhereWithAggregatesInput | JobApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JobApplication"> | string
    jobId?: StringWithAggregatesFilter<"JobApplication"> | string
    applicantName?: StringWithAggregatesFilter<"JobApplication"> | string
    email?: StringWithAggregatesFilter<"JobApplication"> | string
    phone?: StringWithAggregatesFilter<"JobApplication"> | string
    resumeUrl?: StringWithAggregatesFilter<"JobApplication"> | string
    coverLetter?: StringNullableWithAggregatesFilter<"JobApplication"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JobApplication"> | Date | string
  }

  export type DocumentationWhereInput = {
    AND?: DocumentationWhereInput | DocumentationWhereInput[]
    OR?: DocumentationWhereInput[]
    NOT?: DocumentationWhereInput | DocumentationWhereInput[]
    id?: StringFilter<"Documentation"> | string
    title?: StringFilter<"Documentation"> | string
    description?: StringNullableFilter<"Documentation"> | string | null
    fileUrl?: StringFilter<"Documentation"> | string
    category?: StringNullableFilter<"Documentation"> | string | null
    createdAt?: DateTimeFilter<"Documentation"> | Date | string
  }

  export type DocumentationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type DocumentationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentationWhereInput | DocumentationWhereInput[]
    OR?: DocumentationWhereInput[]
    NOT?: DocumentationWhereInput | DocumentationWhereInput[]
    title?: StringFilter<"Documentation"> | string
    description?: StringNullableFilter<"Documentation"> | string | null
    fileUrl?: StringFilter<"Documentation"> | string
    category?: StringNullableFilter<"Documentation"> | string | null
    createdAt?: DateTimeFilter<"Documentation"> | Date | string
  }, "id">

  export type DocumentationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    fileUrl?: SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DocumentationCountOrderByAggregateInput
    _max?: DocumentationMaxOrderByAggregateInput
    _min?: DocumentationMinOrderByAggregateInput
  }

  export type DocumentationScalarWhereWithAggregatesInput = {
    AND?: DocumentationScalarWhereWithAggregatesInput | DocumentationScalarWhereWithAggregatesInput[]
    OR?: DocumentationScalarWhereWithAggregatesInput[]
    NOT?: DocumentationScalarWhereWithAggregatesInput | DocumentationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Documentation"> | string
    title?: StringWithAggregatesFilter<"Documentation"> | string
    description?: StringNullableWithAggregatesFilter<"Documentation"> | string | null
    fileUrl?: StringWithAggregatesFilter<"Documentation"> | string
    category?: StringNullableWithAggregatesFilter<"Documentation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Documentation"> | Date | string
  }

  export type PublicFormCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type PublicFormUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type PublicFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFormCreateManyInput = {
    id?: string
    name: string
    email: string
    message: string
    createdAt?: Date | string
  }

  export type PublicFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublicFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateInput = {
    id?: string
    title: string
    date: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CalendarEventUncheckedCreateInput = {
    id?: string
    title: string
    date: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CalendarEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventCreateManyInput = {
    id?: string
    title: string
    date: string
    description?: string | null
    createdAt?: Date | string
  }

  export type CalendarEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CalendarEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentAdmissionCreateInput = {
    id?: string
    district: string
    schoolName: string
    studentName: string
    fatherName: string
    dob: string
    className: string
    aadharNo: string
    address: string
    phoneNo: string
    studentSignature: string
    principalSignature: string
    seal: string
    instiId?: string | null
    createdAt?: Date | string
    udise?: string | null
    management?: string | null
    mandal?: string | null
    chairmanName?: string | null
    chairmanMobile?: string | null
    headName?: string | null
    headPhone?: string | null
    altPhone?: string | null
    principalEmail?: string | null
    instiEmail?: string | null
    coordinatorName?: string | null
    coordinatorMobile?: string | null
    mouStatus?: string | null
    mouStart?: string | null
    mouEnd?: string | null
    enrollmentEstimate?: string | null
    notes?: string | null
    staffCount?: string | null
    studentCount?: string | null
    totalClasses?: string | null
    feesCollected?: string | null
    recentUpdates?: string | null
  }

  export type StudentAdmissionUncheckedCreateInput = {
    id?: string
    district: string
    schoolName: string
    studentName: string
    fatherName: string
    dob: string
    className: string
    aadharNo: string
    address: string
    phoneNo: string
    studentSignature: string
    principalSignature: string
    seal: string
    instiId?: string | null
    createdAt?: Date | string
    udise?: string | null
    management?: string | null
    mandal?: string | null
    chairmanName?: string | null
    chairmanMobile?: string | null
    headName?: string | null
    headPhone?: string | null
    altPhone?: string | null
    principalEmail?: string | null
    instiEmail?: string | null
    coordinatorName?: string | null
    coordinatorMobile?: string | null
    mouStatus?: string | null
    mouStart?: string | null
    mouEnd?: string | null
    enrollmentEstimate?: string | null
    notes?: string | null
    staffCount?: string | null
    studentCount?: string | null
    totalClasses?: string | null
    feesCollected?: string | null
    recentUpdates?: string | null
  }

  export type StudentAdmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    aadharNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    studentSignature?: StringFieldUpdateOperationsInput | string
    principalSignature?: StringFieldUpdateOperationsInput | string
    seal?: StringFieldUpdateOperationsInput | string
    instiId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udise?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    mandal?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanName?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanMobile?: NullableStringFieldUpdateOperationsInput | string | null
    headName?: NullableStringFieldUpdateOperationsInput | string | null
    headPhone?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    instiEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorName?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mouStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mouStart?: NullableStringFieldUpdateOperationsInput | string | null
    mouEnd?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffCount?: NullableStringFieldUpdateOperationsInput | string | null
    studentCount?: NullableStringFieldUpdateOperationsInput | string | null
    totalClasses?: NullableStringFieldUpdateOperationsInput | string | null
    feesCollected?: NullableStringFieldUpdateOperationsInput | string | null
    recentUpdates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentAdmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    aadharNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    studentSignature?: StringFieldUpdateOperationsInput | string
    principalSignature?: StringFieldUpdateOperationsInput | string
    seal?: StringFieldUpdateOperationsInput | string
    instiId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udise?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    mandal?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanName?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanMobile?: NullableStringFieldUpdateOperationsInput | string | null
    headName?: NullableStringFieldUpdateOperationsInput | string | null
    headPhone?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    instiEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorName?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mouStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mouStart?: NullableStringFieldUpdateOperationsInput | string | null
    mouEnd?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffCount?: NullableStringFieldUpdateOperationsInput | string | null
    studentCount?: NullableStringFieldUpdateOperationsInput | string | null
    totalClasses?: NullableStringFieldUpdateOperationsInput | string | null
    feesCollected?: NullableStringFieldUpdateOperationsInput | string | null
    recentUpdates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentAdmissionCreateManyInput = {
    id?: string
    district: string
    schoolName: string
    studentName: string
    fatherName: string
    dob: string
    className: string
    aadharNo: string
    address: string
    phoneNo: string
    studentSignature: string
    principalSignature: string
    seal: string
    instiId?: string | null
    createdAt?: Date | string
    udise?: string | null
    management?: string | null
    mandal?: string | null
    chairmanName?: string | null
    chairmanMobile?: string | null
    headName?: string | null
    headPhone?: string | null
    altPhone?: string | null
    principalEmail?: string | null
    instiEmail?: string | null
    coordinatorName?: string | null
    coordinatorMobile?: string | null
    mouStatus?: string | null
    mouStart?: string | null
    mouEnd?: string | null
    enrollmentEstimate?: string | null
    notes?: string | null
    staffCount?: string | null
    studentCount?: string | null
    totalClasses?: string | null
    feesCollected?: string | null
    recentUpdates?: string | null
  }

  export type StudentAdmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    aadharNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    studentSignature?: StringFieldUpdateOperationsInput | string
    principalSignature?: StringFieldUpdateOperationsInput | string
    seal?: StringFieldUpdateOperationsInput | string
    instiId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udise?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    mandal?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanName?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanMobile?: NullableStringFieldUpdateOperationsInput | string | null
    headName?: NullableStringFieldUpdateOperationsInput | string | null
    headPhone?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    instiEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorName?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mouStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mouStart?: NullableStringFieldUpdateOperationsInput | string | null
    mouEnd?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffCount?: NullableStringFieldUpdateOperationsInput | string | null
    studentCount?: NullableStringFieldUpdateOperationsInput | string | null
    totalClasses?: NullableStringFieldUpdateOperationsInput | string | null
    feesCollected?: NullableStringFieldUpdateOperationsInput | string | null
    recentUpdates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentAdmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    fatherName?: StringFieldUpdateOperationsInput | string
    dob?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    aadharNo?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    studentSignature?: StringFieldUpdateOperationsInput | string
    principalSignature?: StringFieldUpdateOperationsInput | string
    seal?: StringFieldUpdateOperationsInput | string
    instiId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    udise?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    mandal?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanName?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanMobile?: NullableStringFieldUpdateOperationsInput | string | null
    headName?: NullableStringFieldUpdateOperationsInput | string | null
    headPhone?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    instiEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorName?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mouStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mouStart?: NullableStringFieldUpdateOperationsInput | string | null
    mouEnd?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffCount?: NullableStringFieldUpdateOperationsInput | string | null
    studentCount?: NullableStringFieldUpdateOperationsInput | string | null
    totalClasses?: NullableStringFieldUpdateOperationsInput | string | null
    feesCollected?: NullableStringFieldUpdateOperationsInput | string | null
    recentUpdates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TraiRegisterCreateInput = {
    id?: string
    uniqueId: string
    fullName: string
    phoneNo: string
    email: string
    district: string
    password: string
    status?: string
    createdAt?: Date | string
  }

  export type TraiRegisterUncheckedCreateInput = {
    id?: string
    uniqueId: string
    fullName: string
    phoneNo: string
    email: string
    district: string
    password: string
    status?: string
    createdAt?: Date | string
  }

  export type TraiRegisterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraiRegisterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraiRegisterCreateManyInput = {
    id?: string
    uniqueId: string
    fullName: string
    phoneNo: string
    email: string
    district: string
    password: string
    status?: string
    createdAt?: Date | string
  }

  export type TraiRegisterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TraiRegisterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstiRegisterCreateInput = {
    id?: string
    uniqueId: string
    instiName: string
    instiType: string
    headName: string
    phoneNo: string
    email: string
    district: string
    password: string
    status?: string
    trainerId?: string | null
    udise?: string | null
    management?: string | null
    mandal?: string | null
    address?: string | null
    chairmanName?: string | null
    chairmanMobile?: string | null
    headPhone?: string | null
    altPhone?: string | null
    principalEmail?: string | null
    coordinatorName?: string | null
    coordinatorMobile?: string | null
    mouStatus?: string | null
    mouStart?: string | null
    mouEnd?: string | null
    enrollmentEstimate?: string | null
    notes?: string | null
    staffCount?: string | null
    studentCount?: string | null
    totalClasses?: string | null
    feesCollected?: string | null
    recentUpdates?: string | null
    isProfileComplete?: boolean
    createdAt?: Date | string
  }

  export type InstiRegisterUncheckedCreateInput = {
    id?: string
    uniqueId: string
    instiName: string
    instiType: string
    headName: string
    phoneNo: string
    email: string
    district: string
    password: string
    status?: string
    trainerId?: string | null
    udise?: string | null
    management?: string | null
    mandal?: string | null
    address?: string | null
    chairmanName?: string | null
    chairmanMobile?: string | null
    headPhone?: string | null
    altPhone?: string | null
    principalEmail?: string | null
    coordinatorName?: string | null
    coordinatorMobile?: string | null
    mouStatus?: string | null
    mouStart?: string | null
    mouEnd?: string | null
    enrollmentEstimate?: string | null
    notes?: string | null
    staffCount?: string | null
    studentCount?: string | null
    totalClasses?: string | null
    feesCollected?: string | null
    recentUpdates?: string | null
    isProfileComplete?: boolean
    createdAt?: Date | string
  }

  export type InstiRegisterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    instiName?: StringFieldUpdateOperationsInput | string
    instiType?: StringFieldUpdateOperationsInput | string
    headName?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    udise?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    mandal?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanName?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanMobile?: NullableStringFieldUpdateOperationsInput | string | null
    headPhone?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorName?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mouStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mouStart?: NullableStringFieldUpdateOperationsInput | string | null
    mouEnd?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffCount?: NullableStringFieldUpdateOperationsInput | string | null
    studentCount?: NullableStringFieldUpdateOperationsInput | string | null
    totalClasses?: NullableStringFieldUpdateOperationsInput | string | null
    feesCollected?: NullableStringFieldUpdateOperationsInput | string | null
    recentUpdates?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstiRegisterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    instiName?: StringFieldUpdateOperationsInput | string
    instiType?: StringFieldUpdateOperationsInput | string
    headName?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    udise?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    mandal?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanName?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanMobile?: NullableStringFieldUpdateOperationsInput | string | null
    headPhone?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorName?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mouStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mouStart?: NullableStringFieldUpdateOperationsInput | string | null
    mouEnd?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffCount?: NullableStringFieldUpdateOperationsInput | string | null
    studentCount?: NullableStringFieldUpdateOperationsInput | string | null
    totalClasses?: NullableStringFieldUpdateOperationsInput | string | null
    feesCollected?: NullableStringFieldUpdateOperationsInput | string | null
    recentUpdates?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstiRegisterCreateManyInput = {
    id?: string
    uniqueId: string
    instiName: string
    instiType: string
    headName: string
    phoneNo: string
    email: string
    district: string
    password: string
    status?: string
    trainerId?: string | null
    udise?: string | null
    management?: string | null
    mandal?: string | null
    address?: string | null
    chairmanName?: string | null
    chairmanMobile?: string | null
    headPhone?: string | null
    altPhone?: string | null
    principalEmail?: string | null
    coordinatorName?: string | null
    coordinatorMobile?: string | null
    mouStatus?: string | null
    mouStart?: string | null
    mouEnd?: string | null
    enrollmentEstimate?: string | null
    notes?: string | null
    staffCount?: string | null
    studentCount?: string | null
    totalClasses?: string | null
    feesCollected?: string | null
    recentUpdates?: string | null
    isProfileComplete?: boolean
    createdAt?: Date | string
  }

  export type InstiRegisterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    instiName?: StringFieldUpdateOperationsInput | string
    instiType?: StringFieldUpdateOperationsInput | string
    headName?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    udise?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    mandal?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanName?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanMobile?: NullableStringFieldUpdateOperationsInput | string | null
    headPhone?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorName?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mouStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mouStart?: NullableStringFieldUpdateOperationsInput | string | null
    mouEnd?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffCount?: NullableStringFieldUpdateOperationsInput | string | null
    studentCount?: NullableStringFieldUpdateOperationsInput | string | null
    totalClasses?: NullableStringFieldUpdateOperationsInput | string | null
    feesCollected?: NullableStringFieldUpdateOperationsInput | string | null
    recentUpdates?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstiRegisterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    uniqueId?: StringFieldUpdateOperationsInput | string
    instiName?: StringFieldUpdateOperationsInput | string
    instiType?: StringFieldUpdateOperationsInput | string
    headName?: StringFieldUpdateOperationsInput | string
    phoneNo?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trainerId?: NullableStringFieldUpdateOperationsInput | string | null
    udise?: NullableStringFieldUpdateOperationsInput | string | null
    management?: NullableStringFieldUpdateOperationsInput | string | null
    mandal?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanName?: NullableStringFieldUpdateOperationsInput | string | null
    chairmanMobile?: NullableStringFieldUpdateOperationsInput | string | null
    headPhone?: NullableStringFieldUpdateOperationsInput | string | null
    altPhone?: NullableStringFieldUpdateOperationsInput | string | null
    principalEmail?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorName?: NullableStringFieldUpdateOperationsInput | string | null
    coordinatorMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mouStatus?: NullableStringFieldUpdateOperationsInput | string | null
    mouStart?: NullableStringFieldUpdateOperationsInput | string | null
    mouEnd?: NullableStringFieldUpdateOperationsInput | string | null
    enrollmentEstimate?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    staffCount?: NullableStringFieldUpdateOperationsInput | string | null
    studentCount?: NullableStringFieldUpdateOperationsInput | string | null
    totalClasses?: NullableStringFieldUpdateOperationsInput | string | null
    feesCollected?: NullableStringFieldUpdateOperationsInput | string | null
    recentUpdates?: NullableStringFieldUpdateOperationsInput | string | null
    isProfileComplete?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    phone?: string | null
    subject?: string | null
    createdAt?: Date | string
  }

  export type ContactSubmissionUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    message: string
    phone?: string | null
    subject?: string | null
    createdAt?: Date | string
  }

  export type ContactSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionCreateManyInput = {
    id?: string
    name: string
    email: string
    message: string
    phone?: string | null
    subject?: string | null
    createdAt?: Date | string
  }

  export type ContactSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationSubmissionCreateInput = {
    id?: string
    name: string
    email: string
    amount: string
    pan?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type DonationSubmissionUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    amount: string
    pan?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type DonationSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationSubmissionCreateManyInput = {
    id?: string
    name: string
    email: string
    amount: string
    pan?: string | null
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
  }

  export type DonationSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DonationSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    pan?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobPostingCreateInput = {
    id?: string
    title: string
    role: string
    type: string
    location?: string | null
    description: string
    deadline?: string | null
    createdAt?: Date | string
    active?: boolean
  }

  export type JobPostingUncheckedCreateInput = {
    id?: string
    title: string
    role: string
    type: string
    location?: string | null
    description: string
    deadline?: string | null
    createdAt?: Date | string
    active?: boolean
  }

  export type JobPostingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobPostingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobPostingCreateManyInput = {
    id?: string
    title: string
    role: string
    type: string
    location?: string | null
    description: string
    deadline?: string | null
    createdAt?: Date | string
    active?: boolean
  }

  export type JobPostingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobPostingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    deadline?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type JobApplicationCreateInput = {
    id?: string
    jobId: string
    applicantName: string
    email: string
    phone: string
    resumeUrl: string
    coverLetter?: string | null
    createdAt?: Date | string
  }

  export type JobApplicationUncheckedCreateInput = {
    id?: string
    jobId: string
    applicantName: string
    email: string
    phone: string
    resumeUrl: string
    coverLetter?: string | null
    createdAt?: Date | string
  }

  export type JobApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationCreateManyInput = {
    id?: string
    jobId: string
    applicantName: string
    email: string
    phone: string
    resumeUrl: string
    coverLetter?: string | null
    createdAt?: Date | string
  }

  export type JobApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobId?: StringFieldUpdateOperationsInput | string
    applicantName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    resumeUrl?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentationCreateInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    category?: string | null
    createdAt?: Date | string
  }

  export type DocumentationUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    category?: string | null
    createdAt?: Date | string
  }

  export type DocumentationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentationCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    fileUrl: string
    category?: string | null
    createdAt?: Date | string
  }

  export type DocumentationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type PublicFormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type PublicFormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type PublicFormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CalendarEventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CalendarEventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CalendarEventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
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

  export type StudentAdmissionCountOrderByAggregateInput = {
    id?: SortOrder
    district?: SortOrder
    schoolName?: SortOrder
    studentName?: SortOrder
    fatherName?: SortOrder
    dob?: SortOrder
    className?: SortOrder
    aadharNo?: SortOrder
    address?: SortOrder
    phoneNo?: SortOrder
    studentSignature?: SortOrder
    principalSignature?: SortOrder
    seal?: SortOrder
    instiId?: SortOrder
    createdAt?: SortOrder
    udise?: SortOrder
    management?: SortOrder
    mandal?: SortOrder
    chairmanName?: SortOrder
    chairmanMobile?: SortOrder
    headName?: SortOrder
    headPhone?: SortOrder
    altPhone?: SortOrder
    principalEmail?: SortOrder
    instiEmail?: SortOrder
    coordinatorName?: SortOrder
    coordinatorMobile?: SortOrder
    mouStatus?: SortOrder
    mouStart?: SortOrder
    mouEnd?: SortOrder
    enrollmentEstimate?: SortOrder
    notes?: SortOrder
    staffCount?: SortOrder
    studentCount?: SortOrder
    totalClasses?: SortOrder
    feesCollected?: SortOrder
    recentUpdates?: SortOrder
  }

  export type StudentAdmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    district?: SortOrder
    schoolName?: SortOrder
    studentName?: SortOrder
    fatherName?: SortOrder
    dob?: SortOrder
    className?: SortOrder
    aadharNo?: SortOrder
    address?: SortOrder
    phoneNo?: SortOrder
    studentSignature?: SortOrder
    principalSignature?: SortOrder
    seal?: SortOrder
    instiId?: SortOrder
    createdAt?: SortOrder
    udise?: SortOrder
    management?: SortOrder
    mandal?: SortOrder
    chairmanName?: SortOrder
    chairmanMobile?: SortOrder
    headName?: SortOrder
    headPhone?: SortOrder
    altPhone?: SortOrder
    principalEmail?: SortOrder
    instiEmail?: SortOrder
    coordinatorName?: SortOrder
    coordinatorMobile?: SortOrder
    mouStatus?: SortOrder
    mouStart?: SortOrder
    mouEnd?: SortOrder
    enrollmentEstimate?: SortOrder
    notes?: SortOrder
    staffCount?: SortOrder
    studentCount?: SortOrder
    totalClasses?: SortOrder
    feesCollected?: SortOrder
    recentUpdates?: SortOrder
  }

  export type StudentAdmissionMinOrderByAggregateInput = {
    id?: SortOrder
    district?: SortOrder
    schoolName?: SortOrder
    studentName?: SortOrder
    fatherName?: SortOrder
    dob?: SortOrder
    className?: SortOrder
    aadharNo?: SortOrder
    address?: SortOrder
    phoneNo?: SortOrder
    studentSignature?: SortOrder
    principalSignature?: SortOrder
    seal?: SortOrder
    instiId?: SortOrder
    createdAt?: SortOrder
    udise?: SortOrder
    management?: SortOrder
    mandal?: SortOrder
    chairmanName?: SortOrder
    chairmanMobile?: SortOrder
    headName?: SortOrder
    headPhone?: SortOrder
    altPhone?: SortOrder
    principalEmail?: SortOrder
    instiEmail?: SortOrder
    coordinatorName?: SortOrder
    coordinatorMobile?: SortOrder
    mouStatus?: SortOrder
    mouStart?: SortOrder
    mouEnd?: SortOrder
    enrollmentEstimate?: SortOrder
    notes?: SortOrder
    staffCount?: SortOrder
    studentCount?: SortOrder
    totalClasses?: SortOrder
    feesCollected?: SortOrder
    recentUpdates?: SortOrder
  }

  export type TraiRegisterCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    fullName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TraiRegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    fullName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type TraiRegisterMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    fullName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type InstiRegisterCountOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    instiName?: SortOrder
    instiType?: SortOrder
    headName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    trainerId?: SortOrder
    udise?: SortOrder
    management?: SortOrder
    mandal?: SortOrder
    address?: SortOrder
    chairmanName?: SortOrder
    chairmanMobile?: SortOrder
    headPhone?: SortOrder
    altPhone?: SortOrder
    principalEmail?: SortOrder
    coordinatorName?: SortOrder
    coordinatorMobile?: SortOrder
    mouStatus?: SortOrder
    mouStart?: SortOrder
    mouEnd?: SortOrder
    enrollmentEstimate?: SortOrder
    notes?: SortOrder
    staffCount?: SortOrder
    studentCount?: SortOrder
    totalClasses?: SortOrder
    feesCollected?: SortOrder
    recentUpdates?: SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
  }

  export type InstiRegisterMaxOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    instiName?: SortOrder
    instiType?: SortOrder
    headName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    trainerId?: SortOrder
    udise?: SortOrder
    management?: SortOrder
    mandal?: SortOrder
    address?: SortOrder
    chairmanName?: SortOrder
    chairmanMobile?: SortOrder
    headPhone?: SortOrder
    altPhone?: SortOrder
    principalEmail?: SortOrder
    coordinatorName?: SortOrder
    coordinatorMobile?: SortOrder
    mouStatus?: SortOrder
    mouStart?: SortOrder
    mouEnd?: SortOrder
    enrollmentEstimate?: SortOrder
    notes?: SortOrder
    staffCount?: SortOrder
    studentCount?: SortOrder
    totalClasses?: SortOrder
    feesCollected?: SortOrder
    recentUpdates?: SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
  }

  export type InstiRegisterMinOrderByAggregateInput = {
    id?: SortOrder
    uniqueId?: SortOrder
    instiName?: SortOrder
    instiType?: SortOrder
    headName?: SortOrder
    phoneNo?: SortOrder
    email?: SortOrder
    district?: SortOrder
    password?: SortOrder
    status?: SortOrder
    trainerId?: SortOrder
    udise?: SortOrder
    management?: SortOrder
    mandal?: SortOrder
    address?: SortOrder
    chairmanName?: SortOrder
    chairmanMobile?: SortOrder
    headPhone?: SortOrder
    altPhone?: SortOrder
    principalEmail?: SortOrder
    coordinatorName?: SortOrder
    coordinatorMobile?: SortOrder
    mouStatus?: SortOrder
    mouStart?: SortOrder
    mouEnd?: SortOrder
    enrollmentEstimate?: SortOrder
    notes?: SortOrder
    staffCount?: SortOrder
    studentCount?: SortOrder
    totalClasses?: SortOrder
    feesCollected?: SortOrder
    recentUpdates?: SortOrder
    isProfileComplete?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
  }

  export type ContactSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    message?: SortOrder
    phone?: SortOrder
    subject?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    pan?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    pan?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type DonationSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    amount?: SortOrder
    pan?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type JobPostingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    type?: SortOrder
    location?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type JobPostingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    type?: SortOrder
    location?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type JobPostingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    role?: SortOrder
    type?: SortOrder
    location?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type JobApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
  }

  export type JobApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
  }

  export type JobApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    jobId?: SortOrder
    applicantName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    resumeUrl?: SortOrder
    coverLetter?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type DocumentationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    fileUrl?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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