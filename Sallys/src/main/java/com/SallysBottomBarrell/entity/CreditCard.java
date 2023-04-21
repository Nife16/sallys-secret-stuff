package com.SallysBottomBarrell.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="credit_card")
public class CreditCard {

    // ID lets you know its an id
    @Id
    // Column maps to the same name as the column name in the database, it is case sensitive
    @Column(name = "id")
    // This will configure your id to be auto generated, now you don't need a setter for your id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
    
    @Column(name = "name_on_card")
    private String nameOnCard;

    @Column(name = "expiration_date")
    private LocalDate expDate;
    
    @Column(name = "security_code")
    private Integer secCode;

    @Column(name = "card_number")
    private Long cardNumber;

    public CreditCard() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameOnCard() {
        return nameOnCard;
    }

    public void setNameOnCard(String nameOnCard) {
        this.nameOnCard = nameOnCard;
    }

    public LocalDate getExpDate() {
        return expDate;
    }

    public void setExpDate(LocalDate expDate) {
        this.expDate = expDate;
    }

    public Integer getSecCode() {
        return secCode;
    }

    public void setSecCode(Integer secCode) {
        this.secCode = secCode;
    }

    public Long getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(Long cardNumber) {
        this.cardNumber = cardNumber;
    }

    @Override
    public String toString() {
        return "CreditCard [id=" + id + ", nameOnCard=" + nameOnCard + ", expDate=" + expDate + ", secCode=" + secCode
                + ", cardNumber=" + cardNumber + "]";
    }
    
}
