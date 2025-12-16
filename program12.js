

function FactDiff(iNo)
{
    let i = 0;
    let iSumFact = 0;
    let iSumNonFact = 0;

    if(iNo < 0)
    {
        iNo = -iNo;
    }
    for(i=1;i<iNo;i++)
    {
        if (iNo % i == 0)
        {
            iSumFact = iSumFact + i;
        }
        else
        {
            iSumNonFact = iSumNonFact + i;
        }
    }
    return iSumFact - iSumNonFact;
}
function main()
{
    let iValue =10;
    let iRet = 0;

    iRet = FactDiff(iValue);

    console.log("Difference between summation of factors and non-factors is:",iRet);

    
}
main();
