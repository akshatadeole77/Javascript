function DisplayConvert(CValue)
{
    let ch = ' ';

    if (CValue >= 'A' && CValue <= 'Z')
    {
        ch = String.fromCharCode(CValue.charCodeAt(0) + 32);
        console.log("Converted Character:", ch);
    }
    else if (CValue >= 'a' && CValue <= 'z')
    {
        ch = String.fromCharCode(CValue.charCodeAt(0) - 32);
        console.log("Converted Character:", ch);
    }
    else
    {
        console.log("Invalid");
    }
}

function main()
{
    let cValue = 'A';   
    DisplayConvert(cValue);
}

main();
