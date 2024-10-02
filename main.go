package main

import "fmt"

func fibonacci(num int) int {
	if num < 2 {
		return num
	}

	a, b := 0, 1
	var sum int
	for i := 2; i <= num; i++ {
		sum = a + b
		a = b
		b = sum
	}
	return sum
}

func main() {
	num := 10
	result := fibonacci(num)
	fmt.Println("Fibonacci number at position", num, "is", result)
}
