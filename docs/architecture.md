#  System Architecture

## Overview
This system follows a **microservices architecture** where each service is independent and communicates via HTTP, WebSockets, or Kafka.

## Architecture Diagram (Logical)

Client → Nginx → Microservices  
                     ↓  
        Kafka ←→ Services  
                     ↓  
        Databases (MariaDB, Redis, ClickHouse)


## Services

### user-service (Java)
- Handles user CRUD
- Uses MariaDB
- REST API

### notification-service (TypeScript)
- WebSockets for real-time updates
- Kafka producer/consumer

### metrics-service (Python)
- Tracks system metrics
- Uses Redis

### analytics-service (Go)
- Handles analytics queries
- Uses ClickHouse

---

## Communication

| Type | Usage |
|------|------|
| HTTP | CRUD operations |
| WebSocket | Real-time messaging |
| Kafka | Event-driven architecture |
| Redis | Cache & counters |

---

## Scalability Strategy

- Stateless services
- Horizontal scaling
- Kafka decoupling
- Redis caching layer
