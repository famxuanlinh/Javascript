var products = [
    { name: "A", unitPrice: 100, quantity: 10, category: "Electronic" },
    { name: "B", unitPrice: 100, quantity: 20, category: "Kitchens" },
    { name: "C", unitPrice: 50, quantity: 4, category: "Electronic" },
    { name: "D", unitPrice: 700, quantity: 2, category: "Kitchens" }
];

var productsListElement = $('#productsList');
var categoryFilterElement = $('#categoryFilter');

categoryFilterElement.on('change', function(){
    var selectedCategory = this.value;
    console.log (selectedCategory);
    if (selectedCategory == "all") {
        console.log ('');
        render(productsListElement, products);
    }
    else {
        var filteredProducts = products.filter(function(product){
            return product.category === selectedCategory;
            });
            console.log (filteredProducts);
        render(productsListElement, filteredProducts);
    }
});

function render(parentElement, items) {
    var htmlItems = items.map(function (item) {
        return '<li></li>' + item.name + '</li>';
    });
    var htmlText = htmlItems.join('');
    parentElement.html(htmlText);
}
render(productsListElement, products);