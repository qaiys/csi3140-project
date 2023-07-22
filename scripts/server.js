const indexedDB = 
    window.indexedDB || 
    window.mozIndexedDB || 
    window.webkitIndexedDB ||
    window.msIndexedDB ||
    window.shimIndexedDB;

const request = indexedDB.open("Database", 1);
request.onerror = (event) => {
  console.error("An error occurred with IndexedDB");
  console.error(event);
}

request.onupgradeneeded = (event) => {
    const db = request.result;
    const store = db.createObjectStore("users", {autoIncrement: true});
    store.createIndex("username", "username", {unique: true});
    store.createIndex("password", "password", {unique: false});


}
request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("users", "readwrite");

    const store = transaction.objectStore("users");
    const usernameIndex = store.index("username");
    const passwordIndex = store.index("password");

    store.put({"id": 1, "username": "testUser1", "password":"abc123"});
    store.put({"id": 2, "username": "testUser2", "password":"qwerty", "name":"Jane Smith", "emailAddress":"jane.smith@gmail.com"});

    const userQuery = usernameIndex.get(["testUser1"]);

    userQuery.onsuccess = function () {
        console.log('userQuery', userQuery.result);
    }

    transaction.oncomplete = function () {
        db.close();
    }
}