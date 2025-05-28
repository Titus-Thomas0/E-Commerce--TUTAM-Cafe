package com.titus.tutam_cafe.service;

import com.titus.tutam_cafe.exception.UserException;
import com.titus.tutam_cafe.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User finduserProfileByJwt(String jwt) throws UserException;
}
