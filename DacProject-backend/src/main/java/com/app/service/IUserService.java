package com.app.service;

import java.util.List;

import com.app.dto.LoginResponse;
import com.app.pojos.User;

public interface IUserService {
	
	LoginResponse authenticateLogin(String email,String pwd);

	List<User> getAllUsers();

	User addorUpdateUserDetails(User user);

	String deleteUserDetails(int id);

	User fetchUserDetails(int userId);


}
