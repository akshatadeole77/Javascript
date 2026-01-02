#include<iostream>
using namespace std;

class Demo
{
    public:
        int iNo1, iNo2;

        Demo(int A, int B)
        {   
            cout<<"Inside constructor\n";
            
            this->iNo1 = A;
            this->iNo2 = B;
        }

};

int main()
{
    Demo *obj = new Demo(10,11);


    return 0;
}