export interface FormAndInputI {
    [key: string]: string;
}

export interface InputGetArgs {
    placeholder: FormAndInputI;
    classAdd?: FormAndInputI;
    elementTypes?: FormAndInputI;
}

export interface ErrorType {
    noError: boolean;
    [key: string]: string | string[] | boolean | undefined;
}


export enum FetchStatusTypes {
    FETCH_NOT_STARTED = "FETCH_NOT_STARTED",
    FETCH = "FETCH",
	FETCH_SUCCESS = "FETCH_SUCCESS",
	FETCH_ERROR = "FETCH_ERROR",
}
