package com.titus.ecommerce_tutam_cafe.service;

import java.util.List;

import com.titus.ecommerce_tutam_cafe.exception.OrderException;
import com.titus.ecommerce_tutam_cafe.model.Address;
import com.titus.ecommerce_tutam_cafe.model.Order;
import com.titus.ecommerce_tutam_cafe.model.User;

public interface OrderService {
	
	public Order createOrder(User user, Address shippingAddress);
	
	public Order findOrderById(Long orderId) throws OrderException;
	
	public List<Order> userOrderHistory(Long userId);
	
	public Order placedOrder(Long orderId) throws OrderException;
	
	public Order confirmedOrder(Long orderId) throws OrderException;
	
	public Order shippedOrder(Long orderId) throws OrderException;
	
	public Order deliveredOrder(Long orderId) throws OrderException;
	
	public Order cancelledOrder(Long orderId) throws OrderException;
	
	public List<Order> getAllOrders();
	
	public void deleteOrder(Long orderId) throws OrderException;
}
