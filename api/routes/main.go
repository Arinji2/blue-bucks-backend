package routes

import (
	"github.com/blue-bucks/backend/routes/login"
	"github.com/go-chi/chi/v5"
)

func SetupRoutes() chi.Router {
	r := chi.NewRouter()
	r.Route("/login", func(r chi.Router) {
		r.Get("/", login.LoginHandler)
	})

	return r
}
