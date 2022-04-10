package com.app.service;

import java.util.List;

import com.app.pojos.Doctor;

public interface IDoctorService {
	
	List<Doctor> getAllDoctors();

	Doctor addorUpdateDoctorDetails(Doctor doc);

	String deleteDoctorDetails(int docId);

	Doctor fetchDoctorDetails(int docId);

}
