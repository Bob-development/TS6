/*
    TV: Телевизор,
    Laptop: Ноутбук,
    Smartphone: Смартфон,
    Fridge: Холодильник,
    Boiler: Бойлер,
    Stove: Печь,
    Washing Machine: Стиральная машина,
    Vacuum Cleaner: Пылесос,
    Conditioner: Кондиционер,
    Iron: Утюг,
    Teapot: Чайник,
    Electric Shaver: Электро-бритва,
    Toaster: Тостер,
    Coffee Machine: Кофемашина
*/

const jsonProducts = [
    {"category":"TV","price":1500,"manufacturer":"Sony","createdAt":"2019-05-28T17:55:29.945Z"},
    {"category":"Laptop","price":1200,"manufacturer":"Acer","createdAt":"2019-05-28T19:55:29.946Z"},
    {"category":"Smartphone","price":750,"manufacturer":"Apple","createdAt":"2018-03-08T10:45:00.000Z"},
    {"category":"Fridge","price":1850,"manufacturer":"Vestfrost","createdAt":"2018-05-28T17:55:29.946Z"},
    {"category":"Boiler","price":500,"manufacturer":"Indesit","createdAt":"2014-12-25T08:30:00.000Z"},
    {"category":"Stove","price":700,"manufacturer":"Gorenje","createdAt":"2018-09-17T11:00:00.000Z"},
    {"category":"Washing Machine","price":850,"manufacturer":"Electrolux","createdAt":"2019-05-28T18:55:29.946Z"},
    {"category":"Vacuum Cleaner","price":450,"manufacturer":"Samsung","createdAt":"2019-05-13T17:55:29.946Z"},
    {"category":"Conditioner","price":1000,"manufacturer":"Toshiba","createdAt":"2017-07-01T00:00:00.000Z"},
    {"category":"Iron","price":320,"manufacturer":"Philips","createdAt":"2013-11-18T07:20:00.000Z"},
    {"category":"Teapot","price":400,"manufacturer":"Bosch","createdAt":"2016-10-03T09:45:00.000Z"},
    {"category":"Electric Shaver","price":440,"manufacturer":"Braun","createdAt":"2019-05-29T03:55:29.946Z"},
    {"category":"Toaster","price":620,"manufacturer":"Tefal","createdAt":"2015-05-29T03:55:29.946Z"},
    {"category":"Coffee Machine","price":1300,"manufacturer":"Delonghi","createdAt":"2019-05-28T02:55:29.946Z"}
];

class Store {
    constructor(){
        let isProgramWork = true;

        while(isProgramWork){
            const chosenPoint = prompt('Welcome to our store!\nChoose pls what ar u want to do:\na) Whatch list of products;\nb) Filters;\nc) Sort products;\nq) Quit;');
        
            switch (chosenPoint) {
                case 'a':
                    this.showAllProducts(jsonProducts);
                    break;
            
                case 'b':
                    this.filterProducts();
                    break;
            
                case 'c':
                    break;
            
                case 'q':
                    isProgramWork = false;
                    break;
                default:
                    break;
            }
        }
    }

    showAllProducts(productsArr: object[]){
        productsArr.forEach((product: object)=>{
            console.log(product);
        })
    }

    // --filters

    filterProducts(){
        const filterBy = prompt('How u will filter by?\na) Category;\nb) Price;\nc) Manufactorer\nd) Data;\ne) Clear all filters;');

        let filtredProducts: object[] = [];

        switch (filterBy) {
            case 'a':
                this.filterByCategory(jsonProducts, filtredProducts);
                console.log(filtredProducts);
                
                break;

            case 'b':
                
                break;

            case 'c':
                
                break;

            case 'd':
                
                break;

            case 'e':
                
                break;
        
            default:
                break;
        }
    }

    filterByCategory(productsArr: object[], filtredProducts: object[]){        
        let choseCategory: string = prompt('Choose some filters(Example: 123 or 5');

        let categoriesNeedsToShow: [] = []
        
        for(let i = 0; i < choseCategory.length; i++){
            categoriesNeedsToShow.push(+choseCategory[i]);
        }

        productsArr.filter((product)=>{
            for(let i = 0; i < categoriesNeedsToShow.length; i++){
                const categoryNum = categoriesNeedsToShow[i] - 1;
                
                if(productsArr.indexOf(product) === categoryNum){                    
                    return filtredProducts.push(product)
                }
            }
        })
    }

    filterByPrice(productsArr: object[], filtredProducts: object[]){}
}




const result = new Store();