1. Line 11 will prompt the console to print out the value of ```i``` since ```i``` is declared as a ```var```, this will allow it to be updated/changed so it will print out some value of the final calculated value of ```i```.
2. Line 12 will prompt the console to print out the value of ```discountedPrice``` since it is declared as a ```var``` which will allow this variable to be updated/changed so it will print out some value of the final calculated value of ```discountedPrice```.
3. Line 13 will prompt the console to print out the value of ```finalPrice``` since it is declared as a ```var```, it will allow this variable to be update/changed so it will print out some value of the final calculated value of ```finalPrice```.
4. If we call ```discountPrices([100, 200, 300], .5)```, it will also execute all the ```console.log``` lines and print those in the console.
5. Line 11 will prompt the console to print out an error when it tries to access the value of ```i``` since ```i``` is declared by ```let``` in the ```for``` loop so when it tries to access ```i``` again, it isn't defined at a global scope so it is not defined.
6. Line 12 will prompt the console to print out an error when it tries to access the value of ```discountedPrice``` since it is declared by ```let``` in the for loop, it isn't defined at a global scope so when it tries to access it, it is undefined and print an error in the console.
7. Line 13 will prompt the console to print out the value of ```finalPrice``` since it is declared by ```let```, which is a modern version of ```var``` which also allows the variable to be updated/changed so it will print out some value of the final calculated value of ```finalPrice```.
8. If we call ```discountPrices([100, 200, 300], .5)```, it will print out the all ```console.log``` lines if lines 11 and 12 don't produce an error.
9. Line 11 will prompt the console to print out an error when it tries to access the value of ```i``` since ```i``` is declared by ```let``` in the ```for``` loop so when it tries to access ```i``` again, it isn't defined at a global scope so it is not defined.
10. Line 12 will prompt the console to print out an error when it tries to access ```discountedPrice``` since it is declared by ```const```, which won't update the variable and since the for loop keeps trying to update it, it will print out an error.
11. Line 13 will prompt the console to print out an error of ```finalPrice``` since it is declared by ```const```, which won't update the variable so it will print out an error when it tries to access ```finalPrice```.
12. If we call ```discountPrices([100, 200, 300], .5)```, it will print out all the ```console.log``` lines assuming lines 11, 12, and 13 don't produce an error.
13. \
    A. student.name \
    B. student['Grad Year'] \
    C. student.greeting() \
    D. student['Favorite Teacher'].name \
    E. student.courseLoad[0]
14. \
    A. '32', because it did string addition with ```2``` appending it to ```'3'``` making it a string, ```'32'``` \
    B. 1, because ```'3'``` is a string and since you can't take a string away with minus, it treats it as integer arithmetic and does 3 - 2 which is ```1``` \
    C. 3, because ```null``` is considered 0, it does arithmetic addition 3 + 0 = 3 \
    D. '3null', because it is doing string addition where it appends ```'null'``` as a string to ```'3'``` making it ```'3null'``` \
    E. 4, because it evaluates boolean true as 1 and continues it as arthmetic int addition and we get 1 + 3 = 4 \
    F. 0, because it evaluates boolean false as 0 and null as 0 so it does arthmetic int addition and we get 0 + 0 = 0 \
    G. "3undefined", because it did string addition appending ```undefined``` to ```"3"``` which is a string, ```"3undefined"``` \
    H. NaN, because it evaluates undefined as NaN in arithmetic expression which equates any expression to NaN
15. \
    A. true, because ```'2'``` becomes a number which 2 is greater than 1, so we get true \
    B. false, because its comparing two strings which ```'2'``` is not the same as ```'12'```, so we get false \
    C. true, because ```'2'``` becomes a number which checks if 2 is equal to 2 which is true \
    D. false, because its doing a strict comparision between the number 2 and a string 2 which is false \
    E. false, because true is also equal to 1 so we are checking if 1 and 2 are the same which it's not, so we get false \
    F. true, because Boolean(2) is true so it does a strict comparison if true is equal to true which is true.
16.
