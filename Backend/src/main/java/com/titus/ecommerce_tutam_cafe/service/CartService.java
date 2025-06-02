package com.titus.ecommerce_tutam_cafe.service;

import com.titus.ecommerce_tutam_cafe.exception.ProductException;
import com.titus.ecommerce_tutam_cafe.model.Cart;
import com.titus.ecommerce_tutam_cafe.model.User;
import com.titus.ecommerce_tutam_cafe.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId, AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);
}
