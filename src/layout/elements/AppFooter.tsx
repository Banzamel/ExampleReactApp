import React from "react";
import {CFooter} from "@coreui/react";

const AppFooter = () => {
    return (
        <CFooter>
            <div>
                <a href="https://spolka.pl" target="_blank" rel="noopener noreferrer">
                    CoreUI
                </a>
                <span className="ms-1">&copy; 2025 Sp. z o.o.</span>
            </div>
            <div className="ms-auto">
                <span className="me-1">Powered by</span>
                <a
                    href="https://banzamel.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Rafal Polak &
                </a>
            </div>
        </CFooter>
    )
}

export default React.memo(AppFooter);
