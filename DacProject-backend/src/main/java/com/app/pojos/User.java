package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//login_role,username,password
@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User extends BaseEntity{
	@Column(length = 20)
	@NotBlank(message = "Name is required")
	private String name;
	@Column(length = 20,unique = true)
	@NotBlank(message = "Email is required")
	private String email;
	@Column(length = 20, nullable = false)
	@NotBlank(message = "password is required")
	private String password;
	@Enumerated(EnumType.STRING)
	@Column(length = 15)
	private Role role;
	private LocalDate dob;
	private int age;
	@Column(length = 10,unique = true)
	private long mobileNo;
	@Column(length = 50)
	private String address;
	@Column(length = 10)
	@NotBlank(message = "Gender is required")
	private String gender;
//	@OneToOne
//	@JoinColumn(name = "record_id")
//	private Record records;
	
	

}
