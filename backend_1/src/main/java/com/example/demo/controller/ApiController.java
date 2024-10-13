package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginResponse;
import com.example.demo.dto.SalesGroupBy;
import com.example.demo.dto.User;
import com.example.demo.service.SalesService;
import com.example.demo.socketio.UtilExternalNet;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import oracle.jdbc.proxy.annotation.Post;


// 향후 react, vue에서 접근시 crossdomain 문제 해결하기 위해 임시 처리
@CrossOrigin()
@RequestMapping("/api")
@RestController
public class ApiController {
	// 로그인 기능 추가 2024-10-11
	/**
	 * 전송 데이터
	 * { uid:"", upw:"" }
	 */
	@PostMapping("/login")
	public LoginResponse login(HttpServletRequest request, @RequestBody User user) {
		// JPA 생략, 아이디비번 더미로 고정해서 사용
		if( user.getUid().equals("a@a.com") && user.getUpw().equals("12341234") ) {
			// 세션방식으로 처리한다면, 리액트에서는 이 방식 사용 X
			HttpSession session = request.getSession();
			session.setAttribute("SESSION_SVR_KEY", user.getUid()); // 통상 해싱값등 사용
			// 클라이언트 브라우저 쿠키에 저장된다
			return LoginResponse.builder().code(1).uuid( user.getUid() + "-good" ).build();
		}
		// 로그인 실패
		return LoginResponse.builder().code(-1).uuid( user.getUid() + "-bad" ).build();
	}
	
	// 1. 서비스 DI
	@Autowired
	private SalesService salesService;
	// 2. sales 관련 집계 데이터를 응답하는 API를 제공하는 라우터,메소드구성 
	//    ~/api/sales, GET방식, swagger를 이용한 테스트
	// TODO #PORC2
	@GetMapping("/sales")
	@Tag(name="세일 데이터 집계", description = "세일 데이터 집계")
	@Operation(summary = "카데고리 개수에 맞춰 집계한 평균 판매가, 평균개수 조회", 
			   description = "카데고리 개수에 맞춰 집계한 평균 판매가, 평균개수 조회")
	public List<SalesGroupBy> sales() {
		// TODO #PORC7 쿼리 결과를 JSON 형태로 응답
		return salesService.getSalesGroupBy();
	}
	
	@Autowired
	private UtilExternalNet utilExternalNet;
	
	@GetMapping("/exchange")
	public String exchange() {
		//Map<String, String> requestHeaders = new HashMap<>();
		//String apiURL = "http://api.manana.kr/exchange/rate/KRW/JPY,USD,EUR.json";
        //String responseBody = utilExternalNet.get(apiURL,requestHeaders);        
        //System.out.println(responseBody);        
		//return responseBody;
		return "[{\"date\":\"2024-09-23 16:22:02\",\"name\":\"JPYKRW=X\",\"rate\":9.312075398151242,\"timestamp\":\"1727076122\"},{\"date\":\"2024-09-23 16:00:10\",\"name\":\"USDKRW=X\",\"rate\":1337.81,\"timestamp\":\"1727074810\"},{\"date\":\"2024-09-23 16:21:23\",\"name\":\"EURKRW=X\",\"rate\":1487.9434990546101,\"timestamp\":\"1727076083\"}]";
	}
}















