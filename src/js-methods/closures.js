export default function runClosureMethods() {

    const pubVar = 'this public var is for doSomething function, but every function in global scope can modify it';
    function doSomething() {
        console.log(pubVar);
    }
    doSomething();


    function makeFunction() {
        const prtVar = 'this is private var';
        function closure() {
            console.log('closure have access to private [name] variable of makeFunction() ==>', prtVar);
        }
        closure();
    }
    makeFunction();


    function outerFunc() {
        var name = 'private var';

        function closure() {
            name = name.concat('+')
            console.log('closure have acces to private var of outer func ==> ', name)
        }
        return closure;
    }
    var closure = outerFunc()
    closure();
    closure();



    //IIFE counter closure 
    var counter = (function() {
        var privateCounter = 0;
        function changeCounter(num) {
            privateCounter += num;
        }

        return {
            value : function() {
                return privateCounter;
            },

            increment : function() {
                changeCounter(1)
            },

            decrement : function() {
                changeCounter(-1)
            }
        }

    })()
    console.log('counter.increment: ', counter.increment());
    console.log('counter.value', counter.value());
    console.log('counter.increment', counter.increment());
    console.log('counter.increment', counter.increment());
    console.log('counter.increment', counter.increment());
    console.log('counter.decrement', counter.decrement());
    console.log('counter.value', counter.value());



    //closure encapsulation and data hiding
    var makeCounter = function() {
        var privateCounter = 0;
        function changeCounter(num) {
            privateCounter += num
        }

        return {
            value: function() {
                return privateCounter;
            },

            increment: function() {
                changeCounter(1);
            },
            
            decrement: function() {
                changeCounter(-1);
            }
        }
    }
    var counter1 = makeCounter();
    console.log('counter1.increment: ', counter1.increment());
    console.log('counter1.value', counter1.value());
    console.log('counter1.increment', counter1.increment());
    console.log('counter1.increment', counter1.increment());
    console.log('counter1.increment', counter1.increment());
    console.log('counter1.decrement', counter1.decrement());
    console.log('counter1.value', counter1.value());
    var counter2 = makeCounter();
    console.log('counter2.increment: ', counter2.increment());
    console.log('counter2.value', counter2.value());
    console.log('counter2.increment', counter2.increment());
    console.log('counter2.increment', counter2.increment());
    console.log('counter2.increment', counter2.increment());
    console.log('counter2.decrement', counter2.decrement());
    console.log('counter2.value', counter2.value());


    //closure in loop
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');
    input1.id = 'input1';
    input2.id = 'input2';
    input3.id = 'input3';
    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(input3);

    function showPlaceholder(item) {
        document.getElementById(item.id).placeholder = item.placeholder;
    }

    function setupPlaceholder() {
        var data = [
            {'id': 'input1', 'placeholder': 'this is placeholder of input1'},
            {'id': 'input2', 'placeholder': 'this is placeholder of input2'},
            {'id': 'input3', 'placeholder': 'this is placeholder of input3'}
        ];

        for(var i = 0; i < data.length; i++) {
            var item = data[i];
            document.getElementById(item.id).onclick = function() {
                showPlaceholder(item);
            }
        }
    }
    setupPlaceholder();

}
