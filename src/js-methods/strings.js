export default function runStringMethods() {    
    document.body.appendChild(replaceWord('reza'));
    function replaceWord(word) {
        const txt = "Definition and Usage\
        The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.\
        Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced.\
        To replace all occurrences of a specified value, use the global (g) modifier (see \"More Examples\" below).\
        Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.\
        This method does not change the original string.";
        const index = txt.indexOf("value");
        const subStr = txt.slice(index, txt.length - 1);
        const replacedStr = subStr.replace(/value/ig, word.toUppercase());
        const span = document.createElement('span').appendChild(document.createTextNode(replacedStr));
        return span;
    }
}

