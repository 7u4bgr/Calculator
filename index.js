function MyFunc1() {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let cavab = Number(name)+Number(surname)
    console.log(name,surname,cavab);
    document.getElementById('h1').innerHTML=cavab
}
function MyFunc2() {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let cavab = Number(name)-Number(surname)
    console.log(name,surname,cavab);
    document.getElementById('h1').innerHTML=cavab
}
function MyFunc3() {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let cavab = Number(name)*Number(surname)
    console.log(name,surname,cavab);
    document.getElementById('h1').innerHTML=cavab
}
function MyFunc4() {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let cavab = Number(name)/Number(surname)
    console.log(name,surname,cavab);
    document.getElementById('h1').innerHTML=cavab
}