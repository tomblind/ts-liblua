//MIT License
//
//Copyright (c) 2019 Tom Blind
//
//Permission is hereby granted, free of charge, to any person obtaining a copy
//of this software and associated documentation files (the "Software"), to deal
//in the Software without restriction, including without limitation the rights
//to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//copies of the Software, and to permit persons to whom the Software is
//furnished to do so, subject to the following conditions:
//
//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.
//
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//SOFTWARE.

declare type LuaTable<T> = T extends object ? (T extends Function ? never : T) : never;
declare interface LuaThread { readonly ____luaThread: never; }
declare interface LuaUserData { readonly ____luaUserData: never; }
declare interface LuaLightUserData { readonly ____luaLightUserData: never; }

/**
 * Calls `error` if the value of its argument `v` is false (i.e., nil or false); otherwise, returns all its arguments.
 *   In case of error, `message` is the error object; when absent, it defaults to "`assertion failed!`"
*/
/** @tupleReturn */
declare function assert<V extends [unknown, ...unknown[]]>(
    this: void,
    ...v: V
): { [I in keyof V]: I extends "0" ? Exclude<V[I], undefined | null | false> : V[I] };

/**
 * This function is a generic interface to the garbage collector. It performs different functions according to its first
 *   argument, `opt`:
 *
 * - "`collect`": performs a full garbage-collection cycle. This is the default option.
 * - "`stop`": stops automatic execution of the garbage collector. The collector will run only when explicitly invoked,
 *   until a call to restart it.
 * - "`restart`": restarts automatic execution of the garbage collector.
 * - "`count`": returns the total memory in use by Lua in Kbytes. The value has a fractional part, so that it multiplied
 *   by 1024 gives the exact number of bytes in use by Lua (except for overflows).
 * - "`step`": performs a garbage-collection step. The step "size" is controlled by `arg`. With a zero value, the
 *   collector will perform one basic (indivisible) step. For non-zero values, the collector will perform as if that
 *   amount of memory (in KBytes) had been allocated by Lua. Returns true if the step finished a collection cycle.
 * - "`setpause`": sets `arg` as the new value for the pause of the collector (see 2.5). Returns the previous value for
 *   pause.
 * - "`setstepmul`": sets `arg` as the new value for the step multiplier of the collector (see 2.5). Returns the
 *   previous value for step.
 * - "`isrunning`": returns a boolean that tells whether the collector is running (i.e., not stopped).
*/
declare function collectgarbage(this: void, opt?: "collect" | "stop" | "restart"): void;

/**
 * This function is a generic interface to the garbage collector. It performs different functions according to its first
 *   argument, `opt`:
 *
 * - "`collect`": performs a full garbage-collection cycle. This is the default option.
 * - "`stop`": stops automatic execution of the garbage collector. The collector will run only when explicitly invoked,
 *   until a call to restart it.
 * - "`restart`": restarts automatic execution of the garbage collector.
 * - "`count`": returns the total memory in use by Lua in Kbytes. The value has a fractional part, so that it multiplied
 *   by 1024 gives the exact number of bytes in use by Lua (except for overflows).
 * - "`step`": performs a garbage-collection step. The step "size" is controlled by `arg`. With a zero value, the
 *   collector will perform one basic (indivisible) step. For non-zero values, the collector will perform as if that
 *   amount of memory (in KBytes) had been allocated by Lua. Returns true if the step finished a collection cycle.
 * - "`setpause`": sets `arg` as the new value for the pause of the collector (see 2.5). Returns the previous value for
 *   pause.
 * - "`setstepmul`": sets `arg` as the new value for the step multiplier of the collector (see 2.5). Returns the
 *   previous value for step.
 * - "`isrunning`": returns a boolean that tells whether the collector is running (i.e., not stopped).
*/
declare function collectgarbage(this: void, opt: "count"): number;

/**
 * This function is a generic interface to the garbage collector. It performs different functions according to its first
 *   argument, `opt`:
 *
 * - "`collect`": performs a full garbage-collection cycle. This is the default option.
 * - "`stop`": stops automatic execution of the garbage collector. The collector will run only when explicitly invoked,
 *   until a call to restart it.
 * - "`restart`": restarts automatic execution of the garbage collector.
 * - "`count`": returns the total memory in use by Lua in Kbytes. The value has a fractional part, so that it multiplied
 *   by 1024 gives the exact number of bytes in use by Lua (except for overflows).
 * - "`step`": performs a garbage-collection step. The step "size" is controlled by `arg`. With a zero value, the
 *   collector will perform one basic (indivisible) step. For non-zero values, the collector will perform as if that
 *   amount of memory (in KBytes) had been allocated by Lua. Returns true if the step finished a collection cycle.
 * - "`setpause`": sets `arg` as the new value for the pause of the collector (see 2.5). Returns the previous value for
 *   pause.
 * - "`setstepmul`": sets `arg` as the new value for the step multiplier of the collector (see 2.5). Returns the
 *   previous value for step.
 * - "`isrunning`": returns a boolean that tells whether the collector is running (i.e., not stopped).
*/
declare function collectgarbage(this: void, opt: "step", arg: number): boolean;

/**
 * This function is a generic interface to the garbage collector. It performs different functions according to its first
 *   argument, `opt`:
 *
 * - "`collect`": performs a full garbage-collection cycle. This is the default option.
 * - "`stop`": stops automatic execution of the garbage collector. The collector will run only when explicitly invoked,
 *   until a call to restart it.
 * - "`restart`": restarts automatic execution of the garbage collector.
 * - "`count`": returns the total memory in use by Lua in Kbytes. The value has a fractional part, so that it multiplied
 *   by 1024 gives the exact number of bytes in use by Lua (except for overflows).
 * - "`step`": performs a garbage-collection step. The step "size" is controlled by `arg`. With a zero value, the
 *   collector will perform one basic (indivisible) step. For non-zero values, the collector will perform as if that
 *   amount of memory (in KBytes) had been allocated by Lua. Returns true if the step finished a collection cycle.
 * - "`setpause`": sets `arg` as the new value for the pause of the collector (see 2.5). Returns the previous value for
 *   pause.
 * - "`setstepmul`": sets `arg` as the new value for the step multiplier of the collector (see 2.5). Returns the
 *   previous value for step.
 * - "`isrunning`": returns a boolean that tells whether the collector is running (i.e., not stopped).
*/
declare function collectgarbage(this: void, opt: "setpause" | "setstepmul", arg: number): number;

/**
 * This function is a generic interface to the garbage collector. It performs different functions according to its first
 *   argument, `opt`:
 *
 * - "`collect`": performs a full garbage-collection cycle. This is the default option.
 * - "`stop`": stops automatic execution of the garbage collector. The collector will run only when explicitly invoked,
 *   until a call to restart it.
 * - "`restart`": restarts automatic execution of the garbage collector.
 * - "`count`": returns the total memory in use by Lua in Kbytes. The value has a fractional part, so that it multiplied
 *   by 1024 gives the exact number of bytes in use by Lua (except for overflows).
 * - "`step`": performs a garbage-collection step. The step "size" is controlled by `arg`. With a zero value, the
 *   collector will perform one basic (indivisible) step. For non-zero values, the collector will perform as if that
 *   amount of memory (in KBytes) had been allocated by Lua. Returns true if the step finished a collection cycle.
 * - "`setpause`": sets `arg` as the new value for the pause of the collector (see 2.5). Returns the previous value for
 *   pause.
 * - "`setstepmul`": sets `arg` as the new value for the step multiplier of the collector (see 2.5). Returns the
 *   previous value for step.
 * - "`isrunning`": returns a boolean that tells whether the collector is running (i.e., not stopped).
*/
declare function collectgarbage(this: void, opt: "isrunning"): boolean;

/**
 * Opens the named file and executes its contents as a Lua chunk. When called without arguments, `dofile` executes the
 *   contents of the standard input (`stdin`). Returns all values returned by the chunk. In case of errors, `dofile`
 *   propagates the error to its caller (that is, `dofile` does not run in protected mode).
*/
/** @tupleReturn */
declare function dofile(this: void, filename?: string): unknown[];

/**
 * Terminates the last protected function called and returns `message` as the error object. Function `error` never
 *   returns. Usually, `error` adds some information about the error position at the beginning of the message, if the
 *   message is a string. The `level` argument specifies how to get the error position. With level 1 (the default), the
 *   error position is where the `error` function was called. Level 2 points the error to where the function that called
 *   `error` was called; and so on. Passing a level 0 avoids the addition of error position information to the message.
*/
declare function error(this: void, message: string, level?: number): never;

/**
 * A global variable (not a function) that holds the global environment (see 2.2). Lua itself does not use this
 *   variable; changing its value does not affect any environment, nor vice versa.
*/
declare const _G: Record<string | number | symbol, unknown>;

/**
 * If `object` does not have a metatable, returns nil. Otherwise, if the object's metatable has a `__metatable` field,
 *   returns the associated value. Otherwise, returns the metatable of the given object.
*/
declare function getmetatable(this: void, object: unknown): unknown;

/** @luaIterator @tupleReturn */
declare interface LuaIpairsIterable<T> extends Array<[number, T]> {}

/**
 * Returns three values (an iterator function, the table `t`, and 0) so that the construction
 *
 *      for i,v in ipairs(t) do body end
 *
 * will iterate over the key-value pairs (`1,t[1]`), (`2,t[2]`), ..., up to the first nil value.
*/
declare function ipairs<T>(this: void, t: T[]): LuaIpairsIterable<T>;

/** @tupleReturn */
declare interface LuaLoadFunction { (this: void): unknown[]; }

/**
 * Loads a chunk.
 *
 * If `chunk` is a string, the chunk is this string. If `chunk` is a function, `load` calls it repeatedly to get the
 *   chunk pieces. Each call to `chunk` must return a string that concatenates with previous results. A return of an
 *   empty string, nil, or no value signals the end of the chunk.
 *
 * If there are no syntactic errors, returns the compiled chunk as a function; otherwise, returns nil plus the error
 *   message.
 *
 * If the resulting function has upvalues, the first upvalue is set to the value of `env`, if that parameter is given,
 *   or to the value of the global environment. Other upvalues are initialized with nil. (When you load a main chunk,
 *   the resulting function will always have exactly one upvalue, the `_ENV` variable (see 2.2). However, when you load
 *   a binary chunk created from a function (see `string.dump`), the resulting function can have an arbitrary number of
 *   upvalues.) All upvalues are fresh, that is, they are not shared with any other function.
 *
 * `chunkname` is used as the name of the chunk for error messages and debug information (see 4.9). When absent, it
 *   defaults to `chunk`, if `chunk` is a string, or to "`=(load)`" otherwise.
 *
 * The string `mode` controls whether the chunk can be text or binary (that is, a precompiled chunk). It may be the
 *   string "`b`" (only binary chunks), "`t`" (only text chunks), or "`bt`" (both binary and text). The default is
 *   "`bt`".
 *
 * Lua does not check the consistency of binary chunks. Maliciously crafted binary chunks can crash the interpreter.
*/
/** @tupleReturn */
declare function load(
    this: void,
    chunk: string | { (this: void): string | undefined; },
    chunkname?: string,
    mode?: "b" | "t" | "bt",
    env?: unknown
): [LuaLoadFunction, undefined] | [undefined, string];

