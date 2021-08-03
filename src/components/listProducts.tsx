import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Styled } from './styles';

import api from '../services/api';

import * as ProductActions from '../store/products/actions';
import { IProduct, IProductState } from '../store/products/types';

interface IListProductsProps {
    products: IProduct[],
    toggleProduct(product: IProduct): void,
    getProducts(): void
}

interface IResponseProducts {
    data: IProduct[]
}

const ListProducts = ({ products, toggleProduct, getProducts } : IListProductsProps) => {

    useEffect(() => {
        getProducts();
    }, [getProducts])

    return (
        <Styled.Container>
            <h2>Lista de produtos</h2>
            <Styled.Card>
                {products.map(product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Valor: {product.value}</p>
                        <button onClick={()=> toggleProduct(product)}>Selecionar Curso</button>
                    </div>
                ))}
            </Styled.Card>
        </Styled.Container>
    )
}

const mapStateToProps = (state: IProductState) => ({
    products: state.product.products
});

const mapDispatchToProps = (dispatch: Function) => ({
    toggleProduct: (product: IProduct) => dispatch(ProductActions.toggleProduct(product)),
    getProducts: () => dispatch(ProductActions.getProducts())

});

export default connect(mapStateToProps, mapDispatchToProps)(ListProducts)
