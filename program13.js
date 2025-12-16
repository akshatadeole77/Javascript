

function SumNonFact(iNo)
{
    let i = 0;
    let iSum = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }
    for(i=1;i<iNo;i++)
    {
        if (iNo % i != 0)
        {
            iSum = iSum + i;
            
        }
    }
    return iSum;
}
function main()
{
    let iValue = 10;
    let iRet = 0;

    iRet = SumNonFact(iValue);

    console.log("Summation of non factors  is :",iRet);

}
main();