/**
 * Similar to `load`, but gets the chunk from file `filename` or from the standard input, if no file name is given.
*/
/** @tupleReturn */
declare function loadfile(
    this: void,
    filename?: string,
    mode?: "b" | "t" | "bt",
    env?: unknown
): [LuaLoadFunction, undefined] | [undefined, string];

/**
 * Allows a program to traverse all fields of a table. Its first argument is a table and its second argument is an index
 *   in this table. `next` returns the next index of the table and its associated value. When called with nil as its
 *   second argument, `next` returns an initial index and its associated value. When called with the last index, or with
 *   nil in an empty table, `next` returns nil. If the second argument is absent, then it is interpreted as nil. In
 *   particular, you can use `next(t)` to check whether a table is empty.
 *
 * The order in which the indices are enumerated is not specified, even for numeric indices. (To traverse a table in
 *   numerical order, use a numerical for.)
 *
 * The behavior of `next` is undefined if, during the traversal, you assign any value to a non-existent field in the
 *   table. You may however modify existing fields. In particular, you may clear existing fields.
*/
/** @tupleReturn */
declare function next<T>(this: void, table: LuaTable<T>, index?: keyof T): [keyof T, T[keyof T]];

/** @luaIterator @tupleReturn */
declare interface LuaPairsIterable<T> extends Array<[keyof T, T[keyof T]]> {}

/**
 * If `t` has a metamethod `__pairs`, calls it with `t` as argument and returns the first three results from the call.
 *
 * Otherwise, returns three values: the `next` function, the table `t`, and nil, so that the construction
 *
 *      for k,v in pairs(t) do body end
 *
 * will iterate over all key-value pairs of table `t`.
 *
 * See function `next` for the caveats of modifying the table during its traversal.
*/
declare function pairs<T>(this: void, t: LuaTable<T>): LuaPairsIterable<T>;

/**
 * Calls function `f` with the given arguments in protected mode. This means that any error inside `f` is not
 *   propagated; instead, `pcall` catches the error and returns a status code. Its first result is the status code (a
 *   boolean), which is true if the call succeeds without errors. In such case, `pcall` also returns all results from
 *   the call, after this first result. In case of any error, `pcall` returns false plus the error message.
*/
/** @tupleReturn */
declare function pcall<T, A extends unknown[], R>(
    this: void,
    f: { (this: T, ...args: A): R; },
    self: T,
    ...args: A
): [true, R] | [false, string];

/**
 * Calls function `f` with the given arguments in protected mode. This means that any error inside `f` is not
 *   propagated; instead, `pcall` catches the error and returns a status code. Its first result is the status code (a
 *   boolean), which is true if the call succeeds without errors. In such case, `pcall` also returns all results from
 *   the call, after this first result. In case of any error, `pcall` returns false plus the error message.
*/
/** @tupleReturn */
declare function pcall<A extends unknown[], R>(
    this: void,
    f: { (this: void, ...args: A): R; },
    ...args: A
): [true, R] | [false, string];

/**
 * Receives any number of arguments and prints their values to `stdout`, using the `tostring` function to convert each
 *   argument to a string. `print` is not intended for formatted output, but only as a quick way to show a value, for
 *   instance for debugging. For complete control over the output, use `string.format` and `io.write`.
*/
declare function print(this: void, ...args: unknown[]): void;

/**
 * Checks whether `v1` is equal to `v2`, without invoking the `__eq` metamethod. Returns a boolean.
*/
declare function rawequal(this: void, v1: unknown, v2: unknown): boolean;

/**
 * Gets the real value of `table[index]`, without invoking the `__index` metamethod. `table` must be a table; `index`
 *   may be any value.
*/
declare function rawget<T, I extends keyof T>(this: void, table: LuaTable<T>, index: I): T[I];

/**
 * Returns the length of the object `v`, which must be a table or a string, without invoking the `__len` metamethod.
 *   Returns an integer.
*/
declare function rawlen<T>(this: void, v: LuaTable<T> | string): number;

/**
 * Sets the real value of `table[index]` to `value`, without invoking the `__newindex` metamethod. `table` must be a
 *   table, `index` any value different from nil and NaN, and `value` any Lua value. This function returns `table`.
*/
declare function rawset<T, I extends keyof T>(this: void, table: LuaTable<T>, index: I, value: T[I]): void;

/**
 * If `index` is a number, returns all arguments after argument number `index`; a negative number indexes from the end
 *   (-1 is the last argument). Otherwise, `index` must be the string `"#"`, and `select` returns the total number of
 *   extra arguments it received.
*/
/** @tupleReturn */
declare function select<A extends unknown[]>(this: void, index: number, ...args: A): A[number][];

/**
 * If `index` is a number, returns all arguments after argument number `index`; a negative number indexes from the end
 *   (-1 is the last argument). Otherwise, `index` must be the string `"#"`, and `select` returns the total number of
 *   extra arguments it received.
*/
declare function select(this: void, index: "#", ...args: unknown[]): number;

declare interface LuaNewIndexMetaMethod<K extends string, V> {
    __newindex(this: unknown, key: K, value: V): void;
}

declare interface LuaIndexMetaMethod<K extends string, V> {
    __index(this: unknown, key: K): V;
}

declare interface LuaIndexMetaTable<T> {
    __index: T;
}

type LuaIndexMeta<M> = M extends LuaIndexMetaMethod<infer K, infer V>
    ? { [I in K]: V }
    : M extends LuaIndexMetaTable<infer T> ? T : {};

type LuaMetaExtractReadonly<I, E> = {
    +readonly [K in Exclude<keyof I, E>]: I[K]
};

type LuaMeta<M> = M extends LuaNewIndexMetaMethod<infer K, infer V>
    ? { [I in K]: V } & LuaMetaExtractReadonly<LuaIndexMeta<M>, K>
    : LuaIndexMeta<M>;

/**
 * Sets the metatable for the given table. (To change the metatable of other types from Lua code, you must use the debug
 *   library (6.10).) If `metatable` is nil, removes the metatable of the given table. If the original metatable has a
 *   `__metatable` field, raises an error.
 *
 * This function returns `table`.
*/
declare function setmetatable<T, M>(this: void, table: LuaTable<T>, metatable?: LuaTable<M>): T & LuaMeta<M>;

/**
 * When called with no `base`, `tonumber` tries to convert its argument to a number. If the argument is already a number
 *   or a string convertible to a number, then `tonumber` returns this number; otherwise, it returns nil.
 *
 * The conversion of strings can result in integers or floats, according to the lexical conventions of Lua (see 3.1).
 *   (The string may have leading and trailing spaces and a sign.)
 *
 * When called with `base`, then `e` must be a string to be interpreted as an integer numeral in that base. The base may
 *   be any integer between 2 and 36, inclusive. In bases above 10, the letter '`A`' (in either upper or lower case)
 *   represents 10, '`B`' represents 11, and so forth, with '`Z`' representing 35. If the string `e` is not a valid
 *   numeral in the given base, the function returns nil.
*/
declare function tonumber(this: void, e: unknown): number | undefined;

/**
 * When called with no `base`, `tonumber` tries to convert its argument to a number. If the argument is already a number
 *   or a string convertible to a number, then `tonumber` returns this number; otherwise, it returns nil.
 *
 * The conversion of strings can result in integers or floats, according to the lexical conventions of Lua (see 3.1).
 *   (The string may have leading and trailing spaces and a sign.)
 *
 * When called with `base`, then `e` must be a string to be interpreted as an integer numeral in that base. The base may
 *   be any integer between 2 and 36, inclusive. In bases above 10, the letter '`A`' (in either upper or lower case)
 *   represents 10, '`B`' represents 11, and so forth, with '`Z`' representing 35. If the string `e` is not a valid
 *   numeral in the given base, the function returns nil.
*/
declare function tonumber(this: void, e: string, base: number): number | undefined;

/**
 * Receives a value of any type and converts it to a string in a human-readable format. (For complete control of how
 *   numbers are converted, use `string.format`.) If the metatable of `v` has a `__tostring` field, then `tostring`
 *   calls the corresponding value with `v` as argument, and uses the result of the call as its result.
*/
declare function tostring(this: void, v: unknown): string | undefined;

/**
 * Returns the type of its only argument, coded as a string. The possible results of this function are "`nil`" (a
 *   string, not the value nil), "`number`", "`string`", "`boolean`", "`table`", "`function`", "`thread`", and
 *   "`userdata`".
*/
declare function type(
    this: void,
    v: unknown
): "nil" | "number" | "string" | "table" | "function" | "thread" | "userdata";

/**
 * A global variable (not a function) that holds a string containing the running Lua version. The current value of this
 *   variable is "`Lua 5.3`".
*/
declare const _VERSION: "Lua 5.3";

/**
 * This function is similar to `pcall`, except that it sets a new message handler `msgh`.
*/
/** @tupleReturn */
declare function xpcall<T, A extends unknown[], R>(
    this: void,
    f: { (this: T, ...args: A): R; },
    msgh: { (this: void, msg: string): void; },
    self: T,
    ...args: A
): [true, R] | [false, string];

/**
 * This function is similar to `pcall`, except that it sets a new message handler `msgh`.
*/
/** @tupleReturn */
declare function xpcall<A extends unknown[], R>(
    this: void,
    f: { (this: void, ...args: A): R; },
    msgh: { (this: void, msg: string): void; },
    ...args: A
): [true, R] | [false, string];

declare namespace coroutine {
    /**
     * Creates a new coroutine, with body `f`. `f` must be a function. Returns this new coroutine, an object with type
     *   `"thread"`.
    */
    export function create(this: void, f: Function): LuaThread;

    /**
     * Returns true when the running coroutine can yield.
     *
     * A running coroutine is yieldable if it is not the main thread and it is not inside a non-yieldable C function.
    */
    export function isyieldable(this: void): boolean;

    /**
     * Starts or continues the execution of coroutine `co`. The first time you resume a coroutine, it starts running its
     *   body. The values `val1`, ... are passed as the arguments to the body function. If the coroutine has yielded,
     *   `resume` restarts it; the values `val1`, ... are passed as the results from the yield.
     *
     * If the coroutine runs without any errors, `resume` returns true plus any values passed to `yield` (when the
     *   coroutine yields) or any values returned by the body function (when the coroutine terminates). If there is any
     *   error, `resume` returns false plus the error message.
    */
    /** @tupleReturn */
    export function resume(this: void, co: LuaThread, ...args: unknown[]): [true, ...unknown[]] | [false, string];

    /**
     * Returns the running coroutine plus a boolean, true when the running coroutine is the main one.
    */
    /** @tupleReturn */
    export function running(this: void): [LuaThread, boolean];

    /**
     * Returns the status of coroutine `co`, as a string: `"running"`, if the coroutine is running (that is, it called
     *   `status`); `"suspended"`, if the coroutine is suspended in a call to `yield`, or if it has not started running
     *   yet; `"normal"` if the coroutine is active but not running (that is, it has resumed another coroutine); and
     *   `"dead"` if the coroutine has finished its body function, or if it has stopped with an error.
    */
    export function status(this: void, co: LuaThread): "running" | "suspended" | "normal" | "dead";

    /** @tupleReturn */
    export interface WrappedFunction { (this: void, ...args: unknown[]): unknown[]; }

    /**
     * Creates a new coroutine, with body `f`. `f` must be a function. Returns a function that resumes the coroutine
     *   each time it is called. Any arguments passed to the function behave as the extra arguments to `resume`. Returns
     *   the same values returned by `resume`, except the first boolean. In case of error, propagates the error.
    */
    export function wrap(this: void, f: Function): WrappedFunction;

