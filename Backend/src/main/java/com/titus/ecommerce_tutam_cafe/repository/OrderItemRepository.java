package com.titus.ecommerce_tutam_cafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.titus.ecommerce_tutam_cafe.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
	
}
