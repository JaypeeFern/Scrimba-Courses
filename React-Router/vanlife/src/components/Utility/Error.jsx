import React from "react";
import { useRouteError } from "react-router-dom"

export default function Error() {


    /* -------------------------------------------------------------------------- */
    /*                   INVESTIGATE THIS PROBLEM IN THE FUTURE                   */
    /* -------------------------------------------------------------------------- */
    // for some reason useRouteError returns the generic error message instead of the custom error message I set in the api.js file
    // It must be a bug in the react-router-dom package because I am using the latest version while the author of the course is using an older version
    // const error = useRouteError()

    return (
        <div className="error--container">
            <div className="error--wrapper">
                <span className="error--header">Error 404</span>
            </div>
        </div>
    )
}