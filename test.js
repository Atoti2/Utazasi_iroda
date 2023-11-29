let test = document.createElement('ol')
document.querySelector('.tests').appendChild(test)

const showTestResult = (assert, result) => {
    if(result){
        test.innerHTML += `<li>${assert} ✅</li>`;
    }else{
        test.innerHTML += `<li>${assert} ❌</li>`;
    }    
}

let h1 = document.querySelector('h1')

let assert = 'h1-es tag létezik'
showTestResult(assert, h1)