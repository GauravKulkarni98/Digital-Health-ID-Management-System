package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.UserDto;
import com.app.pojos.User;
import com.app.service.EmailService;
import com.app.service.IUserService;

@CrossOrigin(origins = "http://localhost:3000") //allow cross origin resource handling
@RestController // contains @Controller and @ResponseBody(used for marshalling)
@RequestMapping("/user")
public class UserController {
	@Autowired
	private IUserService userService;
	@Autowired
	private EmailService emailService;

	public UserController() {
		System.out.println(" in ctor of " + getClass());
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateLogin(@RequestBody UserDto request)
	{
		System.out.println("in auth login"+request);
		System.out.println(request.getEmail()+" "+request.getPassword());
		return ResponseEntity.ok(userService.authenticateLogin(request.getEmail(), request.getPassword()));
	}
	
	// add req handling methods to send all users to front end(Method: GET)
	@GetMapping
	public ResponseEntity<?> getAllUserDetails() {
		System.out.println("in get all users");
		return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
	}

	// add a req handling method to add a new User(Method: POST)
	@PostMapping
	public ResponseEntity<?> addUserDetails(@RequestBody @Valid User user) {
		System.out.println("in add user " + user);
		emailService.sendEmailForNewRegistration(user.getEmail());
		return new ResponseEntity<>(userService.addorUpdateUserDetails(user), HttpStatus.OK);
	}

	// add a req handling method to delete user details by id(Method: DELETE)
	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUserDetais(@PathVariable int userId) {
		System.out.println("in del user details " + userId);
		return new ResponseEntity<>(userService.deleteUserDetails(userId), HttpStatus.OK);
	}

	// add a req handling method to get select user details by id(Method: GET)
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserDetails(@PathVariable int userId) {
		System.out.println("in get user details " + userId);
		return ResponseEntity.ok(userService.fetchUserDetails(userId));
	}

	// add a req handling method to update the existing user details(Method: PUT)
	@PutMapping ("/{userId}")
	public ResponseEntity<?> updateUserDetails(@RequestBody User u, @PathVariable int userId) {
		System.out.println("in update user details" + u);
		// populate the user object with existing id of the user
		u.setId(userId);
		return new ResponseEntity<>(userService.addorUpdateUserDetails(u), HttpStatus.CREATED);
	}
}
