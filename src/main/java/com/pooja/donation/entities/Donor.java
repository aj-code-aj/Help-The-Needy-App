package com.pooja.donation.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Donors")
@NoArgsConstructor
@Getter
@Setter
public class Donor {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int did;
	
	@Column(name="Donor_Type", nullable= false)
	private String dtype;
	
	@Column(name="Verified_Code", nullable=false)
	private String VerCode;
	
}
