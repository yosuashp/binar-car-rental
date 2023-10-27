document.getElementById('driver').addEventListener('focus', darkBackground);
document.getElementById('date').addEventListener('focus', darkBackground);
document.getElementById('time').addEventListener('focus', darkBackground);
document.getElementById('driver').addEventListener('blur', restartBackground);
document.getElementById('date').addEventListener('blur', restartBackground);
document.getElementById('time').addEventListener('blur', restartBackground);

function darkBackground() {
  document.getElementById('home').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  document.getElementById('head').style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
  document.getElementById('navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}
function restartBackground() {
    document.getElementById('home').style.backgroundColor = 'white';
    document.getElementById('head').style.backgroundColor = '#F1F3FF';
    document.getElementById('navbar').style.backgroundColor = '#F1F3FF';
  }

// Class App
class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  
  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  // Function Filter car
  run = () => {
    this.clear();
    const data = this.filterCar();

    // Jika data yang di cari tidak ditemukan
    if (data.length == 0 || data == undefined) {
      const node = document.createElement("div");
      node.innerHTML = `<div class="alert alert-danger mt-2" role="alert">Data Tidak Ditemukan
    </div>`;
      this.carContainerElement.appendChild(node);
    } else {
      // jika di temukan
      data.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      });
    }
  };

  // method filterCar
  filterCar() {
    const driver = document.getElementById("driver").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const dateTime = new Date(`${date} ${time}`);
    const passanger = document.getElementById("passanger").value;
    const searchButton = document.getElementById("load-btn");

    if (driver === "" || date === "" || time === "") {
      // Jika belum diisi, nonaktifkan tombol
      searchButton.disabled = false;
      alert("Please fill in all fields.");
      return;
    } else if (passanger == "" && driver.toString() == "true") {
      return Car.list.filter(
        (car) => car.available === true && car.availableAt <= dateTime
      );
    } else if (passanger != "" && driver.toString() == "true") {
      return Car.list.filter(
        (car) =>
          car.available === true &&
          car.capacity >= passanger &&
          car.availableAt <= dateTime
      );
    } else if (passanger == "" && driver.toString() == "false") {
      return Car.list.filter(
        (car) => car.available === false && car.availableAt <= dateTime
      );
    } else if (passanger != "" && driver.toString() == "false") {
      return Car.list.filter(
        (car) =>
          car.available === false &&
          car.capacity >= passanger &&
          car.availableAt <= dateTime
      );
    }else if (driver === String && date === String && time === float) {
      searchButton.disabled = false
      //alert("Please fill in all fields.");
      //searchButton.disabled = false;
    }

    // const driver = document.getElementById("driver").value;
    // const date = document.getElementById("date").value;
    // const time = document.getElementById("time").value;
    // const dateTime = new Date(`${date} ${time}`);
    // const passanger = document.getElementById("passanger").value;
    // const searchButton = document.getElementById("load-btn");

    // // Periksa apakah driver, tanggal, dan waktu telah diisi
    // if (driver !== "" && date !== "" && time !== "") {
    //     searchButton.disabled = false;
    // } else {
    //     searchButton.disabled = true;
    //     alert("Please fill in all fields.");
    //     return;
    // }

    // // Lakukan logika pencarian sesuai kebutuhan
    // let filteredCars;
    // if (passanger === "" && driver === "true") {
    //     filteredCars = Car.list.filter(
    //         (car) => car.available === true && car.availableAt <= dateTime
    //     );
    // } else if (passanger !== "" && driver === "true") {
    //     filteredCars = Car.list.filter(
    //         (car) =>
    //             car.available === true &&
    //             car.capacity >= passanger &&
    //             car.availableAt <= dateTime
    //     );
    // } else if (passanger === "" && driver === "false") {
    //     filteredCars = Car.list.filter(
    //         (car) => car.available === false && car.availableAt <= dateTime
    //     );
    // } else if (passanger !== "" && driver === "false") {
    //     filteredCars = Car.list.filter(
    //         (car) =>
    //             car.available === false &&
    //             car.capacity >= passanger &&
    //             car.availableAt <= dateTime
    //     );
    // }
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}

// function format rupiah
function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

// function format time date
function getDateTimeNow() {
  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  var time =
    String(today.getHours()).padStart(2, "0") +
    ":" +
    String(today.getMinutes()).padStart(2, "0") +
    ":" +
    String(today.getSeconds()).padStart(2, "0");
  var dateNow = date + "T" + time + ".000Z";
  return dateNow;
}
