export default function runStringMethods() {   

    document.body.appendChild(replaceWord('reza'));
    document.body.appendChild(strToList())

    function replaceWord(word) {
        const txt = "Definition and Usage\
        The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.\
        Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced.\
        To replace all occurrences of a specified value, use the global (g) modifier (see \"More Examples\" below).\
        Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.\
        This method does not change the original string.";
        const index = txt.indexOf("value");
        const subStr = txt.slice(index, txt.length - 1);
        const replacedStr = subStr.replace(/value/ig, word.toUpperCase());
        const span = document.createElement('span');
        span.appendChild(document.createTextNode(replacedStr));
        return span;
    }

    function strToList() {
        const txt = "The slice() Method"+
        "slice() extracts a part of a string and returns the extracted part in a new string."+
        "The method takes 2 parameters: the start position, and the end position (end not included)."+
        "This example slices out a portion of a string from position 7 to position 12 (13-1):"+
        "Remember: JavaScript counts positions from zero. First position is 0."+
        "If a parameter is negative, the position is counted from the end of the string."+
        "This example slices out a portion of a string from position -12 to position -6:";
        const txtArr = txt.split('.');
        const list = document.createElement('ul');
        txtArr.forEach(function(item){
            const li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        }) 
        return list;
    }
}