    /**
     * Suspends the execution of the calling coroutine. Any arguments to `yield` are passed as extra results to
     *   `resume`.
    */
    export function yield(this: void, ...args: unknown[]): unknown;
}

/**
 * Loads the given module. The function starts by looking into the `package.loaded` table to determine whether `modname`
 *   is already loaded. If it is, then `require` returns the value stored at `package.loaded[modname]`. Otherwise, it
 *   tries to find a loader for the module.
 *
 * To find a loader, `require` is guided by the `package.searchers` sequence. By changing this sequence, we can change
 *   how `require` looks for a module. The following explanation is based on the default configuration for
 *   `package.searchers`.
 *
 * First `require` queries `package.preload[modname]`. If it has a value, this value (which must be a function) is the
 *   loader. Otherwise `require` searches for a Lua loader using the path stored in `package.path`. If that also fails,
 *   it searches for a C loader using the path stored in `package.cpath`. If that also fails, it tries an all-in-one
 *   loader (see `package.searchers`).
 *
 * Once a loader is found, `require` calls the loader with two arguments: `modname` and an extra value dependent on how
 *   it got the loader. (If the loader came from a file, this extra value is the file name.) If the loader returns any
 *   non-nil value, `require` assigns the returned value to `package.loaded[modname]`. If the loader does not return a
 *   non-nil value and has not assigned any value to `package.loaded[modname]`, then `require` assigns true to this
 *   entry. In any case, `require` returns the final value of `package.loaded[modname]`.
 *
 * If there is any error loading or running the module, or if it cannot find any loader for the module, then `require`
 *   raises an error.
*/
declare function require(this: void, modname: string): unknown;

declare namespace package {
    /**
     * A string describing some compile-time configurations for packages. This string is a sequence of lines:
     *
     * - The first line is the directory separator string. Default is '`\`' for Windows and '`/`' for all other systems.
     * - The second line is the character that separates templates in a path. Default is '`;`'.
     * - The third line is the string that marks the substitution points in a template. Default is '`?`'.
     * - The fourth line is a string that, in a path in Windows, is replaced by the executable's directory. Default is
     *   '`!`'.
     * - The fifth line is a mark to ignore all text after it when building the `luaopen_` function name. Default is
     *   '`-`'.
    */
    export let config: string;

    /**
     * The path used by `require` to search for a C loader.
     *
     * Lua initializes the C path `package.cpath` in the same way it initializes the Lua path `package.path`, using the
     *   environment variable `LUA_CPATH_5_3`, or the environment variable `LUA_CPATH`, or a default path defined in
     *   `luaconf.h`.
    */
    export let cpath: string;

    /**
     * A table used by `require` to control which modules are already loaded. When you require a module `modname` and
     *   `package.loaded[modname]` is not false, `require` simply returns the value stored there.
     *
     * This variable is only a reference to the real table; assignments to this variable do not change the table used by
     *   `require`.
    */
    export const loaded: Record<string, unknown>;

    /**
     * Dynamically links the host program with the C library `libname`.
     *
     * If `funcname` is "`*`", then it only links with the library, making the symbols exported by the library available
     *   to other dynamically linked libraries. Otherwise, it looks for a function `funcname` inside the library and
     *   returns this function as a C function. So, `funcname` must follow the `lua_CFunction` prototype (see
     *   `lua_CFunction`).
     *
     * This is a low-level function. It completely bypasses the package and module system. Unlike `require`, it does not
     *   perform any path searching and does not automatically adds extensions. `libname` must be the complete file name
     *   of the C library, including if necessary a path and an extension. `funcname` must be the exact name exported by
     *   the C library (which may depend on the C compiler and linker used).
     *
     * This function is not supported by Standard C. As such, it is only available on some platforms (Windows, Linux,
     *   Mac OS X, Solaris, BSD, plus other Unix systems that support the `dlfcn` standard).
    */
    export function loadlib(this: void, libname: string, funcname: "*"): void;

    /**
     * Dynamically links the host program with the C library `libname`.
     *
     * If `funcname` is "`*`", then it only links with the library, making the symbols exported by the library available
     *   to other dynamically linked libraries. Otherwise, it looks for a function `funcname` inside the library and
     *   returns this function as a C function. So, `funcname` must follow the `lua_CFunction` prototype (see
     *   `lua_CFunction`).
     *
     * This is a low-level function. It completely bypasses the package and module system. Unlike `require`, it does not
     *   perform any path searching and does not automatically adds extensions. `libname` must be the complete file name
     *   of the C library, including if necessary a path and an extension. `funcname` must be the exact name exported by
     *   the C library (which may depend on the C compiler and linker used).
     *
     * This function is not supported by Standard C. As such, it is only available on some platforms (Windows, Linux,
     *   Mac OS X, Solaris, BSD, plus other Unix systems that support the `dlfcn` standard).
    */
    export function loadlib(this: void, libname: string, funcname: string): Function;

    /**
     * The path used by `require` to search for a Lua loader.
     *
     * At start-up, Lua initializes this variable with the value of the environment variable `LUA_PATH_5_3` or the
     *   environment variable `LUA_PATH` or with a default path defined in `luaconf.h`, if those environment variables
     *   are not defined. Any "`;;`" in the value of the environment variable is replaced by the default path.
    */
    export let path: string;

    export interface Loader { (this: void, modname: string, arg?: unknown): unknown; }

    /**
     * A table to store loaders for specific modules (see `require`).
     *
     * This variable is only a reference to the real table; assignments to this variable do not change the table used by
     *   `require`.
    */
    export const preload: Record<string, Loader>;

    /** @tupleReturn */
    export interface Searcher { (this: void, modname: string): [Loader, unknown?] | [string | undefined]; }

    /**
     * A table used by `require` to control how to load modules.
     *
     * Each entry in this table is a searcher function. When looking for a module, `require` calls each of these
     *   searchers in ascending order, with the module name (the argument given to `require`) as its sole parameter. The
     *   function can return another function (the module loader) plus an extra value that will be passed to that
     *   loader, or a string explaining why it did not find that module (or nil if it has nothing to say).
     *
     * Lua initializes this table with four searcher functions.
     *
     * The first searcher simply looks for a loader in the `package.preload` table.
     *
     * The second searcher looks for a loader as a Lua library, using the path stored at `package.path`. The search is
     *   done as described in function `package.searchpath`.
     *
     * The third searcher looks for a loader as a C library, using the path given by the variable `package.cpath`.
     *   Again, the search is done as described in function `package.searchpath`. For instance, if the C path is the
     *   string
     *
     *      "./?.so;./?.dll;/usr/local/?/init.so"
     *
     * the searcher for module `foo` will try to open the files `./foo.so`, `./foo.dll`, and `/usr/local/foo/init.so`,
     *   in that order. Once it finds a C library, this searcher first uses a dynamic link facility to link the
     *   application with the library. Then it tries to find a C function inside the library to be used as the loader.
     *   The name of this C function is the string "`luaopen_`" concatenated with a copy of the module name where each
     *   dot is replaced by an underscore. Moreover, if the module name has a hyphen, its suffix after (and including)
     *   the first hyphen is removed. For instance, if the module name is `a.b.c-v2.1`, the function name will be
     *   `luaopen_a_b_c`.
     *
     * The fourth searcher tries an all-in-one loader. It searches the C path for a library for the root name of the
     *   given module. For instance, when requiring `a.b.c`, it will search for a C library for `a`. If found, it looks
     *   into it for an open function for the submodule; in our example, that would be `luaopen_a_b_c`. With this
     *   facility, a package can pack several C submodules into one single library, with each submodule keeping its
     *   original open function.
     *
     * All searchers except the first one (preload) return as the extra value the file name where the module was found,
     *   as returned by `package.searchpath`. The first searcher returns no extra value.
    */
    export const searchers: Searcher[];

    /**
     * Searches for the given `name` in the given `path`.
     *
     * A path is a string containing a sequence of templates separated by semicolons. For each template, the function
     *   replaces each interrogation mark (if any) in the template with a copy of `name` wherein all occurrences of
     *   `sep` (a dot, by default) were replaced by `rep` (the system's directory separator, by default), and then tries
     *   to open the resulting file name.
     *
     * For instance, if the path is the string
     *
     *      "./?.lua;./?.lc;/usr/local/?/init.lua"
     *
     * the search for the name `foo.a` will try to open the files `./foo/a.lua`, `./foo/a.lc`, and
     *   `/usr/local/foo/a/init.lua`, in that order.
     *
     * Returns the resulting name of the first file that it can open in read mode (after closing the file), or nil plus
     *   an error message if none succeeds. (This error message lists all file names it tried to open.)
    */
    export function searchpath(
        this: void,
        name: string,
        path: string,
        sep?: string,
        rep?: string
    ): [string] | [undefined, string];
}

declare namespace string {
    /**
     * Returns the internal numeric codes of the characters `s[i]`, `s[i+1]`, ..., `s[j]`. The default value for `i` is
     *   1; the default value for `j` is `i`. These indices are corrected following the same rules of function
     *   `string.sub`. Numeric codes are not necessarily portable across platforms.
    */
    /** @tupleReturn */
    export function byte(this: void, s: string, i?: string, j?: string): number[];

    /**
     * Receives zero or more integers. Returns a string with length equal to the number of arguments, in which each
     *   character has the internal numeric code equal to its corresponding argument. Numeric codes are not necessarily
     *   portable across platforms.
    */
    export function char(this: void, ...args: number[]): string;

    /**
     * Returns a string containing a binary representation (a binary chunk) of the given function, so that a later
     *   `load` on this string returns a copy of the function (but with new upvalues). If `strip` is a true value, the
     *   binary representation may not include all debug information about the function, to save space.
     *
     * Functions with upvalues have only their number of upvalues saved. When (re)loaded, those upvalues receive fresh
     *   instances containing nil. (You can use the debug library to serialize and reload the upvalues of a function in
     *   a way adequate to your needs.)
    */
    export function dump(this: void, function_: Function, strip?: boolean): string;

    /**
     * Looks for the first match of `pattern` (see 6.4.1) in the string `s`. If it finds a match, then `find` returns
     *   the indices of `s` where this occurrence starts and ends; otherwise, it returns nil. A third, optional numeric
     *   argument `init` specifies where to start the search; its default value is 1 and can be negative. A value of
     *   true as a fourth, optional argument `plain` turns off the pattern matching facilities, so the function does a
     *   plain "find substring" operation, with no characters in `pattern` being considered magic. Note that if `plain`
     *   is given, then `init` must be given as well.
     *
     * If the pattern has captures, then in a successful match the captured values are also returned, after the two
     *   indices.
    */
    /** @tupleReturn */
    export function find(
        this: void,
        s: string,
        pattern: string,
        init?: number,
        plain?: boolean
    ): [number, number, ...string[]] | [undefined];

