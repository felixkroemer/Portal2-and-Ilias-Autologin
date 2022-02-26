if(document.URL.match(/ilias.uni-mannheim.de\/login.php/)) {
    const elements = document.getElementsByClassName('ilFormValue');
    for(let element of elements) {
        if(element.children.length == 1) {
            window.location = element.children[0].getAttribute('href');
        }
    }
}

if(document.URL.match(/portal2.uni-mannheim.de\/portal2/)) {
    const elements = document.getElementsByClassName("link_new_window");
    if(elements.length == 1) {
        // check if logout button exists
        if(document.getElementsByClassName("iconfont-exit").length == 0) {
            window.location = elements[0].getAttribute('href');
        }
    }
}

function attemptLogin() {
    if(document.getElementById('username').value != "" && document.getElementById('password').value != "") {
        if(document.getElementsByClassName('errors').length == 0) {
            document.getElementsByName('submit')[0].click();
        }
    }
}

if(document.URL.match(/cas.uni-mannheim.de\/cas\/login/)) {
    // username and password may not be set immediately 
    setTimeout(attemptLogin, 500);
}