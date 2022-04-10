package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender emailSender;

	public void sendEmailForNewRegistration(String email) {
		SimpleMailMessage message = new SimpleMailMessage();
		message.setFrom("digitalhealthidentity@gmail.com");
		message.setTo(email);
		message.setSubject(" Thank you for Registering with us!");
		message.setText(" Welcome to Digital Health ID Management System!!! Thank you for Registering with us! Please proceed to login page=> http://localhost:3000/login");
		emailSender.send(message);
	}

}
