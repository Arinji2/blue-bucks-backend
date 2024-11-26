package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/blue-bucks/backend/routes"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/render"
	"github.com/joho/godotenv"
)

func main() {
	r := chi.NewRouter()

	setupEnvironment()
	r.Use(SkipLoggingMiddleware)
	r.Get("/health", healthCheckHandler)
	r.Mount("/api", routes.SetupRoutes())
	fmt.Println("Starting Blue-Bucks Backend on port 8080")
	err := http.ListenAndServe(":8080", r)
	if err != nil {
		log.Fatal(err)
	}
}

func setupEnvironment() {
	err := godotenv.Load()
	if err != nil {
		isProduction := os.Getenv("ENVIRONMENT") == "PRODUCTION"
		if !isProduction {
			log.Fatal("Error loading .env file")
		} else {
			fmt.Println("Using Production Environment")
		}
	}
}

func healthCheckHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Blue-Bucks Backend: Health Check"))
	render.Status(r, http.StatusOK)
}

func SkipLoggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/health" {
			next.ServeHTTP(w, r)
			return
		}
		middleware.Logger(next).ServeHTTP(w, r)
	})
}
