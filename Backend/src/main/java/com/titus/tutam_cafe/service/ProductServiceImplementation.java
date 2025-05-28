package com.titus.tutam_cafe.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.titus.tutam_cafe.exception.ProductException;
import com.titus.tutam_cafe.model.Product;
import com.titus.tutam_cafe.repository.CategoryRepository;
import com.titus.tutam_cafe.repository.ProductRepository;
import com.titus.tutam_cafe.request.CreateProductRequest;

@Service
public class ProductServiceImplementation implements ProductService {
	
	private ProductRepository productRepository;
	private UserService userService;
	private CategoryRepository categoryRepository;
	
	public ProductServiceImplementation(ProductRepository productRepository,
			UserService userService,
			CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.userService = userService;
		this.categoryRepository = categoryRepository;
	}
	
	@Override
	public Product createProduct(CreateProductRequest req) {
		
		
		
		return null;
	}

	@Override
	public String deleteProduct(Long productId) throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product updateProduct(Long productId, Product product) throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product findProductById(Long id) throws ProductException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Product> findProductByCategory(String category) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Page<Product> getAllProduct(String category, List<String> colors, List<String> sizes, Integer minprice,
			Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {
		// TODO Auto-generated method stub
		return null;
	}

}
