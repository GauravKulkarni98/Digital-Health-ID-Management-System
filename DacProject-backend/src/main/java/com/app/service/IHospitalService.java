package com.app.service;

import java.util.List;

import com.app.pojos.Hospital;


public interface IHospitalService {

	List<Hospital> getAllHospitals();

	Hospital addorUpdateHospitalDetails(Hospital hosp);

	String deleteHospitalDetails(int id);

	Hospital fetchHospitalDetails(int userId);
}
