# Gripe Backend

## Purpose
Handles data storage, authentication, and gripe pattern logic.

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)
- JWT Authentication

## Planned Structure

### Models
- User
- Gripe
- Case (clustered gripes)

### Routes
- POST /api/gripe → create gripe
- GET /api/gripe → fetch user gripes
- GET /api/cases → grouped patterns

### Core Logic
- Group similar gripes into cases
- Track frequency of occurrences
- Assign severity score based on repetition

## Future Improvements
- Smarter clustering algorithm
- Real-time updates
- Notification system