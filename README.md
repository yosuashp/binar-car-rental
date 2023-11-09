# SYNRGY - Car Management Dashboard

Aplikasi web menggunakan express, cloudinary, knex, dan postgres untuk melakukan fungsi CRUD. Dibuat dengan tujuan untuk memenuhi challenge chapter 5 pada learning path Fullstack Web Development di Binar Academy. Design pada Aplikasi ini dibuat berdasarkan [Car-Management-Dashboard-Figma](https://www.figma.com/file/QiNXZPX7OwUeFzqSPuiQBE/BCR---Binar-Car-Rental?type=design&node-id=18343-5831&mode=design&t=ChhDUoaZb8FmFWPk-0)

# Prerequisites
Dibutuhkan teknologi dibawah ini sudah terinstall dengan baik
- Node.js
- Docker Engine
- Docker Compose
- Linux

# Clone APP
Ikuti langkah-langkah berikut
```bash
    Clone repository https://github.com/yosuashp/binar-car-rental.git
    git checkout -b Car-Management-Dashboard
    git pull origin Car-Management-Dashboard
```

# Install App
Car-Management-Dashboard
1. Install Postgres Server 
2. Install PgAdmin4
3. Install NPM

## Install Postgres Server via Docker
```bash
  docker-compose -f docker-compose.yaml --env-file .env up -d
```
## Install PgAdmin4 Postgres via Docker
```bash
    docker-compose -f docker-compose.yaml --env-file .env --profile debug up -d
```
## Install Packages
Masuk terminal terlebih dahulu
```bash
   npm install
```
# Access App
Pastikan postgres berjalan menggunakan docker, untuk mengeceknya masukan command 'docker ps -a' pada terminal maka akan dua image yang berjalan yaitu 'dpage/pgadmin4' dan 'postgres:14.1-alpine'. Dan selanjutnya akan melakukan langkah berikut:
1. Access postgres database
2. Running App

## Access PgAdmin4 via Browser
Akses halaman pgadmin4 via browser
```bash
   http://127.0.0.1:55432/
   Username: postgres@example.com
   Password: password
```
lalu buat database dengan nama
```bash
   car-manage-sahat
```
## Running App
Akses halaman front-end dan back-end
1. Migrate terlebih dahulu tables yang sudah dibuat
```bash
   npm run migrate:sahat
```
2. Pastikan file 'connection_database.js yang berada di folder 'src/handler/db-handler/config/connection' tidak diubah

3. Jalankan server
```bash
   npm run start
```
4. Akses website
```bash
   http://localhost:2908/
```
# Endpoint API and Routing
1. Front-end
2. Back-end

## Front-End Routes

| Page | Route    | Links Routes                |
| :-------- | :------- | :------------------------- |
| `Home` | `/` | http://localhost:2908/|
| `Add Car` | `/add` | http://localhost:2908/add|
| `Edit Car` | `/edit?id{carId}` | http://localhost:2908/edit?id{carId}|

## Documentation API
[Endpoint API Documentation Car-Management-Dashboard](https://documenter.getpostman.com/view/30942070/2s9YXiYgSf)

# Schema Database
![db-diagram](https://github.com/yosuashp/binar-car-rental/assets/64104610/67f826f5-9a1f-4ced-90ef-dfd13a675b28)

# Demo APP

https://github.com/yosuashp/binar-car-rental/assets/64104610/a8d00099-39be-4571-b169-6a5209e914bd


