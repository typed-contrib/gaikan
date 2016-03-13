// Type definitions for gaikan v2.0.2
// Project: https://github.com/Deathspike/gaikan
// Definitions by: Maxime LUCE <https://github.com/SomaticIT>
// Definitions: https://github.com/typed-contrib/gaikan

/**
 * Compiles a function for the input file, invokes it, and returns the output.
 * @param input - The path to the template file.
 * @param root - Data to be injected into the template.
 * @returns The compiled template.
 */
declare function gaikan(input: string, root: any): string;

/**
 * Compiles a function for the input file, invokes it, and returns the output.
 * @param input - The path to the template file.
 * @param root - Data to be injected into the template.
 * @param fragments - Each fragment.
 * @returns The compiled template.
 */
declare function gaikan(input: string, root: any, fragments: any): string;

/**
 * Compiles a function for the input file, invokes it, and returns the output.
 * @param input - The path to the template file.
 * @param root - Data to be injected into the template.
 * @param skipLayout - Indicates if the layout is skipped.
 * @param fragments - Each fragment.
 * @returns The compiled template.
 */
declare function gaikan(input: string, root: any, fragments: any, skipLayout: boolean): string;

/**
 * Compiles a function for the input file, invokes it, and returns the output in the given callback.
 * @param input - The path to the template file.
 * @param root - Data to be injected into the template.
 * @param callback - The result callback.
 */
declare function gaikan(input: string, root: any, callback: (result: string) => void): number;

/**
 * Compiles a function for the input file, invokes it, and returns the output in the given callback.
 * @param input - The path to the template file.
 * @param root - Data to be injected into the template.
 * @param fragments - Each fragment.
 * @param callback - The result callback.
 */
declare function gaikan(input: string, root: any, fragments: any, callback: (result: string) => void): number;

/**
 * Compiles a function for the input file, invokes it, and returns the output in the given callback.
 * @param input - The path to the template file.
 * @param root - Data to be injected into the template.
 * @param fragments - Each fragment.
 * @param callback - The result callback.
 * @param skipLayout - Indicates if the layout is skipped.
 */
declare function gaikan(input: string, root: any, fragments: any, callback: (result: string) => void, skipLayout: boolean): number;

declare namespace gaikan {
    export type TemplateFunction = (__r: any, root: any, __f: any) => string;
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
        /** Enables or disables template caching. When enabled, a compiled template is not compiled again. */
        enableCache: boolean;
        /** Enables or disables template compression. When enabled, compiled functions compress output. */
        enableCompression: boolean;
        /** An array with relative directories in which to search templates. Usused for expressjs. */
        directories: string[];
        /** Templates resolve from the root directory, which defaults to the main script directory. */
        rootDir: string;
        /** An array with allowed template file extensions. Usused for expressjs. */
        extensions: string[];
        /** Changes output to be the content fragment for the layout. Used when skipLayout is false. */
        layout: string;
    }

    /** Adding functions makes them available in each template. */
    export const alterant: Alterants;

    /** Adding functions makes them available in each template. */
    export const set: Sets;

    /** Gaikan options. */
    export const options: Options;

    /**
     * Compiles a function for the input file.
     * @param path - The input file path.
     */
    export function compileFromFile(path: string): TemplateFunction;

    /**
     * Compiles a function for the input string.
     * @param path - The input template string.
     */
    export function compileFromString(input: string): TemplateFunction;
}

export = gaikan;
