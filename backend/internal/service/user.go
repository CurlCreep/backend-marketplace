package service

import (
	"crypto/rand"
	"encoding/hex"
	"errors"

	"golang.org/x/crypto/bcrypt"
)

type User struct {
	Email    string
	Password string
	APIKey   string
}

var users = map[string]User{}

func generateAPIKey() (string, error) {
	bytes := make([]byte, 32)
	if _, err := rand.Read(bytes); err != nil {
		return "", err
	}
	return hex.EncodeToString(bytes), nil
}

func CreateUser(email, password string) (User, error) {
	if _, exists := users[email]; exists {
		return User{}, errors.New("user already exists")
	}

	hashed, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return User{}, err
	}

	apiKey, err := generateAPIKey()
	if err != nil {
		return User{}, err
	}

	user := User{
		Email:    email,
		Password: string(hashed),
		APIKey:   apiKey,
	}
	users[email] = user

	return user, nil
}
