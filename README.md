# SYNRGY - Car Management Dashboard

Aplikasi web menggunakan express, cloudinary, knex, dan postgres untuk melakukan fungsi CRUD. Dibuat dengan tujuan untuk memenuhi challenge chapter 5 pada learning path Fullstack Web Development di Binar Academy. Design pada Aplikasi ini dibuat berdasarkan [Car-Management-Dashboard-Figma](https://www.figma.com/file/QiNXZPX7OwUeFzqSPuiQBE/BCR---Binar-Car-Rental?type=design&node-id=18343-5831&mode=design&t=ChhDUoaZb8FmFWPk-0)

# Prerequisites
Dibutuhkan teknologi dibawah ini sudah terinstall dengan baik
- Node.js
- Docker Engine


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

## Install Postgres Server via Docker Engine
```bash
  docker-compose -f docker-compose.yaml --env-file .env up -d
```
## Install PgAdmin4 Postgres via Docker Engine
```bash
    docker-compose -f docker-compose.yaml --env-file .env --profile debug up -d
```