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
@Table(name="Receivers")
@NoArgsConstructor
@Getter
@Setter
public class Receiver {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	public int rid;
	
	@Column(name="Domain", nullable= false)
	public String domain;
	
	@Column(name="Website_Link", nullable= false)
	public String webLink;
	
	@Column(name="Verified_Code", nullable= false)
	public String VerCode;
}







