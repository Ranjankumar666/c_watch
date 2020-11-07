#include <stdio.h>
#include <stdlib.h>
#include <string.h>



struct Node{
  char data;
  struct Node* next;
};

struct Node* head;

void print(){
  struct Node* temp=head;

  while(temp!=NULL){
    printf("%c ",temp->data );
    temp=temp->next;
  }

  printf("\n");
}

void push(char d){
  struct Node* temp=(struct Node* )malloc(sizeof(struct Node));
  temp->data=d;
  temp->next= head;
  head=temp;

}

void pop(){
  struct Node* temp1=head;
  if(temp1==NULL)
  {  printf("Empty\n"); return;}
  head=temp1->next;
  free(temp1);
}
void top(){
  struct Node* temp1=head;
  printf("%d\n",temp1->data );
}
void isEmpty(){
  (head==NULL)?printf("Empty\n"):printf("Not Empty\n");
}


int check(char p[],int n){
  struct Node* temp=head;


  for (int i = 0; i<n; ++i)
  {
    if(p[i]=='(' || p[i]=='{' || p[i]=='[')
    {push(p[i]);}

    if(p[i]==')' || p[i]=='}' || p[i]==']')
    {
      
      if(temp==NULL )
        return 0;
      else if(p[i]==')' && temp->data!='(')
        return 0;
      else if(p[i]=='}' && temp->data!='{')
        return 0;
      else if(p[i]==']' && temp->data!='[')
        return 0;
      else pop();

    }   
  }

  (temp==NULL)?0:1;

}

int main(){
  head=NULL;

  char p[]="{Ranjan";
  int n=strlen(p);


  if(check(p,n))
    printf("False\n");
  else 
    printf("True\n");
  }

  

  
