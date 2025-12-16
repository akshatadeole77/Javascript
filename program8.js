

function ChkVowel(cValue)
{
    if(cValue == 'A' || cValue == 'E' || cValue == 'I' || cValue == 'O' || cValue == 'U' ||
       cValue == 'a' || cValue == 'e' || cValue == 'i' || cValue == 'o' || cValue == 'u')
    {
        return true;
    }
    else
    {
        return false;
    }
}

function main()
{
    let cValue = 'Z';
    let bRet = false;

    

    bRet = ChkVowel(cValue);

    if(bRet == true)
    {
        console.log("TRUE");
    }
    else
    {
        console.log("FALSE");
    }

   
}
main();
