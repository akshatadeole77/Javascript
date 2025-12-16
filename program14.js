

function FindLargest(x, y, z)
{
    if(x >= y && x >= z)
    {
        return x;
    }
    else if(y >= x && y >= z)
    {
        return y;
    }
    else
    {
        return z;
    }

 }


function main()
{
    let a = 10;
    let b = 90;
    let c = 80;
    let result = 0;



    result = FindLargest(a,b,c);

    console.log("Largest number is:", result);

}
main();