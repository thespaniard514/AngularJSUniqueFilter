angular.module('uniqueFilter', [])
.filter('unique', function () {
        // we will return a function which will take in a collection
        // and a keyname
        return function (collection, keyname) {
            // we define our output and keys array;
            var output = [],
                keys = [];

            // we utilize angular's foreach function
            // this takes in our original collection and an iterator function
            angular.forEach(collection, function (item) {
                // split keyname on . in case we have multiple layers
                var keynameArray = keyname.split('.');
                var parent = null;             
                // loop through layers of keynames to find nested values
                keynameArray.forEach(function (x) {
                    // if first loop, set parent to the collection item
                    if (!parent) {
                        parent = item;
                    }
                    key = parent[x]; // set the key equal to this level property
                    parent = parent[x]; // set the parent to this level's property in case we need to loop deeper
                });                
                
                // if it's not already part of our keys array
                if (keys.indexOf(key) == -1) {
                    // add it to our keys array
                    keys.push(key);
                    // push this item to our final output array
                    output.push(item);
                }
            });
            // return our array which should be devoid of
            // any duplicates
            return output;
        };
    });
