# SYNRGY - Car Management API

Back-End sebuah aplikasi website menggunakan express, cloudinary, squelize, dan postgres untuk melakukan fungsi CRUD. Dibuat dengan tujuan untuk memenuhi challenge chapter 6 pada learning path Fullstack Web Development di Binar Academy.

# Prerequisites
Dibutuhkan teknologi dibawah ini sudah terinstall dengan baik
- Node.js
- Postgres

# Clone APP
Ikuti langkah-langkah berikut
```bash
    Clone repository https://github.com/yosuashp/binar-car-rental.git
    git checkout -b Car-Management-API
    git pull origin Car-Management-API
```
## Install Packages
Masuk terminal terlebih dahulu dan jalankan perintah berikut
```bash
   npm install
```

## Running App
Membuat database dan tabel terlebih dahulu menggunakan sequellize
1. Pastikan file 'config/database.js' sudah disesuaikan dengan potgres yang sudah terinstall di local

2. Migrate, create dan seed terlebih dahulu database yang akan digunakan
```bash
   npm run build:sahat
```

3. Jalankan server dalam mode development
```bash
   npm run development
```
4. Akses website
```bash
   http://localhost:8000/
```
5. Informasi login superadmin
```bash
   http://localhost:8000/login-superadmin
```
```bash
{
  "email": "sahatparulian85@gmail.com",
  "password": "sahat85"
}
```
untuk mengubah informasi password, username, dan email superadmin terdapat di /config/superadmin.js dan jangan lupa untuk menghapus database terlebih dahulu lalu lakukan migrate dan seedeer menggunakan perintah no 2

## Documentation API
- [Endpoint API Documentation POSTMAN Car-Management-API](https://documenter.getpostman.com/view/30942070/2s9YeD6rq8)
- [Endpoint API Documentation SWAGGER UI Car-Management-API](http://localhost:8000/api-docs)

# Schema Database
![relational-db](https://github.com/yosuashp/binar-car-rental/assets/64104610/31a97e36-79bb-4623-9d5b-b35d0aad73e4)


# Cloudinary Configuration
Jika ingin mengubah API Client Cloudinary terdapat pada folder '/config/cloudinary.js'. Ubah parameter berikut

```bash
  cloud_name: '[YOUR_CLOUD_NAME]',
  api_key: '[YOUR_API_KEY]',
  api_secret: '[YOUR_API_KEY_SECRET]',
  secure: true
```

Untuk mendapatkan konfigurasi diatas silahkan kunjungi [cloudinary](https://console.cloudinary.com/pm/c-8658ff03fff67c57fd39d10af19494/media-explorer)
