/* task 1 */
for (let i = 0; i < 7; i++)
{
  n = '#'
  for (let j = 0; j < i; j++)
  {
    n += '#'
  }
  console.log(n)
}


/* task 2 */
for (let i = 1; i < 100; i++)
{
  if (i % 3 == 0 && i % 5 != 0)
    console.log("Fizz")
  if (i % 5 ==0 && i % 3 != 0)
    console.log("Bizz")
  if (i % 3 == 0 && i % 5 == 0)
    console.log("FizzBizz")
  if (i % 3 != 0 && i % 5 != 0)
    console.log(i)
}



/* task 3 */

console.log("# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n# # # # \n # # # #\n")



/* task 4 */
a = 7
b = 9
console.log("Let's compare " + a + " and " + b)
console.log(Math.min(a, b))



/* task 5 */
s = "BnhjkjhjkjhkjihkijBjkuBf"
function countBs(sth) {
  counter = 0
  for (let i = 0; i < sth.length; i++)
  {
    if (sth.charAt(i) == "B")
      counter++
  }
  return counter
}
console.log(countBs(s))


s = "BnhjkjhjkjhkjihkijBjkuBf"
b = "B"
function countBs2(line, symbol) {
  counter = 0
  for (let i = 0; i < line.length; i++)
  {
    if (line.charAt(i) == symbol)
      counter++
  }
  return counter
}
console.log(countBs2(s, b))




/* task 6 */
l = 35
r = 1
t = -3
var n = []
function range(l, r, n, t) {
  if (t == undefined)
  {
    j = 0
    i = l
    for (let i = l; i <= r; i++)
    {
      n[j] = i
      j++
    }
  }
  else
  {
    if (t < 0)
    {
      j = 0
      for (let i = l; i >= r; i+=t)
      {
        n[j] = i
        j++
      }
    }
    else
    {
      j = 0
      for (let i = l; i <= r; i+=t)
      {
        n[j] = i
        j++
      }
    }
  }
}
range(l, r, n, t)
function sum (n){
   var s = 0
   for (i = 0; i < n.length; i++){
      s += n[i]
   }
   return s
}
for (let i = 0; i < n.length; i++)
{
  console.log(n[i])
}
console.log(sum(n))



/* task 7 */
var mas = []
for (let i = 0; i < 10; i++)
{
  mas[i] = i + 1
}
function reverseArray (mas)
{
  var mas2 = []
  for (let i = 0; i < mas.length; i++)
  {
    mas2[i] = mas[mas.length - i - 1]
  }
  return mas2
}
mas = reverseArray(mas)
for (let i = 0; i < 10; i++)
{
  console.log(mas[i])
}

function reverseArrayInPlace (mas)
{
  j = 0
  for (let i = mas.length - 1; i >= 0; i-=1)
  {
    mas[j] = mas[i]
    j++
  }
}
reverseArrayInPlace(mas)
for (let i = 0; i < 10; i++)
{
  console.log(mas[i])
}