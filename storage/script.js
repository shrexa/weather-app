// implement a client side cache mechanism system!!
// define - cache

/**
 * Any information that we need frequently!!
 * We can store that information in a place that is easily accessible
 * and provide super fast retrieval of data and information needed.
 * Information should not be frequently changing data!!
 * 
 * Any change in information at source level should also change cache.
 * Information that is being stored should remain in sync with our DBs 
 * Information should have some expiry!!
 * 
 * 
 * -> the place that stores this information is known as a cache memory
 * -> Computer level
 *    -> super fast cache memory!!
 * -> DB level
 *    -> Redis
 * -> client level
 *    -> in browser or mobile phone
 * -> practical life too!! ( haha )
*/

const url = 'https://openweathermap.org/data/2.5/weather?id=2643743&appid=439d4b804bc8187953eb36d2a8c26a02';

// Type of storage
/**
 * 1. Local Storage
 * -> store item in the browser memory for longer period of time
 * 2. Session storage
 * -> stores a given piece of information for a given session duration only!
 * 3. Cookies
 * -> 
*/

// method - window.localStorage

window.localStorage.clear();

window.localStorage.setItem('user_name','sachin duhan')
// if you want to store an object? how can we do that
const obj = {
    name: 'sachin',
    age: 12
}

const str = JSON.stringify(obj);
window.localStorage.setItem('my_obj', str);

// how can we get item.
console.log(window.localStorage.getItem('user_name'));

// console.log(JSON.stringify('sachin duhan'));
// console.log(JSON.parse('sachin duhan')); // parsing failed for string!!

const str_obj = window.localStorage.getItem('my_obj');
const _obj = JSON.parse(str_obj);
// console.log(str_obj, _obj)


// what can be set in the setItem?
// -> only string and number (not objects) can be set in the local storage.
const val = window.localStorage.getItem('key_that_does_not_exist');
console.log(val)

localStorage.removeItem('my_obj');

const len = localStorage.length;
console.log(len);

/**
 * 1. clear() -> remove all the items
 * 2. setItem(key, value) -> sets a key value pair in the localstorage
 * 3. getItem(key) -> return value of given key from localstorage
 * 4. removeItem(key) -> removes the key from the localstorage
 * 5. length -> given the total number of keys in the localstorage
 * 6. key() -> return the name of key at ith index.
*/

// method window.sessionStorage
/**
 * 1. clear() -> remove all the items
 * 2. setItem(key, value) -> sets a key value pair in the sessionStorage
 * 3. getItem(key) -> return value of given key from sessionStorage
 * 4. removeItem(key) -> removes the key from the sessionStorage
 * 5. length -> given the total number of keys in the sessionStorage
 * 6. key() -> return the name of key at ith index.
*/

//  ! Browser cache
/**
 * Cache.match(request, options)
 * -> Returns a Promise that resolves to the response 
 *    associated with the first matching request in the Cache object.
 * 
 * Cache.matchAll(request, options)
 * -> Returns a Promise that resolves to an array of all 
 *    matching responses in the Cache object.
 * 
 * Cache.add(request)
 * -> Takes a URL, retrieves it and adds the resulting 
 *    response object to the given cache. This is 
 *    functionally equivalent to calling fetch(), then 
 *    using put() to add the results to the cache.
 * 
 * Cache.addAll(requests)
 * -> Takes an array of URLs, retrieves them, and adds 
 *    the resulting response objects to the given cache.
 * 
 * Cache.put(request, response)
 * -> Takes both a request and its response and adds it 
 *    to the given cache.
 * 
 * Cache.delete(request, options)
 * -> Finds the Cache entry whose key is the request, 
 *    returning a Promise that resolves to true if a matching Cache entry is found and deleted. If no Cache entry is found, the promise resolves to false.
 * 
 * Cache.keys(request, options)
 * -> Returns a Promise that resolves to an array of 
 *    Cache keys.
 * 
 */