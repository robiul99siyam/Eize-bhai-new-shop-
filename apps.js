const loadAllporduect = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => DisplayAllproduct(data));
};

const DisplayAllproduct = (prodocts) => {
  prodocts?.forEach((product) => {
    const parnet = document.getElementById("all-product");
    const li = document.createElement("li");
    li.innerHTML = `
        <div style="height:95%;" class="card shadow w-75 container ">
            <div class="ratio ratio-1x1">
                 <img  src=${product.image} class="card-img-top" loading="lazy" alt="...">
            </div>
            <div class="card-body d-flex flex-column flex-md-row">
                <div class="flex-grow-1">
                    <strong>${product.title}</strong>
                    <p class="card-text"> category : ${product.category}</p>
                    <buttion class="boynow px-5   py-1">buy now </buttion>
                </div>
                <div class="px-md-2">$110</div>
            </div>
        </div>
        
        `;
    parnet.appendChild(li);
  });
};
const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data));
};

const displayCategory = (categories) => {
  const parent = document.getElementById("category");

  categories?.forEach((cat) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <button onclick="loadCategoryFilter('${cat}')" class="btn btn-dark text-light px-5">${cat}<i class="bi bi-arrow-right ms-2"></i></button>
      `;
    parent.appendChild(div);
  });
};

const loadCategoryFilter = (category) => {
  fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => displayCategoryFilter(data));
};

const displayCategoryFilter = (filterCat) => {
  const parent = document.getElementById("fillter");

  parent.innerHTML = "";

  filterCat?.forEach((fil) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <div class="card" style="width: 18rem;">
            <img style='height:200px;' src=${
              fil.image
            } class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${fil.title.slice(0, 10)}</h5>
              <h5 class="card-title">${fil.description.slice(0, 40)}</h5>
              <p class="card-text">price:${fil.price}$</p>
              <button class="btn btn-dark px-5 py-1">buy now</button>
            </div>
          </div>
      `;
    parent.appendChild(div);
  });
};

loadAllporduect();
loadCategory();
