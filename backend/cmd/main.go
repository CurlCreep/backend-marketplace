package main

import (
    "fmt"
    "net/http"
)

func main() {
    fmt.Println("Product Service starting...")

    http.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte("OK"))
    })

    fmt.Println("Listening on :8080")
    http.ListenAndServe(":8080", nil)
}