import React, {FC} from "react";
import {MonoError} from "@mono/http-client";

const InlineError: FC<{ error: MonoError }> = ({error}) => {
    return <div className={'inline-error'}>Something went wrong :( <br/> {error.message}</div>
}

export default InlineError;
