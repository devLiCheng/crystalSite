package main

import (
    "database/sql"
    "fmt"
    "log"
    "net/http"

    _ "github.com/go-sql-driver/mysql"
)

func main() {
    dsn := "root:root@tcp(localhost:3306)/crystal?parseTime=true&charset=utf8mb4"
    db, err := sql.Open("mysql", dsn)
    if err != nil {
        log.Fatalf("数据库连接失败: %v", err)
    }
    defer db.Close()

    if err = db.Ping(); err != nil {
        log.Fatalf("数据库不可用: %v", err)
    }

    http.HandleFunc("/api/health", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintln(w, "crystalSite backend is running")
    })

    fmt.Println("后端服务已启动： http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
