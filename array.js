let arr =[1,2,9]
sum =0
arr1 =[]
num =0
function fun(){
    for (let i = 0; i < arr.length; i++) {
      num = num*10+arr[i]
    }
    sum = num +1
    console.log(sum);
    const arr1 = Array.from(String(sum),Number);
    console.log(arr1);
}
fun()