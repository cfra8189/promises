import {
    fetchProductCatalog,
    fetchProductReviews,
    fetchSalesReport,
} from './apiSimulator.js';

 fetchProductCatalog()
    .then((products) => {
        console.log(products);
    })

    // .then(() => fetchProductReviews){
    //     console.log(productID, comment);
    // }

    