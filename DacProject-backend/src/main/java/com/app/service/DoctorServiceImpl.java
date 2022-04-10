package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.DoctorRepository;
import com.app.pojos.Doctor;

@Service // to tell the container whatever follows contains business logic
@Transactional
public class DoctorServiceImpl implements IDoctorService {
	@Autowired
	private DoctorRepository docRepo;

	@Override
	public List<Doctor> getAllDoctors() {
		return docRepo.findAll();
	}

	@Override
	public Doctor addorUpdateDoctorDetails(Doctor doc) {
		return docRepo.save(doc);
	}

	@Override
	public String deleteDoctorDetails(int docId) {
		docRepo.deleteById(docId);
		return "Doctor Details with Id-> " + docId + " deleted successfully!!!";
	}

	@Override
	public Doctor fetchDoctorDetails(int docId) {
		return docRepo.findById(docId)
				.orElseThrow(() -> new ResourceNotFoundException("Doctor of Id-> " + docId + " not found!!!"));
	}

}
