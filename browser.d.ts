// Type definitions for gaikan v2.0.2
// Project: https://github.com/Deathspike/gaikan
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/typed-contrib/gaikan

/**
 * Compiles a function for the input file, invokes it, and returns the output.
 * @param input - The path to the template file.
 * @param root - Data to be injected into the template.
 * @returns The compiled template string.
 */
declare function gaikan(input: string, root: any): string;

/**
 * Compiles a function for the input file, invokes it, and returns the output.
 * @param input - The path to the template file.
 * @param root - Data to be injected into the template.
 * @param fragments - Each fragment.
 * @returns The compiled template string.
 */
declare function gaikan(input: string, root: any, fragments: gaikan.Fragments): string;

declare namespace gaikan {
    export type Fragments = { [key: string]: (runtime: typeof gaikan, root: any) => string; };
    export type TemplateFunction = (runtime: typeof gaikan, root: any, fragments?: Fragments) => string;
    export type AlterantFunction = (value: any) => string;
    export type SetFunction = (value: any) => string;

    export interface Alterants {
        [key: string]: AlterantFunction;
        
        break: AlterantFunction;
        decode: AlterantFunction;
        encode: AlterantFunction;
        lower: AlterantFunction;
        title: AlterantFunction;
        upper: AlterantFunction;
        url: AlterantFunction; 
    }
    export interface Sets {
        [key: string]: SetFunction;
        
        empty: SetFunction;
        sort: SetFunction;
    }
    
    export interface Options {
        /** Enables or disables template compression. When enabled, compiled functions compress output. */
        enableCompression: boolean;
    }
    
    /** Adding functions makes them available in each template. */
    export const alterant: Alterants;

    /** Adding functions makes them available in each template. */
    export const set: Sets;

    /** Gaikan options. */
    export const options: Options;

    /**
     * Compiles a function for the input string.
     * @param path - The input template string.
     */
    export function compileFromString(input: string): TemplateFunction;
}

export = gaikan;
