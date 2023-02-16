import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useProductManageStore from '../hooks/useProductManageStore';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 840px;
  
  li{
    width: 100px;
    height: 100px;
  }
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    height: 100%;
  }
`;

const ProductRegister = styled.div`
  display : flex ;
 
  a{
    border: 1px solid black;
    margin-top: 20px;
    padding: 10px 20px;
  }
`;

export default function ProductsPage() {
  const productManageStore = useProductManageStore();

  const { products } = productManageStore;

  useEffect(() => {
    productManageStore.fetchProducts();
  }, []);

  return (
    <Container>
      <p>Register</p>
      <ProductList>
        {products?.map((product) => (
          <li key={product.id}>
            <Link className="item" to={`${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ProductList>
      <ProductRegister>
        <Link to="product">피티상품등록</Link>
        <Link to="trainer">트레이너등록</Link>
      </ProductRegister>
    </Container>
  );
}
