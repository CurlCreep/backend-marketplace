package service

// User is a domain model
type User struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

// UserService is where we put user-related logic
type UserService struct {
	// In a real app, you'd inject a repository here (DB, cache, etc.)
	// repo *repository.UserRepo
}

// NewUserService creates a new instance
func NewUserService() *UserService {
	return &UserService{}
}

// GetUserByID fetches a user (stubbed for now)
func (s *UserService) GetUserByID(id string) (*User, error) {
	// Hard-coded for now
	return &User{ID: id, Name: "John Doe"}, nil
}

// GetAllUsers returns all users (stubbed for now)
func (s *UserService) GetAllUsers() ([]User, error) {
	return []User{
		{ID: "1", Name: "Alice"},
		{ID: "2", Name: "Bob"},
	}, nil
}

// CreateUser simulates adding a new user
func (s *UserService) CreateUser(name string) (*User, error) {
	newUser := &User{ID: "3", Name: name}
	// In real code, you'd save it in DB
	return newUser, nil
}
