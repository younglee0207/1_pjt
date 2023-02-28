package com.ssafy.townbook.model.dto;

import com.ssafy.townbook.model.entity.DetailLocker;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DetailLockerDto {
    
    private Long   detailLockerNo;
    private Long   detailLockerNoInLocker;
    private String bookInDetailLocker;
    
    @Builder
    public DetailLockerDto(DetailLocker detailLocker) {
        
        this.detailLockerNo         = detailLocker.getDetailLockerNo();
        this.detailLockerNoInLocker = detailLocker.getDetailLockerNoInLocker();
        this.bookInDetailLocker     = detailLocker.getBookInDetailLocker();
    }
}