    /**
     * Returns a formatted version of its variable number of arguments following the description given in its first
     *   argument (which must be a string). The format string follows the same rules as the ISO C function `sprintf`.
     *   The only differences are that the options/modifiers `*`, `h`, `L`, `l`, `n`, and `p` are not supported and that
     *   there is an extra option, `q`.
     *
     * The `q` option formats a string between double quotes, using escape sequences when necessary to ensure that it
     *   can safely be read back by the Lua interpreter. For instance, the call
     *
     *      string.format('%q', 'a string with "quotes" and \n new line')
     *
     * may produce the string:
     *
     *      "a string with \"quotes\" and \
     *       new line"
     *
     * Options `A`, `a`, `E`, `e`, `f`, `G`, and `g` all expect a number as argument. Options `c`, `d`, `i`, `o`, `u`,
     *   `X`, and `x` expect an integer. When Lua is compiled with a C89 compiler, options `A` and `a` (hexadecimal
     *   floats) do not support any modifier (flags, width, length).
     *
     * Option `s` expects a string; if its argument is not a string, it is converted to one following the same rules of
     *   `tostring`. If the option has any modifier (flags, width, length), the string argument should not contain
     *   embedded zeros.
    */
    export function format(this: void, formatstring: string, ...args: unknown[]): string;

    /** @luaIterator @tupleReturn */
    export interface GmatchIterable extends Array<string[]> {}

    /**
     * Returns an iterator function that, each time it is called, returns the next captures from `pattern` (see 6.4.1)
     *   over the string `s`. If `pattern` specifies no captures, then the whole match is produced in each call. As an
     *   example, the following loop will iterate over all the words from string `s`, printing one per line:
     *
     *      s = "hello world from Lua"
     *      for w in string.gmatch(s, "%a+") do
     *        print(w)
     *      end
     *
     * The next example collects all pairs `key=value` from the given string into a table:
     *
     *      t = {}
     *      s = "from=world, to=Lua"
     *      for k, v in string.gmatch(s, "(%w+)=(%w+)") do
     *        t[k] = v
     *      end
     *
     * For this function, a caret '`^`' at the start of a pattern does not work as an anchor, as this would prevent the
     *   iteration.
    */
    export function gmatch(this: void, s: string, pattern: string): string.GmatchIterable;

    /**
     * Returns a copy of `s` in which all (or the first `n`, if given) occurrences of the `pattern` (see 6.4.1) have
     *   been replaced by a replacement string specified by `repl`, which can be a string, a table, or a function.
     *   `gsub` also returns, as its second value, the total number of matches that occurred. The name `gsub` comes from
     *   Global SUBstitution. If `repl` is a string, then its value is used for replacement. The character `%` works as
     *   an escape character: any sequence in `repl` of the form `%d`, with d between 1 and 9, stands for the value of
     *   the d-th captured substring. The sequence `%0` stands for the whole match. The sequence `%%` stands for a
     *   single `%`.
     *
     * If `repl` is a table, then the table is queried for every match, using the first capture as the key.
     *
     * If `repl` is a function, then this function is called every time a match occurs, with all captured substrings
     *   passed as arguments, in order.
     *
     * In any case, if the pattern specifies no captures, then it behaves as if the whole pattern was inside a capture.
     *
     * If the value returned by the table query or by the function call is a string or a number, then it is used as the
     *   replacement string; otherwise, if it is false or nil, then there is no replacement (that is, the original match
     *   is kept in the string).
     *
     * Here are some examples:
     *
     *      x = string.gsub("hello world", "(%w+)", "%1 %1")
     *      -->; x="hello hello world world"
     *      
     *      x = string.gsub("hello world", "%w+", "%0 %0", 1)
     *      -->; x="hello hello world"
     *      
     *      x = string.gsub("hello world from Lua", "(%w+)%s*(%w+)", "%2 %1")
     *      -->; x="world hello Lua from"
     *      
     *      x = string.gsub("home = $HOME, user = $USER", "%$(%w+)", os.getenv)
     *      -->; x="home = /home/roberto, user = roberto"
     *      
     *      x = string.gsub("4+5 = $return 4+5$", "%$(.-)%$", function (s)
     *            return load(s)()
     *          end)
     *      -->; x="4+5 = 9"
     *      
     *      local t = {name="lua", version="5.3"}
     *      x = string.gsub("$name-$version.tar.gz", "%$(%w+)", t)
     *      -->; x="lua-5.3.tar.gz"
    */
    /** @tupleReturn */
    export function gsub(
        this: void,
        s: string,
        pattern: string,
        repl: string | Record<string, string | number> | { (this: void, ...args: string[]): string | number; },
        n?: number
    ): [string, number];

    /**
     * Receives a string and returns its length. The empty string `""` has length 0. Embedded zeros are counted, so
     *   `"a\000bc\000"` has length 5.
    */
    export function len(this: void, s: string): number;

    /**
     * Receives a string and returns a copy of this string with all uppercase letters changed to lowercase. All other
     *   characters are left unchanged. The definition of what an uppercase letter is depends on the current locale.
    */
    export function lower(this: void, s: string): string;

    /**
     * Looks for the first match of `pattern` (see 6.4.1) in the string `s`. If it finds one, then `match` returns the
     *   captures from the pattern; otherwise it returns nil. If `pattern` specifies no captures, then the whole match
     *   is returned. A third, optional numeric argument `init` specifies where to start the search; its default value
     *   is 1 and can be negative.
    */
    /** @tupleReturn */
    export function match(this: void, s: string, pattern: string, init?: number): string[];

    /**
     * Returns a binary string containing the values `v1`, `v2`, etc. packed (that is, serialized in binary form)
     *   according to the format string `fmt` (see 6.4.2).
    */
    export function pack(this: void, fmt: string, ...args: unknown[]): string;

    /**
     * Returns the size of a string resulting from `string.pack` with the given format. The format string cannot have
     *   the variable-length options '`s`' or '`z`' (see 6.4.2).
    */
    export function packsize(this: void, fmt: string): number;

    /**
     * Returns a string that is the concatenation of `n` copies of the string `s` separated by the string `sep`. The
     *   default value for `sep` is the empty string (that is, no separator). Returns the empty string if `n` is not
     *   positive. (Note that it is very easy to exhaust the memory of your machine with a single call to this
     *   function.)
    */
    export function rep(this: void, s: string, n: number, sep?: string): string;

    /**
     * Returns a string that is the string `s` reversed.
    */
    export function reverse(this: void, s: string): string;

    /**
     * Returns the substring of `s` that starts at `i` and continues until `j`; `i` and `j` can be negative. If `j` is
     *   absent, then it is assumed to be equal to -1 (which is the same as the string length). In particular, the call
     *   `string.sub(s,1,j)` returns a prefix of `s` with length `j`, and `string.sub(s, -i)` (for a positive `i`)
     *   returns a suffix of `s` with length `i`. If, after the translation of negative indices, `i` is less than 1, it
     *   is corrected to 1. If `j` is greater than the string length, it is corrected to that length. If, after these
     *   corrections, `i` is greater than `j`, the function returns the empty string.
    */
    export function sub(this: void, s: string, i: number, j?: number): string;

    /**
     * Returns the values packed in string `s` (see `string.pack`) according to the format string `fmt` (see 6.4.2). An
     *   optional `pos` marks where to start reading in `s` (default is 1). After the read values, this function also
     *   returns the index of the first unread byte in `s`.
    */
    /** @tupleReturn */
    export function unpack(this: void, fmt: string, s: string, pos?: number): unknown[];

    /**
     * Receives a string and returns a copy of this string with all lowercase letters changed to uppercase. All other
     *   characters are left unchanged. The definition of what a lowercase letter is depends on the current locale.
    */
    export function upper(this: void, s: string): string;
}

declare namespace utf8 {
    /**
     * Receives zero or more integers, converts each one to its corresponding UTF-8 byte sequence and returns a string
     *   with the concatenation of all these sequences.
    */
    export function char(this: void, ...args: number[]): string;

    /**
     * The pattern (a string, not a function) "`[\0-\x7F\xC2-\xF4][\x80-\xBF]*`" (see 6.4.1), which matches exactly one
     *   UTF-8 byte sequence, assuming that the subject is a valid UTF-8 string.
    */
    export const charpattern: string;

    /** @luaIterator @tupleReturn */
    export interface CodesIterable extends Array<[number, number]> {}

    /**
     * Returns values so that the construction
     *
     *      for p, c in utf8.codes(s) do body end
     *
     * will iterate over all characters in string `s`, with `p` being the position (in bytes) and `c` the code point of
     *   each character. It raises an error if it meets any invalid byte sequence.
    */
    export function codes(this: void, s: string): CodesIterable;

    /**
     * Returns the codepoints (as integers) from all characters in `s` that start between byte position `i` and `j`
     *   (both included). The default for `i` is 1 and for `j` is `i`. It raises an error if it meets any invalid byte
     *   sequence.
    */
    /** @tupleReturn */
    export function codepoint(this: void, s: string, i?: number, j?: number): number[];

    /**
     * Returns the number of UTF-8 characters in string `s` that start between positions `i` and `j` (both inclusive).
     *   The default for `i` is 1 and for `j` is -1. If it finds any invalid byte sequence, returns a false value plus
     *   the position of the first invalid byte.
    */
    /** @tupleReturn */
    export function len(this: void, s: string, i?: number, j?: number): [number] | [false, number];

    /**
     * Returns the position (in bytes) where the encoding of the `n`-th character of `s` (counting from position `i`)
     *   starts. A negative `n` gets characters before position `i`. The default for `i` is 1 when `n` is non-negative
     *   and `#s + 1` otherwise, so that `utf8.offset(s, -n)` gets the offset of the `n`-th character from the end of
     *   the string. If the specified character is neither in the subject nor right after its end, the function returns
     *   nil. As a special case, when `n` is 0 the function returns the start of the encoding of the character that
     *   contains the `i`-th byte of `s`.
     *
     * This function assumes that `s` is a valid UTF-8 string.
    */
    export function offset(this: void, s: string, n: number, i?: number): number | undefined;
}

declare namespace table {
    /**
     * Given a list where all elements are strings or numbers, returns the string `list[i]..sep..list[i+1] ...
     *   sep..list[j]`. The default value for `sep` is the empty string, the default for `i` is 1, and the default for
     *   `j` is `#list`. If `i` is greater than `j`, returns the empty string.
    */
    export function concat(this: void, list: (string | number)[], sep?: string, i?: number, j?: number): string;

    /**
     * Inserts element `value` at position `pos` in `list`, shifting up the elements `list[pos], list[pos+1], ...,
     *   list[#list]`. The default value for `pos` is `#list+1`, so that a call `table.insert(t,x)` inserts `x` at the
     *   end of list `t`.
    */
    export function insert<T>(this: void, list: T[], pos: number, value: T): void;

    /**
     * Inserts element `value` at position `pos` in `list`, shifting up the elements `list[pos], list[pos+1], ...,
     *   list[#list]`. The default value for `pos` is `#list+1`, so that a call `table.insert(t,x)` inserts `x` at the
     *   end of list `t`.
    */
    export function insert<T>(this: void, list: T[], value: T): void;

    /**
     * Moves elements from table `a1` to table `a2`, performing the equivalent to the following multiple assignment:
     *   `a2[t],... = a1[f],...,a1[e]`. The default for `a2` is `a1`. The destination range can overlap with the source
     *   range. The number of elements to be moved must fit in a Lua integer.
     *
     * Returns the destination table `a2`.
    */
    export function move<T1, T2 = T1>(this: void, a1: T1[], f: number, e: number, t: number, a2?: T2[]): T2[];

    /**
     * Returns a new table with all arguments stored into keys 1, 2, etc. and with a field "`n`" with the total number
     *   of arguments. Note that the resulting table may not be a sequence.
    */
    export function pack<A extends unknown[]>(this: void, ...args: A): A & {n: number};

