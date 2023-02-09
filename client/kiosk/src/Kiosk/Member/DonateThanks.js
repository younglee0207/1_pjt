import React from "react";
import styles from "./DonateThanks.module.css"
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function DonateThanks(props) {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const isnavigate = location.state.isnavigate
    const Locker = location.state.Locker
    const User = location.state.User
    
    console.log(isnavigate)
    console.log(Locker)
    console.log(User)
    const data = {isnavigate: isnavigate, Locker :Locker, User: User}

    const UrlMainClose = "server/90" //메인 보관함 닫기

    const onClickHandlerFinish = () => {
        axios.get(UrlMainClose, {
        })
        .then((response) => {
            navigate('/Finish')
        })
        .catch(function (error) {
            console.log(error)
        })
    }
    const onClickHandlerBarcodeRead =() => {
        navigate('/BarcodeRead', {state: data})
    }

    return (
        <div>
            <div className={styles.myImg}>
                    <div className={styles.buttonOne}>
                        <p className={styles.textAlign}>
                        기부해 주셔서 감사합니다
                        <br />
                        {}포인트가 적립 되었습니다
                        <br />
                        <br />
                        책을 추가 기부하시겠습니까?</p>
                        <button className={styles.buttonTwo} onClick={onClickHandlerFinish} >
                            처음화면
                        </button>
                        <button className={styles.buttonThree} onClick={onClickHandlerBarcodeRead}>
                            추가기부
                        </button>
                    </div>
            </div>
        </div>
        )
}

export default DonateThanks