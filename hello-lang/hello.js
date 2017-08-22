var contents = document.querySelectorAll("script[type='text/hello']");
for (var h = 0; h < contents.length; h++) {
    var helloCode = contents[h].textContent;
    eval(parse(helloCode));
}

function parse(txt, node) {
    var lines = txt.split("\n");
    var newLines = [];
    for (var i=0;i<lines.length;i++) {
      if (lines[i].length > 0) {
        var newLine = lines[i].replace("hello ", "printHello('") + "');";
        console.log(newLine);
        newLines.push(newLine);
      }
    }
    return newLines.join("");
}

function printHello(txt) {
    var div = document.createElement('div');
    div.innerText = txt;
    console.log(contents)
    document.querySelector("body").appendChild(div);
}
