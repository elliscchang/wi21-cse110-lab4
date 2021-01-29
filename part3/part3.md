### DevTools - Debugging
The bug was that the value of ```num1``` and ```num2``` are string types which causes result to be a string data type. This means that its doing string addition where it appends ```num2``` to the string of ```num1``` resulting in a string. So we need to convert ```num1``` and ```num2``` into a number in order to get the sum of the two numbers. So in order to convert the string into an int, we just use the ```parseInt()``` function in javascript to convert the string to a number.

### DevTools - Network Tab
1. citylots.json
2. part2.js
3. 11.7 MB
4. 86.32 ms
5. Chrome/88.0.4324.104
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData
