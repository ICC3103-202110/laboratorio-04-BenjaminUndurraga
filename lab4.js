const prompt = require('prompt-sync')();

function view(counter){
    return (`count: ${counter}\n (+)  (-)\n(q) for quit`)
}

function update(msg, counter){
    if (msg==='+')
    return (counter+1)
    else if (msg==='-')
    return (counter-1)
    else
    return (counter)
}

function app(counter){
    while(true){
        console.clear();
        console.log(view(counter));
        let msg = prompt('what would you do?');
        if (msg === 'q')
        break
        else
        counter = update(msg,counter);
    }
}

app(0)