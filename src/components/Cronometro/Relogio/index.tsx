import React from "react"
import style from './Relogio.module.scss'

export default function Relogio(){
    return(
        //Fragment
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </>
    )
}