import { Parser, ParserCallback } from './parser.interface';
export declare class FragmentsParser implements Parser {
    constructor();
    private static delimiters;
    private static delimRegexp;
    private static defaultErrorCallback;
    private getParameter(parameters, fragment, strict?);
    private compileFragment(fragment, parameters);
    compile(rawTranslation: string, parameters: Object, onError?: ParserCallback): string;
}
