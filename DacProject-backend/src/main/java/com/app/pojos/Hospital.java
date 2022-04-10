package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "hospitals")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Hospital extends BaseEntity{
	@Column(length = 40)
	@NotBlank(message = "Name is required")
	private String hpName;
	@Column(length = 20,unique = true)
	@NotBlank(message = "Email is required")
	private String hpEmail;
	@Column(length = 50)
	private String hpAddress;

	
	

}
