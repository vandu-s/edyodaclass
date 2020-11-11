var container = document.getElementById('container');

var card = document.createElement('div');
card.className = 'card';
container.appendChild(card);


var leftColumn = document.createElement('div');
leftColumn.id = 'left-column';

var productImg = document.createElement('img');
productImg.id = 'productImg';
productImg.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg';
leftColumn.appendChild(productImg);

card.appendChild(leftColumn);
var rightColumn = document.createElement('div');
rightColumn.id = 'right-column';
card.appendChild(rightColumn);

var productDesc = document.createElement('div');
productDesc.className = 'product-description';
rightColumn.appendChild(productDesc);
var productName = document.createElement('h1');
productName.id = 'name';
productName.innerHTML = 'Men Navy Blue Solid Sweatshirt';
productDesc.appendChild(productName);
var productBrand = document.createElement('h4');
productBrand.id = 'brand';
productBrand.innerHTML = 'United Colors of Benetton';
productDesc.appendChild(productBrand);
var productPriceH3 = document.createElement('h3');
productPriceH3.innerHTML = 'Price: Rs'
var productPriceSpan = document.createElement('span');
productPriceSpan.id = 'price';
productPriceSpan.innerHTML = ' 2599';
productPriceH3.appendChild(productPriceSpan);
productDesc.appendChild(productPriceH3);
var productPriceSpan = document.createElement('span');

var productDetails = document.createElement('div');
productDetails.className = 'description';
productDesc.appendChild(productDetails);

var productDetailsH3 = document.createElement('h3');
productDetailsH3.innerHTML = 'Description';
productDetails.appendChild(productDetailsH3);
var productDetailsP = document.createElement('p');
productDetailsP.id = 'description'
productDetailsP.innerHTML = 'Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem';
productDetails.appendChild(productDetailsP);

var productPreview = document.createElement('div');
productPreview.className = 'product-preview';
productDesc.appendChild(productPreview);

var productPreviewHeading = document.createElement('h3');
productPreviewHeading.innerHTML = 'Product-Preview';
productPreview.appendChild(productPreviewHeading);

var productPreviewImage = document.createElement('div');
productPreviewImage.className = 'previewImg';
productPreview.appendChild(productPreviewImage);

var previewImg01 = document.createElement('img');
previewImg01.id = 'img0';
previewImg01.className = 'active';
previewImg01.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg';
productPreviewImage.appendChild(previewImg01);

var previewImg2 = document.createElement('img');
previewImg2.id = 'img1';
previewImg2.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg';
productPreviewImage.appendChild(previewImg2);

var previewImg3 = document.createElement('img');
previewImg3.id = 'img2';
previewImg3.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg';
productPreviewImage.appendChild(previewImg3);


var previewImg4 = document.createElement('img');
previewImg4.id = 'img3';
previewImg4.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg';
productPreviewImage.appendChild(previewImg4);

var previewImg5 = document.createElement('img');
previewImg5.id = 'img4';
previewImg5.src = 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg';
productPreviewImage.appendChild(previewImg5);


var buttonWrapper = document.createElement('div');
buttonWrapper.className = 'btn';
rightColumn.appendChild(buttonWrapper);

var addToCartButton = document.createElement('button');
addToCartButton.id = 'add-to-cart';
addToCartButton.innerHTML = 'Add to Cart'
buttonWrapper.appendChild(addToCartButton);











console.log(container);