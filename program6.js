
function Display(iNo,iFrequency)

{
    let iCnt = 0;

    for(iCnt=1;iCnt<=iFrequency;iCnt++)
    {
        console.log(iNo);
    }
}
function main()
{
    let iValue = 10;
    let iCount = 5;

  

    Display(iValue,iCount);

    return 0;
}
main();