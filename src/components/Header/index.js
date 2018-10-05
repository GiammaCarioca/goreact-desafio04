import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '../../store/ducks/categories';

import {
  Wrapper, Container, Logo, Cart, Nav, Category,
} from './styles';

class Header extends Component {
  state = {
    selectedCategory: null,
  };

  static propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <Logo to="/">GoCommerce</Logo>
          <Cart to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            Meu carrinho (
            {this.props.cart.totalItems}
)
          </Cart>
        </Container>
        <Nav>
          <ul>
            {this.props.categories.data.map(category => (
              <li key={category.id}>
                <Category
                  to={`/category_products/${category.id}`}
                  onClick={() => this.setState({ selectedCategory: category.id })}
                  selected={this.state.selectedCategory === category.id}
                >
                  {category.title}
                </Category>
              </li>
            ))}
          </ul>
        </Nav>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  cart: state.cart,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
