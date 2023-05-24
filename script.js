function submitForm() {
  // ambil nilai dari elemen input dan select
  var name = document.getElementById("name").value;
  var gender = document.querySelector('input[name="gender"]:checked').value;
  var birthPlace = document.getElementById("birth-place").value;
  var birthDate = document.getElementById("birth-date").value;
  var education = document.getElementById("education").value;
  var status = document.getElementById("status").value;
  var hobby = document.getElementById("hobby").value;
  var address = document.getElementById("address").value;
  var photo = document.getElementById("photo").files[0];
  var photoName = photo.name;

  // tampilkan nilai pada halaman web
  var output = document.getElementById("output");
  var table = `
  <style>
  body {
    background-color: #f4f4f4;
  }

  .BIO{
    display: none;
  }

  nav{
    display: none;
  }

#output{
  display: block;
}

  .container {
    margin-top: 50px;
  }

  .card {
    border: none;
  }

  .card-header {
    background-color: #007bff;
    color: #fff;
  }

  .card-title {
    margin-bottom: 0;
  }

  table {
    width: 100%;
    margin-top: 20px;
  }

  table td,
  table th {
    padding: 10px;
    border: 1px solid #ccc;
  }

  table th {
    background-color: #f4f4f4;
    text-align: left;
  }

</style>
</head>
<body>
<div class="container d-flex justify-content-center">
  <div class="card">
    <div class="card-header">
      <h4 class="card-title mb-0">Profil</h4>
    </div>
    <div class="card-body">
      <table>
        <tbody>
         <img class="img-fluid" width="100%" height="100%" id="photo-preview" src="" alt="">
          <tr>
            <th scope="row">Nama</th>
            <td>${name}</td>
          </tr>
          <tr>
            <th scope="row">Jenis Kelamin</th>
            <td>${gender}</td>
          </tr>
          <tr>
            <th scope="row">Tempat Lahir</th>
            <td>${birthPlace}</td>
          </tr>
          <tr>
            <th scope="row">Tanggal Lahir</th>
            <td>${birthDate}</td>
          </tr>
          <tr>
            <th scope="row">Riwayat Pendidikan</th>
            <td>${education}</td>
          </tr>
          <tr>
            <th scope="row">Status</th>
            <td>${status}</td>
          </tr>
          <tr>
            <th scope="row">Hobi</th>
            <td>${hobby}</td>
          </tr>
          <tr>
            <th scope="row">Alamat</th>
            <td>${address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
  `;

  output.innerHTML = table;

  // tampilkan foto pada halaman web
  var photoPreview = document.getElementById("photo-preview");
  var reader = new FileReader();
  reader.onload = function (e) {
    photoPreview.src = e.target.result;
  };
  reader.readAsDataURL(photo);
  console.log(readAsDataURL.photo);
}
