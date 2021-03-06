import React from 'react';
import SHOP_DATA from './shop.data';
import './shop.style.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
        console.log(this.state.collections);
    }
    render() {
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections
                    .map(({id, ...otherCollectionItems}) => (
                        <CollectionPreview key={id} {...otherCollectionItems} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;