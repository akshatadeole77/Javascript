

function FactRev(iNo)
{
    let i = 0;

    if(iNo <= 0)
    {
        iNo = -iNo;
    }
    console.log ("Factors in decreasing order are:", iNo);

    for(i = Math.floor (iNo/2); i>=1 ; i--)
    {
        if(iNo % i == 0)
        {
            console.log(i);
        }
    }

}
function main()
{
    let iValue = 10;

   FactRev(iValue);

   
}
main();
