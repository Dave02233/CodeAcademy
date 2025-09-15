package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		fmt.Fprintf(w, "Hello from Go server!")
		log.Printf("Request processed in %s", time.Since(start))
	})
	log.Println("Go server listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
