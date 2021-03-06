# TypeScript Lua Library Declarations
Lua library declarations for use with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

## Usage
Each declaration file is a complete set of declarations for a specific Lua version. Add the one that matches your lua version to your TypeScript project.

Note that there are two versions for [LuaJIT](https://luajit.org/): `lib.luajit.d.ts` and `lib.luajit52.ts`. The later should be used if you're using a version of LuaJIT compiled with [`LUAJIT_ENABLE_LUA52COMPAT`](https://luajit.org/extensions.html).

## Helper types
TypescriptToLua supports type annotations which allow additional features of Lua to be accessible from Typescript. Add `lib.tstl.d.ts` to your project to access convenience types already set up with these annotations. See [TypescriptToLua Compiler Annotations](https://typescripttolua.github.io/docs/advanced/compiler-annotations) for more details.

## Disabling Javascript Libraries
If you wish to disable the standard ES libraries and only use Lua's, add `lib.esnone.d.ts` to your project and set `noLib` in your TypeScript configuration.
