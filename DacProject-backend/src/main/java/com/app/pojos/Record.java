package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "records")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Record extends BaseEntity{
	// Record * --->1 User
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false) // fk id
//	@MapsId // works as record's pk as well as fk of user
	private User userId;
	private LocalDate recordDate;
	private String userDiagnosis;
	// Record * --->1 Doctor
	@ManyToOne // (fetch = FetchType.LAZY)
	@JoinColumn(name = "doc_id", nullable = false) // fk id
	private Doctor docId;

	public Record(LocalDate recordDate, String userDiagnosis) {
		super();
		this.recordDate = recordDate;
		this.userDiagnosis = userDiagnosis;
	}

}
