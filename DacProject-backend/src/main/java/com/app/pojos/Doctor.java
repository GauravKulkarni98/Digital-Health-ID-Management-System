package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "doctors")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Doctor extends BaseEntity{
	@Column(length = 20)
	@NotBlank(message = "Name is required")
	private String name;
	@Column(length = 20,unique = true)
	@NotBlank(message = "Email is required")
	private String email;
	@Column(length = 10,unique = true)
	private long mobileNo;
	@Enumerated(EnumType.STRING)
	@Column(length = 15)
	private Speciality speciality;
	//Doctor  *---->1 Hospital uni dir
	@ManyToOne //(fetch = FetchType.LAZY)
	@JoinColumn(name = "hospital_id",nullable = false) // fk id
	private Hospital hospitalId;
	
	

	
	

}
