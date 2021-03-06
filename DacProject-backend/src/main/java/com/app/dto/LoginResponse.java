package com.app.dto;

import com.app.pojos.Role;

//@AllArgsConstructor
//@NoArgsConstructor
//@Setter
//@Getter
//@ToString
public class LoginResponse {
	private int id;
	private String name;
	private String email;
	private Role role;

	public LoginResponse() {
		// TODO Auto-generated constructor stub
	}

	public LoginResponse(int id, String name, String email, Role role) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.role = role;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "LoginResponse [id=" + id + ", name=" + name + ", email=" + email + ", role=" + role + "]";
	}

	
	

}