    /**
     * Removes from `list` the element at position `pos`, returning the value of the removed element. When `pos` is an
     *   integer between 1 and `#list`, it shifts down the elements `list[pos+1], list[pos+2], ..., list[#list]` and
     *   erases element `list[#list]`; The index `pos` can also be 0 when `#list` is 0, or `#list + 1`; in those cases,
     *   the function erases the element `list[pos]`.
     *
     * The default value for `pos` is `#list`, so that a call `table.remove(l)` removes the last element of list `l`.
    */
    export function remove<T>(this: void, list: T[], pos?: number): T | undefined;

    /**
     * Sorts list elements in a given order, in-place, from `list[1]` to `list[#list]`. If `comp` is given, then it must
     *   be a function that receives two list elements and returns true when the first element must come before the
     *   second in the final order (so that, after the sort, `i <; j` implies `not comp(list[j],list[i])`). If `comp` is
     *   not given, then the standard Lua operator `<;` is used instead.
     *
     * Note that the `comp` function must define a strict partial order over the elements in the list; that is, it must
     *   be asymmetric and transitive. Otherwise, no valid sort may be possible.
     *
     * The sort algorithm is not stable: elements considered equal by the given order may have their relative positions
     *   changed by the sort.
    */
    export function sort<T>(this: void, list: T[], comp?: { (this: void, a: T, b: T): boolean; }): void;

    /**
     * Returns the elements from the given list. This function is equivalent to
     *
     *      return list[i], list[i+1], ..., list[j]
     *
     * By default, `i` is 1 and `j` is `#list`.
    */
    /** @tupleReturn */
    export function unpack<A extends unknown[]>(this: void, list: A, i?: number, j?: number): A;
}

declare namespace math {
    /**
     * Returns the absolute value of `x`. (integer/float)
    */
    export function abs(this: void, x: number): number;

    /**
     * Returns the arc cosine of `x` (in radians).
    */
    export function acos(this: void, x: number): number;

    /**
     * Returns the arc sine of `x` (in radians).
    */
    export function asin(this: void, x: number): number;

    /**
     * Returns the arc tangent of `y/x` (in radians), but uses the signs of both arguments to find the quadrant of the
     *   result. (It also handles correctly the case of `x` being zero.)
     *
     * The default value for `x` is 1, so that the call `math.atan(y)` returns the arc tangent of `y`.
    */
    export function atan(this: void, x: number, y?: number): number;

    /**
     * Returns the smallest integral value larger than or equal to `x`.
    */
    export function ceil(this: void, x: number): number;

    /**
     * Returns the cosine of `x` (assumed to be in radians).
    */
    export function cos(this: void, x: number): number;

    /**
     * Converts the angle `x` from radians to degrees.
    */
    export function deg(this: void, x: number): number;

    /**
     * Returns the value ex (where `e` is the base of natural logarithms).
    */
    export function exp(this: void, x: number): number;

    /**
     * Returns the largest integral value smaller than or equal to `x`.
    */
    export function floor(this: void, x: number): number;

    /**
     * Returns the remainder of the division of `x` by `y` that rounds the quotient towards zero. (integer/float)
    */
    export function fmod(this: void, x: number, y: number): number;

    /**
     * The float value `HUGE_VAL`, a value larger than any other numeric value.
    */
    export const huge: number;

    /**
     * Returns the logarithm of `x` in the given base. The default for `base` is e (so that the function returns the
     *   natural logarithm of `x`).
    */
    export function log(this: void, x: number, base?: number): number;

    /**
     * Returns the argument with the maximum value, according to the Lua operator `<;`. (integer/float)
    */
    export function max(this: void, x: number, ...args: number[]): number;

    /**
     * An integer with the maximum value for an integer.
    */
    export const maxinteger: number;

    /**
     * Returns the argument with the minimum value, according to the Lua operator `<;`. (integer/float)
    */
    export function min(this: void, x: number, ...args: number[]): number;

    /**
     * An integer with the minimum value for an integer.
    */
    export const mininteger: number;

    /**
     * Returns the integral part of `x` and the fractional part of `x`. Its second result is always a float.
    */
    export function modf(this: void, x: number): number;

    /**
     * The value of pi.
    */
    export const pi: number;

    /**
     * Converts the angle `x` from degrees to radians.
    */
    export function rad(this: void, x: number): number;

    /**
     * When called without arguments, returns a pseudo-random float with uniform distribution in the range [0,1). When
     *   called with two integers `m` and `n`, `math.random` returns a pseudo-random integer with uniform distribution
     *   in the range [m, n]. (The value n-m cannot be negative and must fit in a Lua integer.) The call
     *   `math.random(n)` is equivalent to `math.random(1,n)`.
     *
     * This function is an interface to the underling pseudo-random generator function provided by C.
    */
    export function random(this: void, m?: number, n?: number): number;

    /**
     * Sets `x` as the "seed" for the pseudo-random generator: equal seeds produce equal sequences of numbers.
    */
    export function randomseed(this: void, x: number): void;

    /**
     * Returns the sine of `x` (assumed to be in radians).
    */
    export function sin(this: void, x: number): number;

    /**
     * Returns the square root of `x`. (You can also use the expression `x^0.5` to compute this value.)
    */
    export function sqrt(this: void, x: number): number;

    /**
     * Returns the tangent of `x` (assumed to be in radians).
    */
    export function tan(this: void, x: number): number;

    /**
     * If the value `x` is convertible to an integer, returns that integer. Otherwise, returns nil.
    */
    export function tointeger(this: void, x: unknown): number | undefined;

    /**
     * Returns "`integer`" if `x` is an integer, "`float`" if it is a float, or nil if `x` is not a number.
    */
    export function type(this: void, x: unknown): "integer" | "float" | undefined;

    /**
     * Returns a boolean, true if and only if integer `m` is below integer `n` when they are compared as unsigned
     *   integers.
    */
    export function ult(this: void, m: number, n: number): boolean;
}

declare namespace io {
    /**
     * Equivalent to `file:close()`. Without a `file`, closes the default output file.
    */
    /** @tupleReturn */
    export function close(this: void, file?: LuaFile): [undefined] | [true, "exit" | "signal", number];

    /**
     * Equivalent to `io.output():flush()`.
    */
    export function flush(this: void): void;

    /**
     * When called with a file name, it opens the named file (in text mode), and sets its handle as the default input
     *   file. When called with a file handle, it simply sets this file handle as the default input file. When called
     *   without arguments, it returns the current default input file.
     *
     * In case of errors this function raises the error, instead of returning an error code.
    */
    export function input(this: void, file?: string | LuaFile): LuaFile;

    export type FileReadFormat = "n" | "a" | "l" | "L" | number;
    
    export type FileReadFormatTypeTuple<A extends FileReadFormat[]> = {
        [I in keyof A]: A[I] extends "*n" ? number : string
    };
    
    /** @luaIterator */
    export interface FileLinesIterable<F extends FileReadFormat> extends Array<FileReadType<F>> {}
    
    /** @luaIterator @tupleReturn */
    export interface FileLinesTupleIterable<A extends FileReadFormat[]> extends Array<FileReadFormatTypeTuple<A>> {}

    /**
     * Opens the given file name in read mode and returns an iterator function that works like `file:lines(...)` over
     *   the opened file. When the iterator function detects the end of file, it returns no values (to finish the loop)
     *   and automatically closes the file.
     *
     * The call `io.lines()` (with no file name) is equivalent to `io.input():lines("*l")`; that is, it iterates over
     *   the lines of the default input file. In this case, the iterator does not close the file when the loop ends.
     *
     * In case of errors this function raises the error, instead of returning an error code.
    */
    export function lines<F extends FileReadFormat = "l">(
        this: void,
        filename?: string,
        format?: F
    ): FileLinesIterable<F>;

    /**
     * Opens the given file name in read mode and returns an iterator function that works like `file:lines(...)` over
     *   the opened file. When the iterator function detects the end of file, it returns no values (to finish the loop)
     *   and automatically closes the file.
     *
     * The call `io.lines()` (with no file name) is equivalent to `io.input():lines("*l")`; that is, it iterates over
     *   the lines of the default input file. In this case, the iterator does not close the file when the loop ends.
     *
     * In case of errors this function raises the error, instead of returning an error code.
    */
    export function lines<A extends FileReadFormat[]>(
        this: void,
        filename: string,
        ...formats: A
    ): FileLinesTupleIterable<A>;

    /**
     * This function opens a file, in the mode specified in the string `mode`. In case of success, it returns a new file
     *   handle.
     *
     * The `mode` string can be any of the following:
     *
     * - "`r`": read mode (the default);
     * - "`w`": write mode;
     * - "`a`": append mode;
     * - "`r+`": update mode, all previous data is preserved;
     * - "`w+`": update mode, all previous data is erased;
     * - "`a+`": append update mode, previous data is preserved, writing is only allowed at the end of file.
     * The `mode` string can also have a '`b`' at the end, which is needed in some systems to open the file in binary
     *   mode.
    */
    /** @tupleReturn */
    export function open(
        this: void,
        filename: string,
        mode?: "r" | "w" | "a" | "r+" | "w+" | "a+" | "rb" | "wb" | "ab" | "r+b" | "w+b" | "a+b"
    ): [LuaFile] | [undefined, string];

    /**
     * Similar to `io.input`, but operates over the default output file.
    */
    export function output(this: void, file?: string | LuaFile): LuaFile;

    /**
     * This function is system dependent and is not available on all platforms.
     *
     * Starts program `prog` in a separated process and returns a file handle that you can use to read data from this
     *   program (if `mode` is `"r"`, the default) or to write data to this program (if `mode` is `"w"`).
    */
    /** @tupleReturn */
    export function popen(this: void, prog: string, mode?: "r" | "w"): [LuaFile] | [undefined, string];

    /**
     * Equivalent to `io.input():read(...)`.
    */
    export function read<F extends FileReadFormat = "l">(this: void, format?: F): FileReadFormatType<F>;

    /**
     * Equivalent to `io.input():read(...)`.
    */
    /** @tupleReturn */
    export function read<A extends FileReadFormat[]>(this: void, ...formats: A): FileReadFormatTypeTuple<A>;

    /**
     * In case of success, returns a handle for a temporary file. This file is opened in update mode and it is
     *   automatically removed when the program ends.
    */
    export function tmpfile(this: void): LuaFile | undefined;

    /**
     * Checks whether `obj` is a valid file handle. Returns the string `"file"` if `obj` is an open file handle,
     *   `"closed file"` if `obj` is a closed file handle, or nil if `obj` is not a file handle.
    */
    export function type(this: void): "file" | "closed file" | undefined;

    /**
     * Equivalent to `io.output():write(...)`.
    */
    /** @tupleReturn */
    export function write(this: void, ...args: (string | number)[]): [LuaFile] | [undefined, string];
}

declare interface LuaFile {
    /**
     * Closes `file`. Note that files are automatically closed when their handles are garbage collected, but that takes
     *   an unpredictable amount of time to happen.
     *
     * When closing a file handle created with `io.popen`, `file:close` returns the same values returned by
     *   `os.execute`.
    */
    /** @tupleReturn */
    close(this: this): [undefined] | [true | undefined, "exit" | "signal", number];

    /**
     * Saves any written data to `file`.
    */
    flush(this: this): void;

    /**
     * Returns an iterator function that, each time it is called, reads the file according to the given formats. When no
     *   format is given, uses "`l`" as a default. As an example, the construction
     *
     *      for c in file:lines(1) do body end
     *
     * will iterate over all characters of the file, starting at the current position. Unlike `io.lines`, this function
     *   does not close the file when the loop ends.
     *
     * In case of errors this function raises the error, instead of returning an error code.
    */
    lines<F extends io.FileReadFormat = "l">(this: this): io.FileLinesIterable<F>;

