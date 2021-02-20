import {MonoError} from "./mono-error";

export const get = async <T>(url: string): Promise<T> => {
    return fetch(url)
        .then( async (response) => {

            if (response.status >= 200 && response.status < 300) {
                return response.json();
            } else if (response.status === 400) {
                throw new MonoError(response.statusText);
            } else if (response.status === 401) {
                // try token refresh or show login screen etc.
                console.log("Redirecting to login screen....")
            } else if (response.status === 403) {
                throw new MonoError("You are not allowed to see this page");
            } else if (response.status === 404) {
                throw new MonoError(response.statusText);
            } else if (response.status >= 500) {
                throw new MonoError("Our system is experiencing issues at the moment, please try later.");
            } else {
                throw new Error("Unhandled response code");
            }
        })
        .then((response) => response as T)
}
