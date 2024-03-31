package com.pooja.donation.payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter

public class UserDto {
	private int id;

	@NotEmpty
	@Size(min = 4, message = "Username must be atleast four characters long")
	private String name;

	@NotEmpty
	private String type;

	@Email(message = "Invaid email address !!")
	private String email;

	@NotEmpty
	@Size(min = 5, max = 10, message = "Password must be atleast 5 characters and atmost 10 characters long")
	@Pattern(regexp = "(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$")
	private String password;

	@NotEmpty
	@Size(max = 100, message = "Address must be atmost 100 characters long")
	private String address;

//	@NotEmpty
//	@Size(min=10, max=10, message= "Invaid phone no !!")
	@NotEmpty(message = "Phone number must not be empty")
	@Pattern(regexp = "^(?:\\+91[\\s-]?)?[0-9]{10}$", message = "Invalid phone number")
	private String contact;

}
