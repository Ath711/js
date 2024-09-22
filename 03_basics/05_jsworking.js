/*

1. javascript execution context



1.1 global execution context and refer to this

browser exectution context and node is differenet. browser this value is window
node has empty {}



1.2 function execution context



1.3 eval execution context



1.4 js code runs in 2 phases 
a. memory creatin phase -> variables or whatever declared memory is allocated
b. execution phase -> execution done here

for e.g, in a simple code to add 2 numbers
first there will be global execution scope
then memory phase, in this variables will be assigned undefined, function will be assigned with definition
then execution phase, in this actual execution is done, for function call new varibales environment and a excetion thread is created, under this again memory phase and excution context is there, after returning the value back to global scope the function context is deleted.



2. call stack

there is a stack, which first has global execution scope
function come and go from this stack, meaning when we want to execute that function its pushed in stack and after exection its poped


*/