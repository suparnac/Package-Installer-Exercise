Code to give the installer a list of packages with dependencies, and have it install the packages in order such that an install won’t
fail due to a missing dependency.
Steps to run:
Total number of files: 4
Iterator.js, LinkedHashMap.js, StartPage.html, PackageInstaller.js
1. Run the StartPage.html file. It will display a textarea and a submit button.
Type the dependencies, for example:
A:(space)B(press Enter)
B:(space)
Click Submit button.
Output:
B,A

2. PackageInstaller.js
It contains the logic to install the packages in an order. LinkedHashMap is used to store the key value pairs. Iterator is used to
traverse the Hash map. 

3. LinkedHashMap.js 
It is used to store the key value pairs.

4. Iterator.js
It is used to traverse the hash map.