    /**
     * Returns an iterator function that, each time it is called, reads the file according to the given formats. When no
     *   format is given, uses "`l`" as a default. As an example, the construction
     *
     *      for c in file:lines(1) do body end
     *
     * will iterate over all characters of the file, starting at the current position. Unlike `io.lines`, this function
     *   does not close the file when the loop ends.
     *
     * In case of errors this function raises the error, instead of returning an error code.
    */
    lines<A extends io.FileReadFormat[]>(this: this, ...formats: A): io.FileLinesTupleIterable<A>;

    /**
     * Reads the file `file`, according to the given formats, which specify what to read. For each format, the function
     *   returns a string or a number with the characters read, or nil if it cannot read data with the specified format.
     *   (In this latter case, the function does not read subsequent formats.) When called without formats, it uses a
     *   default format that reads the next line (see below).
     *
     * The available formats are
     *
     * - "`n`": reads a numeral and returns it as a float or an integer, following the lexical conventions of Lua. (The
     *   numeral may have leading spaces and a sign.) This format always reads the longest input sequence that is a
     *   valid prefix for a numeral; if that prefix does not form a valid numeral (e.g., an empty string, "`0x`", or
     *   "`3.4e-`"), it is discarded and the function returns nil.
     * - "`a`": reads the whole file, starting at the current position. On end of file, it returns the empty string.
     * - "`l`": reads the next line skipping the end of line, returning nil on end of file. This is the default format.
     * - "`L`": reads the next line keeping the end-of-line character (if present), returning nil on end of file.
     * - number: reads a string with up to this number of bytes, returning nil on end of file. If `number` is zero, it
     *   reads nothing and returns an empty string, or nil on end of file.
     * The formats "`l`" and "`L`" should be used only for text files.
    */
    read<F extends io.FileReadFormat = "l">(this: this, format?: F): io.FileReadFormatType<F>;

    /**
     * Reads the file `file`, according to the given formats, which specify what to read. For each format, the function
     *   returns a string or a number with the characters read, or nil if it cannot read data with the specified format.
     *   (In this latter case, the function does not read subsequent formats.) When called without formats, it uses a
     *   default format that reads the next line (see below).
     *
     * The available formats are
     *
     * - "`n`": reads a numeral and returns it as a float or an integer, following the lexical conventions of Lua. (The
     *   numeral may have leading spaces and a sign.) This format always reads the longest input sequence that is a
     *   valid prefix for a numeral; if that prefix does not form a valid numeral (e.g., an empty string, "`0x`", or
     *   "`3.4e-`"), it is discarded and the function returns nil.
     * - "`a`": reads the whole file, starting at the current position. On end of file, it returns the empty string.
     * - "`l`": reads the next line skipping the end of line, returning nil on end of file. This is the default format.
     * - "`L`": reads the next line keeping the end-of-line character (if present), returning nil on end of file.
     * - number: reads a string with up to this number of bytes, returning nil on end of file. If `number` is zero, it
     *   reads nothing and returns an empty string, or nil on end of file.
     * The formats "`l`" and "`L`" should be used only for text files.
    */
    /** @tupleReturn */
    read<A extends io.FileReadFormat[]>(this: this, ...formats: A): io.FileReadFormatTypeTuple<A>;

    /**
     * Sets and gets the file position, measured from the beginning of the file, to the position given by `offset` plus
     *   a base specified by the string `whence`, as follows:
     *
     * - "`set`": base is position 0 (beginning of the file);
     * - "`cur`": base is current position;
     * - "`end`": base is end of file;
     * In case of success, `seek` returns the final file position, measured in bytes from the beginning of the file. If
     *   `seek` fails, it returns nil, plus a string describing the error.
     *
     * The default value for `whence` is `"cur"`, and for `offset` is 0. Therefore, the call `file:seek()` returns the
     *   current file position, without changing it; the call `file:seek("set")` sets the position to the beginning of
     *   the file (and returns 0); and the call `file:seek("end")` sets the position to the end of the file, and returns
     *   its size.
    */
    /** @tupleReturn */
    seek(this: this, whence?: "set" | "cur" | "end", offset?: number): [number] | [undefined, string];

    /**
     * Sets the buffering mode for an output file. There are three available modes:
     *
     * - "`no`": no buffering; the result of any output operation appears immediately.
     * - "`full`": full buffering; output operation is performed only when the buffer is full or when you explicitly
     *   `flush` the file (see `io.flush`).
     * - "`line`": line buffering; output is buffered until a newline is output or there is any input from some special
     *   files (such as a terminal device).
     * For the last two cases, `size` specifies the size of the buffer, in bytes. The default is an appropriate size.
    */
    setvbuf(this: this, mode: "no"): void;

    /**
     * Sets the buffering mode for an output file. There are three available modes:
     *
     * - "`no`": no buffering; the result of any output operation appears immediately.
     * - "`full`": full buffering; output operation is performed only when the buffer is full or when you explicitly
     *   `flush` the file (see `io.flush`).
     * - "`line`": line buffering; output is buffered until a newline is output or there is any input from some special
     *   files (such as a terminal device).
     * For the last two cases, `size` specifies the size of the buffer, in bytes. The default is an appropriate size.
    */
    setvbuf(this: this, mode: "full" | "line", size?: number): void;

    /**
     * Writes the value of each of its arguments to `file`. The arguments must be strings or numbers.
     *
     * In case of success, this function returns `file`. Otherwise it returns nil plus a string describing the error.
    */
    /** @tupleReturn */
    write(this: this, ...args: (string | number)[]): [LuaFile] | [undefined, string];
}

declare namespace os {
    /**
     * Returns an approximation of the amount in seconds of CPU time used by the program.
    */
    export function clock(this: void): number;

    export interface Time {
        year: number;
        month: number;
        day: number;
        hour?: number;
        min?: number;
        sec?: number;
        isdst?: boolean;
    }
    
    export interface Date extends Time {
        hour: number;
        min: number;
        sec: number;
        wday: number;
        yday: number;
    }

    /**
     * Returns a string or a table containing date and time, formatted according to the given string `format`.
     *
     * If the `time` argument is present, this is the time to be formatted (see the `os.time` function for a description
     *   of this value). Otherwise, `date` formats the current time.
     *
     * If `format` starts with '`!`', then the date is formatted in Coordinated Universal Time. After this optional
     *   character, if `format` is the string "`*t`", then `date` returns a table with the following fields: `year`,
     *   `month` (1-12), `day` (1-31), `hour` (0-23), `min` (0-59), `sec` (0-61), `wday` (weekday, 1-7, Sunday is 1),
     *   `yday` (day of the year, 1-366), and `isdst` (daylight saving flag, a boolean). This last field may be absent
     *   if the information is not available.
     *
     * If `format` is not "`*t`", then `date` returns the date as a string, formatted according to the same rules as the
     *   ISO C function `strftime`.
     *
     * When called without arguments, `date` returns a reasonable date and time representation that depends on the host
     *   system and on the current locale. (More specifically, `os.date()` is equivalent to `os.date("%c")`.)
     *
     * In non-POSIX systems, this function may be not thread safe because of its reliance on C function `gmtime` and C
     *   function `localtime`.
    */
    export function date(this: void, format: "!*t" | "*t", time?: Time): Date;

    /**
     * Returns a string or a table containing date and time, formatted according to the given string `format`.
     *
     * If the `time` argument is present, this is the time to be formatted (see the `os.time` function for a description
     *   of this value). Otherwise, `date` formats the current time.
     *
     * If `format` starts with '`!`', then the date is formatted in Coordinated Universal Time. After this optional
     *   character, if `format` is the string "`*t`", then `date` returns a table with the following fields: `year`,
     *   `month` (1-12), `day` (1-31), `hour` (0-23), `min` (0-59), `sec` (0-61), `wday` (weekday, 1-7, Sunday is 1),
     *   `yday` (day of the year, 1-366), and `isdst` (daylight saving flag, a boolean). This last field may be absent
     *   if the information is not available.
     *
     * If `format` is not "`*t`", then `date` returns the date as a string, formatted according to the same rules as the
     *   ISO C function `strftime`.
     *
     * When called without arguments, `date` returns a reasonable date and time representation that depends on the host
     *   system and on the current locale. (More specifically, `os.date()` is equivalent to `os.date("%c")`.)
     *
     * In non-POSIX systems, this function may be not thread safe because of its reliance on C function `gmtime` and C
     *   function `localtime`.
    */
    export function date(this: void, format?: string, time?: Time): string;

    /**
     * Returns the difference, in seconds, from time `t1` to time `t2` (where the times are values returned by
     *   `os.time`). In POSIX, Windows, and some other systems, this value is exactly `t2`-`t1`.
    */
    export function difftime(this: void, t2: number, t1: number): number;

    /**
     * This function is equivalent to the ISO C function `system`. It passes `command` to be executed by an operating
     *   system shell. Its first result is true if the command terminated successfully, or nil otherwise. After this
     *   first result the function returns a string plus a number, as follows:
     *
     * - "`exit`": the command terminated normally; the following number is the exit status of the command.
     * - "`signal`": the command was terminated by a signal; the following number is the signal that terminated the
     *   command.
     * When called without a `command`, `os.execute` returns a boolean that is true if a shell is available.
    */
    export function execute(this: void): boolean;

    /**
     * This function is equivalent to the ISO C function `system`. It passes `command` to be executed by an operating
     *   system shell. Its first result is true if the command terminated successfully, or nil otherwise. After this
     *   first result the function returns a string plus a number, as follows:
     *
     * - "`exit`": the command terminated normally; the following number is the exit status of the command.
     * - "`signal`": the command was terminated by a signal; the following number is the signal that terminated the
     *   command.
     * When called without a `command`, `os.execute` returns a boolean that is true if a shell is available.
    */
    /** @tupleReturn */
    export function execute(this: void, command: string): [true | undefined, "exit" | "signal", number];

    /**
     * Calls the ISO C function `exit` to terminate the host program. If `code` is true, the returned status is
     *   `EXIT_SUCCESS`; if `code` is false, the returned status is `EXIT_FAILURE`; if `code` is a number, the returned
     *   status is this number. The default value for `code` is true.
     *
     * If the optional second argument `close` is true, closes the Lua state before exiting.
    */
    export function exit(this: void, code?: number | boolean, close?: boolean): void;

    /**
     * Returns the value of the process environment variable `varname`, or nil if the variable is not defined.
    */
    export function getenv(this: void, varname: string): string;

    /**
     * Deletes the file (or empty directory, on POSIX systems) with the given name. If this function fails, it returns
     *   nil, plus a string describing the error and the error code. Otherwise, it returns true.
    */
    /** @tupleReturn */
    export function remove(this: void, filename: string): [true] | [undefined, string, number];

    /**
     * Renames the file or directory named `oldname` to `newname`. If this function fails, it returns nil, plus a string
     *   describing the error and the error code. Otherwise, it returns true.
    */
    /** @tupleReturn */
    export function rename(this: void, oldname: string, newname: string): [true] | [undefined, string, number];

