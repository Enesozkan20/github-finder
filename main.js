/*HTML den etiket ismine göre eleman cagirma */
const form = document.querySelector("form");
const main = document.querySelector("main");


function renderProfile(data) {
    console.log(data)
    main.innerHTML = `
    <section id="left">
        <img src="${data.avatar_url}" alt="" />
        <a href="${data.html_url}">Profili Göster</a>
      </section>
      <section id="right">
        <div>
          <span>Açık Repolar:${data.public_repos}</span>
          <span>Açık Gistler:${data.public_gists}</span>
          <span>Takipçiler:${data.followers} </span>
          <span>Takip Edilenler:${data.following}</span>
        </div>
        <ul>
          <li>Hakkında:${data.bio}</li>
          <li>Şirket:${data.company}</li>
          <li>Website:${data.blog}/li>
          <li>Konum:${data.location}</li>
          <li>Hesap Oluşturma:${new Date(data.created_at).toLocaleDateString()}</li> 
        </ul>
      </section>
    `;
}

//preventDefault ekranin yenilenmesini engeller
function getUserData(event) {
    event.preventDefault();
    console.log(event);
    var username = event.target[0].value;
    // veri tabanindan kullanici bilgilerini al
    fetch(`https://api.github.com/users/${username}`)
        // istek basarili olursa cevapi isle
        .then(function (res) { return res.json() })
        // veriyi javascpript formatina cevirilirse
        .then(function (data) { renderProfile(data) }); //arayüzü ekrana aktarir
}
//form  gönderilme olayini izle
form.addEventListener("submit", getUserData);