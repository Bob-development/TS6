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

let filtredProducts: [] = [];

class Store {
    constructor(){
        let isProgramWork = true;

        while(isProgramWork){
            const chosenPoint = prompt('Welcome to our store!\nChoose pls what ar u want to do:\na) Whatch list of products;\nb) Filters;\nq) Quit;');
        
            switch (chosenPoint) {
                case 'a':
                    if(filtredProducts.length === 0){
                        this.showAllProducts(jsonProducts);
                    } else {                    
                        this.showAllProducts(filtredProducts);
                    }
                    break;
            
                case 'b':
                    this.filterProducts(filtredProducts);
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

    filterProducts(filtredProducts: []){
        const filterBy = prompt('How u will filter by?\na) Category;\nb) Price;\nc) Manufactorer\nd) Data;\ne) Clear all filters;');

        switch (filterBy) {
            case 'a':
                if(filtredProducts.length === 0){
                    filtredProducts = this.filterByCategoryOrManufactorer(jsonProducts, filtredProducts);
                    console.log(filtredProducts);
                } else {                    
                    filtredProducts = this.filterByCategoryOrManufactorer(filtredProducts);
                    console.log(filtredProducts);
                }
                
                break;

            case 'b':
                if(filtredProducts.length === 0){
                    filtredProducts = this.filterByPrice(jsonProducts, filtredProducts);
                    console.log(filtredProducts);
                } else {                    
                    filtredProducts = this.filterByPrice(filtredProducts);
                    console.log(filtredProducts);
                }
                break;

            case 'c':
                if(filtredProducts.length === 0){
                    filtredProducts = this.filterByCategoryOrManufactorer(jsonProducts, filtredProducts);
                    console.log(filtredProducts);
                } else {                    
                    filtredProducts = this.filterByCategoryOrManufactorer(filtredProducts);
                    console.log(filtredProducts);
                }
                break;

            case 'd':
                if(filtredProducts.length === 0){
                    filtredProducts = this.filterByDate(jsonProducts, filtredProducts);
                    console.log(filtredProducts);
                } else {                    
                    filtredProducts = this.filterByDate(filtredProducts);
                    console.log(filtredProducts);
                }
                break;

            case 'e':
                filtredProducts.length = 0;
                break;
        
            default:
                break;
        }
    }

    filterByCategoryOrManufactorer(productsArr: object[], filtredProducts?: object[]){        
        let choseCategory: string = prompt('Choose some filters(Example: 123 or 5');

        let categoriesNeedsToShow: [] = []
        
        for(let i = 0; i < choseCategory.length; i++){
            categoriesNeedsToShow.push(+choseCategory[i]);
        }

        if(filtredProducts){
            return productsArr.filter((product)=>{
                for(let i = 0; i < categoriesNeedsToShow.length; i++){
                    const categoryNum = categoriesNeedsToShow[i] - 1;
                    
                    if(productsArr.indexOf(product) === categoryNum){                    
                        return filtredProducts.push(product)
                    }
                }
            })
        } else {
            return productsArr.filter((product)=>{                
                for(let i = 0; i < categoriesNeedsToShow.length; i++){
                    const categoryNum = categoriesNeedsToShow[i] - 1;
                    
                    if(productsArr.indexOf(product) === categoryNum){                    
                        return true;
                    }
                }
            })
        }
    }

    filterByPrice(productsArr: object[], filtredProducts?: []){
        const minPrice = prompt('Enter min price: ');
        const maxPrice = prompt('Enter max price: ');

        if(filtredProducts){
            return productsArr.filter((product)=>{
                const productPrice = +product.price;
                
                if(productPrice > +minPrice && productPrice < +maxPrice){
                    return filtredProducts.push(product);                    
                }
            })
        } else {
            return productsArr.filter((product)=>{                
                const productPrice = +product.price;
                
                if(productPrice > +minPrice && productPrice < +maxPrice){
                    return true;                    
                }
            })
        }
    }

    filterByDate(productsArr: object[], filtredProducts?: []){
        const minDate = prompt('Enter min year: (example: 2015-03)');
        const maxDate = prompt('Enter max year: (example: 2015-03)');

        const minDateYear = +minDate?.slice(0, 4);
        const minDateMonth = +minDate?.slice(5, 7);
        
        const maxDateYear = +maxDate?.slice(0, 4);
        const maxDateMonth = +maxDate?.slice(5, 7);

        if(filtredProducts){
            return productsArr.filter((product)=>{
                const productYear = +product.createdAt.slice(0, 4);
                const productMonth = +product.createdAt.slice(5, 7);                

                
                if(productYear > minDateYear && productYear < maxDateYear){
                    return filtredProducts.push(product);                    
                } else if(productYear === minDateYear || productYear === maxDateYear){
                    
                    if(productMonth > minDateMonth && productMonth < maxDateMonth){
                        return filtredProducts.push(product);
                    }
                }
            })
        } else {
            return productsArr.filter((product)=>{                
                const productYear = +product.createdAt.slice(0, 4);
                const productMonth = +product.createdAt.slice(5, 7);                

                
                if(productYear > minDateYear && productYear < maxDateYear){
                    return true;                    
                } else if(productYear === minDateYear || productYear === maxDateYear){
                    
                    if(productMonth > minDateMonth && productMonth < maxDateMonth){
                        return true;
                    }
                }
            })
        }
    }


}




const result = new Store();