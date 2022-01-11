/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import ProductTable from "./ProductTable";
import SearchBar from "./SearchBar";

interface IFilterableProductTableProps {
    products: any,
}


const FilterableProductTable = (props: IFilterableProductTableProps) => {
    return (
        <div style={{
                borderRadius: 5,
                border: '1px solid red', padding: 30, width: 250, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
           <SearchBar/>
           <ProductTable 
                products={props.products}
            />
        </div>
    )
}

export default FilterableProductTable;