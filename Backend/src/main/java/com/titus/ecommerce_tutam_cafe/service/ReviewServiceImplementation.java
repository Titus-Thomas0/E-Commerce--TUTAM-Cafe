package com.titus.ecommerce_tutam_cafe.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.titus.ecommerce_tutam_cafe.exception.ProductException;
import com.titus.ecommerce_tutam_cafe.model.Product;
import com.titus.ecommerce_tutam_cafe.model.Review;
import com.titus.ecommerce_tutam_cafe.model.User;
import com.titus.ecommerce_tutam_cafe.repository.ProductRepository;
import com.titus.ecommerce_tutam_cafe.repository.ReviewRepository;
import com.titus.ecommerce_tutam_cafe.request.ReviewRequest;

@Service
public class ReviewServiceImplementation implements ReviewService {
	
	private ReviewRepository reviewRepository;
	private ProductService productService;
	private ProductRepository productRepository;
	
	public ReviewServiceImplementation(ReviewRepository reviewRepository, ProductService productService, ProductRepository productRepository) {
		this.reviewRepository = reviewRepository;
		this.productService = productService;
		this.productRepository = productRepository;
	}

	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		Product product = productService.findProductById(req.getProductId());
		
		Review review = new Review();
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		
		return reviewRepository.save(review);
	}

	@Override
	public List<Review> getAllReview(Long productId) {
		
		return reviewRepository.getAllProductsReview(productId);
	}
	
}
