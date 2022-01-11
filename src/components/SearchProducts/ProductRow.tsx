import React from "react";

interface IProductRowProps {
  product: any;
}

const ProductRow = (props: IProductRowProps) => {
  const product = props.product;
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </div>
  );
};

export default ProductRow;
