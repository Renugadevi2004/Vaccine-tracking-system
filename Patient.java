package com.Patient.Patientdata;

import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "patientdetails")
public class Patient
{
 @Id
 private int id;
  private String patient;
 private String sourcecity;
  private String destinationcity;
 private String date1;
public int getId()
{
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getPatient() {
	return patient;
}
public void setPatient(String patient) {
	this.patient = patient;
}
public String getSourcecity() {
	return sourcecity;
}
public void setSourcecity(String sourcecity) {
	this.sourcecity = sourcecity;
}
public String getDestinationcity() {
	return destinationcity;
}
public void setDestinationcity(String destinationcity) {
	this.destinationcity = destinationcity;
}
public String getDate1() {
	return date1;
}
public void setDate1(String date1) {
	this.date1 = date1;
}
}