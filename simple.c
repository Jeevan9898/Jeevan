#include<stdio.h>
#include<float.h>

int main(){
    double n1,n2,result;
    char op;

    printf("Enter an Operator {+,-,*,/}:");
    scanf("%c",&op);

    printf("Enter First Number:");
    scanf("%lf",&n1);

    printf("Enter Second Number:");
    scanf("%lf",&n2);

    switch(op){
        case '+':
        result=n1+n2;
        printf("%.2lf+%.2lf=%.2lf",n1,n2,result);
        break;

        case '-':
        result=n1-n2;
        printf("%.2lf-%.2lf=%.2lf",n1,n2,result);
        break;

        case '*':
        result=n1*n2;
        printf("%.2lf*%.2lf=%.2lf",n1,n2,result);
        break;

        case '/':
        if(n2!=0){
            result=n1/n2;
            printf("%.2lf/%.2lf=%.2lf",n1,n2,result);
        }else{
            printf("ERROR! DIVISION NOT POSSIBLE..");
        }
        break;

        default:
        printf("ERROR! ENTER WRITE OPERATOR");
        break;

    }       
    return 0;   
}
