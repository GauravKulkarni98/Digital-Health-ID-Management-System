//package com.app.pojos;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.Table;
//import javax.validation.constraints.NotBlank;
//
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Entity
//@Table(name = "admins")
//@NoArgsConstructor
//@AllArgsConstructor
//@Data
//public class Admin extends BaseEntity{
//	@Column(length = 20)
//	@NotBlank(message = "Name is required")
//	private String firstName;
//	@Column(length = 20)
//	private String lastName;
//	@Column(length = 20,unique = true)
//	@NotBlank(message = "Email is required")
//	private String email;
//
//
//}