    /**
     * Sets the current locale of the program. `locale` is a system-dependent string specifying a locale; `category` is
     *   an optional string describing which category to change: `"all"`, `"collate"`, `"ctype"`, `"monetary"`,
     *   `"numeric"`, or `"time"`; the default category is `"all"`. The function returns the name of the new locale, or
     *   nil if the request cannot be honored.
     *
     * If `locale` is the empty string, the current locale is set to an implementation-defined native locale. If
     *   `locale` is the string "`C`", the current locale is set to the standard C locale.
     *
     * When called with nil as the first argument, this function only returns the name of the current locale for the
     *   given category.
     *
     * This function may be not thread safe because of its reliance on C function `setlocale`.
    */
    export function setlocale(
        this: void,
        locale?: string,
        category?: "all" | "collate" | "ctype" | "monetary" | "numeric" | "time"
    ): string | undefined;

    /**
     * Returns the current time when called without arguments, or a time representing the local date and time specified
     *   by the given table. This table must have fields `year`, `month`, and `day`, and may have fields `hour` (default
     *   is 12), `min` (default is 0), `sec` (default is 0), and `isdst` (default is nil). Other fields are ignored. For
     *   a description of these fields, see the `os.date` function.
     *
     * The values in these fields do not need to be inside their valid ranges. For instance, if `sec` is -10, it means
     *   -10 seconds from the time specified by the other fields; if `hour` is 1000, it means +1000 hours from the time
     *   specified by the other fields.
     *
     * The returned value is a number, whose meaning depends on your system. In POSIX, Windows, and some other systems,
     *   this number counts the number of seconds since some given start time (the "epoch"). In other systems, the
     *   meaning is not specified, and the number returned by `time` can be used only as an argument to `os.date` and
     *   `os.difftime`.
    */
    export function time(this: void, table?: Time): number;

    /**
     * Returns a string with a file name that can be used for a temporary file. The file must be explicitly opened
     *   before its use and explicitly removed when no longer needed.
     *
     * In POSIX systems, this function also creates a file with that name, to avoid security risks. (Someone else might
     *   create the file with wrong permissions in the time between getting the name and creating the file.) You still
     *   have to open the file to use it and to remove it (even if you do not use it).
     *
     * When possible, you may prefer to use `io.tmpfile`, which automatically removes the file when the program ends.
    */
    export function tmpname(this: void): string;
}

declare namespace debug {
    /**
     * Enters an interactive mode with the user, running each string that the user enters. Using simple commands and
     *   other debug facilities, the user can inspect global and local variables, change their values, evaluate
     *   expressions, and so on. A line containing only the word `cont` finishes this function, so that the caller
     *   continues its execution.
     *
     * Note that commands for `debug.debug` are not lexically nested within any function and so have no direct access to
     *   local variables.
    */
    export function debug(this: void): void;

    export interface Hook {
    	(this: void, event: "call" | "tail call" | "return" | "line" | "count", line?: number): void;
    }

    /**
     * Returns the current hook settings of the thread, as three values: the current hook function, the current hook
     *   mask, and the current hook count (as set by the `debug.sethook` function).
    */
    /** @tupleReturn */
    export function gethook(this: void, thread?: LuaThread): [Hook, string, number];

    export interface FunctionInfo {
        name?: string;
        namewhat?: "global" | "local" | "method" | "field" | "upvalue" | "";
        what?: "Lua" | "C" | "main";
        source?: string;
        currentline?: number;
        linedefined?: number;
        lastlinedefined?: number;
        nups?: number;
        nparams?: number;
        isvararg?: boolean;
        istailcall?: boolean;
        short_src?: string;
        func?: Function;
        activelines?: number[];
    }

    /**
     * Returns a table with information about a function. You can give the function directly or you can give a number as
     *   the value of `f`, which means the function running at level `f` of the call stack of the given thread: level 0
     *   is the current function (`getinfo` itself); level 1 is the function that called `getinfo` (except for tail
     *   calls, which do not count on the stack); and so on. If `f` is a number larger than the number of active
     *   functions, then `getinfo` returns nil.
     *
     * The returned table can contain all the fields returned by `lua_getinfo`, with the string `what` describing which
     *   fields to fill in. The default for `what` is to get all information available, except the table of valid lines.
     *   If present, the option '`f`' adds a field named `func` with the function itself. If present, the option '`L`'
     *   adds a field named `activelines` with the table of valid lines.
     *
     * For instance, the expression `debug.getinfo(1,"n").name` returns a name for the current function, if a reasonable
     *   name can be found, and the expression `debug.getinfo(print)` returns a table with all available information
     *   about the `print` function.
    */
    export function getinfo(this: void, f: Function | number, what?: string): FunctionInfo;

    /**
     * Returns a table with information about a function. You can give the function directly or you can give a number as
     *   the value of `f`, which means the function running at level `f` of the call stack of the given thread: level 0
     *   is the current function (`getinfo` itself); level 1 is the function that called `getinfo` (except for tail
     *   calls, which do not count on the stack); and so on. If `f` is a number larger than the number of active
     *   functions, then `getinfo` returns nil.
     *
     * The returned table can contain all the fields returned by `lua_getinfo`, with the string `what` describing which
     *   fields to fill in. The default for `what` is to get all information available, except the table of valid lines.
     *   If present, the option '`f`' adds a field named `func` with the function itself. If present, the option '`L`'
     *   adds a field named `activelines` with the table of valid lines.
     *
     * For instance, the expression `debug.getinfo(1,"n").name` returns a name for the current function, if a reasonable
     *   name can be found, and the expression `debug.getinfo(print)` returns a table with all available information
     *   about the `print` function.
    */
    export function getinfo(this: void, thread: LuaThread, f: Function | number, what?: string): FunctionInfo;

    /**
     * This function returns the name and the value of the local variable with index `local` of the function at level
     *   `f` of the stack. This function accesses not only explicit local variables, but also parameters, temporaries,
     *   etc.
     *
     * The first parameter or local variable has index 1, and so on, following the order that they are declared in the
     *   code, counting only the variables that are active in the current scope of the function. Negative indices refer
     *   to vararg arguments; -1 is the first vararg argument. The function returns nil if there is no variable with the
     *   given index, and raises an error when called with a level out of range. (You can call `debug.getinfo` to check
     *   whether the level is valid.)
     *
     * Variable names starting with '`(`' (open parenthesis) represent variables with no known names (internal variables
     *   such as loop control variables, and variables from chunks saved without debug information).
     *
     * The parameter `f` may also be a function. In that case, `getlocal` returns only the name of function parameters.
    */
    /** @tupleReturn */
    export function getlocal(this: void, f: Function | number, local: number): [string, unknown] | [undefined];

    /**
     * This function returns the name and the value of the local variable with index `local` of the function at level
     *   `f` of the stack. This function accesses not only explicit local variables, but also parameters, temporaries,
     *   etc.
     *
     * The first parameter or local variable has index 1, and so on, following the order that they are declared in the
     *   code, counting only the variables that are active in the current scope of the function. Negative indices refer
     *   to vararg arguments; -1 is the first vararg argument. The function returns nil if there is no variable with the
     *   given index, and raises an error when called with a level out of range. (You can call `debug.getinfo` to check
     *   whether the level is valid.)
     *
     * Variable names starting with '`(`' (open parenthesis) represent variables with no known names (internal variables
     *   such as loop control variables, and variables from chunks saved without debug information).
     *
     * The parameter `f` may also be a function. In that case, `getlocal` returns only the name of function parameters.
    */
    /** @tupleReturn */
    export function getlocal(
        this: void,
        thread: LuaThread,
        f: Function | number,
        local: number
    ): [string, unknown] | [undefined];

    /**
     * Returns the metatable of the given `value` or nil if it does not have a metatable.
    */
    export function getmetatable(this: void, value: unknown): unknown;

    /**
     * Returns the registry table (see 4.5).
    */
    export function getregistry(this: void): Record<string | number | symbol, unknown>;

    /**
     * This function returns the name and the value of the upvalue with index `up` of the function `f`. The function
     *   returns nil if there is no upvalue with the given index.
     *
     * Variable names starting with '`(`' (open parenthesis) represent variables with no known names (variables from
     *   chunks saved without debug information).
    */
    /** @tupleReturn */
    export function getupvalue(this: void, f: Function, up: number): [string, unknown] | [undefined];

    /**
     * Returns the Lua value associated to `u`. If `u` is not a full userdata, returns nil.
    */
    export function getuservalue(this: void, u: unknown): unknown;

    /**
     * Sets the given function as a hook. The string `mask` and the number `count` describe when the hook will be
     *   called. The string mask may have any combination of the following characters, with the given meaning:
     *
     * - '`c`': the hook is called every time Lua calls a function;
     * - '`r`': the hook is called every time Lua returns from a function;
     * - '`l`': the hook is called every time Lua enters a new line of code.
     * Moreover, with a `count` different from zero, the hook is called also after every `count` instructions.
     *
     * When called without arguments, `debug.sethook` turns off the hook.
     *
     * When the hook is called, its first argument is a string describing the event that has triggered its call:
     *   `"call"` (or `"tail call"`), `"return"`, `"line"`, and `"count"`. For line events, the hook also gets the new
     *   line number as its second parameter. Inside a hook, you can call `getinfo` with level 2 to get more information
     *   about the running function (level 0 is the `getinfo` function, and level 1 is the hook function).
    */
    export function sethook(this: void): void;

    /**
     * Sets the given function as a hook. The string `mask` and the number `count` describe when the hook will be
     *   called. The string mask may have any combination of the following characters, with the given meaning:
     *
     * - '`c`': the hook is called every time Lua calls a function;
     * - '`r`': the hook is called every time Lua returns from a function;
     * - '`l`': the hook is called every time Lua enters a new line of code.
     * Moreover, with a `count` different from zero, the hook is called also after every `count` instructions.
     *
     * When called without arguments, `debug.sethook` turns off the hook.
     *
     * When the hook is called, its first argument is a string describing the event that has triggered its call:
     *   `"call"` (or `"tail call"`), `"return"`, `"line"`, and `"count"`. For line events, the hook also gets the new
     *   line number as its second parameter. Inside a hook, you can call `getinfo` with level 2 to get more information
     *   about the running function (level 0 is the `getinfo` function, and level 1 is the hook function).
    */
    export function sethook(this: void, hook: Hook, mask: string, count?: number): void;

    /**
     * Sets the given function as a hook. The string `mask` and the number `count` describe when the hook will be
     *   called. The string mask may have any combination of the following characters, with the given meaning:
     *
     * - '`c`': the hook is called every time Lua calls a function;
     * - '`r`': the hook is called every time Lua returns from a function;
     * - '`l`': the hook is called every time Lua enters a new line of code.
     * Moreover, with a `count` different from zero, the hook is called also after every `count` instructions.
     *
     * When called without arguments, `debug.sethook` turns off the hook.
     *
     * When the hook is called, its first argument is a string describing the event that has triggered its call:
     *   `"call"` (or `"tail call"`), `"return"`, `"line"`, and `"count"`. For line events, the hook also gets the new
     *   line number as its second parameter. Inside a hook, you can call `getinfo` with level 2 to get more information
     *   about the running function (level 0 is the `getinfo` function, and level 1 is the hook function).
    */
    export function sethook(this: void, thread: LuaThread, hook: Hook, mask: string, count?: number): void;

    /**
     * This function assigns the value `value` to the local variable with index `local` of the function at level `level`
     *   of the stack. The function returns nil if there is no local variable with the given index, and raises an error
     *   when called with a `level` out of range. (You can call `getinfo` to check whether the level is valid.)
     *   Otherwise, it returns the name of the local variable.
     *
     * See `debug.getlocal` for more information about variable indices and names.
    */
    export function setlocal(this: void, level: number, local: number, value: unknown): string | undefined;

