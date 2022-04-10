//package com.app.service;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//
//import com.app.dto.LoginResponse;
//
//@SpringBootTest
//class TestService {
//	@Autowired
//	private ILoginService service;
//
//	@Test
//	void testAuthenticateLogin() {
//		LoginResponse authenticateLogin = service.authenticateLogin("Gaurav", "123");
//		System.out.println(authenticateLogin);
//		assertEquals(1,authenticateLogin.getUserName());
//	}
//	
//
//}
