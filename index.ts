import { question } from 'readline-sync';

type Operator = '+' | '-' | '*' | '/';

function main():void
{
    const firstStr: string = question('Enter first number:\n');
    const operator: string = question('Enter operator:\n');
    const secondStr: string = question('Enter second number:\n');

    const isValid: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if(isValid)
    {
        const firstn: number = parseInt(firstStr);
        const secondn: number = parseInt(secondStr);
        const result = calculate(firstn,operator as Operator,secondn); 

        console.log(result);
    }
    else{
        console.log('\nInvalid Input\n');
        main()
    }
}

function calculate(firstn: number, operator: string, secondn: number)
{
    switch(operator)
    {
        case '+':
            return firstn + secondn;
        case '-':
            return firstn - secondn;
        case '*':
            return  firstn * secondn;
        case '/':
            return firstn / secondn;
    }
}

function isOperator(operator: string): boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function isNumber(str: string): boolean
{
    const maybeNum = parseInt(str);
    const isnum: boolean = !isNaN(maybeNum);
    return isnum;
}
main();