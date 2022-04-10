package com.app.controller;

//only admin will have access to this controller

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Hospital;
import com.app.service.IHospitalService;

@CrossOrigin(origins = "http://localhost:3000") // allow cross origin resource handling
@RestController // contains @Controller and @ResponseBody(used for marshalling)
@RequestMapping("/hospital")
public class HospitalController {
	@Autowired
	private IHospitalService hospService;

	public HospitalController() {
		System.out.println(" in ctor of " + getClass());
	}

	// add req handling methods to send all hospitals to front end(Method: GET)
	@GetMapping
	public ResponseEntity<?> getAllHospitalDetails() {
		System.out.println("in get all hospitals");
		return ResponseEntity.ok(hospService.getAllHospitals());
	}

	// add a req handling method to add a new Hospital(Method: POST)
	@PostMapping
	public ResponseEntity<?> addHospitalDetails(@RequestBody @Valid Hospital hosp) {
		System.out.println("in add hospital " + hosp);
		return ResponseEntity.ok(hospService.addorUpdateHospitalDetails(hosp));
	}

	// add a req handling method to delete hospital details by id(Method: DELETE)
	@DeleteMapping("/{hospId}")
	public ResponseEntity<?> deleteHospitalDetails(@PathVariable int hospId) {
		System.out.println("in del user details " + hospId);
		return new ResponseEntity<>(hospService.deleteHospitalDetails(hospId), HttpStatus.OK);
	}

	// add a req handling method to get select hospital details by id(Method: GET)
	@GetMapping("/{hospId}")
	public ResponseEntity<?> getHospitalDetails(@PathVariable int hospId) {
		System.out.println("in get hospital details " + hospId);
		return ResponseEntity.ok(hospService.fetchHospitalDetails(hospId));
	}

	// add a req handling method to update the existing hospital details(Method:
	// PUT)
	@PutMapping("/{hospId}")
	public ResponseEntity<?> updateHospitalDetails(@RequestBody Hospital h, @PathVariable int hospId) {
		System.out.println("in update hospital details" + h);
		// populate the user object with existing id of the user
		h.setId(hospId);
		return new ResponseEntity<>(hospService.addorUpdateHospitalDetails(h), HttpStatus.CREATED);
	}

}
