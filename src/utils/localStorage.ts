/* eslint-disable class-methods-use-this */
class LocalStorageApi {
  get = (key: string) => {
    try {
      const serializeData = localStorage.getItem(key);

      if (serializeData === null) {
        return undefined;
      }

      return JSON.parse(serializeData) as unknown;
    } catch (error) {
      return undefined;
    }
  };

  set = (key: string, data: unknown): void => {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  remove = (key: string): void => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
}

const localStorageApi = new LocalStorageApi();

export default localStorageApi;
