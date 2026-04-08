package main
import (
    "database/sql"
    "fmt"
    _ "github.com/ClickHouse/clickhouse-go/v2"
)
func main() {
    conn, _ := sql.Open("clickhouse", "tcp://clickhouse:9000?debug=true")
    fmt.Println("Analytics Service connected")
}
