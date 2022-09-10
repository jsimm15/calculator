# calculator
This calculator uses Javascript to display and operate a basic 
calculator that is capable of the four main math functions (addition, 
subtraction, mulitplication, and division). 

The calculator will maintain a running display of the current user input, and will not make any calculations until the user presses the 
EQUALS button. When making calculations, the calculator WILL NOT RESPECT
STANDARD ORDER OF OPERATIONS, but will instead calculate each mathematical statement from left to right, using the result of earlier calculations as the first term in subsequent operations, until there remains a single result. This result will be displayed above the display of user input, with a larger and bolder font.

Currently, except for a divide-by-zero check, the calculator does not validate user input. The correct operation of the calculator depends upon the user inputting a string of alternating numbers and operators, with each operator surrounded by a number.

If the user tries to divide by zero, the result window will display a message: "CANNOT DIVIDE BY ZERO"