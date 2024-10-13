/**
 * 리액트 유저가 로그인시 { uid:"", upw:"" } 데이터를 전송
 * 이 데이터를 받는 그릇용도
 */
package com.example.demo.dto;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class User {
	private String uid;
	private String upw;
}
