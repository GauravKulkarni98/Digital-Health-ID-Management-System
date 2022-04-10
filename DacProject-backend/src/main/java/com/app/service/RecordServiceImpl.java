package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dao.RecordRepository;
import com.app.pojos.Record;

@Service // to tell the container whatever follows contains business logic
@Transactional
public class RecordServiceImpl implements IRecordService {
	@Autowired
	private RecordRepository recordRepo;
//	@Autowired
//	private UserRepository userRepo;

	@Override
	public List<Record> getAllRecords() {
		return recordRepo.findAll();
	}

	@Override
	public Record addorUpdateRecordDetails(Record rec) {
		return recordRepo.save(rec);
	}

	@Override
	public String deleteRecordDetails(int recId) {
		recordRepo.deleteById(recId);
		return "Record Details with Id-> " + recId + " deleted successfully!!!";
	}

	@Override
	public Record fetchRecordDetails(int recId) {
		return recordRepo.findById(recId)
				.orElseThrow(() -> new ResourceNotFoundException("Record of Id-> " + recId + " not found!!!"));
	}

	@Override
	public List<Record> findRecordsByUID(int id) {
		return recordRepo.findRecordsByUId(id);
	}

	

	
	
	

}
