import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

interface IProductTableProps {
    products: any,
}

const ProductTable = (props: any) => {

    const rows: any = [];
    let lastCategory: any = null;
    const [filterText, setFilterText] = React.useState<string>('')
    
    props.products.forEach((product: any) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category = {product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product = {product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

export default ProductTable;