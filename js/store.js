// Fetched by: https://eur.shein.com/c-index/getProducts?_lang=en&_ver=1.1.8&limit=20&page=1&routeId=00200200&type=selection
const PRODUCTS = [
  {
    productName: "Ditsy Floral Knot Shoulder Romper",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/27/1653618551c7116c38991c75da2efcbaa83013b081_thumbnail_405x552.jpg",
    price: "9,00€"
  },
  {
    productName: "Halter Neck Backless Solid Romper",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/04/12/1649728643d7614909cd61f8e6b1918b9ec2f5f76e_thumbnail_405x552.jpg",
    price: "10,00€"
  },
  {
    productName: "DAZY Patched Pocket Overall Jumpsuit Without Tee",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/24/16533613709fd8a1e2203b29700886a94a715239bb_thumbnail_405x552.jpg",
    price: "21,00€"
  },
  {
    productName: "Floral Print Cap Sleeve Wrap Hem Belted Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/23/165328656644811979f00eaff8ccea8e8fa93e7b88_thumbnail_405x552.jpg",
    price: "16,00€"
  },
  {
    productName: "Single Breasted Sleeveless Buckled Belted Blazer Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/30/16538738103810e3b5367e7e1f2d46351ddf084565_thumbnail_405x552.jpg",
    price: "19,00€"
  },
  {
    productName: "Allover Print Frill Trim Shirred Back Jumpsuit",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/27/16536313090d01dee2ae729456c4f6b42e79709b14_thumbnail_405x552.jpg",
    price: "16,00€"
  },
  {
    productName: "Ditsy Floral Print Knot Front Ruched Bust Split Thigh Cami Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/31/1653992157cd01851a2b1e1299c2abd6e6bdf8a2d1_thumbnail_405x552.jpg",
    price: "11,00€"
  },
  {
    productName: "Contrast Guipure Lace Ruffle Trim Cami Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/23/165328833292287cd1485aec5f555fca6f4b4874b5_thumbnail_405x552.jpg",
    price: "15,00€"
  },
  {
    productName: "Floral Print Bomber Jacket",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/13/1652451035b0e218d6b71fbec7ac169196bf23145b_thumbnail_405x552.jpg",
    price: "11,00€"
  },
  {
    productName: "SHEIN Embroidery Applique Cami Romper",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/17/16527521564ba310df9a151583db25e89c9f61ea0b_thumbnail_405x552.jpg",
    price: "10,00€"
  },
  {
    productName: "DAZY Solid Ruffle Hem Cami Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/06/01/1654066487bee999ae413bdc59d8c03dfaba402441_thumbnail_405x552.jpg",
    price: "17,00€"
  },
  {
    productName: "SHEIN BLUES Flap Pocket Denim Jacket",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/25/1653484350a5cf07dc0f50bf188610b07dd3848a8f_thumbnail_405x552.jpg",
    price: "24,00€"
  },
  {
    productName: "Butterfly Sleeve Single Breasted Belted Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/23/16532728816c7cf66867702fc2c2db495123542267_thumbnail_405x552.jpg",
    price: "17,00€"
  },
  {
    productName: "Tie Back Batwing Sleeve Wrap Hem Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/24/16533691330596dd1bdb81a1c3d98e7806647a4e18_thumbnail_405x552.jpg",
    price: "17,00€"
  },
  {
    productName: "Flap Pocket Batwing Sleeve Belted Jumpsuit",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/27/165362851238800fbfc25e49fff13e7aea1db39d32_thumbnail_405x552.jpg",
    price: "25,00€"
  },
  {
    productName: "Paisley & Bird Print Tie Front Lantern Sleeve Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/18/1652874165adf23177f6d702f24acd5f660d59f25c_thumbnail_405x552.jpg",
    price: "22,00€"
  },
  {
    productName: "SHEIN MOD Ditsy Floral Print Off Shoulder Knot Front Layered Hem Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/23/1653275884286bce36bbe6813ec90b1636343649d8_thumbnail_405x552.jpg",
    price: "24,00€"
  },
  {
    productName: "Ditsy Floral Ruffle Trim Tie Waist Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/05/24/1653393784307bf0706edfa52c5bc3ecdb9bb80853_thumbnail_405x552.jpg",
    price: "15,00€"
  },
  {
    productName: "SHEIN Floral Print Butterfly Sleeve Belted A-line Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/06/02/1654147861a082a77f61dc385928e605101aae88e0_thumbnail_405x552.jpg",
    price: "13,00€"
  },
  {
    productName: "SHEIN Ditsy Floral Contrast Guipure Lace Ruffle Sleeve Smock Dress",
    imageUrl: "https://img.ltwebstatic.com/images3_pi/2022/06/06/1654498296bbb6e69434ea17d0bcc16ad6a0743f32_thumbnail_405x552.jpg",
    price: "9,00€"
  }
];

const containerEl = document.body.querySelector('section.container');

function createCard(item) {
  const { goods_img: imageUrl, goods_name: productName, salePrice: { usdAmountWithSymbol: price } } = item;

  const articleEl = document.createElement('article');

  const cardHeadEl = document.createElement('div');
  cardHeadEl.classList.add('card-head');
  articleEl.appendChild(cardHeadEl);


  const imgEl = document.createElement('img');
  imgEl.src = imageUrl;
  imgEl.setAttribute('alt', 'Product');
  imgEl.setAttribute('loading', 'lazy');
  cardHeadEl.appendChild(imgEl);


  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body');
  articleEl.appendChild(cardBodyEl);


  const detailsEl = document.createElement('p');
  detailsEl.classList.add('details');
  cardBodyEl.appendChild(detailsEl);

  const productDescriptionEl = document.createElement('span');
  productDescriptionEl.classList.add('product-description');
  productDescriptionEl.textContent = productName;
  detailsEl.appendChild(productDescriptionEl);

  const productCostEl = document.createElement('span');
  productCostEl.classList.add('product-cost');
  productCostEl.textContent = price;
  detailsEl.appendChild(productCostEl);

  const addToCartBtn = document.createElement('a');
  addToCartBtn.classList.add('add-to-cart');
  addToCartBtn.textContent = 'Add To Cart';
  addToCartBtn.addEventListener('click', e => addToCart(item));
  cardBodyEl.appendChild(addToCartBtn);

  const card = articleEl;
  /*
  CARD LAYOUT
  <article class="card">
    <div class="card-head">
      <img
        src=${imageUrl}
        alt="Product"
        loading="lazy"
      />
    </div>
    <div class="card-body">
      <p class="details">
        <span class="product-description">
          ${productName}
        </span>
        <span class="product-cost">${price}</span>
      </p>
      <a class="add-to-cart">Add To Cart</a>
    </div>
  </article>
  */

  return card;
}

function addToCart(item) {
  console.log(item)
}



async function getProducts(page = 1) {
  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://eur.shein.com/c-index/getProducts?_lang=en&_ver=1.1.8&limit=24&page=${page}&routeId=00200200&type=selection`)}`);
    const data = await response.json();
    const products = JSON.parse(data.contents);
    return products;
  } catch (error) {
    console.error(error);
  }
}

// Get URL Params to display corresponding products
const queryParams = new URLSearchParams(window.location.search);
const currentPage = Number(queryParams.get('page')) === 0 ? 1 : Number(queryParams.get('page'));

getProducts(currentPage).then(products => {
  products.forEach(function (product) {
    containerEl.appendChild(createCard(product));
  });
})
