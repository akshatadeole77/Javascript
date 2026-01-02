
function DisplayFactors(no)
{
    let iFact = 0;

    for(iFact = 1; iFact <= (no/2); iFact++)
    {
        if((no % iFact == 0))
        {
            console.log(iFact);
        }
    }
}
function main()
{
    let iValue = 10;
    let iRet = 0;

    iRet = DisplayFactors(iValue);

    
    
}

main();