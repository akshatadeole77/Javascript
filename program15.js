
function ChkGreater(iNo)
{
    if (iNo > 100)
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
    let iValue=101;
    let bRet = false;


    bRet = ChkGreater(iValue);

    if(bRet == true)
    {
        console.log("greater");
    }
    else
    {
       console.log("smaller"); 
    }

    
}
main();