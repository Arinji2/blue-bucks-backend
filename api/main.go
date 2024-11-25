package main

import (
	"fmt"

	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()
	fmt.Println("Look Ma! No errors :D")
}
