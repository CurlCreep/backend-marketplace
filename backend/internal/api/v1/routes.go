package v1

import "github.com/gin-gonic/gin"

func RegisterRoutes(r *gin.Engine) {
	v1 := r.Group("/api/v1")
	{
		v1.POST("/signup", SignupHandler)
	}
}
