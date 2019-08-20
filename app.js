// We are going to use the module pattern in this project.
// Why: private and public data, encapsulation and separation of concerns.
// Read https://coryrylan.com/blog/javascript-module-pattern-basics for more info about Module Pattern

// We create modules because we want to keep pieces of code that are related 
// to one another together inside of separate, independent and organized units.

// Inside each of the module, we will have variables and functions that are private
// so no other code can override the data. This is the concept of data encapsulation.

// Immediately-Invoked Function Expression (IIFE)



var budgetController = (function(){

})();

var UIController = (function(){
    //For Testing
    var add = function(a){
        return a + 6;
    }
    var minus = function(b){
        console.log(b-3);
    }
    return {
        publicTest: function(){
            return add(3);
        },
        publicTest2: function(b){
            minus(b);
        }
    }


})();


var controller = (function(budgetCtrl, UICtrl){
    //For testing
    var y = UICtrl.publicTest();
    var z = UICtrl.publicTest2(8);

    return {
        publicTest3: function(){
            console.log(y)
        },
        publicTest4: function(){
            console.log(z);
        }
    }

})(budgetController,UIController);