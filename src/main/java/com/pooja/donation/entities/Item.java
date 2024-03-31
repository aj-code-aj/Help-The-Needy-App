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
@Table(name="Items")
@NoArgsConstructor
@Getter
@Setter
public class Item {

	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	public int itemId;
	
	
    @Column(name="Item_Name", nullable= false)
	public String iName;
	
    
    @Column(name="Image_Name")
	public String imgName;
	
    
    @Column(name="Item_Type", nullable= false)
	public String type;
	
    
    @Column(name="Quantity")
	public String qnty;
}
