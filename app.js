let listitem = document.querySelector(".list-item");

async function datafrech() {
  let fetchlist = await fetch("https://www.freetestapi.com/api/v1/actors");
  let list = await fetchlist.json();
  console.log(list);
  
  listitem.innerHTML = list.map(el =>
    `
    <div class="card">
    <ul style="list-style: none;">
    <img src="${el.image}" alt="" class="card-img"/>
      <li><strong>Name:</strong> ${el.name}</li>
      <li><strong>Birthday Day:</strong> ${el.birth_year}</li>
      <li><strong>Nationality:</strong> ${el.nationality}</li>
      <li><strong>Known For:</strong> ${el.known_for}</li>
      <li><strong>Awards:</strong> ${el.awards}</li>
      <li><strong>Biography:</strong> ${el.biography}</li>
    </ul>
    </div>
    `
  ).join('');
}

datafrech();