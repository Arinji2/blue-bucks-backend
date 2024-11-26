package login

import (
	"net/http"

	"github.com/go-chi/render"
)

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Login Handler"))
	render.Status(r, http.StatusOK)
}
