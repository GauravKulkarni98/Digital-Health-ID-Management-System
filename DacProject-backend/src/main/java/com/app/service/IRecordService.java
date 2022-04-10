package com.app.service;

import java.util.List;

import com.app.pojos.Record;

public interface IRecordService {
	
	List<Record> getAllRecords();

	Record addorUpdateRecordDetails(Record rec);

	String deleteRecordDetails(int recId);

	Record fetchRecordDetails(int recId);
	
	List<Record> findRecordsByUID(int id);


}
