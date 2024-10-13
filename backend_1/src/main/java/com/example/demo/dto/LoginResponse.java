/**
 * 로그인 결과를 응답할때 사용하는 DTO
 * { uuid:"해싱값-더미값", code:1|-1 }
 */
package com.example.demo.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class LoginResponse {
	private String uuid;
	private int code;
	@Builder
	public LoginResponse(String uuid, int code) {
		super();
		this.uuid = uuid;
		this.code = code;
	}	
}

