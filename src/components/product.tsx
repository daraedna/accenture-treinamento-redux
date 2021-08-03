import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store';
import { IProduct, IProductState } from '../store/products/types';

interface IProductProps {
    product?: IProduct,
}

function Product({ product } : IProductProps ) {
    return (
        <>
        {product &&
            <div>
                <h2>Página do produto</h2>
                {product.title ?
                    <>
                        <h3>{product.title}</h3>
                        <p><strong>Valor: R$</strong>{product.value},00</p>
                        <h4>Módulos</h4>
                        <ul>
                            {product.modules.map(module => (
                                <li key={module.id}>{module.title}</li>
                                ))}
                        </ul>
                    </>
                    :
                    <p>Nenhum produto selecionado</p>
                }
            </div>
        }
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    product: state.product.product
});

export default connect(mapStateToProps)(Product)


