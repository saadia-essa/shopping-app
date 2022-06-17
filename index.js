const root = document.getElementById("root");

const menu = ["home", "about", "Contact"];
const products = [
  {
    id: 1,
    name: "product 1",
    price: 100,
    description: "desc 1",
    featured: true,
    Image: "https:// via placeholder.com/150",
  

  },
 
  

];
function nav(menu) {
  let navBar = document.createElement("nav");
  for (let item in menu) {
    const a = document.createElement("a");
    a.innerHTML = menu[item];
    navBar.appendChild(a);
  }
  return navBar;
}

function hero() {
    let hero = document.createElement("div");
    hero.className = "hero";
    let h1 = document.createElement("h1")
    h1.innerHTML = "Welcome to the store"
    hero.appendChild(h1)
    return hero;
}

function featuredProducts(Products) {

    let featured = document.createElement("div")
    featured.className = "featured"
    let h2 = document.createElement("h2")
    h2.innerHTML = "featured products"
    featured.appendChild(h2)
    return featured
}
function footer() {
    let footer = document.createElement("footer")
    footer.className = ("footer")
    let p = document.createElement("p")
    p.innerHTML = "shopping &copy, 2022"
    footer.appendChild(p)
    return footer
}

    

root.appendChild(nav(menu));
root.appendChild(hero())
root.appendChild(featuredProducts())
root.appendChild(footer())
