package com.titus.ecommerce_tutam_cafe.service;

import com.titus.ecommerce_tutam_cafe.exception.UserException;
import com.titus.ecommerce_tutam_cafe.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
}
