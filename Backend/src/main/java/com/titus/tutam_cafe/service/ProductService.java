package com.titus.tutam_cafe.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.titus.tutam_cafe.exception.ProductException;
import com.titus.tutam_cafe.model.Product;
import com.titus.tutam_cafe.request.CreateProductRequest;

public interface ProductService {
	
	public Product createProduct(CreateProductRequest req);
	
	public String deleteProduct(Long productId) throws ProductException;
	
	public Product updateProduct(Long productId, Product product) throws ProductException;
	
	public Product findProductById(Long id) throws ProductException;
	
	public List<Product> findProductByCategory(String category);
	
	public Page<Product>getAllProduct(String category, List<String>colors, List<String>sizes, Integer minprice, Integer maxPrice,
			Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize);
}
