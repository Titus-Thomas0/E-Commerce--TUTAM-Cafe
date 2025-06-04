package com.titus.ecommerce_tutam_cafe.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.titus.ecommerce_tutam_cafe.model.OrderItem;
import com.titus.ecommerce_tutam_cafe.repository.OrderItemRepository;

@Service
public class OrderItemServiceImplementation implements OrderItemService {
	
	@Autowired
	private OrderItemRepository orderItemRepository;
	
	public OrderItemServiceImplementation(OrderItemRepository orderItemRepository) {
		this.orderItemRepository = orderItemRepository;
	}

	@Override
	public OrderItem createOrderItem(OrderItem orderItem) {
		
		return orderItemRepository.save(orderItem);
	}
}
