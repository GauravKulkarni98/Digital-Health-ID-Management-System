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

import com.app.pojos.Doctor;
import com.app.service.IDoctorService;

@CrossOrigin(origins = "http://localhost:3000") //allow cross origin resource handling
@RestController // contains @Controller and @ResponseBody(used for marshalling)
@RequestMapping("/doctor")
public class DoctorController {
	@Autowired
	private IDoctorService docService;

	public DoctorController() {
		System.out.println(" in ctor of " + getClass());
	}

	// add req handling methods to send all doctors to front end(Method: GET)
	@GetMapping
	public ResponseEntity<?> getAllDoctorDetails() {
		System.out.println("in get all doctors");
		return ResponseEntity.ok(docService.getAllDoctors());
	}

	// add a req handling method to add a new doctor(Method: POST)
	@PostMapping
	public ResponseEntity<?> addDoctorDetails(@RequestBody @Valid Doctor doc) {
		System.out.println("in add hospital " + doc);
		return ResponseEntity.ok(docService.addorUpdateDoctorDetails(doc));
	}

	// add a req handling method to delete doctor details by id(Method: DELETE)
	@DeleteMapping("/{docId}")
	public ResponseEntity<?> deleteDoctorDetais(@PathVariable int docId) {
		System.out.println("in del user details " + docId);
		return new ResponseEntity<>(docService.deleteDoctorDetails(docId), HttpStatus.OK);
	}

	// add a req handling method to get select doctor details by id(Method: GET)
	@GetMapping("/{docId}")
	public ResponseEntity<?> getDoctorDetails(@PathVariable int docId) {
		System.out.println("in get hospital details " + docId);
		return ResponseEntity.ok(docService.fetchDoctorDetails(docId));
	}

	// add a req handling method to update the existing doctor details(Method: PUT)
	@PutMapping("/{docId}")
	public ResponseEntity<?> updateDoctorDetails(@RequestBody Doctor d,@PathVariable int docId) {
		System.out.println("in update hospital details" + d);
		d.setId(docId);
		return new ResponseEntity<>(docService.addorUpdateDoctorDetails(d), HttpStatus.CREATED);
	}

}
