/**
 * sql 수행 결과를 받아줄 dto
 * 수행 결과를 1대 1로 받아줄 엔티티는 존재하지 않음 -> dto로 대체 처리
 * 만약 dto로 데이터가 입력되지 않으면, 
 * get+동일 컬럼명() 구성하여
 * 인터페이스를 구축(getter만 구현)하여 받아준다
 */
package com.example.demo.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

public interface SalesGroupByInterface {
	String getCategory();
	int getCnt();
	float getPrice();
	float getAmount();
	
}
