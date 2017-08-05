function addPromise (a,b) {
    return new Promise(function(resolve,reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('One of them is not a number');
        }
    });
}

addPromise(1, 2).then(function(sum) {
    console.log(sum);
}, function(err) {
    console.log(err);
});

addPromise(1, 'b').then(function(sum) {
    console.log(sum);
}, function(err) {
    console.log(err);
});

addPromise(1).then(function(sum) {
    console.log(sum);
}, function(err) {
    console.log(err);
});
