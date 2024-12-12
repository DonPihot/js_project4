
output();

function output()
{
    console.log("JavaScript");
}


function output_alrt()
{
    alert("Привет, Мир!");
}
output_alrt()



// Функция в js - это значение!

// Вот так можно вывести в алерт исходный код самой функции:

alert(output_alrt);

// Вот так можно вывести в консоли исходный код самой функции:

console.log(output_alrt)



//Espression функция, то бишь присвоенная переменной:

let sqrt = function(x) 
{
    return x*x;
}
console.log(sqrt(2));

sixtosix = sqrt(6);
console.log(sixtosix)



let text = String(prompt("Write some text: "));

text_testing(text)

function text_testing(txt)
{
    if (txt == "lorem")
    {
        console.log("У вас ошибка в тексте!");
    }

    else
    {
        console.log(txt);
    }
}



const fn = (x) =>
{
    if(x < 10)
    {
        console.log("Константа меньше 10")
    }

    else
    {
        console.log("Константа не меньше 10")
    }
}

fn(prompt("Число загадай и я поведаю тебе о нём:"));