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
@Table(name="Users")
@NoArgsConstructor
@Getter
@Setter
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="User_name", nullable= false, length=100)
	private String name;
	
	@Column(name ="User_type", nullable= false)
	private String type;
	
	@Column(name="Email_id", nullable= false)
	private String email;
	
	@Column(name="Password", nullable= false)
	private String password;
	
	@Column(name="Address", nullable= false)
	private String address;
	
	@Column(name="contact", nullable= false,length=10)
	private String phone;
	
	@Column(name="Image_Name")
	private String user_Img;
	
	private Donor donor;
	
	private Receiver receiver;
	
	

}
