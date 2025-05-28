package com.titus.tutam_cafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.titus.tutam_cafe.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	public User findByEmail(String email);
}
