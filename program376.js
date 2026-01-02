


class Addition
{
    

    constructor(A, B)  
    {
        this.No1 = A;
        this.No2 = B;

        let iSum = 0;
        {
            iSum = A+B;

            console.log("Addition is:",iSum);
        }
    }
}
class Substraction
{
    

    constructor(A, B)  
    {
        this.No1 = A;
        this.No2 = B;

        let iSub = 0;
        {
            iSub = A-B;
            
            console.log("Substraction is:",iSub);
        }
    }
}
function main()
{
   
   let obj1 = new Addition(50,10);

   let obj2 = new Substraction(50,10);

   


}


main();