    /**
     * This function assigns the value `value` to the local variable with index `local` of the function at level `level`
     *   of the stack. The function returns nil if there is no local variable with the given index, and raises an error
     *   when called with a `level` out of range. (You can call `getinfo` to check whether the level is valid.)
     *   Otherwise, it returns the name of the local variable.
     *
     * See `debug.getlocal` for more information about variable indices and names.
    */
    export function setlocal(
        this: void,
        thread: LuaThread,
        level: number,
        local: number,
        value: unknown
    ): string | undefined;

    /**
     * Sets the metatable for the given `value` to the given `table` (which can be nil). Returns `value`.
    */
    export function setmetatable<V, M>(this: void, value: V, table?: LuaTable<M>): V & LuaMeta<M>;

    /**
     * This function assigns the value `value` to the upvalue with index `up` of the function `f`. The function returns
     *   nil if there is no upvalue with the given index. Otherwise, it returns the name of the upvalue.
    */
    export function setupvalue(this: void, f: Function, up: number, value: unknown): string | undefined;

    /**
     * Sets the given `value` as the Lua value associated to the given `udata`. `udata` must be a full userdata.
     *
     * Returns `udata`.
    */
    export function setuservalue<T>(this: void, udata: LuaUserData, value?: LuaTable<T>): LuaUserData;

    /**
     * If `message` is present but is neither a string nor nil, this function returns `message` without further
     *   processing. Otherwise, it returns a string with a traceback of the call stack. The optional `message` string is
     *   appended at the beginning of the traceback. An optional `level` number tells at which level to start the
     *   traceback (default is 1, the function calling `traceback`).
    */
    export function traceback(this: void, message?: string, level?: number): string;

    /**
     * If `message` is present but is neither a string nor nil, this function returns `message` without further
     *   processing. Otherwise, it returns a string with a traceback of the call stack. The optional `message` string is
     *   appended at the beginning of the traceback. An optional `level` number tells at which level to start the
     *   traceback (default is 1, the function calling `traceback`).
    */
    export function traceback(this: void, thread: LuaThread, message?: string, level?: number): string;

    /**
     * Returns a unique identifier (as a light userdata) for the upvalue numbered `n` from the given function.
     *
     * These unique identifiers allow a program to check whether different closures share upvalues. Lua closures that
     *   share an upvalue (that is, that access a same external local variable) will return identical ids for those
     *   upvalue indices.
    */
    export function upvalueid(this: void, f: Function, n: number): LuaLightUserData;

    /**
     * Make the `n1`-th upvalue of the Lua closure `f1` refer to the `n2`-th upvalue of the Lua closure `f2`.
    */
    export function upvaluejoin(this: void, f1: Function, n1: number, f2: Function, n2: number): void;
}

declare interface String {
    /**
     * Returns the internal numeric codes of the characters `s[i]`, `s[i+1]`, ..., `s[j]`. The default value for `i` is
     *   1; the default value for `j` is `i`. These indices are corrected following the same rules of function
     *   `string.sub`. Numeric codes are not necessarily portable across platforms.
    */
    /** @tupleReturn */
    byte(this: this, i?: string, j?: string): number[];

    /**
     * Looks for the first match of `pattern` (see 6.4.1) in the string `s`. If it finds a match, then `find` returns
     *   the indices of `s` where this occurrence starts and ends; otherwise, it returns nil. A third, optional numeric
     *   argument `init` specifies where to start the search; its default value is 1 and can be negative. A value of
     *   true as a fourth, optional argument `plain` turns off the pattern matching facilities, so the function does a
     *   plain "find substring" operation, with no characters in `pattern` being considered magic. Note that if `plain`
     *   is given, then `init` must be given as well.
     *
     * If the pattern has captures, then in a successful match the captured values are also returned, after the two
     *   indices.
    */
    /** @tupleReturn */
    find(this: this, pattern: string, init?: number, plain?: boolean): [number, number, ...string[]] | [undefined];

    /**
     * Returns a formatted version of its variable number of arguments following the description given in its first
     *   argument (which must be a string). The format string follows the same rules as the ISO C function `sprintf`.
     *   The only differences are that the options/modifiers `*`, `h`, `L`, `l`, `n`, and `p` are not supported and that
     *   there is an extra option, `q`.
     *
     * The `q` option formats a string between double quotes, using escape sequences when necessary to ensure that it
     *   can safely be read back by the Lua interpreter. For instance, the call
     *
     *      string.format('%q', 'a string with "quotes" and \n new line')
     *
     * may produce the string:
     *
     *      "a string with \"quotes\" and \
     *       new line"
     *
     * Options `A`, `a`, `E`, `e`, `f`, `G`, and `g` all expect a number as argument. Options `c`, `d`, `i`, `o`, `u`,
     *   `X`, and `x` expect an integer. When Lua is compiled with a C89 compiler, options `A` and `a` (hexadecimal
     *   floats) do not support any modifier (flags, width, length).
     *
     * Option `s` expects a string; if its argument is not a string, it is converted to one following the same rules of
     *   `tostring`. If the option has any modifier (flags, width, length), the string argument should not contain
     *   embedded zeros.
    */
    format(this: this, ...args: unknown[]): string;

    /**
     * Returns an iterator function that, each time it is called, returns the next captures from `pattern` (see 6.4.1)
     *   over the string `s`. If `pattern` specifies no captures, then the whole match is produced in each call. As an
     *   example, the following loop will iterate over all the words from string `s`, printing one per line:
     *
     *      s = "hello world from Lua"
     *      for w in string.gmatch(s, "%a+") do
     *        print(w)
     *      end
     *
     * The next example collects all pairs `key=value` from the given string into a table:
     *
     *      t = {}
     *      s = "from=world, to=Lua"
     *      for k, v in string.gmatch(s, "(%w+)=(%w+)") do
     *        t[k] = v
     *      end
     *
     * For this function, a caret '`^`' at the start of a pattern does not work as an anchor, as this would prevent the
     *   iteration.
    */
    gmatch(this: this, pattern: string): string.GmatchIterable;

    /**
     * Returns a copy of `s` in which all (or the first `n`, if given) occurrences of the `pattern` (see 6.4.1) have
     *   been replaced by a replacement string specified by `repl`, which can be a string, a table, or a function.
     *   `gsub` also returns, as its second value, the total number of matches that occurred. The name `gsub` comes from
     *   Global SUBstitution. If `repl` is a string, then its value is used for replacement. The character `%` works as
     *   an escape character: any sequence in `repl` of the form `%d`, with d between 1 and 9, stands for the value of
     *   the d-th captured substring. The sequence `%0` stands for the whole match. The sequence `%%` stands for a
     *   single `%`.
     *
     * If `repl` is a table, then the table is queried for every match, using the first capture as the key.
     *
     * If `repl` is a function, then this function is called every time a match occurs, with all captured substrings
     *   passed as arguments, in order.
     *
     * In any case, if the pattern specifies no captures, then it behaves as if the whole pattern was inside a capture.
     *
     * If the value returned by the table query or by the function call is a string or a number, then it is used as the
     *   replacement string; otherwise, if it is false or nil, then there is no replacement (that is, the original match
     *   is kept in the string).
     *
     * Here are some examples:
     *
     *      x = string.gsub("hello world", "(%w+)", "%1 %1")
     *      -->; x="hello hello world world"
     *      
     *      x = string.gsub("hello world", "%w+", "%0 %0", 1)
     *      -->; x="hello hello world"
     *      
     *      x = string.gsub("hello world from Lua", "(%w+)%s*(%w+)", "%2 %1")
     *      -->; x="world hello Lua from"
     *      
     *      x = string.gsub("home = $HOME, user = $USER", "%$(%w+)", os.getenv)
     *      -->; x="home = /home/roberto, user = roberto"
     *      
     *      x = string.gsub("4+5 = $return 4+5$", "%$(.-)%$", function (s)
     *            return load(s)()
     *          end)
     *      -->; x="4+5 = 9"
     *      
     *      local t = {name="lua", version="5.3"}
     *      x = string.gsub("$name-$version.tar.gz", "%$(%w+)", t)
     *      -->; x="lua-5.3.tar.gz"
    */
    /** @tupleReturn */
    gsub(
        this: this,
        pattern: string,
        repl: string | Record<string, string | number> | { (this: void, ...args: string[]): string | number; },
        n?: number
    ): [string, number];

    /**
     * Receives a string and returns its length. The empty string `""` has length 0. Embedded zeros are counted, so
     *   `"a\000bc\000"` has length 5.
    */
    len(this: this): number;

    /**
     * Receives a string and returns a copy of this string with all uppercase letters changed to lowercase. All other
     *   characters are left unchanged. The definition of what an uppercase letter is depends on the current locale.
    */
    lower(this: this): string;

    /**
     * Looks for the first match of `pattern` (see 6.4.1) in the string `s`. If it finds one, then `match` returns the
     *   captures from the pattern; otherwise it returns nil. If `pattern` specifies no captures, then the whole match
     *   is returned. A third, optional numeric argument `init` specifies where to start the search; its default value
     *   is 1 and can be negative.
    */
    /** @tupleReturn */
    match(this: this, pattern: string, init?: number): string[];

    /**
     * Returns a binary string containing the values `v1`, `v2`, etc. packed (that is, serialized in binary form)
     *   according to the format string `fmt` (see 6.4.2).
    */
    pack(this: this, ...args: unknown[]): string;

    /**
     * Returns the size of a string resulting from `string.pack` with the given format. The format string cannot have
     *   the variable-length options '`s`' or '`z`' (see 6.4.2).
    */
    packsize(this: this): number;

    /**
     * Returns a string that is the concatenation of `n` copies of the string `s` separated by the string `sep`. The
     *   default value for `sep` is the empty string (that is, no separator). Returns the empty string if `n` is not
     *   positive. (Note that it is very easy to exhaust the memory of your machine with a single call to this
     *   function.)
    */
    rep(this: this, n: number, sep?: string): string;

    /**
     * Returns a string that is the string `s` reversed.
    */
    reverse(this: this): string;

    /**
     * Returns the substring of `s` that starts at `i` and continues until `j`; `i` and `j` can be negative. If `j` is
     *   absent, then it is assumed to be equal to -1 (which is the same as the string length). In particular, the call
     *   `string.sub(s,1,j)` returns a prefix of `s` with length `j`, and `string.sub(s, -i)` (for a positive `i`)
     *   returns a suffix of `s` with length `i`. If, after the translation of negative indices, `i` is less than 1, it
     *   is corrected to 1. If `j` is greater than the string length, it is corrected to that length. If, after these
     *   corrections, `i` is greater than `j`, the function returns the empty string.
    */
    sub(this: this, i: number, j?: number): string;

    /**
     * Returns the values packed in string `s` (see `string.pack`) according to the format string `fmt` (see 6.4.2). An
     *   optional `pos` marks where to start reading in `s` (default is 1). After the read values, this function also
     *   returns the index of the first unread byte in `s`.
    */
    /** @tupleReturn */
    unpack(this: this, s: string, pos?: number): unknown[];

    /**
     * Receives a string and returns a copy of this string with all lowercase letters changed to uppercase. All other
     *   characters are left unchanged. The definition of what a lowercase letter is depends on the current locale.
    */
    upper(this: this): string;
}
