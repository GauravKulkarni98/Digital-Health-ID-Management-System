package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.UserRepository;
import com.app.dto.LoginResponse;
import com.app.pojos.User;

@Service // to tell the container whatever follows contains business logic
@Transactional
public class UserServiceImpl implements IUserService {
	@Autowired
	private UserRepository userRepo;
	

	@Override
	public LoginResponse authenticateLogin(String email, String pwd) {
		User login = userRepo.findByEmailAndPassword(email, pwd)
				.orElseThrow(() -> new ResourceNotFoundException("Login Failed...Invalid Credentials"));
		return new LoginResponse(login.getId(),login.getName(), login.getEmail(), login.getRole());
	}

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();// method of JpaRepo
	}

	@Override
	public User addorUpdateUserDetails(User user) {
		return userRepo.save(user);
	}

	@Override
	public String deleteUserDetails(int userId) {
		userRepo.deleteById(userId);
		return "User Details with Id '" + userId + "' deleted successfully!!!";
	}

	@Override
	public User fetchUserDetails(int userId) {
		return userRepo.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User of ID: " + userId + " not found!!!"));
	}

}
