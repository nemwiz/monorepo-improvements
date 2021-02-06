export const get = <T>(url: string): Promise<T> => {
    return fetch(url)
        .then((response) => response.json())
        .then((response) => response as T)
}
