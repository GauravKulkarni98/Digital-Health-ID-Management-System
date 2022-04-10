package com.app.controller;

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

import com.app.pojos.Record;
import com.app.service.IRecordService;

@CrossOrigin(origins = "http://localhost:3000") // allow cross origin resource handling
@RestController // contains @Controller and @ResponseBody(used for marshalling)
@RequestMapping("/record")
public class RecordController {
	@Autowired
	private IRecordService recService;

	public RecordController() {
		System.out.println(" in ctor of " + getClass());
	}

	// add req handling methods to send all records to front end(Method: GET)
	@GetMapping
	public ResponseEntity<?> getAllRecordDetails() {
		System.out.println("in get all records");
		return ResponseEntity.ok(recService.getAllRecords());
	}

//	 add a req handling method to add a new record(Method: POST)
	@PostMapping
	public ResponseEntity<?> addRecordDetails(@RequestBody @Valid Record rec) {
		System.out.println("in add records " + rec);
		return ResponseEntity.ok(recService.addorUpdateRecordDetails(rec));
	}

	// add a req handling method to delete record details by id(Method: DELETE)
	@DeleteMapping("/{recId}")
	public ResponseEntity<?> deleteRecordDetails(@PathVariable int recId) {
		System.out.println("in del user details " + recId);
		return new ResponseEntity<>(recService.deleteRecordDetails(recId), HttpStatus.OK);
	}

	// add a req handling method to get select record details by id(Method: GET)
	@GetMapping("/{recId}")
	public ResponseEntity<?> getRecordDetails(@PathVariable int recId) {
		System.out.println("in get records details " + recId);
		return ResponseEntity.ok(recService.fetchRecordDetails(recId));
	}

	// add a req handling method to update the existing record details(Method: PUT)
	@PutMapping("/{recId}")
	public ResponseEntity<?> updateRecordDetails(@RequestBody Record r, @PathVariable int recId) {
		System.out.println("in update hospital details" + r);
		r.setId(recId);
		return new ResponseEntity<>(recService.addorUpdateRecordDetails(r), HttpStatus.CREATED);
	}

	@GetMapping("user/{uId}")
	public ResponseEntity<?> findRecordByUserID(@PathVariable int uId) {
		System.out.println("in get records by user id  " + uId);
		return ResponseEntity.ok(recService.findRecordsByUID(uId));
	}

}
