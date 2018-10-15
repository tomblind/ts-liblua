//MIT License
//
//Copyright (c) 2018 Tom Blind
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

/**
* Proxies for standard TS lib to allow compiling with only the lua api.
*
* To do this, specify compilerOptions.lib as an empty array in tsconfig.json and include this file.
*/
interface SymbolConstructor
{
	readonly iterator: symbol;
}

declare var Symbol: SymbolConstructor;

interface IteratorResult<T>
{
	done: boolean;
	value: T;
}

interface Iterator<T>
{
	next(value?: any): IteratorResult<T>;
	return?(value?: any): IteratorResult<T>;
	throw?(e?: any): IteratorResult<T>;
}

interface IterableIterator<T> extends Iterator<T>
{
	[Symbol.iterator](): IterableIterator<T>;
}

interface Iterable<T>
{
	[Symbol.iterator](): Iterator<T>;
}

declare interface Array<T>
{
	[Symbol.iterator](): IterableIterator<T>;
	[index: number]: T;
	readonly length: number;
}

declare interface String
{
	[index: number]: string;
	readonly length: number;
}

declare interface Object
{
	[index: number]: any;
	[key: string]: any;
}

declare interface Function
{
	(...args: any[]): any;
}

declare interface Boolean {}
declare interface Number {}
declare interface IArguments {}
declare interface RegExp {}
