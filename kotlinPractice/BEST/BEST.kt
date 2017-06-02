package BEST
        /**
 * Created by Shlomi Alon on 02/06/2017.
 */
//O(n^3)
fun cubicComplexity(arr: IntArray):Int{
    var max = Int.MIN_VALUE
    for (i in 0..arr.size - 1){
        for (j in i..arr.size - 1){
            var sum = 0
            for (k in i..j){
                sum += arr[k]
            }
            if(sum > max){
                max = sum
            }
        }
    }
            return max
}
//O(n^2)
fun quadraticComplexity(arr: IntArray):Int{
    var max = Int.MIN_VALUE
    for (i in 0..arr.size - 1){
        var sum = 0
        for (j in i..arr.size - 1){
            sum += arr[j]
        if(sum > max)
            max = sum
        }
    }
    return max
}
//O(n) - if arr = -arr (all values negative) - need to arr = -arr * -1 and find the min sum
fun Complexityn(arr: IntArray):Int {
    var i = 0;var sum = 0; var max = Int.MIN_VALUE
    while (i < arr.size-1){
        sum += arr[i]
        if(sum < 0)
            sum = 0
        else if(sum > max)
            max = sum
        i++
    }
    return max
}
//O(n^2) - mat[i][j] = mat[i][j-1] + arr[j]
fun DynamicProgrammingquadraticComplexityOne(arr: IntArray):Int{
    var sum = 0; var max = Int.MIN_VALUE
    var mat = Array(arr.size,{IntArray(arr.size)})
    for(i in 0..mat.size-1){
        for (j in 0..mat[0].size-1){
            if(i == j)
                mat[i][j] = arr[i]
        }
    }
    for (i in 0..mat.size-1){
        for(j in (i+1)..mat[0].size-1){
            mat[i][j] = mat[i][j-1] + arr[j]
            if(mat[i][j] > max)
                max = mat[i][j]
        }
    }
return max
}
//O(n^2) - mat[i][j] = mat[i-1][j] + arr[i]
fun DynamicProgrammingquadraticComplexityTwo(arr: IntArray):Int{
    var sum = 0; var max = Int.MIN_VALUE
    var mat = Array(arr.size,{IntArray(arr.size)})
    for(i in 0..mat.size-1){
        for (j in 0..mat[0].size-1){
            if(i == j)
                mat[i][j] = arr[i]
        }
    }
    for (i in 0..mat.size-1){
        for(j in (i+1)..mat[0].size-1){
            mat[i][j] = mat[i+1][j] + arr[i]
            if(mat[i][j] > max)
                max = mat[i][j]
        }
    }
    return max
}
//O(n)
fun DynamicProgramming_n(arr: IntArray):Int{
    var ans = IntArray(arr.size+1)
    ans[0] = 0
    for (i in 1..ans.size-1){
        ans[i] = Math.max(ans[i-1] + arr[i-1],arr[i-1])
    }
    var max = Int.MIN_VALUE
    for (i in 0..ans.size-1){
        if(ans[i] > max)
            max = ans[i]
    }
    return max
}

fun main(args: Array<String>) {
    //```````````TEST```````````
    var arr1 : IntArray = intArrayOf(-2, -8, -1, -5, -2) // max = -1
    var arr2 : IntArray = intArrayOf(1,10,-15,3,-10) //max = 11
    println("maximum subarray is: " + cubicComplexity(arr1))
    println("maximum subarray is: " + cubicComplexity(arr2))

    var arr3 : IntArray = intArrayOf(-2, -8, -1, -5, -2) // max = -1
    var arr4 : IntArray = intArrayOf(1,10,-15,3,-10) //max = 11
    println("maximum subarray is: " + quadraticComplexity(arr3))
    println("maximum subarray is: " + quadraticComplexity(arr4))

    var arr5 : IntArray = intArrayOf(-2, -8, -1, -5, -2) // max = -2147483648
    var arr6 : IntArray = intArrayOf(1,10,-15,3,-10) //max = 11
    println("maximum subarray is: " + Complexityn(arr5))
    println("maximum subarray is: " + Complexityn(arr6))

    var arr7 : IntArray = intArrayOf(1,10,-15,3,-10) //max = 11
    println("maximum subarray is: " + DynamicProgrammingquadraticComplexityOne(arr7))

    var arr8 : IntArray = intArrayOf(1,10,-15,3,-10) //max = 11
    println("maximum subarray is: " + DynamicProgrammingquadraticComplexityTwo(arr8))

    var arr9 : IntArray = intArrayOf(1,10,-15,3,-10) //max = 11
    println("maximum subarray is: " + DynamicProgramming_n(arr9))
}