

function MultFact(iNo)
{
    let i = 0;
    let iMult = 1;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }
    for(i = 1;i <= Math.floor(iNo/2); i++)
    {
        if(iNo % i == 0)
        {
            iMult = iMult * i;
            
        }
    }
    return iMult;
    

}

function main()
{
    let iValue=18;
    let iRet=0;

    iRet = MultFact(iValue);

    console.log("Multiplication is : ",iRet);

}
main();
