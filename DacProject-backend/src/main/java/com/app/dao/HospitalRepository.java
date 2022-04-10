package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Hospital;

public interface HospitalRepository extends JpaRepository<Hospital, Integer>{

	Optional<Hospital> findByHpName(String hosp);
}
