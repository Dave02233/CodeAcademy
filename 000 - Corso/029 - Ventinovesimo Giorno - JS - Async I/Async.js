/*
The event loop is made up of these parts:

Memory Heap
Call Stack
Event Queue
Event Loop
Node or Web APIs
Let’s take a closer look at each part before we put it all together.

The Heap
The heap is a block of memory where we store objects in an unordered manner. JavaScript variables and objects that are currently in use are stored in the heap.

The Call Stack
The stack, or call stack, tracks what function is currently being run in your code.
When you invoke a function, a frame is added to the stack. Frames connect that function’s arguments and local variables from the heap. 
Frames enter the stack in a last in, first out (LIFO) order. In the code snippet below, a series of nested functions are declared, 
then foo() is called and logged.

The Event Queue
The event queue is a list of messages corresponding to functions that are waiting to be processed. 
In the diagram, these messages are entering the event queue from sources such as various web APIs or async 
functions that were called and are returning additional events to be handled by the stack. Messages enter the queue in a first in, 
first out (FIFO) order. No code is executed in the event queue; instead, it holds functions that are waiting to be added back into the stack.

The Event Queue in Context
This event queue is a specific part of our overall event loop concept. 
Messages that are waiting in the event queue to be added back into the stack are added back via the event loop. 
When the call stack is empty, if there is anything in the event queue, the event loop can add those one at a time to the stack for execution.

1. First the event loop will poll the stack to see if it is empty.
2. It will add the first waiting message.
3. It will repeat steps 1 and 2 until the stack has cleared.
*/

console.log("This is the first line of code in app.js.");

function usingsetTimeout() {
    console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 3000);

console.log("This is the last line of code in app.js.");