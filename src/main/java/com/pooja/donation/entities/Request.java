package com.pooja.donation.entities;

import java.util.Date;

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
@Table(name="Requests")
@NoArgsConstructor
@Getter
@Setter
public class Request {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	public int reqId;
	
	@Column(name="Request_Date")
	public Date reqDate;
	
	@Column(name="Status")
	public String status;
}
