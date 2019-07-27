module.exports.absolute = function(value){
    if(value>0) return value;
    if(value<0) return -value;
    return 0;
}
module.exports.greeting = function(name){
    return "hello"+name;
}
module.exports.getCurrencies = function() {
    return ['USD', 'INR', 'CAD'];
}
module.exports.getProducts = function(pId) {
    return { id:pId, price:10 };
}
module.exports.registerUser = function(username) {
    if(!username) {
        throw new Error('Username is required!!!');
    }
    return { id:123, username:username };
  }
module.exports.getUserPromise = function(userId) {
    return Promise.resolve({id:userId, name:'User 1', email:'user1@gmail.com'});
}
module.exports.getUserCallback = function(userId, callback) {
    // make calls to server and get details
    callback({id:userId, name:'User 1', email:'user1@gmail.com'});
}
