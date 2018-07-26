# AngularJSUniqueFilter
Angular JS filter that takes a collection and key name to find unique values for that key. 

Modified from https://tutorialedge.net/javascript/angularjs/removing-duplicates-from-ng-repeat/

I used this concept and tweaked it to allow for nested objects delimited by '.' as it was not built to allow this.

`<li ng-repeat="item in items | unique:'supplier.name'>{{item.supplier.name}}</li>`
