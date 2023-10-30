// На этот раз ни истории, ни теории. В примерах ниже показано, как написать функцию accum:
// Примеры:
// accum("abcd")        ->   "A-Bb-Ccc-Dddd"
// accum("RqaEzty")     ->   "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt")        ->   "C-Ww-Aaa-Tttt"

function accum(s) {
    let str = '';
    for (let i = 0; i < s.length; i++) {
        str += s[i].toUpperCase()
        for (let k = 0; k < i; k++) {
            str += s[i].toLowerCase();
        }
        if (i !== s.length - 1) {
            str += '-'
        }
    }
    return str
}

//console.log(accum("abcd"));
//console.log(accum("RqaEzty"));
//console.log(accum("cwAt"));
