import React, {FC} from "react";
import {MonoError} from "@mono/http-client";

const ModalError: FC<{ error: MonoError }> = ({error}) => {
    return (
        <div className="cookiesContent" id="cookiesPopup">
            <button className="close">✖</button>
            <img src="https://www.flaticon.com/svg/static/icons/svg/2913/2913782.svg" alt="cookies-img"/>
            <p>{error.message}</p>
            <button className="accept">This is an error popup!</button>
        </div>
    )
};

export default ModalError;
