package com.titus.ecommerce_tutam_cafe.service;

import java.util.List;

import com.titus.ecommerce_tutam_cafe.exception.ProductException;
import com.titus.ecommerce_tutam_cafe.model.Rating;
import com.titus.ecommerce_tutam_cafe.model.User;
import com.titus.ecommerce_tutam_cafe.request.RatingRequest;

public interface RatingService {
	
	public Rating createRating(RatingRequest req, User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);
}
