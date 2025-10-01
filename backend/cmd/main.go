package main

import (
	"log"

	v1 "github.com/CurlCreep/echo-music-fullstack/backend/internal/api/v1"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	v1.RegisterRoutes(router)

	log.Println("Server running on http://localhost:8080")
	log.Println(router.Routes())
	if err := router.Run(":8080"); err != nil {
		log.Fatalf("could not start server: %v", err)
	}
}
