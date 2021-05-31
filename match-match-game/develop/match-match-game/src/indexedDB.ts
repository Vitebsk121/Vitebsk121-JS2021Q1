import { getPlayersList } from './shared/users';

const baseName = 'Vitebsk121';
const storeName = 'Users';

export function connectDB(f: Function) {
  const request = indexedDB.open(baseName, 1);
  request.onerror = function (err) {
    console.log(err);
  };
  request.onsuccess = function () {
    f(request.result);
  };
  request.onupgradeneeded = function () {
    request.result.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
    connectDB(f);
  };
}

export function getFile() {
  connectDB((db: IDBDatabase) => {
    const request = db.transaction([storeName], 'readonly').objectStore(storeName).getAll();
    request.onerror = (err) => console.log(err);
    request.onsuccess = function () {
      getPlayersList(request.result);
    };
  });
}

export function setFile(user: Object) {
  connectDB((db: IDBDatabase) => {
    const request = db.transaction([storeName], 'readwrite').objectStore(storeName).add(user);
    request.onerror = (e) => console.log(e);
    request.onsuccess = function () {
      return request.result;
    };
  });
}
