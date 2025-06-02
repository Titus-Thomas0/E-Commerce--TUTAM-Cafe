package com.titus.ecommerce_tutam_cafe.service;

import com.titus.ecommerce_tutam_cafe.exception.CartItemException;
import com.titus.ecommerce_tutam_cafe.exception.UserException;
import com.titus.ecommerce_tutam_cafe.model.Cart;
import com.titus.ecommerce_tutam_cafe.model.CartItem;
import com.titus.ecommerce_tutam_cafe.model.Product;

public interface CartItemService {
	
	public CartItem createCartItem(CartItem cartItem);
	
	public CartItem updateCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException;
	
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId);
	
	public void removeCartItem(Long userId, long cartItemId) throws CartItemException, UserException;
	
	public CartItem findCartItemById(Long cartItemId) throws CartItemException;
}
