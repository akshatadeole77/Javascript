

function NonFact(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }
    console.log("Non Factors are:", iNo);

    for(i = 1; i < iNo ; i++)
    {
        if(iNo % i != 0)
        {
            console.log(i);
        }
    }

}
function main()
{
    let iValue = 12;

    NonFact(iValue);

    
}
main();
