var productData = [{
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
        1,
        1,
        0,
        1,
        0
    ],
    // "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
}]

function photoPreview() {
    data.photos[i].onclick = function(e) {
        console.log(this.data.photos[i]);
    }

}


function generateData(data) {

    var container = document.getElementById('container');

    var card = document.createElement('div');
    card.className = 'card';
    container.appendChild(card);


    var leftColumn = document.createElement('div');
    leftColumn.id = 'left-column';

    var productImg = document.createElement('img');
    productImg.id = 'productImg';
    productImg.src = data.preview;
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
    productName.innerHTML = data.name;
    productDesc.appendChild(productName);
    var productBrand = document.createElement('h4');
    productBrand.id = 'brand';
    productBrand.innerHTML = data.brand;
    productDesc.appendChild(productBrand);
    var productPriceH3 = document.createElement('h3');
    productPriceH3.innerHTML = 'Price: Rs'
    var productPriceSpan = document.createElement('span');
    productPriceSpan.id = 'price';
    productPriceSpan.innerHTML = " " + data.price;
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
    productDetailsP.innerHTML = data.description;
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
    previewImg01.className = 'img-to-click'
    previewImg01.className = 'active';
    previewImg01.src = data.photos[0];
    productPreviewImage.appendChild(previewImg01);
    previewImg01.onclick = function(e) {
        productImg.src = previewImg01.src;
    }

    var previewImg2 = document.createElement('img');
    previewImg2.id = 'img1';
    previewImg2.className = 'img-to-click'
    previewImg2.src = data.photos[1];
    productPreviewImage.appendChild(previewImg2);
    previewImg2.onclick = function() {
        productImg.src = previewImg2.src;

    }


    var previewImg3 = document.createElement('img');
    previewImg3.id = 'img2';
    previewImg3.className = 'img-to-click'
    previewImg3.src = data.photos[2];
    productPreviewImage.appendChild(previewImg3);
    previewImg3.onclick = function() {
        productImg.src = previewImg3.src;
    }



    var previewImg4 = document.createElement('img');
    previewImg4.id = 'img3';
    previewImg4.className = 'img-to-click'
    previewImg4.src = data.photos[3];
    productPreviewImage.appendChild(previewImg4);
    previewImg4.onclick = function() {
        productImg.src = previewImg4.src;
    }


    var previewImg5 = document.createElement('img');
    previewImg5.id = 'img4';
    previewImg5.className = 'img-to-click'
    previewImg5.src = data.photos[4];
    productPreviewImage.appendChild(previewImg5);
    previewImg5.onclick = function() {
        productImg.src = previewImg5.src;
    }


    var buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'btn';
    rightColumn.appendChild(buttonWrapper);

    var addToCartButton = document.createElement('button');
    addToCartButton.id = 'add-to-cart';
    addToCartButton.innerHTML = 'Add to Cart'
    buttonWrapper.appendChild(addToCartButton);




    return card;


}

for (i = 0; i <= productData.length; i++) {
    generateData(productData[i]);
    photoPreview(productData[i]);

}