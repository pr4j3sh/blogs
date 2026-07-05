### Use Double Quotes When Using Variables in Bash

Earlier I was experimenting with bash scripting, revising it again from [w3schools](https://www.w3schools.com/bash/bash_syntax.php) as you'll be able to find on [here](https://github.com/pr4j3sh/lang/tree/master/src/bash).

It was operators section and I was reading through different operators and their purposes. Earlier I saw an example of assosiative arrays(yea, the one's like dictionary) so I thought of creating associative arrays of these different types of operators and printing them on my shell.

The code I wrote was [this](https://github.com/pr4j3sh/lang/blob/48517f47545cc07241ab64e115bddd830ffe041c/src/bash/operators/main.sh) (also, given below).

```bash
#!/bin/bash

# comparison operators
echo "comparison operators"
declare -A comparison_operators
comparison_operators["equal_to"]='-eq'
comparison_operators["not_equal_to"]='-ne'
comparison_operators["less_than"]='-lt'
comparison_operators["less_than_or_equal_to"]='-le'
comparison_operators["greater_than"]='-gt'
comparison_operators["greater_than_or_equal_to"]='-ge'

for i in ${comparison_operators[@]}; do
  echo $i
done

# string operators
echo "string operators"
declare -A string_operators
string_operators["equal_to"]='='
string_operators["not_equal_to"]='!='
string_operators["less_than"]='<'
string_operators["greater_than"]='>'

for i in ${string_operators[@]}; do
  echo $i
done

# arithmetic operators
echo "arithmetic operators"
declare -A arithmetic_operators
arithmetic_operators["addition"]='+'
arithmetic_operators["subtraction"]='-'
arithmetic_operators["multiplication"]='*'
arithmetic_operators["division"]='/'
arithmetic_operators["modulus"]='%'

for i in ${arithmetic_operators[@]}; do
  echo $i
done
```

And, when I executed this code, I was getting this response.

```bash
comparison operators
-le
-gt
-eq
-ge
-lt
string operators
>
!==
==
<
arithmetic operators
%
/
+
-
data-types
operations
operators
README.md
variable
```

Why are all the files/directories being listed right after the `arithmetic_operators`? Weird, right?

> Can you spot the bug?

Well, the problem was me not using double quotes around the variables in the for loop, [these](https://github.com/pr4j3sh/lang/blob/48517f47545cc07241ab64e115bddd830ffe041c/src/bash/operators/main.sh#L38-L39) lines and hence globbing occurs with path expansion.

```bash
for i in ${arithmetic_operators[@]}; do
  echo $i
```

When the array element was `*` in the `for` loop, for `arithmetic_operators["multiplication"]='*'`, bash expanded it into all files and directories inside the current working directory and hence printed all the file/directory names.

Only if I used, double quotes, this bug would never have occured.

So, all I had to do was [add double quotes](https://github.com/pr4j3sh/lang/commit/ab688d4aca38e4015302c0fdce1ec2bf386c40de#diff-55b12e459eee70981ffbbace830106e4828d947a44c7462c845eae0bbf7b0cfcL38-R39).

```bash
- for i in ${arithmetic_operators[@]}; do
-   echo $i
+ for i in "${arithmetic_operators[@]}"; do
+  echo "$i"
```

> Fun fact: My linter was telling me to use double quotes around variable usage

Now, you know how important it is to use double quotes around variable names in bash to avoind globbing or word splitting.
