import React, { useState } from "react";

function App() {
    return (
        <main>
            <div className="circle">
                <h1>10°C</h1>
            </div>
            <div className="button-wrapper">
                <button className="buttons">+</button>
                <button className="buttons">-</button>
            </div>
        </main>
    );
}

export default App;
