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
@Table(name="Posts")
@NoArgsConstructor
@Getter
@Setter
public class Post {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int pid;
	
	@Column(name="Category",nullable= false)
	private String type;
	
	@Column(name="Description")
	private String desc;
	
	@Column(name="Post_Date",nullable= false)
	private Date date;
	
	private Donor donor;
}
