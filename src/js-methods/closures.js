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

}
