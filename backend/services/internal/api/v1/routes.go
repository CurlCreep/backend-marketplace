// internal/api/v1/routes.go
package v1

import (
	"net/http"

	"myapp/internal/service"

	"github.com/gorilla/mux" // router, you could also use chi or gin
)

func RegisterRoutes(r *mux.Router, userService *service.UserService) {
	userHandler := NewUserHandler(userService)

	// User routes
	r.HandleFunc("/api/v1/users", userHandler.GetAllUsers).Methods(http.MethodGet)
	r.HandleFunc("/api/v1/users/{id}", userHandler.GetUser).Methods(http.MethodGet)
	r.HandleFunc("/api/v1/users", userHandler.CreateUser).Methods(http.MethodPost)
	r.HandleFunc("/api/v1/users/{id}", userHandler.UpdateUser).Methods(http.MethodPut)
	r.HandleFunc("/api/v1/users/{id}", userHandler.DeleteUser).Methods(http.MethodDelete)
}
