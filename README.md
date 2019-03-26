# TypeScript Lua Library Declarations
Lua library declarations for use with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

## Usage
Each declaration file is a complete set of declarations for a specific Lua version. Add the one that matches your lua version to your TypeScript project.

If you wish to disable the standard ES libraries and only use Lua's, add `lib.esnone.d.ts` to your project as well and set `noLib` in your TypeScript configuration.

Note that there are two versions for [LuaJIT](https://luajit.org/): `lib.luajit.d.ts` and `lib.luajit52.ts`. The later version should be used if you're using a version of LuaJIT compiled with [`LUAJIT_ENABLE_LUA52COMPAT`](https://luajit.org/extensions.html).
