import React, {FC} from "react";
import {MonoError, UIErrorType} from "@mono/http-client";

const Error: FC<{error: MonoError}> = ({error}) => {

    if (error.type === UIErrorType.MODAL) {
        return <div style={{position: 'absolute', top: 100, left: 100}}>
            This is a popup :(
            <br/>
            {error.message}
        </div>
    } else {
       return <div style={{color: 'red'}}>Some standard error box = {error.message}</div>
    }
}

export default Error;
