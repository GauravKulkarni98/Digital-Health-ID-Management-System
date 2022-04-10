package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.HospitalRepository;
import com.app.pojos.Hospital;

@Service // to tell the container whatever follows contains business logic
@Transactional
public class HospitalServiceImpl implements IHospitalService {
	@Autowired
	private HospitalRepository hospRepo;

	@Override
	public List<Hospital> getAllHospitals() {
		return hospRepo.findAll();
	}

	@Override
	public Hospital addorUpdateHospitalDetails(Hospital hosp) {
		return hospRepo.save(hosp);
	}

	@Override
	public String deleteHospitalDetails(int id) {
		hospRepo.deleteById(id);
		return "Hospital Details with Id-> " + id + " deleted successfully!!!";
	}

	@Override
	public Hospital fetchHospitalDetails(int hospId) {
		return hospRepo.findById(hospId)
				.orElseThrow(() -> new ResourceNotFoundException("Hospital of Id-> " + hospId + " not found!!!"));
	}

}
