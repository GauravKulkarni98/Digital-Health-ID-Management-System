package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Record;

public interface RecordRepository extends JpaRepository<Record, Integer>{

	@Query("select r from Record r where r.userId.id =:id")
	List<Record> findRecordsByUId(@Param("id") int  id);
}
