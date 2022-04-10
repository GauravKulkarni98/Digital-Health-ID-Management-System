package com.app.dto;

public class UserDto {
	private String email;
	private String password;
	public UserDto() {
		super();
	}
	@Override
	public String toString() {
		return "UserDto [email=" + email + ", password=" + password + "]";
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	
}