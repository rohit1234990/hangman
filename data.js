
var languages = ['C', 'C++', 'C#', 'JAVA', 'PYTHON',
                'Angelscript', 'Apex', 'APL', 'AppleScript', 'Arc', 'Arduino', 'ASP', 'AutoLISP',
                'Awk', 'Bash', 'Clojure', 'COBOL', 'CoffeeScript', 'ColdFusion', 'Common Lisp', 
                'Delphi', 'ECMAScript', 'FoxPro', 'Google AppsScript', 'Haskell', 'J', 'JADE',
                'Java', 'JavaScript', 'Lisp', 'Logo', 'Logtalk', 'LotusScript', 'Mathematica', 'MATLAB',
                'Monkey', 'MUMPS', 'NATURAL', 'Nemerle', 'Oberon', 'Pascal', 'Perl', 'PHP', 'Pike',
                'PILOT', 'Pliant', 'PostScript', 'PowerBasic', 'PowerScript', 'PowerShell', 'Prolog',
                'Puppet', 'Pure Data', 'REALBasic', 'Ruby', 'Rust', 'Sather', 'Scala', 'Scheme', 'Scilab',
                'Scratch', 'Simula', 'Simulink', 'Slate', 'Smalltalk', 'Smarty', 'SPARK', 'Squeak',
                'Squirrel', 'SuperCollider', 'thinBasic', 'Turing', 'TypeScript', 'VBScript',
                'Verilog', 'Whitespace', 'xBase', 'XQuery', 'yacc', 'Yorick', 'Z shell'] 


function uniqueLanguages() {
    var init = languages.length

    // uppercase all languages
    var lang = languages.map(function(element){
        return element.toUpperCase()
    })

    // sort all languages
    lang = lang.sort()
    
    // remove duplicates
    lang = new Set(lang)
    new_arr = []
    for(x of lang) {
        new_arr.push(x)
    }
    return new_arr
}            


