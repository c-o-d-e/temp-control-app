import React, { useState } from "react";

function App() {
    const [initialTemp, newTemp] = useState(10);
    const [initClass, newClass] = useState("circle-bg-cool");

    const addTemp = () => {
        const currentTemp = initialTemp + 1;
        if (currentTemp > 30) return;
        if (currentTemp >= 15) {
            newClass("circle-bg-hot");
        }
        newTemp(currentTemp);
    };
    const removeTemp = () => {
        const currentTemp = initialTemp - 1;
        if (currentTemp < 0) return;
        if (currentTemp < 15) {
            newClass("circle-bg-cool");
        }
        newTemp(currentTemp);
    };

    return (
        <main>
            <div className={`circle ${initClass}`}>
                <h1>{initialTemp}°C</h1>
            </div>
            <div className="button-wrapper">
                <button className="buttons" onClick={addTemp}>
                    +
                </button>
                <button className="buttons" onClick={removeTemp}>
                    -
                </button>
            </div>
        </main>
    );
}

export default App;
