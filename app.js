// We are going to use the module pattern in this project.
// Why: private and public data, encapsulation and separation of concerns.
// Read https://coryrylan.com/blog/javascript-module-pattern-basics for more info about Module Pattern

// We create modules because we want to keep pieces of code that are related 
// to one another together inside of separate, independent and organized units.

// Inside each of the module, we will have variables and functions that are private
// so no other code can override the data. This is the concept of data encapsulation.

// Immediately-Invoked Function Expression (IIFE)


// BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description,value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems:{
            exp: [],
            inc: []
        },
        totals:{
            exp:0,
            inc:0
        }
        
    };

    return {
        addItem: function(type, des, val){
            var newItem, ID;
            

            // Create new ID
            if (data.allItems[type].length >0){
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            };
            

            // Create new item based on 'inc" (income) or 'exp' type
            if (type === 'exp'){
                newItem = new Expense(ID,des,val);
            }else if (type === 'inc'){
                newItem = new Income(ID,des,val);
            }

            // Push the new item into our data structure
            data.allItems[type].push(newItem);

            return newItem;
            
        },

        testing: function(){
            console.log(data);
        }
        
    }
})();






// UI CONTROLLER
var UIController = (function(){

    // Create an object here to store the information of the DOM element, so it will cause less hassle if any of them needs to be changed
    var DOMstrings ={
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',


    }

    return {

        getinput: function(){
            // Return the user input as an object
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either 'inc' or 'exp'
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }

        },

        getDOMstrings: function(){
            return DOMstrings;
        },

        addListItem: function(obj, type){
            var html,newHtml,element;
            // Create HTML string with placeholder text
            if (type=== 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            
            }       
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id',obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function(){
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            console.log(fields);
            fieldsArr = Array.prototype.slice.call(fields);
            console.log(fieldsArr);
            fieldsArr.forEach(function(current, index, array){
                console.log(current);
                //console.log(current.value);
                current.value = "";
                
                
            });
            fieldsArr[0].focus();
        },
        
    }

})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){


    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress',function(event){
            
            if (event.keyCode === 13 || event.which === 13){
                console.log('Enter key was pressed');
                ctrlAddItem();
            }
    
        });
    }
    

    var ctrlAddItem = function(){

        var input, newItem;

        // 1. Get the user field input data
        input = UICtrl.getinput();
        console.log(input);


        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);


        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);

        // 4. Clear the fields

        UICtrl.clearFields();

        // 4. Calculate the budget



        // 5. Display the budget on the UI
        
    };

    return {
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    }



})(budgetController,UIController);


// Initialization Function
controller.init();