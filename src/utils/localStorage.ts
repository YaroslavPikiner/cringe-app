export const setItem = (name: string, value: string) => localStorage.setItem(name, value);

export const getItem = (name: string) => localStorage.getItem(name);

export const removeKey = (name: string) => localStorage.removeItem(name);

export const clearLocalStorage = () => localStorage.clear();
