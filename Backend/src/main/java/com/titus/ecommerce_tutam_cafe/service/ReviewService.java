package com.titus.ecommerce_tutam_cafe.service;

import java.util.List;

import com.titus.ecommerce_tutam_cafe.exception.ProductException;
import com.titus.ecommerce_tutam_cafe.model.Review;
import com.titus.ecommerce_tutam_cafe.model.User;
import com.titus.ecommerce_tutam_cafe.request.ReviewRequest;

public interface ReviewService {
	
	public Review createReview(ReviewRequest req, User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
}
