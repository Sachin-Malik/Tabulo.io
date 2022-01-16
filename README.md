# Tabulo.io

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Major Features of Tabulo.io`

1.  Search By {Name} property.
2.  Filter by {Meal} type i.e. Main Course, Appetizers, Dessert and drink.
3.  Sort the items on basis of {price}
4.  Let user select number of items they want to see per page.


### `Major Components`

1. `<Table />` It is the main table and consist of following components.  
   
    `<TableInfo />`  This component show the info about items rendered on table. i.e what are you looking at.  

    `<TableHeading />` This render the headging for the table.  

    `<TableBody />` This renderes the table body i.e. rows of the table.  


2. `<FilterNav />` All Filters that can be applied to table. i.e Meals Filter, Items per page and search.
    
    `<DropDown />` Meal Dropdown. this let to select type of items you want to see in your query result.  

    `<ItemsPerPage />` This let you select how many result per page you want to see.  

    `<Search /> `This return result according to your search term.  

    `<ResetFilters>` This reset all filter. i.e show whole menu.  


3.  `<Pagination />` Implement pagination for the current query result.  


### `Improvements to Come`

1. Search Improvement  
   At the moment search run on 'search' button click. I want to upgrade it to 'Debounced Search' Which runs search query when user types into search with some 'Debouncing Time'

2. Responsive  
   At the moment is only renders beautifully for large and medium screen. It renders horribly for small devices i.e mobile and small ipads.
