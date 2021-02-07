import {MonoError} from "./mono-error";
import {UIErrorType} from "./ui-error-type";

export const get = <T>(url: string): Promise<T> => {
    return fetch(url)
        .then((response) => {

            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else if (response.status === 400) {
                const error = new MonoError(response.statusText);
                error.setUiType(UIErrorType.MODAL);
                throw error;
            } else if (response.status === 401) {
                // try token refresh, log out if needed
                console.log("Refreshing tokens...")
            } else if (response.status === 403) {
                const error = new MonoError("You are not allowed to see this page");
                error.setUiType(UIErrorType.MODAL);
                throw error;
            } else if (response.status === 404) {
                const error = new MonoError(response.statusText);
                error.setUiType(UIErrorType.ERROR_BOX);
                throw error;
            } else if (response.status >= 500) {
                const error = new MonoError("Our system is experiencing issues at the moment, please try later.");
                error.setUiType(UIErrorType.ERROR_BOX);
                throw error;
            } else {
                throw new Error("Unhandled response code");
            }
        })
        .then((response) => response as T)
}
